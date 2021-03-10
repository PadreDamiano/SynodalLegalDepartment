import React, {Component} from 'react';
import {Col, Container, Nav, Row, Tab} from 'react-bootstrap';

class Region extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id='left-tabs-example' defaultActiveKey="1">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className='flex-column mt-2'>
                                <Nav.Item>
                                    <Nav.Link eventKey='1'>
                                        Київська область</Nav.Link>
                                    <Nav.Link eventKey='2'>
                                        Вінницька область</Nav.Link>
                                    <Nav.Link eventKey='3'>
                                        Волинська область</Nav.Link>
                                    <Nav.Link eventKey='4'>
                                        Дніпропетровська область</Nav.Link>
                                    <Nav.Link eventKey='5'>
                                        Донецька область</Nav.Link>
                                    <Nav.Link eventKey='6'>
                                        Житомирська область</Nav.Link>
                                    <Nav.Link eventKey='7'>
                                        Закарпатська область</Nav.Link>
                                    <Nav.Link eventKey='8'>
                                        Запорізька область</Nav.Link>
                                    <Nav.Link eventKey='9'>
                                        Івано-Франківська область</Nav.Link>
                                    <Nav.Link eventKey='10'>
                                        Кіровоградська область</Nav.Link>
                                    <Nav.Link eventKey='11'>
                                        Луганська область</Nav.Link>
                                    <Nav.Link eventKey='12'>
                                        Львівська область</Nav.Link>
                                    <Nav.Link eventKey='13'>
                                        Миколаївська область</Nav.Link>
                                    <Nav.Link eventKey='14'>
                                        Одеська область</Nav.Link>
                                    <Nav.Link eventKey='15'>
                                        Полтавська область</Nav.Link>
                                    <Nav.Link eventKey='16'>
                                        Рівненська область</Nav.Link>
                                    <Nav.Link eventKey='17'>
                                        Сумська область</Nav.Link>
                                    <Nav.Link eventKey='18'>
                                        Тернопільська область</Nav.Link>
                                    <Nav.Link eventKey='19'>
                                        Харківська область</Nav.Link>
                                    <Nav.Link eventKey='20'>
                                        Херсонська область</Nav.Link>
                                    <Nav.Link eventKey='21'>
                                        Хмельницька область</Nav.Link>
                                    <Nav.Link eventKey='22'>
                                        Черкаська область</Nav.Link>
                                    <Nav.Link eventKey='23'>
                                        Чернівецька область</Nav.Link>
                                    <Nav.Link eventKey='24'>
                                        Чернігівська область</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='mt-3'>
                                <Tab.Pane eventKey='1'>
                                    Hic inventore, laboriosam minima obcaecati quaerat quibusdam.
                                </Tab.Pane>
                                <Tab.Pane eventKey='2'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quos.
                                </Tab.Pane>
                                <Tab.Pane eventKey='3'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, rem!
                                </Tab.Pane>
                                <Tab.Pane eventKey='4'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, rem!
                                </Tab.Pane>
                                <Tab.Pane eventKey='5'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, rem!
                                </Tab.Pane>
                                <Tab.Pane eventKey='6'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, rem!
                                </Tab.Pane>
                                <Tab.Pane eventKey='7'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, rem!
                                </Tab.Pane>
                                <Tab.Pane eventKey='8'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, rem!
                                </Tab.Pane>
                                <Tab.Pane eventKey='9'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, rem!
                                </Tab.Pane>
                                <Tab.Pane eventKey='10'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, rem!
                                </Tab.Pane>
                                <Tab.Pane eventKey='11'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, rem!
                                </Tab.Pane>
                                <Tab.Pane eventKey='12'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, rem!
                                </Tab.Pane>
                                <Tab.Pane eventKey='13'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, rem!
                                </Tab.Pane>
                                <Tab.Pane eventKey='14'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, rem!
                                </Tab.Pane>
                                <Tab.Pane eventKey='15'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, rem!
                                </Tab.Pane>
                                <Tab.Pane eventKey='16'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, rem!
                                </Tab.Pane>
                                <Tab.Pane eventKey='17'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, rem!
                                </Tab.Pane>
                                <Tab.Pane eventKey='18'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, rem!
                                </Tab.Pane>
                                <Tab.Pane eventKey='19'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, rem!
                                </Tab.Pane>
                                <Tab.Pane eventKey='20'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, rem!
                                </Tab.Pane>
                                <Tab.Pane eventKey='21'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, rem!
                                </Tab.Pane>
                                <Tab.Pane eventKey='22'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, rem!
                                </Tab.Pane>
                                <Tab.Pane eventKey='23'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, rem!
                                </Tab.Pane>
                                <Tab.Pane eventKey='24'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, rem!
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default Region;