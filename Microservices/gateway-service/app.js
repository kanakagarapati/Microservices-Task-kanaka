const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Optional fallback root
app.get('/', (req, res) => {
  res.send('Gateway Service Running');
});

app.listen(PORT, () => {
  console.log(`Gateway Service listening on port ${PORT}`);
});
