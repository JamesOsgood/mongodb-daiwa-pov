MONGODB_URI=mongodb+srv://daiwatest:vzLtMB9qpWDA9Cmv@daiwatest-ifxxs.mongodb.net/daiwaCM
MONGOIMPORT=/usr/local/m/versions/4.2.1-ent/bin/mongoimport
DATA_DIR=/Users/james/Downloads/Dataset-DCME

$MONGOIMPORT --collection users --drop --type JSON --file $DATA_DIR/mongoUsers13942526411415162384.txt --uri $MONGODB_URI

$MONGOIMPORT --collection trades --drop --type JSON --file $DATA_DIR/mongoTrades15246162398814616722.txt --uri $MONGODB_URI

$MONGOIMPORT --collection securities --drop --type JSON --file $DATA_DIR/mongoSecurities5661706666748333823.txt --uri $MONGODB_URI

$MONGOIMPORT --collection orgs --drop --type JSON --file $DATA_DIR/mongoOrgs8593877481785797051.txt --uri $MONGODB_URI

$MONGOIMPORT --collection books --drop --type JSON --file $DATA_DIR/mongoBooks4305245223687744504.txt --uri $MONGODB_URI

$MONGOIMPORT --collection accounts --drop --type JSON --file $DATA_DIR/mongoAccounts726970992639556812.txt --uri $MONGODB_URI

