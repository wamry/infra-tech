# Web

### Install packages on web project
run `yarn`

### Environment setup for web project
create `.env` file in project root directory
put these env values in it
```
  REACT_APP_BASE_URL=http://0.0.0.0:5000/api
  REACT_APP_SOCKET_URL=http://0.0.0.0:5050
```

### Run web project :rocket:
run `yarn docker:start`

-----------------------------------------------------------------

# Server

### Install packages on server project
run `cd server && yarn`

### Environment setup for server project
create `.env` file in ./server directory
put these env values in it
```
  PORT=5000
  SOCKET_PORT=5050
  MONGODB_USER=metroman
  MONGODB_PASS=metromanpassword
```

### Run server project :rocket:
run `cd server && yarn docker:start`

