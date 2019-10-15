import React from 'react'

import Card from 'react-bootstrap/Card';
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
                    <h3>Call Us!</h3>
                    <h4><a className="yellow" href="tel:615-426-1733">615-426-1733</a></h4>
                    <p>We give quotes or an appointment for faster service.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item  className="servicesCard">
                    <img
                    className="d-block w-100"
                    src="jeweler.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption className="servicesList">
                    <Card bg="transparent">
                    <Card.Header as="h4" className="yellow">Services Provided:</Card.Header>
                    <Card.Body className="black" >
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
                    <h3 className="yellow">Make Her Dreams Come True!</h3>
                    <p className="yellow">We can make any piece you can dream up!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
        )
    }
}
export default CarouselPage