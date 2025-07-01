const http = require('http');

const port = 8090;

// Create a server
const server = http.createServer((req, res) => {

    const url = req.url; // 

    if (url === '/') {
        res.end('🏠 Welcome to the Home Page!');
    } 
    else if (url === '/about') {
        res.end('📘 This is the About Page!');
    } 
    else if (url === '/contact') {
        res.end('📞 Contact us on the Contact Page!');
    } 
    else {
        res.statusCode = 404;
        res.end('❌ 404 - Page Not Found!');
    }
});

// Start 
server.listen(port, () => {
    console.log(`✅ Server is running at http://localhost:${port}`);
});
