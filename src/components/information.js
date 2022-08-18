import React, {useState,useEffect} from 'react'
import "./Information.css"
import ShowData from './ShowData'
import pagination from './pagination/pagination'

const Information = () => {
    const [data, setData]= useState([]);
    const URL ="https://jsonplaceholder.typicode.com/posts";

//pagination
const PER_PAGE = 7;
const [currentPage,setCurrentPage] = useState(1);
const handlePageClick = (({selected: selecTedPage})=>{
    setCurrentPage(selecTedPage);
})

const offSet = currentPage*PER_PAGE;
const currentPageData = data.slice(offSet,offSet+PER_PAGE);
const pageCount = Math.ceil(data.length/PER_PAGE);

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
            {currentPageData.map((d,index)=>(
              <ShowData key={d.id} {...d}/>
            ))}
        </div>
        <div className='card pagination'>
            <pagination pageCount={pageCount} handlePageClick={handlePageClick}/>
        </div>
    </div>
  );
};

export default Information