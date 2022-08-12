<p>
    <a href="https://www.npmjs.com/package/br_states"><img src="https://img.shields.io/npm/v/br_states.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/br_states"><img src="https://img.shields.io/npm/dt/br_states.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href='https://coveralls.io/github/DavideCarvalho/brazilian_states?branch=master'><img src='https://img.shields.io/coveralls/DavideCarvalho/brazilian_states.svg' alt='Coverage Status' /></a>
    <img src="https://travis-ci.org/DavideCarvalho/brazilian_states.svg?branch=master" alt="Build Status" />
    <img src="https://img.shields.io/david/DavideCarvalho/brazilian_states.svg" alt='Dependencies Status' />
    <img src="https://img.shields.io/github/repo-size/DavideCarvalho/brazilian_states.svg" alt='Repo Size' />
    <img src="https://img.shields.io/github/last-commit/DavideCarvalho/brazilian_states.svg" alt='Last Commit' />
    <img src="https://img.shields.io/github/license/DavideCarvalho/brazilian_states.svg" alt='License' />
</p>

# Br States

> Simple api to help on operations with cities, states and regions

# Npm Package

## How to use

`yarn add https://www.npmjs.com/package/br_states`  
or  
`npm i https://www.npmjs.com/package/br_states`

now require it from your modules:

```javascript
const brStates = require('br_states');
```

or with ES6

```javascript
import brStates from 'br_states';
```

## Methods

### `getStateCities({ state: string }): string[] | undefined`

This method take one parameter (this parameter is required, otherwise it will throw an error) with the state name or abbreviation and returns its cities;

```javascript
const { getStateCities } = require('br_states');
// or with ES6 import { getCitiesFromState } from 'br_states'

const saoPauloCitiesFullname = getStateCities({ state: 'São Paulo' });
const saoPauloCitiesAbbreviation = getStateCities({ state: 'sp' });
// those two return the same thing
```

The state is normalized before finding it, so you can write the name of the state even without accents and in lowercase or uppercase. You can even write state name with hyphen, underline, with or without spaces, e.g:

```javascript
const { getStateCities } = require('br_states');
// or with ES6 import { getCitiesFromState } from 'br_states'

const saoPauloCitiesFullname = getStateCities({ state: 'Sao Paulo' });
const saoPauloCitiesNotExactly = getStateCities({ state: 'sao paulo' });
const saoPauloCitiesNotExactlySecond = getStateCities({ state: 'sao-paulo' });
const saoPauloCitiesNotExactlyThird = getStateCities({ state: 'sao_paulo' });
const saoPauloCitiesNotExactlyFourth = getStateCities({ state: 'saopaulo' });
// those two return the same thing
```

### `getCityState({city: string, shouldReturnEntireJson?: boolean}): string | undefined`

If you have the name of the city and want to get the name of its state, this method is for you.
Just put the name on city parameter and it will return you the entire json object or only the state name (based on shouldReturnEntireJson value, if shouldReturnEntireJson is not set, the default value is false).

```javascript
const { getCityState } = require('br_states');
// or with ES6 import { getStateFromCity } from 'br_states'

const santosStateName = getCityState({ city: 'Santos' }); // São Paulo
const santosStateObject = getCityState({
  city: 'Santos',
  shouldReturnEntireJson: true,
}); // it will return the entire state object
```

Just like the state, the city name is normalized as well, so you can write the name as it should be, or write all lowercased or uppercased without any accents. Since some cities have names with hyphens, those cases are normalized as well, e.g:

```javascript
const { getStateCities } = require('br_states');
// or with ES6 import { getCitiesFromState } from 'br_states'

const guarujaStateExactly = getStateCities({ city: 'Biritiba-Mirim' });
const guarujaStateNotExactly = getStateCities({ city: 'Biritiba Mirim' });
const guarujaStateNotExactlySecond = getStateCities({ city: 'biritiba-mirim' });
const guarujaStateNotExactlyThird = getStateCities({ city: 'biritibamirim' });
const guarujaStateNotExactlyFourth = getStateCities({ city: 'BIRITIBAMIRIM' });
// the result will be the same for every call, since the names are normalized before are searched
```

``getCityState`` and ``getStateCities`` are memoized while you use it, so consecutive uses with the same parameter can be returned faster. If you want to memoize it right from the start, you can use `eagerMemoization()` method.

