import imageBaca from './assets/images/Projects_Image/BacaKomik.png'
import imageTrevo from './assets/images/Projects_Image/Trevo_Gastronomico.png'
import imageRelogio from './assets/images/Projects_Image/Relogio_Digital.png'
import imageVinhos from './assets/images/Projects_Image/Vinhos_Viniculas.png'
import imageCinematic from './assets/images/Projects_Image/Cinematic_Nightmare.png'

export type ProjectsType = {
  title: string
  description: string[]
  presentationText: string
  representationImage: string
  technology: string[]
  links: {
    repository: string
    webLink: string
  }
}

export const ProjectsList: ProjectsType[] = [
  {
    title: 'BacaKomik',
    description: [
      'Durante minha carreira como desenvolvedor, enquanto estudava os pilares do front-end (HTML, CSS, JavaScript) e aprendia a usar Sass, Gulp, e Bootstrap, desenvolvi um projeto que me marcou.',
      'Encontrei um design que chamou minha atenção: BacaKomik, um site/aplicativo para leitura de mangás, um tema que particularmente gosto. Este projeto foi uma experiência prática em transformar um design estático em um projeto real. Tive que tirar medidas, imagens e cores "no olho" para replicar o design de forma fiel. Ao olhar para trás, reconheço a dificuldade dessa tarefa e me orgulho de ter executado com maestria. (Caso tenha interesse em ver o design real o link é esse:  Link).',
      'Graças a esse projeto, melhorei meu olhar analítico e crítico, criatividade, autoconhecimento para colocar ideias em prática, e minhas habilidades técnicas evoluíram significativamente.'
    ],
    presentationText: 'Um site para você ler os seus mangás favoritos',
    representationImage: imageBaca,
    technology: [
      'HTML',
      'CSS',
      'JS',
      'Sass',
      'Gulp',
      'BootStrap',
      'Git/GitHub',
      'Responsive Design'
    ],
    links: {
      repository:
        'https://github.com/MatheusKay/projeto_ebac/tree/master/Projeto-modulo-5',
      webLink: 'https://projeto-ebac-tbt9.vercel.app/'
    }
  },
  {
    title: 'Trevo Gastronômico',
    description: [
      'Trevo Gastronômico foi um projeto completo que desenvolvi utilizando React com TypeScript e suas principais bibliotecas: Redux, Styled-components, Router-Dom, Formik, Yup e vários Hooks.',
      'A ideia era criar um site similar ao iFood, apresentando restaurantes e seus pratos. O projeto inclui um sistema de carrinho e um formulário para finalização de pedidos e pagamento. Seguindo as melhores práticas, componentizei diversos elementos com Styled-components para estilização. As informações dos restaurantes e pratos vinham de uma API, exigindo requisições e armazenamento de dados, além de outras funcionalidades, com o uso do Redux. Este projeto me permitiu extrair ao máximo meu conhecimento sobre React e testá-lo na prática.',
      'Aumentei significativamente meu entendimento, lógica de programação, resolução de problemas e estruturação de projetos e design, sendo o design pensado por mim focando em UI/UX.'
    ],
    presentationText:
      'Saboreie o melhor da culinária nos restaurantes mais incríveis. Seu paladar agradece, no Trevo da Gastronomia',
    representationImage: imageTrevo,
    technology: [
      'HTML',
      'CSS',
      'JS',
      'React',
      'TypeScript',
      'Redux',
      'React Hooks',
      'Styled-components',
      'API Integration',
      'Responsive Design',
      'Git/GitHub'
    ],
    links: {
      repository: 'https://github.com/MatheusKay/Trevo_Gastronomico',
      webLink: 'https://trevo-gastronomico.vercel.app/'
    }
  },
  {
    title: 'Relogio digital',
    description: [
      'O projeto Relógio Digital é um dos meus favoritos, combinando design e funcionalidade de forma gratificante. Desenvolvido com HTML, CSS e JavaScript puro, a proposta era criar um relógio digital visualmente atraente.',
      'Este projeto se destacou pela sua complexidade, apresentando duas telas intercambiáveis por meio de um interruptor. A primeira tela exibe um relógio digital e um cronômetro preciso, enquanto a segunda oferece um calculador de datas, permitindo calcular quanto tempo falta para o próximo aniversário.',
      'Apesar dos desafios, especialmente no uso intenso de JavaScript, consegui superar as dificuldades, aprimorando minhas habilidades de programação, lógica e resolução de problemas. Este projeto demonstra meu compromisso em transformar ideias criativas em realidade e contribuiu significativamente para meu desenvolvimento profissional.'
    ],
    presentationText:
      'Um Relogio e um timer para acompanhar quanto falta para sue aniversario',
    representationImage: imageRelogio,
    technology: ['HTML', 'CSS', 'JS', 'Responsive Design', 'Git/GitHub'],
    links: {
      repository: 'https://github.com/MatheusKay/relogio_cronometro',
      webLink: 'https://aniver-timer.vercel.app/'
    }
  },
  {
    title: 'Five Leaf Clover',
    description: [
      'Seguindo a ideia do Trevo Gastronômico, desenvolvi uma loja de vinhos online. Inicialmente, criei o projeto usando HTML, CSS, JavaScript e Bootstrap. Na época, era uma tela estática com alguns produtos e pouca funcionalidade.',
      'Meses depois, com conhecimento avançado em React, refiz o projeto. Usei React e suas principais bibliotecas, adicionando funcionalidades como uma barra de pesquisa, carrinho de compras com adição de itens, sistema de quantidade de produtos com recálculo de preço, filtros, entre outros detalhes. Desenvolvi também uma API para armazenar os dados dos vinhos em um banco de dados MongoDB, tornando o projeto mais escalável. A API seguiu a arquitetura padrão de rotas e um banco de dados, tornando o projeto parcialmente FullStack.',
      'Este projeto aprimorou minhas habilidades em lógica e análise de dados, desenvolvimento de APIs e uso de bancos de dados, contribuindo significativamente para minha evolução profissional.'
    ],
    presentationText:
      'Sua loja de vinhos favoritas, venha disfrutar de novos sabores',
    representationImage: imageVinhos,
    technology: [
      'HTML',
      'CSS',
      'JS',
      'TypeScript',
      'React',
      'Redux',
      'React Hooks',
      'Styled-components',
      'API Integration',
      'Responsive Design',
      'Git/GitHub',
      'Node.js',
      'Express',
      'MongoDB'
    ],
    links: {
      repository: 'https://github.com/MatheusKay/Vinhos_Viniculas',
      webLink: 'https://vinhos-viniculas-prototipo.vercel.app/'
    }
  },
  {
    title: 'Cinematic Nightmare',
    description: [
      'O projeto Cinematic Nightmare é uma plataforma dedicada a entusiastas de filmes de terror, oferecendo recomendações cuidadosamente selecionadas. O site possui duas páginas complementares.',
      'Na primeira página, apresentamos os filmes de terror em um carrossel dinâmico, exibindo título, breve descrição e imagens representativas. A interatividade é destacada pela navegação nas imagens, que atualiza instantaneamente as informações exibidas. A segunda página proporciona detalhes mais profundos de cada filme, incluindo título, descrição expandida e trailers. A navegação é facilitada pelos links no menu do site.',
      'Um projeto que me ajudou a consolidar a base do meu conhecimento em HTML, CSS e JS, pequenos projetos assim que me fortalecerão como Desenvolvedor'
    ],
    presentationText:
      'Um site para você ficar por dentro dos mais novos filmes de terror',
    representationImage: imageCinematic,
    technology: ['HTML', 'CSS', 'JS', 'Responsive Design', 'Git/GitHub'],
    links: {
      repository: 'https://github.com/MatheusKay/cinematic-nightmare',
      webLink: 'https://cinematic-nightmare.vercel.app/'
    }
  }
  // {
  //   title: 'Titulo do projeto',
  //   description: 'Descrição completa do projeto aqui',
  //   representationImage: 'link da imagem',
  //   technology: ['HTML', 'React.JS', 'CSS', 'JS'],
  //   links: {
  //     repository: 'link do repositorio',
  //     webLink: 'link do projeto no ar'
  //   }
  // },
  // {
  //   title: 'Titulo do projeto',
  //   description: 'Descrição completa do projeto aqui',
  //   representationImage: 'link da imagem',
  //   technology: ['HTML', 'React.JS', 'CSS', 'JS'],
  //   links: {
  //     repository: 'link do repositorio',
  //     webLink: 'link do projeto no ar'
  //   }
  // },
  // {
  //   title: 'Titulo do projeto',
  //   description: 'Descrição completa do projeto aqui',
  //   representationImage: 'link da imagem',
  //   technology: ['HTML', 'React.JS', 'CSS', 'JS'],
  //   links: {
  //     repository: 'link do repositorio',
  //     webLink: 'link do projeto no ar'
  //   }
  // },
  // {
  //   title: 'Titulo do projeto',
  //   description: 'Descrição completa do projeto aqui',
  //   representationImage: 'link da imagem',
  //   technology: ['HTML', 'React.JS', 'CSS', 'JS'],
  //   links: {
  //     repository: 'link do repositorio',
  //     webLink: 'link do projeto no ar'
  //   }
  // },
  // {
  //   title: 'Titulo do projeto',
  //   description: 'Descrição completa do projeto aqui',
  //   representationImage: 'link da imagem',
  //   technology: ['HTML', 'React.JS', 'CSS', 'JS'],
  //   links: {
  //     repository: 'link do repositorio',
  //     webLink: 'link do projeto no ar'
  //   }
  // }
]

export const SkillsList = [
  {
    title: 'Html e Css',
    icons: ['devicon-html5-plain', 'devicon-css3-plain']
  },
  {
    title: 'JavaScript e TypeScript',
    icons: ['devicon-javascript-plain', 'devicon-typescript-plain']
  },
  {
    title: 'React e Redux',
    icons: ['devicon-react-original', 'devicon-redux-original']
  },
  {
    title: 'BootStrap',
    icons: ['devicon-bootstrap-plain']
  },
  {
    title: 'Sass',
    icons: ['devicon-sass-original']
  },
  {
    title: 'Figma',
    icons: ['devicon-figma-plain']
  },
  {
    title: 'Git e GitHub',
    icons: ['devicon-git-plain', 'devicon-github-original']
  },
  {
    title: 'Vue',
    icons: ['devicon-vuejs-plain']
  }
]
