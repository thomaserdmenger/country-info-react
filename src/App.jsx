import * as React from 'react'
import './styles.css'

export default function App() {
  const [countryCode, setCountryCode] = React.useState('AU')
  const [data, setData] = React.useState(null)

  const handleChange = ({ target }) => {
    const { value } = target
    setCountryCode(value)
  }

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://restcountries.com/v2/alpha/${countryCode}`
      )

      const data = await response.json()

      setData(data)
    }

    fetchData()
  }, [countryCode])

  return (
    <React.Fragment>
      <section>
        <header>
          <h1>Country info:</h1>
          <label htmlFor='country'></label>
          <div>
            <select id='country' value={countryCode} onChange={handleChange}>
              <option value='AU'>Australia</option>
              <option value='CA'>Canada</option>
              <option value='CN'>China</option>
              <option value='FR'>France</option>
              <option value='DE'>Germany</option>
              <option value='IN'>India</option>
              <option value='JP'>Japan</option>
              <option value='MX'>Mexico</option>
              <option value='GB'>United Kingdom</option>
              <option value='US'>United States of America</option>
            </select>
          </div>
        </header>
        {data && (
          <article>
            <h2>{data.name}</h2>
            <table>
              <tbody>
                <tr>
                  <td>Capital:</td>
                  <td>{data.capital}</td>
                </tr>
                <tr>
                  <td>Region:</td>
                  <td>{data.region}</td>
                </tr>
                <tr>
                  <td>Population:</td>
                  <td>{data.population}</td>
                </tr>
                <tr>
                  <td>Area:</td>
                  <td>{data.area}</td>
                </tr>
              </tbody>
            </table>
          </article>
        )}
      </section>
    </React.Fragment>
  )
}
