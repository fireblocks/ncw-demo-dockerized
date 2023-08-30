FROM node:18-alpine

USER node

COPY --chown=node:node package.json yarn.lock /opt/tunnel/

WORKDIR /opt/tunnel/
RUN yarn

COPY --chown=node:node tsconfig.json /opt/tunnel/
COPY --chown=node:node src/ /opt/tunnel/src/

ENTRYPOINT ["npm", "run", "start"]
