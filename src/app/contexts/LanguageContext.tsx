import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    hello: 'Olá, eu sou',
    androidDeveloper: 'Android Developer',
    viewProjects: 'Ver Projetos',
    downloadCV: 'Baixar Currículo',
    about: 'Sobre',
    aboutDescription: 'Olá! Sou um desenvolvedor Android focado em criar aplicações robustas e escaláveis com forte ênfase na experiência do usuário. Atualmente estou estudando Engenharia Informática na Universidade Zambeze. Minha especialidade é transformar ideias complexas em código limpo e interfaces intuitivas usando as mais recentes tecnologias do ecossistema Android.',
    technicalSkills: 'Habilidades Técnicas',
    languages: 'Linguagens',
    frameworksLibs: 'Frameworks & Bibliotecas',
    tools: 'Ferramentas',
    featuredProjects: 'Projetos em Destaque',
    scientificPublications: 'Pesquisas Científicas e Projetos Pessoais',
    viewPublication: 'Ver Publicação',
    experienceEducation: 'Experiência & Educação',
    computerEngineering: 'Engenharia Informática',
    zambezeUniversity: 'Universidade Zambeze',
    currentPeriod: 'Janeiro 2022 - Presente',
    educationDescription: 'Bacharelado em Engenharia Informática com foco em desenvolvimento de software e análise de dados.',
    androidDevelopment: 'Desenvolvimento Android',
    machineLearning: 'Machine Learning',
    dataAnalysis: 'Análise de Dados',
    warehouseOperating: 'Warehouse Operating',
    billCommercial: 'Bill Comercial Ltd',
    workPeriod: 'Maio 2025 - Novembro 2025',
    workDescription: 'Responsável por análise de dados operacionais e otimização de fluxo de trabalho no armazém.',
    operationalDataAnalysis: 'Análise de Dados Operacionais',
    processOptimization: 'Otimização de Processos',
    inventoryManagement: 'Gestão de Inventário',
    languagesSection: 'Idiomas',
    portuguese: 'Português',
    native: 'Nativo',
    english: 'Inglês',
    intermediate: 'Intermediário',
    french: 'Francês',
    beginner: 'Iniciante',
    developedWith: 'Desenvolvido com React & Tailwind CSS',
    project1Title: 'Data-Driven EEG Band Discovery with Decision Trees',
    project1Description: 'Análise avançada de sinais de EEG utilizando árvores de decisão e Python. Foco em descoberta de bandas de frequência através de análise espectral e machine learning.',
    project2Title: 'Decoding Physical and Cognitive Impacts of Particulate Matter',
    project2Description: 'Investigação científica usando mais de 100 modelos de Machine Learning em C++ para decodificar impactos físicos e cognitivos de material particulado.',
    spectrumAnalysis: 'Análise de Espectro',
    decisionTrees: 'Decision Trees',
    predictiveModeling: 'Modelagem Preditiva',
  },
  en: {
    hello: 'Hello, I am',
    androidDeveloper: 'Android Developer',
    viewProjects: 'View Projects',
    downloadCV: 'Download CV',
    about: 'About',
    aboutDescription: 'Hello! I am an Android developer focused on creating robust, scalable applications with a strong emphasis on user experience. I am currently studying Computer Engineering at Zambeze University. My specialty is transforming complex ideas into clean code and intuitive interfaces using the latest technologies in the Android ecosystem.',
    technicalSkills: 'Technical Skills',
    languages: 'Languages',
    frameworksLibs: 'Frameworks & Libraries',
    tools: 'Tools',
    featuredProjects: 'Featured Projects',
    scientificPublications: 'Scientific Research and Personal Projects',
    viewPublication: 'View Publication',
    experienceEducation: 'Experience & Education',
    computerEngineering: 'Computer Engineering',
    zambezeUniversity: 'Zambeze University',
    currentPeriod: 'January 2022 - Present',
    educationDescription: 'Bachelor\'s degree in Computer Engineering with focus on software development and data analysis.',
    androidDevelopment: 'Android Development',
    machineLearning: 'Machine Learning',
    dataAnalysis: 'Data Analysis',
    warehouseOperating: 'Warehouse Operating',
    billCommercial: 'Bill Comercial Ltd',
    workPeriod: 'May 2025 - November 2025',
    workDescription: 'Responsible for operational data analysis and workflow optimization in the warehouse.',
    operationalDataAnalysis: 'Operational Data Analysis',
    processOptimization: 'Process Optimization',
    inventoryManagement: 'Inventory Management',
    languagesSection: 'Languages',
    portuguese: 'Portuguese',
    native: 'Native',
    english: 'English',
    intermediate: 'Intermediate',
    french: 'French',
    beginner: 'Beginner',
    developedWith: 'Developed with React & Tailwind CSS',
    project1Title: 'Data-Driven EEG Band Discovery with Decision Trees',
    project1Description: 'Advanced analysis of EEG signals using decision trees and Python. Focus on frequency band discovery through spectral analysis and machine learning.',
    project2Title: 'Decoding Physical and Cognitive Impacts of Particulate Matter',
    project2Description: 'Scientific investigation using over 100 Machine Learning models in C++ to decode physical and cognitive impacts of particulate matter.',
    spectrumAnalysis: 'Spectrum Analysis',
    decisionTrees: 'Decision Trees',
    predictiveModeling: 'Predictive Modeling',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.pt] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
