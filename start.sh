#!/bin/bash

# Настройки микрофронта (жёстко зашиты)
NAME="portfolio"               # имя контейнера
IMAGE_DEV="portfolio-dev"     # имя образа для dev
IMAGE_PROD="portfolio-prod"   # имя образа для prod
PORT=3042                     # внешний порт (что открыто в браузере)
INTERNAL_PORT=3000            # порт, на котором слушает Next.js внутри контейнера
NETWORK="mf-network"          # имя docker-сети

# Определяем режим (dev/prod)
MODE=$1

if [ "$MODE" = "prod" ]; then
  DOCKERFILE="Dockerfile.prod"
  IMAGE="$IMAGE_PROD"
else
  DOCKERFILE="Dockerfile.dev"
  IMAGE="$IMAGE_DEV"
fi

# Создание сети, если её нет
if ! docker network ls | grep -q "$NETWORK"; then
  echo "🛠️  Создаю сеть '$NETWORK'..."
  docker network create "$NETWORK"
else
  echo "🌐 Сеть '$NETWORK' уже существует"
fi

# Сборка Docker-образа
echo "🔧 Собираю образ '$IMAGE' из '$DOCKERFILE'..."
docker build -f "$DOCKERFILE" -t "$IMAGE" .

# Запуск контейнера
echo "🚀 Запуск '$NAME' ($MODE) на http://localhost:$PORT ..."
docker run --rm --name "$NAME" \
  --network "$NETWORK" \
  -p "$PORT:$INTERNAL_PORT" \
  "$IMAGE"
