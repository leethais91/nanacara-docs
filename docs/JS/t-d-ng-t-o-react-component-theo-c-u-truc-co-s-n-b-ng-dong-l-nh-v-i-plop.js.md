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
