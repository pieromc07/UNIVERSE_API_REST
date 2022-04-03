import { getforLocation } from '../service/openWeather';
import { mapWeather } from '../helpers/mapWeather';


export const location = async (req, res) => {
  const { lat, lon, units } = req.body;

  const response = await getforLocation(lat, lon, units);


  if (response) {

    const data = mapWeather(response);

    res.status(200).json(data);
  } else {
    res.status(404).json({
      message: 'No se encontraron datos'
    });
  }




} 
