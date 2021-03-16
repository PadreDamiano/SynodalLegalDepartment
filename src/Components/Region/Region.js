import React, {Component} from 'react';
import {Col, Container, Nav, Row, Tab} from 'react-bootstrap';
import store from '../Store/Store';
import Navbar from "../NavBar";
import TabContent from "../Table/TabContent";


class Region extends Component {
    render() {
        let navbar = store.region.map(el => <Navbar name={el.name} id={el.id}/>);
        let tabContent = store.region.map( el => <TabContent eventKey={el.eventKey}/>);

        return (
            <div>
                <Container>
                    <Tab.Container id='left-tabs-example' defaultActiveKey="0">
                        <Row>
                            <Col sm={3}>
                                <div> {navbar}</div>
                            </Col>
                            <Col sm={9}>
                                <div>{tabContent}</div>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </div>
        )
    }
}

export default Region;

