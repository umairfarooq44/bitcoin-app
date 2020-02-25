# Bitcoin-app
This repo contains code for web bitcoin app.


## Requirements
* node `^8.0.0`
* yarn `^1.12.3` or npm `^6.4.1`

## Installation

After confirming that your environment meets the above [requirements](#requirements), you can create a new project:

```bash
$ git@github.com:umairfarooq44/bitcoin-app.git
$ cd bitcoin-app
```

When that's done, install the project dependencies. It is recommended that you use [Yarn](https://yarnpkg.com/) for deterministic dependency management, but `npm install` will suffice.

```bash
$ yarn  # Install project dependencies (or `npm install`)
```

## Running the Project

After completing the [installation](#installation) step, you're ready to start the project!

```bash
$ yarn start  # Start the development server (or `npm start`)
```

While developing, you will probably rely mostly on `yarn start`; however, there are additional scripts at your disposal:

|`yarn <script>`    |Description|
|-------------------|-----------|
|`start`            |Serves your app at `localhost:8080`|
|`build`            |Builds the application to ./dist|
|`test`             |Runs unit tests with jest ans enzyme.|
|`lint`             |[Lints](http://stackoverflow.com/questions/8503559/what-is-linting) the project for potential errors|