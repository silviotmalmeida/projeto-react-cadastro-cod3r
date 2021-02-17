#!/bin/bash

echo "Iniciando o frontend..."
docker container exec react-cadastro bash -c "cd /usr/src/app/frontend; npm i; npm start"
sleep 1
