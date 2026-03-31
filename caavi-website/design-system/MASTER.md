# CAAVI Comercializadora — MASTER DESIGN DOCUMENT
> Versión 1.0 | Marzo 2026 | Confidencial

---

## 📋 ÍNDICE

1. [UX Estratégico — Fase 1](#fase-1-ux-estrategico)
2. [Arquitectura del Sitio — Fase 2](#fase-2-arquitectura)
3. [Design System — Fase 3](#fase-3-design-system)
4. [Dirección Visual — Fase 4](#fase-4-direccion-visual)

---

## FASE 1 — UX ESTRATÉGICO {#fase-1-ux-estrategico}

### 1.1 User Personas

---

#### PERSONA A — El Director de Compras / Procurement Manager

**Nombre:** Carlos Mendoza
**Edad:** 42 años
**Cargo:** Director de Compras
**Empresa:** Manufactura / Distribución (100–500 empleados)
**Ubicación:** CDMX / Monterrey / Guadalajara

**Perfil:**
- Toma decisiones de compra de alto volumen
- Maneja 3–8 proveedores simultáneamente
- Presupuesto anual de compras: $5M–$50M MXN
- Prioridades: precio competitivo, confiabilidad de entrega, soporte postventa
- Canales de búsqueda: LinkedIn, Google B2B, referencias directas

**Dolores (Pain Points):**
- Proveedores que no cumplen tiempos de entrega
- Falta de transparencia en precios y costos ocultos
- Difícil comunicación post-venta
- Complejidad en la documentación y procesos
- No saber si el proveedor puede escalar con su empresa

**Motivaciones:**
- Reducir costos operativos sin sacrificar calidad
- Tener un proveedor de largo plazo confiable
- Simplificar su cadena de suministro
- Demostrarle resultados a su dirección general

**Mensaje clave para él:** "CAAVI es el socio estratégico que necesitas: precios transparentes, entregas puntuales, escalabilidad garantizada."

---

#### PERSONA B — El CEO / Dueño de PyME

**Nombre:** Patricia Villarreal
**Edad:** 38 años
**Cargo:** CEO / Fundadora
**Empresa:** PyME en crecimiento (20–100 empleados)
**Ubicación:** Ciudad secundaria o metropolitana

**Perfil:**
- Toma decisiones rápidas basadas en valor percibido
- Busca relaciones de largo plazo, no transaccionales
- Sensible al precio pero orientada al ROI
- Activa en LinkedIn, muy ocupada, toma decisiones en móvil

**Dolores:**
- No saber si un proveedor nuevo es confiable
- Falta de atención personalizada de grandes proveedores
- Dificultad para cotizar rápidamente sin esperar 3 días
- Miedo a comprometerse con volúmenes grandes sin garantías

**Motivaciones:**
- Hacer crecer su empresa con socios confiables
- Ahorrar tiempo en procesos de compra
- Obtener respuesta rápida y propuestas claras
- Sentirse tratada como cliente importante, no un número

**Mensaje clave para ella:** "CAAVI entiende tu negocio. Cotiza en minutos, opera sin fricciones."

---

#### PERSONA C — El Director Financiero / CFO

**Nombre:** Roberto Sánchez
**Edad:** 48 años
**Cargo:** CFO / Director Administrativo
**Empresa:** Empresa mediana-grande (200+ empleados)

**Perfil:**
- Aprueba compras estratégicas
- Focalizado en ROI, control de gastos, cumplimiento fiscal
- Necesita documentación y trazabilidad completa
- Requiere propuestas con breakdown de costos

**Dolores:**
- Proveedores que no entregan facturas claras
- Falta de contratos claros y condiciones definidas
- Riesgo de proveedor único sin alternativas
- Dificultad para justificar gastos a accionistas

**Motivaciones:**
- Proveedores con solidez financiera demostrable
- Transparencia total en costos
- Documentación impecable
- Historial de cumplimiento

**Mensaje clave para él:** "CAAVI: transparencia financiera, contratos claros, operación auditada."

---

### 1.2 Customer Journey Map

```
ETAPA 1: DESCUBRIMIENTO
├── Trigger: Necesidad de proveedor confiable / insatisfacción con proveedor actual
├── Canales: Google Search, LinkedIn, referidos, ferias industriales
├── Touchpoint: Landing Page (Hero Section)
├── Emoción: Escepticismo → Curiosidad
└── CTA: "Ver Servicios" / "Conocer CAAVI"

ETAPA 2: CONSIDERACIÓN
├── Trigger: Evalúa si CAAVI puede resolver su problema
├── Canales: Página de Servicios, Nosotros, Casos de Éxito
├── Touchpoint: Servicios + Diferenciadores + Testimonios
├── Emoción: Curiosidad → Interés → Evaluación
└── CTA: "Usar Calculadora" / "Descargar Brochure"

ETAPA 3: EVALUACIÓN
├── Trigger: Compara CAAVI vs otros proveedores
├── Canales: Calculadora de Costos, Página de Contacto
├── Touchpoint: Calculadora interactiva + Formulario de cotización
├── Emoción: Interés → Confianza → Intención
└── CTA: "Solicitar Cotización Formal" / "Hablar con un Asesor"

ETAPA 4: CONVERSIÓN
├── Trigger: Decide contactar a CAAVI
├── Canales: Formulario de contacto, WhatsApp, llamada
├── Touchpoint: Formulario + Confirmación inmediata + Respuesta < 24h
├── Emoción: Confianza → Decisión
└── CTA: "Enviar Solicitud" / "Agendar Llamada"

ETAPA 5: RETENCIÓN / EXPANSIÓN
├── Trigger: Primera operación exitosa
├── Canales: Email, seguimiento de cuenta, portal futuro
├── Touchpoint: Experiencia de servicio + soporte post-venta
├── Emoción: Satisfacción → Lealtad
└── CTA: "Ampliar Contrato" / "Referir a CAAVI"
```

---

### 1.3 Funnel de Conversión

```
TOPE DEL FUNNEL (ToFu) — ATRACCIÓN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Objetivo: Captar atención y generar tráfico calificado
Contenido: Hero poderoso, propuesta de valor clara, estadísticas de impacto
Métrica clave: Tiempo en sitio, páginas por sesión

        ▼

MEDIO DEL FUNNEL (MoFu) — CONSIDERACIÓN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Objetivo: Educar y generar confianza
Contenido: Servicios detallados, diferenciadores, testimonios, casos de éxito
Métrica clave: Visitas a /servicios, uso de calculadora

        ▼

FONDO DEL FUNNEL (BoFu) — CONVERSIÓN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Objetivo: Convertir visitante en lead calificado
Contenido: Calculadora + formulario de cotización + CTA directo
Métrica clave: Formularios enviados, tasa de conversión

        ▼

POST-CONVERSIÓN — RETENCIÓN
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Objetivo: Convertir lead en cliente recurrente
Contenido: Seguimiento, onboarding, atención personalizada
Métrica clave: LTV, tasa de recompra
```

---

### 1.4 CTAs Estratégicos por Página

| Página | CTA Primario | CTA Secundario |
|--------|-------------|----------------|
| Home | "Solicitar Cotización" | "Explorar Servicios" |
| Servicios | "Cotizar Este Servicio" | "Ver Calculadora" |
| Calculadora | "Enviar Estimación" | "Hablar con un Asesor" |
| Nosotros | "Trabajemos Juntos" | "Ver Servicios" |
| Contacto | "Enviar Mensaje" | "WhatsApp Directo" |

---

### 1.5 Principios UX de CAAVI

1. **Claridad ante todo:** El usuario debe entender en 5 segundos qué hace CAAVI y por qué le conviene.
2. **Fricción mínima:** Máximo 3 clics para llegar a cotizar.
3. **Confianza visible:** Social proof, números, logos, certificaciones.
4. **Mobile first:** 60%+ del tráfico B2B en México llega desde móvil.
5. **Velocidad = conversión:** Sitio optimizado para carga < 3 segundos.

---

## FASE 2 — ARQUITECTURA DEL SITIO {#fase-2-arquitectura}

### 2.1 Mapa del Sitio

```
CAAVI COMERCIALIZADORA
│
├── 🏠 HOME (index.html)
│   ├── Hero Section — Propuesta de valor principal
│   ├── Stats Bar — Números de impacto
│   ├── Servicios Overview — Cards de servicios
│   ├── Por qué CAAVI — Diferenciadores
│   ├── Proceso de trabajo — 4 pasos
│   ├── Testimonios / Social Proof
│   ├── CTA Final — "Solicitar Cotización"
│   └── Footer
│
├── 🛠️ SERVICIOS (servicios.html)
│   ├── Hero Servicios
│   ├── Grid de Servicios Detallado
│   │   ├── Comercialización B2B
│   │   ├── Logística y Distribución
│   │   ├── Abastecimiento Estratégico
│   │   ├── Gestión de Inventario
│   │   ├── Consultoría de Cadena de Suministro
│   │   └── Servicios Personalizados
│   ├── Tabla Comparativa de Planes
│   └── CTA — Calculadora / Contacto
│
├── 🧮 CALCULADORA (calculadora.html)
│   ├── Intro — "Estima tu costo en minutos"
│   ├── Step 1 — Tipo de Servicio
│   ├── Step 2 — Volumen y Especificaciones
│   ├── Step 3 — Opciones Adicionales
│   ├── Step 4 — Logística y Urgencia
│   ├── Resultado — Breakdown de Costos
│   └── CTA — Solicitar cotización formal
│
├── 🏢 NOSOTROS (nosotros.html)
│   ├── Hero — Historia y Misión
│   ├── Misión / Visión / Valores
│   ├── El Equipo
│   ├── Timeline / Historia
│   ├── Certificaciones y Partners
│   └── CTA — "Trabajemos Juntos"
│
└── 📞 CONTACTO (contacto.html)
    ├── Hero Contacto
    ├── Formulario Principal
    ├── Información de Contacto
    ├── Mapa / Ubicación
    └── FAQ rápida
```

### 2.2 Lógica de Navegación

```
NAVBAR (Sticky)
├── Logo CAAVI (→ index.html)
├── Servicios (→ servicios.html)
├── Calculadora (→ calculadora.html) [Destacado]
├── Nosotros (→ nosotros.html)
├── Contacto (→ contacto.html)
└── CTA Button: "Cotizar Ahora" [Botón primario]

FOOTER
├── Logo + tagline
├── Links de navegación
├── Servicios rápidos
├── Contacto directo
├── Redes sociales
└── Legal (Aviso de privacidad)
```

---

## FASE 3 — DESIGN SYSTEM {#fase-3-design-system}

### 3.1 Paleta de Colores

#### Colores Primarios
```
--color-primary-900: #0A1628    /* Navy oscuro — fondos hero */
--color-primary-800: #0D1F3C    /* Navy profundo */
--color-primary-700: #102A50    /* Navy medio */
--color-primary-600: #1A3A6B    /* Azul corporativo */
--color-primary-500: #1E4D9B    /* Azul base — brand principal */
--color-primary-400: #2563EB    /* Azul vivo — CTA primarios */
--color-primary-300: #3B82F6    /* Azul interactivo */
--color-primary-200: #93C5FD    /* Azul claro */
--color-primary-100: #DBEAFE    /* Azul muy claro */
--color-primary-50:  #EFF6FF    /* Tint mínimo */
```

#### Colores de Acento
```
--color-accent-500: #0EA5E9     /* Cyan — highlights tech */
--color-accent-400: #38BDF8     /* Cyan claro */
--color-gold-500:   #F59E0B     /* Ámbar/Oro — premium, stats */
--color-gold-400:   #FBBF24     /* Ámbar claro */
```

#### Colores Neutros
```
--color-neutral-950: #030712    /* Negro casi puro */
--color-neutral-900: #111827    /* Texto principal dark */
--color-neutral-800: #1F2937    /* Texto secundario dark */
--color-neutral-700: #374151    /* Texto body */
--color-neutral-600: #4B5563    /* Texto muted */
--color-neutral-500: #6B7280    /* Placeholder */
--color-neutral-400: #9CA3AF    /* Border activo */
--color-neutral-300: #D1D5DB    /* Border suave */
--color-neutral-200: #E5E7EB    /* Dividers */
--color-neutral-100: #F3F4F6    /* Fondo secciones */
--color-neutral-50:  #F9FAFB    /* Fondo página */
--color-white:       #FFFFFF    /* Blanco puro */
```

#### Colores Semánticos
```
--color-success: #10B981        /* Verde esmeralda */
--color-warning: #F59E0B        /* Ámbar */
--color-error:   #EF4444        /* Rojo */
--color-info:    #3B82F6        /* Azul */
```

---

### 3.2 Tipografía

#### Font Families
```css
/* Headings — Autoridad y modernidad */
font-family-heading: 'Inter', system-ui, sans-serif;
font-weight-heading: 700, 800;

/* Body — Legibilidad óptima */
font-family-body: 'Inter', system-ui, sans-serif;
font-weight-body: 400, 500;

/* Mono — Datos, calculadora */
font-family-mono: 'JetBrains Mono', 'Courier New', monospace;
```

#### Escala Tipográfica
```
text-xs:   12px / 16px  — Labels, captions
text-sm:   14px / 20px  — Body small, helpers
text-base: 16px / 24px  — Body principal
text-lg:   18px / 28px  — Body destacado
text-xl:   20px / 28px  — Subtítulos pequeños
text-2xl:  24px / 32px  — Subtítulos
text-3xl:  30px / 36px  — Títulos sección
text-4xl:  36px / 40px  — Títulos grandes
text-5xl:  48px / 52px  — Hero desktop
text-6xl:  60px / 64px  — Hero XL
text-7xl:  72px / 76px  — Display
```

---

### 3.3 Sistema de Espaciado

Basado en escala de 4px:
```
space-1:  4px
space-2:  8px
space-3:  12px
space-4:  16px
space-5:  20px
space-6:  24px
space-8:  32px
space-10: 40px
space-12: 48px
space-16: 64px
space-20: 80px
space-24: 96px
space-32: 128px
```

---

### 3.4 Componentes — Botones

#### Botón Primario
```css
bg: #2563EB → hover: #1D4ED8
text: white
padding: 12px 24px (base) | 16px 32px (large)
border-radius: 8px
font-weight: 600
transition: all 0.2s ease
shadow: 0 4px 14px rgba(37, 99, 235, 0.4)
hover-shadow: 0 6px 20px rgba(37, 99, 235, 0.5)
```

#### Botón Secundario
```css
bg: transparent
border: 2px solid #2563EB
text: #2563EB → hover: white
hover-bg: #2563EB
padding: 10px 22px
border-radius: 8px
```

#### Botón Ghost (Dark BG)
```css
bg: rgba(255,255,255,0.1)
border: 1px solid rgba(255,255,255,0.2)
text: white
hover-bg: rgba(255,255,255,0.2)
backdrop-filter: blur(8px)
```

#### Botón CTA Urgencia
```css
bg: #F59E0B → hover: #D97706
text: #0A1628
font-weight: 700
shadow: 0 4px 14px rgba(245, 158, 11, 0.4)
```

---

### 3.5 Componentes — Cards

#### Service Card
```
Estructura: Ícono + Título + Descripción + Link
bg: white
border: 1px solid #E5E7EB
border-radius: 16px
padding: 32px
shadow: 0 1px 3px rgba(0,0,0,0.1)
hover-shadow: 0 20px 40px rgba(0,0,0,0.1)
hover-transform: translateY(-4px)
transition: all 0.3s ease
```

#### Stat Card
```
Estructura: Número + Label + Ícono opcional
bg: linear-gradient(135deg, #1E4D9B, #2563EB)
text: white
border-radius: 16px
padding: 24px 32px
```

#### Testimonial Card
```
Estructura: Quote + Avatar + Nombre + Empresa
bg: white
border-left: 4px solid #2563EB
border-radius: 12px
padding: 28px
shadow: medium
```

---

### 3.6 Componentes — Formularios

#### Input Base
```css
border: 1.5px solid #D1D5DB
border-radius: 8px
padding: 12px 16px
font-size: 16px
focus-border: #2563EB
focus-ring: 0 0 0 3px rgba(37,99,235,0.1)
placeholder-color: #9CA3AF
```

#### Select
```css
Igual a input + chevron icon derecho
appearance: none
bg-icon: url(chevron-down)
```

#### Textarea
```css
Igual a input
min-height: 120px
resize: vertical
```

#### Label
```css
font-size: 14px
font-weight: 500
color: #374151
margin-bottom: 6px
```

#### Error State
```css
border-color: #EF4444
color: #DC2626
font-size: 12px
margin-top: 4px
```

---

### 3.7 Estados de Interacción

| Estado | Descripción |
|--------|-------------|
| Default | Apariencia base sin interacción |
| Hover | Elevación + cambio de color sutil |
| Active | Presionado — escala 0.98 |
| Focus | Ring azul 3px para accesibilidad |
| Disabled | Opacidad 50%, cursor not-allowed |
| Loading | Spinner + texto "Procesando..." |
| Success | Verde + checkmark |
| Error | Rojo + mensaje descriptivo |

---

### 3.8 Breakpoints

```css
sm:  640px   /* Móvil grande */
md:  768px   /* Tablet */
lg:  1024px  /* Desktop pequeño */
xl:  1280px  /* Desktop */
2xl: 1536px  /* Desktop grande */
```

---

## FASE 4 — DIRECCIÓN VISUAL {#fase-4-direccion-visual}

### 4.1 Estilo Visual General

**Definición:** Minimalismo corporativo tech con profundidad visual.

El sitio de CAAVI debe evocar la precisión de una consultora estratégica tipo McKinsey, la modernidad de un SaaS B2B y la solidez operativa de una empresa con años de trayectoria. No es frío ni distante — es profesional con calidez.

### 4.2 Mood & Atmósfera

- **Confianza sólida:** Colores navy profundos que transmiten estabilidad
- **Tecnología accesible:** Gradientes suaves, no agresivos
- **Claridad ejecutiva:** Mucho espacio en blanco, jerarquía tipográfica limpia
- **Dinamismo controlado:** Animaciones sutiles, no distractoras
- **Premium sin ostentación:** Sofisticación implícita, no explícita

### 4.3 Principios de Diseño

1. **Jerarquía visual clara** — El ojo del usuario siempre sabe adónde ir
2. **Espacio como lujo** — Generoso uso de whitespace para transmitir premium
3. **Datos como protagonistas** — Números y estadísticas son los héroes visuales
4. **Consistencia sistémica** — Cada componente se siente parte del mismo mundo
5. **Funcionalidad ante estética** — Primero que funcione, luego que sea bello

### 4.4 Referentes Visuales Descriptivos

- **Stripe.com** — Gradientes profundos, tipografía poderosa, confianza técnica
- **Linear.app** — Minimalismo extremo, velocidad visual, dark mode premium
- **McKinsey.com** — Autoridad corporativa, jerarquía clara, datos prominentes
- **Notion.so** — Claridad, espacio, simplicidad que oculta complejidad
- **Figma.com** — Modernidad tech, CTAs claros, onboarding sin fricción

### 4.5 Lo que CAAVI NO es visualmente

- ❌ Colorido o saturado (nada de arcoíris de colores)
- ❌ Plantilla de WordPress genérica (stock photos baratos)
- ❌ Tipografía decorativa o cursiva
- ❌ Animaciones que distraen del contenido
- ❌ Fondos blancos 100% sin textura ni profundidad
- ❌ Iconos pixelados o inconsistentes
- ❌ Formularios con demasiados campos

### 4.6 Tratamiento de Imágenes / Ilustraciones

- Fotografías: Fondos oscuros con overlay navy, fotografía corporativa abstracta
- Ilustraciones: Line art geométrico, no ilustraciones planas genéricas
- Iconos: Heroicons o Lucide — stroke uniforme de 1.5px
- Patrones: Grid sutil, dots pattern en fondos dark para textura
- Gradientes: navy → azul (no horizontal, preferir diagonal 135°)

---

*Documento generado automáticamente — CAAVI Comercializadora © 2026*
