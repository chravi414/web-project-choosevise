import React from 'react';
import Loader from "react-loader-spinner";

const Spinner = () => {
    return (
        <div className="loader-container">
            <Loader
                type="ThreeDots"
                color="#111"
                height={50}
                width={50}
                timeout={3000} //3 secs
            />
        </div>

    );
}

export default Spinner;