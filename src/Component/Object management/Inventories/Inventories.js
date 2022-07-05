import { Link } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [items, setItems] = useItems([]);

    return (
        <div id="items" className="container">
      <h1 className="items-title py-4">Available Phones{items.brand}</h1>
      <div className="card items-container">
        {
          
        items.map((item) => (
          <Inventory 
          key={item._id} 
          item={item}>
          </Inventory>
        ))}
      </div>
      <div className='m-3 p-3 '>
      <Link to='/manage' className="border border-3 rounded-3 p-2 text-black text-decoration-none ">Manage Inventories</Link>
      </div>
    </div>
    );
};

export default Inventories;