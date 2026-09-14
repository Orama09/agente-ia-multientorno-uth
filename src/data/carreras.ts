export interface Carrera {
  slug: string;
  nombre: string;
  subtitulo: string;
  imagenPortada: string;
  descripcion?: string;
  objetivos?: {
    general?: string;
    especifico?: string;
  };
  perfilProfesionalTexto?: string;
  camposTrabajo?: string[];
  habilidades?: string[];
  destrezas?: string[];
  competencias?: string[];
  competenciasEspecificas?: string[];
  competenciasGenericas?: string[];
  areasTrabajo?: string[];
  ambitosOcupacionales?: string[];
  conocimientos?: string[];
  beneficios?: string[];
  perfilDocente?: string;
  planEstudios: {
    tipo: "pdf" | "imagen";
    archivo: string;
  };
}

export const carrerasData: Record<string, Carrera> = {
  // ================= TÉCNICOS =================
  tec_diseño_grafico: {
    slug: "tec_diseño_grafico",
    nombre: "Diseño Gráfico",
    subtitulo: "Técnico Universitario",
    imagenPortada: "/images/tec_diseño_grafico.png",
    camposTrabajo: [
      "Campo Publicitario, Editorial y Animación Digital",
    ],
    habilidades: [
      "Retoque de fotografía (Adobe Photoshop)",
      "Vectorización (Adobe Ilustrator)",
      "Animación digital (Adobe After)",
      "Diagramación de impresos (Adobe Indesign)",
      "Diseño web (Adobe Muse)",
    ],
    competencias: [
      "Percibir elementos necesarios que definen una identidad corporativa, tomando en cuenta los conceptos básicos de tipografía, color, sus componentes, aplicados al diseño publicitario.",
      "Aplicar conocimientos y procedimiento metodológicos para tratamiento de proyectos de edición, creación y animación digital.",
      "Desarrollar proyectos de diseño gráfico en plataformas audiovisuales, desarrollando un entorno digital adaptable y creativo para las diferentes disciplinas profesionales.",
      "Realizar el diseño de un producto, según parámetros de calidad, estética y objetivo aplicando conceptos y herramientas del diseño gráfico a fotografías en ambiente exterior e interior de día o noche.",
    ],
    planEstudios: {
      tipo: "pdf",
      archivo: "/documents/plan_de_estudios_tecnico_en_diseño_grafico.pdf",
    },
  },

  tec_produccion_industrial: {
    slug: "tec_produccion_industrial",
    nombre: "Producción Industrial",
    subtitulo: "Técnico Universitario",
    imagenPortada: "/images/tec_produccion_industrial.png",
    objetivos: {
      general:
        "Contribuir al fortalecimiento y desarrollo de la industria en el país en correlación a la mejora de la productividad industrial en las áreas de calidad, manufactura, administración de la producción, innovación y mejora de procesos, mediante la formación de profesionales con las competencias técnicas, actitudes profesionales y habilidades en su área profesional, que le permitan ser competitivos en el ámbito nacional e internacional y que a su vez posean una alta calidad humana en valores.",
      especifico:
        "Desarrollar competencias profesionales y laborales en el área de la producción industrial, mediante el estudio de los fundamentos conceptuales y procedimentales de las ciencias que estructuran su desarrollo.",
    },
    perfilProfesionalTexto:
      "El egresado del Técnico Universitario en Producción Industrial desarrollará sus conocimientos sobre los siguientes elementos de formación:",
    camposTrabajo: [
      "Manejo de herramientas informáticas.",
      "Principios de la programación y modelación y simulación de sistemas.",
      "Principios de la Producción industrial.",
      "Elementos básicos de metrología industrial.",
      "Comprensión de los fundamentos teóricos y metodológicos de la ingeniería de métodos, a fin de optimizar procesos de manufactura.",
      "Manejo de procesos de manufactura industrial.",
      "Procesos y mecanismos de control de calidad.",
      "Requerimientos de higiene y seguridad en las fábricas y plantas de producción.",
      "Mecanismos y sistemas de higiene, seguridad y ergonomía en plantas de fabricación industrial.",
      "Manejo de las herramientas de contabilidad y contabilidad de costos industriales.",
      "Sistemas de gestión de la calidad.",
      "Herramientas de medición de la productividad.",
      "Manejo de recursos materiales.",
      "Desarrollo de productos.",
      "Control de inventarios.",
      "Distribución logística.",
    ],
    habilidades: [
      "Habilidad en el manejo de programas informáticos.",
      "Habilidad para la detección de fallas en procesos de producción.",
      "Habilidad para aplicar los conocimientos en la práctica.",
      "Habilidad para la comunicación oral y escrita.",
      "Habilidades en el manejo de procesos de manufactura y control de la calidad.",
      "Habilidad para la detección de fallas en los procesos de calidad.",
      "Creatividad e iniciativa para la implementación de acciones correctivas en procesos de producción y calidad.",
      "Capacidad para el trabajo en equipo y la búsqueda de la eficiencia de sistemas productivos.",
      "Habilidad para diagnosticar y efectuar propuestas en la mejora de la higiene y seguridad en plantas de producción.",
      "Habilidades de razonamiento numérico.",
      "Habilidad para la comunicación efectiva.",
      "Habilidades para el acondicionamiento y adaptación de recursos.",
      "Habilidad en el manejo de recursos humanos.",
      "Habilidad para la redacción de informes y controles relacionados al área de desempeño.",
    ],
    competenciasEspecificas: [
      "Auxilia en la sistematización y control de procesos de calidad y producción aplicando el uso de herramientas informáticas y de programación en las distintas etapas de fabricación, con el propósito de mejorar la gestión y desarrollo de los sistemas productivos.",
      "Contribuye en el análisis de procesos de producción industrial aplicando los principios de la modelación y simulación de sistemas con la finalidad de diagnosticar fallas.",
      "Fundamenta teóricamente los procesos de calidad y producción como elementos interrelacionados en el buen desarrollo de la producción industrial.",
      "Inspecciona y controla procesos de manufactura y calidad en cada una de las etapas de desarrollo que conduzcan a la eficiencia y eficacia del sistema productivo.",
      "Colabora en la implementación y aplicación de las normas de higiene y seguridad industrial y ergonomía en los sistemas productivos, con la finalidad de contribuir al logro de la eficiencia, bienestar y seguridad de los trabajadores.",
      "Demuestra dominio de las herramientas contables en el manejo y control de la calidad y producción.",
      "Apoya en el desarrollo de procesos de administración de la producción en cada una de las etapas del sistema productivo a fin de determinar la eficiencia organizacional.",
      "Controla el manejo de materiales e inventarios y asiste en la organización y distribución de planta.",
    ],
    competenciasGenericas: [
      "Capacidad de abstracción, análisis y síntesis.",
      "Capacidad para la gestión del tiempo, resolución de problemas y toma de decisiones.",
      "Capacidad organizativa y de planificación.",
      "Capacidad para comunicarse de manera oral y escrita en su propia lengua.",
      "Capacidad para el conocimiento de una segunda lengua.",
      "Capacidad para el manejo de las TIC.",
      "Capacidad para la adaptación al entorno y sentido ético.",
      "Capacidad para el trabajo en equipo.",
      "Capacidad para la gestión de proyectos y el desarrollo del espíritu emprendedor.",
    ],
    areasTrabajo: [
      "Asistencia técnica en departamentos de Higiene y seguridad.",
      "Asistencia técnica en departamentos de calidad.",
      "Asistencia técnica en departamentos de producción.",
      "Asistencia técnica en departamentos de operaciones y logística.",
      "Acompañamiento en el departamento de ingeniería (Instructores, métodos, desarrollo de nuevos productos, estudio de tiempos).",
      "Asistencia técnica en departamentos de planeación.",
      "Asistencia técnica en manejo y control de inventarios.",
      "Microempresario en el área de producción y manufactura de productos.",
    ],
    ambitosOcupacionales: [
      "Sectores públicos y privados en áreas de la producción industrial.",
      "Sector Industrial del país.",
      "Empresas maquiladoras.",
      "Empresas de proyectos y servicios.",
    ],
    planEstudios: {
      tipo: "imagen",
      archivo: "/images/Flujograma-de-Produccion-Industrial-002.png",
    },
  },

  // ================= LICENCIATURAS =================
  lic_marketing: {
    slug: "lic_marketing",
    nombre: "Marketing",
    subtitulo: "Licenciatura",
    imagenPortada: "/images/lic_marketing.png",
    perfilProfesionalTexto:
      "Con esta formación tendrás una visión amplia de los mercados, preparado para explorar oportunidades de negocios y proponer estrategias innovadoras, así como soluciones a desafíos dentro de las áreas de la industria.",
    camposTrabajo: [
      "Digital",
      "Publicidad",
      "Innovación",
      "Investigación de Mercados",
      "Comercial y de Ventas",
      "Logística y distribución",
      "Comunicaciones",
      "Gestión estratégica y desarrollo de proyectos",
      "En organizaciones pequeñas, medianas y grandes de distintos giros",
      "Empresas de consultorías",
      "Emprendimientos",
    ],
    habilidades: [
      "Creativo",
      "Sociable",
      "Extrovertido",
      "Persuasivo",
      "Proactivo",
    ],
    competencias: [
      "Establecer estrategias competitivas para el mercado actual.",
      "Enfoque integral empresa - mercado.",
      "Elaborar propuestas para ventas, comercialización, branding, comunicación.",
      "Gestión a la innovación.",
      "Utilización de metodologías vanguardistas.",
    ],
    planEstudios: {
      tipo: "pdf",
      archivo: "/documents/Brochure_Licenciatura_MARKETING-02.pdf",
    },
  },

  lic_gerencia_negocios: {
    slug: "lic_gerencia_negocios",
    nombre: "Gerencia de Negocios",
    subtitulo: "Licenciatura",
    imagenPortada: "/images/lic_gerencia_negocios.png",
    camposTrabajo: [
      "Gerente de planeación y analista financiero.",
      "Administrador de negocios.",
      "Asesor empresarial.",
      "Controlador.",
      "Gerente general.",
      "Consultor de empresas.",
      "Gerente de Recursos.",
      "Gerente de Ventas.",
      "Capacitación.",
      "Gerente Administrativo.",
      "Principalmente, Gerente General de pequeñas, medianas y grandes empresas.",
    ],
    habilidades: [
      "Tiene sólidos conocimientos en el área de finanzas y mercadotecnia que le permiten emprender y solidificar negocios.",
    ],
    destrezas: [
      "Tiene los conceptos modernos de dirección empresarial y creación de nuevos negocios. Capacidad de crear su propia empresa.",
    ],
    competencias: [
      "Está capacitado para dirigir y coordinar actividades que conlleven a una eficaz toma de decisiones en una organización pública o privada.",
    ],
    planEstudios: {
      tipo: "pdf",
      archivo: "/documents/Flujograma Gerencia de Negocios UV 02.2025.pdf",
    },
  },

  // ================= INGENIERÍAS =================
  ing_computacion: {
    slug: "ing_computacion",
    nombre: "Ingeniería en Computación",
    subtitulo: "Ingeniería",
    imagenPortada: "/images/ing_computacion.png",
    camposTrabajo: [
      "Desarrollador de sistemas inteligentes.",
      "Gerente de informática organizacional.",
      "Programador de sistemas.",
      "Administrador de base de datos.",
      "Administrador de redes.",
      "Proveedor de servicios profesionales.",
      "Consultor de TIC’S empresarios.",
    ],
    habilidades: [
      "Diseña y rediseña sistemas cuando los cambios tecnológicos, metodológicos y organizacionales lo requieran.",
      "Evalúan la factibilidad de proyectos de informática.",
      "Trabajar como parte de un equipo multidisciplinario.",
      "Concretar las necesidades de los usuarios potenciales de los productos y servicios.",
      "Aprovechar al máximo los recursos humanos y tecnológicos que tenga a su disposición.",
    ],
    destrezas: [
      "Planifica, analiza y desarrolla sistemas.",
      "Modela, simula, implementa y optimiza sistemas complejos.",
      "Gerencia organizaciones empresariales en ámbito tecnológico.",
      "Desarrolla estrategias basadas en las tecnologías de información y comunicación (TIC'S) que permitan a las empresas lograr ventajas competitivas.",
    ],
    competencias: [
      "Capacidad de generar nuevas ideas para organizar, planificar y la vez resolver problemas mediante la toma de decisiones basadas en la información.",
      "Desarrollará software de sistemas paralelos, concurrentes, distribuidos con un alto grado de dificultad técnica.",
      "Aplicará formalismos matemáticos y metodologías de ingeniería de software en la implementación de sistemas autoadaptables, flexibles, escalables y de alto desempeño.",
    ],
    planEstudios: {
      tipo: "pdf",
      archivo: "/documents/Brochure_Ingenieria_Computacion-2021.pdf",
    },
  },

  ing_electronica: {
    slug: "ing_electronica",
    nombre: "Ingeniería en Electrónica",
    subtitulo: "Ingeniería",
    imagenPortada: "/images/ing_electronica.png",
    camposTrabajo: [
      "Jefe de operaciones.",
      "Jefe de Mantenimiento.",
      "Director de desarrollo.",
      "Jefe de Mecatrónica.",
      "Jefe de Automatización.",
      "Gerente general.",
      "Muchas otras áreas de la industria.",
    ],
    habilidades: [
      "Habilidad para la solución práctica de problemas de electrónica en la industria.",
      "Habilidad analítica y de diseño para resolver problemas complejos de ingeniería electrónica en el sector industrial mediante la aplicación de sistemas de automatización, instrumentación, robótica y control.",
    ],
    destrezas: [
      "Crear, innovar y trasferir tecnología aplicando diversos métodos y procedimientos en proyectos de ingeniería electrónica, tomando en cuenta el desarrollo sustentable del entorno.",
      "Resolver problemas complejos de ingeniería electrónica en el sector industrial mediante la aplicación de sistemas de automatización, instrumentación robótica y control.",
    ],
    competencias: [
      "Diseñar, analizar y construir equipos y/o sistemas electrónicos para la solución de problemas en el entorno profesional, aplicando normas técnicas y estándares nacionales e internacionales.",
    ],
    planEstudios: {
      tipo: "pdf",
      archivo: "/documents/Flujograma de Ingenieria Electronica Final.pdf",
    },
  },
  // ================= POSGRADO / MAESTRÍAS =================
  maes_mba: {
    slug: "maes_mba",
    nombre: "Administración de Empresas (MBA)",
    subtitulo: "Maestría en Posgrado",
    imagenPortada: "/images/maes_mba.png",
    descripcion:
      "La Maestría en Administración de Empresas (MBA) está orientada a formar profesionales para gestionar la administración y liderazgo en el desarrollo organizacional en la toma de decisiones fundamentadas y generadas en la resolución de problemas. Los graduados de este programa fomentan las habilidades analíticas, estratégicas y éticas/sociales para desempeñar roles directivos capaces de afrontar desafíos en el ámbito global del negocio.",
    objetivos: {
      general:
        "Preparar profesionales en la administración de empresas altamente capacitados con habilidades analíticas, estratégicas y éticas/sociales, orientados a liderar el desarrollo organizacional mediante la toma de decisiones fundamentadas y la resolución efectiva de problemas.",
    },
    perfilProfesionalTexto:
      "El profesional de la Maestría en Administración de Empresas posee competencias para liderar y gestionar el desarrollo organizacional identificando oportunidades de emprendimiento, aplicar metodologías para proyectos empresariales, gestionar el planeamiento estratégico, analizar riesgos de negocios, liderar sistemas de información innovadores y tomar decisiones.",
    camposTrabajo: [
      "Gerente de Administración y Servicios",
      "Gerente de Ventas, Comercialización y Desarrollo",
      "Gerente de Producción y Operaciones",
      "Gerentes de Servicios de Educación",
      "Gerentes de bancos, de servicios financieros y de seguros.",
      "Gerente de Hoteles, restaurantes, comercios y otros servicios.",
      "Profesores de Universidad y de Enseñanza Superior",
      "Analistas en Gestión y Organización",
    ],
    planEstudios: {
      tipo: "pdf",
      archivo: "/documents/flujogramas Admon MBA.pdf",
    },
  },

  maes_recursos_humanos: {
    slug: "maes_direccion_recursos_humanos",
    nombre: "Dirección de Recursos Humanos",
    subtitulo: "Maestría en Posgrado",
    imagenPortada: "/images/maes_recursos_humanos.png",
    objetivos: {
      general:
        "Formar profesionales en el área de Dirección de Recursos Humanos con visión estratégica que integre el análisis de los entornos, con la realidad de la organización para realizar diagnósticos, proyecciones y proyectos capaces de orientar el futuro de la organización.",
    },
    perfilProfesionalTexto:
      "El profesional con esta maestría logra obtener todas las competencias del recurso humano que el sector empresarial y gubernamental requiere. Obtiene los conocimientos y criterios del área con un sentido de responsabilidad ante las delicadas funciones que desarrollará, contando con herramientas vigentes para la evaluación, desarrollo y comportamiento del capital humano.",
    competencias: [
      "Capacidad de administración adecuada del capital humano.",
      "Acceso a tendencias mundiales en el área de gestión de personas.",
      "Coaching aplicado dentro de las organizaciones.",
      "Diseño y aplicación de módulos de contratación idóneos para cargos directivos y planificación.",
    ],
    habilidades: [
      "Herramientas gerenciales de administración de recurso humano para estrategias de desarrollo organizacional.",
      "Gestión de promociones internas, outsourcing y modalidades contractuales.",
      "Fomento del liderazgo, honestidad y alta calidad humana orientada a resultados empresariales.",
    ],
    perfilDocente:
      "Los catedráticos poseen competencias de administración de recurso humano en empresas e instituciones gubernamentales, experiencia comprobada en firmas nacionales y extranjeras, nivel académico de Doctorado / Maestría y una actitud orientada al acompañamiento y formación personalizada de cada estudiante.",
    planEstudios: {
      tipo: "pdf",
      archivo: "/documents/Direccion-de-Recursos-Humanos.pdf",
    },
  },

// ================= POSGRADO / DOCTORADO =================
  doc_admin_gerencial: {
    slug: "doc_admin_gerencial",
    nombre: "Doctorado en Administración Gerencial",
    subtitulo: "Doctorado en Posgrado",
    imagenPortada: "/images/doc_admin_gerencial.png",
    descripcion:
      "El Doctorado en Administración Gerencial de UTH se propone formar investigadores para promover el desarrollo y construcción de conceptos teóricos, metodológicos y técnicos con el fin de diseñar, aplicar y evaluar proyectos derivados del análisis sistemático de los fenómenos abordados por las ciencias administrativas, en el marco de la globalización económica, política y social.",
    perfilProfesionalTexto:
      "El egresado dominará los aspectos teóricos fundamentales de administración y conocimientos especializados en la función gerencial, metodología y técnicas de investigación y epistemología de la ciencia, manteniendo una actitud científica sólida frente a problemas organizacionales complejos.",
    competencias: [
      "Actitud científica en la determinación de causas y efectos de los problemas gerenciales.",
      "Responsabilidad en la toma de decisiones y en la efectividad de propuestas técnicas a nivel gerencial.",
      "Respeto y cumplimiento estricto de las leyes en materia de investigación científica.",
    ],
    conocimientos: [
      "Fundamentos de teoría organizacional y de administración científica.",
      "Modelos gerenciales para la innovación y el cambio empresarial.",
      "Estrategias gerenciales para empresas de éxito.",
      "Planificación estratégica.",
      "Pensamientos epistemológicos de la ciencia.",
      "Tipos y paradigmas de investigación científica.",
      "Métodos y técnicas de investigación (teóricos, prácticos y empíricos).",
      "Diseños de investigación avanzada.",
    ],
    beneficios: [
      "Nivel máximo académico para proponer alternativas de soluciones en el ámbito empresarial.",
      "Abre puertas profesionales en el ámbito nacional e internacional.",
      "Capacidad para crear soluciones sostenibles e integrales mediante investigación científica.",
      "Liderazgo en cargos directivos y de alta responsabilidad con enfoque intelectual.",
      "Oportunidades de docencia universitaria en pregrado/posgrado y participación en conferencias internacionales.",
      "Preparación para producir nuevos conocimientos que impulsen el desarrollo científico y tecnológico.",
    ],
    planEstudios: {
      tipo: "pdf",
      archivo: "/documents/Doctorado-Admin_page-0002.pdf",
    },
  },
};

