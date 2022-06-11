FROM node:16-alpine3.15

ARG APP_NAME
WORKDIR /workspace/${APP_NAME}

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm i -g pnpm
RUN pnpm install --prod --frozen-lockfile

# Checkout project
COPY . ./

# Build app
RUN pnpm build

# Run app
CMD ["sh", "./start-app.sh"]
