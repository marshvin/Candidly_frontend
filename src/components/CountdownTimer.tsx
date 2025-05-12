
import React, { useEffect, useState } from 'react';
import { Progress } from "@/components/ui/progress";
import { AlertCircle, Clock } from 'lucide-react';

interface CountdownTimerProps {
  duration: number; // in minutes
  onTimeUp: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration * 60); // convert to seconds
  const [isWarning, setIsWarning] = useState(false);
  
  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }
    
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);
  
  useEffect(() => {
    // Warning when less than 20% time remaining
    if (timeLeft <= duration * 60 * 0.2) {
      setIsWarning(true);
    }
  }, [timeLeft, duration]);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };
  
  const progressPercentage = (timeLeft / (duration * 60)) * 100;
  
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Clock className={`mr-2 h-5 w-5 ${isWarning ? 'text-red-500 animate-pulse' : 'text-gray-600'}`} />
          <span className={`font-mono text-lg font-semibold ${isWarning ? 'text-red-500' : 'text-gray-700'}`}>
            {formatTime(timeLeft)}
          </span>
        </div>
        
        {isWarning && (
          <div className="flex items-center text-red-500">
            <AlertCircle className="mr-1 h-4 w-4" />
            <span className="text-sm font-medium">Time running out!</span>
          </div>
        )}
      </div>
      
      <Progress 
        value={progressPercentage} 
        className={`h-2 ${isWarning ? 'bg-red-100' : 'bg-gray-100'}`} 
        indicatorClassName={isWarning ? 'bg-red-500' : 'bg-skillforge-500'} 
      />
    </div>
  );
};

export default CountdownTimer;
