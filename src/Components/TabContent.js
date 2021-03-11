import React from 'react';
import {Tab} from "react-bootstrap";

const TabContent = (props) => {
    return (
        <div>
            <Tab.Content className='mt-3'>
                <Tab.Pane eventKey={props.eventKey}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aliquam at beatae, culpa cum cumque
                    cupiditate debitis dolorem expedita facilis, hic illum odit perferendis placeat quibusdam quo
                    repellat sed sequi?
                </Tab.Pane>
            </Tab.Content>
        </div>
    )
};

export default TabContent;