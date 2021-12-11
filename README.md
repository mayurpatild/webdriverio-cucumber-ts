# Volvo Test assignment ( Docker + Selenium Grid + Cucumber + Typescript + WebdriverIO )

#### Requirements

- [x] Setup the solution with its Dockerized image - `Docker compose with selenium-hub, selenium-node/chrome, selenium-node/firefox`
- [x] Parallel execution of tests - `Chrome:3 instances, Firefox:3 instances`
- [x] Reporting of the results - `Allure and Multiple cucumber Json reporter`
- [x] Cross browser tests
- [x] Design pattern - Page Object Model (POM)
- [x] Documentation

### Addtional ( Bonus )

- [x] Dockerized Image solution
- [x] Image Regression -> Made use of `wdio-image-comparison-service`

#### Features

- Test will run, parallely based on node instances available with `selenium-hub` `chrome/firefox` **nodes**
- BDD testing with `Cucumber`
- Reporting with `multiple-cucumber-json-reporter`step-wise Screenshots
- Reporting with `Allure`
- Given, Scenario, Step definitions and helper files written in `typescript`
- Docker compose is used to start the `selenium-hub`

#### Version pre-requisite

- Need **node-js** and **java** `(allure-reporter)`
  - `Node.js` - 10 or higher
  - `Java` - 8 or higher

#### Starting application testing

1. Install **Node dependencies**:

```sh
npm install
```

2. Install **docker** and run `selenium:hub`:

```sh
npm run docker-start
```

3. Running tests:

```sh
npm run docker-test
```

To stop docker containers:

```sh
npm run docker-stop
```

#### Gherking syntax Features Under test and grouping.

- `image.feature`- Tests related to Image Visual comparison - Screen, Fullscreen, Tabable.
- `modal.feature` - Tests related to modal dialog ex: cookie policy
- `navigation.feature` - Tests related to navigable elements in application ex: hamburger menu options `Buy`, `Own` etc.

#### Report generation

1. Allure report is automatically generated to open the reports

```sh
npm run report:allure
```

2. Multiple cucumber json reporter will open automatically, but to open manually.

```sh
npm run report
```

#### Parallel Testing

- WebdriverIO can run parallel test/features in case of multiple nodes availability with selenium hub.
  so We have configured `chrome=3` and `firefox=3` instance/node.
- When run `docker-compose up -d --scale chrome=3 --scale firefox=3` or `npm run selenium`, we are spinning three chrome instances.
- Webdriver IO will run all test in **parallel** / **sequential** in chrome or Firefor as per specified nodes config.
- Webdriver IO will run sequentially if 1 instance is specified. Example: `firefox=1` would run all features on firefox sequentially.

#### Local dashboard urls

- [selenium-hub](https://github.com/mayurpatild/wdio-cucumber-ts/blob/master/sample-reports/selenium-hub.png) : `http://localhost:4444`

#### Screenshots:

- [Execution of UI test case results]
   ![alt text](https://github.com/mayurpatild/wdio-cucumber-ts/blob/master/sample-reports/report.png?raw=true)
- [Selenium Grid Dashboard -> Simultaneous nodes of chrome and firefox running parallelly]
   ![alt text](https://github.com/mayurpatild/wdio-cucumber-ts/blob/master/sample-reports/selenium-hub-sessions.png?raw=true)
