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

### ``getCitiesFromState({state: string!}): {cities: state: string, abbreviation: string, cities:[string]}``

This method take one parameter (this parameter is required, otherwise it will throw an error) with the state name or abbreviation and returns its cities;

```javascript
const { getCitiesFromState } = require('br_states')
// or with ES6 import { getCitiesFromState } from 'br_states'

const saoPauloCitiesFullname = getCitiesFromState({ state: 'São Paulo' });
const saoPauloCitiesAbbreviation = getCitiesFromState({ state: 'sp' });
// those two return the same thing
```

### ``getStateFromCity({city: string!, returnEntireJson: boolean = false}): string | {cities: state: string, abbreviation: string, cities:[string]}``

If you have the name of the city and want to get the name of its state, this method is for you.
Just put the name on city parameter and it will return you the entire json object or only the state name (based on returnEntireJson value, if returnEntireJson is not set, the default value is false).

```javascript
const { getStateFromCity } = require('br_states')
// or with ES6 import { getStateFromCity } from 'br_states'

const santosStateName = getCitiesFromState({city: 'Santos'}); // São Paulo
const santosStateObject = getCitiesFromState({city: 'Santos', returnEntireJson: true}); // it will return the entire state object
```

# WebService
## How to use it
- Git clone it
- run ``npm run start``
  - or ``npm run start:hotreload`` to hotreload the server if you change one file

It will expose a route on ``/state/:state``, where :state can be the fullname state or the abbreviation of it, e.g:
``http://localhost:3000/state/sp``  
or  
``http://localhost:3000/state/saopaulo``
