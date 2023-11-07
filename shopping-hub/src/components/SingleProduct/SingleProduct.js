import React, {useState} from 'react';
import "./SingleProduct.scss";
import { useSelector, useDispatch } from 'react-redux';
import { setIsModalVisible } from '../../store/modalSlice';
import { addToCart } from '../../store/cartSlice';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../utils/helpers';

const SingleProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  const { data: product } = useSelector(state => state.modal);

  const increaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty + 1;
      return newQty;
    })
  }

  const decreaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty - 1;
      if(newQty < 1){
        newQty = 1;
      }
      return newQty;
    })
  }

  const addToCartHandler = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice
    }
    dispatch(addToCart(tempProduct));
    dispatch(setIsModalVisible(false));
    navigate('/cart');
  };

  const modalOverlayHandler = (e) => {
    if(e.target.classNameList.contains('overlay-bg')){
      dispatch(setIsModalVisible(false));
    }
  }

  return (
    <div classNameName='overlay-bg' onClick = {modalOverlayHandler}>
      <div classNameName = "product-details-modal bg-white">
        <button type = "button" classNameName='modal-close-btn flex flex-center fs-14' onClick={() => dispatch(setIsModalVisible(false))}>
          <i classNameName = "fas fa-times"></i>
        </button>
        <div classNameName = "details-content grid">
          {/* details left */}
          <div classNameName = "details-right">
            <div classNameName = "details-img">
              <img src = {product.images[0]} alt = {product.title} />
            </div>
          </div>
          {/* detials right */}
          <div classNameName='details-left'>
            <div classNameName = "details-info">
              <h3 classNameName = "title text-regal-blue fs-22 fw-5">{product.title}</h3>
              <p classNameName='description text-pine-green'>{product.description}</p>
              <div classNameName='price fw-7 fs-24'>Price: {formatPrice(product.price)}</div>
              <div classNameName = "qty flex">
                <span classNameName = "text-light-blue qty-text">Qty: </span>
                <div classNameName = "qty-change flex">
                  <button type = "button" classNameName='qty-dec fs-14' onClick={() => decreaseQty()}>
                    <i classNameName = "fas fa-minus text-light-blue"></i>
                  </button>
                  <span classNameName = "qty-value flex flex-center">{qty}</span>
                  <button type = "button" classNameName='qty-inc fs-14 text-light-blue' onClick={() => increaseQty()}>
                    <i classNameName = "fas fa-plus"></i>
                  </button>
                </div>
              </div>
              <button type = "button" classNameName='btn-primary add-to-cart-btn' onClick={() => addToCartHandler(product)}>
                  <span classNameName = "btn-icon">
                    <i classNameName='fas fa-cart-shopping'></i>
                  </span>
                  <span classNameName = 'btn-text'>Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct