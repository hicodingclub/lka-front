# lka


## Create a .env in the project root directory for your development environment. Example:

For example. put a new file in your project directory: /home/ubuntu/projects/lka/.env, with content:

```
NODE_ENV=development

PORT=3000
ADMIN_PORT=3001
LISTENING_ADDR=0.0.0.0

MONGODB_URL=<your mongodb url> 
```

An example of the MONGODB_URL is: 

```
MONGODB_URL=mongodb://lkauser:lkauser1@ds143683.mlab.com:43683/lka
```

## Create a .env file in the project root directory for your production environment. Example:

```
NODE_ENV=production

PORT=80
ADMIN_PORT=8080
LISTENING_ADDR=0.0.0.0

MONGODB_URL=<your mongodb url>

```