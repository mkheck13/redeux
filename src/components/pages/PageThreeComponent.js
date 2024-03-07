import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const PageThreeComponent = () => {
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
        <div>
            <div className='d-flex justify-content-center'>

                <h1>This is Page #3</h1>
                <Button variant="primary" onClick={pageOneChange}>Page 1</Button>{' '}
                <Button variant="secondary" onClick={pageTwoChange}>Page 2</Button>{' '}
                <Button variant="success" onClick={pageFourChange}>Page 4</Button>{' '}
                <Button variant="warning" onClick={pageFiveChange}>Page 5</Button>{' '}




            </div>
        </div>
    )
}

export default PageThreeComponent
