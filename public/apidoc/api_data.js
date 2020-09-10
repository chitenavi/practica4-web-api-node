define({ "api": [
  {
    "type": "delete",
    "url": "/api/v1/adverts/:id",
    "title": "Delete an advert",
    "group": "Adverts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Advert id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"fail\",\n  \"code\": 404,\n  \"message\": \"Cast to ObjectId failed for value \\\"5f5a1e9e30fd0ba17c4110cbe\\\" at path \\\"_id\\\" for model \\\"Advert\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./server/controllers/advertController.js",
    "groupTitle": "Adverts",
    "name": "DeleteApiV1AdvertsId"
  },
  {
    "type": "get",
    "url": "/api/v1/adverts",
    "title": "List all adverts",
    "group": "Adverts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status response</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "requestedAt",
            "description": "<p>Request date/time</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "results",
            "description": "<p>Number of adverts</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.adverts",
            "description": "<p>Adverts's list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"requestedAt\": \"2020-09-10T10:55:52.067Z\",\n  \"results\": 8,\n  \"data\": {\n  \"adverts\": [\n       {\n           \"sale\": true,\n           \"tags\": [\n               \"lifestyle\",\n               \"motor\"\n           ],\n           \"_id\": \"5f59fc8f53bab60f7d995367\",\n           \"name\": \"Bicicleta\",\n           \"price\": 230.15,\n           \"tinyDescription\": \"Ut enim ad minim veniam, quis nostrud exercitation ullamco...\",\n           \"description\": \"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\n           \"image\": \"bici.jpg\"\n       }, ...\n     ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"fail\",\n  \"code\": 404,\n  \"message\": \"Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./server/controllers/advertController.js",
    "groupTitle": "Adverts",
    "name": "GetApiV1Adverts"
  },
  {
    "type": "get",
    "url": "/api/v1/adverts/:id",
    "title": "Find an advert",
    "group": "Adverts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Advert id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status response</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "requestedAt",
            "description": "<p>Request date/time</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.advert",
            "description": "<p>Advert data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"requestedAt\": \"2020-09-10T10:55:52.067Z\",\n  \"results\": 8,\n  \"data\": {\n      \"advert\": {\n          \"sale\": true,\n          \"tags\": [\n              \"lifestyle\",\n              \"motor\"\n            ],\n          \"_id\": \"5f59fc8f53bab60f7d995367\",\n          \"name\": \"Bicicleta\",\n          \"price\": 230.15,\n          \"tinyDescription\": \"Ut enim ad minim veniam, quis nostrud exercitation ullamco...\",\n          \"description\": \"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\n          \"image\": \"bici.jpg\",\n          \"__v\": 0\n      }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"fail\",\n  \"code\": 404,\n  \"message\": \"Cast to ObjectId failed for value \\\"5f5s9fc8f53bab60f7d995367\\\" at path \\\"_id\\\" for model \\\"Advert\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./server/controllers/advertController.js",
    "groupTitle": "Adverts",
    "name": "GetApiV1AdvertsId"
  },
  {
    "type": "get",
    "url": "/api/v1/adverts/tags/",
    "title": "Find all exist tags",
    "group": "Adverts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status response</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "requestedAt",
            "description": "<p>Request date/time</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "data.tags",
            "description": "<p>Adverts tags list in DB</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"requestedAt\": \"2020-09-10T10:55:52.067Z\",\n  \"data\": {\n  \"tags\": [\n       \"lifestyle\",\n       \"mobile\",\n       \"motor\",\n       \"work\"\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"fail\",\n  \"code\": 404,\n  \"message\": \"Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./server/controllers/advertController.js",
    "groupTitle": "Adverts",
    "name": "GetApiV1AdvertsTags"
  },
  {
    "type": "post",
    "url": "/api/v1/adverts/",
    "title": "Create an advert",
    "group": "Adverts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "image",
            "description": "<p>Advert file image (jpg/png)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Advert name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Advert price</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Advert description</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "sale",
            "description": "<p>Advert type (to sale:true, to buy: false)</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "tags",
            "description": "<p>Advert tags (work, mobile, lifestyle, motor)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"image\": \"telefono.jpg\",\n  \"name\": \"Telefono movil\",\n  \"price\": 234,\n  \"description\": \"ddfkedkfekfekfkekfekkek\",\n  \"sale\": \"false\",\n  \"tags\": \"mobile\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status response</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "requestedAt",
            "description": "<p>Request date/time</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.advert",
            "description": "<p>Advert data created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n{\n  \"status\": \"success\",\n  \"requestedAt\": \"2020-09-10T10:55:52.067Z\",\n  \"results\": 8,\n  \"data\": {\n      \"advert\": {\n          \"sale\": true,\n          \"tags\": [\n              \"lifestyle\",\n              \"motor\"\n            ],\n          \"createdAt\": \"2020-09-10T12:39:49.460Z\",\n          \"_id\": \"5f5a1e9e30f0ba17c4110cbe\",\n          \"name\": \"Telefono movil\",\n          \"price\": 234,\n          \"description\": \"ddfkedkfekfekfkekfekkek\",\n          \"tinyDescription\": \"ddfkedkfekfekfkekfekkek...\",\n          \"image\": \"image_1599741598878_20200812_115221.jpg\",\n          \"__v\": 0\n      }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"status\": \"fail\",\n  \"code\": 422,\n  \"message\": \"\\n- name: Product must have a name\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./server/controllers/advertController.js",
    "groupTitle": "Adverts",
    "name": "PostApiV1Adverts"
  },
  {
    "type": "put",
    "url": "/api/v1/adverts/:id",
    "title": "Update an advert",
    "group": "Adverts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Advert id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Advert name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Advert price</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"Telefono movil actualizado\",\n  \"price\": 154,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status response</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "requestedAt",
            "description": "<p>Request date/time</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.advert",
            "description": "<p>Advert data updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"requestedAt\": \"2020-09-10T10:55:52.067Z\",\n  \"results\": 8,\n  \"data\": {\n      \"advert\": {\n          \"sale\": true,\n          \"tags\": [\n              \"lifestyle\",\n              \"motor\"\n            ],\n          \"createdAt\": \"2020-09-10T12:39:49.460Z\",\n          \"_id\": \"5f5a1e9e30f0ba17c4110cbe\",\n          \"name\": \"Telefono movil actualizado\",\n          \"price\": 154,\n          \"description\": \"ddfkedkfekfekfkekfekkek\",\n          \"tinyDescription\": \"ddfkedkfekfekfkekfekkek...\",\n          \"image\": \"image_1599741598878_20200812_115221.jpg\",\n          \"__v\": 0\n      }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"status\": \"fail\",\n  \"code\": 422,\n  \"message\": \"Validation failed: price: An advert must have a price\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./server/controllers/advertController.js",
    "groupTitle": "Adverts",
    "name": "PutApiV1AdvertsId"
  }
] });
