import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AsyncComponent from '../utils/async-components';


const ProductListPage = AsyncComponent(() => import("../views/contains-greetings"));
const IngredientsList = AsyncComponent(() => import("../views/ingredients-list"));
const CartPage = AsyncComponent(() => import("../views/cart-page"));

    class ContentUser extends React.Component {
        render() {
            return (
                <div className="wrapper">
                    <Switch>
                        <Route exact path="/contains-greetings" name="CartPage" component={ProductListPage} />
                        <Route exact path="/ingredients-list" name="CartPage" component={IngredientsList} />
                        <Route path="/cart-page" name="CartPage" component={CartPage} />
                    </Switch>
                </div>
            );
        }
}

export default ContentUser;