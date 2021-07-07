import React, {Fragment,Component} from 'react';
import {Button} from "react-bootstrap";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashRouter } from 'react-router-dom';
import AppRout from './route/AppRout';

class App extends Component {
  render(){
    return(
            <Fragment>
              <HashRouter>
                <AppRout></AppRout>
              </HashRouter>
            
            </Fragment>

    );


  }

}
export default App;