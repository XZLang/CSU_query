// pages/index/classroom/classroom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    build: ['新校区A座', '新校区B座', '新校区C座', '新校区D座', '铁道第二综合楼', '铁道世纪楼', '铁道创业南楼', '铁道攀登楼', '校本部升华前楼','校本部科教南楼','校本部科教北楼','湘雅教学楼'],
    code:['500137','500138','500139','500140','500157','500166','500167','500168','500153','500154','500155','500156'],
    objectbuild: [
  
        {
          id: 0,
          name: '新校区A座'
        },
        {
          id: 1,
          name: '新校区B座'
        },
        {
          id: 2,
          name: '新校区C座'
        },
        {
          id: 3,
          name: '新校区D座'
        },
        {
          id: 4,
          name: '铁道第二综合楼'
        },
        {
          id: 5,
          name: '铁道世纪楼'
        },
        {
          id: 6,
          name: '铁道创业南楼'
        },
        {
          id: 7,
          name: '铁道攀登楼'
        },
        {
          id: 8,
          name: '校本部升华前楼'
        },
      {
        id: 9,
        name: '校本部科教南楼'
      },
      {
        id: 10,
        name: '校本部科教北楼'
      },
      {
        id: 11,
        name: '湘雅教学楼'
      }
    
    ],
    index:0,

      currentData: 0,
      dates: '2019-3-15',
    listData: [
      
    ],
    

  },
  bindPickerChange(e) {
   
    console.log('picker发送选择改变，携带下标为', e.detail.value)
    this.setData({
      index:e.detail.value,
      
    })
    var index = this.data.index
    console.log('picker发送选择改变，携带值为', this.data.build[index])


  },
  bindDateChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      dates: e.detail.value
    })
  },

  //点击切换，滑块index赋值
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://wechat.geebos.cn:8082/service/emptyclassroom/',
      data: {
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        console.log(res.data.classroom_list)
        that.setData({
          listData: res.data.classroom_list,
        

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