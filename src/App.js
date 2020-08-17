import React from 'react';
import Paginate from './Paginate';
import Search from './Search';
import {connect} from 'react-redux';
const App=(props)=>{

    return (
        <div>
            <div className="jumbotron">
                <h1>Search for your favourite Products</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <Search/>
                       {props.view=="none"? <Paginate/>:""}
                    </div>
                    
                </div>
            </div>
        </div>
    )
    
}
const mapStateToProps=(state)=>{
    return{
        view:state.view
    }
}
export default connect(mapStateToProps,null)(App);