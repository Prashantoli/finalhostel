FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN corepack enable && pnpm install --frozen-lockfile --prod

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
