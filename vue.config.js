const now = Date.now()

let configuracao = {
  transpileDependencies: [
    'vuetify'
  ]
}

if (process.env.NODE_ENV === 'production') {
  configuracao.configureWebpack = config => {
    config.output.filename = `js/[name].[contenthash:8].${now}.min.js`
    config.output.chunkFilename = `js/[name].[contenthash:8].${now}.min.js`
  }

  configuracao.css = {
    extract: {
      filename: `css/[name].[contenthash:8].${now}.css`,
      chunkFilename: `css/[name].[contenthash:8].${now}.css`
    }
  }
}

module.exports = configuracao
