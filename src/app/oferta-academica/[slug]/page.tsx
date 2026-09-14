import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Download, Award, GraduationCap, CheckCircle2 } from "lucide-react";
import { carrerasData } from "@/data/carreras";

export default async function CarreraDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugLimpio = decodeURIComponent(slug)
    .toLowerCase()
    .trim()
    .replace(/-/g, "_");

  const carrera = carrerasData[slugLimpio];

  if (!carrera) {
    return (
      <main className="min-h-screen bg-gray-50 pt-20 pb-16 px-6 md:px-12 flex items-center justify-center">
        <div className="text-center space-y-4 max-w-lg">
          <h1 className="text-3xl font-bold text-gray-800 capitalize">
            {slugLimpio.replace(/_/g, " ")}
          </h1>
          <p className="text-gray-500">
            La información detallada para este programa se actualizará próximamente.
          </p>
          <Link
            href="/oferta-academica"
            className="inline-flex items-center gap-2 text-sm text-[#C5A853] hover:text-[#7A5F1C] font-semibold transition-colors mt-4"
          >
            <ArrowLeft size={18} />
            Volver a Oferta Académica
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-8 pb-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* BOTÓN REGRESAR */}
        <div className="mb-6">
          <Link
            href="/oferta-academica"
            className="inline-flex items-center gap-2 text-sm text-[#C5A853] hover:text-[#7A5F1C] font-semibold transition-colors"
          >
            <ArrowLeft size={18} />
            Volver a Oferta Académica
          </Link>
        </div>

        {/* PORTADA */}
        <div className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden mb-10 shadow-lg bg-gray-900">
          <Image
            src={carrera.imagenPortada}
            alt={carrera.nombre}
            fill
            priority
            quality={100}
            sizes="(max-width: 1200px) 100vw, 1024px"
            className="object-cover object-[center_35%] transform transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div className="space-y-10">
          {/* ENCABEZADO */}
          <div>
            <span className="text-[#B5963E] font-semibold text-lg uppercase tracking-wider">
              {carrera.subtitulo}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-1">
              {carrera.nombre}
            </h1>
          </div>

          {/* DESCRIPCIÓN DEL PROGRAMA (SI EXISTE) */}
          {carrera.descripcion && (
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-3">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <GraduationCap className="text-[#C5A853]" />
                Descripción del Programa
              </h2>
              <p className="text-gray-700 leading-relaxed font-medium text-base">
                {carrera.descripcion}
              </p>
            </div>
          )}

          {/* OBJETIVOS */}
          {carrera.objetivos && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 border-gray-200">
                Objetivos del Programa
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {carrera.objetivos.general && (
                  <div className="bg-[#FAF6E9]/80 p-6 rounded-2xl border border-[#E5D6A0] shadow-sm">
                    <h3 className="font-bold text-[#7A5F1C] text-lg mb-2">
                      Objetivo General
                    </h3>
                    <p className="text-gray-700 leading-relaxed font-medium text-sm md:text-base">
                      {carrera.objetivos.general}
                    </p>
                  </div>
                )}
                {carrera.objetivos.especifico && (
                  <div className="bg-[#FAF6E9]/80 p-6 rounded-2xl border border-[#E5D6A0] shadow-sm">
                    <h3 className="font-bold text-[#7A5F1C] text-lg mb-2">
                      Objetivo Específico
                    </h3>
                    <p className="text-gray-700 leading-relaxed font-medium text-sm md:text-base">
                      {carrera.objetivos.especifico}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* PERFIL PROFESIONAL & CAMPOS DE TRABAJO */}
          {(carrera.camposTrabajo || carrera.perfilProfesionalTexto) && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 border-gray-200">
                Perfil Profesional
              </h2>

              {carrera.perfilProfesionalTexto && (
                <p className="text-gray-700 leading-relaxed font-medium bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                  {carrera.perfilProfesionalTexto}
                </p>
              )}

              {carrera.camposTrabajo && carrera.camposTrabajo.length > 0 && (
                <div className="bg-[#FAF6E9]/80 p-6 rounded-2xl border border-[#E5D6A0] shadow-sm">
                  <h3 className="font-bold text-[#7A5F1C] text-lg mb-3">
                    Campo Ocupacional / Áreas de Desempeño
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                    {carrera.camposTrabajo.map((campo, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#C5A853] flex-shrink-0" />
                        <span className="font-medium text-sm md:text-base">{campo}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* CONOCIMIENTOS (DOCTORADO/POSGRADO) */}
          {carrera.conocimientos && carrera.conocimientos.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-bold text-gray-800 text-xl">Conocimientos Clave</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                {carrera.conocimientos.map((conocimiento, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <CheckCircle2 className="text-[#C5A853] flex-shrink-0" size={18} />
                    <span className="text-sm md:text-base font-medium">{conocimiento}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* BENEFICIOS DESTACADOS */}
          {carrera.beneficios && carrera.beneficios.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-bold text-gray-800 text-xl flex items-center gap-2">
                <Award className="text-[#7A5F1C]" />
                Beneficios del Programa
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {carrera.beneficios.map((ben, idx) => (
                  <li key={idx} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-gray-700 text-sm leading-relaxed flex gap-2">
                    <span className="text-[#C5A853] font-bold">•</span>
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* HABILIDADES */}
          {carrera.habilidades && carrera.habilidades.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-bold text-gray-800 text-xl">Habilidades</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                {carrera.habilidades.map((hab, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C5A853] flex-shrink-0" />
                    <span className="text-sm md:text-base">{hab}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* COMPETENCIAS */}
          {carrera.competencias && carrera.competencias.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-bold text-gray-800 text-xl">Competencias</h3>
              <ul className="space-y-3 text-gray-700">
                {carrera.competencias.map((comp, idx) => (
                  <li key={idx} className="flex gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm leading-relaxed text-sm md:text-base">
                    <span className="text-[#C5A853] font-bold">•</span>
                    <span>{comp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* PERFIL DOCENTE */}
          {carrera.perfilDocente && (
            <div className="bg-[#FAF6E9]/80 p-6 rounded-2xl border border-[#E5D6A0] shadow-sm space-y-2">
              <h3 className="font-bold text-[#7A5F1C] text-lg">Perfil del Cuerpos Docente</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {carrera.perfilDocente}
              </p>
            </div>
          )}

          {/* PLAN DE ESTUDIOS */}
            {carrera.planEstudios && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 border-[#7A5F1C]/30">
                  Plan de Estudios
                </h2>
                <div className="bg-white p-4 md:p-6 rounded-2xl border border-[#7A5F1C]/20 shadow-sm">
                  {carrera.planEstudios.tipo === "pdf" ? (
                    <iframe
                      src={carrera.planEstudios.archivo}
                      title={`Plan de Estudios ${carrera.nombre}`}
                      className="w-full h-[600px] rounded-xl border border-gray-200"
                    />
                  ) : (
                    <div className="relative w-full h-[600px]">
                      <Image
                        src={carrera.planEstudios.archivo}
                        alt={`Plan de Estudios ${carrera.nombre}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1200px) 100vw, 1024px"
                      />
                    </div>
                  )}
                  <div className="mt-4 text-right">
                    <a
                      href={carrera.planEstudios.archivo}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#7A5F1C] hover:text-[#5C4610] font-semibold transition-colors"
                    >
                      <Download size={16} />
                      Descargar Plan de Estudios
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
    </main>
  );
}