---
title: Tự động tạo React component theo cấu trúc có sẵn bằng dòng lệnh với Plop.js
date: 2022-08-01
slug: auto-genarate-react-component-with-plop

---
### Demo

#### Cấu trúc dự án

    npx create-react-app

![](/project_structure.png "Project structure folder")


```
/Users/thaile/Projects/react-with-plop/src
├── App.css
├── App.js
├── App.test.js
├── components
|  ├── FloatButton
|  ├── SideMenu
|  └── index.js
├── hooks
|  ├── index.js
|  ├── useAuth.js
|  └── useWindowSize.js
├── index.css
├── index.js
├── logo.svg
├── pages
|  ├── Home
|  ├── SignIn
|  ├── SignUp
|  └── index.js
├── reportWebVitals.js
├── services
|  ├── authApi.js
|  └── index.js
└── setupTests.js

directory: 9 file: 15
```

Trong đó:
`components`: thư mục chứa các common component dùng chung
`pages`: thư mục chứa các page component dùng để render cách trang cho từng route
`hooks`: chứa các custom hooks
`services`: chứa các xử lí logic của app
`index.js`: file dùng cấu hình export thành phần cho từng thư mục


#### Cấu trúc câu lệnh CLI sẽ xây dựng

```
# Tạo common component
yarn generate component <name>

# Tạo page component
yarn generate page <name>

# Tạo custom hook
yarn generate hook
```


#### Cấu hình plop

##### Cài đặt
```bash
yarn install plop
```

### Tạo file template component

Tạo thư mục `plop` để chứa các file cấu hình liên quan

```
├── configs
|  ├── component.config.js
|  ├── hook.config.js
|  └── page.config.js
├── plopfile.js
└── templates
   ├── component.js.hbs
   └── injectable-index.js.hbs
```

Lần lượt chúng ta sẽ giải thích chi tiết từng file

##### `plopfile.js`
```javascript
const componentConfig = require("./configs/component.config");
const pageConfig = require("./config/page.config");
const hookConfig = require("./config/hook.config");

module.exports = (plop) => {
  plop.setGenerator("COMPONENT", componentConfig);
  plop.setGenerator("PAGE", pageConfig);
  plop.setGenerator("HOOK", hookConfig);
};
```
Đây là file dùng để liệt kê các hàm generator sẽ được sử dụng  cùng với config của nó.

Tiếp theo cần cập nhật script của file `package.json` để bổ sung câu lệnh tạo mã bằng plop

```json
...
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "generate": "plop --plopfile ./plop/plopfile.js"
  },

```

## New format

> 