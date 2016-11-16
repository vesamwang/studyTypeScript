/**
 * Created by levin on 11/16/16.
 */

export enum DateType {Day, Week, Month}

export interface UnitType {
  key: string;
  value: string;
}

export let DateTypes: UnitType[] = [];
DateTypes[DateType.Day] = {key: 'D', value: 'day'};
DateTypes[DateType.Week] = {key: 'W', value: 'week'};
DateTypes[DateType.Month] = {key: 'M', value: 'month'};
