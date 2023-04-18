/* Having mixed results getting testing with jest set up so I will try to collate a step by step

LINK: https://dev.to/saharabanu/unit-tesing-with-jest-in-react-typescript-3anb

 [1] - to CRA a new typescript app - npx create-react-app my-app-name --template typescript   - OR - yarn create react-app my-app-name --template typescript
 
 [2] - then: npm install --save-dev jest @types/jest @babel/preset-typescript
 
 [3] -have to create a file babel.config.js near by package.json and add this and save.

module.exports={
"presets": ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
"plugins": []
}

and  also to add in package.json

"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "jest",
"eject": "react-scripts eject"
},
 
 
 */