// ================= ALIAS Y RUTA ALTERNATIVAS (URL SLUGS) =================
// Grado / Licenciaturas
carrerasData["lic_gerencia_negocios"] = carrerasData["lic_gerencia_negocios"];
carrerasData["lic-gerencia-negocios"] = carrerasData["lic_gerencia_de_negocios"];
carrerasData["licenciatura_en_gerencia_de_negocios"] = carrerasData["lic_gerencia_de_negocios"];

// Grado / Ingenierías
carrerasData["licenciatura_en_marketing"] = carrerasData["lic_marketing"];
carrerasData["lic-marketing"] = carrerasData["lic_marketing"];

// Posgrado / Maestrías
carrerasData["maestria-en-administracion-de-empresas-mba"] = carrerasData["maes_mba"];
carrerasData["maestria_en_administracion_de_empresas_mba"] = carrerasData["maes_mba"];
carrerasData["maestria_en_administracion_de_empresas"] = carrerasData["maes_mba"];
carrerasData["mba"] = carrerasData["maes_mba"];

carrerasData["maestria-en-direccion-de-recursos-humanos"] = carrerasData["maes_recursos_humanos"];
carrerasData["maestria_en_direccion_de_recursos_humanos"] = carrerasData["maes_recursos_humanos"];
carrerasData["direccion_de_recursos_humanos"] = carrerasData["maes_recursos_humanos"];

// Posgrado / Doctorado
carrerasData["doctorado-en-administracion-gerencial"] = carrerasData["doc_admin_gerencial"];
carrerasData["doctorado_en_administracion_gerencial"] = carrerasData["doc_admin_gerencial"];
carrerasData["doctorado_administracion_gerencial"] = carrerasData["doc_admin_gerencial"];