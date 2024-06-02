import { Dayjs } from 'dayjs';

type DateType = Dayjs;

type DateInput = DateType | string | number | Date | null | undefined;

type UnitType =
  | 'milliseconds'
  | 'millisecond'
  | 'ms'
  | 'seconds'
  | 'second'
  | 's'
  | 'minutes'
  | 'minute'
  | 'm'
  | 'hours'
  | 'hour'
  | 'h'
  | 'days'
  | 'day'
  | 'd'
  | 'week'
  | 'weeks'
  | 'w'
  | 'months'
  | 'month'
  | 'M'
  | 'years'
  | 'year'
  | 'y'
  | 'dates'
  | 'date'
  | 'D';

type QUnitType = UnitType | 'quarter' | 'quarters' | 'Q';

type ArithmeticType = Exclude<UnitType, 'dates' | 'date' | 'D'>;

export type { DateType, DateInput, UnitType, QUnitType, ArithmeticType };
