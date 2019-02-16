const axios = require('axios');

const getTemperatura = async(latitud, longitud) => {

    let latURL = encodeURI(latitud);
    let lonURL = encodeURI(longitud);
    let respURL = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latURL}&lon=${lonURL}&units=metric&appid=925ee4344f5c0c714c5257ed92ce9130`);

    if (respURL.code === '400') {
        throw new Error('No se encontraron las coordenadas ingresadas');
    } else {

        let temp = respURL.data.main.temp

        return {
            temperatura: temp
        }
    }

}

module.exports = {
    getTemperatura
}