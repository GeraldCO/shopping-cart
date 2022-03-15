import cpu114001 from '../assets/11400 (1).jpg';
import cpu114002 from '../assets/11400 (2).jpg';
import cpu114003 from '../assets/11400 (3).jpg';
import cpu114004 from '../assets/11400 (4).jpg';
import cpu114005 from '../assets/11400 (5).jpg';
import cpu114006 from '../assets/11400 (6).jpg';
import uniqid from 'uniqid'


const processors = [
    {
        category: 'processors',
        id : uniqid(),
        name: 'intel 11400',
        description: 'Intel® Core™ i5-11400 Procesador de escritorio 6 núcleos hasta 4.4 GHz LGA1200 (Intel® 500 Series & Select 400 Series) 65W',
        about:[ 'Intel El procesador Core i5 de 2.60 GHz ofrece una arquitectura de hiperenhebrado que ofrece un alto rendimiento para aplicaciones exigentes con gráficos integrados mejorados y turbo Boost',
                'El enchufe LGA-1200 permite colocar el procesador en el PCB sin soldar',
                '12 MB de caché L3 recupera rápidamente los datos más utilizados disponibles para mejorar el rendimiento del sistema',
                'El diseño de 14 nm ofrece una gran eficiencia para la informática, ofrece un procesamiento ágil con costo, rendimiento y potencia equilibrados',
                 'Controlador Intel UHD Graphics 730 integrado para mejorar los gráficos y la calidad visual. Soporta hasta 3 monitores.'],
        price: 250,
        gallery:[ cpu114001, cpu114002, cpu114003, cpu114004, cpu114005, cpu114006 ]
    }
];

export default processors;