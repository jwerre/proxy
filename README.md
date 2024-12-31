# Simple HTTP Proxy Server

This is a simple proxy server implementation that handles HTTP traffic. It acts as an intermediary between clients and target servers, allowing for traffic inspection and modification.

## Overview
This guide explains how to create and configure a .env file for setting up target URL and PORT variables.

## Steps

1. Create a new file named `.env` in your project's root directory

2. Add the following variables to your .env file:

## Installation

1. Clone the repository:
```bash
git clone git@github.com:jwerre/proxy.git
cd proxy
```

2. Install dependencies:
```bash
npm install
```

3. Configure environmental variables

	1. Copy `.env.example` to `.env`.
	3. change `PROXY_DOMAIN` to the desired proxy.

## How to Use

1. Run the proxy server using Node.js:
```bash
node server.js
```

2. Configure your client (browser/application) to use the proxy:
	- Host: localhost (or server IP)
	- Port: 80 (default)

## Technical Details

The proxy server works by directly proxying HTTP requests:
- Client connects to proxy
- Proxy forwards requests to target server
- Modifies headers as needed
- Returns responses to client

## Security Considerations

- Basic implementation without authentication
- Intended for development/testing purposes only
- No encryption/SSL support

