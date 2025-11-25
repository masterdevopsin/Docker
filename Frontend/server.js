const express = require('express');
 const path = require('path');
 const app = express();
const PORT = process.env.PORT || 3000;
 // 1) Serve everything in /public as static files (css, js, images, html)
 app.use(express.static(path.join(__dirname, 'public')));
 // 2) Optional: explicit routes that send specific HTML files
 // (useful when you want server-side logic before serving)
 app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, 'public', 'index.html'));
 });
 app.get('/about', (req, res) => {
 res.sendFile(path.join(__dirname, 'public', 'about.html'));
 });
 // 404 fallback for non-file routes (if you want)
 app.use((req, res) => {
 res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
 });
 app.listen(PORT, () => {
 console.log(`Server running on http://localhost:${PORT}`);
 });
