import React from 'react';
import {Container, Image, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import HomeTitle from './HomeComponents';
import CustomNavbar from "../../universal/CustomNavbar";

const Home = () => {
    return (
        <>
        <CustomNavbar />
        <Container>
            <Row>
                <Col>
                    <HomeTitle className="d-flex justify-content-center">
                        Rewards
                    </HomeTitle>
                </Col>
            </Row>
            <Row>
                <Col xs={9} md={6}>
                    <Image fluid src="./assets/rewards.jpg" rounded />
                </Col>
                <Col xs={9} md={6}>
                    <Image fluid src="./assets/manicure.jpg" rounded />
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Home;