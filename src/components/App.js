import classNames from 'classnames/bind'
import React from 'react'

const cx = classNames.bind(require('./App.sss'))

const App = () => <div className={cx('wrapper')}>Hello</div>

export default App
