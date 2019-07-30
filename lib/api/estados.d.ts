import { regionType } from '../types/regionType';
import { regionWithStateType } from '../types/regionWithStateType';
import { stateType } from '../types/stateType';
export declare const checkIfVariableIsBoolean: (variable: boolean, variableName: string) => void;
export declare const requiredParam: (param: string) => never;
export declare const getAllRegions: ({ shouldReturnEntireJson, }: {
    shouldReturnEntireJson?: boolean | undefined;
}) => string[] | regionType[];
export declare const getRegion: ({ region }: {
    region: string[];
}) => regionType[];
export declare const getStateRegion: ({ state, shouldReturnEntireJson }: {
    state: string;
    shouldReturnEntireJson?: boolean | undefined;
}) => string | regionType | null;
export declare const getCityRegion: ({ city, shouldReturnEntireJson, }: {
    city: string;
    shouldReturnEntireJson?: boolean | undefined;
}) => string | regionWithStateType | null;
/**
 * This function returns an array with the cities of the given state
 * @param {Object} stateObject - The object the tells the name of the state.
 * @param {string} stateObject.state - The state name.
 *
 * @example
 * const cities = api.getStateCities({ state: 'São Paulo' });
 * // { state: 'São Paulo', abbreviation: 'sp', cities: ['Santos', 'São Vicente', 'Guarujá',...] }
 */
export declare const getStateCities: ({ state }: {
    state: string;
}) => stateType | null;
/**
 * This function receives the city name and returns the full json stateType object
 * or only the name of the state depending on shouldReturnEntireJson property.
 * If the state is not found, it returns an empty object or an empty string.
 * @param {Object} cityObject - The object the tells the name of the city and if the return
 * should be an object or just a string.
 * @param {string} cityObject.city - The city name.
 * @param {boolean} cityObject.shouldReturnEntireJson - This property tells to the method
 * that the return should ou should not be the full state object.
 * If the property is true, it will return the entire stateType object,
 * if its false or not set, it will return just the string with the name of the state.
 *
 * @example
 * const cities = api.getCityState({ city: 'Santos', shouldReturnEntireJson: true });
 * // { state: 'São Paulo', abbreviation: 'sp', cities: ['Santos', 'São Vicente', 'Guarujá',...] }
 *
 * @example
 * const cities = api.getCityState({ city: 'Santos' });
 * // 'São Paulo'
 *
 * @example
 * const cities = api.getCityState({ city: 'Santos', shouldReturnEntireJson: false });
 * // 'São Paulo',
 *
 * @example
 * const cities = api.getCityState({ city: 'randomCity' });
 * // null
 *
 * @example
 * const cities = api.getCityState({ city: 'randomCity' , shouldReturnEntireJson: false});
 * // null
 *
 * @example
 * const cities = api.getCityState({ city: 'randomCity', shouldReturnEntireJson: true });
 * // null
 */
export declare const getCityState: ({ city, shouldReturnEntireJson, }: {
    city: string;
    shouldReturnEntireJson?: boolean | undefined;
}) => string | stateType | null;
/**
 * Function that memoize all the states and cities, doing it eagerly.
 * @example
 * eagerMemoization();
 * // Using it will memoize everything, making api.getCityState and api.getStateCities faster
 */
export declare const eagerMemoization: () => void;
