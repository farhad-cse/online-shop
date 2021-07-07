import React, {Component} from 'react';
import { Fragment } from 'react';
import { Container,Row,Col,Button } from 'react-bootstrap';
import MegaMenuMobile from '../home/MegaMenuMobile';

class NavMenuMobile extends Component{

    constructor(){
        super();
        this.state={
            SideNavState:"sideNavClose",
            ContentOverState:"ContentOverlayClose"
        }
    }
    MenuBarClickHandler=()=>{
        this.SideNavOpenClose();

    }
    ContentOverLayClickHandler=()=>{
        this.SideNavOpenClose();

    }
    SideNavOpenClose=()=>{
        let SideNavState = this.state.SideNavState;
        let ContentOverState = this.state.ContentOverState;
        if( SideNavState==="sideNavOpen"){
            this.setState({SideNavState:"sideNavClose",ContentOverState:"ContentOverlayClose"})
        }
        else{
            this.setState({ SideNavState:"sideNavOpen",ContentOverState:"ContentOverlayOpen"})
        }
    }

   render(){
       return(
     <Fragment>
           
           <Container fluid={"true"} className="fixed-top shadow-sm p-0 m-0 bg-white">
            <Row>
                 <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
                     <Button onClick={this.MenuBarClickHandler} className="btn"><i className="fa fa-bars"></i> </Button>
                 </Col>
               
            </Row>
           </Container>
           <div className={this.state.SideNavState}>
                <MegaMenuMobile></MegaMenuMobile>
           </div>
           <div onClick={this.ContentOverLayClickHandler} className={this.state.ContentOverState}>

           </div>


        </Fragment>

       );
   }

}
export default NavMenuMobile;
