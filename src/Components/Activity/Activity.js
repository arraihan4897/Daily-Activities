import React from 'react';
import './Activity.css' 


const Activity = (props) => {
 const {handleAddButton}=props;

  const {img,name,time,about}=props.activity;
    return (
        <div className='Cards '> 
        <div className='hdCard'>
        <img src={img} alt="" />
     
          <h4>{name}</h4>
          <p>{about}</p>
          <h3>Time:{time} m</h3>
     </div>

       <button onClick={()=>props.handleAddButton(props.activity)}>Add to list</button> 
  
        </div>
    );
};

export default Activity;