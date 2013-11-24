
$(document).ready(function(){
    //ヘッダー
    $('#pagename').append("cheese!")
    $('#r_btn a').append("更新");

    //フッター
    $('#nav_reco img').attr("src", "../img/on/reco_on.png");

    //仮JSON　まわりの４つ
    reco = [{"photo":"./img/foodphoto1.jpg",
            "jiku":"煮る、焼く、蒸す、炒める",
            "class": "process",
            "recipename":"朝食・お弁当に♪ふわふわオムレツ",
            "link": "りんく１"},
            {"photo":"./img/foodphoto2.jpg",
            "jiku":"ひらっちさん、あんどーさん",
            "class": "friend",
            "recipename":"基本的なチンジャオロース",
            "link": "りんく２"},
            {"photo":"./img/foodphoto3.jpg",
            "jiku":"60分",
            "class": "time",
            "recipename":"さくさく野菜たっぷりコロッケ",
            "link": "りんく３"},
            {"photo":"./img/foodphoto4.jpg",
            "jiku":"にんじん,ピーマン,合挽肉,ケチャップ",
            "class": "material",
            "recipename":"右下",
            "link": "りんく４"}];

    //仮JSON　過去ログ部分
    kako = [{"photo":"./img/meat.jpg",
            "link":"../recipe/index.html"},
            {"photo":"./img/foodphoto1.jpg",
            "link": "りんく１"},
            {"photo":"./img/foodphoto2.jpg",
            "link": "りんく２"},
            {"photo":"./img/foodphoto3.jpg",
            "link": "りんく３"},
            {"photo":"./img/foodphoto4.jpg",
            "link": "りんく４"},
            {"photo":"./img/foodphoto5.jpg",
            "link":"りんく５"}];

    //左上　レシピ名・軸・
    $('.lefttop .recipename').text(reco[0].recipename);
    $('.lefttop .process').text(reco[0].jiku);
    $('.lefttop a').attr("style", "background-image: url("+reco[0].photo+")").attr("href", reco[0].link);
 
    //右上
    $('.righttop .recipename').text(reco[1].recipename);
    $('.righttop .friend').text(reco[1].jiku);
    $('.righttop a').attr("style", "background-image: url("+reco[1].photo+")").attr("href", reco[1].link);

    //左下
    $('.leftbottom .recipename').text(reco[2].recipename);
    $('.leftbottom .time').text(reco[2].jiku);
    $('.leftbottom a').attr("style", "background-image: url("+reco[2].photo+")").attr("href", reco[2].link);

    //右下
    $('.rightbottom .recipename').text(reco[3].recipename);
    $('.rightbottom .material').text(reco[3].jiku);
    $('.rightbottom a').attr("style", "background-image: url("+reco[3].photo+")").attr("href", reco[3].link);

    //中央　過去ログ
    for(var i=0; i < kako.length; i++){
        $a = $("<a/>").attr("href", kako[i].link).addClass("center").attr("style", "background-image: url("+kako[i].photo+")");
        $li = $("<li/>").append($a);
        $(".center_circle ul").append($li);     
    }


//======================================↑中す



//======================================↓中朋


    $('.recipename').each(function() {
        var $target = $(this);
 
        // オリジナルの文章を取得する
        var html = $target.html();
 
        // 対象の要素を、高さにautoを指定し非表示で複製する
        var $clone = $target.clone();
        $clone
            .css({
                display: 'none',
                position : 'absolute',
                overflow : 'visible'
            })
            .width($target.width())
            .height('auto');
 
        // DOMを一旦追加
        $target.after($clone);
 
        // 指定した高さになるまで、1文字ずつ消去していく
        while((html.length > 0) && ($clone.height() > $target.height())) {
            html = html.substr(0, html.length - 1);
            $clone.html(html + '...');
        }
 
        // 文章を入れ替えて、複製した要素を削除する
        $target.html($clone.html());
        $clone.remove();
    });
});



//=============================更新ボタン　中す

/*$(function(){
    $('#r_btn a').click(function(){
    });
});*/




