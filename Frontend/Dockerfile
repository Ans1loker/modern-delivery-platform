FROM node:20-alpine

WORKDIR /app

# Copy package definition files
COPY package.json package-lock.json* ./
RUN npm install --production

# Copy source files
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
