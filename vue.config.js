module.exports = {
      publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
    // 输出文件目录
    outputDir: 'dist',
    // webpack-dev-server 相关配置
    devServer: {
    port: 8080
    },  
  lintOnSave:false,
//     configureWebpack: {
//       devServer: {
//           proxy: {
//               '/proxy': {
//                   target: 'http://192.168.0.80/teacher',
//                   changeOrigin: true,//改变源
//                   ws: true,//跨域
//                   pathRewrite: {
//                       '^/proxy':''
//                   }
//               }
//           }
//       }
//   }
};
