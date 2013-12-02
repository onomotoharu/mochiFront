$(document).ready(function(){
    //ヘッダー
    //$('#pagename').append("cheese!")
    // $('#r_btn a').append("更新");
    $reloadBtn = $('<img/>').attr('src', '../img/reload.png').css({
        width: '25',
        height: '25'
    });;
    $('#r_btn a').append($reloadBtn);


    //フッター
    $('#nav_reco img').attr("src", "../img/on/reco_on.png");

    App = new CheeseController();

    App.signIn("ren","test",function(json){
        console.log(json);
    });

    //中央　過去ログ
    App.getOwnActivities(function(kakolog){
        console.log(kakolog);
        var max = kakolog.activities.length - 1;
        App.getDetail(kakolog.activities[max].recipe_id,function(kako_img){
            console.log(kako_img);
            $(".center_circle a").attr("style", "background-image: url('http://winvelab.net/cheese/img/"+kako_img.default_picture_name+"')");
        });
    });

    App.getRecommend(function(recommend){
        console.log(recommend);

            //左上　レシピ名・軸・リンク・画像
            $('.lefttop .recipename').text(recommend[0].recipe.name);
            $('.lefttop .re_link').attr("class", recommend[0].recommend_type+"_s");
            $('.lefttop .axis').attr("class", recommend[0].recommend_type);
            $('.lefttop a').attr("style", "background-image: url('http://winvelab.net/cheese/img/"+recommend[0].recipe.default_picture_name+"')").attr("href", "../recipe/index.html?recipe_id="+recommend[0].recipe.id);
         
            //右上
            $('.righttop .recipename').text(recommend[1].recipe.name);
            $('.righttop .re_link').attr("class", recommend[1].recommend_type+"_s");
            $('.righttop .axis').attr("class", recommend[1].recommend_type);
            $('.righttop a').attr("style", "background-image: url('http://winvelab.net/cheese/img/"+recommend[1].recipe.default_picture_name+"')").attr("href", "../recipe/index.html?recipe_id="+recommend[1].recipe.id);

            //左下
            $('.leftbottom .recipename').text(recommend[2].recipe.name);
            $('.leftbottom .re_link').attr("class", recommend[2].recommend_type+"_s");
            $('.leftbottom .axis').attr("class", recommend[2].recommend_type);
            $('.leftbottom a').attr("style", "background-image: url('http://winvelab.net/cheese/img/"+recommend[2].recipe.default_picture_name+"')").attr("href", "../recipe/index.html?recipe_id="+recommend[2].recipe.id);

            //右下
            $('.rightbottom .recipename').text(recommend[3].recipe.name);
            $('.rightbottom .re_link').attr("class", recommend[3].recommend_type+"_s");
            $('.rightbottom .axis').attr("class", recommend[3].recommend_type);
            $('.rightbottom a').attr("style", "background-image: url('http://winvelab.net/cheese/img/"+recommend[3].recipe.default_picture_name+"')").attr("href", "../recipe/index.html?recipe_id="+recommend[3].recipe.id);
 
            for(var i=0;i<recommend.length;i++){
                $(".required_money").addClass("money"+recommend[i].recipe.required_money);
                $(".necessary_time").addClass("time"+recommend[i].recipe.necessary_time);
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

            $(".lefttop .seasoning").addClass("seasoning0");
            $(".righttop .seasoning").addClass("seasoning1");
            $(".leftbottom .seasoning").addClass("seasoning2");
            $(".rightbottom .seasoning").addClass("seasoning3");

            seasoning_c = new Array("砂糖 ", "塩 ", "酢 ", "醤油 ", "味噌 ",　"みりん");

            for(var i=0;i<recommend.length;i++){
                seasoning = recommend[i].recipe.seasoning.split("|");
                for(var j=0; j<seasoning.length; j++){
                    if(i==0){
                        if(seasoning[j] > 0){$('.seasoning0').append(seasoning_c[j]);}
                    }
                    else if(i==1){
                        if(seasoning[j] > 0){$('.seasoning1').append(seasoning_c[j]);}
                    }
                    else if(i==2){
                        if(seasoning[j] > 0){$('.seasoning2').append(seasoning_c[j]);}
                    }
                    else if(i==3){
                        if(seasoning[j] > 0){$('.seasoning3').append(seasoning_c[j]);}
                    }
                }
            }
 
            $(".lefttop .methods").addClass("methods0");
            $(".righttop .methods").addClass("methods1");
            $(".leftbottom .methods").addClass("methods2");
            $(".rightbottom .methods").addClass("methods3");

            methods_c = new Array("煮る ", "炒める ", "蒸す ", "焼く ", "漬ける ",　"和える ", "掛ける ", "揚げる ", "茹でる ", "混ぜる ", "煎じる ","燻す ", "干す ", "冷やす");

            for(var i=0;i<recommend.length;i++){
                methods = recommend[i].recipe.methods.split("|");
                for(var j=0; j<methods.length; j++){
                    if(i==0){
                        if(methods[j] > 0){$('.methods0').append(methods_c[j]);}
                    }
                    else if(i==1){
                        if(methods[j] > 0){$('.methods1').append(methods_c[j]);}
                    }
                    else if(i==2){
                        if(methods[j] > 0){$('.methods2').append(methods_c[j]);}
                    }
                    else if(i==3){
                        if(methods[j] > 0){$('.methods3').append(methods_c[j]);}
                    }
                }
            }

            $(".lefttop .last_food").addClass("last_food0");
            $(".righttop .last_food").addClass("last_food1");
            $(".leftbottom .last_food").addClass("last_food2");
            $(".rightbottom .last_food").addClass("last_food3");

            $(".lefttop .friend").addClass("friend0");
            $(".righttop .friend").addClass("friend1");
            $(".leftbottom .friend").addClass("friend2");
            $(".rightbottom .friend").addClass("friend3");

            for(var i=0;i<recommend.length;i++){
                if(recommend[i].options.length > 0){
                    for(var j=0; j<recommend[i].options[0].option.length; j++){
                        if(i==0){$('.last_food0').append(recommend[i].options[0].option[j]+" ");}
                        else if(i==1){$('.last_food1').append(recommend[i].options[0].option[j]+" ");}
                        else if(i==2){$('.last_food2').append(recommend[i].options[0].option[j]+" ");}
                        else if(i==3){$('.last_food3').append(recommend[i].options[0].option[j]+" ");}
                    }
                    if(recommend[i].options.length > 1){
                        for(var j=0; j<recommend[i].options[1].option.length; j++){
                            if(i==0){$('.friend0').append(recommend[i].options[1].option[j]+" ");}
                            else if(i==1){$('.friend1').append(recommend[i].options[1].option[j]+" ");}
                            else if(i==2){$('.friend2').append(recommend[i].options[1].option[j]+" ");}
                            else if(i==3){$('.friend3').append(recommend[i].options[1].option[j]+" ");}
                        }
                    }
                }
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


// 更新ボタン
$('#r_btn a').click(function(){
    location.reload();
});
