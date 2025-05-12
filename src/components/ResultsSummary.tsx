
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, XCircle } from 'lucide-react';
import { TestResult } from '../types/exam';

interface ResultsSummaryProps {
  result: TestResult;
}

const ResultsSummary: React.FC<ResultsSummaryProps> = ({ result }) => {
  const scorePercentage = (result.score / result.maxScore) * 100;
  const isPassing = result.score >= result.passingScore;
  
  // Format time (seconds) to minutes:seconds
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };
  
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-2xl">Exam Results</CardTitle>
        <CardDescription>
          Review your performance on this assessment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-4 bg-gray-50 rounded-full mb-4">
              {isPassing ? (
                <CheckCircle className="h-12 w-12 text-green-500" />
              ) : (
                <XCircle className="h-12 w-12 text-red-500" />
              )}
            </div>
            <h2 className="text-3xl font-bold">
              {scorePercentage.toFixed(1)}%
            </h2>
            <p className={`text-sm font-medium ${isPassing ? 'text-green-600' : 'text-red-600'}`}>
              {isPassing ? 'Passed' : 'Failed'}
            </p>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span className="font-medium">Score</span>
                <span>{result.score} / {result.maxScore} points</span>
              </div>
              <Progress 
                value={scorePercentage} 
                className="h-2" 
                indicatorClassName={isPassing ? 'bg-green-500' : 'bg-red-500'} 
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 text-gray-700 mb-1">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">Correct Answers</span>
                </div>
                <p className="text-2xl font-bold">
                  {result.correctAnswers} / {result.totalQuestions}
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 text-gray-700 mb-1">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">Time Taken</span>
                </div>
                <p className="text-2xl font-bold">{formatTime(result.timeTaken)}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsSummary;
