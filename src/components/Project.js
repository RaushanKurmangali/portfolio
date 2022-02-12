import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Project = () => {
    return(
        <Container fluid id="projects" style={{padding: "20px", fontFamily:"Roboto", marginTop: "20%"}}>
            <h1 style={{width: "100%", textAlign: "center", marginBottom: "10px", marginTop: "20px", color: "#db9487", textShadow: "1px 1px 2px #db9487"}}>Projects</h1>
            <Row style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{ width: '100%', margin: "20px 0" }}>
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Project;