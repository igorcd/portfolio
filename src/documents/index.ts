import readme from './readme';
import packages from '../../package.json';
import info from './info';
import contact from './contact';

const documents: {[key:string]: {title: string; content: string}} = {
    readme: { title: 'readme.txt', content: readme },
    packages: { title: 'package.json', content: JSON.stringify(packages, undefined, 4) },
    info: { title: 'info.txt', content: info },
    contact: { title: 'contact.txt', content: contact },
};

export default documents;