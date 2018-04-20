# Brazilian States
> Simple api that takes an state name and returns it cities

# How to use it
- Git clone it
- run ``npm run start``
  - or ``npm run start:hotreload`` to hotreload the server if you change one file

It will expose a route on /state/:state, where :state can be the fullname state or the abbreviation of it, e.g:
``http://localhost:3000/state/sp``  
or
``http://localhost:3000/state/saopaulo``