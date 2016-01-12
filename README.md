# Resume

How to start the application in development

    npm install
    mongod --dbpath your_mongo_data_storage_path
    nodemon

How to start the application in production

    SET NODE_ENV=production
    SET MONGO_URI=your_mongo_uri
    npm install
    npm start