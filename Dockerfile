FROM node:19-alpine3.15 AS build
ENV PATH /app/node_modules/.bin:$PATH
ENV HOST 0.0.0.0
# Add a work directory
WORKDIR /app

# Cache and Install dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy app files
COPY . ./
