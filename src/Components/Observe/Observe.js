import React, {Component} from 'react';
import Table from "../Table/Table";
import store from "../Store/Store";


class Observe extends Component {
    render() {
        return (
            <div>
                <Table data={store.diocese}/>
            </div>
        );
    }
}

export default Observe;