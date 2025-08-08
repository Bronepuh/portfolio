#!/bin/bash

# Имя контейнера
NAME="portfolio"  # поменяй на host / marketing по проекту

# Проверка, существует ли контейнер (в любом состоянии)
if docker ps -a --format '{{.Names}}' | grep -q "^$NAME$"; then
  echo "🛑 Останавливаю контейнер $NAME..."
  docker stop "$NAME" 2>/dev/null || true

  echo "🧹 Удаляю контейнер $NAME..."
  docker rm "$NAME" 2>/dev/null || true
else
  echo "ℹ️ Контейнер $NAME не существует"
fi
