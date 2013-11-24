
$(document).ready(function(){
    $('#pagename').append("cheese!")
    $('#r_btn a').append("更新");
});

$(function(){
  $('#nav_reco img').attr("src", "../img/on/reco_on.png");
});

$(function(){
    reco = [{"photo":"./img/foodphoto1.jpg",
            "jiku":"煮る、焼く、蒸す、炒める",
            "recipename":"朝食・お弁当に♪ふわふわオムレツ",
            "link": "りんく１"},
            {"photo":"./img/foodphoto2.jpg",
            "jiku":"ひらっちさん、あんどーさん",
            "recipename":"基本的なチンジャオロース",
            "link": "りんく２"},
            {"photo":"./img/foodphoto3.jpg",
            "jiku":"60分",
            "recipename":"さくさく野菜たっぷりコロッケ",
            "link": "りんく３"},
            {"photo":"./img/foodphoto4.jpg",
            "jiku":"にんじん,ピーマン,合挽肉,ケチャップ",
            "recipename":"右下",
            "link": "りんく４"}];
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
});
/*$(つくったボタン cookedBtn).click(function(){
    //center_circleにログ追加
})*/

$(document).ready(function(){
    $('.lefttop .recipename').text(reco[0].recipename);
    $('.lefttop .process').text(reco[0].jiku);
    $('.righttop .recipename').text(reco[1].recipename);
    $('.righttop .friend').text(reco[1].jiku);
    $('.leftbottom .recipename').text(reco[2].recipename);
    $('.leftbottom .time').text(reco[2].jiku);
    $('.rightbottom .recipename').text(reco[3].recipename);
    $('.rightbottom .material').text(reco[3].jiku);
});

$(function(){
    $('.lefttop a').attr("style", "background-image: url("+reco[0].photo+")").attr("href", reco[0].link);
    $('.righttop a').attr("style", "background-image: url("+reco[1].photo+")").attr("href", reco[1].link);
    $('.leftbottom a').attr("style", "background-image: url("+reco[2].photo+")").attr("href", reco[2].link);
    $('.rightbottom a').attr("style", "background-image: url("+reco[3].photo+")").attr("href", reco[3].link);
});

$(function(){
    for(var i=0; i < kako.length; i++){
        $a = $("<a/>").attr("href", kako[i].link).addClass("center").attr("style", "background-image: url("+kako[i].photo+")");
        $li = $("<li/>").append($a);
        $(".center_circle ul").append($li);     
    }
});

      /*$(function(){
        $('#r_btn a').click(function(){
        });
      });*/


$(function() {
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
