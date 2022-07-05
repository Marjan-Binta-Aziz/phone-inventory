import { Button, Form } from "react-bootstrap";
import React from "react";
import toast from "react-hot-toast";

const AddNewItems = () => {
  const handleItems = (event) => {
    event.preventDefault();
    const phone_name = event.target.phone_name.value;
    const brand = event.target.brand.value;
    const price = event.target.price.value;
    const image = event.target.image.value;
    const RAM = event.target.RAM.value;
    const internal_storage = event.target.internal_storage.value;
    const display = event.target.display.value;
    const color = event.target.color.value;

    const item = {
      phone_name: phone_name,
      brand: brand,
      price: price,
      image: image,
      RAM: RAM,
      internal_storage: internal_storage,
      display: display,
      color: color,
    };

    const url = "http://localhost:5000/inventory";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("The item has been added successfully!");
          console.log(data);
        }
        else{
          toast.error("Item Not Added");
        }
      });
    event.target.reset();
  };
  return (
    <div className="mb-5">
      <h1 className="my-2 text-uppercase text-dark">Add New Item</h1>
      <div className="w-25 mx-auto mt-4">
        <Form 
        onSubmit={handleItems}
        >
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="name"
              name="brand"
              placeholder="Brand Name(e.g. Apple, OPPO, Samsung)"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="name"
              name="phone_name"
              placeholder="Phone Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="number"
              name="price"
              placeholder="Price"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="text"
              name="image"
              placeholder="image URl"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="text"
              name="RAM"
              placeholder="RAM"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="text"
              name="internal_storage"
              placeholder="Internal Storage"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="text"
              name="display"
              placeholder="Screen Size"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="text"
              name="color"
              placeholder="Color"
              required
            />
          </Form.Group>
          <Button className="btn btn-outline-dark w-75" variant="light" type="submit">
            Add item
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddNewItems;
