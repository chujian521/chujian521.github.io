<!--浏览器整蛊标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         document.title = 'ヽ(●-`Д´-)ノ你怎么走了啊！';
         clearTimeout(titleTime);
     }
     else {
         document.title = 'ヾ(Ő∀Ő3)ノ欢迎光临！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });