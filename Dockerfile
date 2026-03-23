FROM node:lts-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable pnpm

FROM base AS build-deps
WORKDIR /source
COPY ["package.json", "pnpm-lock.yaml", "./"]
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

FROM build-deps AS build
COPY src src
COPY ["*.ts", "*.js", "tsconfig.json", "./"]
RUN pnpm run --no-scripts build

FROM nginx:latest AS runtime
COPY .server/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /source/dist /app
