#!/bin/bash

echo "Subindo o container..."
docker-compose up -d --remove-orphans

sleep 5

echo "Definindo permissoes das pastas de volumes..."
docker container exec react-cadastro bash -c "chmod 777 -R /usr/src/app"
sleep 1

echo "Gerando a build..."
docker container exec react-cadastro bash -c "cd /usr/src/app/frontend; npm i; npm run build"
sleep 1

echo "Encerrando..."
docker-compose down
sleep 1

echo "Concluído!"