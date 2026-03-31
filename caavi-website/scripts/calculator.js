/**
 * CALCULADORA DE COTIZACIÓN - THE OFFICE GENERATION BY CAAVI®
 *
 * Sistema completo de cálculo de presupuestos frontend
 * Configurable, modular y listo para integración con API
 */

// ============================================================================
// CONFIGURACIÓN EDITABLE - MODIFICAR AQUÍ SEGÚN NECESIDAD
// ============================================================================

const CALC_CONFIG = {
  // Servicios disponibles con precio base
  servicios: {
    papeleria: {
      base: 800,
      label: "Abastecimiento de Papelería Corporativa"
    },
    limpieza: {
      base: 600,
      label: "Suministros de Limpieza e Higiene"
    },
    papel_bond: {
      base: 1200,
      label: "Papel Bond y Papeles de Alto Consumo"
    },
    tecnologia: {
      base: 3500,
      label: "Tecnología para Oficina"
    },
    impresion: {
      base: 900,
      label: "Consumibles de Impresión"
    },
    equipamiento_nuevo: {
      base: 15000,
      label: "Equipamiento para Oficina Nueva"
    },
    abastecimiento: {
      base: 2000,
      label: "Abastecimiento Recurrente"
    },
    urgentes: {
      base: 1500,
      label: "Soluciones Urgentes"
    },
    mobiliario: {
      base: 5000,
      label: "Mobiliario y Adecuación de Espacios"
    },
    gestion_compras: {
      base: 3000,
      label: "Gestión de Compras Consolidadas"
    },
    especiales: {
      base: 4000,
      label: "Requerimientos Especiales"
    },
    logistica: {
      base: 800,
      label: "Logística y Entrega a Sitio"
    }
  },

  // Multiplicadores por volumen (descuentos escalonados)
  volumenMultiplier: {
    "1-5": 1.0,      // sin descuento
    "6-20": 0.92,    // 8% descuento
    "21-50": 0.85,   // 15% descuento
    "51-100": 0.78,  // 22% descuento
    "100+": 0.70     // 30% descuento
  },

  // Opciones adicionales de pago
  opciones: {
    instalacion: {
      costo: 1500,
      label: "Instalación incluida"
    },
    garantia: {
      costo: 800,
      label: "Garantía extendida 2 años"
    },
    capacitacion: {
      costo: 600,
      label: "Capacitación de uso"
    },
    diseno3d: {
      costo: 2500,
      label: "Render 3D del espacio"
    }
  },

  // Opciones de logística y su multiplicador
  logistica: {
    local: {
      mult: 1.0,
      label: "Entrega CDMX/Área Metro"
    },
    nacional: {
      mult: 1.12,
      label: "Entrega Nacional"
    },
    express: {
      mult: 1.25,
      label: "Entrega Express 48h"
    }
  },

  // Opciones de urgencia y su multiplicador
  urgencia: {
    normal: {
      mult: 1.0,
      label: "Normal (5-10 días hábiles)"
    },
    rapido: {
      mult: 1.15,
      label: "Rápido (3-5 días hábiles)"
    },
    urgente: {
      mult: 1.30,
      label: "Urgente (1-2 días hábiles)"
    }
  },

  // Impuesto (16% IVA en México)
  ivaRate: 0.16
};

// ============================================================================
// ESTADO GLOBAL DE LA CALCULADORA
// ============================================================================

let state = {
  servicio: null,
  cantidad: 1,
  volumenRange: "1-5",
  opciones: [],
  logistica: "local",
  urgencia: "normal",
  subtotal: 0,
  iva: 0,
  total: 0
};

// ============================================================================
// FUNCIONES DE INICIALIZACIÓN
// ============================================================================

/**
 * Inicializa la calculadora al cargar la página
 */
function initCalculator() {
  console.log("Calculadora inicializada");
  // El estado ya está configurado por defecto
  // Se ejecuta automáticamente al cargar el HTML
}

// ============================================================================
// FUNCIONES DE NAVEGACIÓN (PASOS DEL WIZARD)
// ============================================================================

/**
 * Avanza al siguiente paso del wizard
 * @param {number} stepNumber - Número del paso (1-4 o 'resultado')
 */
