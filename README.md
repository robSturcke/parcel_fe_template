# Parcel React.js Frontend Template

This project rocks and uses MIT-LICENSE.
A quick-setup React.js Frontend App Template using Parcel.js Compiler with SCSS and Babel.

## Getting Started

Clone the project

```
git@github.com:robSturcke/parcel_fe_template.git
```

Run NPM

```
npm i --s
```

Run development server to make sure your application is ready to go

```
npm run dev
```

Navigate to:

```
http://localhost:1234
```

### Prerequisites

NPM > https://www.npmjs.com/

React.js > https://reactjs.org/

Parcel.js > https://parceljs.org/getting_started.html

## Recreate Application

- Create root directory

```
mkdir my_app
```

- `cd my_app`

- Initialize NPM

```
npm i -y
```

- Add `index.html` file in `src` directory

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="./style.scss" />
    <title>Parcel React Template</title>
  </head>

  <body>
    <div id="root">not rendered</div>
    <script src="./App.js"></script>
  </body>
</html>
```

- Add `App.js` file in `src`

```
import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        Stuff Goes Here
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
```

- Add Parcel.js

```
npm i parcel-bundler --save-dev
```

- Add the following to your `package.json` file

```
{
  "scripts": {
    "dev": "parcel src/index.html",
    "build": "parcel build src/index.html"
  }
}
```

- `npm run dev`
- Navigate to `http://localhost:1234`
