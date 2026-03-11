#!/usr/bin/env bash

# Usage: ./deploy.sh [branch] [pm2_app_name] [port]

set -euo pipefail

BRANCH_NAME="${1:-production}"
APP_NAME="${2:-rumi77-ai-skin-care}"
APP_PORT="${3:-3000}"

export NODE_ENV=production
export PORT="$APP_PORT"

echo "Starting deployment"
echo "Branch: $BRANCH_NAME"
echo "PM2 app: $APP_NAME"
echo "Port: $APP_PORT"

if [ ! -d ".git" ]; then
  echo "Error: deploy.sh must run from the project root."
  exit 1
fi

echo "Fetching latest code from origin/$BRANCH_NAME"
git fetch --prune origin "$BRANCH_NAME"

if git show-ref --verify --quiet "refs/heads/$BRANCH_NAME"; then
  git checkout "$BRANCH_NAME"
else
  git checkout -b "$BRANCH_NAME" "origin/$BRANCH_NAME"
fi

git pull --ff-only origin "$BRANCH_NAME"

if ! command -v pnpm >/dev/null 2>&1; then
  echo "pnpm not found. Installing..."
  if command -v corepack >/dev/null 2>&1; then
    corepack enable
    corepack prepare pnpm@latest --activate
  else
    npm install -g pnpm
  fi
fi

if ! command -v pm2 >/dev/null 2>&1; then
  echo "pm2 not found. Installing..."
  npm install -g pm2
fi

echo "Installing dependencies"
if [ -f "pnpm-lock.yaml" ]; then
  echo "Lockfile found. Installing with frozen lockfile"
  pnpm install --frozen-lockfile
else
  echo "Warning: pnpm-lock.yaml not found. Falling back to a non-frozen install"
  echo "Commit pnpm-lock.yaml to keep production installs reproducible"
  pnpm install --no-frozen-lockfile
fi

echo "Building application"
pnpm run build

if pm2 describe "$APP_NAME" >/dev/null 2>&1; then
  echo "Restarting PM2 app: $APP_NAME"
  pm2 restart "$APP_NAME" --update-env
else
  echo "Starting PM2 app: $APP_NAME"
  pm2 start "pnpm start" --name "$APP_NAME" --update-env
fi

echo "Saving PM2 process list"
pm2 save

echo "Deployment completed successfully"
pm2 status "$APP_NAME"
 
