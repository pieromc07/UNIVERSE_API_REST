export const Weather = {

	city: {
		name: '',
		country: '',
		population: 0,
		coord: {
			lon: 0,
			lat: 0
		}
	},
	weather: [
		{
			figure: {
				id: 0,
				main: '',
				description: '',
				icon: '',
				url: ''
			},
			main: {
				temp: 0,
				feels_like: 0,
				temp_min: 0,
				temp_max: 0,
				pressure: 0,
				humidity: 0
			},
			wind: {
				speed: 0,
				deg: 0,
				gust: 0
			},
			clouds: {
				all: 0
			},
			dt: ''
		}
	]
};