FROM node:16.17.0-bullseye-slim
RUN apt-get update && apt-get upgrade -y
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY --chown=node:node . .
RUN npm ci --only=production
USER node

CMD ["dumb-init", "node", "server.js"]
# CMD ["node", "server.js"]
# CMD ["npm", "start"] # Bad
