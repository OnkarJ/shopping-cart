import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Products from '../components/Main/Products/Products';
import data from '../data/data';

const Routes = () => {
    return (
        <React.Fragment>
            <Header brandName="My Cart" categories={data.categories} />
            <Switch>
                <Redirect exact from='/' to='/product/soaps' />
                <Route path="/product/:productParamId" component={Products} />
            </Switch>
        </React.Fragment>
    );
}

export default Routes;