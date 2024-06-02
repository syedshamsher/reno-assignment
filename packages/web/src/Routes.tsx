import { Routes as BaseRoutes, Route } from 'react-router-dom';
import { CalculatorPage, Dashboard, LandscapeCalculatorProvider } from './features';

type Props = {};

const Routes = (props: Props) => {
  return (
    <BaseRoutes>
      <Route index element={<Dashboard />} />
      <Route
        path="landscape-calculator"
        element={
          <LandscapeCalculatorProvider>
            <CalculatorPage />
          </LandscapeCalculatorProvider>
        }
      />
    </BaseRoutes>
  );
};

export { Routes };
