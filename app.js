// Requires
const { crearArchivo, imprimirTabla } = require('./archivo');
const argv = require('./config/yarg').argv;

let comando = argv._[0];

console.log(argv.base);

switch (comando) {
    case 'listar':
        console.log('Comando listar');
        imprimirTabla(argv.base, argv.limite);
        break;

    case 'crear':
        console.log('Comando crear');
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(archivo);
        }).catch(e => {
            console.log(e);
        });
        break;

    default:
        console.log('Comando desconocido');
        break;
}