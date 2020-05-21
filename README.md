# mongodb-daiwa-pov

We have put together a series of scripts to ingest the sample data as provided, along with some aggregations to show how it can be transformed

All scripts have versions for running against a local mongodb or Atlas. For the Atlas version, set up a cluster ( an M0 is fine ) and replace the connection string in the script with the one from Atlas.

## Ingest

Either run the ingest_atlas.sh or ingest_local.sh script in the `1_ingest` directory to ingest the .json files provided. 

It uses the MongoDB tool, mongoimport, which can be downloaded from https://www.mongodb.com/try/download/database-tools

You'll need to edit the `MONGOIMPORT` script variable to point to where you have extracted the download

Also, edit the `DATA_DIR` variable to point to the directory that contains the data

## Stage

The scripts in the `2_stage` directory are examples of how to reformat the data using the [MongoDB Aggregation Framework](https://docs.mongodb.com/manual/aggregation/)

Change the connection string in stage_atlas.sh to run against your Atlas cluster

## Aggregations

The scripts in the `3_aggregate` directory are examples of how use the aggregation framework to run queries against the transformed data, including using [$graphLookup](https://docs.mongodb.com/manual/reference/operator/aggregation/graphLookup/) to traverse the hierarchy of organisations.

These can be run using the script or by using [MongoDB Compass](https://www.mongodb.com/try/download/compass)