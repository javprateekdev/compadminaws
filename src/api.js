import axios from 'axios';

const URL = 'http://localhost:8000';

export const getalldata=async ()=>{
    try{
       return await axios.get(`${URL}/compare/data`);
    }catch(error){
        console.log('Eror while calling getUsers API',error)
    }
    
}
export const deleteUser=async (id)=>{
    try{
        return await axios.delete(`http://localhost:8000/compare/data/${id}`);

    }catch(error){
        console.log('Error while calling deleteUser')
    }

}
export const getallflatdata=async ()=>{
    try{
       return await axios.get(`http://localhost:8000/flatdata`);
    }catch(error){
        console.log('Eror while calling getUsers API',error)
    }
    
}

export const deleteflat=async (id)=>{
    try{
        return await axios.delete(`http://localhost:8000/flatdata/${id}`);

    }catch(error){
        console.log('Error while calling deleteUser')
    }

}