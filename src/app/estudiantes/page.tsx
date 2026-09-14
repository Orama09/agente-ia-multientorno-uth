"use client";

import { useEffect, useState } from "react";

export default function Estudiantes() {

  const menu = [
    {
      title: "Código de Conducta y Ética",
    },
    {
      title: "Beneficios Estudiantiles",
      submenu: [
        "Seguro Médico",
        "Bolsa de Empleo",
        "Programa de Pasantías",
      ],
    },
    {
      title: "Calendario Escolar",
    },
  ];

  const [active, setActive] = useState("");

  const formatId = (text: string) =>
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/,/g, "")
      .replace(/\s+/g, "-");

  /* ================= SCROLL ACTIVO ================= */
  useEffect(() => {

    const handleScroll = () => {

      const sections: string[] = [];

      menu.forEach((section) => {
        sections.push(section.title);

        if (section.submenu) {
          section.submenu.forEach((sub) => {
            sections.push(sub);
          });
        }
      });

      let currentSection = "";

      sections.forEach((item) => {

        const id = formatId(item);
        const el = document.getElementById(id);

        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (
          rect.top <= 180 &&
          rect.bottom >= 180
        ) {
          currentSection = id;
        }

      });

      if (currentSection) {
        setActive(currentSection);
      }

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  /* ================= SCROLL ================= */
  const scrollToSection = (id: string) => {

    const el = document.getElementById(id);

    if (!el) return;

    setActive(id);

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      110;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

  };

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section
        className="relative h-[50vh] flex items-center bg-cover bg-[center_30%]"
        style={{ backgroundImage: "url('/images/estudiantes.jpg')" }}
      >

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-6xl px-8 pt-20 text-white">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Estudiantes
          </h1>

          <p className="text-gray-200 max-w-2xl text-lg">
            Consulta información importante, servicios y recursos académicos.
          </p>

        </div>

      </section>

      {/* CONTENIDO */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-10">

        {/* ================= SIDEBAR ================= */}
        <aside className="lg:w-1/4">

          <div className="lg:sticky lg:top-24 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 overflow-hidden">

            <div className="bg-gradient-to-r from-[#B5963E] to-[#C5A853] px-5 py-4">
              <h2 className="text-white font-semibold">
                Secciones
              </h2>
            </div>

            <ul className="p-2">

              {menu.map((section, i) => {

                const id = formatId(section.title);

                return (
                  <div key={i}>

                    {/* MENU PRINCIPAL */}
                    <li
                      onClick={() => scrollToSection(id)}
                      className={`group px-4 py-3 text-sm rounded-xl cursor-pointer transition-all duration-300 flex justify-between items-center
                      ${
                        active === id
                          ? "bg-[#C5A853] text-white shadow-md font-medium"
                          : "text-gray-700 hover:bg-[#C5A853]/10 hover:text-[#7A5F1C]"
                      }`}
                    >

                      <span>{section.title}</span>

                      <span
                        className={`w-2 h-2 rounded-full transition-all duration-300
                        ${
                          active === id
                            ? "bg-white scale-100"
                            : "bg-[#C5A853] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                        }`}
                      ></span>

                    </li>

                    {/* SUBMENU */}
                    {section.submenu && (

                      <ul className="ml-4 mt-2 mb-3 space-y-1 border-l border-[#C5A853]/30 pl-3">

                        {section.submenu.map((subitem, subIndex) => {

                          const subId = formatId(subitem);

                          return (
                            <li
                              key={subIndex}
                              onClick={() => scrollToSection(subId)}
                              className={`px-3 py-2 text-sm rounded-lg cursor-pointer transition-all duration-200
                              ${
                                active === subId
                                  ? "bg-[#C5A853]/10 text-[#7A5F1C] font-medium"
                                  : "text-gray-600 hover:bg-[#C5A853]/10 hover:text-[#7A5F1C]"
                              }`}
                            >
                              {subitem}
                            </li>
                          );
                        })}

                      </ul>

                    )}

                  </div>
                );
              })}

            </ul>

          </div>

        </aside>

        {/* ================= SECCIONES ================= */}
        <div className="lg:w-3/4 space-y-10">

          {menu.map((section, i) => {

            const id = formatId(section.title);

            return (
              <div
                key={i}
                id={id}
                className="bg-white rounded-3xl shadow-md p-8 scroll-mt-32"
              >

                <h2 className="text-2xl font-bold text-[#B5963E] mb-6 uppercase tracking-wide">
                  {section.title}
                </h2>

                {/* ================= CÓDIGO DE CONDUCTA Y ÉTICA ================= */}
                {section.title === "Código de Conducta y Ética" && (

                  <div className="space-y-8">

                    <p className="text-gray-600 text-justify leading-relaxed">
                      En esta sección podrás consultar el Código de Conducta y Ética que establece los principios, valores fundamentales y lineamientos normativos que orientan la conducta y convivencia dentro de la Universidad Tecnológica de Honduras (UTH).
                    </p>

                    <div className="w-full h-[600px] border border-gray-200 rounded-2xl overflow-hidden">
                      <iframe
                        src="/documents/DIN-RRH-001-Código-de-Conducta-y-Etica.pdf"
                        className="w-full h-full"
                      />
                    </div>

                  </div>
                )}

                {/* ================= BENEFICIOS ESTUDIANTILES ================= */}
                {section.title === "Beneficios Estudiantiles" && (

                  <div className="space-y-10">

                    {/* TARJETAS DE BENEFICIOS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                      {/* SEGURO MÉDICO CONTRA ACCIDENTES */}
                      <div
                        id={formatId("Seguro Médico")}
                        className="scroll-mt-40 bg-gradient-to-br from-white to-green-50 border border-green-100 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          <div className="w-14 h-14 rounded-2xl bg-[#B5963E]/15 flex items-center justify-center text-3xl mb-4">
                            🛡️
                          </div>

                          <h3 className="text-lg font-bold text-gray-800 mb-3">
                            Seguro médico contra accidentes
                          </h3>

                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            El Seguro contra Accidentes te da cobertura en todo lugar. Para hacer uso de este beneficio, debes estar matriculado en el cuatrimestre vigente. La cobertura que este seguro te ofrece es:
                          </p>

                          <ul className="list-disc list-inside text-gray-600 text-sm space-y-2 mb-4">
                            <li>Gastos médicos hasta de L.40,000.00</li>
                            <li>Muerte o discapacidad total permanente, L. 100,000.00.</li>
                          </ul>
                        </div>

                        <p className="text-xs font-semibold text-[#7A5F1C] bg-[#B5963E]/15 p-3 rounded-xl text-center">
                          Reclama tu carnet, en Biblioteca de tu campus.
                        </p>
                      </div>

                      {/* BOLSA DE EMPLEO */}
                      <div
                        id={formatId("Bolsa de Empleo")}
                        className="scroll-mt-40 bg-gradient-to-br from-white to-[#B5963E]/5 border border-[#B5963E]/20 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          <div className="w-14 h-14 rounded-2xl bg-[#B5963E]/15 flex items-center justify-center text-3xl mb-4">
                            💼
                          </div>

                          <h3 className="text-lg font-bold text-gray-800 mb-3">
                            Bolsa de Empleo
                          </h3>

                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            Siendo la universidad de mayor prestigio en Honduras y como parte de nuestro compromiso con nuestros estudiantes y egresados, ponemos a tu disposición el servicio de bolsa de empleo, con el cual podrás tener acceso a ofertas laborales de las empresas más grandes del país y sin costo alguno.
                          </p>
                        </div>

                        <div className="text-xs font-semibold text-[#7A5F1C] bg-[#B5963E]/15 p-3 rounded-xl text-center">
                          Contacto: <a href="mailto:bolsaempleo@uth.hn" className="underline hover:text-[#5C4610]">bolsaempleo@uth.hn</a>
                        </div>
                      </div>

                      {/* PROGRAMA DE PASANTÍAS LABORALES */}
                      <div
                        id={formatId("Programa de Pasantías")}
                        className="scroll-mt-40 bg-gradient-to-br from-white to-[#B5963E]/5 border border-[#B5963E]/20 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          <div className="w-14 h-14 rounded-2xl bg-[#B5963E]/15 flex items-center justify-center text-3xl mb-4">
                            🎓
                          </div>

                          <h3 className="text-lg font-bold text-gray-800 mb-3">
                            Programa de Pasantías Laborales
                          </h3>

                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            UTH ha realizado convenios estratégicos con empresas, con el fin de brindarte empleo a cambio de financiar tus estudios universitarios y brindar a la vez experiencia en el campo laboral.
                          </p>
                        </div>

                        <div className="text-xs font-semibold text-[#7A5F1C] bg-[#B5963E]/15 p-3 rounded-xl text-center">
                          Contacto: <a href="mailto:bolsaempleo@uth.hn" className="underline hover:text-[#5C4610]">bolsaempleo@uth.hn</a>
                        </div>
                      </div>

                    </div>

                    {/* MENSAJE INSPIRACIONAL */}
                    <div className="bg-[#B5963E]/5 border-l-4 border-[#B5963E] rounded-r-2xl p-6 text-center italic text-gray-700 font-medium">
                      &quot;Te invitamos a que disfrutes de cada una de las actividades extracurriculares y que puedas hacer uso de todos los beneficios que como institución te ofrecemos; que te sientas orgulloso de pertenecer a UTH.&quot;
                    </div>

                    {/* CONTACTOS INSTITUCIONALES */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        <a
                          href="mailto:katherine.zelaya@uth.hn"
                          className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#B5963E]/10 hover:bg-[#B5963E]/20 transition-colors text-[#7A5F1C] font-medium text-xs md:text-sm"
                        >
                          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span>katherine.zelaya@uth.hn</span>
                        </a>

                        <a
                          href="mailto:maria.cordova@uth.hn"
                          className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#B5963E]/10 hover:bg-[#B5963E]/20 transition-colors text-[#7A5F1C] font-medium text-xs md:text-sm"
                        >
                          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span>maria.cordova@uth.hn</span>
                        </a>

                        <a
                          href="mailto:olman.turcios@uth.hn"
                          className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#B5963E]/10 hover:bg-[#B5963E]/20 transition-colors text-[#7A5F1C] font-medium text-xs md:text-sm"
                        >
                          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span>olman.turcios@uth.hn</span>
                        </a>
                      </div>
                    </div>

                  </div>

                )}

                {/* ================= CALENDARIO ================= */}
                {section.title === "Calendario Escolar" && (

                  <div className="space-y-8">

                    <p className="text-gray-600 leading-relaxed text-justify space-y-4">
                      Consulta el calendario escolar oficial correspondiente
                      al ciclo académico 2026.
                    </p>

                    <div className="w-full h-[600px] border border-gray-200 rounded-2xl overflow-hidden">
                      <iframe
                        src="/documents/Calendario Académico UTH 2026.pdf"
                        className="w-full h-full"
                      />
                    </div>

                  </div>

                )}

              </div>
            );
          })}

        </div>

      </section>

    </main>
  );
}