import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'
import Coffee from '../components/coffee/Coffee';

export default props =>
    <Switch>
        <Route exact path='/home' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Route Path='/coffee' component={Coffee} />
        <Redirect from='*' to='/' />
    </Switch>