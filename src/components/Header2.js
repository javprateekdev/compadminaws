import React from 'react';
import {Box,AppBar,styled, Typography,Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';


const StyledHeader = styled(AppBar)`
    background: #e5e4e4;
    height: 55px;
    float:top;
    
`;
const CustomButton = styled(Button)`
    color:'#808080',
    background:'#808080',
    font-size:50px;
    `




const MHeader = () => {

    const navigate=useNavigate()
  
    
    
    function clear() {
        localStorage.clear(); 
        navigate('/compadmin')
    }

  return (
    <StyledHeader position="fixed"  >
      <div className='mheader' style={{display:"flex"}}>
        <span><img src='https://i.imgur.com/KrEqEpO.png' style={{height:'55px',width:'180px',objectFit:'cover'}} /> </span>
        <div style={{marginTop:"15px",marginLeft:"80%"}}><button onClick={clear}>Logout</button></div>
   
 





      </div>
   
    </StyledHeader>
  )
}

export default MHeader;