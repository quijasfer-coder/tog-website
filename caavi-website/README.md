# The Office Generation by CAAVI® — Sitio Web Corporativo

> Versión 1.0 | Marzo 2026 | Proyecto Completo

---

## 🏢 Sobre la Marca

**The Office Generation by CAAVI®** es la comercializadora B2B de referencia para equipamiento
de oficinas en México. Este sitio web fue diseñado y desarrollado para generar leads calificados,
comunicar los servicios con claridad y posicionar la marca como socio estratégico empresarial.

---

## 🎨 Identidad de Marca

| Elemento | Valor |
|----------|-------|
| Negro | `#070707` |
| Gris | `#727272` |
| Claro | `#efeaea` |
| Naranja (acento) | `#ff6700` |
| Tipografía heading | Outfit (Google Fonts) |
| Tipografía body | Inter (Google Fonts) |

---

## 📁 Estructura del Proyecto

```
caavi-website/
│
├── design-system/
│   ├── MASTER.md          ← UX Strategy, Arquitectura, Design System, Dirección Visual
│   └── tokens.json        ← Tokens de diseño en JSON
│
├── pages/
│   ├── index.html         ← Homepage principal
│   ├── servicios.html     ← Catálogo de productos y servicios
│   ├── calculadora.html   ← Calculadora interactiva de costos
│   ├── nosotros.html      ← Historia, equipo y misión
│   └── contacto.html      ← Formulario de contacto y canales
│
├── styles/
│   └── tailwind.css       ← Design system completo + utilidades
│
├── scripts/
│   └── calculator.js      ← Lógica completa de calculadora (configurable)
│
└── README.md              ← Este archivo
```

---

## 🚀 Cómo Usar

### Abrir localmente
Abre cualquier archivo `.html` directamente en el navegador. No requiere servidor.

### Stack
- HTML5 semántico
- Tailwind CSS (CDN) + CSS custom variables
- JavaScript vanilla (sin frameworks)
- Lucide Icons (CDN)
- Google Fonts: Outfit + Inter

---

## ⚙️ Configurar la Calculadora

Edita el objeto `CALC_CONFIG` en `/scripts/calculator.js`:

```javascript
const CALC_CONFIG = {
  servicios: {
    muebles: { base: 5000, label: "Muebles de Oficina" },
    // ... editar precios base aquí
  },
  // ... multiplicadores de volumen, logística, urgencia
};
```

Cambia los valores `base` para actualizar precios sin tocar el HTML.

---

## 📄 Páginas

| Página | Descripción | CTA Principal |
|--------|-------------|---------------|
| `index.html` | Homepage con hero, servicios, proceso, testimonios | Solicitar Cotización |
| `servicios.html` | Catálogo detallado con filtros y tabla de planes | Cotizar este servicio |
| `calculadora.html` | Wizard de 4 pasos + estimación en tiempo real | Ver Mi Estimación |
| `nosotros.html` | Historia, misión, equipo, timeline y stats | Trabajemos Juntos |
| `contacto.html` | Formulario, canales de contacto, FAQ | Enviar Mensaje |

---

## 🔮 Próximos Pasos (Roadmap)

- [ ] Conectar formulario de contacto a backend/CRM
- [ ] Integrar calculadora con API de cotización
- [ ] Agregar página de Blog / Casos de Éxito
- [ ] Implementar chat en vivo (WhatsApp Business API)
- [ ] Optimización SEO (meta tags, sitemap, robots.txt)
- [ ] Analytics (Google Analytics 4 / Meta Pixel)
- [ ] Portal de clientes (login + historial de pedidos)
- [ ] Migración a framework (Next.js / Astro) para performance
- [ ] Multi-idioma (ES / EN)

---

## 📞 Datos de Contacto

- **Web:** theofficegeneration.mx
- **Email:** contacto@theofficegeneration.mx
- **Tel:** +52 (55) 1234-5678
- **WhatsApp:** wa.me/521234567890

---

*The Office Generation by CAAVI® — La generación que transforma las oficinas mexicanas*
