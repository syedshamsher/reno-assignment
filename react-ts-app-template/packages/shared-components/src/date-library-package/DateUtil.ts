import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localeData from 'dayjs/plugin/localeData';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import weekYear from 'dayjs/plugin/weekYear';
import weekday from 'dayjs/plugin/weekday';

import {
  ArithmeticType,
  DateInput,
  DateType,
  QUnitType,
  UnitType,
} from './types';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.extend(localizedFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
class DateUtil {
  private date: DateType;

  constructor(date: DateInput) {
    this.date = dayjs(date);
  }

  format(format: string): string {
    return this.date.format(format);
  }

  isSame(a?: DateInput, granularity?: UnitType): boolean {
    return this.date.isSame(a, granularity);
  }

  isAfter(a?: DateInput, granularity?: UnitType): boolean {
    return this.date.isAfter(a, granularity);
  }

  isBefore(a?: DateInput, granularity?: UnitType): boolean {
    return this.date.isBefore(a, granularity);
  }

  isBetween(a: DateInput, b: DateInput, granularity?: UnitType): boolean {
    return (
      this.date.isAfter(a, granularity) && this.date.isBefore(b, granularity)
    );
  }

  isSameOrAfter(a?: DateInput, granularity?: UnitType): boolean {
    return this.date === dayjs(a) || this.date.isAfter(a, granularity);
  }

  isSameOrBefore(a?: DateInput, granularity?: UnitType): boolean {
    return this.date === dayjs(a) || this.date.isBefore(a, granularity);
  }

  unix(): number {
    return this.date.unix();
  }

  diff(a: DateInput, unitOfTime?: QUnitType, precise?: boolean): number {
    return this.date.diff(a, unitOfTime, precise);
  }

  isDateType(a: any) {
    return dayjs.isDayjs(a);
  }

  isValid(a: string | number): boolean {
    const inp = typeof a === 'number' ? `${a}` : a;
    const regex = /^(\d{4})-(\d{2})-(\d{2})$/;
    const match = inp.match(regex);

    if (!match) {
      return false;
    }

    const y = parseInt(match[1]);
    const m = parseInt(match[2]);
    const d = parseInt(match[3]);

    if (y < 1000 || y > 9999 || m < 1 || m > 12 || d < 1 || d > 31) {
      return false;
    }

    const totalDays = new Date(y, m, 0).getDate();
    if (d > totalDays) {
      return false;
    }
    return true;
  }

  isDate(a: any) {
    return a instanceof Date;
  }

  utc(): DateType {
    return this.date.utc();
  }

  toDate(): Date {
    return this.date.toDate();
  }

  endOf(unitOfTime: UnitType): DateType {
    return this.date.endOf(unitOfTime);
  }

  add(amount: number, unitOfTime?: ArithmeticType): DateType {
    return this.date.add(amount, unitOfTime);
  }

  subtract(amount: number, unitOfTime?: ArithmeticType): DateType {
    return this.date.subtract(amount, unitOfTime);
  }

  clone(): DateType {
    return this.date.clone();
  }

  startOf(unitOfTime: UnitType): DateType {
    return this.date.startOf(unitOfTime);
  }

  tz(timezone: string, keepLocalTime?: boolean): DateType {
    return this.date.tz(timezone, keepLocalTime);
  }

  isDateUtil(a: any) {
    return a instanceof DateUtil;
  }

  month(i?: number) {
    if (typeof i === 'number') {
      return this.date.month(i);
    }
    return this.date.month();
  }

  year() {
    return this.date.year();
  }

  daysInMonth() {
    return this.date.daysInMonth();
  }

  getValue() {
    return this.date;
  }
}

const dateUtil = (date?: DateInput) => {
  return new DateUtil(!!date ? date : new Date());
};

export * from './types';
export { DateUtil, dateUtil };
