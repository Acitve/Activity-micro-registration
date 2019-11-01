var local_database = [
  { 
    text: '我的活动',
    url: 'myActivity/myActivity',
    icon: '/image/userInfo/myActivity.png',
    arrows: '/image/userInfo/arrow.png' 
  },
  { 
    text: '活动记录', 
    url: 'myRecord/myRecord', 
    icon: '/image/userInfo/activityRecord.png', 
    arrows: '/image/userInfo/arrow.png' 
  },
  { 
    text: '我的收藏', 
    url: 'myFavorite/myFavorite', 
    icon: '/image/userInfo/shoucang.png', 
    arrows: '/image/userInfo/arrow.png' 
  },
  {
    text: '关于',
    url: 'about/about',
    icon: '/image/userInfo/guanyu.png',
    arrows: '/image/userInfo/arrow.png'
  }
]
module.exports = {
  postList: local_database
}