import React, {Component} from 'react';
import {Col, Container, Row, Tab} from "react-bootstrap";
import store from "../Store/Store";
import NavBar from "../NavBar";
import TabContent from "../Table/TabContent";

class Diocese extends Component {
    render() {

        let navbar = store.diocese.map(el => <NavBar name={el.name} id={el.id}/>);
        let tabContent = store.diocese.map(el => <TabContent eventKey={el.eventKey}/>);

        return (
            <div>
                <Container>
                    <Tab.Container id='left-tabs-example' defaultActiveKey="0">
                        <Row>
                            <Col sm={3}>
                                <div> {navbar}</div>
                            </Col>
                            <Col sm={9}>
                                <div> {tabContent} </div>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </div>
        );
    }
}

export default Diocese;