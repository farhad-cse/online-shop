import React, {Component,Fragment } from "react";
import { Card, Col, Container, Row, } from "react-bootstrap";


class FeatureProducts extends Component {
    render(){
      return(
              <Fragment>
                <Container fluid="true">
                  <h5 className="section-title">FEATURED PRODUCTS</h5>
                  <p className="section-sub-title"> some of our exclusive collections you may like</p>
                  <Row>
                    <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Card className="image-box card " >
                        <Card.Img  src="images/img1.jpg" />
                        <Card.Body>
                          <p className="product-name-on-card">Asus TUF A15 FA506IU Ryzen 7 GTX</p>
                          <p className="product-price-on-card">price:3000TK</p>
                          
                      
                        </Card.Body>
                      </Card>
                     
                    
                    </Col>
                    <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Card className="image-box card " >
                        <Card.Img  src="images/img1.jpg" />
                        <Card.Body>
                        <p className="product-name-on-card"> Asus TUF A15 FA506IU Ryzen 7 GTX</p>
                          <p  className="product-price-on-card">price:3000TK</p>
                          
                      
                        </Card.Body>
                      </Card>
                     
                    
                    </Col>
                    <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Card className="image-box card" >
                        <Card.Img  src="images/img1.jpg" />
                        <Card.Body>
                        <p className="product-name-on-card">Asus TUF A15 FA506IU Ryzen 7 GTX</p>
                          <p  className="product-price-on-card">price:3000TK</p>
                          
                      
                        </Card.Body>
                      </Card>
                     
                    
                    </Col>
                    <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Card className="image-box card" >
                        <Card.Img  src="images/img1.jpg" />
                        <Card.Body>
                        <p className="product-name-on-card">Asus TUF A15 FA506IU Ryzen 7 GTX</p>
                          <p  className="product-price-on-card">price:3000TK</p>
                          
                      
                        </Card.Body>
                      </Card>
                     
                    
                    </Col>
                    <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Card className="image-box card" >
                        <Card.Img  src="images/img1.jpg" />
                        <Card.Body>
                        <p className="product-name-on-card">Asus TUF A15 FA506IU Ryzen 7 GTX</p>
                          <p  className="product-price-on-card">price:3000TK</p>
                          
                      
                        </Card.Body>
                      </Card>
                     
                    
                    </Col>
                    <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Card className="image-box card" >
                        <Card.Img  src="images/img1.jpg" />
                        <Card.Body>
                        <p className="product-name-on-card">Asus TUF A15 FA506IU Ryzen 7 GTX</p>
                          <p  className="product-price-on-card">price:3000TK</p>
                          
                      
                        </Card.Body>
                      </Card>
                     
                    
                    </Col>
                  </Row>
                  
                </Container>

              </Fragment>
  
      );
  
    }
  
  }
  export default FeatureProducts;