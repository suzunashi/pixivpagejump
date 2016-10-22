// Pixiv Page Jump
// 2016年冬頃あたりから順次リニューアルされたpixivにて、<BR />
// 「フォロー新着ページ」の作品群の古い作品を見る際、スクロールでなく、ページ指定方式をとることで、<BR />
// 一年以上前などの古い作品をすばやく見ることができる非公式スクリプトです。
// ブックマークレットとして利用します。
var page = parseInt(window.prompt("ジャンプするページ数を指定してください（1ページ＝50作品）", "1"));
if(isNaN(page) || page < 1){
    alert('1以上の整数を指定してください');
} else {
    var i=0;
    // プログレスダイアログを作成
    var div = document.createElement('div');
    div.setAttribute("style",
        "position:fixed;" +
        "top:calc(50% - 50px);" +
        "left:calc(50% - 100px);" +
        "z-index:1000;" +
        "width:200px;" +
        "height:100px;" +
        "background-color:rgba(0,0,0,0.5);" +
        "color:#FFF;" + 
        "display: flex;" +
        "align-items:center;" +
        "justify-content:center;" +
        "font-size:1.2em;" +
        "border-radius:10px");
    document.getElementsByTagName('body')[0].insertBefore(div, document.getElementsByTagName('body')[0].firstChild);

    // ページを順次、非同期読み込み
    function get_next(nexturl) {
        if(window.XMLHttpRequest){
            httpObj = new XMLHttpRequest();
        } else if(window.ActiveXObject){
            httpObj = new XMLHttpRequest('MSXML2.XMLHTTP.3.0');
        }
        httpObj.onreadystatechange = function display(){
            if(httpObj.readyState == 4 && httpObj.status == 200){
                if(i < page) {
                    i++;
                    div.textContent = '読み込み中：' + i + '/' + page + 'ページ';
                    console.log(JSON.parse(httpObj.responseText));
                    get_next(JSON.parse(httpObj.responseText).body.next_url);
                } else {
                    window.location.href = JSON.parse(httpObj.responseText).body.continuation_url;
                }
            }
        };
        httpObj.open("GET", nexturl,true);
        httpObj.send(null);
    }

    // 読み込み開始
    get_next("http://www.pixiv.net/rpc/whitecube/index.php?mode=latest_follow&filter=all&limit=50");
}
