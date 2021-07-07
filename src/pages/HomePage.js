import React, {Component,Fragment } from "react";
import Categories from "../components/home/Categories";
import FeatureProducts from "../components/home/FeatureProducts";
import Collection from "../components/home/Collection";
import NewArrival from "../components/home/NewArrival";
import HomeTop from "../components/home/HomeTop";
import HomeTopMobile from "../components/home/HomeTopMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";

class HomePage extends Component {
    render(){
      return(
              <Fragment>
                  <div className="Desktop">
                    <NavMenuDesktop></NavMenuDesktop>
                    <HomeTop></HomeTop>
                  </div>

                  <div className="Mobile">
                    <NavMenuMobile></NavMenuMobile>
                    <HomeTopMobile></HomeTopMobile>
                  </div>

                  <NewArrival></NewArrival>
                  <FeatureProducts></FeatureProducts>
                  <Collection></Collection>
                  <Categories></Categories>
    
              </Fragment>
  
      );
  
    }
  
  }
  export default HomePage;