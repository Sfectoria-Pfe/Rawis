import React from 'react'
import Liste from '../../components/Liste'

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'nom',
    headerName: 'Nom',
    width: 150,
    editable: true,
  },
  {
    field: 'prénom',
    headerName: 'Prénom',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 110,
    editable: true,
  },
  {
    field: 'nomcomplet',
    headerName: 'Nom complet',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.nom || ''} ${row.prénom || ''}`,
  },
  {
    field: 'matiere',
    headerName: 'Matière',
    width: 110,
    editable: true,
  },
];

const rows = [
  { id: 1, nom: 'Yassin', prénom: 'Louhichi',email :'yassin@gmil.com', matiere :'Spring boot' },
  { id: 2, nom: 'Mariem', prénom: 'saidani',email :'mariem@gmil.com', matiere : 'Angular'},
  { id: 3, nom: 'Rania', prénom: 'Elouni',email :'rania@gmil.com', matiere:'Full Stack' },
  { id: 4, nom: 'Stark', prénom: 'Arya',email :'noOne@gmil.com', matiere :'No one' },
];

const ListEns = () => {

  
  return (
    <div>
      <Liste rows={rows} columns={columns} /> 
    </div>
  )
}

export default ListEns
