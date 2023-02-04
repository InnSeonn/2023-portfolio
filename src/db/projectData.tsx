import todolistImg from '../images/todolist.gif';
import clonewebImg from '../images/cloneweb.gif';

export type ProjectType = {
  id: number;
  name: string;
  text: string;
  github: string;
  website: string;
  img: string;
};

const projectData: ProjectType[] = [
  {
    id: 0,
    name: 'portfolio',
    text: '개인 프로젝트와 본인 소개를 담은 반응형 포트폴리오 웹사이트',
    github: '',
    website: '',
    img: '',
  },
  {
    id: 1,
    name: 'todolist',
    text: '할 일을 추가하고 관리할 수 있는 반응형 투두리스트 웹사이트',
    github: 'https://github.com/InnSeonn/todolist-Projects',
    website: 'https://inn-todolist.vercel.app/',
    img: `${todolistImg}`,
  },
  {
    id: 2,
    name: 'clone',
    text: 'UI와 기능을 참고하여 제작한 반응형 클론 웹사이트',
    github: 'https://github.com/InnSeonn/westy-clone-Projects',
    website: 'https://inn-clone-web.vercel.app/',
    img: `${clonewebImg}`,
  },
];

export default projectData;
