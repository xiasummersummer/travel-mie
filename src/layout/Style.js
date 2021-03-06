import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Register from '@/views/register'
import Login from '@/views/login'
import Homesearch from '@/views/homesearch'
import Stratesearch from '@/views/stratesearch'
import Sensedetail from '@/views/sensedetail'
import Scenic from '@/views/scenic'
import Food from '@/views/food'
import Fooddetail from '@/views/fooddetail'
import Ticket from '@/views/ticket'
import All from '@/views/all'
import '@/register.scss'
function Detailstyle () {
  return (
    <div className="container2">
      <Switch>
        <Route path = "/register" component = { Register }/>
        <Route path = "/homesearch" component = { Homesearch }/>
        <Route path = "/stratesearch" component = { Stratesearch }/>
        <Route path = "/scenic" component = { Scenic }/>
        <Route path = "/food/fooddetail" component = { Fooddetail }/>
        <Route path = "/food" component = { Food }/>
        <Route path = "/sensedetail/:id" component = { Sensedetail }/>
        <Route path = "/ticket" component = { Ticket }/>
        <Route path = "/all" component = { All }/>
        <Route path = "/login" component = { Login }/>
      </Switch>
    </div>
  )
}

export default Detailstyle;