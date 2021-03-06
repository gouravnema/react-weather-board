### Weather Cards 

Simple app to show weather cards for a city.

Hosted on GithubPages @ http://showcase.gourav.info

Tech stack
----------
This is entire UI centric project . It uses 
1. React Js : Resusable UI components 
2. Redux : Handling data state 
3. Jest : Test runner 
4. Enzyme : Utility to test react components
5. PUG : HTML templating engine
6. SAAS : CSS preprocessor 

Requirements and Assumptions
----------------------------
Following requirements written in form of user stories are defined as
the scope of this work and shall be treated as basic assumptions
made to define completion of this project.

User stories.

1. As a user of this weather app I should be able to see 5 days 
weather forecast(basic) for city of Bangalore. [Done]

2. As a user of this weather app if I click for a specific day I
 should be able to get entire day details on my screen. [Done] 

3. As a developer I should be able test existing functionality
for each unit. [Done]

Installation
-----------------
Pre-requisites 
NodeJs and Yarn installed on the machine (npm shall work too)

##### Building Project

go to `/src` of the project and run to install dependencies
```bash
$ yarn install 

```
Building static files 
```bash
$ yarn build
```
Starting dev server
```bash
$ yarn start
```
Note : Dev server runs on port number 8082. Incase any other port need to be configured modify `    "start": " http-server -p8082  -a0.0.0.0 ../docs ",` in `/src/package.json`



Running tests 
```bash
$ yarn tests
```

#### Dev notes 
* webpack config is changed to output in `/docs` instead of `/build` 
to support github pages based hosting.  
* Configuration like api url and city id are hardcode as file 
constants in `/src/ui/js/data/server.js` can be easily moved out to config later. 
* Components are usually covered with html snapshots.
* Components containing ui actions are covered with simulate.
* Reducers are covered using TDD for all state changes.
* Index file is not covered [TODO]