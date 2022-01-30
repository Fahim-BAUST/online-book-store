
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import Books from './Pages/Books/Books';

import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Authenticarion/Login';
import Registration from './Pages/Authenticarion/Registration';
import CartAndPlaceOrder from './Pages/CartAndPlaceOrder/CartAndPlaceOrder';
import PrivateRoute from './Pages/Authenticarion/PrivateRoute/PrivateRoute';
import ProductDetails from './Pages/ProductDetails/ProductsDetails';
import MyOrder from './Pages/MyOrder/MyOrder';
import Payment from './Pages/ProductDetails/Payment/Payment';
import ManageAllOrder from './Pages/ManageAllOrder/ManageAllOrder';
import AddProduct from './Pages/AddProduct/AddProduct';
import DeleteProducts from './Pages/DeleteProducts/DeleteProducts';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>

          <Routes>
            <Route exact path="/" element={<Home></Home>} />
            <Route path="/home" element={<Home></Home>} />
            <Route path="/books" element={<Books></Books>} />
            <Route path="/about" element={<About></About>} />
            <Route path="/productsDetails/:serviceId" element={<ProductDetails></ProductDetails>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/register" element={<Registration></Registration>} />
            <Route path="/cart" element={<PrivateRoute><CartAndPlaceOrder /></PrivateRoute>} />
            <Route path="/myOrder" element={<PrivateRoute><MyOrder /></PrivateRoute>} />
            <Route path="/allOrder" element={<PrivateRoute><ManageAllOrder /></PrivateRoute>} />
            <Route path="/payment/:orderId" element={<PrivateRoute>< Payment /></PrivateRoute>} />
            <Route path="/addProduct" element={<PrivateRoute>< AddProduct /></PrivateRoute>} />
            <Route path="/deleteProducts" element={<PrivateRoute><DeleteProducts /></PrivateRoute>} />
            <Route path="/makeAdmin" element={<PrivateRoute><MakeAdmin /></PrivateRoute>} />
            <Route exact path="*" element={<NotFound></NotFound>} />
          </Routes>

          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
