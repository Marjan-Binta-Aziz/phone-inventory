import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'
    const Inventory = ({item}) => {
        const { brand, phone_name, price, image, RAM,internal_storage, display, color} = item;
        const navigate = useNavigate();

        const navigateToDelevired = id => {
            navigate(`/inventory/${id}`)
            console.log(id);
        }
       

        return (
            <div className='inventory-div'>
            <div className='inventory'>
            <img className='mb-4 rounded-3 ' src={image} alt="" />
            <h6>{phone_name}</h6>
            <h5>Price: $ {price}</h5>
            <div className='text-start mx-4 ps-3 '>
            <small>
            <p>
                <b>Brand: </b>{brand} <br />
                <b>RAM: </b>{RAM} <br />
                <b>Internal Storage: </b>{internal_storage} <br />
                <b>Screen Size: </b>{display} <br />
                <b>Color: </b>{color} <br />
            </p>
            </small>
            </div>
            <button onClick={()=> navigateToDelevired(item._id)} className='edit-btn btn mt-auto'>Edit</button>               
            </div>
            </div>
        );
    };

    export default Inventory;