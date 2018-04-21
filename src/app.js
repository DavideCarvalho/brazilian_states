const app = require('./config/express.js')();

const porta = process.env.PORT || 3000;

app.listen(porta, () => console.log(`Server running on port ${porta}`));
