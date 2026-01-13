#!/bin/bash

NAME="portfolio"
IMAGE_DEV="portfolio-dev"
IMAGE_PROD="portfolio-prod"
DOCKERFILE_DEV="Dockerfile.dev"
DOCKERFILE_PROD="Dockerfile.prod"

MODE=${1:-dev}  # По умолчанию 'dev', если не указан аргумент

if [ "$MODE" = "prod" ]; then
  IMAGE=$IMAGE_PROD
  DOCKERFILE=$DOCKERFILE_PROD
  echo "🚀 Собираю PRODUCTION образ '$IMAGE' из '$DOCKERFILE'..."
else
  IMAGE=$IMAGE_DEV
  DOCKERFILE=$DOCKERFILE_DEV
  echo "🔧 Собираю DEVELOPMENT образ '$IMAGE' из '$DOCKERFILE'..."
fi

# Используем BuildKit для ускорения сборки
DOCKER_BUILDKIT=1 docker build -f "$DOCKERFILE" -t "$IMAGE" .