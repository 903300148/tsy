const data = [
  'https://img2.taoshouyou.com/img/2019-08-12/2/bd222268296aa7619ef109f374010a8c.jpg',
  'https://img2.taoshouyou.com/img/2019-09-12/7/1cbd7a517f12ada42ea09e4613e92375.jpg',
  'https://img2.taoshouyou.com/img/2019-11-26/7/4c3aa298caf94d9369270915df0ff4f6.jpg',
  'https://img2.taoshouyou.com/img/2019-11-06/24/7baaf4b86549e64c2a4c29b03e87c451.png',
  'https://img2.taoshouyou.com/img/2019-11-13/17/5aaef6416e58e6a41f6f5b3237b3fb9b.jpg'
]
const dataList = [
  {
    id: 1,
    key: 1,
    icon:
      'https://img2.taoshouyou.com/img/2018-06-20/31/a9e606b74b8e083a3d3ce0ffa85293ec.jpg',
    text: '账号'
  },
  {
    id: 2,
    key: 2,
    icon:
      'https://img2.taoshouyou.com/img/2018-06-20/4/df1f969e61928787cba1669cebbd4c52.jpg',
    text: '首充号'
  },
  {
    id: 3,
    key: 3,
    icon:
      'https://img2.taoshouyou.com/img/2018-06-20/29/bd574b9399717ae3427dbdd5229e908c.jpg',
    text: '首充号续充'
  },
  {
    id: 4,
    key: 4,
    icon:
      'https://img2.taoshouyou.com/img/2018-06-20/30/6e078119caf4317d53ee48af4ec3cfbe.jpg',
    text: '苹果代充'
  },
  {
    id: 5,
    key: 5,
    icon:
      'https://img2.taoshouyou.com/img/2018-10-26/17/520899b3da5f9ba8309651ed81083ad7.jpg',
    text: '租号'
  },
  {
    id: 6,
    key: 6,
    icon:
      'https://img2.taoshouyou.com/img/2018-10-26/19/6d91376d8437eb8c20b7fdd7dfae1d29.jpg',
    text: '开局号'
  },
  {
    id: 7,
    key: 7,
    icon:
      'https://img2.taoshouyou.com/img/2019-05-30/6/584ddc5776a2ffcecde84a51e43fd518.png',
    text: '满V游戏'
  },
  {
    id: 8,
    key: 8,
    icon:
      'https://img2.taoshouyou.com/img/2018-12-29/26/50bfd0aca854a73bc8fcfed42691f79e.jpg',
    text: '端游'
  },
  {
    id: 9,
    key: 9,
    icon:
      'https://img2.taoshouyou.com/img/2018-10-26/14/356285d6ddd04e0fceb807e653ac1621.jpg',
    text: '云手机'
  },
  {
    id: 10,
    key: 10,
    icon:
      'https://img2.taoshouyou.com/img/2019-10-26/27/4977d6fcedf5b0b60993ec5f283c6bb0.png',
    text: '折扣充值'
  }
]
const hotData = [
  {
    id: '2256',
    name: '王者荣耀',
    availablegoodsid: 0,
    spelling: 'wangzherongyao',
    pic: '/img/2017-06-21/14/d0917f3ffa72d8894c480e49ab7f6a37-pc-l.jpg',
    mindiscount: '',
    total: 116808,
    sort: '9999'
  },
  {
    id: '7441',
    name: '航海王：燃烧意志',
    availablegoodsid: 0,
    spelling: 'hanghaiwang_ranshaoyizhi',
    pic: '/img/2018-10-25/18/2232dc1ba2fc8e6d40116359d5ae8d1e-pc-l.jpg',
    mindiscount: '',
    total: 23604,
    sort: '9998'
  },
  {
    id: '345',
    name: '神武3（手游）',
    availablegoodsid: 0,
    spelling: 'shenwu3_shouyou_',
    pic: '/img/2018-02-12/14/4e74214e2615990af17fa4d5180ad277-pc-l.jpg',
    mindiscount: '',
    total: 5407,
    sort: '9997'
  },
  {
    id: '2379',
    name: '火影忍者',
    availablegoodsid: 0,
    spelling: 'huoyingrenzhe',
    pic: '/img/2016-08-30/6/b4cf99890ee34f8b093e4520de189061-pc-l.jpeg',
    mindiscount: '',
    total: 4678,
    sort: '9996'
  },
  {
    id: '442',
    name: '口袋妖怪复刻',
    availablegoodsid: 0,
    spelling: 'koudaiyaoguaifuke',
    pic: '/gamepic/442.jpg',
    mindiscount: '',
    total: 7830,
    sort: '9995'
  },
  {
    id: '2660',
    name: '穿越火线：枪战王者',
    availablegoodsid: 0,
    spelling: 'chuanyuehuoxian_qiangzhanwangzhe',
    pic: '/img/2018-10-15/18/8b8f1feb392791cb76539a0c8f41e2ea-pc-l.jpg',
    mindiscount: '',
    total: 15963,
    sort: '9994'
  },
  {
    id: '4345',
    name: '仙境传说RO：守护永恒的爱',
    availablegoodsid: 0,
    spelling: 'xianjingchuanshuoro_shouhuyonghengdeai',
    pic: '/img/2019-03-27/5/aab5d48462b109cde506905f7a5f38a8-pc-l.jpg',
    mindiscount: '',
    total: 1885,
    sort: '9993'
  },
  {
    id: '8751',
    name: '闪烁之光',
    availablegoodsid: 0,
    spelling: 'shanshuozhiguang',
    pic: '/img/2019-04-13/14/cf59d5c427980faba416b060aec5213e-pc-l.jpg',
    mindiscount: '',
    total: 1557,
    sort: '9993'
  },
  {
    id: '351',
    name: '少年三国志',
    availablegoodsid: 0,
    spelling: 'shaoniansanguozhi',
    pic: '/img/2019-03-27/5/5bb4ac890ac6f57d8ed6979c6cb709e5-pc-l.jpg',
    mindiscount: '',
    total: 11154,
    sort: '9992'
  },
  {
    id: '2307',
    name: '率土之滨',
    availablegoodsid: 0,
    spelling: 'shuaituzhibin',
    pic: '/img/2018-10-25/18/79862a89d63f56f89ea94413694b7ba0-pc-l.jpg',
    mindiscount: '',
    total: 3773,
    sort: '9992'
  },
  {
    id: '10957',
    name: '三国志：战略版',
    availablegoodsid: 0,
    spelling: 'sanguozhi_zhanlueban',
    pic: '/img/2019-09-19/22/652f6790cd38427fa60356cd6ddc4606-pc-l.jpg',
    mindiscount: '',
    total: 2246,
    sort: '9991'
  },
  {
    id: '5815',
    name: '阿拉德之怒/地下城盟约',
    availablegoodsid: 0,
    spelling: 'aladezhinu_dixiachengmengyue',
    pic: '/img/2017-12-20/30/6a930af71c1d9546ad2752a877ceafb8-pc-l.jpg',
    mindiscount: '',
    total: 3506,
    sort: '9990'
  },
  {
    id: '6270',
    name: '和平精英',
    availablegoodsid: 0,
    spelling: 'hepingjingying',
    pic: '/img/2019-05-08/5/51998574cc23cc15b4d38448a4420e8e-pc-l.jpg',
    mindiscount: '',
    total: 7420,
    sort: '9989'
  },
  {
    id: '287',
    name: '航海王启航',
    availablegoodsid: 0,
    spelling: 'hanghaiwangqihang',
    pic: '/img/2018-03-21/14/afcb9583bbd1ef3c1be44ba3f355c07f-pc-l.jpg',
    mindiscount: '',
    total: 2615,
    sort: '9988'
  },
  {
    id: '3894',
    name: '阴阳师',
    availablegoodsid: 0,
    spelling: 'yinyangshi',
    pic: '/img/2017-12-20/30/03cadf6c3bfbe8da89dd0830fa263be5-pc-l.jpg',
    mindiscount: '',
    total: 11557,
    sort: '9986'
  },
  {
    id: '594',
    gameid: '0',
    title: '淘手游APP',
    picurl:
      'https://img2.taoshouyou.com/img/2019-08-09/25/a21b7ee881eb7b0ddbf2710811c2644f.jpg',
    href: 'https://m.taoshouyou.com/indexpage/index/downloadapp',
    isshow: '1',
    position: '2',
    type: '2',
    time_begin: '00:00:00',
    time_end: '23:59:59',
    parentid: '6',
    channel: '',
    addtime: '2019-08-09 18:54:12',
    isAdvertisement: true
  },
  {
    id: '2941',
    name: '梦幻诛仙',
    availablegoodsid: 0,
    spelling: 'menghuanzhuxian',
    pic: '/img/2017-12-05/30/1173140ed9160d87ab395ce6b911bf05-pc-l.jpg',
    mindiscount: '',
    total: 450,
    sort: '9985'
  },
  {
    id: '6145',
    name: '地下城与勇士（端游）',
    availablegoodsid: 0,
    spelling: 'dixiachengyuyongshi_duanyou_',
    pic: '/img/2017-12-16/23/b918fa984b025513e077233af56b79e9-pc-l.jpg',
    mindiscount: '',
    total: 1965,
    sort: '9980'
  },
  {
    id: '4005',
    name: '永恒纪元:戒',
    availablegoodsid: 0,
    spelling: 'yonghengjiyuan_jie',
    pic: '/img/2018-02-12/30/0ac3740f01883d1d1b1f8098d1f9ff15-pc-l.jpg',
    mindiscount: '',
    total: 719,
    sort: '9978'
  },
  {
    id: '318',
    name: '全民枪战',
    availablegoodsid: 0,
    spelling: 'quanminqiangzhan',
    pic: '/img/2016-08-30/14/de529d914257a08b41b5fbb2c8dc4ccf-pc-l.jpg',
    mindiscount: '',
    total: 2365,
    sort: '9959'
  },
  {
    id: '3841',
    name: '御剑情缘',
    availablegoodsid: 0,
    spelling: 'yujianqingyuan',
    pic: '/img/2017-03-09/14/423ae42457d9e61d5f855fd4cf549656-pc-l.jpg',
    mindiscount: '',
    total: 984,
    sort: '9957'
  },
  {
    id: '436',
    name: '大话西游',
    availablegoodsid: 0,
    spelling: 'dahuaxiyou',
    pic: '/img/2018-12-29/5/0a9a398b5937614934288f21072649a9-pc-l.jpg',
    mindiscount: '',
    total: 1558,
    sort: '9950'
  },
  {
    id: '2680',
    name: '航海王强者之路',
    availablegoodsid: 0,
    spelling: 'hanghaiwangqiangzhezhilu',
    pic: '/img/2018-03-07/30/afbfa794296cdf1bd4b3fd2aa036587f-pc-l.jpg',
    mindiscount: '',
    total: 1816,
    sort: '9909'
  },
  {
    id: '4439',
    name: '放开那三国2',
    availablegoodsid: 0,
    spelling: 'fangkainasanguo2',
    pic: '/img/2016-09-08/14/9c5de7c6c43073793c41119439a5b8ff-pc-l.jpg',
    mindiscount: '',
    total: 4241,
    sort: '9908'
  },
  {
    id: '4590',
    name: '街篮',
    availablegoodsid: 0,
    spelling: 'jielan',
    pic: '/img/2017-06-18/14/5c4dbc809aeaa88651eefdba63e8359b-pc-l.jpg',
    mindiscount: '',
    total: 776,
    sort: '9907'
  },
  {
    id: '5272',
    name: '天龙八部手游',
    availablegoodsid: 0,
    spelling: 'tianlongbabushouyou',
    pic: '/img/2018-02-12/30/9f0097f80f6bda69e5055bd5e7dd5cb5-pc-l.jpg',
    mindiscount: '',
    total: 1424,
    sort: '9906'
  },
  {
    id: '5774',
    name: '楚留香',
    availablegoodsid: 0,
    spelling: 'chuliuxiang',
    pic: '/img/2019-01-28/5/ea66fb6ddd061702ac461fd535279896-pc-l.jpg',
    mindiscount: '',
    total: 1834,
    sort: '9905'
  },
  {
    id: '4468',
    name: '崩坏3rd',
    availablegoodsid: 0,
    spelling: 'benghuai3rd',
    pic: '/img/2018-02-12/30/c5269abe2628ff25b95ef56bfb873b00-pc-l.jpg',
    mindiscount: '',
    total: 6178,
    sort: '9904'
  },
  {
    id: '6015',
    name: '决战！平安京',
    availablegoodsid: 0,
    spelling: 'juezhan_pinganjing',
    pic: '/img/2019-05-04/5/ecf317d1ccfebbc0a6f259ddb477293d-pc-l.jpg',
    mindiscount: '',
    total: 1287,
    sort: '9903'
  },
  {
    id: '4717',
    name: '龙之谷手游',
    availablegoodsid: 0,
    spelling: 'longzhigushouyou',
    pic: '/img/2018-10-15/18/26a7e2978e4a442d90f52341e8062eac-pc-l.jpg',
    mindiscount: '',
    total: 288,
    sort: '9903'
  },
  {
    id: '2920',
    name: '捕鱼达人千炮版',
    availablegoodsid: 0,
    spelling: 'boyudarenqianpaoban',
    pic: '/img/2015-12-31/16/e8a2494a255b89544c57080fe7d206bd-pc-l.jpg',
    mindiscount: '',
    total: 252,
    sort: '9902'
  },
  {
    id: '5430',
    name: '魔力宝贝手机版',
    availablegoodsid: 0,
    spelling: 'molibaobeishoujiban',
    pic: '/img/2018-06-22/30/7a391edb2b974c2e2a9ecbd891a0c9f8-pc-l.jpg',
    mindiscount: '',
    total: 94,
    sort: '9902'
  },
  {
    id: '5854',
    name: 'QQ飞车手游',
    availablegoodsid: 0,
    spelling: 'qqfeicheshouyou',
    pic: '/img/2018-03-21/30/4c28ba84be51f311cb31af4e38db28af-pc-l.jpg',
    mindiscount: '',
    total: 4337,
    sort: '9901'
  },
  {
    id: '7187',
    name: '圣斗士星矢（腾讯）',
    availablegoodsid: 0,
    spelling: 'shengdoushixingshi_tengxun_',
    pic: '/img/2019-03-27/5/504588c03945f40b99025a0cca364ef6-pc-l.jpg',
    mindiscount: '',
    total: 769,
    sort: '9901'
  },
  {
    id: '8812',
    name: '一拳超人：最强之男',
    availablegoodsid: 0,
    spelling: 'yiquanchaoren_zuiqiangzhinan',
    pic: '/img/2019-04-23/8/1e1accf78c5209b329bf4726a9f4396e-pc-l.jpg',
    mindiscount: '',
    total: 9001,
    sort: '9900'
  },
  {
    id: '421',
    name: '部落冲突',
    availablegoodsid: 0,
    spelling: 'buluochongtu',
    pic: '/img/2017-05-26/30/f5d6784fe2854837f51d5ace8073f29a-pc-l.jpg',
    mindiscount: '',
    total: 15286,
    sort: '999'
  },
  {
    id: '5074',
    name: '决斗之城',
    availablegoodsid: 0,
    spelling: 'juedouzhicheng',
    pic: '/img/2017-03-31/4/93c058d917e4dbe73986564a26de8744-pc-l.jpg',
    mindiscount: '',
    total: 1744,
    sort: '999'
  },
  {
    id: '3646',
    name: '诛仙手游',
    availablegoodsid: 0,
    spelling: 'zhuxianshouyou',
    pic: '/img/2018-04-27/30/9b2131a7fd5b398d65e11396d33ff8b7-pc-l.jpg',
    mindiscount: '',
    total: 1518,
    sort: '999'
  },
  {
    id: '2824',
    name: '倩女幽魂',
    availablegoodsid: 0,
    spelling: 'qiannvyouhun',
    pic: '/img/2018-02-12/30/60eb92619a28a07ded958bbba0ce321d-pc-l.jpg',
    mindiscount: '',
    total: 1457,
    sort: '997'
  },
  {
    id: '9788',
    name: '苍蓝誓约',
    availablegoodsid: 0,
    spelling: 'canglanshiyue',
    pic: '/img/2019-07-16/6/7d26da164e850be04ec21311c3a14683-pc-l.jpg',
    mindiscount: '',
    total: 660,
    sort: '888'
  },
  {
    id: '352',
    name: '梦幻西游',
    availablegoodsid: 0,
    spelling: 'menghuanxiyou',
    pic: '/img/2019-01-28/19/45bf4a6650c9d266e179b7c5684cf25a-pc-l.jpg',
    mindiscount: '',
    total: 4739,
    sort: '520'
  },
  {
    id: '6821',
    name: '传奇世界3D',
    availablegoodsid: 0,
    spelling: 'chuanqishijie3d',
    pic: '/img/2018-05-29/18/e80a805dc221419c02df79cc63bfb48e-pc-l.jpg',
    mindiscount: '',
    total: 103,
    sort: '160'
  },
  {
    id: '4511',
    name: '命运-冠位指定',
    availablegoodsid: 0,
    spelling: 'mingyun_guanweizhiding',
    pic: '/img/2016-09-30/6/51a1e71e131877954b89e28f243e18c2-pc-l.jpeg',
    mindiscount: '',
    total: 3455,
    sort: '150'
  },
  {
    id: '5128',
    name: '三国如龙传',
    availablegoodsid: 0,
    spelling: 'sanguorulongchuan',
    pic: '/img/2018-02-12/30/084a0b6f766399f4f4fe343f415438ea-pc-l.jpg',
    mindiscount: '',
    total: 771,
    sort: '150'
  },
  {
    id: '7921',
    name: '穿越火线',
    availablegoodsid: 0,
    spelling: 'chuanyuehuoxian',
    pic: '/img/2018-12-10/22/cf23689325b6de605469fe22c9d0a8d7-pc-l.jpg',
    mindiscount: '',
    total: 4768,
    sort: '110'
  },
  {
    id: '7897',
    name: '英雄联盟',
    availablegoodsid: 0,
    spelling: 'yingxionglianmeng',
    pic: '/img/2018-12-07/22/41a2f2226239127b8f7379bc5c8ada32-pc-l.jpg',
    mindiscount: '',
    total: 11340,
    sort: '100'
  },
  {
    id: '4756',
    name: '热血江湖',
    availablegoodsid: 0,
    spelling: 'rexuejianghu',
    pic: '/img/2018-09-05/18/466032f01b2474997d738effd54f2d81-pc-l.jpg',
    mindiscount: '',
    total: 725,
    sort: '100'
  },
  {
    id: '3498',
    name: '冒险岛',
    availablegoodsid: 0,
    spelling: 'maoxiandao',
    pic: '/img/2018-12-13/22/5a512c84314a97d9a5a413125b1a8f71-pc-l.jpg',
    mindiscount: '',
    total: 49,
    sort: '90'
  },
  {
    id: '7924',
    name: '暗黑破坏神3',
    availablegoodsid: 0,
    spelling: 'anheipohuaishen3',
    pic: '/img/2018-12-10/22/e094c2bbfbd074422024d3b9cd652673-pc-l.jpg',
    mindiscount: '',
    total: 10,
    sort: '1'
  },
  {
    id: '6700',
    name: '绝地求生',
    availablegoodsid: 0,
    spelling: 'juediqiusheng',
    pic: '/img/2018-05-03/26/52171a1e0f2c20b41a3b16436f8e44aa-pc-l.jpg',
    mindiscount: '',
    total: 1075,
    sort: null
  },
  {
    id: '6151',
    name: 'QQ飞车',
    availablegoodsid: 0,
    spelling: 'qqfeiche',
    pic: '/img/2018-12-13/22/32c09b57468b8ab9cf97c817c05dc36d-pc-l.jpg',
    mindiscount: '',
    total: 774,
    sort: null
  },
  {
    id: '7923',
    name: '逆战',
    availablegoodsid: 0,
    spelling: 'nizhan',
    pic: '/img/2018-12-10/22/5c5f002556b4db72ed579c0ebbaedd5e-pc-l.jpg',
    mindiscount: '',
    total: 717,
    sort: null
  },
  {
    id: '7926',
    name: 'STEAM',
    availablegoodsid: 0,
    spelling: 'steam',
    pic: '/img/2019-06-05/25/867759d9cc4cf12b8bace6a52dfbf44c-pc-l.jpg',
    mindiscount: '',
    total: 656,
    sort: null
  },
  {
    id: '10368',
    name: '魔兽世界经典怀旧服',
    availablegoodsid: 0,
    spelling: 'moshoushijiejingdianhuaijiufu',
    pic: '/img/2019-08-30/4/0aefb39dbb9801d87a13500614786258-pc-l.jpg',
    mindiscount: '',
    total: 450,
    sort: null
  },
  {
    id: '7935',
    name: '梦幻西游2',
    availablegoodsid: 0,
    spelling: 'menghuanxiyou2',
    pic: '/img/2018-12-11/22/5dbbac06e325ad03a4af91c3059df3d3-pc-l.jpg',
    mindiscount: '',
    total: 178,
    sort: null
  },
  {
    id: '7903',
    name: '守望先锋',
    availablegoodsid: 0,
    spelling: 'shouwangxianfeng',
    pic: '/img/2018-12-07/22/84294c03107af00f68020410088e7815-pc-l.jpg',
    mindiscount: '',
    total: 153,
    sort: null
  },
  {
    id: '6703',
    name: '天涯明月刀',
    availablegoodsid: 0,
    spelling: 'tianyamingyuedao',
    pic: '/img/2018-12-09/22/73b1e86704332f435015e995530ec5b8-pc-l.jpg',
    mindiscount: '',
    total: 150,
    sort: null
  },
  {
    id: '8432',
    name: 'APEX英雄',
    availablegoodsid: 0,
    spelling: 'apexyingxiong',
    pic: '/img/2019-02-25/11/d12db0fd50b1bb3111cfbf3a3a7e1046-pc-l.jpg',
    mindiscount: '',
    total: 110,
    sort: null
  },
  {
    id: '7925',
    name: '剑灵',
    availablegoodsid: 0,
    spelling: 'jianling',
    pic: '/img/2018-12-10/22/fae68dc284bdc84b2db36ae2b33759ba-pc-l.jpg',
    mindiscount: '',
    total: 94,
    sort: null
  },
  {
    id: '7928',
    name: 'NBA2K OL2',
    availablegoodsid: 0,
    spelling: 'nba2k_ol2',
    pic: '/img/2018-12-10/20/db223e825b0adc5a26988b661816a7ea-pc-l.jpg',
    mindiscount: '',
    total: 78,
    sort: null
  },
  {
    id: '7919',
    name: '逆水寒OL',
    availablegoodsid: 0,
    spelling: 'nishuihanol',
    pic: '/img/2018-12-10/22/7c485ffff8ceb1df5ceac9898f28b8a8-pc-l.jpg',
    mindiscount: '',
    total: 67,
    sort: null
  },
  {
    id: '7930',
    name: '魔兽世界',
    availablegoodsid: 0,
    spelling: 'moshoushijie',
    pic: '/img/2018-12-10/22/752de80ef31165ea89162c45c6ce3664-pc-l.jpg',
    mindiscount: '',
    total: 65,
    sort: null
  },
  {
    id: '6155',
    name: 'FIFA OL3',
    availablegoodsid: 0,
    spelling: 'fifa_ol3',
    pic: '/img/2018-12-13/22/c4c81ea39aeb7e52195a14d1378ea3d1-pc-l.jpg',
    mindiscount: '',
    total: 65,
    sort: null
  },
  {
    id: '6702',
    name: '反恐精英OL',
    availablegoodsid: 0,
    spelling: 'fankongjingyingol',
    pic: '/img/2018-12-11/22/de22b70c87d051aa5ce7724326a55c84-pc-l.jpg',
    mindiscount: '',
    total: 55,
    sort: null
  },
  {
    id: '6704',
    name: '新天龙八部',
    availablegoodsid: 0,
    spelling: 'xintianlongbabu',
    pic: '/img/2018-12-11/22/3a198b427eefa6f4c8ad324d782c1639-pc-l.jpg',
    mindiscount: '',
    total: 52,
    sort: null
  },
  {
    id: '7927',
    name: 'DOTA2',
    availablegoodsid: 0,
    spelling: 'dota2',
    pic: '/img/2018-12-10/22/db6b892934241d69b495b7110ab5f534-pc-l.jpg',
    mindiscount: '',
    total: 51,
    sort: null
  },
  {
    id: '7933',
    name: 'QQ三国',
    availablegoodsid: 0,
    spelling: 'qqsanguo',
    pic: '/img/2018-12-11/22/fbb3e8a754455b7aadeca7b1468a1c15-pc-l.jpg',
    mindiscount: '',
    total: 43,
    sort: null
  },
  {
    id: '7936',
    name: '剑侠情缘三',
    availablegoodsid: 0,
    spelling: 'jianxiaqingyuansan',
    pic: '/img/2018-12-11/22/63cf05a81476f1382bd5fd4c3dd08101-pc-l.jpg',
    mindiscount: '',
    total: 30,
    sort: null
  },
  {
    id: '11910',
    name: '神武3（端游）',
    availablegoodsid: 0,
    spelling: 'shenwu3_duanyou_',
    pic: '/img/2019-11-09/21/3734580f56c1ffa32cc6c0bd423d8744-pc-l.jpg',
    mindiscount: '',
    total: 27,
    sort: null
  },
  {
    id: '7920',
    name: '斗战神',
    availablegoodsid: 0,
    spelling: 'douzhanshen',
    pic: '/img/2018-12-10/22/3d831e8bc914d0b9614b88c29a8ebeeb-pc-l.jpg',
    mindiscount: '',
    total: 13,
    sort: null
  },
  {
    id: '6149',
    name: '魔域',
    availablegoodsid: 0,
    spelling: 'moyu',
    pic: '/img/2018-12-13/22/649ba873b3662f643c7b63acd56f8573-pc-l.jpg',
    mindiscount: '',
    total: 11,
    sort: null
  },
  {
    id: '6154',
    name: '奇迹MU',
    availablegoodsid: 0,
    spelling: 'qijimu',
    pic: '/img/2018-12-11/22/dcf1b7f6b5dc82841835055d1c6b9ca3-pc-l.jpg',
    mindiscount: '',
    total: 7,
    sort: null
  },
  {
    id: '7931',
    name: '星际争霸2',
    availablegoodsid: 0,
    spelling: 'xingjizhengba2',
    pic: '/img/2018-12-10/22/77d55c2f0644cdd6ba6ec948f0722078-pc-l.jpg',
    mindiscount: '',
    total: 5,
    sort: null
  }
]
const hotTradeData = [
  {
    id: 1,
    img:
      'https://img2.taoshouyou.com/img/2016-08-30/6/b4cf99890ee34f8b093e4520de189061-pc-l.jpeg',
    des: '火影忍者【安卓QQ】超值游戏号',
    symbol: '￥',
    price: 1300
  },
  {
    id: 2,
    img:
      'https://img2.taoshouyou.com/img/2018-10-15/18/8b8f1feb392791cb76539a0c8f41e2ea-pc-l.jpg',
    des: '穿越火线：枪战王者【安卓QQ】极品v8号王者之心怒魄影力，带冠军皮肤',
    symbol: '￥',
    price: 2800
  },
  {
    id: 3,
    img: 'https://img2.taoshouyou.com/gamepic/442.jpg',
    des: '口袋妖怪复刻【安卓TT玩+】养老号价格优惠',
    symbol: '￥',
    price: 3000
  },
  {
    id: 4,
    img:
      'https://img2.taoshouyou.com/img/2019-03-27/5/5bb4ac890ac6f57d8ed6979c6cb709e5-pc-l.jpg',
    des: '少年三国志【安卓官方】准万亿高Ⅴ号',
    symbol: '￥',
    price: 1500
  },
  {
    id: 5,
    img:
      'https://img2.taoshouyou.com/img/2017-12-20/30/6a930af71c1d9546ad2752a877ceafb8-pc-l.jpg',
    des: '阿拉德之怒/地下城盟约【苹果官方】三无14真魔剑，透明套大红神',
    symbol: '￥',
    price: 12000
  },
  {
    id: 6,
    img:
      'https://img2.taoshouyou.com/img/2017-12-20/30/03cadf6c3bfbe8da89dd0830fa263be5-pc-l.jpg',
    des: '阴阳师【安卓九游】极品肝帝号，一速270，月见黑',
    symbol: '￥',
    price: 3999
  },
  {
    id: 7,
    img:
      'https://img2.taoshouyou.com/img/2019-09-19/22/652f6790cd38427fa60356cd6ddc4606-pc-l.jpg',
    des: '三国志：战略版【苹果官方】209河北第一盟盟主位',
    symbol: '￥',
    price: 4000
  },
  {
    id: 8,
    img:
      'https://img2.taoshouyou.com/img/2017-03-31/4/93c058d917e4dbe73986564a26de8744-pc-l.jpg',
    des: '决斗之城【苹果官方】武藤快100 主卡黑龙黑法',
    symbol: '￥',
    price: 4000
  }
]
export { data, dataList, hotData, hotTradeData }
