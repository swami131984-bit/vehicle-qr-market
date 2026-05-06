const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Log every request
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Root route – return plain text
app.get('/', (req, res) => {
    res.send('Hello from Railway! Your QR app is live.');
});

// Admin route – will serve your admin.html later
app.get('/admin.html', (req, res) => {
    res.send('<h1>Admin panel coming soon</h1>');
});

// Debug route
app.get('/debug', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
});

// Start server on all interfaces
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Server running on port ${PORT}`);
    console.log(`👉 Open https://${process.env.RAILWAY_PUBLIC_DOMAIN || 'localhost'}`);
});

// Global error handler
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});
