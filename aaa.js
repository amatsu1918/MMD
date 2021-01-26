var imglist = new Array("data/01.jpg","data/02.jpg","data/03.jpg","data/04.jpg","data/05.jpg","data/06.jpg","data/07.jpg","data/08.jpg","data/09.jpg","data/10.jpg","data/11.jpg"
,"data/12.jpg","data/13.jpg","data/14.jpg","data/15.jpg","data/16.jpg","data/17.jpg","data/18.jpg","data/19.jpg","data/20.jpg","data/21.jpg","data/22.jpg","data/23.jpg",
"data/24.jpg","data/25.jpg","data/26.jpg","data/27.jpg","data/28.jpg","data/29.jpg","data/30.jpg","data/31.jpg","data/32.jpg","data/33.jpg","data/34.jpg","data/35.jpg","data/36.jpg",
"data/37.jpg","data/38.jpg","data/39.jpg","data/40.jpg","data/41.jpg","data/42.jpg","data/43.jpg","data/44.jpg","data/45.jpg","data/46.jpg","data/47.jpg","data/48.jpg","data/49.jpg",
"data/50.jpg","data/51.jpg","data/52.jpg","data/53.jpg","data/54.jpg","data/55.jpg","data/56.jpg","data/57.jpg","data/58.jpg","data/59.jpg","data/60.jpg","data/61.jpg","data/62.jpg","data/63.jpg","data/64.jpg",
"data/65.jpg","data/66.jpg","data/67.jpg","data/68.jpg","data/69.jpg","data/70.jpg","data/71.jpg","data/72.jpg","data/73.jpg","data/74.jpg","data/75.jpg","data/76.jpg","data/77.jpg","data/78.jpg","data/79.jpg",
"data/80.jpg","data/81.jpg","data/82.jpg","data/83.jpg","data/84.jpg","data/85.jpg","data/86.jpg","data/87.jpg","data/88.jpg","data/89.jpg","data/90.jpg","data/91.jpg","data/92.jpg","data/93.jpg","data/94.jpg",
"data/95.jpg","data/96.jpg","data/97.jpg","data/98.jpg","data/99.jpg");　//画像パスを選択

var selectnum = Math.floor( Math.random() * imglist.length );  //上の画像の中からランダムで選択



var output = "<img src=" + imglist[selectnum] + ">"; //ランダムで選択した画像を引き出す


document.write( output ); //画像を表示させる

setTimeout(function(){
window.location.href =
'js-calc-copy.html';
}, 30*1000); //30秒で画像を切り替える
