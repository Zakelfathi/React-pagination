import React, {useState,useEffect} from 'react'
import "./Information.css"
import ShowData from './ShowData'


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
            <h2>
                Liste des Information  </h2>
            {data.map((d,index)=>(
              <ShowData key={d.id} {...d}/>
            ))}

        </div>
    </div>
  )
}

export default Information