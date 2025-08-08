#!/bin/bash

NAME="portfolio"
IMAGE_DEV="portfolio-dev"
IMAGE_PROD="portfolio-prod"
DOCKERFILE_DEV="Dockerfile.dev"
DOCKERFILE_PROD="Dockerfile.prod"

MODE=$1

if [ "$MODE" = "prod" ]; then
  IMAGE=$IMAGE_PROD
  DOCKERFILE=$DOCKERFILE_PROD
else
  IMAGE=$IMAGE_DEV
  DOCKERFILE=$DOCKERFILE_DEV
fi

echo "🔧 Собираю образ '$IMAGE' из '$DOCKERFILE'..."
docker build -f "$DOCKERFILE" -t "$IMAGE" .
