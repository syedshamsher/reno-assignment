import { Divider } from 'antd';
import { RenoIcon } from '../../../../resources/icons';

type RenoSeparatorProps = {
  iconColor?: string;
};
export function RenoSeparator({ iconColor }: RenoSeparatorProps) {
  return (
    <Divider>
      <RenoIcon color={iconColor} />
    </Divider>
  );
}
