import React from 'react'
import "./datatable.scss";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userCols, userRows } from '../../datasource';


const Datatable = () => {

    const actionCol = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: () => {
                return (
                    <div className='cellAction'>
                        <div className='viewButton'>View</div>
                        <div className='deleteButton'>Delete</div>
                    </div>
                );
            }
        }
    ];


  return (
    <div className='datatable'>
        <DataGrid
            rows={userRows}
            columns={userCols.concat(actionCol)}
            initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 5 },
            },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
        />
    </div>
  )
}

export default Datatable