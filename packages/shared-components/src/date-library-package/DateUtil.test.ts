import dayjs, { Dayjs } from 'dayjs';
import { describe, expect, it } from 'vitest';
import { dateUtil } from './DateUtil';

describe('DateUtil', () => {
  describe('format', () => {
    it('should format the date correctly', () => {
      const a = dateUtil('2024-02-23');
      expect(a.format('YYYY-MM-DD')).toBe('2024-02-23');
    });

    it('should format the date correctly with localised format', () => {
      const a = dateUtil('2024-02-23');
      expect(a.format('ll')).toBe('Feb 23, 2024');
    });
  });

  describe('isSame', () => {
    it('should return true when dates are the same', () => {
      const a = dateUtil('2024-02-23');
      const b = dateUtil('2024-02-23');
      expect(a.isSame(b.toDate())).toBe(true);
    });

    it('should return false when dates are not the same', () => {
      const a = dateUtil('2024-02-23');
      const b = dateUtil('2024-02-24');
      expect(a.isSame(b.toDate())).toBe(false);
    });
  });

  describe('isAfter', () => {
    it('should return true when the entered date is after the current date', () => {
      const a = dateUtil('2024-02-24');
      const b = dateUtil('2024-02-23');
      expect(a.isAfter(b.toDate())).toBe(true);
    });

    it('should return false when the entered date is not after the current date', () => {
      const a = dateUtil('2024-02-22');
      const b = dateUtil('2024-02-23');
      expect(a.isAfter(b.toDate())).toBe(false);
    });
  });

  describe('isBefore', () => {
    it('should return true when the entered date is before the current date', () => {
      const a = dateUtil('2024-02-22');
      const b = dateUtil('2024-02-23');
      expect(a.isBefore(b.toDate())).toBe(true);
    });

    it('should return false when the entered date is not before the current date', () => {
      const a = dateUtil('2024-02-24');
      const b = dateUtil('2024-02-23');
      expect(a.isBefore(b.toDate())).toBe(false);
    });
  });

  describe('isBetween', () => {
    it('should return true when the entered date is between the entered dates', () => {
      const a = dateUtil('2024-02-22');
      const b = dateUtil('2024-02-20');
      const c = dateUtil('2024-02-23');
      expect(a.isBetween(b.toDate(), c.toDate())).toBe(true);
    });

    it('should return false when the entered date is not between the entered dates', () => {
      const a = dateUtil('2024-02-24');
      const b = dateUtil('2024-02-20');
      const c = dateUtil('2024-02-23');
      expect(a.isBetween(b.toDate(), c.toDate())).toBe(false);
    });
  });

  describe('isSameOrAfter', () => {
    it('should return true when the entered date is the same as or after the current date', () => {
      const a = dateUtil('2024-02-24');
      const b = dateUtil('2024-02-23');
      expect(a.isSameOrAfter(b.toDate())).toBe(true);
    });

    it('should return false when the entered date is not the same as or after the current date', () => {
      const a = dateUtil('2024-02-22');
      const b = dateUtil('2024-02-23');
      expect(a.isSameOrAfter(b.toDate())).toBe(false);
    });
  });

  describe('isSameOrBefore', () => {
    it('should return true when the entered date is the same as or before the current date', () => {
      const a = dateUtil('2024-02-22');
      const b = dateUtil('2024-02-23');
      expect(a.isSameOrBefore(b.toDate())).toBe(true);
    });

    it('should return false when the entered date is not the same as or before the current date', () => {
      const a = dateUtil('2024-02-24');
      const b = dateUtil('2024-02-23');
      expect(a.isSameOrBefore(b.toDate())).toBe(false);
    });
  });

  describe('unix', () => {
    it('should return the unix timestamp', () => {
      const a = dateUtil();
      expect(a.unix()).toBe(Math.floor(new Date().getTime() / 1000));
    });
  });

  describe('diff', () => {
    it('should return the difference between two dates', () => {
      const a = dateUtil('2024-02-22');
      const b = dateUtil('2024-02-23');
      expect(a.diff(b.toDate(), 'days')).toBe(-1);
    });
  });

  describe('toDate', () => {
    it('should return the date as a Date object', () => {
      const a = dateUtil('2024-02-22');
      expect(a.toDate()).toBeInstanceOf(Date);
    });
  });

  describe('isDateType', () => {
    it('should return true when the date is a Date object', () => {
      const a = dayjs();
      expect(dateUtil().isDateType(a)).toBe(true);
    });

    it('should return false when the date is not a Date object', () => {
      const a = new Date();
      expect(dateUtil().isDateType(a)).toBe(false);
    });
  });

  describe('isValid', () => {
    it('should return true when the date is valid', () => {
      const a = dateUtil();
      expect(dateUtil().isValid(a.format('YYYY-MM-DD'))).toBe(true);
    });

    it('should return false when the date is not valid', () => {
      expect(dateUtil().isValid('2024-02-92')).toBe(false);
      expect(dateUtil().isValid('2024-04-31')).toBe(false);
      expect(dateUtil().isValid('2024-13-92')).toBe(false);
    });
  });

  describe('clone', () => {
    it('should return a new DateUtil object with the same date', () => {
      const a = dateUtil('2024-02-22').getValue();
      const b = a.clone();
      expect(a).toEqual(b);
    });
  });

  describe('utc', () => {
    it('should return a new DateUtil object with the same date in UTC', () => {
      const a = dateUtil('2024-02-22').utc().toDate().toUTCString();
      const b = new Date('2024-02-22 00:00:00').toUTCString();
      expect(a).toEqual(b);
    });
  });

  describe('toDate', () => {
    it('should return the date as a Date object', () => {
      const a = dateUtil('2024-02-22');
      expect(a.toDate()).toBeInstanceOf(Date);
    });
  });

  describe('endOf', () => {
    it('should return the end of the specified period, month in this case', () => {
      const a = dateUtil('2024-02-23');
      const b = a.endOf('month');
      expect(b.format('YYYY-MM-DD')).toBe('2024-02-29');
    });
  });

  describe('add', () => {
    it('should add 2 days to the date', () => {
      const a = dateUtil('2024-02-23');
      const b = a.add(2, 'day');
      expect(b.format('YYYY-MM-DD')).toBe('2024-02-25');
    });
  });

  describe('subtract', () => {
    it('should subtract 1 month from the date', () => {
      const a = dateUtil('2024-02-23');
      const b = a.subtract(1, 'month');
      expect(b.format('YYYY-MM-DD')).toBe('2024-01-23');
    });
  });

  describe('clone', () => {
    it('should create a new instance with the same date', () => {
      const a = dateUtil('2024-02-23');
      const b = a.clone();
      expect(b.format('YYYY-MM-DD')).toBe('2024-02-23');
    });
  });

  describe('startOf', () => {
    it('should return the start of the specified period, month in this case', () => {
      const a = dateUtil('2024-02-23');
      const b = a.startOf('month');
      expect(b.format('YYYY-MM-DD')).toBe('2024-02-01');
    });
  });

  // describe('tz', () => {
  //   it('should return the date in the specified timezone', () => {
  //     const date = dateUtil(new Date('2024-02-23 00:00:00')).tz('Asia/Kolkata'); // Assuming the original date is in IST
  //     const dateInUTC = date.tz('UTC');
  //     expect(dateInUTC.format('YYYY-MM-DD HH:mm:ss')).toBe(
  //       '2024-02-22 18:30:00'
  //     );
  //   });
  // });

  describe('month', () => {
    it('should return the month if no argument is passed', () => {
      const date = dateUtil('2024-02-23');
      const month = date.month();
      expect(month).toBe(1);
    });

    it('should return the same date but with the month that is passed as argument', () => {
      const date = dateUtil('2024-02-23');
      const month = date.month(3);
      expect((month as Dayjs).format('YYYY-MM-DD')).toBe('2024-04-23');
    });
  });

  describe('year', () => {
    it('should return the year', () => {
      const date = dateUtil('2024-02-23');
      const year = date.year();
      expect(year).toBe(2024);
    });
  });

  describe('daysInMonth', () => {
    it('should return the number of days in the month', () => {
      const date = dateUtil('2024-02-23');
      const days = date.daysInMonth();
      expect(days).toBe(29); // Leap year, February has 29 days
    });
  });
});
