const lugar = require('./lugar/lugar');
const temperatura = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {
    try {
        let coordenadas = await lugar.getLugarLatLng(direccion);
        let temp = await temperatura.getTemperatura(coordenadas.lat, coordenadas.lng);
        return `El clima en ${coordenadas.direccion} es de ${temp.temperatura}`;

    } catch {
        return `El clima en ${coordenadas.direccion} no se pudo obtener`;

    }
}

getInfo(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => {
        console.log(e);
    })

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => {
//         console.log(`Error: ${e}`)
//     })

// temperatura.getTemperatura()
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => {
//         console.log(e);
//     })