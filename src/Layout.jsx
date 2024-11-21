import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Layout = () => {
    return (
        <Container fluid >
            {/* Header */}
            <Row className="bg-dark py-3">
                <Col>
                    <div className="d-flex justify-content-between">
                        <div className="bg-secondary" style={{ width: "30px", height: "30px" }}></div>
                        <div className='d-flex' style={{ gap: "10px" }}>
                            <div className="bg-secondary" style={{ width: "80px", height: "30px" }}></div>
                            <div className="bg-light" style={{ width: "120px", height: "30px", borderRadius: "5px" }}></div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>

                {/* Main Content */}
                <Col md={9} className="bg-light py-4">
                    <Form>
                        <Row className="mb-3">
                            <Col>
                                <Form.Control className='bg-secondary' style={{ width: "180px" }} type="text" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Control className='bg-secondary' style={{ width: "350px" }} type="text" />
                            </Col>
                        </Row>

                        {/* ####### */}

                        <Row className="mb-3 mt-5">
                            <Col>
                                <Form.Control className='bg-secondary' style={{ width: "50px", height: "15px" }} type="text" />
                                <Form.Control className='bg-secondary' style={{ width: "400px" }} type="text" />
                            </Col>
                        </Row>

                        <Row className="mb-3 d-flex">
                            <Col>
                                <Form.Control className='bg-secondary' style={{ width: "50px", height: "15px" }} type="text" />
                                <Form.Control className='bg-secondary' style={{ width: "200px" }} type="text" />
                            </Col>
                            <Col>
                                <Form.Control className='bg-secondary' style={{ width: "50px", height: "15px" }} type="text" />
                                <Form.Control className='bg-secondary' style={{ width: "200px" }} type="text" />
                            </Col>
                            <Col>
                                <Form.Control className='bg-secondary' style={{ width: "50px", height: "15px" }} type="text" />
                                <Form.Control className='bg-secondary' style={{ width: "200px" }} type="text" />
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Col>
                                <Form.Control className='bg-secondary' style={{ width: "50px", height: "15px" }} type="text" />
                                <Form.Control as="textarea" rows={10} className="bg-secondary mb-2" style={{ width: "100%", height: "20px" }} />


                            </Col>
                        </Form.Group>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div className="bg-secondary" style={{ width: "90px", height: "40px" }}></div>
                            <div className="bg-secondary" style={{ width: "90px", height: "40px" }}></div>
                        </div>
                    </Form>
                </Col>

                {/* Right Section */}
                <Col md={3} className="bg-light py-4">
                    <Row className="mb-3 d-flex">
                        <Col>
                            <div className="bg-secondary mb-3" style={{ width: "80%", height: "100px" }}></div>
                            <div className="bg-secondary mb-2" style={{ width: "80%", height: "20px" }}></div>
                            <div className="bg-secondary mb-2" style={{ width: "50%", height: "20px" }}></div>
                        </Col>

                        <Col>
                            <div className="bg-secondary mb-2" style={{ width: "100%", height: "20px" }}></div>
                            <div className="bg-secondary mb-2" style={{ width: "100%", height: "20px" }}></div>
                            <div className="bg-secondary mb-2" style={{ width: "100%", height: "20px" }}></div>
                            <div className="bg-secondary mb-2" style={{ width: "100%", height: "20px" }}></div>
                            <div className="bg-secondary mb-2" style={{ width: "50%", height: "20px" }}></div>
                        </Col>
                    </Row>


                    <div className="bg-secondary mb-3" style={{ width: "100%", height: "200px" }}></div>
                    <div className="bg-secondary mb-2" style={{ width: "100%", height: "20px" }}></div>
                    <div className="bg-secondary" style={{ width: "100%", height: "20px" }}></div>

                    <br />

                    <div style={{ display: "flex", gap: "10px" }}>
                        <div className="bg-secondary" style={{ width: "30px", height: "30px" }}></div>
                        <div className="bg-secondary" style={{ width: "30px", height: "30px" }}></div>
                        <div className="bg-secondary" style={{ width: "30px", height: "30px" }}></div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Layout
