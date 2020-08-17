import React from 'react';
import {connect} from 'react-redux';
import {requestLoadProducts} from './actions/AmazonActionCreator';
const items_per_page=3;
const Paginate=(props)=>{
    React.useEffect(()=>{
        props.loadProducts();
    },[])
    const [page_number,setPage_number]=React.useState(1);
    const [products,setProducts]=React.useState([]);
    const [start_index,setStart_Index]=React.useState(0);
    const handlePage=(e)=>{
        let idx=0;
        setPage_number(+e.target.textContent);
        idx=page_number*3;
        setStart_Index(idx);
        setProducts(props.amazon_products.filter((item,index)=>{
            return index >=start_index && index <start_index+items_per_page;
        }))

    }

    return (
        <>
        
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                
                <li className="page-item"><a className="page-link" onClick={handlePage}>1</a></li>
                <li className="page-item"><a className="page-link" onClick={handlePage}>2</a></li>
                <li className="page-item"><a className="page-link" onClick={handlePage}>3</a></li>
                
             </ul>
        </nav>
        <div>
        {products.map((item)=>{
            return (
                <div className="card mb-3" >
                <div className="row no-gutters">
                  <div className="col">
                    <img src={item.image} className="card-img"></img>
                  </div>
                  <div className="col-8" style={{maxHeight:"200px"}}>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">
                          {item.price}
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            )
        })}
        </div>
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