import { ComponentStyleConfig } from 'antd/es/config-provider/context';

export interface WidgetActionEventHandler<TActionPayload> {
  (type: string, payload?: Partial<TActionPayload>): void;
}

export interface WidgetProps<TValue = any, TActionPayload = any> extends ComponentStyleConfig {
  value?: TValue;

  onAction?: WidgetActionEventHandler<TActionPayload>;
}

export const WidgetNameSymbol = Symbol('WidgetName');
export interface Widget<Props extends WidgetProps = {}> extends React.FC<Props> {
  [WidgetNameSymbol]?: string;
}
