FROM node:lithium-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV CI=true
COPY --from=ghcr.io/pnpm/pnpm:12 /opt/pnpm /opt/pnpm
RUN for bin in pnpm pn pnpx pnx; do ln -s "/opt/pnpm/$bin" "/usr/local/bin/$bin"; done

FROM base AS build-deps
WORKDIR /source
COPY ["package.json", "pnpm-lock.yaml", "pnpm-workspace.yaml", "./"]
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

FROM build-deps AS build
COPY src src
COPY ["*.ts", "tsconfig.json", "./"]
RUN pnpm run build

FROM nginx:latest AS runtime
COPY .server/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /source/dist /app
