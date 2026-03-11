# Cerón Abogado — Sitio Web Profesional

Sitio web profesional para **Adrián Cerón López**, Licenciado en Derecho con especialidad en Derecho Familiar, Civil, Penal, Laboral, Asesoría Preventiva e Inmobiliario. Con sede en Jaral del Progreso, Guanajuato, México.

---

## Tecnologías Utilizadas

| Tecnología | Versión | Descripción |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.1.6 | Framework de React con App Router |
| [React](https://react.dev/) | 19 | Librería de interfaces de usuario |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Tipado estático |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Framework de estilos utilitarios |
| [Supabase](https://supabase.com/) | 2.99 | Base de datos, autenticación y backend |
| [pnpm](https://pnpm.io/) | — | Gestor de paquetes |

---

## Funcionalidades

### Sitio Público
- **Hero** — Presentación del abogado con llamadas a la acción (WhatsApp y servicios)
- **Sobre mí** — Perfil profesional con foto, bio, credenciales y cédula profesional (PDF descargable)
- **Servicios** — Seis áreas de práctica legal con descripciones detalladas
- **Tarifas** — Precios transparentes en MXN con opción de cotización personalizada vía WhatsApp
- **Valores** — Cuatro pilares: atención personalizada, transparencia, comunicación constante y ética profesional
- **Redes sociales** — Guía de contenido con consejos para atraer clientes locales
- **Newsletter** — Formulario de suscripción por correo electrónico con feedback de éxito/error en página; enlace al Aviso de Privacidad
- **Contacto** — Formulario con dos modos: WhatsApp (abre conversación prefilled) y Mensaje directo (guarda en Supabase, feedback en sitio); enlace al Aviso de Privacidad
- **Aviso de Privacidad** (`/aviso-de-privacidad`) — Página legal conforme a la LFPDPPP con derechos ARCO

### Panel de Administración (`/admin`)
- Acceso protegido con autenticación por correo y contraseña (Supabase Auth)
- Tabla de **Leads** — visualización de todos los formularios de contacto recibidos
- Tabla de **Suscriptores** — visualización de suscriptores al newsletter
- Cierre de sesión seguro

### API Routes
- `POST /api/leads` — Almacena formularios de contacto en Supabase; envía notificación por correo si `RESEND_API_KEY` está configurado
- `POST /api/newsletter` — Gestiona suscripciones de correo (con detección de duplicados)

---

## Estructura del Proyecto

```
ceron-abogado/
├── src/
│   ├── app/
│   │   ├── admin/                  # Panel de administración protegido
│   │   │   ├── login/page.tsx      # Inicio de sesión
│   │   │   ├── page.tsx            # Dashboard principal
│   │   │   ├── layout.tsx          # Layout con verificación de auth
│   │   │   └── SignOutButton.tsx   # Botón de cierre de sesión
│   │   ├── api/
│   │   │   ├── leads/route.ts      # API: formularios de contacto
│   │   │   └── newsletter/route.ts # API: suscripciones
│   │   ├── aviso-de-privacidad/
│   │   │   └── page.tsx            # Aviso de privacidad (LFPDPPP)
│   │   ├── layout.tsx              # Layout raíz (metadatos, fuentes)
│   │   ├── page.tsx                # Página de inicio
│   │   └── globals.css             # Estilos globales con Tailwind
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Navegación con menú móvil
│   │   │   └── Footer.tsx          # Pie de página
│   │   └── sections/               # Secciones de la página
│   │       ├── Hero.tsx
│   │       ├── Sobre.tsx
│   │       ├── Servicios.tsx
│   │       ├── Tarifas.tsx
│   │       ├── Valores.tsx
│   │       ├── Redes.tsx
│   │       ├── Contacto.tsx
│   │       ├── ContactForm.tsx
│   │       └── Newsletter.tsx
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts           # Cliente Supabase (browser)
│   │   │   └── server.ts           # Clientes Supabase (servidor + admin)
│   │   ├── whatsapp.ts             # Fuente única de WA_NUMBER y helper waUrl()
│   │   └── types.ts                # Tipos TypeScript
│   └── proxy.ts                    # Middleware de autenticación
├── supabase/
│   └── migrations/
│       └── 0001_init.sql           # Esquema de base de datos
├── public/
│   ├── profile.jpg                 # Foto del abogado
│   ├── cedula-adrian-ceron.pdf     # Cédula profesional
│   └── robots.txt                  # Configuración SEO
├── .env.example                    # Plantilla de variables de entorno
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

---

## Base de Datos

### Tabla `leads`
| Columna | Tipo | Descripción |
|---|---|---|
| `id` | UUID | Identificador único |
| `created_at` | TIMESTAMPTZ | Fecha y hora del registro |
| `name` | TEXT | Nombre del contacto |
| `phone` | TEXT | Teléfono (opcional) |
| `subject` | TEXT | Área legal de interés |
| `message` | TEXT | Mensaje o descripción del caso |

### Tabla `newsletter_subscribers`
| Columna | Tipo | Descripción |
|---|---|---|
| `id` | UUID | Identificador único |
| `created_at` | TIMESTAMPTZ | Fecha y hora del registro |
| `email` | TEXT | Correo electrónico (único) |
| `confirmed` | BOOLEAN | Estado de confirmación |

Ambas tablas tienen **Row Level Security (RLS)** habilitado: solo usuarios autenticados pueden leer los datos.

---

## Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd ceron-abogado
```

### 2. Instalar dependencias

```bash
pnpm install
```

### 3. Configurar variables de entorno

Copia `.env.example` a `.env.local` y completa los valores:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_SUPABASE_URL=https://<tu-proyecto>.supabase.co
# El dashboard de Supabase puede llamarla "anon key" o "publishable key" — ambas funcionan:
NEXT_PUBLIC_SUPABASE_ANON_KEY=<tu-anon-key>
# Clave secreta de servicio (Project Settings → API → service_role):
SUPABASE_SERVICE_ROLE_KEY=<tu-service-role-key>
NEXT_PUBLIC_WHATSAPP_NUMBER=524561266998

# Opcional — notificación por correo al recibir un lead
RESEND_API_KEY=
CONTACT_EMAIL=
```

### 4. Configurar la base de datos

Ejecuta la migración en tu proyecto de Supabase:

```bash
# Con Supabase CLI
supabase db push

# O ejecuta manualmente el SQL en el editor de Supabase:
# supabase/migrations/0001_init.sql
```

### 5. Crear usuario administrador

En el dashboard de Supabase, ve a **Authentication → Users** y crea un usuario con correo y contraseña para acceder al panel `/admin`.

### 6. Ejecutar en desarrollo

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Scripts Disponibles

| Comando | Descripción |
|---|---|
| `pnpm dev` | Servidor de desarrollo |
| `pnpm build` | Compilar para producción |
| `pnpm start` | Servidor de producción |

---

## Despliegue

El proyecto está listo para desplegarse en **Vercel**:

1. Conecta el repositorio en [vercel.com](https://vercel.com)
2. Agrega las variables de entorno en la configuración del proyecto
3. Vercel detecta automáticamente Next.js y configura el build

---

## Variables de Entorno

| Variable | Visibilidad | Descripción |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Pública | URL del proyecto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Pública | Clave anónima de Supabase (también admite `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY`) |
| `SUPABASE_SERVICE_ROLE_KEY` | Privada (servidor) | Clave de rol de servicio (nunca exponer al cliente) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Pública | Número de WhatsApp Business (con código de país) |
| `RESEND_API_KEY` | Privada (servidor) | API key de [Resend](https://resend.com) — opcional, tier gratuito disponible |
| `CONTACT_EMAIL` | Privada (servidor) | Correo destino de notificaciones (por defecto: `ceronadrian770@gmail.com`) |

---

## Seguridad

- Las rutas `/admin/*` están protegidas con middleware de autenticación ([src/proxy.ts](src/proxy.ts))
- Las API routes usan el cliente admin de Supabase con la clave de servicio
- RLS habilitado en todas las tablas — los datos solo son accesibles para usuarios autenticados
- Las variables sensibles (`SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`) nunca se exponen al cliente
- `.env.local` está en `.gitignore`
- Las API routes validan la presencia de variables de entorno al inicio y retornan 503 con mensaje claro si faltan

---

## Accesibilidad

- Todos los enlaces externos usan `rel="noopener noreferrer"` y `target="_blank"` para prevenir tabnapping
- Los enlaces de WhatsApp y redes sociales incluyen `aria-label` descriptivo con aviso de nueva pestaña
- El botón de menú hamburguesa declara `aria-expanded`, `aria-controls` y `aria-label` dinámico
- Inputs de formulario vinculados a `<label>` mediante `htmlFor`/`id` (newsletter usa label visualmente oculto con `.sr-only`)
- Validación HTML5 nativa activada en formularios: `required`, `minLength`, `maxLength`, `pattern` + `title` descriptivo
- Ambos formularios incluyen enlace al Aviso de Privacidad para cumplimiento de la LFPDPPP
- Mensajes de estado usan `role="status"` (éxito/info) y `role="alert"` (errores) para lectores de pantalla
- Los botones deshabilitados incluyen `disabled:cursor-not-allowed` para feedback visual
- La navegación principal tiene `aria-label="Navegación principal"` como landmark ARIA
- Los SVGs decorativos no tienen texto alternativo innecesario (contenidos en `<a>` con `aria-label` propio)

---

## Privacidad y Cumplimiento Legal

El sitio incluye un **Aviso de Privacidad** en `/aviso-de-privacidad` conforme a la [Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf):

- Identidad del responsable del tratamiento
- Datos personales recabados (nombre, teléfono, correo, descripción del caso)
- Finalidades primarias y secundarias del tratamiento
- Transferencias a encargados (Supabase, Resend) con enlace a sus políticas
- Procedimiento para ejercer derechos ARCO
- Medidas de seguridad (TLS, RLS, acceso restringido)
- Autoridad supervisora: INAI

Los formularios de contacto y newsletter muestran un aviso de consentimiento con enlace a esta página.

---

## Utilidades Compartidas

### `src/lib/whatsapp.ts`

Fuente única del número de WhatsApp y helper para construir URLs:

```ts
import { waUrl } from '@/lib/whatsapp'

waUrl()                                    // https://wa.me/524561266998
waUrl('Hola Adrián, necesito asesoría.')   // https://wa.me/524561266998?text=...
```

Cambiar el número solo requiere editar `NEXT_PUBLIC_WHATSAPP_NUMBER` en `.env.local`.

---

## Áreas Legales Cubiertas

- **Derecho Familiar** — Divorcios, custodia, pensión alimenticia, adopción
- **Derecho Civil** — Herencias, contratos, responsabilidad civil
- **Derecho Penal** — Defensa penal, asistencia a víctimas
- **Derecho Laboral** — Despidos injustificados, liquidaciones
- **Asesoría Preventiva** — Revisión de contratos, consultoría legal
- **Derecho Inmobiliario** — Compraventa, arrendamiento, registro de propiedades

---

Desarrollado con Next.js 16 y Supabase.
