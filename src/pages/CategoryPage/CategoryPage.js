import React, {useEffect} from 'react';
import ProductList from '../../components/ProductList/ProductList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsByCategory } from '../../store/categorySlice';
import { useParams, Link } from 'react-router-dom';
import "./CategoryPage.scss";

const CategoryPage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {catProductSingle: products, catProductSingleStatus: status} = useSelector((state) => state.category);

    useEffect(() => {
      dispatch(fetchProductsByCategory(id, 'single'));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
      <div classNameName = "category-page">
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
              <li>
                Category
                <span classNameName = "breadcrumb-separator">
                  <i classNameName = "fas fa-chevron-right"></i>
                </span>
              </li>
              <li>
                { products[0] && products[0].category.name}
              </li>
            </ul>
          </div>
        </div>
        <ProductList products = {products} status = {status} />
      </div>
    )
}

export default CategoryPage