const baseUrl = 'https://file-aliyun.firstleap.cn/spine-asstes/test/interactions/common_red_package';

// json资源
const jsonResources = [
  {
    name: 'title',
    srcs: `${baseUrl}/title.json`
  },
  {
    name: 'hongbao',
    srcs: `${baseUrl}/hongbao.json`
  },
  {
    name: 'miaobiao',
    srcs: `${baseUrl}/miaobiao.json`
  },
  {
    name: 'anniu_done',
    srcs: `${baseUrl}/anniu_done.json`
  },
  {
    name: 'libu_happy',
    srcs: `${baseUrl}/libu_happy.json`
  },
  {
    name: 'libu_happy_bg',
    srcs: `${baseUrl}/libu_happy_bg.json`
  },
  {
    name: 'hongbao_open',
    srcs: `${baseUrl}/hongbao_open.json`
  }
];

// 图片资源
const imageResources = [
  {
    name: 'progress_bar_line',
    srcs: 'https://file-aliyun.firstleap.cn/interaction/image/20250405/1743824318688UcqNsX.png'
  },
  {
    name: 'red_envelope_icon',
    srcs: 'https://file-aliyun.firstleap.cn/interaction/image/20250402/1743585151884Rp4IFQ.png'
  },
  {
    name: 'regret_bg',
    srcs: 'https://file-aliyun.firstleap.cn/interaction/image/20250408/1744076550155Wv0AUP.png'
  },
  {
    name: 'regret_text',
    srcs: 'https://file-aliyun.firstleap.cn/interaction/image/20250408/1744076566940RVEcMD.png'
  }
];

export default {
  name: 'redPackage',
  assets: [...jsonResources, ...imageResources]
};
