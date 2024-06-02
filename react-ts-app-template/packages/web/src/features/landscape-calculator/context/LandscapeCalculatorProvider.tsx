import React, { createContext, useCallback, useState } from 'react';

type TValidate = {
  validate: boolean;
  step: number;
};
interface LandscapeCalculatorContextProps {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
  currency: 'AED' | 'USD';
  setCurrency: React.Dispatch<React.SetStateAction<'AED' | 'USD'>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  results: any;
  setResults: React.Dispatch<React.SetStateAction<any>>;
  formCompletionPercentage: number;
  handleNextStep: (data?: any) => void;
  handlePrevStep: (data?: any) => void;
  validateForm: TValidate;
  handleValidateForm: (validatePayload: TValidate) => void;
}

const LandscapeCalculatorContext = createContext<LandscapeCalculatorContextProps | undefined>(undefined);

const LandscapeCalculatorProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<any>({ size: 25, budget: 'economic' });
  const [currency, setCurrency] = useState<'AED' | 'USD'>('AED');
  const [step, setStep] = useState(1);
  const [results, setResults] = useState<any>();
  const [validateForm, setValidateForm] = useState<TValidate>({
    validate: false,
    step: 1,
  });

  const formCompletionPercentage = ((step - 1) / 5) * 100;

  const handleNextStep = useCallback(
    (data?: any) => {
      data && setData((prev: any) => ({ ...prev, ...data }));
      setStep(step + 1);
    },
    [step],
  );

  const handlePrevStep = useCallback(
    (data?: any) => {
      data && setData((prev: any) => ({ ...prev, ...data }));
      step > 1 && setStep(step - 1);
    },
    [step],
  );

  const handleValidateForm = (validatePayload: TValidate) => {
    setValidateForm(validatePayload);
    setStep(validatePayload?.step);
  };

  return (
    <LandscapeCalculatorContext.Provider
      value={{
        data,
        currency,
        step,
        results,
        formCompletionPercentage,
        validateForm,
        setData,
        setCurrency,
        setStep,
        setResults,
        handleNextStep,
        handlePrevStep,
        handleValidateForm,
      }}
    >
      {children}
    </LandscapeCalculatorContext.Provider>
  );
};

export { LandscapeCalculatorContext, LandscapeCalculatorProvider };
