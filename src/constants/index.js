import {
  baseProgramation,
  devOps,
  freelance,
  fullstack,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  C,
  docker,
  clb,
  BioMérieux,
  sanofi,
  carso,
  heroSoccerArena,
  jobit,
  java,
  python,
  jenkins,
  talky,
  rust,
  postgres,
  fastify,
  kubernetes,
  cvscore,
  streamlit,
  chromadb,
  ollama,
  langchain,
  mistral,
  chatbot,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À Propos",
  },
  {
    id: "work",
    title: "Expériences Professionelles",
  },
  {
    id: "contact",
    title: "Contact",
  },
]; 

// const journeySteps = [
//   {
//     number: "01",
//     title: "Les Fondations",
//     description: (
//       <>
//         Après cinq ans passés dans des laboratoires pharmaceutiques et de recherche,
//         j'ai développé de solides compétences techniques et analytiques.
//         Mais une question revenait sans cesse : <span className='text-white font-semibold'>et si je créais quelque chose de mes propres mains ?</span>
//       </>
//     ),
//     illustration: "", // Remplace par ton SVG 3D de laboratoire
//     delay: 0.1
//   },
//   {
//     number: "02",
//     title: "Le Déclic",
//     description: (
//       <>
//         C'est ainsi qu'a débuté ma reconversion. En autodidacte, j'ai plongé dans le CS50 de Harvard,
//         découvrant un univers où logique et créativité se rencontrent.
//         Chaque ligne de code devenait une expérience, chaque projet un nouveau défi à relever.
//       </>
//     ),
//     illustration: "", // Remplace par ton SVG 3D de code/ordinateur
//     delay: 0.3
//   },
//   {
//     number: "03",
//     title: "L'Envol",
//     description: (
//       <>
//         Aujourd'hui, je poursuis cette transformation à Epitech,
//         déterminé à transformer cette passion en expertise professionnelle et à construire
//         des solutions qui ont un impact réel.
//       </>
//     ),
//     illustration: "", // Remplace par ton SVG 3D de fusée/croissance
//     delay: 0.5
//   }
// ]; 

const services = [
  {
    title: "Developpeur Full-Stack",
    icon: fullstack,
  },
  {
    title: "Programmation de bas niveau",
    icon: baseProgramation,
  },
  {
    title: "DevOps",
    icon: devOps,
  },
  {
    title: "Freelance",
    icon: freelance,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "C",
    icon: C,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "jenkins",
    icon: jenkins
  },
];

