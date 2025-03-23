# --- Base Stage: Bun Environment ---
FROM oven/bun:latest AS base
WORKDIR /app

# Only install dependencies
COPY bun.lock package.json ./
COPY ./packages ./packages
COPY ./apps/web/package.json ./apps/web/package.json

RUN bun install

# --- Build Stage ---
FROM base AS build
COPY . .
WORKDIR /app/apps/web
RUN bun run build

# --- Runtime Stage ---
FROM oven/bun:latest AS runtime

WORKDIR /app

# Copy node_modules for runtime
COPY --from=base /app/node_modules ./node_modules

# Copy the built app
COPY --from=build /app/apps/web/dist ./apps/web/dist

ENV HOST=0.0.0.0
ENV PORT=4321

EXPOSE 4321

CMD ["bun", "run", "apps/web/dist/server/entry.mjs", "--host"]
