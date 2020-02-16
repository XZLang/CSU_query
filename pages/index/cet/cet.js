// pages/index/cet/cet.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
      username:"",
      userID:"",
      cet:"",
      usernum:""
    
  },
  userNameInput:function(e)
  {
  this.setData({
  userName: e.detail.value
  })
  },
  userIDInput:function(e)
  {
  this.setData({
  userID: e.detail.value
  })
  },
  cetInput: function(e) {
    this.setData({
      cet: e.detail.value
  })
  },
  usernumInput: function (e) {
    this.setData({
      usernum: e.detail.value
    })
  },
  loginBtnClick: function (e) {
    console.log("用户名：" + this.data.userName + " 学号：" + this.data.userID);
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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