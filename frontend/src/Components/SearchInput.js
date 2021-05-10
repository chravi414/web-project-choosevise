import React, { useState } from 'react';

const SearchInput = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className="input-group">
            <h2>Search for your products and compare prices</h2>
            <div className="input">
                <input type="search" id="form1" className="form-control"
                    value={searchTerm}
                    onChange={(event) => { setSearchTerm(event.target.value) }}
                    placeholder='Search or enter the products' />
                <button type="button" className="btn btn-primary">
                    <i className="fas fa-search" onClick={() => props.onSearchHandler(searchTerm)}></i>
                </button>
            </div>
        </div>
    )
}

export default SearchInput;