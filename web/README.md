## Build and run
### For deployment
```bash
# build
docker compose -f docker-compose-deploy.yml build

# run
docker compose -f docker-compose-deploy.yml up

# build and run
docker compose -f docker-compose-deploy.yml up --build
```
### For development
```bash
# run
docker compose up

# build and run (When you modify the Dockerfile or install a new package)
docker compose up --build
```

### Install new pacakge
```bash
docker compose run --rm <frontend/backend> npm install <package>
```