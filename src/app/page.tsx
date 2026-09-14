"use client";

import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Link from "next/link";
import SplashScreen from "@/components/SplashScreen";

export default function Inicio() {
  const [openRequirementsModal, setOpenRequirementsModal] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 🔥 SPLASH */}
      {showSplash && <SplashScreen />}

      {/* 🧩 CONTENIDO */}
      <main className="bg-white text-gray-800">

        {/* HERO */}
        <Hero />

        {/* ================= PRIMER INGRESO / ADMISIONES 2026 ================= */}
        <section className="bg-gradient-to-r from-[#8C6F23] to-[#C5A853] text-white py-8 border-b-4 border-[#7A5F1C]/40">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

            <div>
              <p className="uppercase text-base md:text-sm tracking-widest opacity-90 font-medium">
                Primer Ingreso • Admisiones 2026
              </p>
              <h2 className="text-3xl md:text-3xl font-bold mt-1">
                Requisitos de Admisión
              </h2>
              <p className="text-lg opacity-90 mt-1">
                Conoce los documentos y pasos necesarios para iniciar tu proceso universitario.
              </p>
            </div>

            {/* BOTÓN REQUISITOS */}
            <div className="flex gap-3">
              <button
                onClick={() => setOpenRequirementsModal(true)}
                className="bg-white text-[#7A5F1C] text-lg font-bold px-8 sm:px-12 md:px-20 py-3 rounded-lg shadow hover:bg-[#FAF6E9] transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                Ver requisitos
              </button>
            </div>

          </div>
        </section>

        {/* ================= ACCESOS RÁPIDOS ================= */}
        <section className="max-w-6xl mx-auto px-6 py-20">

          <h2 className="text-4xl md:text-4xl font-bold mb-16 text-center tracking-tight text-gray-800">
            Accesos Rápidos
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Oferta Académica",
                desc: "Conoce las ingenierías disponibles en la UTH.",
                img: "/images/oferta_academica.jpg",
                link: "/oferta-academica",
              },
              {
                title: "Estudiantes",
                desc: "Información para alumnos inscritos.",
                img: "/images/estudiantes.jpg",
                link: "/estudiantes",
              },
              {
                title: "Acerca de UTH",
                desc: "Conoce más sobre nuestra institución.",
                img: "/images/acerca_uth.jpg",
                link: "/acerca",
              },
            ].map((item, index) => (
              <Link key={index} href={item.link}>
                <div className="group relative h-72 w-full rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100">

                  <div
                    className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <h3 className="text-white text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-gray-200 text-base mt-1">
                      {item.desc}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#C5A853]" />

                </div>
              </Link>
            ))}

          </div>

        </section>

        {/* ================= JORNADAS DE ESTUDIO ================= */}
        <section className="bg-slate-100/80 py-20 border-y border-gray-200/70">
          <div className="max-w-6xl mx-auto px-6">

            <div className="text-center mb-14">
              <span className="text-[#8C6F23] uppercase tracking-widest text-base font-bold bg-[#C5A853]/20 px-4 py-1.5 rounded-full">
                Flexibilidad Académica
              </span>
              <h2 className="text-4xl md:text-4xl font-bold mt-3 text-gray-800">
                Jornadas de Estudio
              </h2>
              <p className="text-gray-600 mt-2 max-w-xl mx-auto text-lg">
                Adaptamos la oferta académica a tu ritmo de vida y compromisos laborales.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Presencial */}
              <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-[#B5963E]/10 flex items-center justify-center text-4xl mb-5 text-[#7A5F1C]">
                  ⏰
                </div>
                <h3 className="font-bold text-2xl text-gray-800 mb-2">Presencial</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Jornadas Matutina, vespertina y nocturna.
                </p>
              </div>

              {/* Presencial Fin de Semana */}
              <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-[#B5963E]/10 flex items-center justify-center text-4xl mb-5 text-[#7A5F1C]">
                  📚
                </div>
                <h3 className="font-bold text-2xl text-gray-800 mb-2">Presencial Fin de Semana</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Clases los fines de semana incluyendo el viernes.
                </p>
              </div>

              {/* 4x4 y 4x3 */}
              <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-[#B5963E]/10 flex items-center justify-center text-4xl mb-5 text-[#7A5F1C]">
                  ⚙️
                </div>
                <h3 className="font-bold text-2xl text-gray-800 mb-2">4×4 y 4×3</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Modalidad especial para alumnos con horarios de las plantas industriales.
                </p>
              </div>

              {/* Clases On line */}
              <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-[#B5963E]/10 flex items-center justify-center text-4xl mb-5 text-[#7A5F1C]">
                  💻
                </div>
                <h3 className="font-bold text-2xl text-gray-800 mb-2">Clases On line</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Clases desde la comodidad de tu hogar y el tiempo que tú decidas conveniente.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ================= BENEFICIOS UTH ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-4xl md:text-4xl font-bold mb-14 text-center text-gray-800">
              Beneficios UTH
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              {/* Transporte Gratis */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#B5963E]/10 flex items-center justify-center text-4xl mb-6 text-[#7A5F1C]">
                  🚌
                </div>
                <h3 className="font-bold text-2xl text-gray-800 mb-3">
                  Transporte GRATIS
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ponemos a tu disposición transporte gratuito a diferentes puntos de la ciudad, para que tengas más comodidad y seguridad cuando te diriges a clases. Aplica en campus seleccionados.
                </p>
              </div>

              {/* Clases OnLine */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#B5963E]/10 flex items-center justify-center text-4xl mb-6 text-[#7A5F1C]">
                  🌐
                </div>
                <h3 className="font-bold text-2xl text-gray-800 mb-3">
                  Clases OnLine
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Contamos con una novedosa plataforma que te permitirá cursar tus clases desde la comodidad de tu hogar y mejor de todo tú pones los horarios de tus clases y trabajos a presentar.
                </p>
              </div>

              {/* Becas en el exterior */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#B5963E]/10 flex items-center justify-center text-4xl mb-6 text-[#7A5F1C]">
                  ✈️
                </div>
                <h3 className="font-bold text-2xl text-gray-800 mb-3">
                  Becas en el exterior
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  La Rectoría te invita a formar parte de los programas de becas exclusivos para todos nuestros estudiantes en sus diferentes niveles académicos, pregrado, grado y doctorado.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ================= SECCIÓN INSTITUCIONAL (FONDO GRIS HOMOGÉNEO) ================= */}
        <section className="py-20 bg-slate-100/80 border-y border-gray-200/70">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                Educación pública de calidad
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                La Universidad Tecnológica de Honduras ofrece formación académica
                orientada al desarrollo profesional, innovación tecnológica y
                vinculación con el sector productivo.
              </p>

              <ul className="text-lg text-gray-700 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#C5A853]/20 text-[#7A5F1C] flex items-center justify-center font-bold text-base">✓</span>
                  <span>Programas académicos actualizados</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#C5A853]/20 text-[#7A5F1C] flex items-center justify-center font-bold text-base">✓</span>
                  <span>Infraestructura tecnológica</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#C5A853]/20 text-[#7A5F1C] flex items-center justify-center font-bold text-base">✓</span>
                  <span>Vinculación empresarial</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#C5A853]/20 text-[#7A5F1C] flex items-center justify-center font-bold text-base">✓</span>
                  <span>Formación integral</span>
                </li>
              </ul>
            </div>

            <div
              className="h-80 bg-cover bg-center rounded-3xl shadow-lg border border-[#E5D6A0]"
              style={{ backgroundImage: "url(/images/institucion.jpg)" }}
            />

          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="bg-gradient-to-r from-[#8C6F23] via-[#B5963E] to-[#C5A853] text-white py-24">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">
                Forma parte de la UTH
              </h2>

              <p className="text-lg opacity-90 max-w-xl">
                Inicia tu proceso de admisión consultando los requisitos indispensables para tu ingreso.
              </p>
            </div>

            <div className="flex-shrink-0">
              <button
                onClick={() => setOpenRequirementsModal(true)}
                className="bg-white text-[#7A5F1C] text-lg font-bold px-10 py-4 rounded-xl shadow-lg hover:bg-[#FAF6E9] transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                Ver requisitos de admisión
              </button>
            </div>

          </div>
        </section>

        {/* ================= MODAL REQUISITOS DE ADMISIÓN ================= */}
        {openRequirementsModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">

            <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border-t-8 border-[#C5A853] relative animate-scaleIn">

              {/* HEADER MODAL */}
              <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100 bg-gray-50/50">
                <div>
                  <span className="text-xs font-bold text-[#8C6F23] uppercase tracking-wider">Admisiones 2026</span>
                  <h2 className="font-bold text-xl text-gray-800">
                    Requisitos de Primer Ingreso
                  </h2>
                </div>

                <button
                  onClick={() => setOpenRequirementsModal(false)}
                  className="w-9 h-9 rounded-full bg-gray-200/60 hover:bg-gray-200 text-gray-600 hover:text-black flex items-center justify-center transition-colors text-lg"
                >
                  ✕
                </button>
              </div>

              {/* CUERPO DEL MODAL */}
              <div className="p-6 md:p-8 space-y-4">

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-3 h-3 rounded-full bg-[#C5A853] mt-1.5 flex-shrink-0" />
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    <strong>Título de Educación Media</strong> (Original y copia) o <strong>Acta de Graduación</strong>.
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-3 h-3 rounded-full bg-[#C5A853] mt-1.5 flex-shrink-0" />
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Copia de la <strong>Tarjeta de Identidad</strong>.
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-3 h-3 rounded-full bg-[#C5A853] mt-1.5 flex-shrink-0" />
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    <strong>Partida de Nacimiento Original</strong>.
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#B5963E]/10 border border-[#B5963E]/20">
                  <div className="w-3 h-3 rounded-full bg-[#8C6F23] mt-1.5 flex-shrink-0" />
                  <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                    Si desea solicitar equivalencias, favor presentar <strong>Certificación de Estudios Oficial</strong> o <strong>Historial Académico</strong> para su respectiva Pre Aprobación. <span className="font-bold text-[#7A5F1C] bg-[#C5A853]/20 px-2 py-0.5 rounded text-xs ml-1">(GRATIS)</span>
                  </p>
                </div>

              </div>

              {/* FOOTER MODAL */}
              <div className="px-6 py-5 bg-gray-50 border-t border-gray-100 flex justify-end">
                <button
                  onClick={() => setOpenRequirementsModal(false)}
                  className="bg-[#7A5F1C] text-white px-10 py-3.5 rounded-xl font-bold text-lg shadow-md hover:bg-[#5C4610] transition-all hover:scale-105 active:scale-95"
                >
                  Entendido
                </button>
              </div>

            </div>
          </div>
        )}

      </main>
    </>
  );
}