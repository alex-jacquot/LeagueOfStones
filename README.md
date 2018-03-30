## Start Server 

```
$ npm start
```

## Start mongoDB
### Windows

```
"C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe"
```

## Connexion à mongoDB
###Windows
```
"C:\Program Files\MongoDB\Server\3.6\bin\mongo.exe"
```
Server starts on localhost:8080

## API 

### GLOBAL

GET / 

GET /users/getAll

GET /cards/getAll 

### USERS

GET /users/subscribe 

GET /users/unsubscribe

GET /users/connect

GET /users/disconnect

GEt /users/amIConnected

### MATCH

GET /match/getMatch

GET /match/getAllMatch

GET /match/initDeck

GET /match/pickCard

GET /match/playCard

GET /match/attack

GET /match/attackPlayer

GET /match/endTurn

GET /match/finishMatch

### MATCHMAKING

GET /matchmaking/participate

GET /matchmaking/unparticipate

GET /matchmaking/getAll

GET /matchmaking/request

GEt /matchmaking/acceptRequest