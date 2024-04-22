/**
* Template Name: Kelly
* Template URL: https://bootstrapmade.com/kelly-free-bootstrap-cv-resume-html-template/
* Updated: Mar 17 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()

//Para manter a navegacao com o tema e língua escolhidos, é consultado o localStorage, se não tiver nada, o padrão é portugues e modo claro

let currentLanguage = localStorage.getItem('language') || 'pt';
let currentTheme = localStorage.getItem('theme') || 'light';

// Definição das translations no escopo global
const translations = {
  'en': {
    'home': 'Home',
    'resume': 'Resume',
    'contact': 'Contact',
    'titulo': 'Undergraduate student in Information Systems',
    'resumo_hero': "I'm a Computing student at the University of São Paulo (USP). Currently, I'm focused on studying soft skills and their presence in the Information Systems (IS) curricula of the main Brazilian institutions, aiming to understand the current educational context of IS courses in Brazil and whether they meet the market demands regarding these skills.",
    'botao_hero': 'Resume',
    'pt1_resumo':"I'm a Computing student, currently pursuing a degree in Information Systems at the University of São Paulo (USP). Throughout my academic journey, I've had the opportunity to develop various technical skills, spanning areas such as logic and programming in languages like C, JAVA, and HTML, software engineering, project management, database management, among others. Additionally, outside the curriculum, I sought to complement my education by actively participating in extracurricular activities, where I was able to strengthen my interpersonal skills, such as teamwork, leadership, communication, creativity, and empathy. I'm committed to further consolidating my knowledge and skills through learning opportunities and future challenges in the field of computing.",
    't1':'Education',
    'item1_titulo': 'Bachelor of Information Systems',
    'item1_data': '2022 - Present',
    'item1_lugar':'University of São Paulo, São Carlos, SP',
    'item1_descricao':"Undergraduate student pursuing a Bachelor's degree in Information Systems at USP with an expected graduation in 2025.",
    't2': 'Languages',
    'item2_titulo': 'Advanced English',
    'item2_descricao':"Completion of a 6-year extensive English course.",
    't3':'Professional Experience',
    'item3_titulo': 'Sales Coordinator',
    'item3_data': 'March 2023 - September 2023',
    'item3_descricao1':"Leadership of the sales team within the company, aiming to establish goals and strategies to achieve sales objectives.",
    'item3_descricao2':"Lead negotiation and sale of the largest revenue-generating project in the company's history up to July 2023.",
    'item3_descricao3':"Prospection of new clients using networking and negotiation techniques.",
    'item3_descricao4':"Conduction of presentations and demonstrations of the products/services offered by the company, as well as negotiating contracts and partnerships.",
    'item3_descricao5':"Training new members joining the sales team.",
    'item3_descricao6':"Participation in the development of custom web applications and systems for company clients, primarily in the conception stages involving aspects such as requirements analysis, architecture definition, and prototyping. Taking on roles both as a developer and, on some occasions, as a Product Owner.",
    't4':'Extracurricular Activities',
    'item4_titulo':'Undergraduate Research Project',
    'item4_data': 'September 2023 - Present',
    'item4_lugar':'National Council for Scientific and Technological Development (CNPq)',
    'item4_descricao': "Development of the research project entitled 'Teaching by Competencies and Learning of Soft Skills in Information Systems Courses'. The project investigates the adequacy of Information Systems curricula at the main Brazilian institutions to the guidelines of the Ministry of Education (MEC) and scientific societies regarding soft skills and competency-based teaching, aiming to enhance the training of future IT professionals. To achieve this, data analysis is being conducted on curricula collected from the top Higher Education Institutions in Brazil.",
    'item5_data': 'March 2024 - Present',
    'item5_lugar':'Extracurricular at the University of São Paulo',
    'item5_descricao':"Volunteer at the 'Campanha USP do Agasalho' in the External Relations team. Working in teams to seek sponsorships and partnerships, managing finances (tracking expenses, budgeting, and selling personalized campaign products), and contacting professors and institutes for donations. In addition to fulfilling the main purpose of the campaign to collect clothing donations for the needy community of São Carlos, through events such as 'Saída às Ruas' or 'Floquinho Vai à Feira'.",
    'item6_titulo': 'Course "SAP S/4HANA Business Process Integration"',
    'item6_data': 'May 2023 - August 2023',
    'item6_lugar':"Course offered through a partnership between USP and SAP",
    'item6_descricao': 'During this course, I gained a deeper understanding of the competencies required to work with cutting-edge technologies in the field of business management, particularly in relation to SAP systems. I expanded my knowledge in areas such as data analysis, business processes, and implementation strategies, which allowed me to obtain a more comprehensive understanding of the complexities and challenges faced by organizations in an ever-evolving business environment.',
    'item7_data': 'May 2023 - September 2023',
    'item7_lugar':'Extracurricular at the University of São Paulo',
    'item7_descricao':"I worked as part of a team to promote the group's activities, develop creative communication and marketing strategies to promote the events, workshops, and lectures offered. In addition to managing social media platforms, creating relevant content, interacting with the community, and increasing the group's visibility through social media channels.",
    'skills_titulo':"Skills",
    'skills_descricao':'During my undergraduate studies and extracurricular activities, several technical skills were developed. Here are some of the key ones:',
    'skill1':"Agile methodologies",
    'skill2':"Requirements Engineering",
    'skill3':"Computer Networks",
    'skill4':"Object-Oriented Programming",
    'contato_texto':"Get in touch or connect with me on LinkedIn.",
    'conecte':'Connect with me',
    'carregando':'Loading',
    'msg_enviada':"Your message has been sent. Thank you!",
    'enviar':'Send Message'
  },
  'pt': {
    'home': 'Início',
    'resume': 'Currículo',
    'contact': 'Contato',
    'titulo': 'Graduanda em Sistemas de Informação',
    'resumo_hero': "Sou estudante de Computação na Universidade de São Paulo (USP). Atualmente estou focada em estudar soft skills e sua presença nos currículos de Sistemas de Informação (SI) das principais instituições  brasileiras visando entender o contexto educacional atual dos cursos de SI no Brasil e se eles atendem às demandas do mercado com relação a essas habilidades.",
    'botao_hero': 'Currículo',
    'pt1_resumo': 'Sou estudante de Computação, atualmente graduanda em Sistemas de Informação pela Universidade de São Paulo (USP). Durante minha trajetória acadêmica, tive a oportunidade de desenvolver diversas habilidades técnicas, abrangendo áreas como lógica e programação em diversas linguagens como C, JAVA e HTML, engenharia de software, gerenciamento de projetos, banco de dados, entre outros. Além disso, fora da grade curricular, busquei complementar minha formação participando ativamente de atividades extracurriculares, onde pude fortalecer minhas habilidades interpessoais, como trabalho em equipe, liderança, comunicação, criatividade e empatia. Estou comprometida em continuar consolidando meus conhecimentos e habilidades por meio de oportunidades de aprendizado e desafios futuros na área de computação.',
    't1':'Educação',
    'item1_titulo': 'Bacharel em Sistemas de Informação',
    'item1_data': '2022 - Atual',
    'item1_lugar':'Universidade de São Paulo, São Carlos, SP',
    'item1_descricao': 'Graduanda em Bacharelado em Sistemas de Informação pela USP com previsão de formatura para 2025.',
    't2': 'Idiomas',
    'item2_titulo': 'Inglês Avançado',
    'item2_descricao':"Conclusão de 6 anos de curso extensivo de língua inglesa.",
    't3':'Experiência Profissional',
    'item3_titulo': 'Coordenadora de Vendas',
    'item3_data': 'Março/2023 - Setembro/2023',
    'item3_descricao1':"Liderança do time de vendas da empresa, buscando estabelecer metas e estratégias para alcançar os objetivos de vendas.",
    'item3_descricao2':"Condução da negociação e venda do maior projeto em termos de receita na história da empresa até julho de 2023.",
    'item3_descricao3':"Prospecção de novos clientes utilizando técnicas de negociação e networking.",
    'item3_descricao4':"Realização de apresentações e demonstrações dos produtos/serviços oferecidos pela empresa, além da negociação de contratos e parcerias.",
    'item3_descricao5':"Treinamento dos membros ingressantes para a equipe de vendas.",
    'item3_descricao6':"Participação do desenvolvimento de aplicativos e sistemas web personalizados para os clientes da empresa, principalmente nas etapas de concepção, que envolvem aspectos como análise de requisitos, definição de arquitetura e prototipagem, desempenhando papéis tanto de desenvolvedora quanto, em algumas ocasiões, de Product Owner.",
    't4':'Atividades Complementares',
    'item4_titulo': 'Iniciação Científica',
    'item4_data': 'Setembro de 2023 - Atual',
    'item4_lugar':'Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq)',
    'item4_descricao': 'Bolsista do Conselho Nacional de Desenvolvimento Científico e Tecnológico. Desenvolvimento do projeto de pesquisa intitulado "Ensino por competências e aprendizagem de soft skills em cursos de Sistemas de Informação". O projeto investiga a adequação dos currículos de Sistemas de Informação das principais instituições brasileiras às diretrizes do MEC e das sociedades científicas com relação a soft skills e ensino por competências, visando aprimorar a formação dos futuros profissionais de TI. Para isso, está sendo realizada a análise de dados coletados dos currículos das melhores Instituições de Ensino Superior do Brasil.',
    'item5_data': 'Março de 2024 - Atual',
    'item5_lugar':'University of São Paulo, São Carlos, SP',
    'item5_descricao':"Voluntária na Campanha USP do Agasalho no núcleo de Relações Externas. Trabalho em equipe para buscar patrocínios e parcerias, gerenciar o financeiro (controlando gastos e fazendo orçamentos e venda de produtos personalizados da Campanha) e entrar em contato com professores e institutos para arrecadação. Além de exercitar o principal propósito da campanha de buscar arrecadações de roupas para a comunidade carente de São Carlos, por meio de eventos como o Saída às Ruas ou o Floquinho Vai à Feira.",
    'item6_titulo': 'Curso “SAP S/4HANA Business Process Integration',
    'item6_data': 'Maio de 2023 - Agosto de 2023',
    'item6_lugar':'Curso oferecido por meio de parceria entre USP e SAP',
    'item6_descricao': 'Durante este curso, adquiri um aprofundamento nas competências necessárias para atuar com tecnologias de ponta no campo da gestão empresarial, principalmente com relação a sistemas SAP. Ampliei meu conhecimento em áreas como análise de dados, processos de negócios e estratégias de implementação, o que me permitiu obter uma compreensão mais abrangente das complexidades e desafios enfrentados pelas organizações em um ambiente de negócios em constante evolução.',
    'item7_data': 'Maio de 2023 - Setembro de 2023',
    'item7_lugar':'Extracurricular na Universidade de São Paulo',
    'item7_descricao':"Trabalhei em equipe para divulgar as atividades do grupo, criar estratégias de comunicação e marketing de forma criativa para promover os eventos, workshops e palestras oferecidos. Além de gerenciar as redes sociais, desenvolvendo conteúdos relevantes, interagindo com a comunidade e aumentando a visibilidade do grupo através das mídias sociais.",
    'skills_titulo':'Habilidades',
    'skills_descricao':'Durante a graduação e atividades extracurriculares, foram desenvolvidas várias habilidades técnicas, entre elas, estas são algumas que se destacam:',
    'skill1':"Metodologias Ágeis",
    'skill2':"Engenharia de Requisitos",
    'skill3':"Redes de Computadores",
    'skill4':"Programação Orientada a Objetos",
    'contato_texto':'Entre em contato ou conecte-se comigo no LinkedIn',
    'conecte':'Conecte-se comigo',
    'carregando':'Carregando',
    'msg_enviada':'Sua mensagem foi enviada. Obrigada!',
    'enviar':'Enviar Mensagem',
  }
};

/**
   * Função para alternar entre idiomas
   */
