
export type QuestionType = 'multiple-choice' | 'coding' | 'short-answer';

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  code?: string;
  options?: Option[];
  correctAnswer?: string | string[];
  points: number;
}

export interface Exam {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  questions: Question[];
  totalPoints: number;
  image?: string;
}

export interface UserAnswer {
  questionId: string;
  answer: string | string[];
}

export interface TestResult {
  examId: string;
  score: number;
  maxScore: number;
  passingScore: number;
  timeTaken: number; // in seconds
  submittedAt: Date;
  answers: UserAnswer[];
  correctAnswers: number;
  totalQuestions: number;
}
