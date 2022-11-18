import React from 'react'
import { FaSearch } from 'react-icons/fa';
function SearchBar() {
  return (
    <div>
        <div className="container-fluid search d-flex justify-content-center align-items-center">
            <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
                <div className="search-input d-flex align-items-center px-4">
                <span className='pe-3'><FaSearch/></span>
                <input className='w-100 border-0' type="text"  placeholder='Konular içinde ara...'/>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default SearchBar