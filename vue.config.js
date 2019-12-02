module.exports = {
  devServer : {
    proxy: 'https://localhost:44312/'
  },
  'lintOnSave': false,
  'transpileDependencies': [
    'vuetify'
  ]
}
