# Hostel Recommendation System

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/prashantoolee7-gmailcoms-projects/v0-hostel-recommendation-system-4a)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/nPpDJr8H4ob)

## Overview

This repository will stay in sync with your deployed chats on [v0.dev](https://v0.dev).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.dev](https://v0.dev).

## Deployment

Your project is live at:

**[https://vercel.com/prashantoolee7-gmailcoms-projects/v0-hostel-recommendation-system-4a](https://vercel.com/prashantoolee7-gmailcoms-projects/v0-hostel-recommendation-system-4a)**

## Build your app

Continue building your app on:

**[https://v0.dev/chat/projects/nPpDJr8H4ob](https://v0.dev/chat/projects/nPpDJr8H4ob)**

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## CI/CD

This project includes a simple GitHub Actions pipeline in `.github/workflows/cicd.yml`.

- `sonarqube` job runs the code quality scan and waits for the quality gate result
- `docker` job builds the Docker image and pushes it to Docker Hub only after SonarQube passes

Set these GitHub repository secrets:

- `SONAR_HOST_URL`
- `SONAR_TOKEN`
- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`

## VM Deployment

The VM does not need to be called by GitHub Actions. The pipeline only pushes the latest image to Docker Hub.

On the VM:

- use `docker-compose.prod.yml` to run the app from Docker Hub
- set `DOCKERHUB_USERNAME` in the VM shell or `.env`
- run `scripts/update-vm.sh` to pull the latest image and restart the app

Example cron entry on the VM:

`*/5 * * * * cd /path/to/finalhostel && DOCKERHUB_USERNAME=your-dockerhub-user /bin/bash scripts/update-vm.sh >> /var/log/finalhostel-update.log 2>&1`
