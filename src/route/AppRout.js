import React, {Component,Fragment } from "react";
import { Route, Switch } from "react-router";
import HomePage from "../pages/HomePage";

class AppRout extends Component {
    render(){
      return(
              <Fragment>
                  <Switch>
                      <Route exact to="/" component={HomePage}/>
                  </Switch>

              </Fragment>
  
      );
  
    }
  
  }
  export default AppRout;