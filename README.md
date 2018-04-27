<p>
    <a href="https://www.npmjs.com/package/br_states"><img src="https://img.shields.io/npm/v/br_states.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/br_states"><img src="https://img.shields.io/npm/dt/br_states.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href='https://coveralls.io/github/DavideCarvalho/brazilian_states?branch=master'><img src='https://img.shields.io/coveralls/DavideCarvalho/brazilian_states.svg' alt='Coverage Status' /></a>
    <img src="https://travis-ci.org/DavideCarvalho/brazilian_states.svg?branch=master" alt="Build Status" />
    <img src="https://img.shields.io/david/DavideCarvalho/brazilian_states.svg" alt='Dependencies Status' />
    <img src="https://img.shields.io/github/repo-size/DavideCarvalho/brazilian_states.svg" alt='Repo Size' />
    <img src="https://img.shields.io/github/last-commit/DavideCarvalho/brazilian_states.svg" alt='Last Commit' />
</p>

# Br States
> Simple api to help on operations with cities and states without the need of an http request to a remote service

# Npm Package
## How to use
``yarn add https://www.npmjs.com/package/br_states``  
or  
``npm i https://www.npmjs.com/package/br_states``

now require it from your modules:

```javascript
const brStates = require('br_states')
```

or with ES6

```javascript
import brStates from 'br_states'
```

## Methods

### ``getStateCities({state: string!}): {cities: state: string, abbreviation: string, cities:[string]}``

This method take one parameter (this parameter is required, otherwise it will throw an error) with the state name or abbreviation and returns its cities;

```javascript
const { getStateCities } = require('br_states')
// or with ES6 import { getCitiesFromState } from 'br_states'

const saoPauloCitiesFullname = getStateCities({ state: 'São Paulo' });
const saoPauloCitiesAbbreviation = getStateCities({ state: 'sp' });
// those two return the same thing
```

The state is normalized before finding it, so you can write the name of the state even without accents and in lowercase or uppercase, e.g:
```javascript
const { getStateCities } = require('br_states')
// or with ES6 import { getCitiesFromState } from 'br_states'

const saoPauloCitiesFullname = getStateCities({ state: 'Sao Paulo' });
const saoPauloCitiesAbbreviation = getStateCities({ state: 'sao paulo' });
// those two return the same thing
```

### ``getCityState({city: string!, shouldReturnEntireJson: boolean = false}): string | {cities: state: string, abbreviation: string, cities:[string]}``

If you have the name of the city and want to get the name of its state, this method is for you.
Just put the name on city parameter and it will return you the entire json object or only the state name (based on shouldReturnEntireJson value, if shouldReturnEntireJson is not set, the default value is false).

```javascript
const { getCityState } = require('br_states')
// or with ES6 import { getStateFromCity } from 'br_states'

const santosStateName = getCityState({city: 'Santos'}); // São Paulo
const santosStateObject = getCityState({city: 'Santos', shouldReturnEntireJson: true}); // it will return the entire state object
```