import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Protected = (props) => {
  /*
    const login=useSelector((state) => state.cart)
    const arr=[].concat(...login)
    console.log(arr[1])
    const{Component}=props
    const navigate=useNavigate()



    useEffect(()=>{
    if(arr[1]==false || arr[1]==undefined)
    {
        navigate('/compadmin')
    }
})

*/
const{Component}=props
    const navigate=useNavigate()
const currstate=localStorage.getItem('login')

useEffect(()=>{
  if(currstate!=='Yes')
  {
      navigate('/compadmin')
  }
})

  return (
    <div>
        <Component />
    </div>
  )
}

export default Protected;