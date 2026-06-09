import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function CaravanaForm() {
  // Configuración de Formspree (reemplaza con tu ID correspondiente)
  const [state, handleSubmit] = useForm("xeewkqyl");

  // Si el formulario se envía con éxito, muestra este mensaje limpio
  if (state.succeeded) {
    return (
      <div className="success-container">
        <p className="success-msg">¡Formulario de Caravana enviado con éxito!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulario de Caravanas a Bebé</h2>

      {/* DATOS DE LA BEBÉ */}
      <fieldset>
        <legend>Datos de la Bebé</legend>

        <label>
          Fecha del registro
          <input type="date" name="fechaRegistro" required />
        </label>

        <label>
          Nombre completo de la bebé
          <input type="text" name="nombreBebe" required />
        </label>

        <label>
          Documento de Identidad
          <input type="text" name="documentoBebe" required />
        </label>

        <label>
          Fecha de Nacimiento
          <input type="date" name="fechaNacimientoBebe" required />
        </label>

        <label>
          Edad
          <input type="text" name="edadBebe" placeholder="Ej: 3 meses, 1 año" required />
        </label>

        <label>
          Domicilio
          <input type="text" name="domicilioBebe" required />
        </label>
      </fieldset>

      {/* ADULTO RESPONSABLE */}
      <fieldset>
        <legend>Datos del Adulto Responsable</legend>

        <label>
          Nombre completo del adulto
          <input type="text" name="nombreAdulto" required />
        </label>

        <label>
          Documento de Identidad
          <input type="text" name="documentoAdulto" required />
        </label>

        <label>
          Teléfono o Núm. Celular
          <input type="tel" name="telefonoAdulto" required />
        </label>

        <label>
          Relación / Vínculo con la Bebé
          <input type="text" name="relacionBebe" placeholder="Ej: Madre, Padre, Tutor legal" required />
        </label>
      </fieldset>

      {/* SOBRE LAS CARAVANAS */}
      <fieldset>
        <legend>Sobre las Caravanas</legend>

        <label>¿Fueron adquiridas en el Estudio?</label>
        <label className="radio-label">
          <input type="radio" name="caravanasEstudio" value="Sí" /> Sí
        </label>
        <label className="radio-label">
          <input type="radio" name="caravanasEstudio" value="No" /> No
        </label>

        <label>
          Material de las mismas
          <input type="text" name="materialCaravanas" placeholder="Ej: Oro, plata, acero" />
        </label>
      </fieldset>

      {/* CONSENTIMIENTO INFORMADO */}
      <fieldset>
        <legend>Consentimiento Informado</legend>

        <label className="checkbox-label">
          <input type="checkbox" required />
          Autorizo de forma libre y voluntaria la perforación de los lóbulos bajo mi total responsabilidad.
        </label>
      </fieldset>

      {/* FIRMA DIGITAL */}
      <fieldset>
        <legend>Firma</legend>
        <label>
          Firma del adulto responsable (Aclaración)
          <input type="text" name="firmaAdulto" placeholder="Nombre completo del adulto firmante" required />
        </label>
      </fieldset>

      {/* Gestión de errores de envío */}
      <ValidationError prefix="Error" errors={state.errors} />

      <button type="submit" className="submit-btn" disabled={state.submitting}>
        {state.submitting ? "Enviando..." : "Enviar Formulario"}
      </button>
    </form>
  );
}

export default CaravanaForm;