
const Filter = ({ value, setSearchCountry }) => {

    return (
        <div>
            search country <input value={value} onChange={setSearchCountry} />
        </div>
    )

}

export default Filter