import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
export default function Countries() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [region, setRegion] = useState("")

  const getApi = async () => {
    try {
      const responsive = await axios.get("https://restcountries.com/v3.1/all")
      setData(responsive.data)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getApi()
  }, [])

  const searchData = data.filter(item =>
    (search === "" || item.name.common.toLowerCase().includes(search.toLowerCase())) &&
    (region === "" || item.region.toLowerCase() === region.toLowerCase())
  );
  return (
    <section className="border-t border-gray-200 p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Countries</h1>
      <div className="flex items-center justify-center gap-4">
        <input type="text"
          placeholder="Search by name..."
          className="border border-gray-300 rounded px-3 py-2 w-1/2 focus:outline-none focus:border-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border border-gray-300 rounded px-3 py-2 w-1/2 focus:outline-none focus:border-blue-500"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>

        </select>
      </div>
      <ul className="grid grid-cols-3 gap-6 pt-5">
        {
          searchData.map(item => (
            <li key={item.cca3}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              <Link to={`/country/${item.cca3}`} className="text-blue-600 hover:underline text-lg">{item.name.common}</Link>
              <div className="text-gray-600 text-sm mt-1">
                Region: {item.region} <br />
                Population: {item.population.toLocaleString()}
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  )
}
