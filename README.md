# FitBit-2point0


<img src="https://user-images.githubusercontent.com/72491412/114506150-04b12600-9c4f-11eb-8265-9502d1c57a19.png" width="350">


## Description

FitBit-2point0 is a fitness app that takes care of your health by providing you amazing sets of exercises to do based upon your intrest

## Features

- Standard Exercises- a must do exercise list
- Customized Exercises- exercise based on areas you want to work on
- Quaratine MixUp- exercise based on your Quaratine Life
- Resistance Exercises- exercise to build your muscles
- Cardio Exercises- exercise to burn your calories fast
- Progress- data visulization of your progress

## Environment Setup

- Need to download Virtual Studio Code.
  Download from [VSCode](https://code.visualstudio.com/download)
- You would need to have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.
- Install MongoDB [install](https://docs.mongodb.com/guides/server/install/)

## Installing Dependencies

- run `npm init -y`

- To install dependencies and run the storybooks for all packages in this repository:<br/>
  `npm i express bcryptjs passport passport-local express-ejs-layouts mongoose connect-flash express-session`

## necessary changes

- Replace `"main": "index.js" to "main": "app.js" in package.json`
- Add<br/>
  `"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },`
  
## run the code

- run the code using `npm run dev`

## Live Demo

- Live Demo Of App- [FitBit-2point](https://fitbit-2point0.herokuapp.com/)
