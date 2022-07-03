//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
/*var backimg =[
  "url(https://pic.imgdb.cn/item/62c037be5be16ec74a8c1afa.jpg)",
  "url(https://pic.imgdb.cn/item/62c037be5be16ec74a8c1b02.jpg)",
  "url(https://pic.imgdb.cn/item/62c037be5be16ec74a8c1b1a.jpg)",
  "url(https://pic.imgdb.cn/item/62c037be5be16ec74a8c1b21.jpg)"
];*/
var backimg =[
  "url(https://pic.rmb.bdstatic.com/bjh/3f076e2005afb4b23f5e70d0bcc61a99.jpeg)",
  "url(https://pic.rmb.bdstatic.com/bjh/795d5374427226eb25fa4042a886f88c.jpeg)",
  "url(https://pic.rmb.bdstatic.com/bjh/90c1c121fa400b5d54f9cf409850319e.jpeg)",
  "url(https://pic.rmb.bdstatic.com/bjh/9f36760b83a06867d71fa557530b892a.jpeg)"
];
//获取背景图片总数，生成随机数
var bgindex =Math.floor(Math.random() * (backimg.length));
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
//随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
/*var bannerimg =[
  "url(https://pic.imgdb.cn/item/62c037be5be16ec74a8c1afa.jpg)",
  "url(https://pic.imgdb.cn/item/62c037be5be16ec74a8c1b02.jpg)",
  "url(https://pic.imgdb.cn/item/62c037be5be16ec74a8c1b1a.jpg)",
  "url(https://pic.imgdb.cn/item/62c037be5be16ec74a8c1b21.jpg)"
];*/
var bannerimg =[
  "url(https://pic.rmb.bdstatic.com/bjh/3f076e2005afb4b23f5e70d0bcc61a99.jpeg)",
  "url(https://pic.rmb.bdstatic.com/bjh/795d5374427226eb25fa4042a886f88c.jpeg)",
  "url(https://pic.rmb.bdstatic.com/bjh/90c1c121fa400b5d54f9cf409850319e.jpeg)",
  "url(https://pic.rmb.bdstatic.com/bjh/9f36760b83a06867d71fa557530b892a.jpeg)"
];
//获取banner图片总数，生成随机数
var bannerindex =Math.ceil(Math.random() * (bannerimg.length-1));
//重设banner图片
document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];