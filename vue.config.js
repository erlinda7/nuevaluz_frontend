module.exports = {
    publicPath: './',
    // baseUrl: '.',
    assetsDir: './assets',
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
      proxy: {
        '': {
          //target: 'http://localhost:3000',
          target: 'https://nuevaluz-backend-pg.herokuapp.com',
          ws: false,
          changeOrigin: true,
        },
      },
    },
  };