import Link from "next/link";
import { MapPin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-gray-300 z-20">
      <div className="w-full px-6 md:px-16 lg:px-24 py-10 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-700">
        {/* LOGO + DESCRIPCIÓN */}
        <div className="flex items-center justify-center gap-3 py-6 sm:py-0 px-0 sm:px-8">
          <img
            src="/images/ai_footer.webp"
            alt="UTH"
            className="h-28 w-auto flex-shrink-0"
          />
          <p className="text-sm text-gray-400 max-w-[180px] text-center sm:text-left">
            Asistente virtual institucional de la Universidad Tecnológica de Honduras.
          </p>
        </div>

        {/* ENLACES RÁPIDOS */}
        <div className="flex flex-col items-start justify-center gap-2 py-6 sm:py-0 px-0 sm:px-8">
          <h3 className="text-white font-semibold mb-1">Enlaces rápidos</h3>
          <Link href="/" className="text-sm text-gray-400 hover:text-[#C9A24B] transition-colors">
            Inicio
          </Link>
          <Link href="/acerca" className="text-sm text-gray-400 hover:text-[#C9A24B] transition-colors">
            Acerca de UTH
          </Link>
          <Link href="/estudiantes" className="text-sm text-gray-400 hover:text-[#C9A24B] transition-colors">
            Estudiantes
          </Link>
          <Link href="/oferta-academica" className="text-sm text-gray-400 hover:text-[#C9A24B] transition-colors">
            Oferta Académica
          </Link>
        </div>

        {/* CONTACTO */}
        <div className="flex flex-col items-start justify-center gap-2 py-6 sm:py-0 px-0 sm:px-8">
          <h3 className="text-white font-semibold mb-1">Contacto</h3>
          <span className="flex items-center gap-2 text-sm text-gray-400 text-center sm:text-left">
            <MapPin size={16} className="mt-0.5 flex-shrink-0" />
            {/* TODO: dirección real de UTH */}
            Calee del Puente Río Blanco, Col Los Álamos Carretera Armenta, 3 cuadras al oeste, 21101 San Pedro Sula, Cortés, Honduras
          </span>
        </div>
      </div>

      {/* BARRA INFERIOR */}
      <div className="border-t border-gray-800 px-6 md:px-12 py-4 flex flex-col sm:flex-row justify-between items-center gap-1 text-sm text-gray-400">
        <span>© {year} UTH. Todos los derechos reservados.</span>
        <span>
          Desarrollado por Romaro Ingeniería · En colaboración con TESCHA
        </span>
      </div>
    </footer>
  );
}