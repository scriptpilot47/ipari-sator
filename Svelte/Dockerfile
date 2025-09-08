FROM node:22-slim AS base
WORKDIR /app

# Dev ---------------------------
FROM base AS dev
COPY package*.json ./
RUN npm ci
EXPOSE 5173 24678
# 24678 is websocket port for vite HMR
CMD [ "npm", "run", "dev", "--", "--host" ]


# Build ---------------------------
FROM base AS build
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Prod ---------------------------
FROM base AS prod
# env here? i prefer yaml
RUN useradd -m svelte
USER svelte
COPY --from=build /app/build ./build
COPY --from=build /app/node_modules ./node_modules
# these copy lines trigger the Build stage in this file, nothing else
EXPOSE 3000
CMD ["node", "build"]