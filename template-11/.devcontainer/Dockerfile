FROM node:16
WORKDIR /workspace/template-11
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
