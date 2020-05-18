cat Output/darwin/run.log | grep /mongoimport > Output/darwin/ingest.tmp
cut -c 31- Output/darwin/ingest.tmp > ingest.sh
chmod +x ingest.sh