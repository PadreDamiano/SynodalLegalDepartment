import React, {Component} from 'react';
import Table from "../Table";
import store from "../Store";


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