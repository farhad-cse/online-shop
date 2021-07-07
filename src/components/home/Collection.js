import React, {Component,Fragment } from "react";
import { Container,Col, Card, Row } from "react-bootstrap";

class Collection extends Component {
    render(){
      return(
              <Fragment>
                <Container className="text-center" fluid={true}>
                  <h5 className="section-title ">SPECIAL COLLECTION</h5>
                  <p className="section-sub-title"> some of our exclusive collections you may like</p>
                  <Row>
                    <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                      <Card className="image-box card text-center" >
                          <Card.Img  src="images/img1.jpg" />
                          <Card.Body>
                          <p className="product-name-on-card">Asus TUF A15 FA506IU Ryzen 7 GTX</p>
                            <p  className="product-price-on-card">price:3000TK</p>
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                      <Card className="image-box card text-center" >
                          <Card.Img  src="images/img1.jpg" />
                          <Card.Body>
                          <p className="product-name-on-card">Asus TUF A15 FA506IU Ryzen 7 GTX</p>
                            <p  className="product-price-on-card">price:3000TK</p>
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                      <Card className="image-box card text-center" >
                          <Card.Img  src="images/img1.jpg" />
                          <Card.Body>
                          <p className="product-name-on-card">Asus TUF A15 FA506IU Ryzen 7 GTX</p>
                            <p  className="product-price-on-card">price:3000TK</p>
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                      <Card className="image-box card text-center" >
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
  export default Collection;