var axios = require('axios');

const OPEN_WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=6e2c8646661ce3848706e6c8ec540790&units=metric';

module.exports = {
    getTemp: function (location) {
        location = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_URL}&q=${location}`;

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message)
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
}