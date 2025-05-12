
import React, { useState } from 'react';
import { Question } from '../../types/exam';
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface CodingQuestionProps {
  question: Question;
  userAnswer: string;
  onAnswerChange: (answer: string) => void;
}

const CodingQuestion: React.FC<CodingQuestionProps> = ({
  question,
  userAnswer,
  onAnswerChange,
}) => {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">{question.text}</CardTitle>
        <CardDescription className="mt-2 text-gray-600">
          Write your solution in the code editor below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-50 p-4 rounded-md mb-4">
          <pre className="text-sm font-mono whitespace-pre-wrap">{question.code}</pre>
        </div>
        <Textarea
          value={userAnswer || question.code || ''}
          onChange={(e) => onAnswerChange(e.target.value)}
          placeholder="Write your solution here..."
          className="min-h-[200px] font-mono text-sm"
        />
      </CardContent>
    </Card>
  );
};

export default CodingQuestion;
