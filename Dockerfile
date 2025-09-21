# syntax=docker/dockerfile:1

################################################################################
# Use Node.js 20 Alpine for base image
ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src/app

################################################################################
# Install dependencies
FROM base AS deps
# Copy package files
COPY package*.json ./
# Install only production dependencies
RUN npm ci --omit=dev

################################################################################
# Build stage
FROM deps AS build
# Copy everything else
COPY . .
# Install dev dependencies if needed for build
RUN npm install
# Build the Next.js app
RUN npm run build

################################################################################
# Production image
FROM node:${NODE_VERSION}-alpine AS final
WORKDIR /usr/src/app
ENV NODE_ENV=production

# Copy node_modules and build output
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/package.json ./

# Expose port 3000 (default Next.js)
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
