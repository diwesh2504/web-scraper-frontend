import React from 'react';
import {connect} from 'react-redux';
import {requestLoadProducts} from './actions/AmazonActionCreator';
import Items_View from './Items_View';
import Pages from './Pages';
const items_per_page=3;
const Paginate=(props)=>{
    const [currentPage,setCurrentPage]=React.useState(1);
    const [productsPerPage,setProductsPerPage]=React.useState(3);
    React.useEffect(()=>{
        props.loadProducts();
    },[])
    //Logic
    const indexOfLastProduct=currentPage*productsPerPage;
    const indexOfFirstProduct=indexOfLastProduct-productsPerPage;
    const currentProducts=props.amazon_products.slice(indexOfFirstProduct,indexOfLastProduct);
    const paginate=(page_number)=>setCurrentPage(page_number);
    return (
        <>
        <h2 className="text-primary mt-5">Products</h2>
        <Items_View products={currentProducts}/>
        <Pages productsPerPage={productsPerPage} totalProducts={props.amazon_products.length} paginate={paginate}/>
        </>
    );
}


const mapStateToProps=(state)=>{
    return {
        amazon_products:state.amazon
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        loadProducts:()=>dispatch(requestLoadProducts())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Paginate);