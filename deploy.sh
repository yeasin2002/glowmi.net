#!/bin/bash

# Deployment script for Ubuntu VPS
# Usage: ./deploy.sh

set -e  # Exit on error

# Configuration
BRANCH_NAME="coming-soon"
APP_NAME="coming-soon"

echo "🚀 Starting deployment for branch: $BRANCH_NAME"

# Stop existing PM2 process
echo "⏹️  Stopping PM2 process: $APP_NAME"
pm2 stop "$APP_NAME" 2>/dev/null || echo "No process to stop"

echo "⏹️ Deleting All Services"
pm2 delete all || echo "No process to delete"

# Pull latest changes
echo "📥 Pulling latest changes from git"
git pull origin "$BRANCH_NAME"

# Install dependencies
echo "📦 Installing dependencies with pnpm"
pnpm install --frozen-lockfile

# Build the application
echo "🔨 Building Next.js application"
pnpm run build

# Start with PM2
echo "▶️  Starting application with PM2"
pm2 start npm --name "$APP_NAME" -- start

# Save PM2 configuration
echo "💾 Saving PM2 configuration"
pm2 save

echo "✅ Deployment completed successfully!"
echo "📊 View logs: pm2 logs $APP_NAME"
echo "📈 View status: pm2 status"
 