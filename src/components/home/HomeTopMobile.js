import React, {Component} from 'react';
import { Fragment } from 'react';
import {Container, Row,Col } from 'react-bootstrap';
import SliderHome from './SliderHome';
class HomeTopMobile extends Component{
render(){
    return(

        <Fragment>
            <Container fluid={true} className="m-0 p-0 overflow-hidden"> 
                <Row className="m-0 p-0 overflow-hidden">
                    <Col className="p-0 m-0 overflow-hidden" lg={12} md={12} sm={12} >
                        <SliderHome></SliderHome>
                    </Col>
                   
                </Row>

            </Container>

        </Fragment>
    );

}

}
export default HomeTopMobile;