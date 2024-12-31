const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require('morgan');
require('dotenv').config();
const PROXY_DOMAIN = process.env.PROXY_DOMAIN;
const PORT = process.env.PORT || 80;

if (!PROXY_DOMAIN || !PROXY_DOMAIN.match(/^https?:\/\/.+/)) {
  console.error('Error: PROXY_DOMAIN must be defined and be a valid URL');
  process.exit(1);
}

const app = express();

// Logging middleware
app.use(morgan('combined'));

const proxyConfig = {
	target: PROXY_DOMAIN,
	changeOrigin: true,
	ws: true, // Enable WebSocket proxying
	onError: (err, req, res) => {
		res.writeHead(500, {
			'Content-Type': 'text/plain',
		});
		res.end('Proxy error: ' + err);
	},
};

// Apply proxy to all routes
app.use('/', createProxyMiddleware(proxyConfig));

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});