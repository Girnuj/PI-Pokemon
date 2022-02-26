import React from 'react';
import './Pagination.css'

const Pagination = ({ pokeXPage, totalPoke, paginate }) => {
  
    const pageNumbers = [];
    // console.log(totalPoke)
    // console.log(pokeXPage)
    for(let i = 0; i <= Math.ceil(totalPoke / pokeXPage); i++ ){

        pageNumbers.push(i+1)
    }



    return (<>
       
     
        <ul className='pagination'> 
            {pageNumbers.map(number => (
                // <button key={number}>{number}</button>
                <li key={number} className='li' id={number}>
                    <a onClick={() => paginate(number) } href='#!' className='a'>
                        {number}
                       
                    </a>
                </li>
            ))}

        </ul>
		


    </>);
};

export default Pagination;
