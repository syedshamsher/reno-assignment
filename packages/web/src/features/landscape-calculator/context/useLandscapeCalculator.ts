import { useContext } from 'react';
import { LandscapeCalculatorContext } from './LandscapeCalculatorProvider';

const useLandscapeCalculator = () => {
  const context = useContext(LandscapeCalculatorContext);
  if (!context) {
    throw new Error('useLandscapeCalculator must be used within a LandscapeCalculatorProvider');
  }
  return context;
};

export { useLandscapeCalculator };
