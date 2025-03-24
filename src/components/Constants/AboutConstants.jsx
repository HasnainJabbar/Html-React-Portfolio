// Pictures for services
import WebDesigner from '../../assets/images/icon-design.svg'
import App from '../../assets/images/icon-app.svg'
import Photo from '../../assets/images/icon-photo.svg'
import WebDeveloper from '../../assets/images/icon-dev.svg'
// Client Images
import client1 from '../../assets/images/logo-1-color.png'
import client2 from '../../assets/images/logo-2-color.png'
import client3 from '../../assets/images/logo-3-color.png'
import client4 from '../../assets/images/logo-4-color.png'
import client5 from '../../assets/images/logo-5-color.png'
import client6 from '../../assets/images/logo-6-color.png'
// Avatar Images
import avatar1 from '../../assets/images/avatar-1.png'
import avatar2 from '../../assets/images/avatar-2.png'
import avatar3 from '../../assets/images/avatar-3.png'
import avatar4 from '../../assets/images/avatar-4.png'
const servicesData = [
    {
        name:'Web design',
        description:'The most modern and high-quality design made at a professional level.',
        image:WebDesigner
    },
    {
        name:'Web development',
        description:'High-quality development of sites at the professional level.',
        image:WebDeveloper
    },
    {
        name:'Mobile apps',
        description:'Professional development of applications for iOS and Android.',
        image:App
    },
    {
        name:'Photography',
        description:'I make high-quality photos of any category at a professional level.',
        image:Photo
    }
]
const clientData = [client1,client2,client3,client4,client5,client6]
const testimonialsData = [
    {
        name:'Daniel lewis',
        image:avatar1,
        },
    {
        name:'Jesscia miller',
        image:avatar2,
    },
    {
        name:'Emily evans',
        image:avatar3,
    },
    {
        name:'Henry william',
        image:avatar4,
    },

]
export { servicesData ,clientData,testimonialsData}