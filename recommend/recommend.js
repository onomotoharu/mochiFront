
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

            //左上　レシピ名・軸・リンク・画像
            $('.lefttop .recipename').text(recommend[0].recipe.name);
            $('.lefttop .re_link').attr("class", recommend[0].recommend_type+"_s");
            $('.lefttop .axis').attr("class", recommend[0].recommend_type);
            $('.lefttop a').attr("style", "background-image: url('http://winvelab.net/cheese/img/"+recommend[0].recipe.default_picture_name+"')").attr("href", recommend[0].recipe.source_url+"?recipe_id="+recommend[0].recipe.id);
         
            //右上
            $('.righttop .recipename').text(recommend[1].recipe.name);
            $('.righttop .re_link').attr("class", recommend[1].recommend_type+"_s");
            $('.righttop .axis').attr("class", recommend[1].recommend_type);
            $('.righttop a').attr("style", "background-image: url('http://winvelab.net/cheese/img/"+recommend[1].recipe.default_picture_name+"')").attr("href", recommend[1].recipe.source_url+"?recipe_id="+recommend[1].recipe.id);

            //左下
            $('.leftbottom .recipename').text(recommend[2].recipe.name);
            $('.leftbottom .re_link').attr("class", recommend[2].recommend_type+"_s");
            $('.leftbottom .axis').attr("class", recommend[2].recommend_type);
            $('.leftbottom a').attr("style", "background-image: url('http://winvelab.net/cheese/img/"+recommend[2].recipe.default_picture_name+"')").attr("href", recommend[2].recipe.source_url+"?recipe_id="+recommend[2].recipe.id);

            //右下
            $('.rightbottom .recipename').text(recommend[3].recipe.name);
            $('.rightbottom .re_link').attr("class", recommend[3].recommend_type+"_s");
            $('.rightbottom .axis').attr("class", recommend[3].recommend_type);
            $('.rightbottom a').attr("style", "background-image: url('http://winvelab.net/cheese/img/"+recommend[3].recipe.default_picture_name+"')").attr("href", recommend[3].recipe.source_url+"?recipe_id="+recommend[3].recipe.id);

            for(var i=0;i<recommend.length;i++){
                $(".required_money").addClass("money"+recommend[i].recipe.required_money);
                $(".necessary_time").addClass("time"+recommend[i].recipe.necessary_time);
                seasoning = recommend[i].recipe.seasoning.split("|");
                methods = recommend[i].recipe.methods.split("|");
                $(".food").text(recommend[i].recipe.created_at.split("T")[0]);
            }

            $(".money1").text("100円以下");
            $(".money2").text("300円前後");
            $(".money3").text("500円前後");
            $(".money4").text("1000円前後");
            $(".money5").text("2000円前後");
            $(".money6").text("3000円前後");
            $(".money7").text("5000円前後");
            $(".money8").text("10000円以上");

            $(".time1").text("5分以下");
            $(".time2").text("約10分");
            $(".time3").text("約15分");
            $(".time4").text("約30分");
            $(".time5").text("約1時間");
            $(".time6").text("1時間以上");

            if(seasoning[0] > 0){$(".seasoning").append("砂糖 ");}
            if(seasoning[1] > 0){$(".seasoning").append("塩 ");}
            if(seasoning[2] > 0){$(".seasoning").append("酢 ");}
            if(seasoning[3] > 0){$(".seasoning").append("醤油 ");}
            if(seasoning[4] > 0){$(".seasoning").append("味噌 ");}
            if(seasoning[5] > 0){$(".seasoning").append("みりん");}
 
            if(methods[0] > 0){$(".methods").append("煮る ");}
            if(methods[1] > 0){$(".methods").append("炒める ");}
            if(methods[2] > 0){$(".methods").append("蒸す ");}
            if(methods[3] > 0){$(".methods").append("焼く ");}
            if(methods[4] > 0){$(".methods").append("漬ける ");}
            if(methods[5] > 0){$(".methods").append("和える ");}
            if(methods[6] > 0){$(".methods").append("掛ける ");} //?
            if(methods[7] > 0){$(".methods").append("揚げる ");}
            if(methods[8] > 0){$(".methods").append("茹でる ");}
            if(methods[9] > 0){$(".methods").append("混ぜる ");}
            if(methods[10] > 0){$(".methods").append("煎じる ");} //?
            if(methods[11] > 0){$(".methods").append("燻す ");}
            if(methods[12] > 0){$(".methods").append("干す ");}
            if(methods[13] > 0){$(".methods").append("冷やす ");}

    });    

        

    //中央　過去ログ
    App.getOwnActivities(function(kakolog){
        console.log(kakolog);
        App.getDetail(kakolog.activities[0].recipe_id,function(kako_img){
            console.log(kako_img);
            $(".center_circle a").attr("style", "background-image: url('http://winvelab.net/cheese/img/"+kako_img.default_picture_name+"')");
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



