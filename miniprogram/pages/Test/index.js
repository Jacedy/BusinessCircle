Page({
  data: {
    msg: 'hellos',
    array: [1, 2, 3, 4, 5],
    view: 'MINA',
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    },
    count: 1
  },
  add(e) {
    this.setData({
      count: this.data.count + 1
    })
  },
  // 只有配置此函数，右上角菜单才会显示“转发”
  onShareAppMessage(Object) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  },
  onResize(res) {
    res.size.windowWidth // 新的显示区域宽度
    res.size.windowHeight // 新的显示区域高度
  },
  onPullDownRefresh() {
    // 需要在app.json的window选项中或页面配置中开启enablePullDownRefresh
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)

    // 当前页面路径
    console.log(this.route)

    // getCurrentPages() 函数用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面
    console.log(getCurrentPages())

    //  全局的应用实例
    // console.log(getApp())
  },
  sayGoodbye(name) {
    console.log(`Goodbye ${name} !`)

    try {
      wx.setStorageSync('key', 'value')
    } catch (e) {
      console.error(e)
    }

    wx.login({
      success(res) {
        console.log(res.code)
      },
    })
  },
})