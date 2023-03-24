import React, { useState , useEffect } from 'react';
import Cart from '../Cart/Cart';
import Activity from '../Activity/Activity';    import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Main = () => {
  const [addbtn,setaddbtn]= useState([]);
  const handleAddButton=(activity)=>{
 const newAdd=[...addbtn,activity];
 setaddbtn(newAdd);
    
  };
  const [activities,setActivities]= useState([]);
  useEffect(()=>{
    fetch('activity.json')
    .then (res => res.json())
   .then (data =>setActivities(data))
     },[]);
    return (
        <div className=''>


    <Container>
      <Row>
        <Col lg="8">
        <h1>Select todays activity</h1><hr />

      
                      <span  className='activity-Compo'>{activities.map(activity=><Activity handleAddButton={handleAddButton}  activity={activity}></Activity>)}</span>
          </Col>
        <Col lg="4">
         
          <Cart addbtn={addbtn}></Cart>
          </Col>

      </Row>
    </Container>
 

       
            
            
        </div>
    );
};

export default Main;