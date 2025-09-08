# Platform

## Table of Contents
1. Install
1. Containers
1. Dev vs Prod
1. Certbot

---
## 1. Install
#### Dev
1. copy `pb_data` from the backup to `PocketBase/dev_DB/`
1. #todo env files
1. build images and run containers:
    ```bash
    sudo docker compose -f docker-compose.yaml up --build
    ```
1. git push updates (#todo CI/CD)

---
#### Prod
0. git pull updates (#todo CI/CD)
1. copy `pb_data` from the backup to `PocketBase/production_DB/`
1. copy `letsencrypt` folder from backup to `shared-volumes` or manually run certbot-init to generate it
1. #todo env files
1. build images and run containers:
    ```bash
    sudo docker compose -f docker-compose.prod.yaml up --build -d
    ```


---
## 2. Containers
Everything is containerized and managed by docker compose.

---
## 3. Dev vs Prod
Most container's Dockerfile is built with sections:

```docker
# ------------
FROM base AS dev

# ------------
FROM base AS prod
```

...and separate docker-compose.yaml files instructs them.

For dev work, we always use the `docker-compose.yaml` while for production, the `docker-compose.prod.yaml`.
### Dev

#### Svelte
Runs the dev server inside a dev container, with open ports for dev server and vite's HMR web socket. Always have to rebuild it on `npm` package updates.

#### PocketBase
It it the database, where we update schema, drop collections and create them. We work with fake records mostly. When anything changes in schema, it auto generates a migration file, which we inlude in the git commits.

#### Nginx
Nginx exposes the:
- vite dev server on `/`
- dev database admin UI on `/db`
- database api on `/db/api`.

---
### Prod

#### Svelte
Installs, builds and runs the backend server.

#### PocketBase
It's the exact copy of the Dev database in schemas and collections. But not in records. Auto migrates the files when codebase is updated.

#### Nginx
Nginx redirect any HTTP traffic to HTTPS.
Nginx exposes the:
- webapp on `/`
_nothing else yet_

---
## 4. Certbot
Certbot and HTTPS are only present in the production codebase.

`docker-compose.prod.yaml` use two Certbot services:
- certbot-init (skipped on launch)
- certbot-renewal

The certbot-renewal checks the certificate every 12 hours and renew it if the deadline is coming.

#### Manualy run init:
The certbot-init is needed to generate a certificate from zero, so it's skipped from running every time. Manually have to run it:

```bash
# stop the services if running
docker compose down -v

# run certbot-init and nginx only
docker compose up nginx certbot-init

# files generated, run the whole thing again
docker compose down -v
docker compose -f docker-compose.prod.yaml up -d
```