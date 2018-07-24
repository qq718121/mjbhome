/**
 * Created by lenovo on 2018/5/31.
 */

//处理分享出去的页面 在IOS系统中的QQ浏览器URL被破坏的问题
export default function () {
  let url = window.location.href;
  let num = url.indexOf('#');
  let str = url.charAt(num);
  let arr = url.split(str);
  let urls = `${arr[0]}?#${arr[1]}&share=1`;
  return urls;
}
