# ⚡ Fastify Boilerplate with TypeScript, MongoDB & Firebase Auth

A **production-ready Fastify boilerplate** built with **TypeScript**, **MongoDB (Mongoose)**, **Firebase Authentication**, **Zod validation**, and modern best practices. This setup is designed for scalability, security, speed, and ease of use in real-world applications.

---

## 📌 Project Goals

- Build a clean, opinionated, and extensible boilerplate.
- Use **Fastify** for blazing-fast HTTP API.
- Integrate with **MongoDB** using **Mongoose**.
- Validate with **Zod**.
- Handle auth via **Firebase** with fallback syncing to MongoDB.
- Support modern features like **WebSockets**, **file uploads**, **jobs**, and **Swagger documentation**.

---

## 🏗️ Tech Stack & Libraries

### 🚀 Core Framework
- **[fastify](https://www.fastify.io/)**: Ultra-fast and low-overhead web framework.

### 🗃️ Database
- **[mongoose](https://mongoosejs.com/)**: Elegant MongoDB ODM.
- **[@types/mongoose](https://www.npmjs.com/package/@types/mongoose)**: Type definitions for Mongoose.

### 🔐 Authentication & Security
- **[@fastify/jwt](https://github.com/fastify/fastify-jwt)**: JWT authentication.
- **[firebase-admin](https://firebase.google.com/docs/admin/setup)**: Verify Firebase tokens on the server.
- **[@fastify/helmet](https://github.com/fastify/fastify-helmet)**: HTTP headers for security.
- **[@fastify/rate-limit](https://github.com/fastify/fastify-rate-limit)**: Prevent abuse with rate limiting.
- **[@fastify/session](https://github.com/fastify/fastify-session)**: Session support (optional).
- **[casl](https://casl.js.org/)**: Role-based access control.

### 📦 Utilities & Core Functionality
- **[dotenv](https://github.com/motdotla/dotenv)**: Environment variable loader.
- **[zod](https://github.com/colinhacks/zod)**: Schema validation for requests and configs.
- **[http-errors](https://github.com/jshttp/http-errors)**: Standardized error objects.
- **[fs-extra](https://github.com/jprichardson/node-fs-extra)**: Extra file system methods.

### 📁 Static & File Handling
- **[@fastify/static](https://github.com/fastify/fastify-static)**: Serve static files.
- **[@fastify/multipart](https://github.com/fastify/fastify-multipart)**: Handle file uploads.

### 🧵 Background Jobs
- **[bullmq](https://docs.bullmq.io/)**: Job queues with Redis.

### 📡 WebSockets
- **[@fastify/websocket](https://github.com/fastify/fastify-websocket)**: Real-time bi-directional communication.

### 📊 Observability
- **[pino](https://getpino.io/)**: Fast logging system.
- **[@fastify/metrics](https://github.com/fastify/fastify-metrics)**: Prometheus metrics collection.

### 📜 API Documentation
- **[@fastify/swagger](https://github.com/fastify/fastify-swagger)**: Swagger spec generation.
- **[@fastify/swagger-ui](https://github.com/fastify/fastify-swagger)**: Serve Swagger UI.

### 🧪 Dev Tooling
- **[typescript](https://www.typescriptlang.org/)**: Static type checking.
- **[ts-node](https://typestrong.org/ts-node/)**: Run TypeScript directly.
- **[nodemon](https://nodemon.io/)**: Auto-reload on changes.
- **[eslint](https://eslint.org/)**: Linting for code quality.
- **[@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)**: TypeScript lint rules.
- **[@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint)**: TypeScript parser for ESLint.
- **[prettier](https://prettier.io/)**: Code formatter.
- **[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)**: Prevent ESLint from conflicting with Prettier.

---

## Features
✅ Fully typed setup with TypeScript
✅ MongoDB & Mongoose integration
✅ Firebase authentication with sync fallback
✅ Zod-based validation
✅ Swagger API docs auto-generated
✅ RESTful structure with service separation
✅ Job processing with BullMQ
✅ WebSockets with Fastify support
✅ Prometheus metrics
✅ Secure, extensible, production-ready

