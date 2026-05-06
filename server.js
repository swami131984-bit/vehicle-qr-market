const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// A simple route
app.get('/', (req, res) => {
  res.send('Hello from Railway! Your app is alive.');
});

// Another test route
app.get('/admin.html', (req, res) => {
  res.send('<h1>Admin Panel Test</h1><p>Static routes are working.</p>');
});

// Start the server, listening on all interfaces
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
});
