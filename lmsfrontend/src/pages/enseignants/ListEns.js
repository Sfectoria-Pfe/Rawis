import React from 'react'
import Liste from '../../components/Liste'

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Yassin', firstName: 'Louhichi', age: 14 },
  { id: 2, lastName: 'Mariem', firstName: 'saidani', age: 31 },
  { id: 3, lastName: 'Rania', firstName: 'Elouni', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
];

const ListEns = () => {

  
  return (
    <div>
      <Liste rows={rows} columns={columns} /> 
    </div>
  )
}

export default ListEns
