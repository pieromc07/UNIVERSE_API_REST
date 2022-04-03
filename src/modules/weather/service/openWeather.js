import axios from "axios";


const URL = 'https://api.openweathermap.org/data/2.5/forecast?';


export const getforLocation = async (lat, lon, units) => {

    try {
        const url = `${URL}lat=${lat}&lon=${lon}&units=${units}&lang=es&appid=${process.env.OPEN_WEATHER_API_KEY}`;
        const response = await axios.get(url);

        return response.data;
    } catch (error) {
        
        return null;
    }


}
export const getforCity = async (city, units) => {
    try {
        const url = `${URL}q=${city}&units=${units}&lang=es&appid=${process.env.OPEN_WEATHER_API_KEY}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        return null;
    }

}

