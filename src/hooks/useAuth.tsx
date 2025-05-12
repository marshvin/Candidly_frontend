import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthResponse, LoginParams, RegisterParams, authApi } from '../lib/api';
import { useToast } from './use-toast';

interface AuthContextType {
  user: AuthResponse['user'] | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  login: (credentials: LoginParams) => Promise<void>;
  register: (userData: RegisterParams) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthResponse['user'] | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is already logged in
    const storedToken = localStorage.getItem('authToken');
    
    if (storedToken) {
      setToken(storedToken);
      fetchCurrentUser();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchCurrentUser = async () => {
    try {
      setLoading(true);
      const { user } = await authApi.getCurrentUser();
      setUser(user);
    } catch (err) {
      // If token is invalid, clear it
      localStorage.removeItem('authToken');
      setToken(null);
      setError('Session expired. Please log in again.');
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials: LoginParams) => {
    try {
      setLoading(true);
      const { user, token } = await authApi.login(credentials);
      
      // Store token and user info
      localStorage.setItem('authToken', token);
      setToken(token);
      setUser(user);
      setError(null);
      
      toast({
        title: 'Success',
        description: `Welcome back, ${user.name}!`,
      });
    } catch (err: any) {
      setError(err.message || 'Failed to login. Please try again.');
      toast({
        variant: 'destructive',
        title: 'Login failed',
        description: err.message || 'Invalid credentials. Please try again.',
      });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData: RegisterParams) => {
    try {
      setLoading(true);
      const { user, token } = await authApi.register(userData);
      
      // Store token and user info
      localStorage.setItem('authToken', token);
      setToken(token);
      setUser(user);
      setError(null);
      
      toast({
        title: 'Account created successfully',
        description: `Welcome to Candidly, ${user.name}!`,
      });
    } catch (err: any) {
      setError(err.message || 'Registration failed. Please try again.');
      toast({
        variant: 'destructive',
        title: 'Registration failed',
        description: err.message || 'Please check your information and try again.',
      });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await authApi.logout();
    } catch (err) {
      // Ignore errors on logout
    } finally {
      // Always clear local state even if API call fails
      localStorage.removeItem('authToken');
      setToken(null);
      setUser(null);
      setLoading(false);
      toast({
        title: 'Logged out successfully',
      });
    }
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        error,
        login,
        register,
        logout,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default useAuth; 