const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (like CSS, JS, images) from the current directory
app.use(express.static(path.join(__dirname)));

// --- API Routes ---
app.post('/api/generate', (req, res) => {
    // ... your QR generation logic ...
    res.json({ success: true });
});

// --- Important: The Catch-All Route ---
// This serves your admin.html for any request that isn't an API route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Server running on port ${PORT}`);
    console.log(`👉 Open https://${process.env.RAILWAY_PUBLIC_DOMAIN || 'localhost'}`);
});
