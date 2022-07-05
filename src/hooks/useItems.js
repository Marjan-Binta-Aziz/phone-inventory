import { useEffect, useState } from "react";

const useItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => {
        setItems(data)
        // console.log(data)
      });
    }, []);
    return [items, setItems];
};

export default useItems;
