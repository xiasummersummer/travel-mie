import React from 'react';
import { Switch, Route, Redirect, NavLink} from 'react-router-dom';
import Home from '@/views/home';
import Homedetail from '@/views/homedetail1';
import Live from '@/views/live';
import Strategy from '@/views/strategy';
import User from '@/views/user';
// import Test from '@/views/test';
import '@/main.scss'

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path= "/home/homedetail" component = {Homedetail}/>
        <Route path= "/home" component = {Home}/>
        <Route path= "/live" component = {Live}/>
        <Route path= "/strategy" component = {Strategy}/>
        <Route path= "/user" component = {User}/>
        {/* <Route path= "/test" component = {Test}/> */}
        <Redirect to = "/home"/>
      </Switch>
      <footer className = "footer">
        <ul>
          <NavLink to = "/home">
            <span className="iconfont-home"></span>
            <p>首页</p>
          </NavLink>
          <NavLink to = "/strategy">
            <span className="iconfont-stragety"></span>
            <p>攻略</p>
          </NavLink>
          <NavLink to = "/live">
            <span className="iconfont-find"></span>
            <p>发现</p>
          </NavLink>
          <NavLink to = "/user">
            <span className="iconfont-user"></span>
            <p>我的</p>
          </NavLink>
        </ul>
      </footer>
    </div>
  );
}

export default App;
