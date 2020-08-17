import React from 'react';
import {connect} from 'react-redux';
import {setView} from './actions/ViewActionCreator';
import {ReactSearchAutocomplete} from 'react-search-autocomplete'
const Search=(props)=>{
    const [item_view,setItem_view]=React.useState({});
    const [feat,set_feat]=React.useState([]);
    const [disp,set_disp]=React.useState("none");
    const handleOnSearch = (string, cached) => {
        console.log(string, cached);
      }
      const handleOnSelect = item => {
        set_disp("yes");
        set_feat(item.features);
        setItem_view(item);
        console.log(item);
      }
      const handleOnFocus = () => {
        console.log("Focused");
        props.setView("auto-complete");
      }
return (
    <>
    <ReactSearchAutocomplete
        items={props.products}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            styling={{
              height: "34px",
              border: "1px solid darkgreen",
              borderRadius: "4px",
              backgroundColor: "white",
              boxShadow: "none",
              hoverBackgroundColor: "lightgreen",
              color: "darkgreen",
              fontSize: "16px",
              fontFamily: "Arial",
             
              placeholderColor: "darkgreen",
            }}
        >
    </ReactSearchAutocomplete>
    <button className="btn btn-outline-success" onClick={()=>{props.setView("none");set_disp("none")}}>Go Back</button>
    <div className="card" style={{border:"none",display:disp=="none"?'none':''}} >
                <div className="row no-gutters">
                  <div className="col">
                    <img src={item_view.image} className="card-img"></img>
                  </div>
                  <div className="col-8" style={{maxHeight:"200px"}}>
                    <div className="card-body">
                      <h5 className="card-title">{item_view.name}</h5>
                      <p className="card-text">
                          {item_view.price}
                      </p>
                      <p>
                         { feat.map((f)=>{
                              return (<li className="list-group-item">{f}</li>)
                          })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
    </>
)

}
const mapStateToProps=(state)=>{
    return {
        products:state.amazon
    }
}
 const mapDispatchToProps=(dispatch)=>{
     return {
         setView:(data)=>(dispatch(setView(data)))
     }
 }

export default connect(mapStateToProps,mapDispatchToProps)(Search);