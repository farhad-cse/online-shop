import React, {Component,Fragment } from "react";
import { Container,Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class NewArrival extends Component {

    constructor(props){

      super(props);
      this.next=this.next.bind(this);
      this.previous=this.previous.bind(this);

    }

    next(){
        this.Slider.slickNext();

    }
    previous(){
        this.Slider.slickPrev();

    }

    render(){
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed:3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return(
         <Container className="text-center" fluid="true">
           <h4 className="section-title px-0 mx-0">NEW ARRIVAL
            <a className="btn btn-sm ml-2 site-btn" onClick={this.previous}>
              <i className="fa fa-angle-left"></i>

            </a>
            <a className="btn btn-sm ml-2 site-btn" onClick={this.next}>
              <i className="fa fa-angle-right"></i>
            </a>
           </h4>
             
           <Slider  ref={c=>(this.Slider=c)} {...settings}>
          <div>
          <Card className="image-box card " >
              <Card.Img  src="images/img1.jpg" />
               <Card.Body>
                  <p className="product-name-on-card">Asus TUF A15 FA506IU Ryzen 7 GTX</p>
                  <p className="product-price-on-card">price:3000TK</p>
                </Card.Body>
           </Card>
          </div>
          <div>
          <Card className="image-box card " >
              <Card.Img  src="images/img1.jpg" />
               <Card.Body>
                  <p className="product-name-on-card">Asus TUF A15 FA506IU Ryzen 7 GTX</p>
                  <p className="product-price-on-card">price:3000TK</p>
                </Card.Body>
           </Card>
          </div>
          <div>
          <Card className="image-box card " >
              <Card.Img  src="images/img1.jpg" />
               <Card.Body>
                  <p className="product-name-on-card">Asus TUF A15 FA506IU Ryzen 7 GTX</p>
                  <p className="product-price-on-card">price:3000TK</p>
                </Card.Body>
           </Card>
          </div>
          <div>
          <Card className="image-box card " >
              <Card.Img  src="images/img1.jpg" />
               <Card.Body>
                  <p className="product-name-on-card">Asus TUF A15 FA506IU Ryzen 7 GTX</p>
                  <p className="product-price-on-card">price:3000TK</p>
                </Card.Body>
           </Card>
          </div>
          <div>
          <Card className="image-box card " >
              <Card.Img  src="images/img1.jpg" />
               <Card.Body>
                  <p className="product-name-on-card">Asus TUF A15 FA506IU Ryzen 7 GTX</p>
                  <p className="product-price-on-card">price:3000TK</p>
                </Card.Body>
           </Card>
          </div>
          <div>
          <Card className="image-box card " >
              <Card.Img  src="images/img1.jpg" />
               <Card.Body>
                  <p className="product-name-on-card">Asus TUF A15 FA506IU Ryzen 7 GTX</p>
                  <p className="product-price-on-card">price:3000TK</p>
                </Card.Body>
           </Card>
          </div>
          <div>
          <Card className="image-box card " >
              <Card.Img  src="images/img1.jpg" />
               <Card.Body>
                  <p className="product-name-on-card">Asus TUF A15 FA506IU Ryzen 7 GTX</p>
                  <p className="product-price-on-card">price:3000TK</p>
                </Card.Body>
           </Card>
          </div>
          <div>
           <Card className="image-box card " >
              <Card.Img  src="images/img1.jpg" />
               <Card.Body>
                  <p className="product-name-on-card">Asus TUF A15 FA506IU Ryzen 7 GTX</p>
                  <p className="product-price-on-card">price:3000TK</p>
                </Card.Body>
           </Card>
          </div>
        </Slider>
         </Container>
  
      );
  
    }
  
  }
  export default NewArrival;