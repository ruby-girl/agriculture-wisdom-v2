// 时间转换
export const momnet = (val) => {
  if (typeof val === 'string') {
    var data = date.substr(0, 19); //'2019-08-09T18:23:27'
    return new Date(data.replace(/T/g, ' ').replace(/-/g, '/'));
  } else {
    var newDate = new Date(date);
    return dateFormater.formatTime(newDate) // 2019/08/14 17:49:29
  }
}
// 倒计时转换
export const Countdown = (val) => {
  var starttime = new Date(val); //时间一定要new Data一下
  var nowtime = new Date();
  // console.log(starttime)
  // console.log(nowtime);
  var time = starttime - nowtime;
  // console.log(time)
  var day = parseInt(time / 1000 / 60 / 60 / 24);
  var hour = parseInt(time / 1000 / 60 / 60 % 24);
  var minute = parseInt(time / 1000 / 60 % 60);
  var seconds = parseInt(time / 1000 % 60);
  return (`${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}:${seconds < 10 ? '0' + seconds : seconds
    }`)
}