import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'; 
import CardGroup from 'react-bootstrap/CardGroup';
import CardDeck from 'react-bootstrap/CardDeck'


class Carousel extends React.Component {

    render() {
        return(
            <CardDeck>
            {/* <Container>            
            <Row className="center">
                <Col> */}
              <Card bg="transparent" text="white" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Text as="h4">
                      Call for quotes or an appointment for faster service.
                    </Card.Text>
                </Card.Body>
                    <Card.Img variant="top" src="/jeweler.jpg" fluid/>
            </Card>
        {/* </Col>
        <Col > */}
            <Card bg="transparent" text="white" style={{ width: '18rem' }}>
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
            {/* </Col>
        </Row>
        </Container> */}
        </CardDeck>
        )
    }
}
export default Carousel