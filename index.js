const app = require('./src/server');

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  err ? console.log('Error in the Server') : console.log(`Server is running on port ${PORT}`);
});