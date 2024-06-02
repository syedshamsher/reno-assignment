import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Form, Switch, Typography } from 'antd';
import { FC, useEffect } from 'react';
import { useLandscapeCalculator } from '../../context';
import { features } from '../../utils';
import { Footer } from '../footer';
import styles from '../index.module.scss';

const LeisureFeaturesWidget: FC = () => {
  const { data, handleNextStep, handlePrevStep, handleValidateForm, setStep, setData } = useLandscapeCalculator();

  const [form] = Form.useForm();
  useEffect(() => {
    if (data) {
      const LeisureFeatures = features
        .filter((feature) => feature.group === 'LeisureFeaturesForm')
        .reduce((acc, feature) => {
          acc[feature.name] = data[feature.name];
          return acc;
        }, {} as Record<string, string>);
      form.setFieldsValue(LeisureFeatures);
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
      className={styles.widgetForm}
      layout="horizontal"
      colon={false}
    >
      <div className={styles.fields}>
        <Typography.Title level={1} className={styles.fieldDescription}>
          Does your project include any Leisure areas?
        </Typography.Title>
        {features
          .filter((feature) => feature.group === 'LeisureFeaturesForm')
          .map((feature) => (
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
          title: 'Next',
          type: 'primary',
          htmlType: 'submit',
          icon: <RightOutlined />,
          iconPosition: 'end',
        }}
      />
    </Form>
  );
};

export { LeisureFeaturesWidget };
