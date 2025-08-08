#!/bin/bash

# Название контейнера и сети
NAME="portfolio"
NETWORK="mf-network"
PORT=3000

# Определяем режим
MODE=$1

if [ "$MODE" = "prod" ]; then
  DOCKERFILE="Dockerfile.prod"
  IMAGE="$NAME-prod"
else
  DOCKERFILE="Dockerfile.dev"
  IMAGE="$NAME-dev"
fi

# Создание сети, если не существует
if ! docker network ls | grep -q "$NETWORK"; then
  echo "🛠️  Создаю сеть $NETWORK..."
  docker network create "$NETWORK"
fi

# Сборка образа
echo "🔧 Собираю образ $IMAGE..."
docker build -f "$DOCKERFILE" -t "$IMAGE" .

# Запуск
echo "🚀 Запуск контейнера $NAME ($MODE) на http://localhost:$PORT..."
docker run --rm --name "$NAME" \
  --network "$NETWORK" \
  -p "$PORT:3000" \
  "$IMAGE"
