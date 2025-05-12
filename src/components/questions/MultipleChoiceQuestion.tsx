
import React from 'react';
import { Question } from '../../types/exam';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface MultipleChoiceQuestionProps {
  question: Question;
  userAnswer: string;
  onAnswerChange: (answer: string) => void;
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
  question,
  userAnswer,
  onAnswerChange,
}) => {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">{question.text}</CardTitle>
        {question.code && (
          <CardDescription className="mt-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <pre className="text-sm font-mono whitespace-pre-wrap">{question.code}</pre>
            </div>
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <RadioGroup value={userAnswer} onValueChange={onAnswerChange}>
          {question.options?.map((option) => (
            <div key={option.id} className="flex items-center space-x-2 py-2">
              <RadioGroupItem value={option.id} id={`option-${option.id}`} />
              <Label
                htmlFor={`option-${option.id}`}
                className="text-base cursor-pointer"
              >
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default MultipleChoiceQuestion;
