
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';
import{AiFillMediumSquare} from 'react-icons/ai';

import Project1 from './assets/img/projects/objectRec.png';
import Project2 from './assets/img/projects/iris.png';
import Project3 from './assets/img/projects/poseEstemation.png';
import Project4 from './assets/img/projects/businessC.jpg';
import Project5 from './assets/img/projects/facialRec.png';
import Project6 from './assets/img/projects/vrLab.png';
import s from './assets/img/testimonials/sing.png';
import a from './assets/img/testimonials/algorithms.png';
import t from './assets/img/testimonials/thousand.png';
import v from './assets/img/testimonials/vector.png';
import ten from './assets/img/testimonials/tensor.png';
import androids from './assets/img/testimonials/androids.png';
import algosC from './assets/img/testimonials/algorithsCpp.png';
import graphTh from './assets/img/testimonials/graph.png';
import spike from './assets/img/testimonials/spike.png';
import calc from './assets/img/testimonials/calc.png';



export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'bookshelf',
    href: 'testimonials',
  },

];

export const social = [
  
  
   {
    icon: <AiFillMediumSquare />,
    href: 'https://seth141.medium.com/',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/seth.nuzum/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/Seth141',
  },
  {
    icon: <FiYoutube />,
    href: 'https://www.youtube.com/channel/UC46sTblP5sOlGEc93wE312A',
  }, 
 
];


export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'ML Object Recognition',
    category: 'Used Inception models along with Resent 50 to successfully identify objects and overly AR labels in realtime. Written in Swift.',
    
  },
  {
    id: '2',
    image: Project2,
    name: 'Iris',
    category: 'AI engineering assistant. Designed to work alongside the user, and propose solutions, write code in multiple languages and offer on demand engineering knowledge. Written in Python and Java Script.',
  },
  {
    id: '3',
    image: Project3,
    name: 'Pose Estemation for Fingers',
    category: 'Used CV2 along with Keras libraries to predict a user’s finger position relative to other digits, measure space in-between digits, and length of fingers. Written in Python.',
  },
  {
    id: '4',
    image: Project4,
    name: 'AR Business Cards',
    category: 'Used visual markers on physical cards, this Computer Vision application can overlay an entire LinkedIn profile in augmented reality in order to provide much more data than a traditional business card. Written in Swift.',
  },
  {
    id: '5',
    image: Project5,
    name: 'Facial Recognition',
    category: 'Existing user recognition, user age inference, eyes open detection and head orientation tracking by using the Tensorflow backend, Karas + CV2. Written in Python.',
  },
  {
    id: '6',
    image: Project6,
    name: 'VR Lab for Meta Quest',
    category: 'A virtual lab in development that allows the user to write software in VR, research topics, run simulations, and communicate with a virtual assistant all from  your bedroom. Using C++ and Unreal Engine.',
  },
];

export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];


export const testimonials = [
  {
    authorImg: s,
    authorText:
      'The Singularity is Near',
    authorName: '',
    linkInsert: 'https://www.goodreads.com/en/book/show/83518.The_Singularity_is_Near',
  },
  {
    authorImg: a,
    authorText: 'Algorithms to Live by',
    authorName: '',
    linkInsert: 'https://www.goodreads.com/book/show/25666050-algorithms-to-live-by',
  },
  {
    authorImg: t,
    authorText:
      'A Thousand Brains',
    authorName: '',
    linkInsert: 'https://www.goodreads.com/book/show/54503521-a-thousand-brains',
  },
  {
    authorImg: v,
    authorText:
      'Vector Spaces and Matrices',
    authorName: '',
    linkInsert: 'https://www.goodreads.com/book/show/6392343-vector-spaces-and-matrices?ac=1&from_search=true&qid=Jx0so7jGdO&rank=1',
  },
  {
    authorImg: ten,
    authorText:
      'TensorFlow for Deep Learning',
    authorName: '',
    linkInsert: 'https://www.goodreads.com/book/show/35803518-tensorflow-for-deep-learning',
  },
  {
    authorImg: androids,
    authorText:
      'Do Androids Dream of Electric Sheep?',
    authorName: '',
    linkInsert: 'https://www.goodreads.com/book/show/36402034-do-androids-dream-of-electric-sheep?from_search=true&from_srp=true&qid=2Gxy86SQfz&rank=1',
  },
  {
    authorImg: algosC,
    authorText:
      'Algorithms in C++',
    authorName: '',
    linkInsert: 'https://www.goodreads.com/book/show/425213.Algorithms_in_C_Parts_1_4',
  },
  {
    authorImg: graphTh,
    authorText:
      'Graph Theory',
    authorName: '',
    linkInsert: 'https://www.goodreads.com/book/show/13723221-graph-theory',
  },
  {
    authorImg: calc,
    authorText:
      'Advanced Calculus',
    authorName: '',
    linkInsert: 'https://www.goodreads.com/book/show/2320470.Advanced_Calculus?from_search=true&from_srp=true&qid=t8dPMD7jdP&rank=16',
  },
  {
    authorImg: spike,
    authorText:
      'The Spike',
    authorName: '',
    linkInsert: 'https://www.goodreads.com/en/book/show/55271760',
  },
];


export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at hello@youremail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Bucharest, Romania',
    description: 'Serving clients worldwide',
  },
];
