// @flow
/**
 * Type with state name, abbreviation and cities
 * @typedef {Object} stateType
 * @property {String} state - State Fullname
 * @property {String} abbreviation - State name abbreviated
 * @property {String[]} cities - Array with state cities
 */
export type stateType = {
  state: string,
  abbreviation: string,
  cities: Array<string>
};
