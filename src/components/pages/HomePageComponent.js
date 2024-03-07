import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const HomePageComponent = () => {
    const navigate = useNavigate();

    const pageOneChange =() =>{
        navigate('/');
    }

    const pageTwoChange =() =>{
        navigate('/pageTwo');
    }

    const pageThreeChange =() => {
        navigate('/pageThree');
    }

    const pageFourChange =() =>{
        navigate('/pageFour')
    }

    const pageFiveChange =() =>{
        navigate('/pageFive')
    }
  return (
    <div className='d-flex justify-content-center'>

        <h1>This is Page #1</h1>
        <Button variant="primary" onClick={pageTwoChange}>Page 2</Button>{' '}
        <Button variant="secondary" onClick={pageThreeChange}>Page 3</Button>{' '}
        <Button variant="success" onClick={pageFourChange}>Page 4</Button>{' '}
        <Button variant="warning" onClick={pageFiveChange}>Page 5</Button>{' '}



       
    </div>
    
  )
}

export default HomePageComponent
