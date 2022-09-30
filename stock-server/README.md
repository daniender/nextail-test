# Report Server App

## Simple NodeJs app to serve data for test frontend application


### Installation

#### Requirements

- [NodeJS](https://nodejs.org/en/)
- [Typescript](https://www.npmjs.com/package/typescript)

Download the code and run `npm install` from project root to install dependencies.

Then compile project with TypeScriptCompiler, execute from the project root:

```
~ stock-server/ 
$ tsc
```

## Run:

Run compiled code with node:
```
~ stock-server/ 
$ node dist/
```

### Run with docker

Start Docker service and create image:
```
docker build - report-server .
```

Launch image with port 5000.

