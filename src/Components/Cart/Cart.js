import React from 'react';
import './Cart.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

const Cart = (props) => { 
    const [count,setCount]= useState(0)
             
        const handleBrk=()=>{
            const newCount = count+10;
            setCount(newCount); }
        const handleBrk20=()=>{
            const newCount = count+20;
            setCount(newCount);}
        const handleBrk30=()=>{
            const newCount = count+30;
            setCount(newCount);}
        const handleBrk40=()=>{
            const newCount = count+40;
            setCount(newCount);}
            


    const {addbtn}=props;
    let total = 0 ;
    for(const activity of addbtn){
        total= total +activity.time;
    }
  
    const [show, setShow] = useState(false);
    return (
    


        
        <div>   
          
            <div className="summeryContainer">
                <img src="https://bit.ly/3K2EVCt" alt="" />
              <h2>Raihan Bin Solaiman</h2>
              <div className='d-flex'>
                <h6>WIGHT: 54 kg</h6>
                <h6>HEIGHT: 5.2 ft</h6> 
                <h6>AGE: 21 yr</h6>
              </div><hr />
               
                    <h2 className='text-center'>Add A break</h2> 
                <div className="d-flex break">
                    <button className='button' onClick={handleBrk}>10<small className='sm'>m</small></button>
                    <button className='button' onClick={handleBrk20} >20<small className='sm'>m</small></button>
                    <button className='button'  onClick={handleBrk30}  >30<small className='sm'>m</small></button>
                    <button className='button' onClick={handleBrk40}>40<small className='sm'>m</small></button>

                       
                </div>
                <h2 className='text-center'>Activity Details</h2> 
                <InputGroup className="mb-3">
                      <InputGroup.Text>Activity Time</InputGroup.Text>
                      <h5>{total}</h5>
                 </InputGroup>
                <InputGroup className="mb-3">
                      <InputGroup.Text>Break Time</InputGroup.Text>
                    <h5>{count}</h5>
                 </InputGroup>

                <div>

                         <Col >
                              <Toast className='hhhhh' onClose={() => setShow(false)} show={show} delay={3000} autohide>
                                     <Toast.Body ><h1 >Congratulations for completed your <b>{(total+count)}</b> Activities!</h1></Toast.Body>
                                </Toast>
                         </Col>
                    <Col >
                             <button className='btnn' onClick={() => setShow(true)}>Activity Completed</button>
                        </Col>

                </div>


              
              
            </div>
            
        </div>
    );
};

export default Cart;