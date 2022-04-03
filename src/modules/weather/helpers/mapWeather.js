import { Weather } from '../model/Weather';


export const mapWeather = (data) => {


    Weather.city.name = data.city.name;
    Weather.city.country = data.city.country;
    Weather.city.population = data.city.population;
    Weather.city.coord.lat = data.city.coord.lat;
    Weather.city.coord.lon = data.city.coord.lon;

    var i = 0;
    while (i <= 32) {
        
        Weather.weather.push(listData(i, data));
        i += 8;
        
    }
    return Weather;
}

function listData(iterator, data) {

    return {
        figure: {
            id: data.list[iterator].weather[0].id,
            main: data.list[iterator].weather[0].main,
            description: data.list[iterator].weather[0].description,
            icon: data.list[iterator].weather[0].icon,
            url: evaluateImage(data.list[iterator].weather[0].id)
        },
        main: {
            temp: data.list[iterator].main.temp,
            feels_like: data.list[iterator].main.feels_like,
            temp_min: data.list[iterator].main.temp_min,
            temp_max: data.list[iterator].main.temp_max,
            pressure: data.list[iterator].main.pressure,
            humidity: data.list[iterator].main.humidity
        },
        wind: {
            speed: data.list[iterator].wind.speed,
            deg: data.list[iterator].wind.deg,
            gust: data.list[iterator].wind.gust
        },
        clouds: {
            all: data.list[iterator].clouds.all
        },
        dt: data.list[iterator].dt_txt

    }


}


function evaluateImage(id) {
    if (id >= '200' && id < '300') {
        return "'./../../../assets/img/200.png"
    } else if (id >= '300' && id < '500') {
        return "'./../../../assets/img/300.png"
    } else if (id >= '500' && id < '511') {
        return "'./../../../assets/img/500.png"
    } else if (id >= '511' && id < '520') {
        return "'./../../../assets/img/500-2.png"
    } else if (id >= '520' && id < '600') {
        return "'./../../../assets/img/500-3.png"
    } else if (id >= '600' && id < '700') {
        return "'./../../../assets/img/600.png"
    } else if (id >= '700' && id < '800') {
        return "'./../../../assets/img/700.png"
    } else if (id == '800') {
        return "'./../../../assets/img/800.png"
    } else if (id >= '801' && id < '803') {
        return "'./../../../assets/img/800-2.png"
    } else if (id >= '803' && id <= '804') {
        return "'./../../../assets/img/800-3.png"
    } else {
        return "./../../../assets/img/200.png"
    }
}

