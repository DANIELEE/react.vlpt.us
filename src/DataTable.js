//https://www.youtube.com/watch?v=S_mgSHCWCmA

import React, {useState, useEffect} from 'react';
import {DataGrid} from '@material-ui/data-grid'

const columns = [
    {field : 'id', headerName : 'ID'},
    {field : 'name', headerName : 'Name', width : 300},
    {field : 'email', headerName : 'Email', width : 600}
]

const DataTable = () => {

    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((data) => setTableData(data))
    })

    return(
        <div style={{height : 700, width : '100%'}}>
            <DataGrid
            rows={tableData}
            columns={columns}
            pageSize={100}
            checkboxSelection
            />
        </div>
    )
}

export default DataTable;
