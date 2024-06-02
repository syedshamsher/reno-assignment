import { LeftOutlined } from '@ant-design/icons';
import { Form, Switch, Typography } from 'antd';
import { FC, useEffect } from 'react';
import { useLandscapeCalculator } from '../../context';
import { features } from '../../utils';
import { Footer } from '../footer';
import styles from '../index.module.scss';

const UtilityFeaturesWidget: FC = () => {
  const { data, handleNextStep, handlePrevStep, setData } = useLandscapeCalculator();
  const [form] = Form.useForm();
  useEffect(() => {
    if (data) {
      const utilityFeatures = features
        .filter((feature) => feature.group === 'UtilityFeaturesForm')
        .reduce((acc, feature) => {
          acc[feature.name] = data[feature.name];
          return acc;
        }, {} as Record<string, string>);
      form.setFieldsValue(utilityFeatures);
    }
  }, [data]);

  const onFinish = (values: any) => {
    values && handleNextStep({ ...values });
  };

  const onValuesChange = (_: any, allValues: any) => {
    setData({ ...data, ...allValues });
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      onValuesChange={onValuesChange}
      autoComplete="off"
      layout="horizontal"
      colon={false}
      className={styles.widgetForm}
    >
      <div className={styles.fields}>
        <Typography.Title level={1} className={styles.fieldDescription}>
          Would you like to have any utility items (fridge, oven, etc)?
        </Typography.Title>
        {features
          .filter((feature) => feature.group === 'UtilityFeaturesForm')
          .map((feature, index) => (
            <Form.Item label={feature.label} name={feature.name} valuePropName="checked" key={feature.name}>
              <Switch />
            </Form.Item>
          ))}
      </div>
      <Footer
        previousButton={{
          title: 'Prev',
          onClick: () => handlePrevStep({ ...data, ...form.getFieldsValue() }),
          icon: <LeftOutlined />,
        }}
        nextButton={{
          title: 'Submit',
          type: 'primary',
          htmlType: 'submit',
        }}
      />
    </Form>
  );
};

export { UtilityFeaturesWidget };
