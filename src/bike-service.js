export class BikeService {
  async getBikeByCity(city) {
    try {
    let response = await fetch(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=IP&distance=10&stolenness=stolen`);
    let jsonifiedResponse = await response.json()
    return jsonifiedResponse
    } catch(error) {
      console.error("there was an error handling requst" + error.message)
    }
  }
}
