import React, {Component} from 'react';
import TableAll from "../Table/TableAll";
import store from "../Store/Store";


class Observe extends Component {
    render() {
        return (
            <div>
                <TableAll data={store.diocese}/>
            </div>
        );
    }
}

export default Observe;