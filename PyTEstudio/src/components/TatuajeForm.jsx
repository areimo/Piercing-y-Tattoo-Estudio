import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function TatuajeForm() {
  // Configuración de Formspree (reemplaza con tu ID correspondiente)
  const [state, handleSubmit] = useForm("xlgkneqb ");

  // Si el formulario se envía con éxito, muestra este mensaje limpio
  if (state.succeeded) {
    return (
      <div className="success-container">
        <p className="success-msg">¡Formulario de Tatuaje enviado con éxito!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulario de Tatuajes</h2>

      {/* DATOS DEL CLIENTE */}
      <fieldset>
        <legend>Datos del Cliente</legend>

        <label>
          Nombre completo
          <input type="text" name="nombre" required />
        </label>

        <label>
          Documento de Identidad
          <input type="text" name="documento" required />
        </label>

        <label>
          Fecha de Nacimiento
          <input type="date" name="fechaNacimiento" required />
        </label>

        <label>
          Edad
          <input type="number" name="edad" required />
        </label>

        <label>
          Teléfono o Celular
          <input type="tel" name="telefono" required />
        </label>
      </fieldset>

      {/* INFORMACIÓN DEL TATUAJE */}
      <fieldset>
        <legend>Información del Tatuaje</legend>

        <label>
          Zona del cuerpo a tatuar
          <input type="text" name="zonaTatuaje" />
        </label>

        <label>
          Tamaño aproximado
          <input type="text" name="tamanoTatuaje" />
        </label>

        <label>
          Describe el diseño
          <textarea
            rows="4"
            name="descripcion"
            placeholder="Ej: Rosa con reloj y fecha"
          />
        </label>

        <label>
          Fecha de realización
          <input type="date" name="fechaRealizacion" />
        </label>
      </fieldset>

      {/* CARACTERÍSTICAS */}
      <fieldset>
        <legend>Características del Diseño</legend>

        <label className="checkbox-label">
          <input type="checkbox" name="caract_color" value="Sí" />
          Color
        </label>

        <label className="checkbox-label">
          <input type="checkbox" name="caract_sombras" value="Sí" />
          Sombras
        </label>

        <label className="checkbox-label">
          <input type="checkbox" name="caract_lineas" value="Sí" />
          Líneas
        </label>

        <label className="checkbox-label">
          <input type="checkbox" name="caract_cover" value="Sí" />
          Es un Cover
        </label>
      </fieldset>

      {/* HISTORIAL MÉDICO */}
      <fieldset>
        <legend>Historial Médico</legend>

        <label className="checkbox-label">
          <input type="checkbox" name="med_diabetes" value="Sí" />
          Tiene diabetes
        </label>

        <label className="checkbox-label">
          <input type="checkbox" name="med_cicatrizacion" value="Sí" />
          Tiene dificultad en cicatrización
        </label>

        <label>
          Alergias a pigmentos, metales u otras
          <textarea rows="3" name="med_alergias" />
        </label>
      </fieldset>

      {/* CONSENTIMIENTO */}
      <fieldset>
        <legend>Consentimiento Informado</legend>

        <label className="checkbox-label">
          <input type="checkbox" required />
          Comprendo los riesgos asociados al procedimiento y confirmo que los datos son correctos.
        </label>

        <label>
          ¿Autoriza el uso de fotografías con fines publicitarios?
        </label>
        <label className="radio-label">
          <input type="radio" name="fotosPublicidad" value="Sí" /> Sí
        </label>
        <label className="radio-label">
          <input type="radio" name="fotosPublicidad" value="No" /> No
        </label>
      </fieldset>

      {/* FIRMA */}
      <fieldset>
        <legend>Firma Digital</legend>
        <label>
          Nombre completo del cliente (Firma)
          <input type="text" name="firmaCliente" placeholder="Tal como figura en el documento" required />
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

export default TatuajeForm;