const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDsJS8pIqjaQPZlSl2yfeKkhBlrLVY58yE`)

    if (resp.data.status === 'ZERO_RESULT') {
        throw new Error(`No hay resultados para la ciudad: ${direccion}`);
    }
    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}