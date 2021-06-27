const theme = {
  chalk: {
    // 背景颜色
    backgroundColor: '#161522',
    // 标题文字颜色
    titleColor: '#FFFFFF',
    // 切换主题按钮的图片路径
    themeSrc: 'qiehuan_dark.png',
    // 头部的线条
    headerBorderSrc: 'header_border_dark.png',
    sellerAxisPointerColor: '#2D3443',
  },
  // 该主题未启用
  vintage: {
    backgroundColor: '#77ecdf',
    titleColor: "#000000",
    themeSrc: 'qiehuan_light.png',
    headerBorderSrc: 'header_border_light.png',
    sellerAxisPointerColor: '#133ce0',
  },
  westeros: {
    backgroundColor: '#8de2cd',
    titleColor: "#000000",
    themeSrc: 'qiehuan_light.png',
    headerBorderSrc: 'header_border_light.png',
    sellerAxisPointerColor: '#c22966',
  },
}


export function getThemeValue(themeName) {
  return theme[themeName]
}