function nextStep(stepNumber) {
  // Validar que se ha completado el paso actual
  if (stepNumber === 2 && !state.servicio) {
    alert("Por favor, selecciona un tipo de servicio");
    return;
  }
  if (stepNumber === 3 && !state.servicio) {
    alert("Por favor, completa el paso anterior");
    return;
  }
  if (stepNumber === 4 && !state.servicio) {
    alert("Por favor, completa los pasos anteriores");
    return;
  }

  // Ocultar todos los pasos
  const pasos = document.querySelectorAll(".calc-step");
  pasos.forEach(paso => paso.classList.remove("active"));

  // Mostrar el paso solicitado
  const siguientePaso = document.getElementById(`step-${stepNumber}`);
  if (siguientePaso) {
    siguientePaso.classList.add("active");
  }

  // Actualizar barra de progreso
  updateProgressBar(stepNumber);

  // Scroll hacia el top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Retrocede al paso anterior
 * @param {number} stepNumber - Número del paso anterior (1-4)
 */
function prevStep(stepNumber) {
  // Ocultar todos los pasos
  const pasos = document.querySelectorAll(".calc-step");
  pasos.forEach(paso => paso.classList.remove("active"));

  // Mostrar el paso anterior
  const pasoPrevio = document.getElementById(`step-${stepNumber}`);
  if (pasoPrevio) {
    pasoPrevio.classList.add("active");
  }

  // Actualizar barra de progreso
  updateProgressBar(stepNumber);

  // Scroll hacia el top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Actualiza la barra de progreso visual
 * @param {number} currentStep - Paso actual del wizard
 */
function updateProgressBar(currentStep) {
  const progressItems = document.querySelectorAll(".calc-progress-item");

  progressItems.forEach((item, index) => {
    const stepNum = index + 1;
    const indicator = item.querySelector(".calc-step-indicator");

    // Remover clases
    item.classList.remove("active");
    indicator.classList.remove("active", "completed");

    // Agregar clases según corresponda
    if (stepNum === currentStep) {
      item.classList.add("active");
      indicator.classList.add("active");
    } else if (stepNum < currentStep) {
      indicator.classList.add("completed");
    }
  });
}

/**
 * Muestra la sección de resultado final
 */
function mostrarResultado() {
  // Validar que se han completado todos los pasos
  if (!state.servicio) {
    alert("Por favor, completa todos los pasos");
    return;
  }

  // Calcular totales finales
  calcularTotal();

  // Ocultar todos los pasos
  const pasos = document.querySelectorAll(".calc-step");
  pasos.forEach(paso => paso.classList.remove("active"));

  // Mostrar resultado
  const resultado = document.getElementById("step-resultado");
  if (resultado) {
    resultado.classList.add("show");
  }

  // Llenar desglose
  llenarDesglose();

  // Scroll hacia el resultado
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================================================
// FUNCIONES DE SELECCIÓN DE PASOS
// ============================================================================

/**
 * Selecciona un servicio y actualiza la UI
 * @param {string} serviceId - ID del servicio (clave de CALC_CONFIG.servicios)
 */
function selectService(serviceId) {
  // Validar que el servicio existe
  if (!CALC_CONFIG.servicios[serviceId]) {
    console.error(`Servicio no válido: ${serviceId}`);
    return;
  }

  // Actualizar estado
  state.servicio = serviceId;

  // Actualizar UI: remover selección anterior
  const options = document.querySelectorAll(".calc-option");
  options.forEach(option => {
    option.classList.remove("selected");
  });

  // Agregar selección al nuevo servicio
  const selectedOption = document.querySelector(`[data-service="${serviceId}"]`);
  if (selectedOption) {
    selectedOption.classList.add("selected");
  }

  // Actualizar resumen
  updateSummary();
  calcularTotal();
}

/**
 * Actualiza el volumen y el rango automáticamente
 * @param {number} value - Valor del slider (1-200)
 */
function updateVolumen(value) {
  state.cantidad = parseInt(value);

  // Actualizar display del valor
  document.getElementById("volumenValor").textContent = state.cantidad;

  // Auto-seleccionar rango basado en cantidad
  let range = "1-5";
  if (state.cantidad >= 6 && state.cantidad <= 20) {
    range = "6-20";
  } else if (state.cantidad >= 21 && state.cantidad <= 50) {
    range = "21-50";
  } else if (state.cantidad >= 51 && state.cantidad <= 100) {
    range = "51-100";
  } else if (state.cantidad > 100) {
    range = "100+";
  }

  state.volumenRange = range;

  // Actualizar UI de badges
  const badges = document.querySelectorAll(".calc-volumen-badge");
  badges.forEach(badge => {
    badge.classList.remove("selected");
    if (badge.getAttribute("data-range") === range) {
      badge.classList.add("selected");
    }
  });

  // Actualizar resumen y cálculo
  updateSummary();
  calcularTotal();
}

/**
 * Selecciona un rango de volumen manualmente
 * @param {string} range - Rango de volumen (ej: "1-5", "6-20")
 */
function selectVolumenRange(range) {
  if (!CALC_CONFIG.volumenMultiplier[range]) {
    console.error(`Rango no válido: ${range}`);
    return;
  }

  state.volumenRange = range;

  // Actualizar UI
  const badges = document.querySelectorAll(".calc-volumen-badge");
  badges.forEach(badge => {
    badge.classList.remove("selected");
    if (badge.getAttribute("data-range") === range) {
      badge.classList.add("selected");
    }
  });

  // Actualizar resumen y cálculo
  updateSummary();
  calcularTotal();
}

/**
 * Alterna una opción adicional (checkbox)
 * @param {string} optionId - ID de la opción
 */
function toggleOpcion(optionId) {
  if (!CALC_CONFIG.opciones[optionId]) {
    console.error(`Opción no válida: ${optionId}`);
    return;
  }

  const index = state.opciones.indexOf(optionId);

  if (index > -1) {
    // La opción ya está seleccionada, removerla
    state.opciones.splice(index, 1);
  } else {
    // La opción no está seleccionada, agregarla
    state.opciones.push(optionId);
  }

  // Actualizar resumen y cálculo
  updateSummary();
  calcularTotal();
}

/**
 * Selecciona tipo de logística
 * @param {string} logisticaId - ID de la logística (local, nacional, express)
 */
function selectLogistica(logisticaId) {
  if (!CALC_CONFIG.logistica[logisticaId]) {
    console.error(`Logística no válida: ${logisticaId}`);
    return;
  }

  state.logistica = logisticaId;

  // Actualizar UI
  const options = document.querySelectorAll('.calc-radio-option input[name="logistica"]');
  options.forEach(option => {
    option.parentElement.classList.remove("selected");
    if (option.value === logisticaId) {
      option.parentElement.classList.add("selected");
    }
  });

  // Actualizar resumen y cálculo
  updateSummary();
  calcularTotal();
}

/**
 * Selecciona urgencia de entrega
 * @param {string} urgenciaId - ID de la urgencia (normal, rapido, urgente)
 */
function selectUrgencia(urgenciaId) {
  if (!CALC_CONFIG.urgencia[urgenciaId]) {
    console.error(`Urgencia no válida: ${urgenciaId}`);
    return;
  }

  state.urgencia = urgenciaId;

  // Actualizar UI
  const options = document.querySelectorAll('.calc-radio-option input[name="urgencia"]');
  options.forEach(option => {
    option.parentElement.classList.remove("selected");
    if (option.value === urgenciaId) {
      option.parentElement.classList.add("selected");
    }
  });

  // Actualizar resumen y cálculo
  updateSummary();
  calcularTotal();
}

// ============================================================================
// FUNCIONES DE CÁLCULO
// ============================================================================

/**
 * Calcula el total basado en la lógica de pricing
 *
 * Fórmula:
 * 1. servicioBase × cantidad × volumenMultiplier = baseConVolumen
 * 2. baseConVolumen + opcionesAdicionales = subtotal
 * 3. subtotal × logisticaMult × urgenciaMult = subtotalConMultiplicadores
 * 4. iva = subtotalConMultiplicadores × 0.16
 * 5. total = subtotalConMultiplicadores + iva
 */
function calcularTotal() {
  // Si no hay servicio seleccionado, no calcular
  if (!state.servicio) {
    state.subtotal = 0;
    state.iva = 0;
    state.total = 0;
    updateSummaryTotal();
    return;
  }

  // Paso 1: Obtener precio base del servicio
  const servicioBase = CALC_CONFIG.servicios[state.servicio].base;

  // Paso 2: Aplicar cantidad y multiplicador de volumen
  const volumenMult = CALC_CONFIG.volumenMultiplier[state.volumenRange];
  const baseConVolumen = servicioBase * state.cantidad * volumenMult;

  // Paso 3: Sumar opciones adicionales
  let opcionesTotal = 0;
  state.opciones.forEach(optionId => {
    opcionesTotal += CALC_CONFIG.opciones[optionId].costo;
  });
  const subtotalAntes = baseConVolumen + opcionesTotal;

  // Paso 4: Aplicar multiplicadores de logística y urgencia
  const logisticaMult = CALC_CONFIG.logistica[state.logistica].mult;
  const urgenciaMult = CALC_CONFIG.urgencia[state.urgencia].mult;
  const subtotalDespues = subtotalAntes * logisticaMult * urgenciaMult;

  // Paso 5: Calcular IVA
  const iva = subtotalDespues * CALC_CONFIG.ivaRate;
  const total = subtotalDespues + iva;

  // Actualizar estado global
  state.subtotal = subtotalDespues;
  state.iva = iva;
  state.total = total;

  // Actualizar UI
  updateSummaryTotal();
}

/**
 * Actualiza el resumen en tiempo real
 */
function updateSummary() {
  // Nombre del servicio
  const serviceName = state.servicio
    ? CALC_CONFIG.servicios[state.servicio].label
    : "Selecciona un servicio";
  document.getElementById("summaryService").textContent = serviceName;

  // Cantidad/Volumen
  document.getElementById("summaryVolumen").textContent = `${state.cantidad} unidades (${state.volumenRange})`;

  // Opciones adicionales
  if (state.opciones.length > 0) {
    document.getElementById("summaryOpcionesContainer").style.display = "block";
    const opcionesLabels = state.opciones
      .map(id => CALC_CONFIG.opciones[id].label)
      .join(", ");
    document.getElementById("summaryOpciones").textContent = opcionesLabels;
  } else {
    document.getElementById("summaryOpcionesContainer").style.display = "none";
  }

  // Logística
  const logisticaLabel = CALC_CONFIG.logistica[state.logistica].label;
  document.getElementById("summaryLogistica").textContent = logisticaLabel;

  // Urgencia
  const urgenciaLabel = CALC_CONFIG.urgencia[state.urgencia].label;
  document.getElementById("summaryUrgencia").textContent = urgenciaLabel;
}

/**
 * Actualiza el total mostrado en el resumen
 */
function updateSummaryTotal() {
  const totalFormatted = formatCurrency(state.total);
  document.getElementById("summaryEstimado").textContent = totalFormatted;
}

/**
 * Llena la sección de desglose en el resultado
 */
function llenarDesglose() {
  const breakdownContainer = document.getElementById("resultBreakdown");
  breakdownContainer.innerHTML = "";

  // Servicio base
  const servicioBase = CALC_CONFIG.servicios[state.servicio].base;
  const baseTotal = servicioBase * state.cantidad;

  const itemServicio = document.createElement("div");
  itemServicio.className = "calc-breakdown-item";
  itemServicio.innerHTML = `
    <div class="calc-breakdown-label">Precio base ${CALC_CONFIG.servicios[state.servicio].label} (${state.cantidad} × $${formatoNumero(servicioBase)})</div>
    <div class="calc-breakdown-value">${formatCurrency(baseTotal)}</div>
  `;
  breakdownContainer.appendChild(itemServicio);

  // Ajuste por volumen
  const volumenMult = CALC_CONFIG.volumenMultiplier[state.volumenRange];
  const descuento = 1 - volumenMult;
  if (descuento > 0) {
    const descuentoMonto = baseTotal * descuento;
    const itemDescuento = document.createElement("div");
    itemDescuento.className = "calc-breakdown-item";
    itemDescuento.innerHTML = `
      <div class="calc-breakdown-label">Descuento por volumen (${(descuento * 100).toFixed(0)}%)</div>
      <div class="calc-breakdown-value">-${formatCurrency(descuentoMonto)}</div>
    `;
    breakdownContainer.appendChild(itemDescuento);
  }

  // Opciones adicionales
  if (state.opciones.length > 0) {
    let opcionesTotal = 0;
    state.opciones.forEach(optionId => {
      const costo = CALC_CONFIG.opciones[optionId].costo;
      const label = CALC_CONFIG.opciones[optionId].label;
      opcionesTotal += costo;

      const itemOpcion = document.createElement("div");
      itemOpcion.className = "calc-breakdown-item";
      itemOpcion.innerHTML = `
        <div class="calc-breakdown-label">${label}</div>
        <div class="calc-breakdown-value">+${formatCurrency(costo)}</div>
      `;
      breakdownContainer.appendChild(itemOpcion);
    });
  }

  // Ajuste por logística
  const logisticaMult = CALC_CONFIG.logistica[state.logistica].mult;
  if (logisticaMult > 1) {
    const porcentajeLogistica = ((logisticaMult - 1) * 100).toFixed(0);
    const itemLogistica = document.createElement("div");
    itemLogistica.className = "calc-breakdown-item";
    itemLogistica.innerHTML = `
      <div class="calc-breakdown-label">Ajuste por ${CALC_CONFIG.logistica[state.logistica].label.toLowerCase()} (+${porcentajeLogistica}%)</div>
      <div class="calc-breakdown-value">+${formatCurrency(state.subtotal - calcularBaseAntes())}</div>
    `;
    // No agregar este ya que está incluido en el subtotal
  }

  // Línea separadora
  const lineaSeparador = document.createElement("div");
  lineaSeparador.style.height = "1px";
  lineaSeparador.style.backgroundColor = "rgba(255, 103, 0, 0.3)";
  lineaSeparador.style.margin = "1rem 0";
  breakdownContainer.appendChild(lineaSeparador);

  // Subtotal
  const itemSubtotal = document.createElement("div");
  itemSubtotal.className = "calc-breakdown-item";
  itemSubtotal.innerHTML = `
    <div class="calc-breakdown-label">Subtotal</div>
    <div class="calc-breakdown-value">${formatCurrency(state.subtotal)}</div>
  `;
  breakdownContainer.appendChild(itemSubtotal);

  // IVA (16%)
  const itemIVA = document.createElement("div");
  itemIVA.className = "calc-breakdown-item";
  itemIVA.innerHTML = `
    <div class="calc-breakdown-label">IVA (16%)</div>
    <div class="calc-breakdown-value">+${formatCurrency(state.iva)}</div>
  `;
  breakdownContainer.appendChild(itemIVA);

  // Total Final
  const itemTotal = document.createElement("div");
  itemTotal.className = "calc-breakdown-item total";
  itemTotal.innerHTML = `
    <div class="calc-breakdown-label">TOTAL FINAL</div>
    <div class="calc-breakdown-value">${formatCurrency(state.total)}</div>
  `;
  breakdownContainer.appendChild(itemTotal);

  // Actualizar también el monto mostrado arriba
  document.getElementById("resultTotal").textContent = formatCurrency(state.total);
}

/**
 * Función auxiliar para calcular la base antes de multiplicadores
 * (usada en el desglose)
 */
function calcularBaseAntes() {
  const servicioBase = CALC_CONFIG.servicios[state.servicio].base;
  const volumenMult = CALC_CONFIG.volumenMultiplier[state.volumenRange];
  const baseConVolumen = servicioBase * state.cantidad * volumenMult;

  let opcionesTotal = 0;
  state.opciones.forEach(optionId => {
    opcionesTotal += CALC_CONFIG.opciones[optionId].costo;
  });

  return baseConVolumen + opcionesTotal;
}

// ============================================================================
// FUNCIONES DE FORMATEO
// ============================================================================

/**
 * Formatea un número como moneda MXN
 * @param {number} amount - Cantidad a formatear
 * @returns {string} Formato: "$X,XXX.XX MXN"
 */
function formatCurrency(amount) {
  const formatted = amount.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return formatted;
}

/**
 * Formatea un número sin símbolo de moneda (para desglose)
 * @param {number} amount - Cantidad a formatear
 * @returns {string} Formato: "X,XXX.XX"
 */
function formatoNumero(amount) {
  return amount.toLocaleString("es-MX", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

// ============================================================================
// FUNCIONES DE UTILIDAD
// ============================================================================

/**
 * Reinicia la calculadora a su estado inicial
 */
function resetCalculadora() {
  // Resetear estado
  state = {
    servicio: null,
    cantidad: 1,
    volumenRange: "1-5",
    opciones: [],
    logistica: "local",
    urgencia: "normal",
    subtotal: 0,
    iva: 0,
    total: 0
  };

  // Resetear UI
  // Ocultar resultado
  const resultado = document.getElementById("step-resultado");
  if (resultado) {
    resultado.classList.remove("show");
  }

  // Limpiar selecciones visuales
  document.querySelectorAll(".calc-option").forEach(el => el.classList.remove("selected"));
  document.querySelectorAll(".custom-checkbox input").forEach(el => el.checked = false);
  document.querySelectorAll(".calc-radio-option").forEach(el => el.classList.remove("selected"));
  document.querySelectorAll(".calc-volumen-badge").forEach(el => el.classList.remove("selected"));

  // Resetear slider
  document.getElementById("volumenSlider").value = 1;
  document.getElementById("volumenValor").textContent = "1";

  // Resetear radio buttons
  document.querySelectorAll('input[name="logistica"]').forEach(el => el.checked = false);
  document.querySelectorAll('input[name="urgencia"]').forEach(el => el.checked = false);

  // Mostrar paso 1
  document.querySelectorAll(".calc-step").forEach(el => el.classList.remove("active"));
  document.getElementById("step-1").classList.add("active");

  // Resetear progress bar
  updateProgressBar(1);

  // Limpiar resumen
  document.getElementById("summaryService").textContent = "Selecciona un servicio";
  document.getElementById("summaryVolumen").textContent = "-";
  document.getElementById("summaryEstimado").textContent = "$0.00";
  document.getElementById("summaryOpcionesContainer").style.display = "none";
  document.getElementById("summaryLogisticaContainer").style.display = "none";
  document.getElementById("summaryUrgenciaContainer").style.display = "none";

  // Scroll hacia el top
  window.scrollTo({ top: 0, behavior: "smooth" });

  console.log("Calculadora reiniciada");
}

/**
 * Alterna la visualización de una pregunta FAQ
 * @param {HTMLElement} element - El elemento .faq-question clickeado
 */
function toggleFAQ(element) {
  const faqItem = element.closest(".faq-item");
  const answer = faqItem.querySelector(".faq-answer");

  // Toggle clase open
  faqItem.classList.toggle("open");
  answer.classList.toggle("show");
}

// ============================================================================
// LOGGING Y DEBUG (opcional, comentar en producción)
// ============================================================================

/**
 * Función de debug para loguear el estado actual
 */
function debugState() {
  console.log("Estado actual de la calculadora:", state);
  console.log("Subtotal:", formatCurrency(state.subtotal));
  console.log("IVA:", formatCurrency(state.iva));
  console.log("Total:", formatCurrency(state.total));
}

// ============================================================================
// INTEGRACIÓN FUTURA CON API
// ============================================================================

/**
 * Función placeholder para integración futura con backend
 * Actualmente guarda los datos en el cliente
 */
async function enviarCotizacion(datosContacto) {
  /*
  // Implementación futura:
  const payload = {
    ...state,
    ...datosContacto,
    timestamp: new Date().toISOString(),
    total: state.total,
    desglose: {
      subtotal: state.subtotal,
      iva: state.iva
    }
  };

  try {
    const response = await fetch('/api/cotizaciones', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Cotización enviada:', data);
      return data;
    }
  } catch (error) {
    console.error('Error al enviar cotización:', error);
  }
  */

  // Por ahora, simplemente loguear
  console.log("Datos de cotización listos para enviar:", {
    ...state,
    ...datosContacto
  });
}

/**
 * Guarda el estado actual en localStorage para persistencia
 * (opcional)
 */
function guardarEstado() {
  localStorage.setItem("calculadoraState", JSON.stringify(state));
}

/**
 * Carga el estado desde localStorage
 * (opcional)
 */
function cargarEstado() {
  const saved = localStorage.getItem("calculadoraState");
  if (saved) {
    try {
      state = JSON.parse(saved);
      console.log("Estado cargado desde localStorage");
      // Actualizar UI para reflejar el estado guardado
      updateSummary();
      calcularTotal();
    } catch (error) {
      console.error("Error al cargar estado:", error);
    }
  }
}

// ============================================================================
// Exportar para posible uso con sistemas de módulos
// ============================================================================

// Para ES6 modules, si se necesita:
// export { calcularTotal, formatCurrency, resetCalculadora };
