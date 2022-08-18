import React, {useState,useEffect} from 'react'
import "./Information.css"

const Information = () => {
    const [data, setData]= useState([]);
    const URL ="https://jsonplaceholder.typicode.com/posts";

const loadApiData = () =>{
    fetch(URL,{
        method:"GET"
    }).then(res=>res.json())
    .then(result=>{
        if(result){
            setData(result);
        }
    }).catch(err=>{
        console.log(err);
    });
};

useEffect(()=>{
    loadApiData();
},[]);



  return (
    <div className='container'>
        <div className='info-design'>
            <h6>
                Liste des Information
            </h6>

        </div>
    </div>
  )
}

export default Information