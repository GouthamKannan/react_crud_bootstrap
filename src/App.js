import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import './static/sb-admin-2.min.css';
import './static/vendor/fontawesome-free/css/all.min.css';

import Sidebar from './components/sidebar';
import AdminTable from './components/admin_table';
import ProductTable from './components/product_table';
import AddProduct from './components/add_product';
import AddUser from './components/add_user';
import EditProduct from './components/edit_product';
import EditUser from './components/edit_user';



function App() {
  return (
    <div id="wrapper">
      <Router>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<AdminTable />} />
        <Route path="/admin" element={<AdminTable />} />
        <Route path="/edit_user/:key" element={<EditUser />} />
        <Route path="/add_user" element={<AddUser />} />
        <Route path="/product" element={<ProductTable />} />
        <Route path="/edit_product/:key" element={<EditProduct />} />
        <Route path="/add_product" element={<AddProduct />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
