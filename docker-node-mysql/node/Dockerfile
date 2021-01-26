FROM node

WORKDIR /src
ADD . /src

RUN cd /src && npm install

EXPOSE 3000

# CMD ["node","/src/app.js"]
RUN apt-get update && apt-get install -y netcat

RUN chmod +x docker-entrypoint.sh
ENTRYPOINT ./docker-entrypoint.sh