import React from "react";

const Filter = ({ searchName, setSearchName }) => {

    return (
        <div>
            search name <input value={searchName} onChange={setSearchName} />
        </div>
    )

}

export default Filter