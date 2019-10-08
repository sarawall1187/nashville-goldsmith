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


     <Carousel className="carouselWidth">
        <Carousel.Item >
            <img
            className="d-block w-100"
            src="/jewelerworking.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h2>Call Us!</h2>
            <h4>We give quotes or an appointment for faster service.</h4>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src="jeweler.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <Card bg="transparent" border="light">
            <Card.Header as="h4" className="yellow" >Services Provided:</Card.Header>
            <Card.Body className="black bold" >
                <ul>
                <li>Diamond Replacement</li>
                <li>Diamond Setting</li>
                <li>Laser Repair</li>
                <li>Solder Repair</li>
                <li>Ring Sizing</li>
                <li>Ring Refinishing</li>
                <li>Antique Jewelry Repair</li>
                <li>Custom Jewelry Design</li>
                <li>Watch Repair including Rolex</li>
                <li>Buy Gold and Diamonds</li>
                <li>Plus much more!</li>

                </ul>
            </Card.Body>

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
            <p>We can make any piece you can dream up!</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </>
        )
    }
}
export default CarouselPage