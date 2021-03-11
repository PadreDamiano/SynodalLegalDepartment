import React, { Component } from 'react';
import {BootstrapTable,
    TableHeaderColumn} from 'react-bootstrap-table';
import '../css/Table.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'


function onSelectRow(row, isSelected, e) {
    if (isSelected) {
        alert(`You just selected '${row['name']}'`)
    }
}

const selectRowProp = {
    mode: 'checkbox',
    clickToSelect: true,
    unselectable: [2],
    selected: [1],
    onSelect: onSelectRow,
    bgColor: 'gold'
};

class Table extends Component {
    render() {
        return (
            <div className='m-3'>
                <BootstrapTable data={this.props.data}
                                selectRow={selectRowProp}
                >
                    <TableHeaderColumn width = '5%' isKey dataField='id'
                    >
                        ID
                    </TableHeaderColumn>
                    <TableHeaderColumn width = '25%' dataField='name'
                    >
                        Name
                    </TableHeaderColumn>
                    <TableHeaderColumn width = '70%' dataField='eventKey'
                    >
                        Value
                    </TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

export default Table;