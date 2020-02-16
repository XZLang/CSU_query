// pages/index/calender/calender.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    school: ['信息院', '地信院', '资安院', '资生院', '冶环院', '材料院', '粉冶院', '机电院', '能源院', '交通院', '土木院', '数统院','物理院','化工院','商学院','文新院','外语院','建艺院','法学院','马院','软件学院','航空航天学院','公共管理学院','体育教研部','湘雅医学院','基础医学院','口腔医学院','湘雅公共卫生学院','湘雅护理学院','药学院','生命科学学院','信息安全与大数据研究院'],
   
    index: 0,
    urls: [
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0017.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0004.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0007.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0008.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0010.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0012.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0013.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0015.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0021.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0023.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0025.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0027.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0029.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0031.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0033.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0036.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0037.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0039.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0042.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0043.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0044.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0045.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0046.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0047.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0048.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0051.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0052.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0053.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0054.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0055.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0056.jpg",
      "http://cdn.54sh.so-on.cn/public/xiaoli/image/0057.jpg"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  bindPickerChange(e) {

    console.log('picker发送选择改变，携带下标为', e.detail.value)
    this.setData({
      index: e.detail.value,

    })
    var index = this.data.index
    console.log('picker发送选择改变，携带值为', this.data.school[index])


  },
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