// function getComponent() {
//     // 如果没有注释 则默认打包出来的是[id].bundle/hash.js  这里边的注释定义了提取打包出来的文件名
//     // 加了注释，打包出来的文件名 vendors~myLodash.6a86543.js -m
//     return import(/* webpackChunkName:'myLodash'*/'lodash').then(({default:_}) => {
//         var element = document.createElement('div');
//         element.innerHTML = _.join(['hello', 'world'], ' ');
//         return element;
//     }).catch(error => 'An error occurred while loading the component');
// }
import(/* webpackPrefetch: true */ 'loginModal');
// 使用async函数改写
async function getComponent() {
    const {default:_} = await import(/* webpackChunkName: 'myLodash' */ 'lodash');
    element.innerHTML = _.join(['hello', 'world'], ' ');
    return element;
}
getComponent().then(component => {
    document.body.appendChild(component);
})

