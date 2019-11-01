//homePage.js
var postsData = require('../../../data/posts-data.js')
Page({
  data: {
    addflag: true,  //判断是否显示搜索框右侧部分
    searchstr: '',
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    this.setData({
      posts_key: postsData.postList
    })
  },
  onShow() {

  },

  tap(e) {

  },

  // 搜索框右侧 事件
  addhandle() {
    console.log('触发搜索框右侧事件')
  },

  //搜索框输入时触发
  searchList(ev) {
    let e = ev.detail;
    this.setData({
      searchstr: e.detail.value
    })
  },
  //搜索回调
  endsearchList(e) {
    console.log('查询数据')
  },
  // 取消搜索
  cancelsearch() {
    this.setData({
      searchstr: ''
    })
  },
  //清空搜索框
  activity_clear(e) {

    this.setData({
      searchstr: ''
    })
  },


})