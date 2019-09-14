import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            // items: [
            //     {
            //         id: 0,
            //         title: 'Dev Grub',
            //         subTitle: 'The cookbook for developers',
            //         imgSrc: devgrub,
            //         link: 'https://devgrub.com',
            //         selected: false
            //     },
            //     {
            //         id: 1,
            //         title: 'Garrett Love',
            //         subTitle: 'YouTube channel',
            //         imgSrc: youtube,
            //         link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
            //         selected: false
            //     },
            //     {
            //         id: 2,
            //         title: 'Evverest',
            //         subTitle: 'A social network for developers',
            //         imgSrc: evverest,
            //         link: 'https://github.com/garrettlove8/evverest',
            //         selected: false
            //     },
            // ]

        }
    }


    render() {
        return(
        <Container className="p-0" fluid={true}> 
            <Row className="justify-content-center py-5">
            <h4 className="display-6 font-weight-light">Call for a quote:</h4>
                <Col md={"auto"} sm={"auto"}>
                  
                    <ul className="yellow font-weight-light">
                        <li>Diamond Replacement</li>
                        <li>Diamond Setting</li>
                        <li>Laser Repair</li>
                        <li>Solder Ring Repair</li>
                        <li>Buy Gold and Diamonds</li>
                    </ul>
                </Col>  
                <Col md={"auto"} sm={"auto"}>
                    <ul className="yellow font-weight-light">
                        <li>Ring Sizing</li>
                        <li>Ring Refinishing</li>
                        <li>Antique Jewelry Repair</li>
                        <li>Custom Jewelry Design</li>
                        <li>Watch Repair including Rolex</li>
                       
                    </ul>
                </Col>                              
            </Row>
        </Container>
        )
    }
}
export default Carousel