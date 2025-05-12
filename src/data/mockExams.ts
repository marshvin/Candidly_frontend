
import { Exam } from '../types/exam';

export const mockExams: Exam[] = [
  {
    id: "1",
    title: "JavaScript Fundamentals",
    description: "Test your knowledge of JavaScript basics including variables, functions, and control flow.",
    duration: 30,
    difficulty: "Easy",
    category: "Web Development",
    questions: [
      {
        id: "js1",
        type: "multiple-choice",
        text: "Which of the following is NOT a primitive data type in JavaScript?",
        options: [
          { id: "a", text: "String" },
          { id: "b", text: "Number" },
          { id: "c", text: "Object" },
          { id: "d", text: "Boolean" }
        ],
        correctAnswer: "c",
        points: 10
      },
      {
        id: "js2",
        type: "multiple-choice",
        text: "What will be the output of the following code?\n\nconst x = 10;\nlet y = 5;\ny += x;\nconsole.log(y);",
        options: [
          { id: "a", text: "5" },
          { id: "b", text: "10" },
          { id: "c", text: "15" },
          { id: "d", text: "Error" }
        ],
        correctAnswer: "c",
        points: 10
      },
      {
        id: "js3",
        type: "coding",
        text: "Write a function that takes an array of numbers and returns the sum of all elements.",
        code: "function sumArray(numbers) {\n  // Your code here\n}",
        correctAnswer: "function sumArray(numbers) {\n  return numbers.reduce((sum, num) => sum + num, 0);\n}",
        points: 20
      }
    ],
    totalPoints: 40,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=350"
  },
  {
    id: "2",
    title: "React Framework Essentials",
    description: "Demonstrate your understanding of React components, state management, and hooks.",
    duration: 45,
    difficulty: "Medium",
    category: "Web Development",
    questions: [
      {
        id: "react1",
        type: "multiple-choice",
        text: "What hook would you use to perform side effects in a functional component?",
        options: [
          { id: "a", text: "useState" },
          { id: "b", text: "useEffect" },
          { id: "c", text: "useContext" },
          { id: "d", text: "useReducer" }
        ],
        correctAnswer: "b",
        points: 10
      },
      {
        id: "react2",
        type: "multiple-choice",
        text: "Which of the following is NOT a rule of React hooks?",
        options: [
          { id: "a", text: "Only call hooks at the top level" },
          { id: "b", text: "Only call hooks from React functions" },
          { id: "c", text: "Hooks must be named starting with 'use'" },
          { id: "d", text: "Hooks can be conditional" }
        ],
        correctAnswer: "d",
        points: 10
      },
      {
        id: "react3",
        type: "coding",
        text: "Create a simple counter component using React hooks.",
        code: "function Counter() {\n  // Your code here\n}",
        correctAnswer: "function Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}",
        points: 30
      }
    ],
    totalPoints: 50,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=350"
  },
  {
    id: "3",
    title: "Data Structures & Algorithms",
    description: "Test your problem-solving skills with common algorithms and data structures.",
    duration: 60,
    difficulty: "Hard",
    category: "Computer Science",
    questions: [
      {
        id: "dsa1",
        type: "multiple-choice",
        text: "What is the time complexity of binary search?",
        options: [
          { id: "a", text: "O(1)" },
          { id: "b", text: "O(log n)" },
          { id: "c", text: "O(n)" },
          { id: "d", text: "O(n log n)" }
        ],
        correctAnswer: "b",
        points: 10
      },
      {
        id: "dsa2",
        type: "multiple-choice",
        text: "Which data structure operates on a LIFO (Last In, First Out) principle?",
        options: [
          { id: "a", text: "Queue" },
          { id: "b", text: "Stack" },
          { id: "c", text: "Linked List" },
          { id: "d", text: "Tree" }
        ],
        correctAnswer: "b",
        points: 10
      },
      {
        id: "dsa3",
        type: "coding",
        text: "Implement a function to check if a string is a palindrome (reads the same forward and backward).",
        code: "function isPalindrome(str) {\n  // Your code here\n}",
        correctAnswer: "function isPalindrome(str) {\n  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');\n  return cleanStr === cleanStr.split('').reverse().join('');\n}",
        points: 20
      },
      {
        id: "dsa4",
        type: "coding",
        text: "Implement a function to find the first non-repeating character in a string.",
        code: "function firstNonRepeatingChar(str) {\n  // Your code here\n}",
        correctAnswer: "function firstNonRepeatingChar(str) {\n  const charCount = {};\n  \n  for (const char of str) {\n    charCount[char] = (charCount[char] || 0) + 1;\n  }\n  \n  for (const char of str) {\n    if (charCount[char] === 1) {\n      return char;\n    }\n  }\n  \n  return null;\n}",
        points: 30
      }
    ],
    totalPoints: 70,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=350"
  }
];
