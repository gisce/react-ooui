# react-ooui

The component library for OpenObject & OpenERP objects based on [ant-design](https://github.com/ant-design/ant-design) and built with TypeScript.

## 🚀 Usage

Install via git:

```bash
$ npm i git://github.com/gisce/react-ooui.git#feature/webpack_lib```

Import library components: 

```javascript
import { Button, Char } from "react-ooui";```

Import `ant-design` CSS:

```javascript 
import "antd/dist/antd.css";```

And then you can use it:

```javascript
const getOouiComponents = () => {
  return (<>
    <Char id="test" placeholder="Enter a task" />
    <Button type="dashed">Button</Button>
  </>)
};
```

You have an example app inside this repo, so you can test it:

```
$ cd example
$ npm install
$ npm run start
```

## 👷🏽‍♂️ Building

You have to run:

```bash
$ npm install
$ npm run build
```

And then you will have the bundled library inside `dist/`

## 🎨 Storybook

You can browse our Storybook running:

```bash
$ npm install
$ npm run storybook
```
