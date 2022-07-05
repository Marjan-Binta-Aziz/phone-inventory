import './App.css';
import { Toaster } from 'react-hot-toast';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Inventories from './Component/Object management/Inventories/Inventories';
import ManageInventories from './Component/Object management/ManageInventories/ManageInventories';
import AddNewItems from './Component/Object management/AddNewItems/AddNewItems';
import UpdateItem from './Component/Object management/UpdateItem/UpdateItem';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Inventories></Inventories>}></Route>
        <Route path='/manage' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/inventory/:id' element={<UpdateItem></UpdateItem>}></Route>
        <Route path='/add' element={<AddNewItems></AddNewItems>}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
