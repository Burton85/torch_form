module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // 打包時預設的相對路徑
  outputDir: 'dist', // 打包的目錄名稱
  filenameHashing:false,
  devServer: {
    // 開發環境下將 API 請求代理到 API 伺服器
    // proxy: {
    //   '^/api': {
    //     target: '',
    //     ws: true,
    //     changeOrigin: true
    //   }
    // }
  },
  css: {
    extract: true //生產環境下是 true，開發環境下是 false // 是否將元件中的 CSS 提取至一個獨立的 CSS 檔案中 (而不是動態注入到 JavaScript中的inline程式碼)
  }
}
