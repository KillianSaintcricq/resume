# Selectable tags

## About

This is a react-based component with:
* a list of tags
* a list of elements related to the tags

When a tag is selected, the elements related to the tag are shown. When it is unselected, they are hidden.

## Getting started

Go to the project root and run:

    npm install
    mongod --dbpath your_mongo_data_storage_path
    mongo < scripts/data.mongo
    nodemon

In production, run:

    SET NODE_ENV=production
    SET MONGO_URI=your_mongo_uri
    npm install
    npm start