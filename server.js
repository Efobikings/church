const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Normalize paths to prevent double 'features/' issues
app.use((req, res, next) => {
    // Remove duplicate 'features/features/' by redirecting to correct path
    if (req.path.includes('/features/features/')) {
        const correctedPath = req.path.replace(/\/features\/features\//, '/features/');
        return res.redirect(correctedPath);
    }
    next();
});

// Handle specific routes
app.get(['/', '/index.html'], (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/features/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'features', 'about.html'));
});

app.get('/features/gallery.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'features', 'gallery.html'));
});

app.get('/features/donation.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'features', 'donation.html'));
});

app.get('/features/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'features', 'contact.html'));
});

// Fallback for hash-based routes or invalid paths
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});