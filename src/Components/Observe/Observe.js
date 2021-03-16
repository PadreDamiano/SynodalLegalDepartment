import React, {Component} from 'react';
import TableAll from "../Table/TableAll";
import storeRow from "../Store/StoreRow";


class Observe extends Component {
    render() {
        return (
            <div>
                <TableAll data={storeRow.diocese}/>
            </div>
        );
    }
}

export default Observe;