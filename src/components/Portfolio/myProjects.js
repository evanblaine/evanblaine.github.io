import { projectsImgs, lngLogo } from '../../utils/imagesDict';

const technologies = {
    react: {
        name: 'React.js',
        logo: lngLogo['react'],
        logoSize: 25
    },
    node: {
        name: 'Node.js',
        logo: lngLogo['node'],
        logoSize: 25
    },
    python: {
        name: 'Python',
        logo: lngLogo['python'],
        logoSize: 25
    },
    htmlAndCss: {
        name: 'HTML-CSS',
        logo: lngLogo['html_and_css'],
        logoSize: 25
    },
    js: {
        name: 'VanillaJS (ES6, ES7)',
        logo: lngLogo['javascript'],
        logoSize: 25
    },
    git: {
        name: 'Git',
        logo: lngLogo['git'],
        logoSize: 25
    },
}

const {
    python,
    git,
    htmlAndCss,
    js,
    react,
    node,
} = technologies;

export const projects = [
    {
        name: 'Tarkov Informer',
        photo: projectsImgs['tarkov_informer'],
        technologies: [python, git],
        url: 'https://discordbotlist.com/bots/tarkov-informer',
    },
    {
        name: 'SOC Dashboard',
        photo: projectsImgs['default_project'],
        technologies: [python, git, htmlAndCss],
    },
    {
        name: 'Stash',
        photo: projectsImgs['default_project'],
        technologies: [js, node, git],
        url: 'https://tarkov.dev/',
        code: 'https://github.com/the-hideout/stash',
    },
    {
        name: 'Digital Signature Verification System for the University of Southern Indiana',
        photo: projectsImgs['default_project'],
        technologies: [node, react, python, git],
    },
    {
        name: 'Tarkov Tools Discord Bot',
        photo: projectsImgs['default_project'],
        technologies: [js, node, git],
        url: 'https://discordbotlist.com/bots/tarkov-tools',
        code: 'https://github.com/kokarn/tarkov-tools-discord-bot',
    },
    {
        name: 'Dynamic Template for Flask',
        photo: projectsImgs['default_project'],
        technologies: [python, git],
        code: 'https://github.com/evanblaine/flask-dynamic-template',
    },
    {
        name: 'The Algorithms/Python',
        photo: projectsImgs['default_project'],
        technologies: [python, git],
        code: 'https://github.com/TheAlgorithms/Python',
    },
]