console.log('webpack5');
import imgurl from './assets/123.png'
import svgurl from './assets/ziliao.svg'
import txt from './assets/test.txt'
import bigJPG from './assets/bg.jpg'
import earthJPG from './assets/earth.jpg'
import dataTOML from './assets/data.toml'
import dataYAML from './assets/data.yaml'
import dataJOSN5 from './assets/data.json5'
import 'jquery'



import './index.css'
import './index.less'

import './libs/vue.min.js'



console.log(dataTOML);
console.log(dataYAML);
console.log(dataJOSN5);
console.log(dataTOML.title);
console.log(dataYAML.title);
console.log(dataJOSN5.title);

var mv = new Vue({
    data: {
        message: '我是 index.js 引入的vue库'
    }
})
console.log(mv.message);
// console.log('我是index.js 打印的jquery', $);




var img = document.createElement('img')
img.src = imgurl
document.body.appendChild(img)
var img2 = document.createElement('img')
img2.src = svgurl
document.body.appendChild(img2)

var div = document.createElement('DIV')
div.style.cssText = 'width: 300px; height: 300px; background-color: skyblue'
div.classList.add('bgi-bg')
div.textContent = txt
document.body.appendChild(div)

var img3 = document.createElement('img')
img3.src = bigJPG
document.body.appendChild(img3)

var img4 = document.createElement('img')
img4.src = earthJPG
document.body.appendChild(img4)

document.body.classList.add('txt-red')
document.body.classList.add('bgc-yellow')