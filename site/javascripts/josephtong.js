try{Typekit.load()}catch(e){}$(function(){try{Typekit.load()}catch(h){}var a,d;function f(){var l=$(window).height(),j=$(window).width(),i=100,k=100;if(!a){a=c.height();d=c.width()}if(j/l>d/a){k=j;i=j/(d/a)}else{i=l;k=l/(a/d)}c.css({height:i+"px",width:k+"px",top:(l-i)/2+"px"})}var b=[1,14,19,25,30],g=b[Math.floor(Math.random()*b.length)],c=$("#intro img");c.attr("src","images/intro/"+g+".jpg");c.load(function(){f();c.animate({opacity:1},2000);setTimeout(function(){$("#intro").fadeOut();if(!location.hash){location.hash="#index"}},5500)});$(window).bind("resize",f);$("#photography").slideshow();$("#paintings").slideshow()});(function(a){a.fn.slideshow=function(){var b=a(this).find("img"),f=0,c=b.length;var d=function(h){if(h==c){h=0}else{if(h<0){h=c-1}}var i=b.eq(f),g=b.eq(h);i.css({zIndex:100});g.hide().css({zIndex:101}).fadeIn(function(){i.hide()});f=h};b.hide().eq(0).show();a(this).find(".next").click(function(){d(f+1);return false});a(this).find(".previous").click(function(){d(f-1);return false})}})(jQuery);