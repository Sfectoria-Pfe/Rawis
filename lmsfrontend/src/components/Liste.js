import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, gridClasses } from '@mui/x-data-grid';

const Liste = ({rows, columns}) => {
    return (
        <div>
            <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row.id}
          getRowSpacing={(params) => ({
            top: params.isFirstVisible ? 0 : 5,
            bottom: params.isLastVisible ? 0 : 5,
          })}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          sx={{
            [`& .${gridClasses.row}`]: {
              bgcolor: "#daeaf088",
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
            </Box>
        </div>
    )
}

export default Liste
