# Br States
> Simple api that takes an state name and returns it cities

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

### ``getCitiesFromState({state: string}): {cities: [CitiesArray]}``

This method take one parameter (this parameter is required, otherwise it will throw an error) with the state name or abbreviation and returns its cities;

```javascript
const { getCitiesFromState } = require('br_states')
// or with ES6 import { getCitiesFromState } from 'br_states'

const saoPauloCitiesFullname = getCitiesFromState('saopaulo');
const saoPauloCitiesAbbreviation = getCitiesFromState('sp');
// those two return the same thing
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
