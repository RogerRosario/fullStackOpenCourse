import React from "react";

const PersonForm = ({ data: { newNumber, setNewNumber, newName, setNewName }, formOnSubmit }) => {

    return (

        <form onSubmit={formOnSubmit}>

            <input placeholder='name' value={newName} onChange={(e) => setNewName(e.target.value)} /> <br />
            <input placeholder='number' value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />

            <div>
                <button type='submit'> add </button>
            </div>

        </form>

    )

}
export default PersonForm