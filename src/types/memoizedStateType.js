// @flow
/**
 * Type with state name, abbreviation and cities
 * @typedef {Object} memoizedStateType
 * @property {stateType} stateName - Name of the city, the name of the city is dinamic, e.g: São Paulo: stateType
 */
export type memoizedStateType = {
  [stateName: string]: stateType
};