```javascript
const { eagerMemoization, getCityState, getStateCities } = require('br_states');
// or with ES6 import { getCitiesFromState } from 'br_states'
eagerMemoization();
const saoPauloCitiesFullname = getStateCities({ state: 'São Paulo' });
const guarujaStateExactly = getStateCities({ city: 'Guarujá' });
// those methods will have performance increased, since the states and the cities are all memoized and ready to be find easily thanks to eagerMemoization()
```

You can work with brazilian regions too!

### `getAllRegions({shouldReturnEntireJson?: boolean}): regionType[] | string[]`

This function will return all regions for you. If you don't pass `shouldReturnEntireJson` or set it to `false`, it will return only the name of the regions. If `shouldReturnEntireJson` is `true`, it will return all the regions and within the regions, all the states, each of them with each city.

```javascript
const { getAllRegions } = require('br_states');
// or with ES6 import { getAllRegions } from 'br_states'
const allRegionsNamesWithoutSettingShouldReturnEntireJson = getAllRegions({});
// [ Norte, Nordeste, Centro-Oeste, Sudeste, Sul ];
const allRegionsNamesSettingShouldReturnEntireJson = getAllRegions({
  shouldReturnEntireJson: false,
});
// [ Norte, Nordeste, Centro-Oeste, Sudeste, Sul ];
const allRegionsObjectsSettingShouldReturnEntireJson = getAllRegions({
  shouldReturnEntireJson: true,
});
/*
[
    {
      regionName: Norte
      states: [
        // all the states of this region
      ]
    }...
]
*/
```

### `getRegion({ region: string[] }): regionType[]`

If you don't need all the regions, you can use this method. send an ``Array of string`` to the ``region`` property and it will return the states of every region sent on the array.

```javascript
const { getRegion } = require('br_states');
// or with ES6 import { getAllRegions } from 'br_states'
const region = getRegion({ region: ['Norte'] });
/*
[{
  regionName: Norte
  states: [
    // all the states of this region
  ]
}]
*/
const [middleEastRegion, northEastRegion, northRegion, southEastRegion, southRegion] = getRegion({ region: ['Centro-Oeste', 'Nordeste', 'Norte', 'Sudeste', 'Sul'] });
// each of these variables will have the same type of object as above, changing the regionName for each region name and its respectives states
```

### `getStateRegion({ state: string, shouldReturnEntireJson?: boolean }): string | regionType | null`

You can look get a region based on a state! Just send the state name on `state` property and it will return the region name. If you send `shouldReturnEntireJson`, it will return the entire region object.
```javascript
const { getStateRegion } = require('br_states');
// or with ES6 import { getAllRegions } from 'br_states'
const regionNameBasedOnStateName = getStateRegion({ state: 'São Paulo' });
// Sudeste
const regionNameBasedOnStateNameSecond = getStateRegion({ state: 'São Paulo', shouldReturnEntireJson: false });
// Sudeste
const regionObjectBasedOnStateName = getStateRegion({ state: 'São Paulo', shouldReturnEntireJson: true })
/*
[{
  regionName: Sudeste
  states: [
    // all the states of this region
  ]
}]
*/
```

The state name is normalized, so you can write your state in more ways and still get the right result!

### `getCityRegion({city: string, shouldReturnEntireJson?: boolean}): string | regionWithStateType | null`

If you just have the name of the city and want its region, you can still look for it! `getCityRegion` is here to help you with that, send a json with a property called `city` on the function parameter and it will return the region name. Like other methods, send `shouldReturnEntireJson` with `true` boolean value (NOT STRING) and it will return the json object with the region, and the state this city belongs separated from the other states.

```javascript
const { getCityRegion } = require('br_states');
// or with ES6 import { getAllRegions } from 'br_states'
const regionNameBasedOnCityName = getStateCity({ city: 'Santos' });
// Sudeste
const regionNameBasedOnCityNameSecond = getCityRegion({ city: 'Santos', shouldReturnEntireJson: false });
// Sudeste
const regionObjectBasedOnStateName = getCityRegion({ city: 'São Paulo', shouldReturnEntireJson: true })
/*
[{
  regionName: Sudeste
  states: [
    // all the states of this region
  ]
}]
*/
```
As you can see, this object has `state`and `states` objects. `state` object is the state where this city belongs, and `states` is all the states from this region, on this example, all the states on Sudeste region.
