Pixiv Page Jump
==========

pixiv Page Jumpとは
-------------
2016年冬頃あたりから順次リニューアルされたpixivにて、「フォロー新着ページ」の作品群の古い作品を見る際、スクロールでなく、ページ指定方式をとることで、一年以上前などの古い作品をすばやく見ることができる非公式スクリプトです。

使い方
-------------
####【１】下記URLをブラウザでブックマークしてください。  
>```javascript
javascript:(function(){var%20s=document.createElement("script");s.charset="UTF-8";s.src="https://rawgithub.com/suzunashi/pixivpagejump/master/minjs/pixivjumpage.min.js";document.body.appendChild(s)})();
>```  
>ブックマークの方法に不明点あれば、[こちら](http://www.lifehacker.jp/2013/04/130402bookmarklet_matome.html)をご参照ください。  
>なおブラウザがFirefoxの場合の、ブックマーク登録の様子は以下のようなイメージです。  
>![Firefoxでのブックマーク登録イメージ](https://raw.github.com/suzunashi/pixivpagejump/master/description/firefox_bookmark.jpg "Firefoxでのブックマーク登録イメージ")  

####【２】pixiv(http://www.pixiv.net/)にログインしてください。
>![pixivのトップ画面](https://raw.github.com/suzunashi/pixivpagejump/master/description/pixiv_top.jpg "pixivのトップ画面")  

####【３】上記【１】で登録したブックマークをクリックしてください。

####【４】「ジャンプするページ数を指定してください」というポップアップダイアログにてジャンプしたいページ数を指定してください。
>![ページ数入力画面](https://raw.github.com/suzunashi/pixivpagejump/master/description/popup_dialog.jpg "ページ数入力画面")  

####【５】指定したページより先の「フォロー新着ページ」の作品が表示されるようになります。
>!例えばページ数で「10」を指定すると、1ページあたり50作品であるため、新着から数えて500番目以降の作品が表示されるようになります。
>![実行結果](https://raw.github.com/suzunashi/pixivpagejump/master/description/result.jpg "実行結果")  

対応ブラウザ
-------------
* Internet Explorer  
* Firefox  
* Google Chrome  

免責事項
-------------
pixivPageJumpの利用により生じたいかなる損失・損害においても、鈴無蒸(pixivID:278010)は一切の責任を負わないものとします。

Release Note
-------------
* v.1.00 (2016/10/22) ファーストバージョン公開
