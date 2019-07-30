// @flow
import { stateType } from './stateType';
/**
 * Type with region and its states
 * @typedef {Object} regionType
 * @property {String} regionName - Name of the region
 * @property {stateType[]} states - Array with states of this region
 * @property {stateType} state - state this city belongs to
 */
export type regionWithStateType = {
  regionName: string;
  states: stateType[];
  cityState: stateType;
};
