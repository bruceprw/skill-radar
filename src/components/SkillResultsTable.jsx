import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'sn', headerName: "Service Number", width: 130},
  { field: 'FirstName', headerName: 'First name', width: 130 },
  { field: 'Surname', headerName: 'Last name', width: 130 },
  { field: 'Email', headerName: "Email", width: 130},
];

  const rows = [
    {
        id: 1,
        sn: "6001656",
        FirstName: "Samuel",
        Surname: "Kirwin",
        Email: "db@skirwin.com",
        Rank: "Mr"
    },
    {
        id: 2,
        sn: "1",
        FirstName: "Test",
        Surname: "User",
        Email: "test@email.com",
        Rank: "Mr"
    },
    {
        id: 3,
        sn: "12345678",
        FirstName: "Luke",
        Surname: "Dale",
        Email: "ld@email.com",
        Rank: "Captain"
    }
]

export default function SkillResultsTable({passResults}) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={passResults.map((result, idx) => ({...result, id: idx}))}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}