## Build and run
### For deployment
#### build
```bash
docker compose --profile deploy build
```
#### run
```bash
docker compose --profile deploy up
```
#### build and run
```bash
docker compose --profile deploy up --build
```

### For development
##### run
```bash
docker compose --profile dev up
```
#### build and run (When you modify the Dockerfile or install a new package)
```bash
docker compose --profile dev up --build
```

### Install new pacakge
```bash
docker compose run --rm <frontend-dev/backend-dev> npm install <package>
```