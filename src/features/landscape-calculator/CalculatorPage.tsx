import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Layout, Progress, ProgressProps, Switch, Tabs } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GrassImage from '../../resources/images/artificial-grass.svg';
import AdditionalImage from '../../resources/images/pergolas.svg';
import LeisureImage from '../../resources/images/pool.svg';
import PavingImage from '../../resources/images/tiles.svg';
import LandImage from '../../resources/images/total-size .svg';
import TreesImage from '../../resources/images/trees.svg';
import UtilitiesImage from '../../resources/images/utilities.svg';

import {
  AdditionalFeaturesWidget,
  BasicDetailsWidget,
  LeisureFeaturesWidget,
  PavingFeaturesWidget,
  UtilityFeaturesWidget,
} from './components';
import { ArtificialGrassFeaturesWidget } from './components/artificial-grass-features-widget';
import CardComponent from './components/price-card';
import { SoftScapeFeaturesWidget } from './components/soft-scape-features-widget';
import { Summary } from './components/summary-widget';
import { useLandscapeCalculator } from './context';
import styles from './index.module.scss';
import { calculateCosts } from './utils';

const { Header, Content } = Layout;

type Props = {};

const twoColors: ProgressProps['strokeColor'] = {
  '0%': ' #6252E1',
  '100%': '#101e60',
};

type TWidget = {
  key: string;
  label: string;
  children: React.ReactNode;
};

const CalculatorPage: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const { data, formCompletionPercentage, currency, step, results, setResults, setCurrency, handleValidateForm } =
    useLandscapeCalculator();

  useEffect(() => {
    if (step === 6 && data) {
      const results = calculateCosts(data);
      setResults(results);
    }
  }, [data, step]);

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <div className={styles.logo}>
          <img
            alt="Renohome logo"
            loading="lazy"
            width="86"
            height="24"
            decoding="async"
            data-nimg="1"
            src="https://www.renohome.ae/assets/images/logo.svg"
          />
        </div>
      </Header>
      <Content className={styles.content}>
        <div className={styles.progressBar}>
          <Progress percent={formCompletionPercentage} strokeLinecap="butt" strokeColor={twoColors} showInfo={false} />
        </div>
        <Tabs
          tabBarExtraContent={{
            left: (
              <Button
                className={styles.previousButton}
                onClick={() => navigate(-1)}
                shape="circle"
                icon={<ArrowLeftOutlined />}
              />
            ),
            right: (
              <div className={styles.currencySwitch}>
                <span>Switch to {currency === 'AED' ? 'USD' : 'AED'}</span>
                <Switch onChange={() => setCurrency(currency === 'AED' ? 'USD' : 'AED')} />
              </div>
            ),
          }}
          activeKey={step?.toString()}
          onChange={(key) => {
            handleValidateForm({
              validate: true,
              step: Number(key),
            });
          }}
          items={[
            {
              key: '1',
              label: 'Basic Details',
              children: (
                <div className={styles.calculatorAndSummaryWrapper}>
                  <BasicDetailsWidget />
                  <Summary image={LandImage} />
                </div>
              ),
            },
            {
              key: '2',
              label: 'Paving',
              children: (
                <div className={styles.calculatorAndSummaryWrapper}>
                  <PavingFeaturesWidget />
                  <Summary image={PavingImage} />
                </div>
              ),
            },
            {
              key: '3',
              label: 'Artificial Grass',
              children: (
                <div className={styles.calculatorAndSummaryWrapper}>
                  <ArtificialGrassFeaturesWidget />
                  <Summary image={GrassImage} />
                </div>
              ),
            },
            {
              key: '4',
              label: 'Soft Scape',
              children: (
                <div className={styles.calculatorAndSummaryWrapper}>
                  <SoftScapeFeaturesWidget />
                  <Summary image={TreesImage} />
                </div>
              ),
            },
            {
              key: '5',
              label: 'Leisure',
              children: (
                <div className={styles.calculatorAndSummaryWrapper}>
                  <LeisureFeaturesWidget />
                  <Summary image={LeisureImage} />
                </div>
              ),
            },
            {
              key: '6',
              label: 'Utility',
              children: (
                <div className={styles.calculatorAndSummaryWrapper}>
                  <UtilityFeaturesWidget />
                  <Summary image={UtilitiesImage} />
                </div>
              ),
            },
            {
              key: '7',
              label: 'Additional',
              children: (
                <div className={styles.calculatorAndSummaryWrapper}>
                  <AdditionalFeaturesWidget />
                  <Summary image={AdditionalImage} />
                </div>
              ),
            },
          ]}
        />
        {step === 8 && results && (
          <div className={styles.resultsContainer}>
            {results?.map((result: any) => (
              <CardComponent
                {...result}
                currency={currency}
                style={
                  result?.tenure === 12
                    ? {
                        background: 'linear-gradient(192deg, rgba(39, 75, 241, .9) .26%, rgba(11, 31, 122, .9) 116.9%)',
                        borderColor: '#bac2cf',
                      }
                    : undefined
                }
              />
            ))}
          </div>
        )}
      </Content>
    </Layout>
  );
};

export { CalculatorPage };
