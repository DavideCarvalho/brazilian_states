// @flow
import {regionType} from './regionType';
import { regionWithStateType } from './regionWithStateType';
/**
 * Type with state name, abbreviation and cities
 * @typedef {Object} memoizedCityType
 * @property {regionWithStateType} cityOrStateName - Name of the city or the state that has been memoized inside the json
 */
export type memoizedRegionWithStateType = {
  [cityOrStateName: string]: regionWithStateType;
};
