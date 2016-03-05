# Selectable tags

## About

This is a react-based component compounded with:
* a list of tags
* a list of elements related to the tags

When a tag is selected, the elements related to the tag are shown. When it is unselected, they are hidden.

## Getting started

How to start the application in development

    npm install
    mongod --dbpath your_mongo_data_storage_path
    nodemon

How to start the application in production

    SET NODE_ENV=production
    SET MONGO_URI=your_mongo_uri
    npm install
    npm start