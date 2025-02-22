import { Problem } from '../types/problem';

// Generate small single digit (1-4) for categories A and B
const generateSmallDigit = () => Math.floor(Math.random() * 4) + 1; // 1 to 4

// Generate medium single digit (3-6) for categories C and D
const generateMediumDigit = () => Math.floor(Math.random() * 4) + 3; // 3 to 6

// Generate regular single digit (1-9) for other categories
const generateSingleDigit = () => Math.floor(Math.random() * 9) + 1;

const generateMixedSmallDigit = () => {
  const num = generateSmallDigit();
  return Math.random() > 0.5 ? num : -num;
};

const generateMixedMediumDigit = () => {
  const num = generateMediumDigit();
  return Math.random() > 0.5 ? num : -num;
};

const generateMixedSingleDigit = () => {
  const num = generateSingleDigit();
  return Math.random() > 0.5 ? num : -num;
};

// Modify ensureMixedSigns to keep first number positive
const ensureMixedSigns = (numbers: number[]): number[] => {
  const result = [...numbers];
  // Always make first number positive
  result[0] = Math.abs(result[0]);
  
  // Only mix signs for the remaining numbers (index 1 onwards)
  let positiveCount = result.slice(1).filter(n => n > 0).length;
  let negativeCount = result.slice(1).filter(n => n < 0).length;

  // Ensure at least 2 positive and 2 negative numbers in the remaining numbers
  for (let i = 1; i < result.length; i++) {
    if (positiveCount < 2 && result[i] < 0) {
      result[i] = Math.abs(result[i]);
      positiveCount++;
      negativeCount--;
    } else if (negativeCount < 2 && result[i] > 0 && positiveCount > 2) {
      result[i] = -Math.abs(result[i]);
      negativeCount++;
      positiveCount--;
    }
  }
  return result;
};

const ensureValidSubtraction = (numbers: number[]): number[] => {
  let result = [...numbers];
  for (let i = 1; i < result.length; i++) {
    if (result[i] < 0) {
      if (Math.abs(result[i]) > Math.abs(result[i-1])) {
        const temp = Math.abs(result[i-1]);
        result[i-1] = Math.abs(result[i]);
        result[i] = -temp;
      }
    }
  }
  return result;
};

const calculateResult = (numbers: number[]): number => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

const generateProblemForCategory = (category: string, questionNumber: number): Problem => {
  let baseNumber: number;
  let rows: number[];
  let correctAnswer: number;
  let attempts = 0;
  const maxAttempts = 10;

  switch (category) {
    case 'A':
      do {
        baseNumber = Math.abs(generateSmallDigit()); // Ensure positive
        rows = Array(4).fill(0).map(() => generateMixedSmallDigit());
        let numbers = ensureMixedSigns([baseNumber, ...rows]);
        numbers = ensureValidSubtraction(numbers);
        baseNumber = numbers[0]; // Will always be positive
        rows = numbers.slice(1);
        correctAnswer = Math.abs(calculateResult(numbers)) % 10;
        attempts++;
      } while ((correctAnswer === 0 || correctAnswer > 9) && attempts < maxAttempts);
      break;

    case 'B':
      do {
        baseNumber = Math.abs(generateSmallDigit()); // Ensure positive
        rows = Array(4).fill(0).map(() => generateMixedSmallDigit());
        let numbers = ensureMixedSigns([baseNumber, ...rows]);
        numbers = ensureValidSubtraction(numbers);
        baseNumber = numbers[0]; // Will always be positive
        rows = numbers.slice(1);
        correctAnswer = Math.abs(calculateResult(numbers)) % 10;
        attempts++;
      } while ((correctAnswer === 0 || correctAnswer > 9) && attempts < maxAttempts);
      break;

    case 'C':
      do {
        baseNumber = Math.abs(generateMediumDigit()); // Ensure positive
        rows = Array(4).fill(0).map(() => generateMixedMediumDigit());
        let numbers = ensureMixedSigns([baseNumber, ...rows]);
        numbers = ensureValidSubtraction(numbers);
        baseNumber = numbers[0]; // Will always be positive
        rows = numbers.slice(1);
        correctAnswer = Math.abs(calculateResult(numbers));
        attempts++;
      } while ((correctAnswer < 10 || correctAnswer > 30) && attempts < maxAttempts);
      break;

    case 'D':
      do {
        baseNumber = Math.abs(generateMediumDigit()); // Ensure positive
        rows = Array(4).fill(0).map(() => generateMixedMediumDigit());
        let numbers = ensureMixedSigns([baseNumber, ...rows]);
        numbers = ensureValidSubtraction(numbers);
        baseNumber = numbers[0]; // Will always be positive
        rows = numbers.slice(1);
        correctAnswer = Math.abs(calculateResult(numbers));
        attempts++;
      } while ((correctAnswer < 20 || correctAnswer > 50) && attempts < maxAttempts);
      break;

    case 'E':
      do {
        // Generate base number between 10 and 35 (always positive)
        baseNumber = Math.floor(Math.random() * 26) + 10;

        // Generate 4 single-digit numbers (1-9)
        rows = Array(4).fill(0).map(() => {
          const num = Math.floor(Math.random() * 9) + 1;
          return Math.random() > 0.5 ? num : -num;
        });

        // Ensure mix of positive and negative numbers in rows
        let numbers = [baseNumber, ...rows];
        
        // Make sure first number stays positive and mix other signs
        numbers = ensureMixedSigns(numbers);
        
        // Ensure valid subtraction
        numbers = ensureValidSubtraction(numbers);
        baseNumber = numbers[0]; // Will always be positive
        rows = numbers.slice(1);
        
        correctAnswer = Math.abs(calculateResult(numbers));
        attempts++;
      } while ((correctAnswer < 10 || correctAnswer > 99) && attempts < maxAttempts);
      break;
  }

  return {
    id: questionNumber,
    baseNumber,
    rows,
    correctAnswer
  };
};

export const generateProblems = (category: string): Problem[] => {
  const problems: Problem[] = [];
  for (let i = 1; i <= 100; i++) {
    problems.push(generateProblemForCategory(category, i));
  }
  return problems;
};

// Update the formatNumber function to not add + symbol
export const formatNumber = (num: number): string => {
  return `${num}`; // Simply convert number to string without adding + symbol
};