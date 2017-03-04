/**
 * Created by weiboxue on 17/2/14.
 */

// require("../style/css/style.css");
// require("!style-loader!css-loader!sass-loader!../css/style.scss");
// require("../style/scss/index.scss");
var Vue = require('./lib/vue.js');
var demo = require('../component/demo.vue');


var vue = new Vue({
    el: '.content',
    data: {
        demodata: 1
    },
    components: {
        democomp: demo
    },

    // (方法: 所有方法都写在这里)调用就会重新计算
    methods: {

    },
    mounted: function() {
    }
});
