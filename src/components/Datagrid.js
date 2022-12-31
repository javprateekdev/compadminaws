import {Table,TableBody, TableCell, TableHead, TableRow ,styled} from '@mui/material'
import React from 'react'
import {deleteflat } from '../api';
import { useEffect,useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { getallflatdata } from '../api';

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
    await deleteflat(id)
    getAllUsers();

 }
  const getAllUsers=async()=>{
    let response= await  getallflatdata();
    setUsers(response.data)
   // console.log(response.data)
   }
  return (
    <StyledTable style={{marginTop:"50px"}}>
      <TableHead>
        <THead>
        <TableCell>Id</TableCell>
        <TableCell>Title</TableCell>
        <TableCell>Label</TableCell>
        <TableCell>Possession Date</TableCell>
        <TableCell>Ready/Under</TableCell>
        <TableCell>BHK</TableCell>
        <TableCell>price</TableCell>
        <TableCell>Super Area</TableCell>
        <TableCell>Carpet Area</TableCell>
        <TableCell>No of Balconies</TableCell>
        <TableCell>Loading</TableCell>
        <TableCell>Electric load</TableCell>
        <TableCell>Power backup</TableCell>
        <TableCell>Furnished or Semifernished</TableCell>
        <TableCell>Ceiling Height</TableCell>
        <TableCell>Main Door Height</TableCell>
        <TableCell>Internal Door Heights</TableCell>
        
        <TableCell>Action</TableCell>
        
        </THead>
        
      </TableHead>
      <TableBody>
        {
          users.map(user=>(
            <TRow >
              
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.title}</TableCell>
              <TableCell>{user.label}</TableCell>
              <TableCell>{user.serviceTime}</TableCell>
              <TableCell>{user.category}</TableCell>
              <TableCell>{user.rating}BHK</TableCell> 
              <TableCell>{user.price}Cr</TableCell>
              <TableCell>{user.SuperArea}</TableCell>
              <TableCell>{user.CarpetArea}</TableCell>
              <TableCell>{user.NoofBalconies}</TableCell>
              <TableCell>{user.Loading}</TableCell>
              <TableCell>{user.Electricload}</TableCell>
              <TableCell>{user.Powerbackup}</TableCell>
              <TableCell>{user.FurnishedorSemifernished}</TableCell>
              <TableCell>{user.CeilingHeight}</TableCell>
              <TableCell>{user.MainDoorHeight}</TableCell>
              <TableCell>{user.InternalDoorHeights}</TableCell>
              
              <TableCell>
              <EditIcon />
               <DeleteIcon onClick={()=>deleteUserdetails(user.id) }/>
        </TableCell>
            </TRow >
          ))
           }
      </TableBody>
    </StyledTable>
  )
}

export default AllProjects;