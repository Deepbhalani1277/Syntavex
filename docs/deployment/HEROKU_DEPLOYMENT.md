# Syntavex — Heroku Deployment Guide

This guide provides simple, step-by-step instructions to deploy the Syntavex web application to your existing Heroku account ($13/month plan) at ₹0 incremental cost.

---

## 1. Prerequisites
* **Git**: Installed on your system.
* **Heroku CLI**: Installed (`npm install -g heroku` or downloaded from heroku.com).
* **Heroku Account**: Logged in via `heroku login`.

---

## 2. Deploy in 4 Simple Commands

Open PowerShell in the project directory (`e:\startup\Syntavex`):

### Step 1: Initialize Git Repository (if not already done)
```powershell
git add .
git commit -m "feat: complete Syntavex production-grade website"
```

### Step 2: Create or Link Your Heroku App
* If creating a new app on your Heroku account:
  ```powershell
  heroku create syntavex-web
  ```
  *(or your desired app name)*
* If linking to an existing app already created in your Heroku dashboard:
  ```powershell
  heroku git:remote -a <your-app-name>
  ```

### Step 3: Deploy to Heroku
```powershell
git push heroku master
```
*(or `git push heroku main` depending on your active branch name)*

### Step 4: Open Live Web Application
```powershell
heroku open
```

---

## 3. Custom Domain Configuration (Optional)
When you purchase a custom domain (e.g., `syntavex.com`), link it to your Heroku app:
```powershell
heroku domains:add syntavex.com
heroku domains:add www.syntavex.com
```
Then add the DNS CNAME records provided by Heroku into your domain registrar (Cloudflare, Namecheap, GoDaddy, etc.). Automatic SSL certificate management (ACM) is enabled by default on Heroku paid tiers.

---

## 4. Verification & Health Check
* Heroku automatically reads the [`Procfile`](file:///e:/startup/Syntavex/Procfile) (`web: node server.js`).
* The Node runtime automatically binds to the dynamic `$PORT` environment variable provided by Heroku.
* All security headers (CSP, X-Frame-Options, X-Content-Type-Options) are automatically injected.
