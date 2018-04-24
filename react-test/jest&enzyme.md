# React单元测试
### 使用框架 
1. Jest
2. Enzyme

### 环境配置

#### 安装所需依赖
```
npm install --save-dev jest 
npm install --save-dev babel-jest //让单测代码支持ES6
npm install --save-dev enzyme 
npm install --save-dev enzyme-to-json  //在enzyme生成的react树生成snapshot时进行格式化，提高可读性
npm install --save-dev enzyme-adapter-react-15 //adapt react15
npm install --save-dev react-router-enzyme-context //A helper for mocking react router v4 context and childContextTypes when testing components with Enzyme mount() and shallow().
npm install --save-dev react-addons-test-utils //使用React13以上版本需要安装
npm install --save-dev react-test-renderer //providing an experimental React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment.

```

#### 配置
package.json:
```
"jest": {
  "moduleFileExtensions": [
    "js",
    "jsx",
    "json"
  ],
  "testRegex": ".*\\.test\\.js$",
  "collectCoverageFrom": [
    "src/**/*.{js,jsx}",
    "src/**/**/*.{js,jsx}",
    "!**/node_modules/**"
  ],
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/spec/__mocks__/fileMock.js",
    "\\.(css|scss)$": "<rootDir>/spec/__mocks__/styleMock.js"
  },
  "setupFiles": [
    "<rootDir>/spec/setup.js"
  ]
}
```
* moduleFileExtensions: 被测试的文件依赖的文件后缀
* testRegex: 正则表示的测试文件
* collectCoverageFrom:　生成测试覆盖报告时检测的覆盖文件
* moduleNameMapper：　ｍｏｃｋ了图片/CSS/字体/音频等文件
* setupFiles： 配置文件，初始化测试环境

```
 "scripts": {
    "watch": "./node_modules/.bin/webpack --watch --color",
    "start": "./node_modules/.bin/webpack-dev-server --port 8000 --hot --inline --content-base . --history-api-fallback --config ./webpack.config.js",
    "test": "jest"
  },
```





setup.js:
```
import React from 'react';
import Adapter from 'enzyme-adapter-react-15';

// mock localStorage
if (typeof window !== 'undefined') {
  window.React = React;
  window.localStorage = ( function storageMock() {
    var storage = {};
    return {
      setItem: function(key, value) {
        storage[key] = value || '';
      },
      getItem: function(key) {
        return key in storage ? storage[key] : null;
      },
      removeItem: function(key) {
        delete storage[key];
      },
      get length() {
        return Object.keys(storage).length;
      },
      key: function(i) {
        var keys = Object.keys(storage);
        return keys[i] || null;
      }
    }
  })()
}

//adapt react15
configure({
  adapter: new Adapter()
}); 
```

example usage of react-router-enzyme-context
```
const options = new ReactRouterEnzymeContext();
  const wrapper = mount(
    <ClickMe destination="/somehwere/someplace" />,
    options.get()
  );
});

// Or

const options = new ReactRouterEnzymeContext();
const wrapper = mount(
  <ClickMe destination="/somehwere/someplace" />,
  {
    context: options.getContext(),
    childContextTypes: options.getChildContextTypes(),
  }
);

```

#### 组件测试代码结构
```
import React from 'react';
import { render, mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { component } from 'component_path';


describe('component test', () => {

  it('test one aspect', () => {
    
  });
})
```
