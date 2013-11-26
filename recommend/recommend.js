
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



$(document).ready(function(){
    //ヘッダー
    //$('#pagename').append("cheese!")
    $('#r_btn a').append("更新");

    //フッター
    $('#nav_reco img').attr("src", "../img/on/reco_on.png");

    App = new CheeseController();

    App.signIn("ren","test",function(json){
        console.log(json);
    });

    App.getRecommend(function(recommend){
        console.log(recommend);
        function loadRecommend(){

            //左上　レシピ名・軸・
            $('.lefttop .recipename').text(recommend.name);
            $('.lefttop .re_link').attr("class", recommend.category+"_s");
            $('.lefttop .axis').attr("class", recommend.category).text(recommend.tips);
            $('.lefttop a').attr("style", "background-image: url("+recommend.default_picture_name+")").attr("href", recommend.source_url);
         
            //右上
            $('.righttop .recipename').text(reco[1].recipename);
            $('.righttop .re_link').attr("class", reco[1].class+"_s");
            $('.righttop .axis').attr("class", reco[1].class).text(reco[1].jiku);
            $('.righttop a').attr("style", "background-image: url("+reco[1].photo+")").attr("href", reco[1].link);

            //左下
            $('.leftbottom .recipename').text(reco[2].recipename);
            $('.leftbottom .re_link').attr("class", reco[2].class+"_s");
            $('.leftbottom .axis').attr("class", reco[2].class).text(reco[2].jiku);
            $('.leftbottom a').attr("style", "background-image: url("+reco[2].photo+")").attr("href", reco[2].link);

            //右下
            $('.rightbottom .recipename').text(reco[3].recipename);
            $('.rightbottom .re_link').attr("class", reco[3].class+"_s");
            $('.rightbottom .axis').attr("class", reco[3].class).text(reco[3].jiku);
            $('.rightbottom a').attr("style", "background-image: url("+reco[3].photo+")").attr("href", reco[3].link);
        }
        loadRecommend();
    });

    //loadRecommend();

    //中央　過去ログ
    App.getOwnActivities(function(kakolog){
        console.log(kakolog);
        for(var i=0; i < kakolog.length; i++){
            $a = $("<a/>").attr("href", kakolog[i].link).addClass("center").attr("style", "background-image: url("+kakolog[i].photo+")");
            $li = $("<li/>").append($a);
            $(".center_circle ul").append($li);
        }
    });


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


$(function(){
    $('#r_btn a').click(function(){
        loadRecommend();
    });
});




