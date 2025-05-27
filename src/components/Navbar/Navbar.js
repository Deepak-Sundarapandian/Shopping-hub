import React, { useState, useEffect} from 'react';
import "./Navbar.scss";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../store/categorySlice';
import { getCartTotal } from '../../store/cartSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const {data: categories} = useSelector((state) => state.category);
  const {totalItems} = useSelector((state => state.cart));

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(getCartTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav classNameName = "navbar">
      <div classNameName='navbar-content'>
        <div classNameName = "container">
          <div classNameName = "navbar-top flex flex-between">
              <Link to = "/" classNameName = "navbar-brand">
                <span classNameName = "text-regal-blue">Shopping</span><span classNameName='text-gold'>Hub.</span>
              </Link>

              <form classNameName = "navbar-search flex">
                <input type = "text" placeholder='Search here ...' />
                <button type = "submit" classNameName = "navbar-search-btn">
                  <i classNameName = "fas fa-search"></i>
                </button>
              </form>

              <div classNameName = "navbar-btns">
                <Link to = "/cart" classNameName="add-to-cart-btn flex">
                  <span classNameName = "btn-ico">
                    <i classNameName = "fas fa-shopping-cart"></i>
                  </span>
                  <div classNameName='btn-txt fw-5'>Cart
                    <span classNameName='cart-count-value'>{totalItems}</span>
                  </div>
                </Link>
              </div>
          </div>
        </div>
        
        <div classNameName='navbar-bottom bg-regal-blue'>
          <div classNameName='container flex flex-between'>
            <ul classNameName = {`nav-links flex ${isSidebarOpen ? 'show-nav-links' : ""}`}>
              <button type = "button" classNameName='navbar-hide-btn text-white' onClick={() => setIsSidebarOpen(false)}>
                <i classNameName='fas fa-times'></i>
              </button>
              {
                categories.map(category => (
                  <li key = {category.id}><Link to = {`/category/${category.id}`} classNameName = "nav-link text-white" onClick={() => setIsSidebarOpen(false)}>{category.name}</Link></li>
                ))
              }
            </ul>

            <button type = "button" classNameName='navbar-show-btn text-gold' onClick={() => setIsSidebarOpen(true)}>
              <i classNameName = "fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;