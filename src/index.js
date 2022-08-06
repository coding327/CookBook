import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// 引入重置样式
import './assets/reset.css'
// 配置路由模式
import {HashRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <HashRouter>
        <App />
    </HashRouter>
)
