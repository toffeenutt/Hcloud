## Build and run
### For deployment
```bash
# build
docker compose --profile deploy build

# run
docker compose --profile deploy up

# build and run
docker compose --profile deploy up --build
```
### For development
```bash
# run
docker compose --profile dev up

# build and run (When you modify the Dockerfile or install a new package)
docker compose --profile dev up --build
```

### Install new pacakge
```bash
docker compose run --rm <frontend-dev/backend-dev> npm install <package>
```