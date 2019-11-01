//userInfo.js
var userInfoData = require('../../data/userInfo-data.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      posts_key: userInfoData.postList
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    //转发时携带 shareTicket才能在回调中获取到shareTickets
    wx.showShareMenu({
      withShareTicket: true
    })
    return {
      title: '转发时显示的标题',
      path: '转发的页面路径',
      success: function (res) {
        console.log('--- 转发回调 ---', res);
        //onShareAppMessage回调的shareTickets，如果没有，就说明不是转发到群聊的
        console.log('--- shareTickets ---', res.shareTickets);
        //转发到群里的才会有shareTickets
        if (res.shareTickets && res.shareTickets[0]) {
          //获取转发的详细信息
          wx.getShareInfo({
            shareTicket: res.shareTickets[0],
            success: function (res) {
            },
            fail: function (error) {
            }
          })
        }
      },
      fail: function (error) {
      }
    }
  }


})