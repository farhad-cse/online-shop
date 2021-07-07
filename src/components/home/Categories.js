import React, {Component,Fragment } from "react";
import { Card, Col, Container, Row, } from "react-bootstrap";

class Categories extends Component {
    render(){
      return(
              <Fragment>
                <Container fluid="true">
                  <h5 className="section-title">CATEGORIES</h5>
                  <p className="section-sub-title"> some of our exclusive collections you may like</p>
                  <Row>
                      <Col  key={1} xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Row>
                        <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="card" >
                            <Card.Img  src="images/img1.jpg" />
                            <Card.Body>
                            <h5 className="category-name">CATEGORY NAME</h5>
                      
                            </Card.Body>
                            </Card>
                       </Col>
                       <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="card" >
                            <Card.Img  src="images/img1.jpg" />
                            <Card.Body>
                            <h5 className="category-name">CATEGORY NAME</h5>
                          
                            </Card.Body>
                            </Card>
                       </Col>
                       <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="card" >
                            <Card.Img  src="images/img1.jpg" />
                            <Card.Body>
                            <h5 className="category-name">CATEGORY NAME</h5>
                         
                            </Card.Body>
                            </Card>
                       </Col>
                       <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="card" >
                            <Card.Img  src="images/img1.jpg" />
                            <Card.Body>
                            <h5 className="category-name">CATEGORY NAME</h5>
                         
                            </Card.Body>
                            </Card>
                       </Col>
                        

                        </Row>
                    
                      </Col>
                      <Col key={1} xl={6} lg={6} md={6} sm={6} xs={6}>
                        <Row>
                        <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="card" >
                            <Card.Img  src="images/img1.jpg" />
                            <Card.Body>
                            <h5 className="category-name">CATEGORY NAME</h5>
                            </Card.Body>
                            </Card>
                       </Col>
                       <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="card" >
                            <Card.Img  src="images/img1.jpg" />
                            <Card.Body>
                            <h5 className="category-name">CATEGORY NAME</h5>
                        
                            </Card.Body>
                            </Card>
                       </Col>
                       <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="card" >
                            <Card.Img  src="images/img1.jpg" />
                            <Card.Body>
                            <h5 className="category-name">CATEGORY NAME</h5>
                          
                            </Card.Body>
                            </Card>
                       </Col>
                       <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="card" >
                            <Card.Img  src="images/img1.jpg" />
                            <Card.Body>
                            <h5 className="category-name">CATEGORY NAME</h5>
                          
                            </Card.Body>
                            </Card>
                       </Col>

                        </Row>
                    
                      </Col>






                    
                    
                  </Row>
                  
                </Container>

              </Fragment>
  
      );
  
    }
  
  }
  export default Categories;