import preBuilt1 from '../assets/preBuilt (1).jpg';
import preBuilt2 from '../assets/preBuilt (2).jpg';
import preBuilt3 from '../assets/preBuilt (3).jpg';
import preBuilt4 from '../assets/preBuilt (4).jpg';
import preBuilt5 from '../assets/preBuilt (5).jpg';
import preBuilt6 from '../assets/preBuilt (6).jpg';
import uniqid from 'uniqid';


export const preBuilts = [{
    category: 'gaming-pc',
    id : uniqid(),
    name: 'Ultimate Gaming Computer',
    description: 'Ultimate Gaming Computer - Enim eu non proident Lorem magna aliquip nisi minim irure consequat reprehenderit anim mollit.',
    about:[ 'Lorem eiusmod enim consequat enim minim excepteur eu nostrud magna esse.' ,
            'Aliquip excepteur anim eiusmod nisi nisi labore laboris aliqua aliqua ea.',
            'Mollit excepteur velit qui excepteur et.',
            'In culpa velit ullamco est anim dolor in cupidatat reprehenderit nostrud magna ex.',
             'Dolor ullamco nisi voluptate sunt consequat ex non.'],
    price: 1600,
    gallery:[ preBuilt1, preBuilt2, preBuilt3, preBuilt4, preBuilt5, preBuilt6,  ]
}];

export default preBuilts;