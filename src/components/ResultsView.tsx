
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Home, RotateCcw } from 'lucide-react';
import ResultsSummary from './ResultsSummary';
import { mockExams } from '../data/mockExams';
import { TestResult } from '../types/exam';

const ResultsView = () => {
  const { examId } = useParams<{ examId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [result, setResult] = useState<TestResult | null>(null);
  const exam = mockExams.find(e => e.id === examId);
  
  useEffect(() => {
    // In a real app, we would fetch this from an API
    // For demo purposes, we're getting it from localStorage
    const storedResult = localStorage.getItem(`exam_result_${examId}`);
    
    if (storedResult) {
      const parsedResult = JSON.parse(storedResult);
      
      // Mock some results for the demo
      // In a real app, this would be calculated on the server
      const mockScore = Math.floor(Math.random() * (exam?.totalPoints || 100));
      const mockCorrectAnswers = Math.floor(Math.random() * (exam?.questions.length || 10));
      
      setResult({
        ...parsedResult,
        score: mockScore,
        correctAnswers: mockCorrectAnswers
      });
    } else {
      toast({
        title: "No results found",
        description: "We couldn't find any results for this exam.",
        variant: "destructive",
      });
      navigate('/exams');
    }
  }, [examId, navigate, toast, exam]);
  
  if (!result || !exam) {
    return <div>Loading...</div>;
  }
  
  const handleRetakeExam = () => {
    navigate(`/exams/${examId}`);
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{exam.title} - Results</h1>
        <p className="text-gray-600 mt-1">{exam.description}</p>
      </div>
      
      <ResultsSummary result={result} />
      
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Button variant="outline" onClick={() => navigate('/exams')}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Exams
        </Button>
        
        <Button variant="outline" onClick={handleRetakeExam}>
          <RotateCcw className="mr-2 h-4 w-4" /> Retake Exam
        </Button>
        
        <Button 
          className="bg-skillforge-600 hover:bg-skillforge-700"
          onClick={() => navigate('/')}
        >
          <Home className="mr-2 h-4 w-4" /> Go Home
        </Button>
      </div>
    </div>
  );
};

export default ResultsView;
