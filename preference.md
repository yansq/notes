### A
1. import  
依赖文件和本地文件间空一行
```
import React, { Component } from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types'

import apiConfig from '../.././urlConfig';
import ajax from '../../utils/ajax.js';
import { USDateFormat } from '../../utils/function.js';
```  
2. 初始化state（ES7)  

`state = { expanded: false }`  
3. 内联样式  
```
render() {
		const spanColor = this.state.access ? 'rgb(26,77,138)' : 'rgba(175,174,180)'
		return (
			<div className="entity-item">
				<Checkbox checked={this.state.access ? true : false} onChange={this.changeAccess}>
					<span style={{color: spanColor}}>{this.props.name}</span>
				</Checkbox>		
			</div>
		)
	}
```
### B
1. classNames

npm install calssNames
```
import classNames from 'classNames'
const classGroup = classNames({
  classA: true,
  classB: false,
  classC: true
})
<div className={classGroup}></div> {/*className="classA classC"*/}
```


### C
