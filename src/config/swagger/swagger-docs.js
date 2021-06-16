const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            title: "Api Amostra Toxicológica", 
            version: "1.0.0",
            description: "Api rest para teste toxicológico",
            servers: ["/amostra/api"]
        },
        securityDefinitions: {
            bearerAuth: {
              type: 'apiKey',
              name: 'Authorization',
              scheme: 'bearer',
              in: 'header'
            }
        }
    },
    apis: ["./src/rotas/*.js"],
};

const swaggerDocs = swaggerJSDoc(options);

module.exports = swaggerDocs;