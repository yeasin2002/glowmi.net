## Production Auto Deploy (GitHub Actions)

### Trigger

- Every push to `production` branch automatically redeploys to VPS.
- You can also trigger manually from GitHub Actions (`Deploy To VPS` workflow).

### One-time VPS setup

```bash
cd /home/ubuntu/rumi77-ai_skin_care-jvai
chmod +x deploy.sh
```

### Required GitHub Secrets

- `SSH_HOST` (or `VPS_HOST`)
- `SSH_USERNAME` (or `VPS_USERNAME`)
- `SSH_PRIVATE_KEY` (recommended) or `SSH_PASSWORD`
- `SSH_PORT` (optional, default `22`)
- `APP_DIR` (example: `/home/ubuntu/rumi77-ai_skin_care-jvai`)
- `PM2_APP_NAME` (example: `rumi77-ai-skin-care`)
- `APP_PORT` (example: `3000`)

### Deploy flow

1. Push code to `production` branch.
2. GitHub Action connects to VPS via SSH.
3. Workflow runs:
   - `./deploy.sh production <PM2_APP_NAME> <APP_PORT>`
4. Script pulls latest code, installs deps, builds app, and restarts PM2 app.
