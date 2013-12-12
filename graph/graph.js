
var max=0;

$(function(){
	$('#pagename').append("マイページ")

	screen_id = getUrlVars()["recipe_id"];

    App.getOwnProfile(function(myprofile){
        if(screen_id == null){
            $('#nav_my img').attr("src", "../img/on/my_on.png");
            // プロフィール部分DOM操作
            $('.myname').html(myprofile.screen_id);
            $('.followcount').append(myprofile.following.length);
            $('.followercount').append(myprofile.followers.length);
            $('#myphoto img').attr("src",myprofile.icon_name);
            $('#myintro').append(myprofile.bio);
            screen_id = myprofile.screen_id;
        }else{  
            App.getProfile(screen_id, function(profile){
                $('.myname').html(profile.screen_id);
                $('.followcount').append(profile.following.length);
                $('.followercount').append(profile.followers.length);
                $('#myphoto img').attr("src",profile.icon_name);
                $('#myintro').append(profile.bio);

                $('.follow a').attr("href", "../follow/follow.html?recipe_id="+screen_id);
                $('.follower a').attr("href", "../follow/follower.html?recipe_id="+screen_id);

                $('#log a').attr("href", "../log/index.html?recipe_id="+screen_id);
                $('#fav a').attr("href", "../fav/index.html?recipe_id="+screen_id);
                $('#badge a').attr("href", "../medal/index.html?recipe_id="+screen_id);

                for(i=0; i<myprofile.following.length; i++){
                    if(myprofile.following[i].screen_id == profile.screen_id){
                        $('#followbtn').addClass("on").removeClass("off").text("フォロー中");
                    }
                    else{
                        $('#followbtn').text("フォローする");
                    }
                }

                $('#followbtn').click(function(){
                    if($('#followbtn').hasClass('off')){
                        $('#followbtn').addClass('on').removeClass('off').text('フォロー中');
                        App.setFollow(screen_id,function(id){
                            console.log("した");
                        });
                        profile.followers.length = profile.followers.length + 1;
                        $('.followercount').empty().append(profile.followers.length);
                    }
                    else if($('#followbtn').hasClass('on')){
                        $('#followbtn').addClass('off').removeClass('on').text('フォローする');
                        App.setUnfollow(screen_id,function(id){
                            console.log("はずした");
                        });
                        profile.followers.length = profile.followers.length - 1;
                        $('.followercount').empty().append(profile.followers.length);
                    }
                });
            });
        }
    });

		App.getGraph(screen_id, function(graph){
			console.log(graph);

			for(i=0; i<graph.category.length; i++){	
				if(max < graph.category[i]){
					max=graph.category[i];
				}
			}

			$("#input1").attr("value", graph.category[0]);
			$("#input2").attr("value", graph.category[1]);
			$("#input3").attr("value", graph.category[2]);
			$("#input4").attr("value", graph.category[3]);
			$("#input5").attr("value", graph.category[4]);
			$("#input6").attr("value", graph.category[5]);
			$("#input7, #input8, #input9, #input10, #input11, #input12").attr("value", max);
		});

	$('#canvasChart').canvasChart({
        /*********************
         * 基本設定
        *********************/
        polygon             : 6,            //頂点の数
        chartInput          : '.chartInput',//チャートのインプットclass
        valuation           : max,          //評価値
        radius              : 130,          //半径
        bgType              : 'pol',        //背景のタイプ　 pol:多角形 or arc:円
        angle               : '30',         //レーダーチャートの回転度数
            
        /*********************
         * 背景
        *********************/
        bgStroke            : true,         //背景の線 true or false
        bgStrokeColor       : '#ece2d5',    //背景の線色
        bgLineWidth         : 4,            //背景の線の太さ
        bgFill              : true,        //背景の塗り true or false
        bgDivision          : 3,                    //背景の分割数
            
        /*********************
         * チャート
        *********************/
        chartStrokeColor    : ['#e07431','#9c7d25'],  //チャートの線
        chartFillColor      : ['rgba(224, 116, 49, 0.3)', 'none'],//チャートの塗り色 noneで塗らない
        chartLineWidth      : 6,//線の太さ
            
        /*********************
         * レーダーチャートの頂点
        *********************/
        chartPoint          : true,         //チャートの点描画 true or false
        chartPointType      : ['square','arc'],   //点の図形タイプ square:四角 or arc:円
        chartPointType2     : ['fill'],     //線か塗りつぶし　stroke or fill
        chartPointLineWidth : 1,            //頂点の線の太さ
        chartPointSize      : [0, 15],         //チャートの頂点サイズ
        chartPointColor     : [''],         //チャートの頂点描画色、指定無しで線と同じ色
            
        /*********************
         * 評価名
        *********************/
        valuationPrint      : true,         //評価名の表示　true or false
        valuationName       : ['麺','米','菜','魚','肉', '他'],//評価名
        valuationPosition   : 1,            //評価名要素の位置
        valuationClass      : '',           //評価名要素のclass デフォルトでvalName
            
        /**********************
         評価の数値
        **********************/
        valuationCntPrint      : false,                //評価の数値表記 true or false
        valuationCntClass       : '',           //評価の数値のclass　デフォルトでvalCntName
        printZero           : false,        //中央0の表記 true or false
        valuationCntDivision: 3,                    //評価の数値分割数
                                    
        /*********************
         * 中央からのゲージライン
        *********************/
        gauge               : true,         //中央からのゲージライン描画 true or false
        gaugeColor          : '',           //中央からのゲージライン描画色、指定無しで背景線と同じ色
                                    
        /*********************
         * ゲージラインのスケール
        *********************/
        scale               : false,         //ゲージラインの目盛り描画 true or false
    });

	$('#log a').hover(function(){
		$('#log a img').attr('src', $('#log a img').attr('src').replace('_off', '_on'));
	}, function(){
		if (!$('#log a img').hasClass('current')) {
			$('#log a img').attr('src', $('#log a img').attr('src').replace('_on', '_off'));
		}
	});
	$('#graph a').hover(function(){
		$('#graph a img').attr('src', $('#graph a img').attr('src').replace('_off', '_on'));
	}, function(){
		if (!$('#graph a img').hasClass('current')) {
			$('#graph a img').attr('src', $('#graph a img').attr('src').replace('_on', '_off'));
		}
	});
	$('#fav a').hover(function(){
		$('#fav a img').attr('src', $('#fav a img').attr('src').replace('_off', '_on'));
	}, function(){
		if (!$('#fav a img').hasClass('current')) {
			$('#fav a img').attr('src', $('#fav a img').attr('src').replace('_on', '_off'));
		}
	});	
	$('#badge a').hover(function(){
		$('#badge a img').attr('src', $('#badge a img').attr('src').replace('_off', '_on'));
	}, function(){
		if (!$('#badge a img').hasClass('current')) {
			$('#badge a img').attr('src', $('#badge a img').attr('src').replace('_on', '_off'));
		}
	});
	
});

