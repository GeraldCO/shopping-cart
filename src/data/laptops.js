import uniqid from 'uniqid';
import rog1 from '../assets/ROG (1).jpg';
import rog2 from '../assets/ROG (2).jpg';
import rog3 from '../assets/ROG (3).jpg';
import rog4 from '../assets/ROG (4).jpg';
import rog5 from '../assets/ROG (5).jpg';
import rog6 from '../assets/ROG (6).jpg';



export const laptops =[
    {
        category: 'gaming-laptop',
    id : uniqid(),
    name: 'Ultimate Gaming Laptop',
    description: 'Ultimate Gaming Laptop - Eiusmod sunt reprehenderit est pariatur quis voluptate ad est consequat excepteur.',
    about:[ 'Voluptate enim adipisicing voluptate do veniam esse reprehenderit.' ,
            'Exercitation sunt sit dolor ea officia consequat nulla enim.',
            'Ullamco Lorem excepteur excepteur velit.',
            'Aliquip fugiat voluptate dolor consectetur sint voluptate sunt qui ullamco magna fugiat.',
             'Quis occaecat labore voluptate proident magna tempor.'],
    price: 2500,
    gallery:[ rog1, rog2, rog3, rog4, rog5, rog6,  ]
    }
];

export default laptops;
