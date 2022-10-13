import React, { useState, useEffect } from 'react';
import { forwardRef } from 'react';
import Avatar from 'react-avatar';
import Grid from '@material-ui/core/Grid'

import MaterialTable from "material-table";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FilterListIcon from '@mui/icons-material/FilterList';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import RemoveIcon from '@mui/icons-material/Remove';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SearchIcon from '@mui/icons-material/Search';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios'


const tableIcons = {
  
  DetailPanel: forwardRef((props, ref) => <ChevronRightIcon {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAltIcon {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterListIcon {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPageIcon {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPageIcon {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRightIcon {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeftIcon {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <SearchIcon {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownwardIcon {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <RemoveIcon {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumnIcon {...props} ref={ref} />)
};



function App() {

    const [listOfUsers, setListOfUsers] = useState([]);

  var columns = [
    {title: "id", field: "id", hidden: true},
    {title: "Avatar", render: rowData => <Avatar maxInitials={1} size={40} round={true} name={rowData === undefined ? " " : rowData.first_name} />  },
    {title: "Full name", field: "full_name"},
    {title: "Date of Birth", field: "dob"},
    {title: "Email", field: "email"},
    {title: "Contact", field: "contact"}
  ]
 



  useEffect(()=>{
    axios.get('http://localhost:4002/viewList')
      .then((response)=>{
        setListOfUsers(response.data)
    })
      .catch(()=>{
        console.log("ERR");
      });
  }, []);
 



  return (
    <div className="App">
      
      <Grid container spacing={1}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
          <div>      
          </div>
            <MaterialTable
              title="User data from remote source"
              columns={columns}
              data={listOfUsers}
              icons={tableIcons}
            />
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
    </div>
  );
}

export default App;