// src/components/CalculationResults.tsx
import { Card } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const ConversionRate = 0.27; // Example conversion rate from AED to USD

const CalculationResults: React.FC<{ results: any; currency: 'AED' | 'USD' }> = ({ results, currency }) => {
  const convert = (amount: number) => (currency === 'AED' ? amount : amount * ConversionRate);

  return (
    <div className={styles.calculationResults}>
      {results.map((result: any, index: number) => (
        <div className={styles.cardContainer} key={index}>
          <Card title={`Plan: ${result.plan}`}>
            <p>Tenure: {result.tenure} months</p>
            <p>
              Downpayment: {convert(result.downpayment).toFixed(2)} {currency}
            </p>
            <p>
              Instalments: {convert(result.installments).toFixed(2)} {currency}/month
            </p>
            <p>
              Move-In Payment: {convert(result.moveInPayment).toFixed(2)} {currency}
            </p>
            <p>
              Total Cost: {convert(result.totalCost).toFixed(2)} {currency}
            </p>
          </Card>
        </div>
      ))}
    </div>
  );
};

export { CalculationResults };
