# Web

### setup web project
run `yarn`

### setup web project env
create `.env` file in project root directory
put these env values in it
```
  REACT_APP_BASE_URL=http://0.0.0.0:5000/api
  REACT_APP_SOCKET_URL=http://0.0.0.0:5050
```

### run web project
run `yarn docker:start`

-----------------------------------------------------------------

# Server

### setup server project
run `cd server && yarn`

### setup server project env
create `.env` file in ./server directory
put these env values in it
```
  PORT=5000
  SOCKET_PORT=5050
  MONGODB_USER=metroman
  MONGODB_PASS=metromanpassword
```

### run server project
run `cd server && yarn docker:start`

