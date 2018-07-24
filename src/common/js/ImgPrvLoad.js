/**
 * Created by lenovo on 2018/6/1.
 */


//封装简单的图片预加载

export default function (arrImg) {
  if (!arrImg) {
    throw 'arrImg不存在';
    return;
  }
  let len = arrImg.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    let img = new Image();
    img.onload = function () {
      count++;
      if (count == len) {

      }
    };
    img.src = arrImg[i];
  }
}
