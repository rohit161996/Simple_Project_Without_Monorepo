## Manual Installation
- Install nodejs locally
- Clone the repo
- Install the dependency (npm install)
- Start the DB Locally
  - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
  - Go to neon.tech and get yourself a new DB
- Change the .env file and update DB credentials
- npx prisma migrate
- npx prisma generate
- npm run build
- npm run start

## Docker Installation
- Install docker
- Start postgres - `docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres`
- Build the image - `docker build -t user-project .`
- Start the image's instance i.e. container - `docker run -p 3000:3000 user-project`

## Docker Compose
- Install docker, docker-compose
- Run `docker-compose up`

