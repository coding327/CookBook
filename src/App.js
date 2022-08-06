import React, { Component } from 'react'
// 一级路由所需路由标签
import { Switch, Route, Redirect } from 'react-router-dom'
// 三个一级路由组件
import CookBook from './pages/cookbook/CookBook'
import Detail from './pages/detail/Detail'
import List from './pages/list/List'
// 引入App.css全局样式
import './App.css'

class App extends Component {
    render() {
        return (
            <>
                <Switch>
                    {/* 有tab-bar的一级路由 */}
                    <Route path="/cookbook" component={CookBook}></Route>
                    {/* 没有tab-bar的一级路由 */}
                    <Route path="/detail" component={Detail}></Route>
                    <Route path="/list" component={List}></Route>
                    {/* 重定向 */}
                    <Redirect from='/' exact to="/cookbook/home"></Redirect>
                </Switch>
            </>
        )
    }
}

export default App
