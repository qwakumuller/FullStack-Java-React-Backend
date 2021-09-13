import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import { useEffect, useState, useRef } from 'react'
import {Link} from 'react-router-dom';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
   const[rowData, setrowData ] = useState([]);
   const[colDefs, setcolDefs] = useState([
    {field: "firstName"},
    {field: "lastName"},
    {field: "country"},
    {field: "department"},
    {headerName:"Action"}


  ])
   
    
  useEffect(() => {
    fetch('http://localhost:8080/log')
    .then(result => result.json())
     .then(rowData => setrowData(rowData))
     .then(data=> console.log(data));
    
      
  }, [])

   return (
       <div>
           <h1> SPRING-BOOT- REACTJS- FULL STACk</h1>
           <Link to ="/create"><button> ADD USER</button></Link>

       <div className="ag-theme-alpine" style={{height: 400, width: 800}}>
           <AgGridReact
           
               rowData={rowData}
                 columnDefs={colDefs} >
               
           </AgGridReact>
       </div>
       </div>
   );
};

export default App;
