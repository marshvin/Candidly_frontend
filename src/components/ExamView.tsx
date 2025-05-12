
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockExams } from '../data/mockExams';
import { UserAnswer } from '../types/exam';
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import QuestionNav from './QuestionNav';
import MultipleChoiceQuestion from './questions/MultipleChoiceQuestion';
import CodingQuestion from './questions/CodingQuestion';

const ExamView = () => {
  const { examId } = useParams<{ examId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const exam = mockExams.find(e => e.id === examId);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, UserAnswer>>({});
  const [timeUp, setTimeUp] = useState(false);
  const [startTime] = useState(new Date());
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  
  const currentQuestion = exam?.questions[currentQuestionIndex];
  
  const answeredQuestionsMap: Record<string, boolean> = {};
  exam?.questions.forEach((_, index) => {
    if (exam.questions[index] && userAnswers[exam.questions[index].id]) {
      answeredQuestionsMap[index] = true;
    } else {
      answeredQuestionsMap[index] = false;
    }
  });
  
  useEffect(() => {
    if (!exam) {
      navigate('/exams');
      toast({
        title: "Exam not found",
        description: "The exam you're looking for doesn't exist.",
        variant: "destructive",
      });
    }
  }, [exam, navigate, toast]);
  
  const handleNext = () => {
    if (currentQuestionIndex < (exam?.questions.length || 0) - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleAnswerChange = (answer: string | string[]) => {
    if (!currentQuestion) return;
    
    setUserAnswers({
      ...userAnswers,
      [currentQuestion.id]: {
        questionId: currentQuestion.id,
        answer
      }
    });
  };
  
  const handleTimeUp = () => {
    setTimeUp(true);
    toast({
      title: "Time's up!",
      description: "Your exam time has ended. Please submit your answers.",
      variant: "destructive",
    });
  };
  
  const handleSubmit = () => {
    if (Object.keys(userAnswers).length < (exam?.questions.length || 0)) {
      setShowSubmitConfirm(true);
      return;
    }
    
    submitExam();
  };
  
  const submitExam = () => {
    const endTime = new Date();
    const timeTaken = Math.round((endTime.getTime() - startTime.getTime()) / 1000);
    
    if (!exam) return;
    
    // Calculate basic result
    const userAnswersArray = Object.values(userAnswers);
    
    // Store results in localStorage for demo
    const result = {
      examId: exam.id,
      timeTaken,
      submittedAt: new Date(),
      answers: userAnswersArray,
      totalQuestions: exam.questions.length,
      // These are just placeholders - in a real app, scoring would be done on the server
      score: 0,
      maxScore: exam.totalPoints,
      passingScore: exam.totalPoints * 0.7,
      correctAnswers: 0,
    };
    
    localStorage.setItem(`exam_result_${exam.id}`, JSON.stringify(result));
    
    navigate(`/results/${exam.id}`);
  };
  
  if (!exam || !currentQuestion) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-900">{exam.title}</h1>
            <div className="text-sm text-gray-500">
              Question {currentQuestionIndex + 1} of {exam.questions.length}
            </div>
          </div>
          
          <CountdownTimer 
            duration={exam.duration} 
            onTimeUp={handleTimeUp} 
          />
        </div>
        
        {timeUp && (
          <Alert className="mb-6" variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Time's Up!</AlertTitle>
            <AlertDescription>
              Your exam time has ended. Please review and submit your answers.
            </AlertDescription>
          </Alert>
        )}
        
        {showSubmitConfirm && (
          <Alert className="mb-6" variant="warning">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Incomplete Exam</AlertTitle>
            <AlertDescription className="flex flex-col gap-2">
              <p>You haven't answered all questions. Are you sure you want to submit?</p>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" onClick={() => setShowSubmitConfirm(false)}>
                  Continue Exam
                </Button>
                <Button variant="destructive" onClick={submitExam}>
                  Submit Anyway
                </Button>
              </div>
            </AlertDescription>
          </Alert>
        )}
        
        {currentQuestion.type === 'multiple-choice' && (
          <MultipleChoiceQuestion
            question={currentQuestion}
            userAnswer={userAnswers[currentQuestion.id]?.answer as string || ''}
            onAnswerChange={(answer) => handleAnswerChange(answer)}
          />
        )}
        
        {currentQuestion.type === 'coding' && (
          <CodingQuestion
            question={currentQuestion}
            userAnswer={userAnswers[currentQuestion.id]?.answer as string || ''}
            onAnswerChange={(answer) => handleAnswerChange(answer)}
          />
        )}
        
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
          
          {currentQuestionIndex === exam.questions.length - 1 ? (
            <Button 
              onClick={handleSubmit}
              className="bg-skillforge-600 hover:bg-skillforge-700"
            >
              <CheckCircle2 className="mr-2 h-4 w-4" /> Submit Exam
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              className="bg-skillforge-600 hover:bg-skillforge-700"
            >
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      
      <div className="lg:col-span-1">
        <div className="space-y-6">
          <QuestionNav
            totalQuestions={exam.questions.length}
            currentQuestion={currentQuestionIndex}
            answeredQuestions={answeredQuestionsMap}
            onNavigate={setCurrentQuestionIndex}
          />
          
          <div className="border rounded-lg p-4 bg-white">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Exam Progress</h3>
            <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
              <span>Questions Answered</span>
              <span className="font-medium">{Object.keys(userAnswers).length} / {exam.questions.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-green-500 h-2.5 rounded-full" 
                style={{ width: `${(Object.keys(userAnswers).length / exam.questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <Button 
            onClick={handleSubmit}
            className="w-full bg-skillforge-600 hover:bg-skillforge-700"
          >
            <CheckCircle2 className="mr-2 h-4 w-4" /> Submit Exam
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExamView;
