
const Country = ({ country }) => {

    return (
        <div>
            <h1>{country.name}</h1>
            <p>{country.area}</p>
            <p>{country.population}</p>

            <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>

            <img src={country.flag} alt="flag"></img>
        </div>
    )

}

export default Country