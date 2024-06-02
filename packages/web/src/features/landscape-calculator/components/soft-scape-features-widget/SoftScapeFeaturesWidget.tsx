import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Form, Switch, Typography } from 'antd';
import { FC, useEffect } from 'react';
import { useLandscapeCalculator } from '../../context';
import { features } from '../../utils';
import { Footer } from '../footer';
import styles from '../index.module.scss';

const SoftScapeFeaturesWidget: FC = () => {
  const { data, handleNextStep, handlePrevStep, handleValidateForm, setStep, setData } = useLandscapeCalculator();

  const [form] = Form.useForm();
  useEffect(() => {
    if (data) {
      const softScapeFeatures = features
        .filter((feature) => feature.group === 'SoftScapeFeaturesForm')
        .reduce((acc, feature) => {
          acc[feature.name] = data[feature.name];
          return acc;
        }, {} as Record<string, string>);
      form.setFieldsValue(softScapeFeatures);
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
          Would you like to have any sofscape area (gravel, lawns, shrubs and perennials)?
        </Typography.Title>
        {features
          .filter((feature) => feature.group === 'SoftScapeFeaturesForm')
          .map((feature) => (
            <Form.Item
              label={`${feature.label}, gravel, shrubs, etc`}
              name={feature.name}
              valuePropName="checked"
              key={feature.name}
            >
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

export { SoftScapeFeaturesWidget };
