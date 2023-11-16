import * as React from 'react'
import './styles.css'

export default function App() {
  const [countryCode, setCountryCode] = React.useState('AU')

  const handleChange = ({ target }) => {
    const { value } = target
    setCountryCode(value)
  }

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
        <article>
          <h2>Country Name</h2>
          <table>
            <tbody>
              <tr>
                <td>Capital:</td>
                <td>Data</td>
              </tr>
              <tr>
                <td>Region:</td>
                <td>Data</td>
              </tr>
              <tr>
                <td>Population:</td>
                <td>Data</td>
              </tr>
              <tr>
                <td>Aria:</td>
                <td>Data</td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>
    </React.Fragment>
  )
}
