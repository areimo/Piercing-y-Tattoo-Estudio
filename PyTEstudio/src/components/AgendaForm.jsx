import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function AgendaForm() {
  // Configuración de Formspree (reemplaza con tu ID correspondiente)
  const [state, handleSubmit] = useForm("maqzjyrq");

  // Si el formulario se envía con éxito, muestra este mensaje limpio
  if (state.succeeded) {
    return (
      <div className="success-container">
        <p className="success-msg">¡Solicitud de turno enviada con éxito!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>

      <h2>Ficha Digital de Solicitud de Turno</h2>

      {/* DATOS PERSONALES */}
      <fieldset>
        <legend>Datos Personales</legend>

        <label>
          Nombre o apodo
          <input
            type="text"
            name="nombre"
            placeholder="Ingrese su nombre o apodo"
            required
          />
        </label>

        <label>
          Documento de Identidad (CI)
          <input
            type="text"
            name="ci"
            placeholder="Ingrese su CI"
            required
          />
        </label>

        <label>
          Edad
          <input
            type="number"
            name="edad"
            required
          />
        </label>

        <label>
          Teléfono de contacto
          <input
            type="tel"
            name="telefono"
            placeholder="09XXXXXXXX"
            required
          />
        </label>
      </fieldset>

      {/* SELECCIÓN DE ESTUDIO */}
      <fieldset>
        <legend>Selección de Estudio</legend>

        <label className="radio-label">
          <input
            type="radio"
            name="estudio"
            value="Estudio La Paz, Canelones"
            required
          />
          Estudio La Paz, Canelones
        </label>

        <label className="radio-label">
          <input
            type="radio"
            name="estudio"
            value="Estudio Montevideo Oeste"
          />
          Estudio Montevideo Oeste
        </label>
      </fieldset>

      {/* INFORMACIÓN DEL SERVICIO */}
      <fieldset>
        <legend>Información del Servicio</legend>

        <label className="radio-label">
          <input
            type="radio"
            name="servicio"
            value="Tatuaje"
            required
          />
          Tatuaje
        </label>

        <label className="radio-label">
          <input
            type="radio"
            name="servicio"
            value="Piercing"
          />
          Piercing
        </label>

        <label className="radio-label">
          <input
            type="radio"
            name="servicio"
            value="Cambio de joyería"
          />
          Cambio de joyería
        </label>

        <label>
          Otro servicio
          <input
            type="text"
            name="otroServicio"
            placeholder="Especifique el servicio"
          />
        </label>
      </fieldset>

      {/* DÍA Y HORA */}
      <fieldset>
        <legend>Día y Hora Acordada</legend>
        <input
          type="datetime-local"
          name="fechaHora"
          required
        />
      </fieldset>

      {/* FORMA DE PAGO */}
      <fieldset>
        <legend>Forma de Pago</legend>

        <label className="radio-label">
          <input
            type="radio"
            name="pago"
            value="Efectivo"
            required
          />
          Efectivo
        </label>

        <label className="radio-label">
          <input
            type="radio"
            name="pago"
            value="Transferencia PREX"
          />
          Transferencia PREX
        </label>
      </fieldset>

      {/* DECLARACIÓN */}
      <fieldset>
        <legend>Declaración</legend>

        <label className="checkbox-label">
          <input
            type="checkbox"
            required
          />
          Declaro que los datos proporcionados son correctos.
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            required
          />
          He leído y acepto las condiciones de la reserva y del servicio solicitado.
        </label>
      </fieldset>

      {/* CONFIRMACIÓN */}
      <fieldset>
        <legend>Confirmación</legend>

        <label>
          Nombre completo (tal como figura en el documento)
          <input
            type="text"
            name="nombreCompleto"
            placeholder="Nombre completo"
            required
          />
        </label>
      </fieldset>

      {/* Gestión de errores de envío */}
      <ValidationError prefix="Error" errors={state.errors} />

      <button type="submit" className="submit-btn" disabled={state.submitting}>
        {state.submitting ? "Enviando..." : "Enviar Solicitud"}
      </button>

    </form>
  );
}

export default AgendaForm;