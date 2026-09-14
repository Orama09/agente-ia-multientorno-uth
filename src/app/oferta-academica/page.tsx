"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [categoria, setCategoria] = useState("tecnico");

  // CARRERAS TÉCNICAS
  const carrerasTecnico = [
    { nombre: "Diseño Gráfico", img: "/images/tec_diseño_grafico.png", link: "/oferta-academica/tec_diseño_grafico" },
    { nombre: "Producción Industrial", img: "/images/tec_produccion_industrial.png", link: "/oferta-academica/tec_produccion_industrial" },
    { nombre: "Redes Informáticas", img: "/images/tec_redes_informaticas.png", link: "/oferta-academica/tec_redes_informaticas" },
    { nombre: "Aplicaciones Computacionales", img: "/images/tec_app_computacionales.png", link: "/oferta-academica/tec_app_computacionales" },
    { nombre: "Caficultura Sostenible", img: "/images/tec_caficultura.png", link: "/oferta-academica/tec_caficultura" },
    { nombre: "Gestión de Negocios Agro-Cafetaleros", img: "/images/tec_gestion_negocios_agro-cafetaleros.png", link: "/oferta-academica/tec_gestion_negocios_agro-cafetaleros" },
    { nombre: "Recursos Humanos", img: "/images/tec_recursos_hum.png", link: "/oferta-academica/tec_recursos_hum" },
    { nombre: "Marketing Digital", img: "/images/tec_marketing_digital.png", link: "/oferta-academica/tec_marketing_digital" },
    { nombre: "Contabilidad", img: "/images/tec_contabilidad.png", link: "/oferta-academica/tec_contabilidad" },
    { nombre: "Electrónica", img: "/images/tec_electronica.png", link: "/oferta-academica/tec_electronica" },
    { nombre: "Gerencia Pública", img: "/images/tec_gerencia_publica.png", link: "/oferta-academica/tec_gerencia_publica" },
    { nombre: "Sistemas Automotrices", img: "/images/tec_automotrices.png", link: "/oferta-academica/tec_sistemas_automotrices" },
  ];

  // LICENCIATURAS (GRADO)
  const carrerasLicenciatura = [
    { nombre: "Licenciatura en Marketing", img: "/images/lic_marketing.png", link: "/oferta-academica/lic_marketing" },
    { nombre: "Licenciatura en Gerencia de Negocios", img: "/images/lic_gerencia_negocios.png", link: "/oferta-academica/lic_gerencia_negocios" },
    { nombre: "Licenciatura en Ingeniería Financiera", img: "/images/lic_ingenieria_financiera.png", link: "/oferta-academica/lic_ingenieria_financiera" },
    { nombre: "Licenciatura en Informática Administrativa", img: "/images/lic_informatica_admin.png", link: "/oferta-academica/lic_informatica_admin" },
    { nombre: "Licenciatura en Psicología", img: "/images/lic_psicologia.png", link: "/oferta-academica/lic_psicologia" },
    { nombre: "Licenciatura en Comercio y Negocios Internacionales", img: "/images/lic_comercio_negocios.png", link: "/oferta-academica/lic_comercio_negocios" },
    { nombre: "Licenciatura en Contaduría Financiera", img: "/images/lic_contaduria.png", link: "/oferta-academica/lic_contaduria" },
    { nombre: "Licenciatura en Derecho", img: "/images/lic_derecho.png", link: "/oferta-academica/lic_derecho" },
    { nombre: "Licenciatura en Relaciones Industriales", img: "/images/lic_relaciones_industriales.png", link: "/oferta-academica/lic_relaciones_industriales" },
    { nombre: "Licenciatura en Turismo", img: "/images/lic_turismo.png", link: "/oferta-academica/lic_turismo" },
  ];

  // INGENIERÍAS (GRADO)
  const carrerasIngenieria = [
    { nombre: "Ingeniería en Computación", img: "/images/ing_computacion.png", link: "/oferta-academica/ing_computacion" },
    { nombre: "Ingeniería en Electrónica", img: "/images/ing_electronica.png", link: "/oferta-academica/ing_electronica" },
    { nombre: "Ingeniería en Producción Industrial", img: "/images/ing_produccion_industrial.png", link: "/oferta-academica/ing_produccion_industrial" },
    { nombre: "Ingeniería en Mecatrónica", img: "/images/ing_mecatronica.png", link: "/oferta-academica/ing_mecatronica" },
  ];

  // MAESTRÍAS (POSGRADO)
  const carrerasMaestria = [
    { nombre: "Maestría en Administración de Empresas (MBA)", img: "/images/maes_mba.png", link: "/oferta-academica/maes_mba" },
    { nombre: "Maestría en Dirección de Recursos Humanos", img: "/images/maes_recursos_humanos.png", link: "/oferta-academica/maes_recursos_humanos" },
    { nombre: "Maestría en Dirección Empresarial y Comercio Internacional", img: "/images/maes_comercio_internacional.png", link: "/oferta-academica/maes_comercio_internacional" },
    { nombre: "Maestría en Dirección Financiera", img: "/images/maes_direccion_financiera.png", link: "/oferta-academica/maes_direccion_financiera" },
    { nombre: "Maestría en Automatización Industrial", img: "/images/maes_automatizacion.png", link: "/oferta-academica/maes_automatizacion" },
    { nombre: "Maestría en Dirección Comercial y Mercadeo", img: "/images/maes_comercial_mercadeo.png", link: "/oferta-academica/maes_comercial_mercadeo" },
    { nombre: "Maestría en Derecho Procesal Civil", img: "/images/maes_derecho_procesal.png", link: "/oferta-academica/maes_derecho_procesal" },
    { nombre: "Maestría en Gestión Logística", img: "/images/maes_gestion_logistica.png", link: "/oferta-academica/maes_gestion_logistica" },
    { nombre: "Maestría en Gestión de Energía Renovable", img: "/images/maes_gestion_energia.png", link: "/oferta-academica/maes_gestion_energia" },
    { nombre: "Maestría en Ciberseguridad", img: "/images/maes_ciberseguridad.png", link: "/oferta-academica/maes_ciberseguridad" },
    { nombre: "Maestría en Criminología", img: "/images/maes_criminologia.png", link: "/oferta-academica/maes_criminologia" },
  ];

  // DOCTORADOS (POSGRADO)
  const carrerasDoctorado = [
    { nombre: "Doctorado en Administración Gerencial", img: "/images/doc_admin_gerencial.png", link: "/oferta-academica/doc_admin_gerencial" },
    { nombre: "Doctorado en Derecho", img: "/images/doc_derecho.png", link: "/oferta-academica/doc_derecho" },
  ];

  // ESTRUCTURA DEL MENÚ
  const menu = [
    {
      id: "tecnico",
      title: "Técnico",
    },
    {
      id: "grado",
      title: "Grado",
      defaultCategory: "licenciaturas",
      submenu: [
        { id: "licenciaturas", title: "Licenciaturas" },
        { id: "ingenierias", title: "Ingenierías" },
      ],
    },
    {
      id: "posgrado",
      title: "Posgrado",
      defaultCategory: "maestrias",
      submenu: [
        { id: "maestrias", title: "Maestrías" },
        { id: "doctorados", title: "Doctorados" },
      ],
    },
  ];

  // OBTENER ARREGLO SEGÚN LA CATEGORÍA SELECCIONADA
  const getCarreras = () => {
    switch (categoria) {
      case "tecnico":
        return carrerasTecnico;
      case "licenciaturas":
        return carrerasLicenciatura;
      case "ingenierias":
        return carrerasIngenieria;
      case "maestrias":
        return carrerasMaestria;
      case "doctorados":
        return carrerasDoctorado;
      default:
        return carrerasTecnico;
    }
  };

  // OBTENER TÍTULO DINÁMICO
  const getTitulo = () => {
    switch (categoria) {
      case "tecnico":
        return "Carreras Técnicas";
      case "licenciaturas":
        return "Licenciaturas";
      case "ingenierias":
        return "Ingenierías";
      case "maestrias":
        return "Maestrías";
      case "doctorados":
        return "Doctorados";
      default:
        return "Oferta Académica";
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section
        className="relative h-[50vh] flex items-center bg-cover bg-[center_20%]"
        style={{ backgroundImage: "url('/images/oferta_academica.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-6xl px-8 pt-20 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Oferta Académica
          </h1>
          <p className="text-gray-200 max-w-2xl text-lg">
            Descubre las carreras y programas educativos que la UTH ofrece.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-10">
        {/* ================= SIDEBAR ================= */}
        <aside className="lg:w-1/4">
          <div className="sticky top-24 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-[#E5D6A0] overflow-hidden">
            {/* ENCABEZADO SIDEBAR */}
            <div className="bg-gradient-to-r from-[#8C6F23] to-[#C5A853] px-5 py-4">
              <h2 className="text-white font-semibold uppercase tracking-wider text-sm">
                Secciones
              </h2>
            </div>

            <ul className="p-2 space-y-1">
              {menu.map((section, i) => {
                const isMainActive =
                  categoria === section.id ||
                  (section.submenu &&
                    section.submenu.some((sub) => sub.id === categoria));

                return (
                  <div key={i}>
                    {/* MENÚ PRINCIPAL */}
                    <li
                      onClick={() => {
                        if (section.defaultCategory) {
                          setCategoria(section.defaultCategory);
                        } else {
                          setCategoria(section.id);
                        }
                      }}
                      className={`group px-4 py-3 text-sm rounded-xl cursor-pointer transition-all duration-300 flex justify-between items-center ${
                        isMainActive
                          ? "bg-[#C5A853] text-white shadow-md font-medium"
                          : "text-gray-700 hover:bg-[#FAF6E9] hover:text-[#7A5F1C]"
                      }`}
                    >
                      <span>{section.title}</span>

                      <span
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          isMainActive
                            ? "bg-white scale-100"
                            : "bg-[#C5A853] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                        }`}
                      ></span>
                    </li>

                    {/* SUBMENÚ */}
                    {section.submenu && (
                      <ul className="ml-4 mt-2 mb-3 space-y-1 border-l-2 border-[#E5D6A0] pl-3">
                        {section.submenu.map((subitem, subIndex) => {
                          const isSubActive = categoria === subitem.id;

                          return (
                            <li
                              key={subIndex}
                              onClick={() => setCategoria(subitem.id)}
                              className={`px-3 py-2 text-sm rounded-lg cursor-pointer transition-all duration-200 ${
                                isSubActive
                                  ? "bg-[#FAF6E9] text-[#7A5F1C] font-semibold"
                                  : "text-gray-600 hover:bg-[#FAF6E9] hover:text-[#7A5F1C]"
                              }`}
                            >
                              {subitem.title}
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

        {/* ================= CARRERAS ================= */}
        <div className="lg:w-3/4 space-y-10">
          <div className="bg-white rounded-3xl shadow-md p-8 border border-gray-100">
            {/* TÍTULO PRINCIPAL EN TONO DORADO */}
            <h2 className="text-3xl font-bold mb-10 text-center text-[#B5963E] uppercase tracking-wide">
              {getTitulo()}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
              {getCarreras().map((carrera, index) => (
                <Link
                  key={index}
                  href={carrera.link}
                  className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100 hover:border-[#E5D6A0]"
                >
                  <div className="relative w-full h-[380px] bg-gray-50/50 overflow-hidden p-4">
                    <Image
                      src={carrera.img}
                      alt={carrera.nombre}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}