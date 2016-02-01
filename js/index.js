window.onload=function()
{	
	//登录下拉菜单
	var denglutuoz=$(".denglutuoz")[0];
	var onenavleft1=$(".onenavleft1")[0];
	var dingwei4=$(".dingwei4")[0];
	var denglutuoztoprtto=$(".denglutuoztoprtto")[0];
	var denglutuoztoprttoa=$(".denglutuoztoprttoa")[0];
	var denglutuozbotleft=$(".denglutuozbotleft")[0];
	var denglutuozbotright=$(".denglutuozbotright")[0];
	hover(onenavleft1,function()
	{
		denglutuoz.style.display="block";
		dingwei4.style.cssText="background-position: -82px -870px;"
	},function()
	{
		denglutuoz.style.display="none";
		dingwei4.style.cssText="background-position: -23px -870px;"
	})
	hover(denglutuoztoprtto,function()
	{
		denglutuoztoprtto.style.borderColor="#c13131";
		denglutuoztoprttoa.style.color="#c13131";
	},function()
	{
		denglutuoztoprtto.style.borderColor="#d19188";
		denglutuoztoprttoa.style.color="#d19188";
	})
	hover(denglutuozbotleft,function()
	{
		denglutuozbotleft.style.backgroundColor="#f7eee9";
	},function()
	{
		denglutuozbotleft.style.backgroundColor="#fef5f0";
	})
	hover(denglutuozbotright,function()
	{
		denglutuozbotright.style.backgroundColor="#f7eee9";
	},function()
	{
		denglutuozbotright.style.backgroundColor="#fef5f0";
	})

	//城市下拉菜单
	var onenavshanxituo2li=$(".onenavshanxituo2li");
	var onenavshanxituo2lia=$(".onenavshanxituo2lia");
	for(var i=0;i<onenavshanxituo2li.length;i++)
	{	
		onenavshanxituo2li[i].index=i;
		hover(onenavshanxituo2li[i],function()
		{
			onenavshanxituo2li[this.index].style.backgroundColor="#FF966E";
			onenavshanxituo2lia[this.index].style.color="white";
		}
		,function()
		{
			onenavshanxituo2li[this.index].style.backgroundColor="white";
			onenavshanxituo2lia[this.index].style.color="#636469";
		})
	}
	var onenavleft3=$(".onenavleft3")[0];
	var onenavleft2=$(".onenavleft2")[0];
	var onenavleft4=$(".onenavleft4")[0];
	var onenavshanxituo=$(".onenavshanxituo")[0];
	var onenavleft3tu=$(".onenavleft3tu")[0];
	onenavleft3.onmouseover=onenavleft2.onmouseover=onenavleft4.onmouseover=function()
	{
		onenavshanxituo.style.display="block";
		onenavleft3tu.style.cssText="background-position: -288px -85px;"
	}
	onenavleft3.onmouseout=onenavleft2.onmouseout=onenavleft4.onmouseout=function()
	{
		onenavshanxituo.style.display="none";
		onenavleft3tu.style.cssText="background-position: -288px 0px;"
	}
	//我的1号店下拉菜单
	var navxialacaidan=$(".navxialacaidan");
	var onenavright5tuo=$(".onenavright5tuo");
	var onenavright4tu=$(".onenavright-4tu");
	for(var i=0;i<navxialacaidan.length;i++)
	{	
		navxialacaidan[i].index=i;
		hover(navxialacaidan[i],function()
		{
			onenavright5tuo[this.index].style.display="block";
			navxialacaidan[this.index].style.borderColor="#cbcbcb"
			onenavright4tu[this.index].style.cssText="background-position: -287px -289px;"
		},function()
		{
			onenavright5tuo[this.index].style.display="none";
			navxialacaidan[this.index].style.borderColor="#fafafa";
			navxialacaidan[3].style.cssText="border-left-color:#cbcbcb";
			navxialacaidan[0].style.cssText="border-left-color:#cbcbcb";
			navxialacaidan[1].style.cssText="border-left-color:#cbcbcb";
			onenavright4tu[this.index].style.cssText="background-position: -287px -259px;"
		})
	}
	//掌上1号店下拉菜单里的滑入滑出
	var onenavrightshoujituo3li3tu=$(".onenavrightshoujituo3li3tu");
	for(var i=0;i<onenavrightshoujituo3li3tu.length;i++)
	{	
		onenavrightshoujituo3li3tu[i].index=i;
		hover(onenavrightshoujituo3li3tu[i],function()
		{
			onenavrightshoujituo3li3tu[this.index].style.cssText="border-color:#ed0213"
		},function()
		{
			onenavrightshoujituo3li3tu[this.index].style.cssText="border-color:#e5e5e5"
		})
	}
	//微信下拉菜单
	var onenavright1=$(".onenavright-1")[0];
	var onenavright1tuo=$(".onenavright-1tuo")[0];
	hover(onenavright1,function()
	{
		onenavright1tuo.style.display="block";
	},function()
	{
		onenavright1tuo.style.display="none";
	})
	//滑上商品店铺出现
	var searchshang=$(".search-shang")[0];
	var searchdian=$(".search-dian")[0];
	var searchjiant=$(".search-jiant")[0];
	hover(searchshang,function()
	{
		searchdian.style.display="block";
		searchjiant.style.cssText="background-position: -235px -70px;"
	},function()
	{
		searchdian.style.display="none";
		searchjiant.style.cssText="background-position: -235px -60px;"
	})
	//搜索输入框文字消失和出现 //历史记录出现与消失
	var shurubox=$(".shurubox")[0];
	var shurudebox=$(".shurudebox")[0];
	var lishijilu=$(".lishijilu")[0];
	var searchsous=$(".search-sous")[0];
	var flagss=true;
	shurubox.onfocus=function()
	{
		if(shurubox.value=="圣诞节跨年幸福购 5折抢福袋")
		{
			shurubox.value=""
		}
		if(flagss)
		{
			animate(lishijilu,{height:245},100);//历史记录出现与消失
			//addEvent(shurubox,"mouseover",function(){animate(lishijilu,{height:245},100);})
		}
		flagss=false;
	}
	shurubox.onblur=function()
	{
		if(shurubox.value=="")
		{
			shurubox.value="圣诞节跨年幸福购 5折抢福袋";
		}
		animate(lishijilu,{height:0},100);//历史记录出现与消失
	}
	//历史记录出现与消失
	addEvent(shurubox,"mouseout",function(){animate(lishijilu,{height:0},100);})
	addEvent(shurubox,"click",function(){animate(lishijilu,{height:245},100);})
	addEvent(lishijilu,"mouseover",function(){animate(lishijilu,{height:245},100);})
	addEvent(lishijilu,"mouseout",function(){animate(lishijilu,{height:0},100);})
	//addEvent(searchsous,"mouseover",function(){animate(lishijilu,{height:245},100);})
	//addEvent(searchsous,"mouseout",function(){animate(lishijilu,{height:0},100);})
	//购物车下拉菜单
	var searchright1=$(".search-right1")[0];
	var searchr3tuo=$(".searchr3tuo")[0];
	var bnzuojian=$(".bnzuojian")[0];
	var bnyoujian=$(".bnyoujian")[0];
	hover(searchright1,function()
	{
		searchr3tuo.style.display="block";
	},function()
	{
		searchr3tuo.style.display="none";
	})
	//banner图自动播放
	var colorarr=["#F3751E","#FE7495","#D82038","#DC1212","#30C2FB","#F0BDBA","#FF51A8","#FF6B2D"];
	var bannertu=$(".bannertu");
	var bannerbox=$(".bannerbox")[0];
	var bnbtn=$(".bnbtn");
	var banum=0;
	var panum=0;
	var shows=$(".shows")[0];
	function move1(type)
	{	
		if(type=="r")
		{	
			banum++;
			if(banum>=bannertu.length)
			{
				banum=0;
			}	
		}
		if(type=="l")
		{	
			banum--;
			if(banum<0)
			{
				banum=bannertu.length-1;
			}
		}		
		for(var i=0;i<bannertu.length;i++)
		{
			animate(bannertu[i],{opacity:0});
			bnbtn[i].style.background="#ccc";
		}
		animate(bannertu[banum],{opacity:1},400);
		bnbtn[banum].style.background="#FF3C3C";
		bannerbox.style.backgroundColor=colorarr[banum];
	}
	var t=setInterval(function(){move1("r")},4000);
	for(var i=0;i<bnbtn.length;i++)
	{
		bnbtn[i].index=i;
		hover(bnbtn[i],function()//鼠标滑上按钮停止播放
		{
			clearInterval(t);
			for(var j=0;j<bannertu.length;j++)
			{
				bannertu[j].style.opacity=0;
				bnbtn[j].style.background="#ccc";
			}
			animate(bannertu[this.index],{opacity:1},400);
			bnbtn[this.index].style.background="#FF3C3C";
			bannerbox.style.backgroundColor=colorarr[this.index];
		},function()
		{
			t=setInterval(move1,4000);
			banum=this.index;
		})
		/*hover(bannertu[i],function()//鼠标滑上图片停止播放
		{
			clearInterval(t);
			bnyoujian.style.display="block";
			bnzuojian.style.display="block";
		},function()
		{
			t=setInterval(move1,3000);
			bnyoujian.style.display="none";
			bnzuojian.style.display="none";
		})*/
	hover(shows,function()//鼠标滑上图片停止播放
	{
		clearInterval(t);
		bnyoujian.style.display="block";
		bnzuojian.style.display="block";
		//alert(banum)
	},function()
	{
		t=setInterval(function(){move1("r")},4000);
		bnyoujian.style.display="none";
		bnzuojian.style.display="none";
	})
	}
	//banner图上左右箭头滑上滑出效果
	hover(bnzuojian,function()
	{
		bnzuojian.style.cssText="background-color:rgba(0,0,0,0.3);";
		bnyoujian.style.display="block";
		bnzuojian.style.display="block";
	},function()
	{
		bnzuojian.style.cssText="background-color:rgba(0,0,0,0.1);";
		bnyoujian.style.display="block";
		bnzuojian.style.display="block";
	})
	hover(bnyoujian,function()
	{
		bnyoujian.style.cssText="background-color:rgba(0,0,0,0.3);";
		bnyoujian.style.display="block";
		bnzuojian.style.display="block";
	},function()
	{
		bnyoujian.style.cssText="background-color:rgba(0,0,0,0.1);";
		bnyoujian.style.display="block";
		bnzuojian.style.display="block";
	})
	var bnanniu=$(".bnanniu")[0];
	hover(bnanniu,function()
	{
		bnyoujian.style.display="block";
		bnzuojian.style.display="block";
	})
	//banner图点击向右运动
	bnyoujian.onclick=function()
	{
		move1("r")
	}
	//banner图点击向左运动
	bnzuojian.onclick=function()
	{
		move1("l")
	}
	//滑上0元试用字变颜色
	var bnrtbtgezi=$(".bnrtbtgezi");
	var bnrtbtgezia=$(".bnrtbtgezia");
	for(var i=0;i<bnrtbtgezi.length;i++)
	{	
		bnrtbtgezi[i].index=i;
		hover(bnrtbtgezi[i],function()
		{
			bnrtbtgezia[this.index].style.color="red";
		},function()
		{
			bnrtbtgezia[this.index].style.color="#626260";
		})
	}
	//楼层轮播
	xiaolunbo(0,4000);
	xiaolunbo(1,3600);
	xiaolunbo(2,3860);
	xiaolunbo(3,3800);
	xiaolunbo(4,4000);
	xiaolunbo(5,3900);
	xiaolunbo(6,4000);
	xiaolunbo(7,3900);
	
	//历史记录小盒子滑入变化边框颜色
	var lishijilu22li=$(".lishijilu22li");
	var lishijilu22lia=$(".lishijilu22lia");
	for(var i=0;i<lishijilu22li.length;i++)
	{	
		lishijilu22li[i].index=i;
		hover(lishijilu22li[i],function()
		{	
			lishijilu22li[this.index].style.borderColor="#FE3C3C";
			lishijilu22lia[this.index].style.color="#FE3C3C";
		},function()
		{
			lishijilu22li[this.index].style.borderColor="#e1e1e1";
			lishijilu22lia[this.index].style.color="#35383F";
		})
	}
	//一号钱包出现  //页游点卡出现  //充值中心出现
	var youtuozi=$(".youtuozi");
	var youxiajiaotuo=$(".youxiajiaotuo");
	var chahao=$(".chahao");
	for(var i=0;i<youtuozi.length;i++)
	{	
		youtuozi[i].index=i;
		hover(youtuozi[i],function()
		{
			animate(youxiajiaotuo[this.index],{height:181},200,Tween.Linear)
		},function()
		{

		})
	}
	//叉号滑上变色
	hover(chahao,function()
	{
		chahao.style.color="#333";
	},function()
	{
		chahao.style.color="#9999A7";
	})
	//单击叉号关闭当前
	for(var j=0;j<chahao.length;j++)
	{	
		chahao[j].index=j;
		chahao[j].onclick=function()
		{	
			/*animate(youxiajiaotuo[this.index],{height:0},400,Tween.Linear);*/
			for(var i=0;i<youxiajiaotuo.length;i++)
			{
				//youxiajiaotuo[i].style.height="0px";
				animate(youxiajiaotuo[i],{height:0},200,Tween.Linear);
			}
		}
	}
	//一号钱包 页游点卡 充值中心切换
	var relchong=$(".relchong");
	for(var i=1;i<relchong.length;i++)
	{	
		relchong[i].index=i;
		hover(relchong[i],function()
		{
			for(var j=0;j<youxiajiaotuo.length;j++)
			{
				youxiajiaotuo[j].style.height="0px";
			}
			youxiajiaotuo[this.index].style.height="181px";
		},function(){})
	}
	var relyi=$(".relyi");
	hover(relyi[0],function()
	{
		for(var j=0;j<youxiajiaotuo.length;j++)
			{
				youxiajiaotuo[j].style.height="0px";
			}
			youxiajiaotuo[0].style.height="181px";
	},function(){})
	hover(relyi[2],function()
	{
		for(var j=0;j<youxiajiaotuo.length;j++)
			{
				youxiajiaotuo[j].style.height="0px";
			}
			youxiajiaotuo[2].style.height="181px";
	},function(){})
	var relye=$(".relye");
	for(var i=0;i<(relye.length-1);i++)
	{	
		relye[i].index=i;
		hover(relye[i],function()
		{
			for(var j=0;j<youxiajiaotuo.length;j++)
			{
				youxiajiaotuo[j].style.height="0px";
			}
			youxiajiaotuo[this.index].style.height="181px";
		},function(){})
	}
	//充值手机号文本框文字出现消失
	var bnchongchituotuo3c1ku=$(".bnchongchituotuo3c1ku")[0];
	bnchongchituotuo3c1ku.onfocus=function()
	{
		if(bnchongchituotuo3c1ku.value=="请输入手机号码")
		{
			bnchongchituotuo3c1ku.value="";
		}
	}
	bnchongchituotuo3c1ku.onblur=function()
	{
		if(bnchongchituotuo3c1ku.value=="")
		{
			bnchongchituotuo3c1ku.value="请输入手机号码";
		}
	}
	//立即充值滑上变背景色
	var lijichongzhi=$(".lijichongzhi");
	for(var i=0;i<lijichongzhi.length;i++)
	{	
		lijichongzhi[i].index=i;
		hover(lijichongzhi[i],function()
		{
			lijichongzhi[this.index].style.backgroundColor="#E60012";
		},function()
		{
			lijichongzhi[this.index].style.backgroundColor="#FF5C4D";
		})
	}
		
	//话费快充和流量切换
	var bnchongchituotuo2czi2=$(".bnchongchituotuo2czi2")[0];
	var bnchongchituotuo2czi=$(".bnchongchituotuo2czi")[0];
	var liulianga=$(".liulianga")[0];
	var bnchongchituotuo3c1zi=$(".bnchongchituotuo3c1zi")[1];
	var bnchongchituotuo3c1aaa=$(".bnchongchituotuo3c1aaa")[0];
	hover(bnchongchituotuo2czi2,function()
	{
		bnchongchituotuo2czi2.style.color="#B61B2F";
		bnchongchituotuo2czi.style.color="#777575";
		liulianga.style.display="block";
		bnchongchituotuo3c1zi.style.color="white";
		bnchongchituotuo3c1aaa.innerHTML="￥";
	})
	hover(bnchongchituotuo2czi,function()
	{
		bnchongchituotuo2czi2.style.color="#777575";
		bnchongchituotuo2czi.style.color="#B61B2F";
		liulianga.style.display="none";
		bnchongchituotuo3c1zi.style.color="#777575";
		bnchongchituotuo3c1aaa.innerHTML="￥98.59-99.9";
	})
	//自动充值购买卡密切换
	var danxuanan=$(".danxuanan")[1];
	var danxuanan1=$(".danxuanan")[0];
	var zanwukami=$(".zanwukami")[0];
	danxuanan.onclick=function()
		{
			lijichongzhi[1].style.display="none";
			zanwukami.style.display="block";
		}
	danxuanan1.onclick=function()
	{
		lijichongzhi[1].style.display="block";
		zanwukami.style.display="none";
	}
	//图片移动
	var tuyid=$(".tuyid");
	var shang1ctlftop3=$(".shang1ctlftop3");
	for(var i=0;i<tuyid.length;i++)
	{	
		tuyid[i].index=i;
		hover(tuyid[i],function()
		{
			animate(shang1ctlftop3[this.index],{paddingLeft:30},300);
			shang1ctlftop3[this.index].style.width="209px";
		},function()
		{	
			animate(shang1ctlftop3[this.index],{paddingLeft:40},300);
			shang1ctlftop3[this.index].style.width="199px";
		})
	}
	//变白一下(有问题，把原来的图片挡住了，链接地址会不对)
	var bianbaibox=$(".bianbaibox");
	//var haigoulilefttoptu=$(".haigoulilefttoptu")[0];
	for(var i=0;i<bianbaibox.length;i++)
	{
		bianbaibox[i].index=i;
		hover(bianbaibox[i],function()
		{	
			//bianbaibox.style.display="block";
			animate(bianbaibox[this.index],{opacity:0.2},20,Tween.Linear,function()
			{
				animate(bianbaibox[this.index],{opacity:0},20)
			});
		})
	}
	//闪购的切换
	var shangoudingweili=$(".shangoudingweili");
	var saojiaoding=$(".saojiaoding")[0];
	var shanggoubiaota=$(".shanggoubiaota");
	var sao=60;
	var lili=1;
	var shan=1;
	function shanqie()
	{	
		if(lili>2)
		{
			lili=0;
		}
		animate(saojiaoding,{left:(sao*lili+97)},200,Tween.Linear);
		if(shan>2)
		{
			shan=0;
		}
		for(var i=0;i<shangoudingweili.length;i++)
		{
			shangoudingweili[i].style.display="none";
			shanggoubiaota[i].style.color="#65666a";
		}
		shangoudingweili[shan].style.display="block";
		shanggoubiaota[shan].style.color="#d49f43";
		lili++;
		shan++;
	}
	var q=setInterval(shanqie,6000)
	for(var i=0;i<shanggoubiaota.length;i++)
	{	
		shanggoubiaota[i].index=i;
		hover(shanggoubiaota[i],function()
		{	
			clearInterval(q);
			for(var j=0;j<shanggoubiaota.length;j++)
			{
				shanggoubiaota[j].style.color="#65666a";
				shangoudingweili[j].style.display="none";
			}
			shanggoubiaota[this.index].style.color="#d49f43";
			shangoudingweili[this.index].style.display="block";
			animate(saojiaoding,{left:(sao*this.index+97)},200,Tween.Linear);
		},function()
		{
			q=setInterval(shanqie,6000);
			shan=this.index+1;
			lili=this.index+1;
		})
	}
	//放上闪购停止时间函数q
	for(var i=0;i<shangoudingweili.length;i++)
	{	
		shangoudingweili[i].index=i;
		hover(shangoudingweili[i],function()
		{
			clearInterval(q);
		},function()
		{
			q=setInterval(shanqie,6000);
			shan=this.index+1;
			lili=this.index+1;
		})
	}
	//剩余几天
	var shangoucon=$(".shangoucon");
	var shengyujit=$(".shengyujit");
	var xiaobiao=$(".xiaobiao");
	for(var i=0;i<shangoucon.length;i++)
	{	
		shangoucon[i].index=i;
		hover(shangoucon[i],function()
		{	
			for(var j=0;j<shengyujit.length;j++)
			{
				shengyujit[j].style.display="none";
				xiaobiao[j].style.display="none";
			}
			shengyujit[this.index].style.display="block";
			xiaobiao[this.index].style.display="block";
		},function()
		{
			for(var j=0;j<shengyujit.length;j++)
			{
				shengyujit[j].style.display="none";
				xiaobiao[j].style.display="none";
			}
		})
	}
	var shangoucon1=$(".shangoucon1");
	var shengyujit2=$(".shengyujit2");
	var xiaobiao2=$(".xiaobiao2");
	for(var i=0;i<shangoucon1.length;i++)
	{	
		shangoucon1[i].index=i;
		hover(shangoucon1[i],function()
		{	
			for(var j=0;j<shengyujit2.length;j++)
			{
				shengyujit2[j].style.display="none";
				xiaobiao2[j].style.display="none";
			}
			shengyujit2[this.index].style.display="block";
			xiaobiao2[this.index].style.display="block";
		},function()
		{
			for(var j=0;j<shengyujit2.length;j++)
			{
				shengyujit2[j].style.display="none";
				xiaobiao2[j].style.display="none";
			}
		})
	}
	//最小轮播
	var haigoulilefttopplunbocenter11=$(".haigoulilefttopplunbocenter11")[0];
	var haigoulilefttopplunboleft=$(".haigoulilefttopplunboleft")[0];
	var haigoulilefttopplunboright=$(".haigoulilefttopplunboright")[0];
	var haigoulilefttopplunboleftjian=$(".haigoulilefttopplunboleftjian")[0];
	var haigoulilefttopplunborightjian=$(".haigoulilefttopplunborightjian")[0];
	function wangyou()
	{
		var firsts=getFirst(haigoulilefttopplunbocenter11);
		var lasts=getLast(haigoulilefttopplunbocenter11);
		haigoulilefttopplunbocenter11.insertBefore(lasts,firsts);
		haigoulilefttopplunbocenter11.style.left=-100+"px";
		animate(haigoulilefttopplunbocenter11,{left:0},600,Tween.Linear);
	}
	function wangzuo()
	{
		animate(haigoulilefttopplunbocenter11,{left:-100},600,Tween.Linear,function()
		{
			var firsts=getFirst(haigoulilefttopplunbocenter11);
			haigoulilefttopplunbocenter11.appendChild(firsts);
			haigoulilefttopplunbocenter11.style.left=0+"px";
		})
	}
	var c=setInterval(wangzuo,2000);
	haigoulilefttopplunboleft.onmouseover=haigoulilefttopplunboright.onmouseover=function()
	{
		clearInterval(c);
	}
	haigoulilefttopplunboleft.onmouseout=haigoulilefttopplunboright.onmouseout=function()
	{
		c=setInterval(wangzuo,2000);
	}
	haigoulilefttopplunboleftjian.onclick=function()
	{
		wangzuo();
	}
	haigoulilefttopplunborightjian.onclick=function()
	{
		wangyou();
	}
	//
	var cetu1=$(".cetu1");
	var cetu2=$(".cetu2");
	var celanju=$(".celanju");
	//侧导航点击
	for(var k=0;k<celanju.length;k++)
	{	
		celanju[k].index=k;
		addEvent(celanju[k],"click",function()
		{	
			for(var m=0;m<celanju.length;m++)
			{
				celanju[m].style.backgroundColor="#FAFAFA";
				celanju[m].style.borderColor="#e6e6e6";
				cetu2[m].style.display="none";
				cetu1[m].style.display="block";
			}
			celanju[this.index].style.backgroundColor="#FF3C3C";
			celanju[this.index].style.borderColor="#E60012";
			cetu1[this.index].style.display="none";
			cetu2[this.index].style.display="block";
		})
	}
	//侧导航
	
	var ccw=getCW();
	var cch=getCH();
	var meiceng=$(".meicenglou");
	var celanbox=$(".celanbox")[0];
	window.onresize=function()
	{
		ccw=getCW();
		cch=getCH();
	}
	window.onscroll=function()
	{
		var scrollT=getScrollT();
		if(scrollT>880)
		{
			celanbox.style.display="block";
		}
		else
		{
			celanbox.style.display="none";
		}
		for(var s=0;s<meiceng.length;s++)
		{
			if(scrollT>=(meiceng[s].offsetTop-80))
			{
				for(var w=0;w<celanju.length;w++)
				{
					celanju[w].style.backgroundColor="#FAFAFA";
					celanju[w].style.borderColor="#e6e6e6";
					cetu2[w].style.display="none";
					cetu1[w].style.display="block";
				}
				celanju[s].style.backgroundColor="#FF3C3C";
				celanju[s].style.borderColor="#E60012";
				cetu1[s].style.display="none";
				cetu2[s].style.display="block";
			}
		}
		for(var i=0;i<celanju.length;i++)
		{	
			celanju[i].index=i;
			addEvent(celanju[i],"click",function()
			{	
				for(var m=0;m<celanju.length;m++)
				{
					celanju[m].style.backgroundColor="#FAFAFA";
					celanju[m].style.borderColor="#e6e6e6";
					cetu2[m].style.display="none";
					cetu1[m].style.display="block";
				}
				var obj=document.documentElement.scrollTop?document.documentElement:document.body;
				celanju[this.index].style.backgroundColor="#FF3C3C";
				celanju[this.index].style.borderColor="#E60012";
				cetu1[this.index].style.display="none";
				cetu2[this.index].style.display="block";
				animate(obj,{scrollTop:(meiceng[this.index].offsetTop-80)})
			})
			hover(celanju[i],function()
			{
				for(var j=0;j<celanju.length;j++)
				{
					celanju[j].style.backgroundColor="#FAFAFA";
					celanju[j].style.borderColor="#e6e6e6";
					celanju[this.index].style.backgroundColor="#FF3C3C";
				}
				celanju[this.index].style.backgroundColor="#FF3C3C";
				celanju[this.index].style.borderColor="#E60012";
				cetu1[this.index].style.display="none";
				cetu2[this.index].style.display="block";
			},function()
			{	
				
					celanju[this.index].style.backgroundColor="#FAFAFA";
					celanju[this.index].style.borderColor="#e6e6e6";
					cetu1[this.index].style.display="block";
					cetu2[this.index].style.display="none";
				
			})
		}
	}
	var fanhuidingbu=$(".fanhuidingbu")[0];
	fanhuidingbu.onclick=function()
	{
		var obj=document.documentElement.scrollTop?document.documentElement:document.body;
		animate(obj,{scrollTop:0},600,Tween.Linear)
	}
	//banner侧导航
	var bnlnavlituozhans=$(".bnlnavlituozhans");
	var bnlnavli=$(".bnlnavli");
	for(var i=0;i<bnlnavli.length;i++)
	{	
		bnlnavli[i].index=i;
		hover(bnlnavli[i],function()
		{
			for(var j=0;j<bnlnavlituozhans.length;j++)
			{
				bnlnavlituozhans[j].style.display="none";
			}
			bnlnavlituozhans[this.index].style.display="block";
			bnlnavli[this.index].style.backgroundColor="#A51212";
			animate(bnlnavli[this.index],{paddingLeft:15,width:195},200);
		},function()
		{
			bnlnavlituozhans[this.index].style.display="none";
			animate(bnlnavli[this.index],{paddingLeft:5,width:205},200);
			bnlnavli[this.index].style.backgroundColor="#C23131";
		})
	}

}