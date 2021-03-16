import React, { Component } from 'react';
import {BootstrapTable,
    TableHeaderColumn} from 'react-bootstrap-table';
import '../../css/Table.css';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

function onSelectRow(row, isSelected, e) {
    if (isSelected) {
        alert(`You just selected '${row['name']}'`)
    }
}


function showTotal() {
    return <p>All</p>
}


function onInsertRow(row) {
    let newRowStr = ''

    for (const prop in row) {
        newRowStr += prop + ': ' + row[prop] + ' \n'
    }
    alert('You inserted:\n ' + newRowStr)
}

function onDeleteRow(rowKeys) {
    alert('You deleted: ' + rowKeys)
}

class TableAll extends Component {
    render() {
        const selectRowProp = {
            mode: 'checkbox',
            clickToSelect: true,
            unselectable: [2],
            selected: [1],
            onSelect: onSelectRow,
            bgColor: 'gold'
        };

        const options = {
            page: 1,
            prePage:  '⟵',
            nextPage: '⟶',
            firstPage: '⟸',
            lastPage: '⟹',
            paginationShowsTotal: showTotal,
            afterInsertRow: onInsertRow,
            afterDeleteRow: onDeleteRow
        };

        const cellEditProp = {
            mode: 'dbclick',
            nonEditableRows: () => {
                return [3];
            }
        };

        return (
            <div className='m-3'>
                <BootstrapTable data={this.props.data}
                                insertRow={true}
                                deleteRow={true}
                                selectRow={selectRowProp}
                                pagination={true}
                                options={options}
                                cellEdit={cellEditProp}
                                exportCSV
                                csvFileName='data.csv'

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

export default TableAll;