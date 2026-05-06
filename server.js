const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// 1. Serve static files (like your admin.html)
app.use(express.static(path.join(__dirname))); 

// 2. A simple route for debugging
app.get('/debug', (req, res) => {
    res.send('Server is running correctly!');
});

// 3. Define your API routes
app.post('/api/generate', (req, res) => {
    // ... your QR generation logic ...
    res.json({ success: true });
});

// 4. CATCH-ALL ROUTE: This is the crucial part.
// It will serve your admin.html for any unmatched route.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
