import React, {useState} from 'react'
import { FcCollapse,FcExpand } from "react-icons/fc";

const ShowData = ({title,body}) => {

    const [show,setShow] = useState(false);

    const showItem = () =>{
        setShow(!show)
    }

  return (
    <React.Fragment>
        <div className='card card-design' onClick={showItem}>
            <div className='collapse-icons'>
                <h6>{title}</h6>
                <p >
                    {show?<FcCollapse size={20}/>: <FcExpand size={20}/>}
                </p>
            </div>
            {show && <p>{body}</p>}
        </div>
    </React.Fragment>
    );
};

export default ShowData