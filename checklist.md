

## ✅ Fastify Boilerplate Library Integration Checklist

### ⚙️ Core Setup

* [✅] `fastify` — main web framework initialized
* [✅] `typescript`, `ts-node`, `@types/node` — TypeScript configured with `tsconfig.json`
* [✅] `nodemon` — development auto-reload via `nodemon.json` or script
* [✅] `pino` — logging with Fastify built-in logger
* [✅] `pino-pretty` — pretty logs in development mode

---

### 🧠 Validation & Environment

* [✅] `zod` — input validation used in routes or services
* [✅] `dotenv` — load env variables in `config.ts`

---

### 🧩 Fastify Plugins

* [✅] `@fastify/cors` — CORS enabled
* [ ] `@fastify/jwt` — JWT auth configured (sign/verify)
* [✅] `@fastify/helmet` — secure HTTP headers
* [✅] `@fastify/rate-limit` — global or route-based rate limits
* [ ] `@fastify/multipart` — file upload support
* [ ] `@fastify/static` — static file serving (e.g., `/public`)
* [ ] `@fastify/session` — session storage (if needed)
* [ ] `@fastify/websocket` — WebSocket support with route
* [✅] `@fastify/swagger` — OpenAPI schema registered
* [✅] `@fastify/swagger-ui` — `/docs` route available and styled
* [✅] `@fastify/metrics` — Prometheus metrics at `/metrics`

---

### 🗃️ Database

* [✅] `mongoose` — MongoDB connection established
* [✅] `@types/mongoose` — type safety for Mongoose models

---

### 🔐 Auth & Admin

* [✅] `firebase-admin` — Firebase Auth integration (token verify, user sync)

---

### 🎯 Utility Libraries

* [ ] `casl` — role-based access control (define abilities)
* [✅] `uuid` — generate unique identifiers
* [✅] `fs-extra` — safe filesystem operations
* [✅] `http-errors` — clean error throwing (`createError(401, 'Unauthorized')`)
* [ ] `bullmq` — job queues with Redis (e.g. email, reports)