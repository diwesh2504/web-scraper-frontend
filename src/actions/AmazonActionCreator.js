const loadProducts=(data)=>{
    return {type:"LOAD_PRODUCTS",payload:data};
}

export const requestLoadProducts=()=>{
    return (dispatch)=>{
        fetch("http://localhost:4040/get-amazon")
        .then(res=>res.json())
        .then(data=>dispatch(loadProducts(data)))
        .catch(err=>console.log("Couldnt load Products to FE",err));
    }
}