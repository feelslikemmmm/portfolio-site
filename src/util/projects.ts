import CardMakers from '@assets/images/card-makers.gif';
import Moi from '@assets/images/moi.gif';
import AirMugPro from '@assets/images/airmug-pro.gif';
import FindCarrot from '@assets/images/findcarrot.gif';
export const projects = [
  {
    id: 1,
    main: 'card makers',
    title: '명함 제작 웹 어플리케이션',
    description: `Front-end : React-Hook, Firebase, Module-CSS Back-end : Firebase
    Realtime Database, Cloudinary Deploy : Netlify Role: Full stack`,
    front: 'Front-end : React-Hook, Firebase, Module-CSS',
    back: 'Back-end : Firebase Realtime Database, Cloudinary',
    deploy: 'Deploy : Netlify',
    src: 'https://cardmakers.netlify.app/',
    git: 'https://github.com/feelslikemmmm/card_maker',
    images: CardMakers,
    keys: 'left',
  },
  {
    id: 2,
    main: '모두의 이력서',
    title: '취준생을 위한 이력서 작성 플랫폼',
    description: `Front-end : React, Redux, Redux-saga, Typescript, Module-CSS
    Back-end : Node.js, Express , MongoDB, JWT, Multer
    Deploy : AWS(S3, CloudFront, Route53, EC2, Load Balancer)
    Role: Front-end`,
    front: 'Front-end : React, Redux, Redux-saga, Typescript, Module-CSS',
    back: 'Back-end : Node.js, Express , MongoDB, JWT, Multer',
    deploy: 'Deploy : AWS(S3, CloudFront, Route53, EC2, Load Balancer)',
    src: 'https://everymoi.com/',
    git: 'https://github.com/codestates/Moi_Client',
    images: Moi,
    keys: 'right',
  },
  {
    id: 3,
    main: 'airmug pro',
    title: '인터랙션을 활용한 web site',
    description: `Front-end : Javascript
    Deploy : Netlify
    Role: Front-end
    `,
    front: 'Front-end : Javascript',
    deploy: 'Deploy : Netlify',
    src: 'https://airmug-pro.netlify.app/',
    git: 'https://github.com/feelslikemmmm/Apple-InteractiveWebProject',
    images: AirMugPro,
    keys: 'left',
  },
  {
    id: 4,
    main: 'find carrot',
    title: '벌레를 피해 당근 수확하기',
    description: `Front-end : Javascript
    Deploy : Netlify
    Role: Front-end`,
    front: 'Front-end : React',
    deploy: 'Deploy : Netlify',
    src: 'https://find-carrot.netlify.app',
    git: 'https://github.com/feelslikemmmm/fun_game',
    images: FindCarrot,
    keys: 'right',
  },
];
