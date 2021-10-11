import FrameworkModel from '../../models/FrameworkModel';
import aspNetCore from './aspNetCore.json';
import figma from './figma.json';
import firebase from './firebase.json';
import flutter from './flutter.json';
import react from './react.json';
import tailwindCss from './tailwindCss.json';
import typescript from './typescript.json';
import vueJs from './vueJs.json';
import xamarinForms from './xamarinForms.json';

const frameworks: FrameworkModel[] = [
    vueJs,
    tailwindCss,
    aspNetCore,
    figma,
    firebase,
    flutter,
    react,
    typescript,
    xamarinForms
];

export default frameworks;