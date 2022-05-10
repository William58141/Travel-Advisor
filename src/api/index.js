import axios from 'axios';


export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
              'X-RapidAPI-Key': 'c38b51f087msha0b3bb26040ba00p1319f8jsn0eec7520d5f2'
            }
          });

        return data;
    } catch (error) {
        console.log(error)
    }
}