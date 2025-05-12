
import React from 'react';
import { Exam } from '../types/exam';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Star, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ExamCardProps {
  exam: Exam;
}

const ExamCard: React.FC<ExamCardProps> = ({ exam }) => {
  const navigate = useNavigate();

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="skillforge-card overflow-hidden h-full flex flex-col">
      {exam.image && (
        <div className="h-48 overflow-hidden">
          <img
            src={exam.image}
            alt={exam.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{exam.title}</CardTitle>
          <Badge className={getDifficultyColor(exam.difficulty)}>
            {exam.difficulty}
          </Badge>
        </div>
        <CardDescription className="text-gray-600">
          {exam.category}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700 line-clamp-3">{exam.description}</p>
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">{exam.duration} mins</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Star className="h-4 w-4 mr-1" />
            <span className="text-sm">{exam.totalPoints} points</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="h-4 w-4 mr-1" />
            <span className="text-sm">{exam.questions.length} questions</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button 
          className="skillforge-btn-primary w-full"
          onClick={() => navigate(`/exams/${exam.id}`)}
        >
          Start Exam
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExamCard;
