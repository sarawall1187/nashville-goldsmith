import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'; 
import CardGroup from 'react-bootstrap/CardGroup';
import CardColumns from 'react-bootstrap/CardColumns'
import Carousel from 'react-bootstrap/Carousel'


class CarouselPage extends React.Component {

    render() {
        return(
            <>
            {/* <CardColumns>
            <Card bg="transparent" text="white" border="light">
                <Card.Header as="h5">Services Provided:</Card.Header>
                    <ListGroup variant="flush" bg="dark">
                        <ListGroup.Item variant="dark">Diamond Replacement</ListGroup.Item>
                        <ListGroup.Item variant="dark">Diamond Setting</ListGroup.Item>
                        <ListGroup.Item variant="dark">Laser Repair</ListGroup.Item>
                        <ListGroup.Item variant="dark">Solder Repair</ListGroup.Item>
                        <ListGroup.Item variant="dark">Ring Sizing</ListGroup.Item>
                        <ListGroup.Item variant="dark">Ring Refinishing</ListGroup.Item>
                        <ListGroup.Item variant="dark">Antique Jewelry Repair</ListGroup.Item>
                        <ListGroup.Item variant="dark">Custom Jewelry Design</ListGroup.Item>
                        <ListGroup.Item variant="dark">Watch Repair including Rolex</ListGroup.Item>
                        <ListGroup.Item variant="dark">Buy Gold and Diamonds</ListGroup.Item>
                        <ListGroup.Item variant="dark">Plus much more!</ListGroup.Item>
                    </ListGroup>
            </Card>
      
        <Card className="bg-dark text-black" >
                <Card.Img src="/jeweler.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Call Us!</Card.Title>
                    <Card.Text>
                      We give quotes or an appointment for faster service.
                    </Card.Text>
                </Card.ImgOverlay>
              </Card>
        </CardColumns> */}



     <Carousel className="carouselWidth">
        <Carousel.Item >
            <img
            className="d-block w-100"
            src="/jeweler.jpg"
            alt="First slide"
            />
            <Carousel.Caption className="text-black">
            <h2 className="text-black">Call Us!</h2>
            <h4 className="text-black">We give quotes or an appointment for faster service.</h4>
            </Carousel.Caption>
        </Carousel.Item>
         <Carousel.Item>
            <img
            className="d-block w-100"
            src="jewelerworking.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <Card bg="transparent" text="white" border="light">
            <Card.Header as="h5">Services Provided:</Card.Header>
            <Card.Body>
                <ul>
                <li>Diamond Replacement</li>
                <li>Diamond Setting</li>
                <li>Laser Repair</li>
                <li>Diamond Replacement</li>
                <li>Diamond Replacement</li>
                <li>Diamond Replacement</li>
                <li>Diamond Replacement</li>
                <li>Diamond Replacement</li>
                <li>Diamond Replacement</li>
                </ul>
            </Card.Body>
              {/* <ListGroup bg="transparent">
                        <ListGroup.Item>Diamond Replacement</ListGroup.Item>
                        <ListGroup.Item>Diamond Setting</ListGroup.Item>
                        <ListGroup.Item>Laser Repair</ListGroup.Item>
                        <ListGroup.Item>Solder Repair</ListGroup.Item>
                        <ListGroup.Item>Ring Sizing</ListGroup.Item>
                        <ListGroup.Item>Ring Refinishing</ListGroup.Item>
                        <ListGroup.Item>Antique Jewelry Repair</ListGroup.Item>
                        <ListGroup.Item>Custom Jewelry Design</ListGroup.Item>
                        <ListGroup.Item>Watch Repair including Rolex</ListGroup.Item>
                        <ListGroup.Item>Buy Gold and Diamonds</ListGroup.Item>
                        <ListGroup.Item>Plus much more!</ListGroup.Item>
                    </ListGroup> */}
                    </Card>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="bandspic.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Make Her Dreams Come True!</h3>
            <p>We can make anything you can dream up!</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </>
        )
    }
}
export default CarouselPage