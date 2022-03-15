import switch1 from '../assets/switch (1).jpg';
import switch2 from '../assets/switch (2).jpg';
import switch3 from '../assets/switch (3).jpg';
import switch6 from '../assets/switch (6).jpg';
import switch7 from '../assets/switch (7).jpg';
import switchLite1 from '../assets/swtich-lite (1).jpg';
import switchLite2 from '../assets/swtich-lite (2).jpg';
import switchLite3 from '../assets/swtich-lite (3).jpg';
import switchLite4 from '../assets/swtich-lite (4).jpg';
import switchLite5 from '../assets/swtich-lite (5).jpg';
import switchLite6 from '../assets/swtich-lite (6).jpg';
import switchLite7 from '../assets/swtich-lite (7).jpg';
import uniqid from 'uniqid';


const videGameConsoles = [
    {
        category: 'video-game-console',
        id : uniqid(),
        name: 'Nintendo Switch',
        description: 'Nintendo Switch – OLED Model w/ White Joy-Con',
        about:[ '7-inch OLED screen - Enjoy vivid colors and crisp contrast with a screen that makes colors pop',
                'Wired LAN port - Use the dock’s LAN port when playing in TV mode for a wired internet connection',
                '64 GB internal storage - Save games to your system with 64 GB of internal storage',
                'In do laborum culpa mollit.'
            ],   
        price: 340,
        gallery:[ switch1, switch2, switch3, switch6, switch7 ]
    },{
        category: 'video-game-console',
        id : uniqid(),
        name: 'Nintendo Switch Lite',
        description: 'Nintendo Switch Lite - Turquoise with SanDisk 128GB MicroSDXC UHS-I Card for Nintendo Switch',
        about:[ 'loremSint ea fugiat et anim cillum consequat aute veniam aute dolore quis.' ,
                'Voluptate qui dolor labore velit sunt.',
                'Irure tempor voluptate esse elit.',
                'Amet et sit aliqua ex excepteur do consectetur aliquip excepteur culpa.',
                 'Fugiat voluptate dolore enim reprehenderit culpa irure qui occaecat culpa est aute proident occaecat culpa.'],
        price: 850,
        gallery:[ switchLite1, switchLite2, switchLite3, switchLite4, switchLite5, switchLite6, switchLite7 ]
    }
];

export default videGameConsoles;

