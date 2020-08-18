import React from 'react';

const Items_View=({products})=>{

    return (
        <div>
        {products.map((item)=>{
            return (
                <div className="card mb-3" >
                <div className="row no-gutters">
                  <div className="col">
                    <img src={item.image} className="card-img" style={{maxHeight:"200px"}}></img>
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
    );

}

export default Items_View;