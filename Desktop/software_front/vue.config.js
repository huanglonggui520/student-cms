module.exports = {
	devServer: {
      proxy: {
      '/api': {// 匹配所有以 '/api1'开头的请求路径
        target: 'http://localhost:80',// 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: {'^/api': ''}
      },
      
      
    },
    disableHostCheck: true
  },
  lintOnSave: process.env.NODE_ENV !== 'production'
}