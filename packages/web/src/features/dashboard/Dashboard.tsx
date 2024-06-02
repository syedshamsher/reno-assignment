import { Button, Layout, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';

const { Header, Content } = Layout;

type Props = {};

const Dashboard = (props: Props) => {
  const navigate = useNavigate();
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
        <div>
          <Typography.Title className={styles.mainTitle} level={2}>
            Renovate today. Pay over 12 months
          </Typography.Title>
          <Typography.Title className={styles.subTitle} level={4}>
            Renohome offers 0% interest financing for your home renovation projects.
          </Typography.Title>
          <Typography.Title className={styles.subTitle} level={4}>
            Get started with our landscape calculator.
          </Typography.Title>
        </div>
        <Button type="primary" className={styles.calculatorButton} onClick={() => navigate('/landscape-calculator')}>
          Landscape Calculator
        </Button>
      </Content>
    </Layout>
  );
};

export { Dashboard };