const experiences = [
  {
    title: "Technicien de laboratoire",
    company_name: "BioMérieux",
    icon: BioMérieux,
    iconBg: "#383E56",
    date: "Octobre 2024 - Juin 2025",
    points: [
      "Gestion des réclamations clients : analyse des problèmes signalés, identification des causes possibles et définition des actions correctives adaptées.",
      "Développement et optimisation de tests : élaboration de protocoles pour l’évaluation de l’immunogénicité, la mesure des performances d’anticorps et la détection d’interférences non spécifiques.",
    ],
  },
  {
    title: "Technicien de laboratoire Supérieur",
    company_name: "SANOFI",
    icon: sanofi,
    iconBg: "#E6DEDD",
    date: "Septembre 2023 - Septembre 2024",
    points: [
      "Entretien de différentes lignées cellulaires utilisées lors du processus de production vaccinal",
      "Décongélation d'une banque de cellules",
      "Participation aux améliorations continues du laboratoire tel que des CAPA, 5S, 5M, Gemba, selon les normes Contrôle Qualité.",
    ],
  },
  {
    title: "Technicien de laboratoire",
    company_name: "CARSO",
    icon: carso,
    iconBg: "#383E56",
    date: "Novembre 2022 - Septembre 2023",
    points: [
      "Ensemencement et isolation de bactéries provenant d'échantillons d'eau propre, eau usées, eau thermale",
      "Détection d’endotoxines sur des poches de dialyses",
    ],
  },
  {
    title: "Technicien d'essai",
    company_name: "Centre Léon Berard",
    icon: clb,
    iconBg: "#E6DEDD",
    date: "Octobre 2021 - Septembre 2022",
    points: [
      "Traitement des échantillons sanguins : plasma, sérums, PBMC utilisés lors des études contre le cancer.",
      "Mise en place de protocoles d'essais cliniques en collaboration avec des Attachés de Recherche Clinique",
      "Stockage des échantillons dans des cuves d'azote",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Hero Soccer Arena",
    description:
      "Head Soccer Arena est un jeu de football arcade en 2D où vitesse, physique et pouvoirs spéciaux s’entrechoquent. À mi-chemin entre Head Soccer, Super Smash Bros, chaque match devient un duel explosif.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
        icon: java,
      },
    ],
    image: heroSoccerArena,
    source_code_link: "https://github.com/Quentincs50/DevLab/tree/main/Hero%20Soccer%20Arena",
  },
  {
    name: "Talentio",
    description:
      "Application web permettant aux utilisateurs de rechercher des offres d'emploi, de consulter les fourchettes de salaires estimées pour les postes et de localiser les emplois disponibles en fonction de leur localisation actuelle.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
        icon: reactjs,
      },
      {
        name: "mongo",
        color: "green-text-gradient",
        icon: mongodb,
      },
      {
        name: "node",
        color: "pink-text-gradient",
        icon: nodejs,
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Quentincs50/Talentio",
  },
  {
    name: "Talky",
    description: "Talky est une plateforme de messagerie temps réel inspirée de Discord.\n" +
        "Elle permet aux utilisateurs de créer et gérer des serveurs ainsi que des canaux thématiques afin d’organiser les conversations.\n" +
        "Grâce à l’intégration de WebSockets côté backend, les messages sont synchronisés instantanément entre tous les participants.",
    tags: [
      {
        name: "rust",
        color: "green-text-gradient",
        icon: rust,
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
        icon: reactjs,
      },
      {
        name: "docker",
        color: "blue-text-gradient",
        icon: docker,
      }
    ],
    image: talky,
    source_code_link: "https://github.com/Quentincs50/Talky",
  },
  {
    name: "CVSCORE",
    description: "Application full-stack permettant aux utilisateurs de soumettre leur CV et d'obtenir un feedback détaillé généré par IA, adapté à une offre d'emploi spécifique.",
    tags: [
      {
        name: "postgres",
        color: "blue-text-gradient",
        icon: postgres,
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
        icon: reactjs,
      },
      {
        name: "fastify",
        color: "green-text-gradient",
        icon: fastify,
      },
      {
        name: "docker",
        color: "blue-text-gradient",
        icon: docker,
      },
      {
        name: "kubernetes",
        color: "blue-text-gradient",
        icon: kubernetes,
      },
    ],
    image: cvscore,
    source_code_link: "https://github.com/Quentincs50/ResumeAnalyzer",
  },
  {
    name: "ColdBot",
    description: " Prototype d'assistant RAG (Retrieval-Augmented Generation) pour aider les techniciens de maintenance à diagnostiquer des pannes en s'appuyant sur l'historique des interventions et les fiches techniques équipements.",
    tags: [
      {
        name: "langchain",
        color: "blue-text-gradient",
        icon: langchain,
      },
      {
        name: "ollama",
        color: "black-text-gradient",
        icon: ollama,
      },
      {
        name: "mistral",
        color: "orange-text-gradient",
        icon: mistral,
      },
      {
        name: "streamlit",
        color: "red-text-gradient",
        icon: streamlit,
      },
      {
        name: "chromadb",
        color: "pink-text-gradient",
        icon: chromadb,
      },
      {
        name: "python",
        color: "blue-text-gradient",
        icon: python,
      },
    ],
    image: chatbot,
    source_code_link: "https://github.com/Quentincs50/coldorg-rag-assistant",
  },

];

export { services, technologies, experiences, testimonials, projects };