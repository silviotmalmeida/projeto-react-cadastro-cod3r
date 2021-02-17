#!/bin/bash

echo "Iniciando o backend..."
docker container exec react-cadastro bash -c "cd /usr/src/app/backend; npm i; npm start; exit"
sleep 1