function switchLanguage() {
  

  // Alterna entre os idiomas
  if (currentLanguage === 'pt') {
    currentLanguage = 'en';
  } else {
    currentLanguage = 'pt';
  }

  // Armazena o idioma atual
  localStorage.setItem('language', currentLanguage);

  // Aplica as traduções
  const langKeys = translations[currentLanguage];
  Object.keys(langKeys).forEach(function(key) {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = langKeys[key];
    }
  });

}

/**
 * Função para alternar entre os temas claro e escuro
 */
function switchTheme() {
  // Alterna entre os temas
  if (currentTheme === 'light') {
    currentTheme = 'dark';
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    document.getElementById('theme-icon').src = 'assets/img/DarkMode.png'; // Imagem para o modo escuro
  } else {
    currentTheme = 'light';
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    document.getElementById('theme-icon').src = 'assets/img/LightMode.png'; // Imagem para o modo claro
  }

  // Armazena o tema atual
  localStorage.setItem('theme', currentTheme);
}

// Chama a função para aplicar as configurações ao carregar a página
window.onload = function() {
  // Aplica o tema atual
  document.body.classList.toggle('dark-theme', currentTheme === 'dark');
  document.body.classList.toggle('light-theme', currentTheme === 'light');
  document.getElementById('theme-icon').src = currentTheme === 'dark' ? 'assets/img/DarkMode.png' : 'assets/img/LightMode.png';

  // Aplica as traduções
  const langKeys = translations[currentLanguage];
  Object.keys(langKeys).forEach(function(key) {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = langKeys[key];
    }
  });
};


