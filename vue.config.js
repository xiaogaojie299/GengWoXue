module.exports = {
  // chainWebpack: (config) => {
  //   config.module
  //     .rule("css")
  //     .test(/\.css$/)
  //     .oneOf("vue")
  //     .resourceQuery(/\?vue/)
  //     .use("px2rem")
  //     .loader("px2rem-loader")
  //     .options({
  //       remUnit: 192, //代表的是 1rem = ？px  这里假设设计稿是 1920px ，那么这里的比例就是 1/10
  //     })
  //     .end();
  // },
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
