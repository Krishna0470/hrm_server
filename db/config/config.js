module.exports={
  "development": {
    "database": {
      "url": "mongodb://localhost/mongoose_dev",
      "options": {
        "useNewUrlParser": true
      }
    }
  },
  "test": {
    "database": {
      "url": "mongodb://localhost/mongoose_test",
      "options": {
        "useNewUrlParser": true
      }
    }
  },
  "production": {
    "database": {
      "protocol": "mongodb",
      "username": "root",
      "password": "password",
      "name": "database_production",
      "host": "localhost",
      "port": "",
      "options": {
        "useNewUrlParser": true
      }
    }
  }
}