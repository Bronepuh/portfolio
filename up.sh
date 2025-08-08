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
else
  IMAGE=$IMAGE_DEV
fi

if ! docker network ls | grep -q "$NETWORK"; then
  echo "🛠️  Создаю сеть '$NETWORK'..."
  docker network create "$NETWORK"
fi

echo "🚀 Запускаю '$NAME' ($MODE) на http://localhost:$PORT ..."
docker run --rm --name "$NAME" \
  --network "$NETWORK" \
  -p "$PORT:$INTERNAL_PORT" \
  "$IMAGE"
