/*  
 *  jQuery Canvas Chart - version 1.0
 *  (c)2012 oreweb
 *
 *  この作品は、クリエイティブ・コモンズの表示 2.1 日本ライセンスの下でライセンスされています。
 *  この使用許諾条件を見るには、http://creativecommons.org/licenses/by-sa/2.1/jp/を
 *  チェックするか、クリエイティブ･コモンズに郵便にてお問い合わせください。
 *  住所：559 Nathan Abbott Way, Stanford, California 94305, USA
 *
 */


$(function(){
	
	$.fn.canvasChart = function(options){
		// デフォルトオプション
		var defaults = {	
			
			/*********************
			 * 基本設定
			*********************/
			polygon 			: 5,			//頂点の数
			chartInput 			: '.chartInput',//チャートのインプットclass
			valuation 			: 5,			//評価値
			radius 				: 150,			//半径
			bgType 				: 'pol',		//背景のタイプ　 pol:多角形 or arc:円
			angle 				: '',			//レーダーチャートの回転度数
			
			/*********************
			 * 背景
			*********************/
			bgStroke 			: true,			//背景の線 true or false
			bgStrokeColor 		: '#ddd',		//背景の線色
			bgLineWidth			: 1,			//背景の線の太さ
			bgFill 				: true,			//背景の塗り true or false
			bgFillColor 		: '#fafafa',	//背景の塗り
			bgDivision 			: undefined,	//背景の分割数
			
			/*********************
			 * チャート
			*********************/
			chartStrokeColor 	: ['#ffa656'],	//チャートの線
			chartFillColor		: ['rgba(255, 210, 170, 0.5)'],//チャートの塗り色 noneで塗らない
			chartLineWidth		: 1,//線の太さ
			
			/*********************
			 * レーダーチャートの頂点
			*********************/
			chartPoint 			: true,			//チャートの点描画 true or false
			chartPointType 		: ['square'],	//点の図形タイプ square:四角 or arc:円
			chartPointType2 	: ['fill'],		//線か塗りつぶし　stroke or fill
			chartPointLineWidth	: 1,			//頂点の線の太さ
			chartPointSize 		: [10],			//チャートの頂点サイズ
			chartPointColor 	: [''],			//チャートの頂点描画色、指定無しで線と同じ色
			
			/*********************
			 * チャートタイプ
			*********************/
			selectable			: false,		//セレクタブル機能、radio selectに対応、inputのnameにselectableを指定してください
			selectableName		: 'selectable',	//セレクタブル名、デフォルトでselectable
			checkbox			: false,		//チェックボックス機能、radio selectに対応、inputのnameにcheckboxを指定してください
			checkboxName		: 'checkbox',	//チェックボックス、デフォルトでcheckbox
			compare				: false,		//比較機能、使用する際はselectableかcheckboxをtrueにしてください
			
			/*********************
			 * 評価名
			*********************/
			valuationPrint 		: true,			//評価名の表示　true or false
			valuationName 		: ['評価1','評価2','評価3','評価4','評価5'],//評価名
			valuationPosition 	: 1.15,			//評価名要素の位置
			valuationClass 		: '',			//評価名要素のclass デフォルトでvalName
			
			/*********************
			 * 評価の数値
			*********************/
			valuationCntPrint 	: true,			//評価の数値表記 true or false
			valuationCntClass 	: '',			//評価の数値のclass　デフォルトでvalCntName
			valuationCntPosition: 10,			//評価の数値位置
			printZero 			: true,			//中央0の表記 true or false
			valuationCntDivision: undefined,	//評価の数値分割数
			
			/*********************
			 * 中央からのゲージライン
			*********************/
			gauge 				: true,			//中央からのゲージライン描画 true or false
			gaugeColor 			: '',			//中央からのゲージライン描画色、指定無しで背景線と同じ色
			
			/*********************
			 * ゲージラインのスケール
			*********************/
			scale 				: true,			//ゲージラインの目盛り描画 true or false
			scaleSize 			: 10,			//ゲージラインの目盛りサイズ
			scaleColor 			: '',			//ゲージラインの目盛り色、指定無しで背景線と同じ色
			scaleDivision 		: undefined		//ゲージラインの目盛分割数
		}; 
		
		var options = $.extend(defaults, options);  
		
		this.each(function() {
			var canvas = $(this).find('canvas').get(0),
			canvasObj = $(this),
			inputGroup =  $(this).find(options.chartInput),
			x = $(this).find('canvas').width()/2,
			y = $(this).find('canvas').height()/2,
			cbElm = canvasObj.find('input[name='+options.checkboxName+']:checked'),
			cbCnt = cbElm.size(),
			clear = false,
			angle,r,val,s,gCnt,tgt,cWidth,cHeight,dvs;
			
			draw();
			
			
			if(options.selectable){
				canvasObj.find('input[name='+options.selectableName+']').change( function() {
					clear = true,
					tgt = canvasObj.find('input[name='+options.selectableName+']:checked').val()-1;
					if(options.compare){tgt = tgt+1}
					draw();
					clear = false;
				});
				canvasObj.find('select[name='+options.selectableName+']').change( function() {
					clear = true,
					tgt = canvasObj.find('select[name='+options.selectableName+'] option:selected').val()-1;
					if(options.compare){tgt = tgt+1}
					draw();
					clear = false;
				});
			};
			
			if(options.checkbox){
				canvasObj.find('input[name='+options.checkboxName+']').change( function() {
					clear = true,
					cbElm = canvasObj.find('input[name='+options.checkboxName+']:checked'),
					cbCnt = cbElm.size();
					draw();
					clear = false;
				});
			};
		
			
			function draw() {
					if ( ! canvas || ! canvas.getContext ) {return false;};
					canvasObj.css('position','relative');
					var ctx = canvas.getContext('2d'),
					angle = (options.angle!='') ? (options.angle-90)*Math.PI/180 : -Math.PI/2,
					interior = 2*Math.PI/options.polygon;
					canvasObj.find('canvas').css('display','block');
					
					if(clear){
						cWidth = canvasObj.find('canvas').width(),
						cHeight = canvasObj.find('canvas').height();
						ctx.clearRect(0, 0, cWidth, cHeight);
					}
					
					//bg
					dvs = (options.bgDivision == undefined) ? options.valuation : options.bgDivision;
					for(var v = dvs;v > 0;--v){
						figure(options.bgType,options.bgFillColor,options.bgStrokeColor,false);
					};
					
					//gauge
					if(options.gauge){
						if(options.gaugeColor == ''){
							options.gaugeColor =　options.bgStrokeColor;
						};
						gaugeDraw(options.gaugeColor);
					};
					
					//scale
					if(options.scale){
						if(options.scaleColor == ''){
							options.scaleColor =　options.bgStrokeColor;
						};
						scaleDraw(options.scaleColor);
					};
					
					//chart
					gCnt = inputGroup.size();
					if(options.compare){
						chartDraw(0);
					};
					if(options.checkbox){
						for(var g = 0;g < cbCnt;++g){
							tgt = cbElm.eq(g).val()-1;
							if(options.compare){tgt = tgt+1}
							chartDraw(tgt);
						};
					}else{
						if(!options.compare || clear){
							for(var g = 0;(options.selectable) ? g < 1 :g < gCnt;++g){
								chartDraw((clear) ? tgt : g);
							};
						};
					};
					
					if(!clear){
						if(options.valuationPrint){
							valNameDraw();
						};
						if(options.valuationCntPrint){
							valCntDraw();
						};
					};
					
					
					function figure(bgType,fill,stroke,chart){
						if(chart){
							val = input.eq(0).val();
							r = options.radius*val/options.valuation;
						}else{
							val = v;
							r = options.radius*val/dvs;
						};

						ctx.beginPath();
						if(bgType == 'pol' || chart){
							ctx.moveTo(r*Math.cos(angle)+x, r*Math.sin(angle)+y);
							for(var i = 1;i < options.polygon;++i){
								if(chart){
									val = input.eq(i).val();
									r = options.radius*val/options.valuation;
								};
								s = interior *i + angle;
								ctx.lineTo(r*Math.cos(s)+x,  r*Math.sin(s)+y);
							};
							ctx.closePath();
						}else{
							ctx.arc(x, y, r, 0, Math.PI*2, false);
						};
						if(chart){
							if(!(fill == 'none')){
								ctx.fillStyle = fill;
								ctx.fill();
							};
						}else{
							if(options.bgFill){
								ctx.fillStyle = fill;
								ctx.fill();
							};
						};
						if(chart){
							ctx.strokeStyle = stroke;
							ctx.lineWidth  = options.chartLineWidth;
							ctx.stroke();
						}else{
							if(options.bgStroke){
								ctx.strokeStyle = stroke;
								ctx.lineWidth  = options.bgLineWidth;
								ctx.stroke();
							};
						};
					};
					
					function chartDraw(chartTgt){
						input = inputGroup.eq(chartTgt).find('input');
						if(options.chartStrokeColor[chartTgt] == undefined){
							options.chartStrokeColor[chartTgt] = options.chartStrokeColor[0];
						};
						if(options.chartFillColor[chartTgt] == undefined){
							options.chartFillColor[chartTgt] = options.chartFillColor[0];
						};
						figure('pol',options.chartFillColor[chartTgt],options.chartStrokeColor[chartTgt],true);
						
						if(options.chartPoint){
							if(options.chartPointColor[chartTgt] == undefined ||options.chartPointColor[chartTgt] == ''){
								options.chartPointColor[chartTgt] =　options.chartStrokeColor[chartTgt];
							};
							point(options.chartPointColor[chartTgt],true);
						};
					}

					function gaugeDraw(stroke){
						//line
						r = options.radius;
						for(var i = 0;i < options.polygon;++i){
							ctx.beginPath();
							ctx.moveTo(x, y);
							s = interior *i + angle;
							ctx.lineTo(r*Math.cos(s)+x,  r*Math.sin(s)+y);
							ctx.closePath();
							ctx.strokeStyle = stroke;
							ctx.stroke();
							
						};
					};
					
					function scaleDraw(stroke){
						dvs = (options.scaleDivision == undefined) ? options.valuation: options.scaleDivision;
						for(var sv = 1;sv <= dvs;++sv){
							r = options.radius*sv/dvs;
							for(var i = 0;i < options.polygon;++i){
								s = interior *i + angle;		
								ctx.beginPath();
								var ra = Math.acos(r/Math.sqrt((Math.pow(r,2)+Math.pow(options.scaleSize,2))));
								ctx.moveTo(x+(Math.cos(s-ra)*Math.sqrt(Math.pow(r,2)+Math.pow(options.scaleSize,2))), y+(Math.sin(s-ra)*Math.sqrt(Math.pow(r,2)+Math.pow(options.scaleSize,2))));
								ctx.lineTo(x+(Math.cos(s+ra)*Math.sqrt(Math.pow(r,2)+Math.pow(options.scaleSize,2))), y+( Math.sin(s+ra)*Math.sqrt(Math.pow(r,2)+Math.pow(options.scaleSize,2))));
								ctx.closePath();
								ctx.strokeStyle = stroke;
								ctx.stroke();
							};
						};
					};
					
					function point(color,chart){
						r = options.radius*val/options.valuation;
						
						for(var i = 0;i < options.polygon;++i){
							ctx.beginPath();
							if(chart){
								val = input.eq(i).val();
								r = options.radius*val/options.valuation;
							};
							s = interior *i + angle;
							ctx.lineTo(r*Math.cos(s)+x,  r*Math.sin(s)+y);
							
							if(options.chartPointType[g] == undefined){
								options.chartPointType[g] = options.chartPointType[0]
							};
							if(options.chartPointSize[g] == undefined){
								options.chartPointSize[g] = options.chartPointSize[0]
							};
							if(options.chartPointType[g] == 'arc' ){
								ctx.beginPath();
				  				ctx.arc(r*Math.cos(s)+x, r*Math.sin(s)+y, options.chartPointSize[g], 0, Math.PI*2, false);
				  				if(options.chartPointType2[g] == undefined){
									options.chartPointType2[g] = options.chartPointType2[0]
								};
				  				if(options.chartPointType2[g] =='stroke'){
				  					ctx.strokeStyle = color;
				  					ctx.lineWidth = options.chartPointLineWidth;
									ctx.stroke();
									ctx.fillStyle = '#fff';
									ctx.fill();	
				  				}else{
				  					ctx.fillStyle = color;
									ctx.fill();	
				  				};
								
							}else{
								ctx.beginPath();
								if(options.chartPointType2[g] =='stroke'){
									ctx.rect(r*Math.cos(s)+x-(options.chartPointSize[g]/2), r*Math.sin(s)+y-(options.chartPointSize[g]/2), options.chartPointSize[g], options.chartPointSize[g]);
									ctx.strokeStyle = color;
									ctx.lineWidth = options.chartPointLineWidth;
									ctx.stroke();
									ctx.fillStyle = '#fff';
									ctx.fill();	
								}else{
									ctx.fillStyle = color;
									ctx.fillRect(r*Math.cos(s)+x-(options.chartPointSize[g]/2), r*Math.sin(s)+y-(options.chartPointSize[g]/2), options.chartPointSize[g], options.chartPointSize[g]);
								};
							};
						};
					};
					
					function valCntDraw(){
						
						if(options.valuationCntClass == ''){
								options.valuationCntClass = 'valCntName';
							};
						dvs = (options.valuationCntDivision == undefined) ? options.valuation : options.valuationCntDivision;
						for(var v = (options.printZero) ? 0 : 1;v <= dvs;++v){
							r = options.radius*v/dvs;
							s = interior *0 + angle;
							var printVal = (options.valuationCntDivision == undefined) ? v :v*options.valuation/options.valuationCntDivision;
							canvasObj.append('<span class="'+options.valuationCntClass+'">'+printVal+'</span>');
							var valCntWidth = canvasObj.find('.'+options.valuationCntClass+':last').width()/2,
							valCntheight = canvasObj.find('.'+options.valuationCntClass+':last').height()/2,
							ra = Math.acos(r/Math.sqrt((Math.pow(r,2)+Math.pow(options.valuationCntPosition,2))));
							canvasObj.find('.'+options.valuationCntClass+':last').css({position:'absolute',top:y+( Math.sin(s-ra)*Math.sqrt(Math.pow(r,2)+Math.pow(options.valuationCntPosition,2)))-valCntheight,left:x+(Math.cos(s-ra)*Math.sqrt(Math.pow(r,2)+Math.pow(options.valuationCntPosition,2)))-valCntWidth});
						};
					};
					
					
					function valNameDraw(){
						r = options.radius*options.valuationPosition;
						if(options.valuationClass == ''){
							options.valuationClass = 'valName';
						};
						for(var i = 0;i < options.polygon;++i){
							canvasObj.append('<span class="'+options.valuationClass+'">'+options.valuationName[i]+'</span>');
							s = interior *i + angle;
							var valWidth = canvasObj.find('.'+options.valuationClass+':last').width()/2;
							var valheight = canvasObj.find('.'+options.valuationClass+':last').height()/2;
							canvasObj.find('.'+options.valuationClass+':last').css({position:'absolute',top:r*Math.sin(s)+y-valheight,left:r*Math.cos(s)+x-valWidth});
						};
					};
				};
		});
	};
})