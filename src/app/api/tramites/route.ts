import { createTramite, getTramiteByFolio } from "@/lib/tramites/store";
import type { TramiteNumeroPasantia, TramiteTipo } from "@/types/tramite";
import { notifyNuevoTramite } from "@/lib/tramites/mailer";

const TIPOS_VALIDOS: TramiteTipo[] = [
  "constancia_estudios",
  "constancia_no_adeudo",
  "reporte_problema",
  "solicitud_pasantia_idi",
  "otro",
];

const NUMEROS_PASANTIA_VALIDOS: TramiteNumeroPasantia[] = [
  "primera",
  "segunda",
  "tercera",
];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      nombre,
      matricula,
      carrera,
      semestre,
      turno,
      correo,
      tipo,
      numero_pasantia,
      descripcion,
    } = body;

    const esSolicitudPasantia = tipo === "solicitud_pasantia_idi";

    if (
      !nombre ||
      !matricula ||
      !carrera ||
      !correo ||
      !tipo ||
      !descripcion ||
      (!esSolicitudPasantia && (!semestre || !turno))
    ) {
      return Response.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    if (!TIPOS_VALIDOS.includes(tipo)) {
      return Response.json({ error: "Tipo de trámite no válido." }, { status: 400 });
    }

    if (
      esSolicitudPasantia &&
      (!numero_pasantia || !NUMEROS_PASANTIA_VALIDOS.includes(numero_pasantia))
    ) {
      return Response.json({ error: "Número de pasantía no válido." }, { status: 400 });
    }

    const tramite = await createTramite({
      nombre,
      matricula,
      carrera,
      semestre: esSolicitudPasantia ? 1 : Number(semestre),
      turno: esSolicitudPasantia ? "matutino" : turno,
      correo,
      tipo,
      numeroPasantia: esSolicitudPasantia ? numero_pasantia : null,
      descripcion,
    });

    void notifyNuevoTramite(tramite);

    return Response.json({ tramite }, { status: 201 });
  } catch (error) {
    console.error("❌ Error creando trámite:", error);
    return Response.json({ error: "Error interno al crear el trámite." }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const folio = searchParams.get("folio");

    if (!folio) {
      return Response.json({ error: "Debes proporcionar un folio." }, { status: 400 });
    }

    const tramite = await getTramiteByFolio(folio);

    if (!tramite) {
      return Response.json({ error: "No se encontró ningún trámite con ese folio." }, { status: 404 });
    }

    return Response.json({ tramite });
  } catch (error) {
    console.error("❌ Error consultando trámite:", error);
    return Response.json({ error: "Error interno al consultar el trámite." }, { status: 500 });
  }
}
