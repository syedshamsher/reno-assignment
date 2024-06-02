import { RightOutlined } from '@ant-design/icons';
import { Form, InputNumber, Segmented, Typography } from 'antd';
import { FC, useEffect } from 'react';
import { useLandscapeCalculator } from '../../context';
import { Footer } from '../footer';
import styles from '../index.module.scss';

const BasicDetailsWidget: FC = () => {
  const { data, validateForm, handleValidateForm, setData, setStep, handleNextStep } = useLandscapeCalculator();
  const [form] = Form.useForm();

  useEffect(() => {
    if (data?.size || data?.budget) {
      form.setFieldsValue({ size: data?.size, budget: data?.budget });
    }
  }, [data?.size, data?.budget]);

  useEffect(() => {
    if (validateForm?.validate && validateForm?.step) {
      form.validateFields().then(() => {
        handleValidateForm({ validate: false, step: validateForm?.step });
        setData({ ...data, ...form.getFieldsValue() });
      });
    }
  }, [validateForm]);

  const onFinish = (values: any) => {
    values && handleNextStep({ ...values });
  };
  return (
    <Form form={form} onFinish={onFinish} autoComplete="off" layout="vertical" className={styles.widgetForm}>
      <div className={styles.fields}>
        <Typography.Title level={1} className={styles.fieldDescription}>
          What is the approximate size of your garden or the area that you want to landscape? Enter measurements in
          square meters.
        </Typography.Title>
        <Form.Item label="Size" name="size" rules={[{ required: true }]}>
          <InputNumber min={1} placeholder="Size in m²" />
        </Form.Item>
        <Form.Item label="Budget" name="budget" rules={[{ required: true }]}>
          <Segmented
            className={styles.segmented}
            options={[
              {
                label: <div style={{ margin: 4 }}>Economic</div>,
                value: 'economic',
              },
              {
                label: <div style={{ margin: 4 }}>Standard</div>,
                value: 'standard',
              },
              {
                label: <div style={{ margin: 4 }}>High End</div>,
                value: 'highEnd',
              },
              {
                label: <div style={{ margin: 4 }}>Super High End</div>,
                value: 'superHighEnd',
              },
            ]}
          />
        </Form.Item>
      </div>

      <Footer
        nextButton={{
          title: 'Next',
          type: 'primary',
          htmlType: 'submit',
          iconPosition: 'end',
          icon: <RightOutlined />,
        }}
      />
    </Form>
  );
};

export { BasicDetailsWidget };
