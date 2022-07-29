import './libs/vue.min.js'
import 'jquery'
import { add } from './tools/math'

var mv = new Vue({
    data: {
        message: '我是 search.js 引入的vue库'
    }
})
console.log('我是search.js文件');
console.log(mv.message);
// console.log('我是index.js 打印的jquery', $);
console.log(add(1 ,2));
