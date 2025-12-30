#!/bin/bash

# ----------------------------------------
# 🚀 Devmonix Auto Deployment Script
# Run this inside your repo folder
# ----------------------------------------

echo "🔄 Starting deployment process..."
set -e  # Exit immediately if any command fails

APP_NAME="devmonix"

echo "🧹 Cleaning old files..."
rm -rf node_modules
rm -f package-lock.json

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building Next.js app..."
npm run build

echo "🔁 Restarting PM2 service..."
pm2 restart "$APP_NAME" || pm2 start npm --name "$APP_NAME" -- run start

echo "✅ Deployment completed successfully!"

