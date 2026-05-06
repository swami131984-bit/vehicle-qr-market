const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

console.log('Starting server...');
console.log('PORT env:', process.env.PORT);
console.log('Will listen on PORT:', PORT);

app.get('/', (req, res) => {
    console.log('Root route hit');
    res.send('Hello from Railway!');
});

const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT}`);
});

server.on('error', (err) => {
    console.error('Server error:', err);
});
