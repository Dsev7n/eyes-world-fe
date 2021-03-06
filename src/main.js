// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import App from './App'
Vue.use(vueResource)
import router from './router/index'

/* import ECharts from 'vue-echarts/components/ECharts.vue' */
// import IEcharts from 'vue-echarts-v3/src/full.vue';
// import './assets/china.json';
// import './assets/china.js'
// import 'echarts/lib/chart/bar';
// import 'echarts/lib/component/title';
/* import IEcharts from 'vue-echarts-v3/src/lite.vue';
import 'echarts/lib/chart/map';
import 'echarts/lib/chart/effectScatter';
import 'echarts/lib/component/geo'; */

// 不同平台统一样式
import 'normalize.css'
import './assets/reset.css'

import pic_like from './assets/like.png'
import pic_visited from './assets/visited.png'

Vue.config.productionTip = false

// 全局组件
import PictureDialog from './components/PictureDialog'
import Search from './components/Search'
import PictureDetail from './components/Picture-detail'

Vue.use(VueLazyload)

Vue.component('search', Search)

//参数表如下：
//props:[
// 'title',		显示的标题
// 'like',		点赞数
// 'visited',	访问量
// 'pic_url',	背景图的url
// 'url'		用作路由的url
// 'date',		图片上传时间
// 'author',	作者
// 'type'		类型
// 'width',		宽度
// 'height'		高度
// ],
// 
// 目前类型如下：
// 0：只有图片
// 1：有标题
// 2：有标题，且字体为1的0.8倍大小
// 3：有标题和图标
// 4：有标题、图标、信息
// 
// 参数表中宽高用于字体以及图标的自适应
// 阴影效果需要额外添加
Vue.component('picture-dialog', PictureDialog);

Vue.component('picture-detail', PictureDetail)


new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App,
    }
})