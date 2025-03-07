import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
export default function DetilsCountry() {
  const [country, setCountry] = useState(null)
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  const getApi = async () => {
    try {
      setLoading(true)
      const responsive = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`)
      setCountry(responsive.data[0])
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getApi()
  }, [id])


  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!country) {
    return <p className="text-center mt-10 text-red-600">Country not found.</p>;
  }
  return (
    <section className="w-[80%] m-auto p-6">
      <Link to="/countries" className="text-blue-500 hover:underline">← Back to Countries</Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-gray-900">{country.name.common}</h2>
          <div className="space-y-2 text-gray-700">
            <p><span className="font-semibold">Official Name:</span> {country.name.official}</p>
            <p><span className="font-semibold">Capital:</span> {country.capital?.[0] || "N/A"}</p>
            <p><span className="font-semibold">Region:</span> {country.region}</p>
            <p><span className="font-semibold">Subregion:</span> {country.subregion}</p>
            <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img className="w-56 h-auto border rounded shadow-lg" src={country.flags?.png}
            alt={country.name.common} />
        </div>
      </div>
    </section>
  )
}
