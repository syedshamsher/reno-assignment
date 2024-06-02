import { Card, Divider, Flex, Typography } from 'antd';
import { ComponentStyleConfig } from 'antd/es/config-provider/context';
import { CheckIcon, EstimateClockIcon } from '../../../../resources/icons';
import { cn, moneyFormatter } from '../../utils';
import { RenoSeparator } from '../separater';
import styles from './index.module.scss';

type CardProps = {
  tenure: number;
  downpayment: number;
  installments: number;
  moveInPayment: number;
  totalCost: number;
  description: string;
  currency: 'AED' | 'USD';
} & ComponentStyleConfig;

const ConversionRate = 0.27226;

export default function CardComponent({
  tenure,
  downpayment,
  installments,
  moveInPayment,
  totalCost,
  description,
  style,
  currency,
}: CardProps) {
  const convert = (amount: number) => (currency === 'AED' ? amount : amount * ConversionRate);

  return (
    <Card
      className={cn(styles.card, styles.slide)}
      style={style}
      hoverable
      cover={
        <Flex>
          {style && <strong className={styles.bestplan}>Best Plan</strong>}
          <Typography.Title
            level={2}
            style={{
              color: style ? '#89c9e0' : '#101e60',
            }}
          >
            {tenure} months
          </Typography.Title>
          <Typography.Title
            level={1}
            style={{
              color: style ? '#e1f1f7' : '#101e60',
            }}
          >
            {moneyFormatter(convert(totalCost), currency)}
          </Typography.Title>
          <Typography.Paragraph
            type="secondary"
            style={{
              color: style ? '#e1f1f7' : undefined,
            }}
          >
            {description}
          </Typography.Paragraph>
        </Flex>
      }
    >
      <Divider />
      <Flex
        vertical
        gap={15}
        style={{
          marginBottom: '75px',
        }}
      >
        <CardPlanFeatureListItem
          icon={<CheckIcon />}
          label="Tenure"
          value={tenure}
          style={{
            color: style ? '#e1f1f7' : '#101e60',
          }}
        />
        <CardPlanFeatureListItem
          icon={<CheckIcon />}
          label="Downpayment"
          value={moneyFormatter(convert(downpayment), currency)}
          style={{
            color: style ? '#e1f1f7' : '#101e60',
          }}
        />
        <CardPlanFeatureListItem
          icon={<CheckIcon />}
          label="Instalments"
          value={moneyFormatter(convert(installments), currency)}
          style={{
            color: style ? '#e1f1f7' : '#101e60',
          }}
        />
        <CardPlanFeatureListItem
          icon={<CheckIcon />}
          label="Move-in payment"
          value={moneyFormatter(convert(moveInPayment), currency)}
          style={{
            color: style ? '#e1f1f7' : '#101e60',
          }}
        />
      </Flex>
      <RenoSeparator iconColor={style ? '#89c9e0' : undefined} />

      <Flex gap={16} vertical>
        <CardPlanFeatureListItem
          icon={<EstimateClockIcon color={style ? '#28a745' : undefined} />}
          label="Estimated timeline"
          value={`${tenure} months`}
          style={{
            color: style ? 'white' : '#101e60',
          }}
        />

        <div
          className={styles.buy}
          style={{
            color: style ? 'white' : undefined,
            borderColor: style ? 'white' : undefined,
          }}
        >
          Get Started
        </div>
      </Flex>
    </Card>
  );
}

type CardPlanFeatureListItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string | number;
} & ComponentStyleConfig;

function CardPlanFeatureListItem({ icon, label, value, style }: CardPlanFeatureListItemProps) {
  return (
    <Flex gap={10} align="center">
      {icon}
      <Flex align="center">
        <Typography.Text style={style}>{label} :</Typography.Text>

        <Typography.Text
          style={{
            ...style,
            fontSize: '1rem',
          }}
        >
          &nbsp;
          {value}
        </Typography.Text>
      </Flex>
    </Flex>
  );
}
