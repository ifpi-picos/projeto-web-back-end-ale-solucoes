import express, { Application, Request, Response } from 'express';
import routes from '../../main/config/routes';
import rateLimit from 'express-rate-limit';
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from "../../../swagger.json";

export const setupApp = () => {
    const app: Application = express();
    
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // app.use(loggerHttp);

  // Apply the rate limiting middleware to all requests
  app.use(
    rateLimit({
      windowMs: 1 * 60 * 1000, // 3 minutes
      max: 100, // Limit each IP to 100 requests per `window` (here, per 1 minutes)
      message: {
        response: 'error',
        message: 'Too many requests, please try again later. 😰',
        data: {},
      },
    })
  );
  
  /*app.use('/', ()=>{
      console.log('sdjguih')
  })*/
  app.use('/api', routes);

  app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

    // add routing for / path
    /* app.get('/', (request: Request, response: Response) => {
        response.json({
          response: 'successfull',
          message: 'Hello World 🌍',
          data: {},
        });
      }); */
    
      // not found

      app.use((_: Request, response: Response) => {
        response.status(404).json({
          response: 'error',
          message:
            'Not Found. Ohh you are lost, read the API documentation to find your way back home 😂',
          data: {},
        });
      });

      
    
      return app;
}