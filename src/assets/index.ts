import { FiGithub } from 'react-icons/fi';
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiRedux, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiMongodb, 
  SiDocker, 
  SiFigma, 
  SiGit, 
  SiThreedotjs 
} from 'react-icons/si';
import { 
  HiMenuAlt4 as menu, 
  HiX as close 
} from 'react-icons/hi';
import { 
  MdWeb as web,
  MdDeveloperMode as backend,
  MdPhonelinkSetup as mobile,
  MdCreate as creator 
} from 'react-icons/md';

// Import actual project images
import envirovisionImg from './envirovision.png';
import sneackersImg from './sneackers.png';

// Export icons directly
export {
  menu,
  close,
  FiGithub as github,
  // Tech icons
  SiHtml5 as html,
  SiCss3 as css,
  SiJavascript as javascript,
  SiTypescript as typescript,
  SiReact as reactjs,
  SiRedux as redux,
  SiTailwindcss as tailwind,
  SiNodedotjs as nodejs,
  SiMongodb as mongodb,
  SiDocker as docker,
  SiFigma as figma,
  SiGit as git,
  SiThreedotjs as threejs,
};

// Placeholder image generator
const placeholder = (name: string) => `https://placehold.co/400x400/1a1a1a/ffffff?text=${encodeURIComponent(name)}`;

// Project images - use actual images when available
export const envirovision = envirovisionImg;
export const sneackers = sneackersImg;
export const carrent = placeholder('Car Rent');
export const jobit = placeholder('Job IT');
export const tripguide = placeholder('Trip Guide');

// Company logos
export const meta = placeholder('Meta');
export const shopify = placeholder('Shopify');
export const starbucks = placeholder('Starbucks');
export const tesla = placeholder('Tesla');

// Add the background image
export const herobg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23050816'/%3E%3Cpath d='M0 0h100v100H0z' fill='%23915eff' fill-opacity='0.05'/%3E%3C/svg%3E";

export {
  web,
  backend,
  creator,
  mobile,
}; 