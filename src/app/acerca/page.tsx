"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Target, Eye, GraduationCap, Users, History, MapPin } from "lucide-react";

export default function Acerca() {
  const menu = [
    "Titular",
    "Antecedentes",
    "Responsabilidad, Misión y Visión",
    "Autoridades Académicas",
    "Ubicación",
  ];

  const [active, setActive] = useState("");

  const formatId = (text: string) =>
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/,/g, "")
      .replace(/\s+/g, "-");

  useEffect(() => {
    const handleScroll = () => {
      menu.forEach((item) => {
        const id = formatId(item);
        const el = document.getElementById(id);

        if (el) {
          const rect = el.getBoundingClientRect();

          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      setActive(id);

      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  // Datos de las autoridades
  const autoridades = {
    rector: {
      nombre: "Mae. Javier Mejía",
      cargo: "Rector General",
      imagen: "/images/rector_general.png",
    },
    otros: [
      {
        nombre: "Mae. Edgardo Enamorado",
        cargo: "Secretario General",
        imagen: "/images/secretario_general.png",
      },
      {
        nombre: "Dr. José Jesús Mora",
        cargo: "Vicerrector Académico",
        imagen: "/images/vicerrector_academico.png",
      },
      {
        nombre: "Dr. Diego Chacón",
        cargo: "Vicerrector de Vinculación Nacional e Internacional",
        imagen: "/images/vicerrector_vinculacion.png",
      },
    ],
  };

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section
        className="relative h-[50vh] flex items-center bg-cover bg-[center_10%]"
        style={{ backgroundImage: "url('/images/acerca_uth.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-6xl px-8 pt-20 text-white">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Acerca de UTH
          </h1>

          <p className="text-gray-200 max-w-2xl text-lg">
            Conoce nuestra historia, misión y el compromiso con la excelencia académica.
          </p>

        </div>

      </section>

      {/* CONTENIDO */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-10">

        {/* ================= SIDEBAR ================= */}
        <aside className="lg:w-1/4">

          <div className="lg:sticky lg:top-24 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 overflow-hidden">

            <div className="bg-gradient-to-r from-[#B5963E] to-[#C5A853] px-5 py-4">
              <h2 className="text-white font-semibold">
                Secciones
              </h2>
            </div>

            <ul className="p-2">

              {menu.map((item, i) => {

                const id = formatId(item);

                return (
                  <li
                    key={i}
                    onClick={() => scrollToSection(id)}
                    className={`group px-4 py-3 text-sm rounded-xl cursor-pointer transition-all duration-300 flex justify-between items-center
                    ${
                      active === id
                        ? "bg-[#C5A853] text-white shadow-md"
                        : "text-gray-700 hover:bg-[#C5A853]/10 hover:text-[#7A5F1C]"
                    }`}
                  >
                    <span>{item}</span>

                    <span
                      className={`w-2 h-2 rounded-full transition-all duration-300
                      ${
                        active === id
                          ? "bg-white scale-100"
                          : "bg-[#C5A853] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                      }`}
                    ></span>
                  </li>
                );
              })}
            </ul>

          </div>
        </aside>

        {/* ================= SECCIONES ================= */}
        <div className="lg:w-3/4 space-y-10">

          {/* TITULAR */}
          <div id={formatId("Titular")} className="bg-white rounded-2xl shadow-md p-8 scroll-mt-32">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Información Institucional
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
              Bienvenidos a la página web de la Universidad Tecnológica de Honduras (UTH), 
              “La universidad con liderazgo”. Deseamos que ustedes se integren al éxito que 
              compañía a esta institución desde su fundación en 1986; que conozcan nuestra 
              misión de brindar educación superior de excelencia y los retos futuros del 
              presente siglo.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
              Es una institución en la cual se busca proporcionar la más alta
              calidad educativa y tecnológica, con cobertura nacional, que
              integre la formación más humana y justa.
            </p>

            <p className="text-gray-600 leading-relaxed text-justify">
              Busca ser un pilar fundamental tecnológico del desarrollo
              sostenido y sustentable, que cuenta con carreras acreditadas,
              lo cual garantiza la excelencia académica y el prestigio
              institucional.
            </p>
          </div>

          {/* ANTECEDENTES */}
          <div id={formatId("Antecedentes")} className="bg-white rounded-2xl shadow-md p-8 scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <History className="text-[#B5963E]" size={30} />
              <h2 className="text-2xl font-bold text-[#B5963E]">
                ANTECEDENTES
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              
              <div className="text-gray-600 text-justify space-y-4">
                <p>
                  La UTH es una institución de mucho prestigio y de mayor crecimiento 
                  de Honduras. Estamos interesados en que los estudiantes y docentes 
                  tengan la oportunidad de enfrentar los desafíos en un mundo globalizado, 
                  con una economía de libre mercado y altamente competitiva.
                </p>

                <p>
                  En Honduras existen trece campus universitarios de la UTH, ubicados 
                  en San Pedro Sula, Choloma, Puerto Cortés, El Progreso, La Ceiba, 
                  Santa Bárbara, Siguatepeque, Tegucigalpa, Choluteca, Roatán, Juticalpa, 
                  Cofradía y Villanueva Cuenta con un centro asociado para la educación 
                  a distancia (On line).
                </p>

                <p>
                  Una de las características principales de la UTH es que su sistema 
                  de enseñanza está estandarizado para garantizar la misma calidad en 
                  los diferentes campus, capacitando a los docentes y ofreciendo a los 
                  estudiantes un futuro profesional prometedor por la enseñanza 
                  de alto valor que se les ha inculcado.
                </p>

                <p>
                  La UTH continúa su proceso de internacionalización al suscribir 
                  convenios con diferentes universidades de gran prestigio en Centroamérica, 
                  América del sur, Norteamérica y Europa; además estableciendo alianzas 
                  con organismos internacionales de desarrollo para realizar proyectos 
                  en las zonas más vulnerables del país. Esperamos que en su recorrido por 
                  nuestro portal, ustedes conozcan y sean parte de la UTH.
                </p>
              </div>

              <div className="w-full h-[450px] relative group overflow-hidden rounded-xl cursor-pointer shadow-lg">

                <Image
                  src="/images/fundador.png"
                  alt="Fundador de la UTH"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300"></div>

                {/* TEXTO ENCIMA */}
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <p className="text-sm font-semibold">Presidente de la Compañía Financiera, S.A. (Cofisa) y fundador de la Universidad Tecnológica de Honduras (UTH)</p>
                </div>

              </div>

            </div>
          </div>

          {/* MISION, VISION Y RESPONSABILIDAD */}
          <div id={formatId("Responsabilidad, Misión y Visión")} className="space-y-6 scroll-mt-32">

            {/* OBJETIVO GENERAL */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-[#B5963E]" size={30} />
                <h3 className="text-2xl font-bold text-[#B5963E]">
                  RESPONSABILIDAD INSTITUCIONAL
                </h3>
              </div>
              <p className="text-gray-600 text-base leading-relaxed text-justify mb-6">
                En la UTH nos comprometemos a servir a la sociedad brindando 
                excelencia académica, con tecnología de avanzada y los mejores 
                profesionales académicos, enfocados a la mejora continua, 
                satisfaciendo las necesidades de nuestros estudiantes y de 
                la empresa privada, pública y partes interesadas.
              </p>

              <div className="w-full h-[250px] relative rounded-xl overflow-hidden group cursor-pointer shadow-md">
  
                {/* IMAGEN */}
                <Image
                  src="/images/responsabilidad.jpg"
                  alt="TESCHA"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* OVERLAY OSCURO */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300"></div>

                {/* TEXTO ENCIMA */}
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <p className="text-sm font-semibold">
                    Responsabilidad Institucional
                  </p>
                </div>
                
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              
              {/* MISIÓN */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-[#B5963E]" size={30} />
                  <h3 className="text-2xl font-bold text-[#B5963E]">
                    MISIÓN
                  </h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed text-justify">
                  Brindar educación superior de excelencia, mediante la preparación 
                  of profesionales con capacidad y liderazgo, que contribuya 
                  al desarrollo económico y social de Honduras, dentro del 
                  sistema universal de libre empresa.
                </p>
              </div>

              {/* VISIÓN */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="text-[#B5963E]" size={30} />
                  <h3 className="text-2xl font-bold text-[#B5963E]">
                    VISIÓN
                  </h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed text-justify">
                  La UTH se mantendrá a la vanguardia y liderazgo en la educación 
                  superior, apoyando el desarrollo socio económico y social de Honduras.
                </p>
              </div>
            </div>

          </div>

          {/* ================= AUTORIDADES ACADÉMICAS ================= */}
          <div id={formatId("Autoridades Académicas")} className="bg-white rounded-2xl shadow-md p-8 scroll-mt-32">
            
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-[#B5963E]" size={30} />
              <h2 className="text-2xl font-bold text-[#B5963E]">
                AUTORIDADES ACADÉMICAS
              </h2>
            </div>

            <p className="text-gray-600 mb-10 leading-relaxed text-justify">
              Conoce al equipo de liderazgo que guía a la Universidad Tecnológica de Honduras (UTH) hacia la excelencia académica y la innovación constante. Nuestras autoridades académicas están dedicadas a fomentar un entorno de aprendizaje dinámico y a impulsar el desarrollo integral de nuestros estudiantes.
            </p>

            {/* Estructura Jerárquica */}
            <div className="space-y-10">

              {/* RECTOR GENERAL - Arriba y Centrado */}
              <div className="flex justify-center">
                <div className="w-full max-w-[280px] h-[350px] relative group overflow-hidden rounded-xl cursor-pointer shadow-md border border-gray-100">
                  <Image
                    src={autoridades.rector.imagen}
                    alt={autoridades.rector.nombre}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>
                  {/* TEXTO ENCIMA */}
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300 p-2">
                    <p className="text-lg font-bold">{autoridades.rector.cargo}</p>
                    <p className="text-sm text-gray-200">{autoridades.rector.nombre}</p>
                  </div>
                </div>
              </div>

              {/* OTROS TRES - Cuadrícula Debajo */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                {autoridades.otros.map((autoridad, index) => (
                  <div key={index} className="w-full max-w-[280px] h-[350px] relative group overflow-hidden rounded-xl cursor-pointer shadow-md border border-gray-100">
                    <Image
                      src={autoridad.imagen}
                      alt={autoridad.nombre}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>
                    {/* TEXTO ENCIMA */}
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition duration-300 p-2">
                      <p className="text-lg font-bold">{autoridad.cargo}</p>
                      <p className="text-sm text-gray-200">{autoridad.nombre}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* UBICACION */}
          <div id={formatId("Ubicación")} className="bg-white rounded-2xl shadow-md p-8 scroll-mt-32">
            
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-[#B5963E]" size={30} />
              <h2 className="text-2xl font-bold text-[#B5963E]">
                UBICACIÓN
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">

              {/* DATOS */}
              <div className="text-gray-600 space-y-3 text-base flex flex-col justify-center border-l-4 border-[#B5963E] pl-6 py-2 bg-gray-50 rounded-r-xl">
                <p><span className="font-semibold text-[#B5963E]">Calle:</span> del Puente Río Blanco, Col Los Álamos</p>
                <p><span className="font-semibold text-[#B5963E]">Carretera:</span> Armenta, 3 cuadras al oeste</p>
                <p><span className="font-semibold text-[#B5963E]">Ciudad:</span> San Pedro Sula, Cortés, Honduras</p>
                <p><span className="font-semibold text-[#B5963E]">C.P:</span> 21101</p>
                <p><span className="font-semibold text-[#B5963E]">Teléfono:</span> +504 2508-2600</p>
                <p><span className="font-semibold text-[#B5963E]">Horario:</span> Lunes a viernes, 8:00 a.m. – 8:00 p.m.</p>
                <p><span className="font-semibold text-[#B5963E]">Sitio web:</span>{" "}
                  <a href="https://uth.hn" className="text-blue-600 hover:underline">uth.hn</a>
                </p>
                <p><span className="font-semibold text-[#B5963E]">Correo:</span> {""}
                  <a href="mailto:karla.tabora@uth.hn" className="text-blue-600 hover:underline">karla.tabora@uth.hn</a>
                </p>
                <p><span className="font-semibold text-[#B5963E]">Código Plus:</span> HX2Q+92 San Pedro Sula, Honduras</p>
              </div>

              {/* MAPA */}
              <div className="flex flex-col gap-6">
                <div className="w-full h-[350px] rounded-xl overflow-hidden border border-gray-200 shadow-inner">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.7600739241975!2d-88.0124055!3d15.550987499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f665acd44320ed9%3A0xc6f01f2103246f91!2sUniversidad%20Tecnol%C3%B3gica%20de%20Honduras!5e0!3m2!1ses!2smx!4v1786670106757!5m2!1ses!2smx"
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
    </main>
  );
}