const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint de health
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
