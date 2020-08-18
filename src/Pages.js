import React from 'react';
import Paginate from './Paginate';
const Pages=({productsPerPage,totalProducts,paginate})=>{
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalProducts/productsPerPage);i++){
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination justify-content-center pagination-lg">
                {pageNumbers.map((item)=>{
                    return(<li className="page-item">
                        <a className="page-link" onClick={()=>paginate(item)}>{item}</a>
                    </li>)
                })}
            </ul>
        </nav>
    )
}

export default Pages;