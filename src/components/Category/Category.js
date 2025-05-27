import React from 'react';
import { STATUS } from "../../utils/status";
import "./Category.scss";
import {Link} from "react-router-dom";
import Error from '../Error/Error';
import Loader from '../Loader/Loader';

const Category = ({categories, status}) => {
    if(status === STATUS.ERROR) return (<Error />);
    if(status === STATUS.LOADING) return (<Loader />);

    return (
    <section classNameName = "categories py-5 bg-ghost-white" id = "categories">
        <div classNameName = "container">
            <div classNameName = "categories-content">
                <div classNameName='section-title'>
                    <h3 classNameName = "text-uppercase fw-7 text-regal-blue ls-1">Category</h3>
                </div>
                <div classNameName = "category-items grid">
                    {
                        categories.slice(0, 5).map(category => (
                            <Link to = {`category/${category.id}`} key = {category.id}>
                                <div classNameName = "category-item" >
                                    <div classNameName='category-item-img'>
                                        <img src = {category.image} alt = "" />
                                    </div>
                                    <div classNameName = "category-item-name text-center">
                                        <h6 classNameName='fs-20'>{category.name}</h6>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Category