import React, {useEffect} from 'react';
import "./CartPage.scss";
import { useSelector, useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import { removeFromCart, toggleCartQty, getCartTotal, clearCart } from '../../store/cartSlice';
import {formatPrice} from "../../utils/helpers";

const CartPage = () => {
    const dispatch = useDispatch();
    const {data: cartProducts, totalItems, totalAmount, deliveryCharge} = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(getCartTotal());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [useSelector(state => state.cart)]); 

    const emptyCartMsg = <h4 classNameName='text-red fw-6'>No items found!</h4>;

    return (
      <div classNameName = "cart-page">
        <div classNameName = "container">
          <div classNameName = "breadcrumb">
            <ul classNameName = "breadcrumb-items flex">
              <li classNameName = "breadcrumb-item">
                <Link to = "/">
                  <i classNameName = "fas fa-home"></i>
                  <span classNameName = "breadcrumb-separator">
                    <i classNameName = "fas fa-chevron-right"></i>
                  </span>
                </Link>
              </li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
        <div classNameName='bg-ghost-white py-5'>
            <div classNameName='container'>
                <div classNameName='section-title bg-ghost-white'>
                    <h3 classNameName = "text-uppercase fw-7 text-regal-blue ls-1">My Cart</h3>
                </div>
                {
                    cartProducts.length === 0 ? emptyCartMsg : (
                        <div classNameName = "cart-content grid">
                            <div classNameName='cart-left'>
                                <div classNameName = "cart-items grid">
                                    {
                                        cartProducts.map(cartProduct => (
                                            <div classNameName='cart-item grid' key = {cartProduct.id}>
                                                <div classNameName='cart-item-img flex flex-column bg-white'>
                                                    <img src = {cartProduct.images[0]} alt = {cartProduct.title} />
                                                    <button type = "button" classNameName='btn-square rmv-from-cart-btn' onClick={() => dispatch(removeFromCart(cartProduct.id))}>
                                                        <span classNameName='btn-square-icon'><i classNameName='fas fa-trash'></i></span>
                                                    </button>
                                                </div>

                                                <div classNameName='cart-item-info'>
                                                    <h6 classNameName='fs-16 fw-5 text-light-blue'>{cartProduct.title}</h6>
                                                    <div classNameName = "qty flex">
                                                        <span classNameName = "text-light-blue qty-text">Qty: </span>
                                                        <div classNameName = "qty-change flex">
                                                        <button type = "button" classNameName='qty-dec fs-14' onClick={() => dispatch(toggleCartQty({id: cartProduct.id, type: "DEC"}))}>
                                                            <i classNameName = "fas fa-minus text-light-blue"></i>
                                                        </button>
                                                        <span classNameName = "qty-value flex flex-center">{cartProduct.quantity}</span>
                                                        <button type = "button" classNameName='qty-inc fs-14 text-light-blue' onClick={() => dispatch(toggleCartQty({id: cartProduct.id, type: "INC"}))}>
                                                            <i classNameName = "fas fa-plus"></i>
                                                        </button>
                                                        </div>
                                                    </div>
                                                    <div classNameName = "flex flex-between">
                                                        <div classNameName='text-pine-green fw-4 fs-15 price'>Price : {formatPrice(cartProduct.price)}.00</div>
                                                        <div classNameName='sub-total fw-6 fs-18 text-regal-blue'>
                                                            <span>Sub Total: </span>
                                                            <span classNameName=''>{formatPrice(cartProduct.totalPrice)}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <button type = "button" classNameName='btn-danger' onClick={() => dispatch(clearCart())}>
                                    <span classNameName = "fs-16">Clear Cart</span> 
                                </button>
                            </div>
                            <div classNameName='cart-right bg-white'>
                                <div classNameName = 'cart-summary text-light-blue'>
                                    <div classNameName='cart-summary-title'>
                                        <h6 classNameName='fs-20 fw-5'>Order Summary</h6>
                                    </div>
                                    <ul classNameName = 'cart-summary-info'>
                                        <li classNameName = "flex flex-between">
                                            <span classNameName='fw-4'>Selected {totalItems} items(s) Price</span>
                                            <span classNameName='fw-7'>{formatPrice(totalAmount)}</span>
                                        </li>
                                        <li classNameName='flex flex-between'>
                                            <span classNameName='fw-4'>Discount</span>
                                            <span classNameName='fw-7'>
                                                <span classNameName='fw-5 text-red'>-&nbsp;</span>
                                                {formatPrice(0)}
                                            </span>
                                        </li>
                                        <li classNameName='flex flex-between'>
                                            <span classNameName='fw-4'>Delivery Cost</span>
                                            <span classNameName='fw-7'>
                                                <span classNameName='fw-5 text-gold'>+&nbsp;</span>{formatPrice(deliveryCharge)}
                                            </span>
                                        </li>
                                    </ul>
                                    <div classNameName='cart-summary-total flex flex-between fs-18'>
                                        <span classNameName='fw-6'>Grand Total: </span>
                                        <span classNameName='fw-6'>{formatPrice(totalAmount + deliveryCharge)}</span>
                                    </div>
                                    <div classNameName='cart-summary-btn'>
                                        <button type = "button" classNameName='btn-secondary'>Proceed to Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
      </div>
    )
}

export default CartPage