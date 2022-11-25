import Welcome from "./Pages/WelcomePage";
import ProductPage from './Pages/ProductPage'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Fragment } from "react";
import ProductDetails from "./Pages/ProductDetails";

function App() {

  return (
    // <div>
    //   <h2>Let's get started!</h2>
    // </div>
    <Fragment>
      <Switch>
        <Route path={"/"} exact>
          <Redirect to={"/welcome"}></Redirect>
        </Route>
        <Route path={"/welcome"}>
          <Welcome />
        </Route>
        <Route exact path={"/product"}>
          <ProductPage />
        </Route>
        <Route path={"/product/:productID"}>
          <ProductDetails />
        </Route>
      </Switch>
    </Fragment>


  );
}

export default App;
