import React, {Component} from 'react';
import {Col, Container, Nav, Row, Tab} from 'react-bootstrap';
import store from '../Store';
import Navbar from "../Navbar";


const Region = () => {
let region = store.region.map(el=> <Navbar name={el.name} id={el.id}/>
);
    return(
        <div>
            <Container>
                <Tab.Container  id='left-tabs-example' defaultActiveKey="0">
                    <Row>
                        <Col sm={3}>
                            <div> {region}</div>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='mt-3'>
                                <Tab.Pane eventKey='0'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, soluta?
                                </Tab.Pane>
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
        </div>
    )
}

export default Region;

