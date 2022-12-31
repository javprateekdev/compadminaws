import {Table,TableBody, TableCell, TableHead, TableRow ,styled} from '@mui/material'
import React from 'react'
import {getalldata,deleteUser } from '../api';
import { useEffect,useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTable = styled(Table)`
padding: 0px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 12px;
        background: #000000;
        color: #FFFFFF;
        white-space: nowrap;
        text-align: left;
        position: sticky;
       top:0px;
       
    }
   
`;

const TRow = styled(TableRow)`
   
    & > td{
        font-size: 12px;
      padding:0px;
      align-items: center;
    }
   
  ` 

const AllProjects = () => {
  
 const [users,setUsers]=useState([]);
 console.log(users)
  useEffect(()=>{
    getAllUsers();
  },[]);
  
const deleteUserdetails=async(id)=>{
     await deleteUser(id)
     getAllUsers();

  }
  const getAllUsers=async()=>{
    let response= await getalldata();
    setUsers(response.data)
   // console.log(response.data)
   }
  return (
    <StyledTable style={{marginTop:"50px"}}>
      <TableHead>
        <THead>
        <TableCell>Id</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Label</TableCell>
        <TableCell>Project Plot Area</TableCell>
        <TableCell>Price Range</TableCell>
        <TableCell>Possesion date</TableCell>
        <TableCell>Podium/NonPodium</TableCell>
        <TableCell>Tower Heights</TableCell>
        <TableCell>Total Towers</TableCell>
        <TableCell>Total Flats</TableCell>
        <TableCell>Property Status</TableCell>
        <TableCell>OC Status</TableCell>
        <TableCell>Density</TableCell>
        <TableCell>Club House Size</TableCell>
        <TableCell>Approved Bank</TableCell>
        <TableCell>Action</TableCell>
        
        </THead>
        
      </TableHead>
      <TableBody>
        {
          users.map(user=>(
            <TRow >
              
              <TableCell>{user.u_id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.label}</TableCell>
              <TableCell>{user.ProjectPlotArea}</TableCell>
              <TableCell>{user.PriceRange}</TableCell>
              <TableCell>{user.PossessionDate}</TableCell> 
              <TableCell>{user.PodiumNonPodium}</TableCell>
              <TableCell>{user.TowerHeights}</TableCell>
              <TableCell>{user.TotalTowers}</TableCell>
              <TableCell>{user.TotalFlats}</TableCell>
              <TableCell>{user.PropertyStatus}</TableCell>
              <TableCell>{user.OCStatus}</TableCell>
              <TableCell>{user.Density}</TableCell>
              <TableCell>{user.ClubHouseSize}</TableCell>
              <TableCell>{user.ApprovedBank}</TableCell>
              
              <TableCell>
              <EditIcon />
               <DeleteIcon onClick={()=>deleteUserdetails(user.u_id) }/>
        </TableCell>
            </TRow >
          ))
           }
      </TableBody>
    </StyledTable>
  )
}

export default AllProjects;