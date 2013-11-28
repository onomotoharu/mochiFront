

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

            //左上　レシピ名・軸・リンク・画像
            $('.lefttop .recipename').text(recommend[0].recipe.name);
            $('.lefttop .re_link').attr("class", recommend[0].recommend_type+"_s");
            $('.lefttop .axis').attr("class", recommend[0].recommend_type).text(recommend[0].recipe.category);
            $('.lefttop a').attr("style", "background-image: url('http://winvelab.net/cheese/img/"+recommend[0].recipe.default_picture_name+"')").attr("href", recommend[0].recipe.source_url+"?recipe_id="+recommend[0].recipe.id);
         
            //右上
            $('.righttop .recipename').text(recommend[1].recipe.name);
            $('.righttop .re_link').attr("class", recommend[1].recommend_type+"_s");
            $('.righttop .axis').attr("class", recommend[1].recommend_type).text(recommend[1].recipe.category);
            $('.lefttop a').attr("style", "background-image: url('http://winvelab.net/cheese/img/"+recommend[1].recipe.default_picture_name+"')").attr("href", recommend[1].recipe.source_url+"?recipe_id="+recommend[1].recipe.id);

            //左下
            $('.leftbottom .recipename').text(recommend[2].recipe.name);
            $('.leftbottom .re_link').attr("class", recommend[2].recommend_type+"_s");
            $('.leftbottom .axis').attr("class", recommend[2].recommend_type).text(recommend[2].recipe.category);
            $('.lefttop a').attr("style", "background-image: url('http://winvelab.net/cheese/img/"+recommend[2].recipe.default_picture_name+"')").attr("href", recommend[2].recipe.source_url+"?recipe_id="+recommend[2].recipe.id);

            //右下
            $('.rightbottom .recipename').text(recommend[3].recipe.name);
            $('.rightbottom .re_link').attr("class", recommend[3].recommend_type+"_s");
            $('.rightbottom .axis').attr("class", recommend[3].recommend_type).text(recommend[3].recipe.category);
            $('.lefttop a').attr("style", "background-image: url('http://winvelab.net/cheese/img/"+recommend[3].recipe.default_picture_name+"')").attr("href", recommend[3].recipe.source_url+"?recipe_id="+recommend[3].recipe.id);

        }
        loadRecommend();

    });    

        

    //中央　過去ログ
    App.getOwnActivities(function(kakolog){
        console.log(kakolog);
        App.getDetail(kakolog.activities[0].recipe_id,function(kako_img){
            console.log(kako_img);
            $img = $("<img/>").attr("src", "http://winvelab.net/cheese/img/"+kako_img.default_picture_name+")");
            $(".center_circle ul").append($img);
        });
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


// 更新ボタン
$('#r_btn a').click(function(){
    location.reload();
});



