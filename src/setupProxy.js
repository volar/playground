const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://npiregistry.cms.hhs.gov/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api',
      },
      onProxyReq: (proxyReq, req) => {
        // Forward all request parameters to the target server
        // const queryString = Object.keys(req.query)
        //   .map((key) => `${key}=${encodeURIComponent(req.query[key])}`)
        //   .join('&');

        // proxyReq.path += `?${queryString}`;

        // Construct the full URL with protocol and domain
        const fullUrl = `${proxyReq.protocol}://${proxyReq.host}${proxyReq.path}`;
        console.log('Proxying to:', fullUrl);
      },
    })
  );
};
