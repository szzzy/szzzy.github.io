//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
/*var backimg =[
  "url(https://pic.imgdb.cn/item/62c037be5be16ec74a8c1afa.jpg)",
  "url(https://pic.imgdb.cn/item/62c037be5be16ec74a8c1b02.jpg)",
  "url(https://pic.imgdb.cn/item/62c037be5be16ec74a8c1b1a.jpg)",
  "url(https://pic.imgdb.cn/item/62c037be5be16ec74a8c1b21.jpg)"
];*/
var backimg =[
  "url(https://s3.bmp.ovh/imgs/2023/01/12/d277207614c7b779.jpg)",
  "url(https://s3.bmp.ovh/imgs/2023/01/12/8a06a181057988cc.jpg)",
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
  "url(https://s3.bmp.ovh/imgs/2023/01/12/d277207614c7b779.jpg)",
  "url(https://s3.bmp.ovh/imgs/2023/01/12/8a06a181057988cc.jpg)",
];
//获取banner图片总数，生成随机数
var bannerindex =Math.ceil(Math.random() * (bannerimg.length-1));
//重设banner图片
document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];