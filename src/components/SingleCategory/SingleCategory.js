import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsModalVisible, setModalData } from '../../store/modalSlice';
import { formatPrice } from '../../utils/helpers';
import SingleProduct from '../SingleProduct/SingleProduct';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import {STATUS} from "../../utils/status";

const SingleCategory = ({products, status}) => {
    const dispatch = useDispatch();
    const {isModalVisible} = useSelector((state) => state.modal);

    const viewModalHandler = (data) => {
        dispatch(setModalData(data));
        dispatch(setIsModalVisible(true));
    }

    if(status === STATUS.ERROR) return (<Error />);
    if(status === STATUS.LOADING) return (<Loader />);

    return (
        <section classNameName='cat-single py-5 bg-ghost-white'>
            { isModalVisible && <SingleProduct />}

            <div classNameName='container'>
                <div classNameName='cat-single-content'>
                    <div classNameName='section-title'>
                        <h3 classNameName='text-uppercase fw-7 text-regal-blue ls-1'>{products[0].category.name}</h3>
                    </div>
                    <div classNameName='product-items grid'>
                        {
                            products.map(product => (
                                <div classNameName='product-item bg-white' key = {product.id} onClick = {() => viewModalHandler(product)}>
                                    <div classNameName='product-item-img'>
                                        <img src = {product.images[0]} alt = "" />
                                        <div classNameName = "product-item-cat text-white fs-13 text-uppercase bg-gold fw-6">{product.category.name}</div>
                                    </div>
                                    <div classNameName='product-item-body'>
                                        <h6 classNameName = "product-item-title text-pine-green fw-4 fs-15">{product.title}</h6>
                                        <div classNameName = "product-item-price text-regal-blue fw-7 fs-18">{formatPrice(product.price)}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleCategory;
