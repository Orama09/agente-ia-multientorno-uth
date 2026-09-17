"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Copy, Check } from "lucide-react";
import {
  TRAMITE_ESTADO_LABELS,
  TRAMITE_NUMEROS_PASANTIA,
  type Tramite,
  type TramiteNumeroPasantia,
} from "@/types/tramite";

type TramitesModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function TramitesModal({ open, onClose }: TramitesModalProps) {
  const [tab, setTab] = useState<"nueva" | "consultar">("nueva");

  const [nombre, setNombre] = useState("");
  const [matricula, setMatricula] = useState("");
  const [carrera, setCarrera] = useState("");
  const [correo, setCorreo] = useState("");
  const [numeroPasantia, setNumeroPasantia] =
    useState<TramiteNumeroPasantia>("primera");
  const [descripcion, setDescripcion] = useState("");
  const [creando, setCreando] = useState(false);
  const [creado, setCreado] = useState<Tramite | null>(null);
  const [errorCrear, setErrorCrear] = useState<string | null>(null);
  const [copiado, setCopiado] = useState(false); // 👈 nuevo (punto 4)

  const [folioConsulta, setFolioConsulta] = useState("");
  const [consultando, setConsultando] = useState(false);
  const [resultado, setResultado] = useState<Tramite | null>(null);
  const [errorConsulta, setErrorConsulta] = useState<string | null>(null);

  // 👇 NUEVO: el Portal solo puede montarse en el cliente (document no
  // existe durante el render en servidor de Next.js).
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const resetFormularioNueva = () => {
    setNombre("");
    setMatricula("");
    setCarrera("");
    setCorreo("");
    setNumeroPasantia("primera");
    setDescripcion("");
    setCreado(null);
    setErrorCrear(null);
    setCopiado(false);
  };

  const resetConsulta = () => {
    setFolioConsulta("");
    setResultado(null);
    setErrorConsulta(null);
  };

  useEffect(() => {
    if (open) {
      resetFormularioNueva();
      resetConsulta();
      setTab("nueva");
    }
  }, [open]);

  // 👇 CAMBIO: ahora también depende de "mounted"
  if (!open || !mounted) return null;

  const handleCrear = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setErrorCrear(null);
    if (!nombre || !matricula || !carrera || !correo || !numeroPasantia || !descripcion) {
      setErrorCrear("Completa todos los campos.");
      return;
    }
    setCreando(true);
    try {
      const res = await fetch("/api/tramites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          matricula,
          carrera,
          correo,
          numero_pasantia: numeroPasantia,
          tipo: "solicitud_pasantia_idi",
          descripcion,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Error al crear el trámite.");
      setCreado(data.tramite);
    } catch (err) {
      setErrorCrear(err instanceof Error ? err.message : "Error desconocido.");
    } finally {
      setCreando(false);
    }
  };

  const handleConsultar = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setErrorConsulta(null);
    setResultado(null);
    if (!folioConsulta) {
      setErrorConsulta("Escribe un folio.");
      return;
    }
    setConsultando(true);
    try {
      const res = await fetch(`/api/tramites?folio=${encodeURIComponent(folioConsulta)}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "No se encontró el trámite.");
      setResultado(data.tramite);
    } catch (err) {
      setErrorConsulta(err instanceof Error ? err.message : "Error desconocido.");
    } finally {
      setConsultando(false);
    }
  };

  const handleCopiarFolio = async () => {
    if (!creado) return;
    try {
      await navigator.clipboard.writeText(creado.folio);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      // ignore
    }
  };

  const resultadoResuelto =
    resultado?.estado === "completado" || resultado?.estado === "rechazado";

  // 👇 NUEVO: todo el JSX del modal ahora vive en una variable...
  const modalContent = (
    <div
      className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>

        <div className="flex gap-2 mb-4">
          <button
            className={`px-3 py-1.5 rounded-lg text-base font-medium ${
              tab === "nueva" ? "bg-[#C5A853] text-white" : "bg-gray-100 text-gray-600"
            }`}
            onClick={() => {
              resetFormularioNueva(); // 👈 punto 1: siempre limpia al volver aquí
              setTab("nueva");
            }}
          >
            Nueva solicitud
          </button>
          <button
            className={`px-3 py-1.5 rounded-lg text-base font-medium ${
              tab === "consultar" ? "bg-[#C5A853] text-white" : "bg-gray-100 text-gray-600"
            }`}
            onClick={() => setTab("consultar")}
          >
            Consultar estatus
          </button>
        </div>

        {tab === "nueva" && (
          <div className="space-y-3">
            {!creado ? (
              <form onSubmit={handleCrear} className="space-y-3">
                {/* 👇 punto 2: Enter dentro de este <form> ya envía automáticamente */}
                <h2 className="text-lg font-semibold text-gray-800">
                  Solicitud de Pasantía en I+D+i
                </h2>

                <label className="block space-y-1">
                  <span className="text-sm font-medium text-gray-700">Nombre completo</span>
                  <input
                    className="w-full border rounded-lg px-3 py-2 text-sm"
                    placeholder="Nombre completo"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </label>

                <label className="block space-y-1">
                  <span className="text-sm font-medium text-gray-700">Número de cuenta</span>
                  <input
                    className="w-full border rounded-lg px-3 py-2 text-sm"
                    placeholder="Número de cuenta"
                    value={matricula}
                    onChange={(e) => setMatricula(e.target.value)}
                  />
                </label>

                <label className="block space-y-1">
                  <span className="text-sm font-medium text-gray-700">Carrera</span>
                  <input
                    className="w-full border rounded-lg px-3 py-2 text-sm"
                    placeholder="Carrera"
                    value={carrera}
                    onChange={(e) => setCarrera(e.target.value)}
                  />
                </label>

                <label className="block space-y-1">
                  <span className="text-sm font-medium text-gray-700">Correo institucional</span>
                  <input
                    className="w-full border rounded-lg px-3 py-2 text-sm"
                    type="email"
                    placeholder="correo@institucion.edu"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                  />
                </label>

                <label className="block space-y-1">
                  <span className="text-sm font-medium text-gray-700">Número de pasantía</span>
                  <select
                    className="w-full border rounded-lg px-3 py-2 text-sm"
                    value={numeroPasantia}
                    onChange={(e) =>
                      setNumeroPasantia(e.target.value as TramiteNumeroPasantia)
                    }
                  >
                    {TRAMITE_NUMEROS_PASANTIA.map((opcion) => (
                      <option key={opcion.value} value={opcion.value}>
                        {opcion.label}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
                  <p className="text-xs font-medium text-gray-500">Departamento solicitado</p>
                  <p className="text-sm font-semibold text-gray-800">I+D+i</p>
                </div>

                <label className="block space-y-1">
                  <span className="text-sm font-medium text-gray-700">
                    Motivo u observaciones de la solicitud
                  </span>
                  <textarea
                    className="w-full border rounded-lg px-3 py-2 text-sm"
                    placeholder="Describe el motivo u observaciones..."
                    rows={3}
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                  />
                </label>
                {errorCrear && <p className="text-red-600 text-sm">{errorCrear}</p>}
                <button
                  type="submit"
                  disabled={creando}
                  className="w-full bg-[#C5A853] text-white rounded-lg py-2 text-base font-medium disabled:opacity-50"
                >
                  {creando ? "Enviando..." : "Enviar solicitud"}
                </button>
              </form>
            ) : (
              <div className="text-base space-y-2">
                <p className="text-[#8C6F23] font-semibold">✅ Solicitud registrada</p>
                <div className="flex items-center gap-2">
                  <p>
                    Tu folio es: <span className="font-mono font-bold">{creado.folio}</span>
                  </p>
                  {/* 👇 punto 4: copiar folio con un clic + aviso flotante */}
                  <button
                    onClick={handleCopiarFolio}
                    className="text-gray-500 hover:text-[#8C6F23] relative"
                    aria-label="Copiar folio"
                    type="button"
                  >
                    {copiado ? <Check size={16} className="text-[#8C6F23]" /> : <Copy size={16} />}
                    {copiado && (
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">
                        ¡Copiado!
                      </span>
                    )}
                  </button>
                </div>
                <p className="text-gray-500 text-sm">Guarda este folio para consultar tu estatus.</p>

                {/* 👇 punto 7 */}
                <p className="text-sm text-emerald-700 bg-emerald-50 rounded-lg px-3 py-2">
                  📬 Ojo a tu correo: ahí te avisaremos en cuanto tengamos novedades de tu solicitud o tramite.
                </p>

                {/* 👇 punto 8: aviso de 2 días hábiles, ya no hay descarga aquí */}
                <p className="text-sm text-amber-700 bg-amber-50 rounded-lg px-3 py-2">
                  ⏳ Tu solicitud será atendida en un plazo máximo de 2 días hábiles. Podrás descargar o imprimir tu comprobante desde <strong>"Consultar estatus"</strong> una vez resuelta.
                </p>
              </div>
            )}
          </div>
        )}

        {tab === "consultar" && (
          <form onSubmit={handleConsultar} className="space-y-3">
            <input
              className="w-full border rounded-lg px-3 py-2 text-sm"
              placeholder="Ej. UTH-A1B2C3"
              value={folioConsulta}
              onChange={(e) => setFolioConsulta(e.target.value)}
            />
            {errorConsulta && <p className="text-red-600 text-sm">{errorConsulta}</p>}
            <button
              type="submit"
              disabled={consultando}
              className="w-full bg-[#C5A853] text-white rounded-lg py-2 text-base font-medium disabled:opacity-50"
            >
              {consultando ? "Buscando..." : "Buscar"}
            </button>
            {resultado && (
              <div className="text-sm border rounded-lg p-3 bg-gray-50 space-y-1">
                <p><span className="font-semibold">Folio:</span> {resultado.folio}</p>
                <p>
                  <span className="font-semibold">Estado:</span>{" "}
                  {TRAMITE_ESTADO_LABELS[resultado.estado]}
                </p>
                {resultadoResuelto ? (
                  <div className="space-y-1">
                    {resultado?.estado === "completado" && (
                      <p className="text-sm text-gray-700">
                        Ya puedes descargar tu comprobante. No olvides imprimir dos copias: una para el departamento y otra para el estudiante.
                      </p>
                    )}
                    <a
                      href={`/api/tramites/${resultado.folio}/comprobante`}
                      className="text-[#8C6F23] underline text-base font-medium hover:text-[#6e561c]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Descargar comprobante PDF
                    </a>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">
                    Tu comprobante estará disponible aquí en cuanto tu solicitud sea Completada o Rechazada.
                  </p>
                )}
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );

  // 👇 NUEVO: en vez de "return modalContent" directo, usamos Portal
  // para inyectarlo en <body>, fuera del árbol de React donde vive
  // este componente (AgentDock, layout, etc.) y de cualquier
  // stacking context que ese árbol pudiera tener (backdrop-blur,
  // transform, etc. crean stacking contexts que "atrapan" el z-index).
  return createPortal(modalContent, document.body);
}
