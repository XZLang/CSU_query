// pages/index/com/com.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    
  },
  userNameInput: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  userIDInput: function (e) {
    this.setData({
      userID: e.detail.value
    })
  },
  usernumInput: function (e) {
    this.setData({
      usernum: e.detail.value
    })
  },
  loginBtnClick: function (e) {
    console.log("姓名：" + this.data.userName + " 身份证号：" + this.data.userID  + "考次：" + this.data.usernum);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://wechat.geebos.cn:8082/service/getCmpScore/',
      data:{
       
        "sfzh": "320112199904071618",
         "xm":"徐然",
         "kc":"51",
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        console.log(res.data)
        that.setData({
          wlist: res.data.schedule_list[1],


        })
      }
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

  }
})