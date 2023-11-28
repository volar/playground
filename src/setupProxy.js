const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function SetupProxy(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://npiregistry.cms.hhs.gov/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api',
      },
      onProxyReq: (proxyReq) => {
        // Forward all request parameters to the target server
        // const queryString = Object.keys(req.query)
        //   .map((key) => `${key}=${encodeURIComponent(req.query[key])}`)
        //   .join('&');

        // proxyReq.path += `?${queryString}`;

        // Construct the full URL with protocol and domain
        const fullUrl = `${proxyReq.protocol}://${proxyReq.host}${proxyReq.path}`;
        console.log('Proxying to:', fullUrl); // eslint-disable-line no-console
      },
    })
  );
};
