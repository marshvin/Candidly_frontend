
import React from 'react';
import { cn } from '@/lib/utils';

interface QuestionNavProps {
  totalQuestions: number;
  currentQuestion: number;
  answeredQuestions: Record<string, boolean>;
  onNavigate: (index: number) => void;
}

const QuestionNav: React.FC<QuestionNavProps> = ({
  totalQuestions,
  currentQuestion,
  answeredQuestions,
  onNavigate,
}) => {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Question Navigation</h3>
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: totalQuestions }, (_, i) => (
          <button
            key={i}
            onClick={() => onNavigate(i)}
            className={cn(
              "flex items-center justify-center h-10 w-10 rounded-md text-sm font-medium transition-colors",
              currentQuestion === i
                ? "bg-skillforge-600 text-white ring-2 ring-skillforge-200"
                : answeredQuestions[i]
                ? "bg-green-100 text-green-800 hover:bg-green-200"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
            aria-label={`Go to question ${i + 1}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionNav;
