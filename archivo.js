const fs = require('fs');
const color = require('colors');


let imprimirTabla = (base, limite) => {

    for (let index = 1; index <= limite; index++) {
        console.log(color.red(`${base} * ${index} = ${base * index}`));
    }

}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`);
            return;
        }

        for (let index = 1; index <= limite; index++) {
            data += (`${base} x ${index} = ${index * base} \n`);
        }
        fs.writeFile(`tabla${base}.txt`, data, (err) => {
            if (err) {
                reject(`Ocurrio un error al crear el archivo: ${err}`);
            } else {
                resolve(`El archivo tabla${base}.txt se creo de manera exitosa`);
            }
        });
    });
}

module.exports = {
    crearArchivo,
    imprimirTabla
}