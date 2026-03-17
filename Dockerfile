# Todoist MCP Server + HTTP proxy for remote access
# Builds the MCP server and wraps it with mcp-streamablehttp-proxy
# Auth proxy adds OAuth 2.0 + PKCE for Claude.ai and Bearer/Basic auth

FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --ignore-scripts

COPY src ./src
COPY tsconfig.json .
RUN npm run build

# Runtime: Python + proxy + built Node app
FROM python:3.11-alpine

RUN apk add --no-cache nodejs npm

RUN pip install --no-cache-dir mcp-streamablehttp-proxy uvicorn httpx fastapi python-multipart

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules
COPY auth_proxy.py .
COPY run_proxy.py .
COPY start.sh .
RUN chmod +x start.sh

EXPOSE 3000

# TODOIST_API_TOKEN + MCP_ACCESS_TOKEN must be set at runtime
CMD ["./start.sh"]
