# Tickets

## Install requirements

- Node: `brew install node`
- Yarn: `brew install yarn`
- MySQL: `brew install mysql && brew services start mysql`

## Install dependencies

### Server (Rails)

`bundle install`

### Client (React)

`cd client && yarn install`

## Initialize database

`bundle exec rake db:setup`

## Run the code base

`foreman start -p 3000`

### Accesing via the web browser

| Portal | URL | Email | Password |
|--------|-----|-------|----------|
| Customer |[http://localhost:3000](http://localhost:3000)| `customer@tickets.com` | `Secret!` |
| Agent |[http://localhost:3000](http://localhost:3000)| `agent@tickets.com` | `Secret!` |
| API |[http://localhost:3100/api](http://localhost:3100/api)| `customer@tickets.com` | `Secret!` |
| Admin |[http://localhost:3100/admin](http://localhost:3100/admin)| `admin@tickets.com` | `Secret!` |

## Running tests

### Server

`bundle exec rspec spec`

### Client

`cd client && CI=true yarn test`
