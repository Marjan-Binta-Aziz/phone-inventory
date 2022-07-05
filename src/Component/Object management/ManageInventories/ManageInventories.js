import React, { useState } from "react";
import { Table } from "react-bootstrap";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useItems from "../../../hooks/useItems";
import Inventories from "../Inventories/Inventories";


const ManageInventories = () => {
  const [toggle, setToggle] = useState(true);
  const [items, setItems] = useItems();
  console.log(items);
  const navigate = useNavigate();

  const navigateToUpdate = (id) => {
    navigate(`/inventory/${id}`);
  };
  const deleteItem = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure want to delete this item?"
    );
    if (confirmDelete) {
      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          const remainingItem = items.filter((item) => item._id !== id);
          setItems(remainingItem);
          toast.success("Delete Item Successfully");
        });
    } else {
      toast.error("Item Not Deleted");
    }
 };
  return (
    <div>
      <h1 className="mt-3 text-uppercase text-dark">Manage Inventoies</h1>
      <button className="btn btn-sm" onClick={()=> {setToggle(!toggle)}} >
          {toggle ? "List" : "Gallery" }
        </button>

      {
        toggle ? (
          <Table striped bordered hover className="container">
          <thead>
            <tr>
              <th>No</th>
              <th>Brand</th>
              <th>Phone Name</th>
              <th>Price</th>
              <th>RAM</th>
              <th>Internal Storage</th>
              <th>Screen Size</th>
              <th>Color</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.brand}</td>
                <td>{item.phone_name}</td>
                <td>{item.price} $</td>
                <td>{item.RAM}<small><i>GB</i> </small></td>
                <td>{item.internal_storage}<small><i>GB</i> </small></td>
                <td>{item.display} <small><i>inches</i> </small></td>
                <td>{item.color}</td>
                <td><img width={40} src={item.image} alt="" srcset="" /></td>
                <td>
                  <button
                    onClick={() => navigateToUpdate(item._id)}
                    className="px-2 btn-outline-success rounded-2 text-black"
                  >
                    Edit
                  </button>{" "}
                  {""}
                  <button
                    className="px-2 btn-outline-danger rounded-2 text-black"
                    onClick={() => deleteItem(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        ) : (
          <Inventories></Inventories>
        )
      }

    </div>
  );
};

export default ManageInventories;
