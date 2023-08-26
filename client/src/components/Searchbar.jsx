const [searchResults, setSearchResults] = useState([])

const searchHotel = async (location) => {
  try {
    const response = await fetch(
      `http://localhost:4000/api/hotels/location/${location}`
    )
    const data = await response.json()
    setSearchResults(data)
  } catch (error) {
    console.error("Error fetching data:", error)
  }
}
