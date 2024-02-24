import axios from 'axios'

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID oYyVjSJkzw8s8aBj8MoPiPcLWXvOSO89itf34bnjAU8'
        },
        params: {
            query: term
        }
    })
    debugger;
    return response.data.results;
}

// geriye döndüremek için export default
export default searchImages;