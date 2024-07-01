const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const calculateMaxDraws = require('./logic');
const app = express();
const port = 3000;

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Go Game Score API',
      version: '1.0.0',
      description: 'API to calculate maximum number of draws in Go game scores'
    },
    basePath: '/'
  },
  apis: ['./index.js']
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /{p1}/{p2}/{p3}:
 *   get:
 *     summary: Get the maximum number of draws
 *     parameters:
 *       - name: p1
 *         in: path
 *         required: true
 *         type: integer
 *         description: Points of player 1
 *       - name: p2
 *         in: path
 *         required: true
 *         type: integer
 *         description: Points of player 2
 *       - name: p3
 *         in: path
 *         required: true
 *         type: integer
 *         description: Points of player 3
 *     responses:
 *       200:
 *         description: JSON object with maximum number of draws
 */
app.get('/:p1/:p2/:p3', (req, res) => {
  const { p1, p2, p3 } = req.params;
  const maxDraws = calculateMaxDraws(parseInt(p1), parseInt(p2), parseInt(p3));
  res.json({ max_draws: maxDraws });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
