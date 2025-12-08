#!/bin/bash

NAME="portfolio"
IMAGE_DEV="portfolio-dev"
IMAGE_PROD="portfolio-prod"
PORT=3042
INTERNAL_PORT=3042
NETWORK="mf-network"

MODE=$1

if [ "$MODE" = "prod" ]; then
  IMAGE=$IMAGE_PROD
  HOST_BIND="127.0.0.1"   # в проде слушаем только на loopback
else
  IMAGE=$IMAGE_DEV
  HOST_BIND="0.0.0.0"     # в dev можно торчать наружу, если нужно
fi

# Создаём сеть, если её нет
if ! docker network ls | grep -q "$NETWORK"; then
  echo "🛠️  Создаю сеть '$NETWORK'..."
  docker network create "$NETWORK"
fi

echo "🚀 Запускаю '$NAME' ($MODE) на http://$HOST_BIND:$PORT ..."
docker run --rm --name "$NAME" \
  --network "$NETWORK" \
  -p "$HOST_BIND:$PORT:$INTERNAL_PORT" \
  "$IMAGE"
