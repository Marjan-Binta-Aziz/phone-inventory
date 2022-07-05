import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from "react-router-dom";

const UpdateItem = () => {
  const navigate = useNavigate();
    const {id} = useParams();
    const [update, setUpdate] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
        .then(res => res.json())
        .then(data => setUpdate(data))
    },[])

    // console.log(id)


    const handleUpdateItems = (event) => {
        event.preventDefault();
    const brand = event.target.brand.value;
    const phone_name = event.target.phone_name.value;
    const price = event.target.price.value;
    const image = event.target.image.value;
    const RAM = event.target.RAM.value;
    const internal_storage = event.target.internal_storage.value;
    const display = event.target.display.value;
    const color = event.target.color.value;
    
        const updateItems = {
          brand,
          phone_name,
          price,
          image,
          RAM,
          internal_storage,
          display,
          color,
        };
    
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
    
          body: JSON.stringify(updateItems),
        })
          .then((res) => res.json())
          .then((data) => {
            setUpdate(data);
            console.log(data);
            toast.success("The item has been updated successfully!");
            navigate('/manage')
          });
        event.target.reset();
      };
    return (
        <div>
                <div className="mb-5">
      <h1 className="my-2 text-uppercase text-dark">Add New Item</h1>
      <div className="w-25 mx-auto mt-4">
        <Form
        onSubmit={handleUpdateItems}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="name"
              name="phone_name"
              placeholder="Phone Name"
              defaultValue={update.phone_name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="name"
              name="brand"
              placeholder="Brand Name"
              defaultValue={update.brand}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="number"
              name="price"
              placeholder="Price"
              defaultValue={update.price}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="text"
              name="image"
              placeholder="Image URl"
              defaultValue={update.image}
              
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="text"
              name="RAM"
              placeholder="RAM"
              defaultValue={update.RAM}
              
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="text"
              name="internal_storage"
              placeholder="Internal Storage"
              defaultValue={update.internal_storage}
              
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="text"
              name="display"
              placeholder="Screen Size"
              defaultValue={update.display}
              
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="text"
              name="color"
              placeholder="Color"
              defaultValue={update.color}
              
            />
          </Form.Group>
          <Button className="btn btn-outline-dark w-75" variant="light" type="submit">
            Update item
          </Button>
        </Form>
      </div>
    </div>
        </div>
    );
};

export default UpdateItem;