/*
 * CometChat
 * Copyright (c) 2014 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

 
if(typeof(jqcc) === 'undefined') {
	jqcc = jQuery;
}
// Copyright (c) 2006 Klaus Hartl (stilbuero.de)
// http://www.opensource.org/licenses/mit-license.php

jqcc.cookie=function(a,b,c){if(typeof b!='undefined'){c=c||{};if(b===null){b='';c.expires=-1}var d='';if(c.expires&&(typeof c.expires=='number'||c.expires.toUTCString)){var e;if(typeof c.expires=='number'){e=new Date();e.setTime(e.getTime()+(c.expires*24*60*60*1000))}else{e=c.expires}d='; expires='+e.toUTCString()}var f=c.path?'; path='+(c.path):'';var g=c.domain?'; domain='+(c.domain):'';var h=c.secure?'; secure':'';document.cookie=[a,'=',encodeURIComponent(b),d,f,g,h].join('')}else{var j=null;if(document.cookie&&document.cookie!=''){var k=document.cookie.split(';');for(var i=0;i<k.length;i++){var l=jqcc.trim(k[i]);if(l.substring(0,a.length+1)==(a+'=')){j=decodeURIComponent(l.substring(a.length+1));break}}}return j}};

// SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License
// http://www.opensource.org/licenses/mit-license.php

if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectCCUtil=="undefined"){deconcept.SWFObjectCCUtil=new Object();}deconcept.SWFObjectCC=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectCCUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObjectCC.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObjectCC.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectCCUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectCCUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObjectCC.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectCCUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectCCUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectCCUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObjectCC;var SWFObjectCC=deconcept.SWFObjectCC;


/**
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com
 * http://flesler.blogspot.com/2007/10/jqccscrollto.html
 */

(function($){var h=$.scrollToCC=function(a,b,c){$(window).scrollToCC(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jqcc)>=1.3?0:1};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return $.browser.safari||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollToCC=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.speed||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if((/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)) || (targ.charAt(0)=='-' && targ.charAt(1)!='=') ){targ=both(targ);break}targ=$(targ,this);case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jqcc);

/*
 jqcc.fullscreen 1.1.4
 https://github.com/kayahr/jqcc-fullscreen-plugin
 Copyright (C) 2012 Klaus Reimer <k@ailis.de>
 Licensed under the MIT license
 (See http://www.opensource.org/licenses/mit-license)
*/
function d(b){var c,a;if(!this.length)return this;c=this[0];c.ownerDocument?a=c.ownerDocument:(a=c,c=a.documentElement);if(null==b){if(!a.cancelFullScreen&&!a.webkitCancelFullScreen&&!a.mozCancelFullScreen)return null;b=!!a.fullScreen||!!a.webkitIsFullScreen||!!a.mozFullScreen;return!b?b:a.fullScreenElement||a.webkitCurrentFullScreenElement||a.mozFullScreenElement||b}b?(b=c.requestFullScreen||c.webkitRequestFullScreen||c.mozRequestFullScreen)&&(Element.ALLOW_KEYBOARD_INPUT?b.call(c,Element.ALLOW_KEYBOARD_INPUT):
b.call(c)):(b=a.cancelFullScreen||a.webkitCancelFullScreen||a.mozCancelFullScreen)&&b.call(a);return this}jqcc.fn.fullScreen=d;jqcc.fn.toggleFullScreen=function(){return d.call(this,!d.call(this))};var e,f,g;e=document;e.webkitCancelFullScreen?(f="webkitfullscreenchange",g="webkitfullscreenerror"):e.mozCancelFullScreen?(f="mozfullscreenchange",g="mozfullscreenerror"):(f="fullscreenchange",g="fullscreenerror");jqcc(document).bind(f,function(){jqcc(document).trigger(new jqcc.Event("fullscreenchange"))});
jqcc(document).bind(g,function(){jqcc(document).trigger(new jqcc.Event("fullscreenerror"))});

var cc_zindex = 0;


var cc_dragobj = new Object();

function loadCCPopup(url,name,properties,width,height,title,force,allowmaximize,allowresize,allowpopout) {
	if (jqcc('#cometchat_container_'+name).length > 0) {
		alert ('This popup is already open. Please close the existing popup and try again.');

		setTimeout(function() {
			cc_zindex += 1;
			jqcc('#cometchat_container_'+name).css('z-index',100001+cc_zindex);
		}, 100);

		return;
	}

	var top = ((jqcc(window).height() - height) / 2) + jqcc(window).scrollTop();
        	var left = ((jqcc(window).width() - width) / 2) + jqcc(window).scrollLeft();

	if (top < 0) { top = 0; }
	if (left < 0) { left = 0; }

	var queryStringSeparator='&';
	if(url.indexOf('?')<0){
		queryStringSeparator='?';
	}
	url += queryStringSeparator+'basedata='+jqcc.cometchat.getBaseData()+'&embed=web';
	if (jqcc(document).fullScreen() !== null && allowmaximize == 1) {
		displaymaxicon='style="display:inline-block;"';
	} else {
		displaymaxicon='style="display:none;"';
	}

	if (allowpopout == 1) {
		displaypopicon='style="display:inline-block;"';
	} else {
		displaypopicon='style="display:none;"';
	}

        jqcc("body").append('<div id="cometchat_container_'+name+'" class="cometchat_container" style="left:'+left+'px;top:'+top+'px;width:'+width+'px;"><div class="cometchat_container_title"  onmousedown="dragStart(event, \'cometchat_container_'+name+'\')"><span>'+title+'</span><div class="cometchat_closebox cometchat_tooltip" data-title="Close Popup" id="cometchat_closebox_'+name+'" style="font-weight: normal;">×</div><div '+displaymaxicon+' class="cometchat_maxwindow cometchat_tooltip" data-title="Maximize Popup" id="cometchat_maxwindow_'+name+'"></div><div '+displaypopicon+' class="cometchat_popwindow cometchat_tooltip" data-title="Popout" id="cometchat_popwindow_'+name+'"></div><div style="clear:both"></div></div><div class="cometchat_container_body" style="height:'+(height)+'px;width:'+(width-2)+'px;"><div class="cometchat_loading"></div><iframe class="cometchat_iframe" id="cometchat_trayicon_'+name+'_iframe" width="'+(width-2)+'" height="'+(height)+'"  allowtransparency="true" frameborder="0"  scrolling="no" src="'+url+'" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe><div class="cometchat_overlay" style="width:'+(width-2)+'px;height:'+(height)+'px;"></div><div style="clear:both"></div></div></div>');
	setTimeout(function() {
		cc_zindex += 1;
		jqcc('#cometchat_container_'+name).css('z-index',100001+cc_zindex);
	}, 100);

	if (force == true) {
		if (navigator.appVersion.indexOf("MSIE") == -1) {
			window.onbeforeunload = function() {return 'Navigating away from this page will close your chat popups.'};
		}
	}

        var cometchat_container = jqcc('#cometchat_container_'+name);
	cometchat_container.find('.cometchat_closebox').click(function() {
		cometchat_container.remove();
                jqcc("#cometchat_tooltip").css('display', 'none');
		window.onbeforeunload = null;
	});

	if (jqcc(document).fullScreen() !== null && allowmaximize ==1) {
		cometchat_container.find('.cometchat_iframe').addClass('cometchat_iframe_'+name);
			cometchat_container.find('.cometchat_maxwindow').click(function() {
			jqcc('.cometchat_iframe_'+name).toggleFullScreen(true);
			if (name =='whiteboard') {
				jqcc('#cometchat_container_whiteboard').find('.cometchat_iframe').contents().find('#whiteboard').width(screen.width);
				jqcc('#cometchat_container_whiteboard').find('.cometchat_iframe').contents().find('#whiteboard').height(screen.height);
			}
			jqcc("#cometchat_tooltip").css('display', 'none');
		});
	}

	if (allowpopout == 1) {
		cometchat_container.find('.cometchat_popwindow').click(function() {
			window.open(url+"&popoutmode=1",name,'width='+width+',height='+height+' scrollbars=yes, resizable=yes');
			jqcc.cometchat.setInternalVariable('avchatpopoutcalled','1');
			cometchat_container.remove();
            jqcc("#cometchat_tooltip").css('display', 'none');
		});
	}

	cometchat_container.click(function() {
		cc_zindex += 1;
		jqcc(this).css('z-index',100001+cc_zindex);
	});

}

function closeCCPopup(id) {
	jqcc('#cometchat_container_'+id).remove();
}

function resizeCCPopup(id,width,height) {
	jqcc('#cometchat_container_'+id).css('width',width+2+'px').find('.cometchat_container_body').css({'height':height, 'width':width});
	jqcc('#cometchat_container_'+id).find('.cometchat_iframe').attr({'height':height, 'width':width});
}

function getID(id) { return document.getElementById(id); }

function dragStart(a,b){
	cc_zindex += 1;jqcc('#'+b).css('z-index',100001+cc_zindex);
	jqcc('#'+b).find('.cometchat_overlay').css('display','block');var x,y;cc_dragobj.elNode=getID(b);try{x=window.event.clientX+document.documentElement.scrollLeft+document.body.scrollLeft;y=window.event.clientY+document.documentElement.scrollTop+document.body.scrollTop}catch(e){x=a.clientX+window.scrollX;y=a.clientY+window.scrollY}cc_dragobj.cursorStartX=x;cc_dragobj.cursorStartY=y;cc_dragobj.elStartLeft=parseInt(cc_dragobj.elNode.style.left,10);cc_dragobj.elStartTop=parseInt(cc_dragobj.elNode.style.top,10);if(isNaN(cc_dragobj.elStartLeft))cc_dragobj.elStartLeft=0;if(isNaN(cc_dragobj.elStartTop))cc_dragobj.elStartTop=0;try{document.attachEvent("onmousemove",dragGo);document.attachEvent("onmouseup",dragStop);window.event.cancelBubble=true;window.event.returnValue=false}catch(e){document.addEventListener("mousemove",dragGo,true);document.addEventListener("mouseup",dragStop,true);a.preventDefault()}}

function dragGo(a){var x,y;try{x=window.event.clientX+document.documentElement.scrollLeft+document.body.scrollLeft;y=window.event.clientY+document.documentElement.scrollTop+document.body.scrollTop}catch(e){x=a.clientX+window.scrollX;y=a.clientY+window.scrollY}var b=(cc_dragobj.elStartLeft+x-cc_dragobj.cursorStartX);var c=(cc_dragobj.elStartTop+y-cc_dragobj.cursorStartY);if(b>0){cc_dragobj.elNode.style.left=b+"px"}else{cc_dragobj.elNode.style.left="1px"}if(c>0){cc_dragobj.elNode.style.top=c+"px"}else{cc_dragobj.elNode.style.top="1px"}try{window.event.cancelBubble=true;window.event.returnValue=false}catch(e){a.preventDefault()}}

function dragStop(event){jqcc('.cometchat_overlay').css('display','none');try{document.detachEvent("onmousemove",dragGo);document.detachEvent("onmouseup",dragStop)}catch(e){document.removeEventListener("mousemove",dragGo,true);document.removeEventListener("mouseup",dragStop,true)}}


function getTimeDisplay(ts){
	if((ts+"").length == 10){
		ts = ts*1000;
	}
	var time = new Date(ts);
	var ap = "";
	var hour = time.getHours();
	var minute = time.getMinutes();
	var date = time.getDate();
	var month = time.getMonth();
	var year = time.getFullYear();
	if(jqcc.cometchat.getSettings()['armyTime']!=1){
		ap = hour>11 ? "PM" : "AM";
		hour = hour==0 ? 12 : hour>12 ? hour-12 : hour;
	}else{
		hour = hour<10 ? "0"+hour : hour;
	}
	minute = minute<10 ? "0"+minute : minute;
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var type = 'th';
	if(date==1||date==21||date==31){
		type = 'st';
	}else if(date==2||date==22){
		type = 'nd';
	}else if(date==3||date==23){
		type = 'rd';
	}
	return {ap:ap,hour:hour,minute:minute,date:date,month:months[month],year:year,type:type};
}        
/*! jQuery UI 1.8.18 */

(function(a,b){function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;if(!b.href||!g||f.nodeName.toLowerCase()!=="map")return!1;h=a("img[usemap=#"+g+"]")[0];return!!h&&d(h)}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}a.ui=a.ui||{};a.ui.version||(a.extend(a.ui,{version:"1.8.18",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.each(["Width","Height"],function(c,d){function h(b,c,d,f){a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)});return c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){if(c===b)return g["inner"+d].call(this);return this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){if(typeof b!="number")return g["outer"+d].call(this,b);return this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));c.offsetHeight,a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!!d&&!!a.element[0].parentNode)for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;if(b[d]>0)return!0;b[d]=1,e=b[d]>0,b[d]=0;return e},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}}))})(jqcc); 
(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}});return d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e;if(f&&e.charAt(0)==="_")return h;f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b){h=f;return!1}}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))});return h}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}this._setOptions(e);return this},_setOptions:function(b){var c=this;a.each(b,function(a,b){c._setOption(a,b)});return this},_setOption:function(a,b){this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b);return this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);this.element.trigger(c,d);return!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jqcc);
(function(a,b){var c=!1;a(document).mouseup(function(a){c=!1}),a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent")){a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation();return!1}}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(b){if(!c){this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which==1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted){b.preventDefault();return!0}}!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0;return!0}},_mouseMove:function(b){if(a.browser.msie&&!(document.documentMode>=9)&&!b.button)return this._mouseUp(b);if(this._mouseStarted){this._mouseDrag(b);return b.preventDefault()}this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b));return!this._mouseStarted},_mouseUp:function(b){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b));return!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})})(jqcc);
(function(a,b){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},destroy:function(){if(!!this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy();return this}},_mouseCapture:function(b){var c=this.options;if(this.helper||c.disabled||a(b.target).is(".ui-resizable-handle"))return!1;this.handle=this._getHandle(b);if(!this.handle)return!1;c.iframeFix&&a(c.iframeFix===!0?"iframe":c.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(a(this).offset()).appendTo("body")});return!0},_mouseStart:function(b){var c=this.options;this.helper=this._createHelper(b),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),c.containment&&this._setContainment();if(this._trigger("start",b)===!1){this._clear();return!1}this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.helper.addClass("ui-draggable-dragging"),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b);return!0},_mouseDrag:function(b,c){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute");if(!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1){this._mouseUp({});return!1}this.position=d.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";a.ui.ddmanager&&a.ui.ddmanager.drag(this,b);return!1},_mouseStop:function(b){var c=!1;a.ui.ddmanager&&!this.options.dropBehaviour&&(c=a.ui.ddmanager.drop(this,b)),this.dropped&&(c=this.dropped,this.dropped=!1);if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return!1;if(this.options.revert=="invalid"&&!c||this.options.revert=="valid"&&c||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)){var d=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){d._trigger("stop",b)!==!1&&d._clear()})}else this._trigger("stop",b)!==!1&&this._clear();return!1},_mouseUp:function(b){this.options.iframeFix===!0&&a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b);return a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?!0:!1;a(this.options.handle,this.element).find("*").andSelf().each(function(){this==b.target&&(c=!0)});return c},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b])):c.helper=="clone"?this.element.clone().removeAttr("id"):this.element;d.parents("body").length||d.appendTo(c.appendTo=="parent"?this.element[0].parentNode:c.appendTo),d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute");return d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[b.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,b.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(b.containment=="document"?0:a(window).scrollLeft())+a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b.containment=="document"?0:a(window).scrollTop())+(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)&&b.containment.constructor!=Array){var c=a(b.containment),d=c[0];if(!d)return;var e=c.offset(),f=a(d).css("overflow")!="hidden";this.containment=[(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0),(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0),(f?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=c}else b.containment.constructor==Array&&(this.containment=b.containment)},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName),f=b.pageX,g=b.pageY;if(this.originalPosition){var h;if(this.containment){if(this.relative_container){var i=this.relative_container.offset();h=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]}else h=this.containment;b.pageX-this.offset.click.left<h[0]&&(f=h[0]+this.offset.click.left),b.pageY-this.offset.click.top<h[1]&&(g=h[1]+this.offset.click.top),b.pageX-this.offset.click.left>h[2]&&(f=h[2]+this.offset.click.left),b.pageY-this.offset.click.top>h[3]&&(g=h[3]+this.offset.click.top)}if(c.grid){var j=c.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1]:this.originalPageY;g=h?j-this.offset.click.top<h[1]||j-this.offset.click.top>h[3]?j-this.offset.click.top<h[1]?j+c.grid[1]:j-c.grid[1]:j:j;var k=c.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0]:this.originalPageX;f=h?k-this.offset.click.left<h[0]||k-this.offset.click.left>h[2]?k-this.offset.click.left<h[0]?k+c.grid[0]:k-c.grid[0]:k:k}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(b,c,d){d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d]),b=="drag"&&(this.positionAbs=this._convertPositionTo("absolute"));return a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(a){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.extend(a.ui.draggable,{version:"1.8.18"}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c){var d=a(this).data("draggable"),e=d.options,f=a.extend({},c,{item:d.element});d.sortables=[],a(e.connectToSortable).each(function(){var c=a.data(this,"sortable");c&&!c.options.disabled&&(d.sortables.push({instance:c,shouldRevert:c.options.revert}),c.refreshPositions(),c._trigger("activate",b,f))})},stop:function(b,c){var d=a(this).data("draggable"),e=a.extend({},c,{item:d.element});a.each(d.sortables,function(){this.instance.isOver?(this.instance.isOver=0,d.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(b),this.instance.options.helper=this.instance.options._helper,d.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",b,e))})},drag:function(b,c){var d=a(this).data("draggable"),e=this,f=function(b){var c=this.offset.click.top,d=this.offset.click.left,e=this.positionAbs.top,f=this.positionAbs.left,g=b.height,h=b.width,i=b.top,j=b.left;return a.ui.isOver(e+c,f+d,i,j,g,h)};a.each(d.sortables,function(f){this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this.instance._intersectsWith(this.instance.containerCache)?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return c.helper[0]},b.target=this.instance.currentItem[0],this.instance._mouseCapture(b,!0),this.instance._mouseStart(b,!0,!0),this.instance.offset.click.top=d.offset.click.top,this.instance.offset.click.left=d.offset.click.left,this.instance.offset.parent.left-=d.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=d.offset.parent.top-this.instance.offset.parent.top,d._trigger("toSortable",b),d.dropped=this.instance.element,d.currentItem=d.element,this.instance.fromOutside=d),this.instance.currentItem&&this.instance._mouseDrag(b)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",b,this.instance._uiHash(this.instance)),this.instance._mouseStop(b,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),d._trigger("fromSortable",b),d.dropped=!1)})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c){var d=a("body"),e=a(this).data("draggable").options;d.css("cursor")&&(e._cursor=d.css("cursor")),d.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;d._cursor&&a("body").css("cursor",d._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(b,c){var d=a(this).data("draggable");d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"&&(d.overflowOffset=d.scrollParent.offset())},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=!1;if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!e.axis||e.axis!="x")d.overflowOffset.top+d.scrollParent[0].offsetHeight-b.pageY<e.scrollSensitivity?d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop-e.scrollSpeed);if(!e.axis||e.axis!="y")d.overflowOffset.left+d.scrollParent[0].offsetWidth-b.pageX<e.scrollSensitivity?d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft-e.scrollSpeed)}else{if(!e.axis||e.axis!="x")b.pageY-a(document).scrollTop()<e.scrollSensitivity?f=a(document).scrollTop(a(document).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<e.scrollSensitivity&&(f=a(document).scrollTop(a(document).scrollTop()+e.scrollSpeed));if(!e.axis||e.axis!="y")b.pageX-a(document).scrollLeft()<e.scrollSensitivity?f=a(document).scrollLeft(a(document).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<e.scrollSensitivity&&(f=a(document).scrollLeft(a(document).scrollLeft()+e.scrollSpeed))}f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c){var d=a(this).data("draggable"),e=d.options;d.snapElements=[],a(e.snap.constructor!=String?e.snap.items||":data(draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!=d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=e.snapTolerance,g=c.offset.left,h=g+d.helperProportions.width,i=c.offset.top,j=i+d.helperProportions.height;for(var k=d.snapElements.length-1;k>=0;k--){var l=d.snapElements[k].left,m=l+d.snapElements[k].width,n=d.snapElements[k].top,o=n+d.snapElements[k].height;if(!(l-f<g&&g<m+f&&n-f<i&&i<o+f||l-f<g&&g<m+f&&n-f<j&&j<o+f||l-f<h&&h<m+f&&n-f<i&&i<o+f||l-f<h&&h<m+f&&n-f<j&&j<o+f)){d.snapElements[k].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=!1;continue}if(e.snapMode!="inner"){var p=Math.abs(n-j)<=f,q=Math.abs(o-i)<=f,r=Math.abs(l-h)<=f,s=Math.abs(m-g)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n-d.helperProportions.height,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l-d.helperProportions.width}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m}).left-d.margins.left)}var t=p||q||r||s;if(e.snapMode!="outer"){var p=Math.abs(n-i)<=f,q=Math.abs(o-j)<=f,r=Math.abs(l-g)<=f,s=Math.abs(m-h)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o-d.helperProportions.height,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m-d.helperProportions.width}).left-d.margins.left)}!d.snapElements[k].snapping&&(p||q||r||s||t)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=p||q||r||s||t}}}),a.ui.plugin.add("draggable","stack",{start:function(b,c){var d=a(this).data("draggable").options,e=a.makeArray(a(d.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});if(!!e.length){var f=parseInt(e[0].style.zIndex)||0;a(e).each(function(a){this.style.zIndex=f+a}),this[0].style.zIndex=f+e.length}}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("zIndex")&&(e._zIndex=d.css("zIndex")),d.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})})(jqcc);

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la) */
(function($) {

  jqcc.fn.extend({
    slimScroll: function(options) {

      var defaults = {
        wheelStep : 20,
        width : 'auto',
        height : 'auto',
        size : '7px',
        color: '#000',
        position : 'right',
        distance : '1px',
        start : 'top',
        opacity : .4,
        alwaysVisible : false,
        railVisible : false,
        railColor : '#333',
        railOpacity : '0.2',
        railClass : 'slimScrollRail',
        barClass : 'slimScrollBar',
        wrapperClass : 'slimScrollDiv',
        allowPageScroll: false,
        scroll: 0,
        resize: 0,
        railAlwaysVisible: false,
        callback:function(){}
      };

      var o = ops = $.extend( defaults , options );

      this.each(function(){

      var isOverPanel, isOverBar, isDragg, queueHide, barHeight, percentScroll,
        divS = '<div></div>',
        minBarHeight = 30,
        releaseScroll = false,
        wheelStep = parseInt(o.wheelStep),
        cwidth = o.width,
        cheight = o.height,
        size = o.size,
        color = o.color,
        position = o.position,
        distance = o.distance,
        start = o.start,
        opacity = o.opacity,
        alwaysVisible = o.alwaysVisible,
        railVisible = o.railVisible,
        railColor = o.railColor,
        railOpacity = o.railOpacity,
        allowPageScroll = o.allowPageScroll,
        scroll = o.scroll;
        resize = o.resize;
        railAlwaysVisible = o.railAlwaysVisible;
        callback = o.callback;
      
        var me = $(this);

        if (me.parent().hasClass('slimScrollDiv')) {
            if (scroll) {
				bar = me.parent().find('.slimScrollBar');
				rail = me.parent().find('.slimScrollRail');
				getBarHeight();
				loc = me.outerHeight() - bar.outerHeight();
				bar.css({ top: loc });
		        scrollContent(0, true);
            }

			 if (resize) {
				bar = me.parent().find('.slimScrollBar');
	            rail = me.parent().find('.slimScrollRail');
	   			getBarHeight();
			 }

            return;
        }

        var wrapper = $(divS)
          .addClass( o.wrapperClass )
          .css({
            position: 'relative',
            overflow: 'hidden',
            width: cwidth,
            height: cheight
          });

		var cw = me;

		while (parseInt(cw.css('width')) <= 0) {
			cw = cw.parent();
		}

		if (typeof cw == 'undefined' || typeof cw.css('width') == 'undefined' || cw.css('width') == 'auto') {
		} else { 
			newwidth = (cw.css('width').replace('px','')-10 + 8 )+'px';
			me.css({ width: newwidth });
		}

		me.css({
          overflow: 'hidden'
		});	

		/*if (position == 'right') {
			me.css({'padding-right':'0px'});
		} else {
			me.css({'padding-left':'0px'});
		}*/

        var rail  = $(divS)
          .addClass( o.railClass )
          .css({
            width: size,
            height: '100%',
            position: 'absolute',
            top: 0,
            display: ((alwaysVisible && railVisible) || railAlwaysVisible) ? 'block' : 'none',
            'border-radius': size,
            background: railColor,
            opacity: railOpacity,
            zIndex: 90
          });
        var bar = $(divS)
          .addClass( o.barClass )
          .css({
            background: color,
            width: size,
            position: 'absolute',
            top: 0,
            opacity: opacity,
            display: alwaysVisible ? 'block' : 'none',
            'border-radius' : size,
            BorderRadius: size,
            MozBorderRadius: size,
            WebkitBorderRadius: size,
            zIndex: 99
          });

        var posCss = (position == 'right') ? { right: distance } : { left: distance };
        rail.css(posCss);
        bar.css(posCss);

        me.wrap(wrapper);
        me.parent().append(bar);
        me.parent().append(rail);

        bar.draggable({ 
          axis: 'y', 
          containment: 'parent',
          start: function() { isDragg = true; },
          stop: function() { isDragg = false; hideBar(); },
          drag: function(e) 
          { 
            scrollContent(0, $(this).position().top, false);
          }
        });

        rail.hover(function(){
          showBar();
        }, function(){
          hideBar();
        });

        bar.hover(function(){
          isOverBar = true;
        }, function(){
          isOverBar = false;
        });

        me.hover(function(){
          isOverPanel = true;
          showBar();
          hideBar();
        }, function(){
          isOverPanel = false;
          hideBar();
        });

        var _onWheel = function(e)
        {
          if (!isOverPanel) { return; }

          var e = e || window.event;

          var delta = 0;
          if (e.wheelDelta) { delta = -e.wheelDelta/120; }
          if (e.detail) { delta = e.detail / 3; }

          scrollContent(delta, true);

          if (e.preventDefault && !releaseScroll) { e.preventDefault(); }
          if (!releaseScroll) { e.returnValue = false; }
        }

        function scrollContent(y, isWheel, isJump)
        {

          var delta = y;

          if (isWheel)
          {
            delta = parseInt(bar.css('top')) + y * wheelStep / 100 * bar.outerHeight();

            var maxTop = me.outerHeight() - bar.outerHeight();
            delta = Math.min(Math.max(delta, 0), maxTop);

            bar.css({ top: delta + 'px' });
          }

          percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
          delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

          if (isJump)
          {
            delta = y;
            var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
            bar.css({ top: offsetTop + 'px' });
          }

          me.scrollTop(delta);
          showBar();
          hideBar();
        }

        var attachWheel = function()
        {
          if (window.addEventListener)
          {
            this.addEventListener('DOMMouseScroll', _onWheel, false );
            this.addEventListener('mousewheel', _onWheel, false );
          } 
          else
          {
            document.attachEvent("onmousewheel", _onWheel)
          }
        }

		attachWheel();

        function getBarHeight() {
			barHeight = 0;

			if (me[0].scrollHeight != 0) {
				barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);	
			}
			
			bar.css({ height: barHeight + 'px' });
        }

        getBarHeight();

        function showBar()
        {
          getBarHeight();
          clearTimeout(queueHide);

          releaseScroll = allowPageScroll && percentScroll == ~~ percentScroll;
          if(barHeight >= me.outerHeight()) {
            releaseScroll = true;
            return;
          }
          bar.stop(true,true).fadeIn('fast');
          if (railVisible || railAlwaysVisible) { rail.stop(true,true).fadeIn('fast'); }
        }

        function hideBar()
        {
          if (!alwaysVisible)
          {
            queueHide = setTimeout(function(){
              if (!isOverBar && !isDragg) 
              { 
                bar.fadeOut('slow');
                if(!railAlwaysVisible) rail.fadeOut('slow');
              }
            }, 1000);
          }
        }

        if (start == 'bottom') 
        {
          bar.css({ top: me.outerHeight() - bar.outerHeight() });
          scrollContent(0, true);
        }
        else if (typeof start == 'object')
        {
          scrollContent($(start).position().top, null, true);

          if (!alwaysVisible) { bar.hide(); }
        }
      });
      callback();
      return this;
    }
  });

  jqcc.fn.extend({
    slimscroll: jqcc.fn.slimScroll
  });

})(jqcc);/*/
 * CometChat
 * Copyright (c) 2014 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
 */
 
; if (!Object.keys) Object.keys = function(o) {if (o !== Object(o))throw new TypeError('Object.keys called on a non-object');var k=[],p;for (p in o) if(Object.prototype.hasOwnProperty.call(o,p)) k.push(p);return k;};

(function($){
    $.cometchat = $.cometchat||function(){
        var baseUrl = '/cometchat/';
        var ccvariable = {};
        var sendajax = true;
        var broadcastData = [];
        var sendbroadcastinterval = 0;
        var language = ["Chat Options","Type your status and hit the enter key!","My Status","Available","Busy","Invisible","","","Please login to use chat","Chat Now","Me","Offline","Who's Online","Disable sound notifications","No users online at the moment. Please try again later.","New Messages...","","Offline","Find a user","<br\/><span style='color:#999'>is online<\/span>","<br\/><span style='color:#999'>is offline<\/span>","<br\/><span style='color:#999'>is online (busy)<\/span>","Set my status","I am...","Disable popup notifications","","Start chatting!","Close this bar","No users online at the moment. Please try again later.","No friends online at the moment. Please try again later.","I'm available","I'm busy","I'm offline","I'm offline","I'm away"," | ","And "," more notifications","This popup is already open. Please close the existing popup and try again.","Navigating away from this page will close your chat popups.","Others","Loading...","","My Name","Set my name","Type your Name\/Status and hit the enter key!","Messages from","Click here to view","New Message from","Updated","Failed","Chat Now","You have received a new chat message. Click OK to read","Please don't spam your friend","New messages","Send a message...","You have logged out","No change","No user found.","Has sent you a message with smiley.","Web","Mobile","Minimize User Tab","Minimize Setting Tab","Clear Conversation","Report Conversation","Share Image","Capture Photo","Share Video","Capture Video","Leave Chatroom","Invite Users","Create Chatroom","Options","Close Tab","Minimize Tab","Close Popup","Login Options","Minimize","Select login mode","Logout","Logout was unsuccessful. Please try again.","Login here","Load Earlier Messages...","No more messages"];var trayicon = {"home":["home","Home","\/","","","","","",""],"chatrooms":["chatrooms","Chatrooms","\/cometchat\/modules\/chatrooms\/index.php","_popup","600","300","","1","1"],"announcements":["announcements","Announcements","\/cometchat\/modules\/announcements\/index.php","_popup","280","300","","1",""],"games":["games","Single Player Games","\/cometchat\/modules\/games\/index.php","_popup","465","300","","1",""],"share":["share","Share This Page","\/cometchat\/modules\/share\/index.php","_popup","350","50","","1",""],"scrolltotop":["scrolltotop","Scroll To Top","javascript:jqcc.cometchat.scrollToTop();","","","","","",""]};var settings = {"barWidth":960,"barAlign":"center","autoLoadModules":1,"barType":"fluid","plugins":["smilies","clearconversation","chattime","games"],"extensions":["mobileapp","jabber","mobilewebapp"],"hideOffline":1,"autoPopupChatbox":1,"messageBeep":1,"beepOnAllMessages":1,"barPadding":20,"minHeartbeat":3000,"maxHeartbeat":12000,"fullName":0,"searchDisplayNumber":10,"thumbnailDisplayNumber":40,"typingTimeout":10000,"idleTimeout":300,"displayOfflineNotification":1,"displayOnlineNotification":1,"displayBusyNotification":1,"notificationTime":5000,"announcementTime":15000,"scrollTime":1,"armyTime":1,"disableForIE6":0,"iPhoneView":0,"hideBarCheck":0,"startOffline":0,"fixFlash":0,"lightboxWindows":1,"sleekScroller":1,"color":"standard","cookiePrefix":"cc_","disableForMobileDevices":1,"desktopNotifications":1,"windowTitleNotify":1,"floodControl":0,"windowFavicon":0,"theme":"standard","ccauth":{"enabled":"0","active":["Facebook","Google","Twitter"]},"prependLimit":"100"};        ccvariable.documentTitle = document.title;
        ccvariable.isJabber = {};
        ccvariable.externalVars = {};
        ccvariable.sendVars = {};
        ccvariable.sessionVars = {};
        ccvariable.internalVars = {};
        ccvariable.openChatboxId = '';
        ccvariable.loggedout = 0;
        ccvariable.offline = 0;
        ccvariable.windowFocus = true;
        ccvariable.resynchronize = 0;
        ccvariable.heartbeatTimer;
        ccvariable.heartbeatTime = settings.minHeartbeat;
        ccvariable.heartbeatCount = 1;
        ccvariable.updateSessionVars = 0;
        ccvariable.timestamp = 0;
        ccvariable.lastOnlineNumber = 0;
        ccvariable.trayOpen = '';
        ccvariable.newMessages = 0;
        ccvariable.buddylistName = {};
        ccvariable.buddylistMessage = {};
        ccvariable.buddylistStatus = {};
        ccvariable.buddylistAvatar = {};
        ccvariable.buddylistLink = {};
        ccvariable.buddylistIsDevice = {};
        ccvariable.jabberOnlineNumber = 0;
        ccvariable.chatBoxesOrder = {};
        ccvariable.trying = {};
        ccvariable.todaysDate = new Date();
        ccvariable.currentTime = Math.floor(ccvariable.todaysDate.getTime());
        ccvariable.todays12am = ccvariable.currentTime -(ccvariable.currentTime%(24*60*60*1000));
        ccvariable.specialChars = /([^\x00-\x80]+)|([&][#])+/;
        ccvariable.typingTo = 0;
        ccvariable.idleTime = ccvariable.currentTime;
        ccvariable.idleFlag = 0;
        ccvariable.currentStatus;
        ccvariable.buddyListHash;
        ccvariable.callbackfn = 'mobilewebapp';
        ccvariable.baseData = $.cookie(settings.cookiePrefix+'data');
        ccvariable.mobileDevice = navigator.userAgent.match(/ipad|ipod|iphone|android|windows ce|blackberry|palm|symbian/i);
        ccvariable.initialized = 0;
        ccvariable.crossDomain = '0';
        ccvariable.dataMethod = 'get';
        ccvariable.dataTimeout = '10000';
        ccvariable.isMini = 0;
        ccvariable.desktopNotification = {};
        ccvariable.runHeartbeat = 1;
        ccvariable.userid = 0;
        ccvariable.ccmobileauth =0 ;
        ccvariable.prependLimit = (typeof(settings['prependLimit'])!=="undefined")?settings['prependLimit']:0;
        var calleeAPI = settings.theme;
        if(typeof (ccvariable.callbackfn)!='undefined'&&ccvariable.callbackfn!=''){
            calleeAPI = ccvariable.callbackfn;
        }else if(ccvariable.mobileDevice&&settings.disableForMobileDevices){
        	calleeAPI = ccvariable.callbackfn = 'ccmobiletab';
        }

        ccvariable.externalVars["callbackfn"] = ccvariable.callbackfn;
        $.ajaxSetup({scriptCharset: "utf-8", cache: "false"});
        if(settings.messageBeep==1&&ccvariable.callbackfn==""){
            if(typeof (jqcc[calleeAPI].messageBeep)!='undefined'){
                jqcc[calleeAPI].messageBeep(baseUrl);
            }
        }
        var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
        var eventer = window[eventMethod];
        var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

        // Listen to message from child window
        eventer(messageEvent,function(e) {
            if(e.data.indexOf('ccmobile_reinitializeauth')!== -1){
                jqcc.ccmobiletab.reinitialize();
            }else if(e.data.indexOf('cc_reinitializeauth')!== -1){
                jqcc.cometchat.reinitialize();
                jqcc('#cometchat_userstab').click();
                jqcc('#cometchat_auth_popup').removeClass('cometchat_tabopen');
                jqcc('#cometchat_optionsbutton').removeClass('cometchat_tabclick');
            }else if(e.data.indexOf('alert')!== -1){
                if(typeof(e.data.split('^')[1]) != 'undefined'){
                    alert(e.data.split('^')[1]);
                }
            }
        },false);
        $(window).focus(function(){
            ccvariable.isMini = 0;
            if(settings.desktopNotifications==1){
                for(x in  ccvariable.desktopNotification){
                    for(y in  ccvariable.desktopNotification[x]){
                        ccvariable.desktopNotification[x][y].close();
                    }
                }
            }
            ccvariable.desktopNotification = {};
        });
        $(window).blur(function(){
            ccvariable.isMini = 1;
        });
        function userClickId(id){
            if(typeof (jqcc[calleeAPI].createChatbox)!=='undefined'){
                jqcc[calleeAPI].createChatbox(id, ccvariable.buddylistName[id], ccvariable.buddylistStatus[id], ccvariable.buddylistMessage[id], ccvariable.buddylistAvatar[id], ccvariable.buddylistLink[id]);
            }
        };
        function branded(){
            language[1] = 'Powered By <a href="http://www.socialtools.ir">Qasedak Group</a>';
        };
        function preinitialize(){
            if(jqcc.cometchat.getUserAgent()[0]=="MSIE" && parseInt(jqcc.cometchat.getUserAgent()[1])<9){
                settings.windowFavicon=0;
            };
            if(ccvariable.callbackfn==''&&settings.hideBarCheck==1&&$.cookie(settings.cookiePrefix+"loggedin")!=1){
                $.ajax({
                    url: baseUrl+"cometchat_check.php",
                    data: {'init': '1', basedata: ccvariable.baseData},
                    dataType: 'jsonp',
                    type: ccvariable.dataMethod,
                    timeout: ccvariable.dataTimeout,
                    success: function(data){
                        if(data!='0'){
                            $.cookie(settings.cookiePrefix+"loggedin", '1', {path: '/'});
                            if(typeof (jqcc[calleeAPI].initialize)!=='undefined'){
                                jqcc[calleeAPI].initialize();
                            }
                            ccvariable.externalVars["buddylist"] = '1';
                            ccvariable.externalVars["initialize"] = '1';
                            ccvariable.externalVars["currenttime"] = ccvariable.currentTime;
                            if (ccvariable.runHeartbeat == 1) {
                              jqcc.cometchat.chatHeartbeat();
                            }
                        }
                    }
                });
            }else{
                if(typeof (jqcc[calleeAPI].initialize)!=='undefined'){
                    jqcc[calleeAPI].initialize();
                }else if(ccvariable.callbackfn!=''&&typeof (jqcc[ccvariable.callbackfn].init())=='function'){
                    jqcc[ccvariable.callbackfn].init();
                }
                ccvariable.externalVars["buddylist"] = '1';
                ccvariable.externalVars["initialize"] = '1';
                ccvariable.externalVars["currenttime"] = ccvariable.currentTime;
                if(ccvariable.runHeartbeat==1){
                    jqcc.cometchat.chatHeartbeat();
                }
            }
        };
        arguments.callee.getUserAgent = function(){
            var ua= navigator.userAgent, tem,
            M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if(/trident/i.test(M[1])){
                tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
                return 'IE '+(tem[1] || '');
            }
            if(M[1]=== 'Chrome'){
                tem= ua.match(/\bOPR\/(\d+)/)
                if(tem!= null) return 'Opera '+tem[1];
            }
            M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
            if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
            return M;
        };
        arguments.callee.chatHeartbeat = function(force){
            var newMessage = 0;
            if(force==1){
                if(typeof window.cometcall_function=='function'){
                    cometcall_function(cometid, 0, calleeAPI);
                }
            }
            ccvariable.externalVars["typingto"] = ccvariable.typingTo;
            ccvariable.externalVars["blh"] = ccvariable.buddyListHash;
            ccvariable.externalVars["status"] = "";
            if((ccvariable.callbackfn!=''&&ccvariable.callbackfn!='desktop')||calleeAPI=='ccmobiletab'){
                ccvariable.externalVars["status"] = 'available';
            }
            if(force==1){
                ccvariable.externalVars["f"] = 1;
            }else{
                delete ccvariable.externalVars["f"];
            }
            var atleastOneNewMessage = 0;
            var nowTime = new Date();
            var n = {};
            var idleDifference = Math.floor(nowTime.getTime()/1000)-ccvariable.idleTime;
            if(idleDifference>settings.idleTimeout&&ccvariable.idleFlag==0){
                if(ccvariable.currentStatus=='available'||ccvariable.currentStatus=='busy'){
                    ccvariable.idleFlag = 1;
                    ccvariable.externalVars["status"] = 'away';
                    if(typeof (jqcc[calleeAPI].removeUnderline2)!=='undefined'){
                        jqcc[calleeAPI].removeUnderline2();
                    }
                    if(typeof (jqcc[calleeAPI].ccAddClass)!=='undefined'){
                        jqcc[calleeAPI].ccAddClass("#cometchat_userstab_icon", 'cometchat_user_away2');
                    }
                }
            }
            if(idleDifference<settings.idleTimeout&&ccvariable.idleFlag==1){
                if(ccvariable.currentStatus=='available'||ccvariable.currentStatus=='busy'){
                    ccvariable.idleFlag = 0;
                    ccvariable.externalVars["status"] = ccvariable.currentStatus;
                    if(typeof (jqcc[calleeAPI].removeUnderline2)!=='undefined'){
                        jqcc[calleeAPI].removeUnderline2();
                    }
                    if(typeof (jqcc[calleeAPI].ccAddClass)!=='undefined'){
                        jqcc[calleeAPI].ccAddClass("#cometchat_userstab_icon", 'cometchat_user_'+ccvariable.currentStatus+'2');
                    }
                }
            }
            if(ccvariable.crossDomain==1){
                ccvariable.externalVars["cookie_"+settings.cookiePrefix+"state"] = $.cookie(settings.cookiePrefix+'state');
                ccvariable.externalVars["cookie_"+settings.cookiePrefix+"hidebar"] = $.cookie(settings.cookiePrefix+'hidebar');
                ccvariable.externalVars["cookie_"+settings.cookiePrefix+"an"] = $.cookie(settings.cookiePrefix+'an');
                ccvariable.externalVars["cookie_"+settings.cookiePrefix+"loggedin"] = $.cookie(settings.cookiePrefix+'loggedin');
            }
            ccvariable.externalVars['currenttime'] = Math.floor(new Date().getTime()/1000);
            ccvariable.externalVars["basedata"] = ccvariable.baseData;
            $.ajax({
                url: baseUrl+"cometchat_receive.php",
                data: ccvariable.externalVars,
                dataType: 'jsonp',
                type: ccvariable.dataMethod,
                timeout: ccvariable.dataTimeout,
				error: function(){
                    clearTimeout(ccvariable.heartbeatTimer);
                    ccvariable.heartbeatTime = settings.minHeartbeat;
                    ccvariable.heartbeatTimer = setTimeout(function(){
                        jqcc.cometchat.chatHeartbeat();
                    }, ccvariable.heartbeatTime);
				},
                success: function(data){
					if(data){
                        $.each(data, function(type, item){
                            if(type=='blh'){
                                ccvariable.buddyListHash = item;
                            }
                            if(type=='an'){
                                if(typeof (jqcc[calleeAPI].newAnnouncement)!=='undefined'){
                                    jqcc[calleeAPI].newAnnouncement(item);
                                }
                            }
                            if(type=='buddylist'){
                                if(typeof (jqcc[calleeAPI].buddyList)=='function'){
                                    jqcc[calleeAPI].buddyList(item);
                                }
                            }
                            if(type=='loggedout'){
                                $.cookie(settings.cookiePrefix+"loggedin", null, {path: '/'});
                                $.cookie(settings.cookiePrefix+"state", null, {path: '/'});
                                $.cookie(settings.cookiePrefix+"jabber", null, {path: '/'});
                                $.cookie(settings.cookiePrefix+"jabber_type", null, {path: '/'});
                                $.cookie(settings.cookiePrefix+"hidebar", null, {path: '/'});
                                if(typeof (jqcc[calleeAPI].loggedOut)!=='undefined'){
                                    jqcc[calleeAPI].loggedOut();
                                }
                                jqcc.cometchat.setThemeVariable('loggedout', 1);
                                clearTimeout(ccvariable.heartbeatTimer);
                            }
                            if(type=='userstatus'){
                                ccvariable.userid = item.id;
                                ccvariable.buddylistStatus[item.id] = item.s;
                                ccvariable.buddylistMessage[item.id] = item.m;
                                ccvariable.buddylistName[item.id] = item.n;
                                ccvariable.buddylistAvatar[item.id] = item.a;
                                ccvariable.buddylistLink[item.id] = item.l;
                                ccvariable.ccmobileauth = item.ccmobileauth;
                                if(typeof (jqcc[calleeAPI].userStatus)!=='undefined'){
                                    jqcc[calleeAPI].userStatus(item);
                                }
                            }
                            if(type=='cometid'){
                                cometcall_function(item.id, 0, calleeAPI);
                            }
                            if(type=='init'){
                                jqcc.cometchat.setInternalVariable('updatingsession', '1');
                            }
                            if(type=='initialize'){
                                ccvariable.timestamp = item;
                                ccvariable.externalVars["timestamp"] = item;
                                if(typeof (jqcc[calleeAPI].resynch)!=='undefined'){
                                    jqcc[calleeAPI].resynch();
                                }
                            }
                            if(type=='tt'){
                                if(typeof (jqcc[calleeAPI].typingTo)!=='undefined'){
                                    jqcc[calleeAPI].typingTo(item);
                                }
                            }
                            if(type=='messages'){
                                if(ccvariable.externalVars['initialize'] != 1){
                                    ccvariable.externalVars["timestamp"] = item[Object.keys(item).sort().reverse()[0]].id;
                                }
                                if(typeof (jqcc[calleeAPI].addMessages)!=='undefined'){
                                    newMessage = jqcc[calleeAPI].addMessages(item);
                                }
								ccvariable.heartbeatCount = 1;
								ccvariable.heartbeatTime = settings.minHeartbeat;
                            }
                        });
                        if(ccvariable.openChatboxId!=''&&newMessage>0){
                            if(typeof (jqcc[calleeAPI].tryAddMessages)!=='undefined'){
                                jqcc[calleeAPI].tryAddMessages(ccvariable.openChatboxId, atleastOneNewMessage);
                            }
                        }
                        jqcc.cometchat.setExternalVariable('initialize', '0');
                        jqcc.cometchat.setExternalVariable('currenttime', '0');
                        if(ccvariable.loggedout!=1&&ccvariable.offline!=1){
                            ccvariable.heartbeatCount++;
                            if(ccvariable.heartbeatCount>4){
                                ccvariable.heartbeatTime *= 2;
                                ccvariable.heartbeatCount = 1;
                            }
                            if(ccvariable.heartbeatTime>settings.maxHeartbeat){
                                ccvariable.heartbeatTime = settings.maxHeartbeat;
                            }
                            clearTimeout(ccvariable.heartbeatTimer);
                            ccvariable.heartbeatTimer = setTimeout(function(){
                                jqcc.cometchat.chatHeartbeat();
                            }, ccvariable.heartbeatTime);
                        }
                    }
				}
            });
        };
        arguments.callee.setExternalVariable = function(name, value){
            ccvariable.externalVars[name] = value;
        };
        arguments.callee.setInternalVariable = function(name, value){
            ccvariable.internalVars[name] = value;
        };
        arguments.callee.getSessionVariable = function(name){
            if(ccvariable.sessionVars[name]){
                return ccvariable.sessionVars[name];
            }else{
                return '';
            }
        };
        arguments.callee.incrementThemeVariable = function(name){
            ccvariable[name]++;
        };
        arguments.callee.setThemeVariable = function(name, value){
            ccvariable[name] = value;
        };
        arguments.callee.setThemeArray = function(name, id, value){
            ccvariable[name][id] = value;
        };
        arguments.callee.getThemeArray = function(name, id){
            return ccvariable[name][id];
        };
        arguments.callee.getThemeVariable = function(name){
            return ccvariable[name];
        };
        arguments.callee.userClick = function(listing){
            if(typeof (jqcc[calleeAPI].userClick)!=='undefined'){
                jqcc[calleeAPI].userClick(listing);
            }
        };
        arguments.callee.orderChatboxes = function(){
            var activeids = '';
            var selfNewMessages = 0;
            for(chatbox in ccvariable.chatBoxesOrder){
                if(ccvariable.chatBoxesOrder.hasOwnProperty(chatbox)){
                    if(ccvariable.chatBoxesOrder[chatbox]!=null){
                        if(!Number(ccvariable.chatBoxesOrder[chatbox])){
                            ccvariable.chatBoxesOrder[chatbox] = 0;
                        }
                        activeids += chatbox+'|'+ccvariable.chatBoxesOrder[chatbox]+',';
                        if(ccvariable.chatBoxesOrder[chatbox]>0){
                            selfNewMessages = 1;
                        }
                    }
                }
            }
            ccvariable.newMessages = selfNewMessages;
            activeids = activeids.slice(0, -1);
            jqcc.cometchat.setSessionVariable('activeChatboxes', activeids);
        };
        arguments.callee.getInternalVariable = function(name){
            if(ccvariable.internalVars[name]){
                return ccvariable.internalVars[name];
            }else{
                return '';
            }
        };
        arguments.callee.getExternalVariable = function(name){
            if(ccvariable.externalVars[name]){
                return ccvariable.externalVars[name];
            }else{
                return '';
            }
        };
        arguments.callee.setSessionVariable = function(name, value){
            ccvariable.sessionVars[name] = value;
            if(jqcc.cometchat.getInternalVariable('updatingsession')!=1){
                var cc_state = '';
                if(ccvariable.sessionVars['buddylist']){
                    cc_state += ccvariable.sessionVars['buddylist'];
                }else{
                    cc_state += ' ';
                }
                cc_state += ':';
                if(ccvariable.sessionVars['activeChatboxes']){
                    cc_state += ccvariable.sessionVars['activeChatboxes'];
                }else{
                    cc_state += ' ';
                }
                cc_state += ':';
                if(ccvariable.sessionVars['openChatboxId']){
                    cc_state += ccvariable.sessionVars['openChatboxId'];
                }else{
                    cc_state += ' ';
                }
                cc_state += ':'+ccvariable.lastOnlineNumber;
                cc_state += ':'+ccvariable.offline;
                cc_state += ':'+ccvariable.trayOpen;
                $.cookie(settings.cookiePrefix+'state', cc_state, {path: '/'});
            }
        };
        var windowHeights = {};
        arguments.callee.c5 = function(){
            branded();
            preinitialize();
            return;
        };
        arguments.callee.c6 = function(){
            preinitialize();
            return;
        };
        arguments.callee.getBaseData = function(){
            return ccvariable.baseData;
        };
        arguments.callee.getActiveId = function(){
            return ccvariable.openChatboxId;
        };
        arguments.callee.getUserID = function(){
           return ccvariable.userid;
        };
        arguments.callee.getUser = function(id, callbackfn){
            $.ajax({
                url: baseUrl+"cometchat_getid.php",
                data: {userid: id, basedata: ccvariable.baseData},
                cache: false,
                dataType: 'jsonp',
                type: ccvariable.dataMethod,
                timeout: ccvariable.dataTimeout,
                success: function(data){
                    if(data){
                        window[callbackfn](data);
                    }else{
                        window[callbackfn](0);
                    }
                }
            });
        };
        arguments.callee.ping = function(){
            return 1;
        };
        arguments.callee.getLanguage = function(id){
            if(typeof(id) != 'undefined' && id != null && id != ''){
                if(typeof(language[id]) != 'undefined' ){
                    return language[id];
                }else{
                    return '';
                }
            }
            return language;
        };
        arguments.callee.chatWith = function(id){
            if(typeof (jqcc[calleeAPI].chatWith)!=='undefined'){
                jqcc[calleeAPI].chatWith(id);
            }
        };
        arguments.callee.getRecentData = function(id){
            $.ajax({
                cache: false,
                url: baseUrl+"cometchat_receive.php",
                data: {chatbox: id, basedata: ccvariable.baseData},
                dataType: 'jsonp',
                type: ccvariable.dataMethod,
                timeout: ccvariable.dataTimeout,
                success: function(data){
                    if(ccvariable.callbackfn!=''){
                        jqcc[ccvariable.callbackfn].loadData(id, data);
                    }
                }
            });
        };
        arguments.callee.getUserDetails = function(id){
            $.ajax({
                url: baseUrl+"cometchat_getid.php",
                data: {userid: id, basedata: ccvariable.baseData},
                type: ccvariable.dataMethod,
                timeout: ccvariable.dataTimeout,
                cache: false,
                async: false,
                dataType: 'jsonp',
                success: function(data){
                    ccvariable.buddylistMessage[id] = data.m;
                    ccvariable.buddylistName[id] = data.n;
                    ccvariable.buddylistAvatar[id] = data.a;
                    ccvariable.buddylistLink[id] = data.l;
                    if(ccvariable.callbackfn!=''){
                        jqcc[ccvariable.callbackfn].loadUserData(id, data);
                    }
                }
            });
        };
        arguments.callee.launchModule = function(id){
            if(typeof (jqcc[calleeAPI].launchModule)!=='undefined'){
                jqcc[calleeAPI].launchModule(id);
            }
        };
        arguments.callee.toggleModule = function(id){
            if(typeof (jqcc[calleeAPI].toggleModule)!=='undefined'){
                jqcc[calleeAPI].toggleModule(id);
            }
        };
        arguments.callee.closeModule = function(id){
            if(typeof (jqcc[calleeAPI].closeModule)!=='undefined'){
                jqcc[calleeAPI].closeModule(id);
            }
        };
        arguments.callee.joinChatroom = function(roomid, inviteid, roomname){
            if(typeof (jqcc[calleeAPI].joinChatroom)!=='undefined'){
                jqcc[calleeAPI].joinChatroom(roomid, inviteid, roomname);
            }
        };
        arguments.callee.createChatboxSet = function(id, name, status, message, avatar, link, silent, tryOldMessages){
            $.ajax({
                url: baseUrl+"cometchat_getid.php",
                data: {userid: id, basedata: ccvariable.baseData},
                dataType: 'jsonp',
                type: ccvariable.dataMethod,
                timeout: ccvariable.dataTimeout,
                cache: false,
                success: function(data){
                    if(data){
                        jqcc[settings.theme].createChatboxSuccess(id, name, status, message, avatar, link, silent, tryOldMessages, data);
                    }
                },
                error: function(data){
                    jqcc.cometchat.setThemeVariable('trying', id, 5);
                }
            });

        };
        arguments.callee.updateChatboxSet = function(id,prepend){
            var postVars={chatbox: id, basedata: ccvariable.baseData};
            if(typeof(prepend)!=="undefined"){
                postVars["prepend"]=prepend;
            }
            $.ajax({
                cache: false,
                url: baseUrl+"cometchat_receive.php",
                data: postVars,
                type: ccvariable.dataMethod,
                timeout: ccvariable.dataTimeout,
                dataType: 'jsonp',
                success: function(data){
                    if(data){
                        if(typeof(prepend)!=="undefined"){
                            jqcc[settings.theme].prependMessages(id, data);
                        }else{
                            jqcc[settings.theme].updateChatboxSuccess(id, data);
                        }
                    }
                }
            });
        };
        arguments.callee.chatboxKeydownSet = function(id, message, callbackfn){
            if(typeof(callbackfn) === "undefined" || callbackfn !="") {
                callbackfn = ccvariable.callbackfn;
            }
            ccvariable.sendVars["callbackfn"] = callbackfn;
            if(message.length>1000){
                if(message.charAt(1000)==' '){
                    messagecurrent = message.substring(0, 1000);
                }else{
                    messagecurrent = message.substring(0, 1000);
                    var spacePos = messagecurrent.length;
                    while(messagecurrent.charAt(spacePos)!=' '){
                        spacePos--;
                    }
                    messagecurrent = message.substring(0, spacePos);
                }
                messagenext = message.substring(messagecurrent.length);
                if(messagenext.length>0){
                    messagecurrent = messagecurrent+"...";
                }
            }else{
                messagecurrent = message;
                messagenext = '';
            }
            message = messagecurrent;

            sendAjax = function (broadcastflag) {
                sendajax = false;
                $.ajax({
                    url: baseUrl+"cometchat_send.php",
                    data: ccvariable.sendVars,
                    dataType: 'jsonp',
                    type: ccvariable.dataMethod,
                    timeout: ccvariable.dataTimeout,
                    success: function(data){
                        ccvariable.sendVars = {};
                        if(data != null && typeof(data) != 'undefined'){

                            if(typeof (jqcc[calleeAPI].addMessages)!=='undefined'){
                                if(broadcastflag)
                                {
                                    jqcc[calleeAPI].addMessages(data);
                                }else{
                                    jqcc[calleeAPI].addMessages([{"from": id, "message": data.m, "id": data.id}]);
                                }
                            }

                                /*For Legacy Apps Push Notifications Start*/
                                /*$.each(data, function(i, buddy){
                                    if(i%2!=0 && (jqcc.cometchat.getThemeArray('buddylistIsDevice', buddy)==1)){
                                        jqcc.ccmobilenativeapp.sendnotification(message, buddy.id, jqcc.cometchat.getName(jqcc.cometchat.getThemeVariable('userid')));
                                    }
                                });*/
                                /*For Legacy Apps Push Notifications End*/
                        }
                        jqcc.cometchat.resetTypingTo(id);
                        ccvariable.heartbeatCount = 1;
                        if(ccvariable.heartbeatTime>settings.minHeartbeat){
                            ccvariable.heartbeatTime = settings.minHeartbeat;
                            clearTimeout(ccvariable.heartbeatTimer);
                            ccvariable.heartbeatTimer = setTimeout(function(){
                                jqcc.cometchat.chatHeartbeat();
                            }, ccvariable.heartbeatTime);
                        }
                        ccvariable.sendVars = {};
                        sendajax = true;
                   },
                   error: function(data){
                        sendajax = true;
                        if(broadcastData.length==0){
                            sendbroadcastinterval = 0;
                            clearInterval(sendbroadcastinterval);
                        }
                   }
               });
            }
            $( document ).ajaxStop(function() {
                sendajax = true;
                if(broadcastData.length==0){
                    sendbroadcastinterval = 0;
                    clearInterval(sendbroadcastinterval);
                }
            });
            if(sendajax == true){
                ccvariable.sendVars["basedata"] = ccvariable.baseData;
                if(broadcastData.length == 0){
                    ccvariable.sendVars["to"] = id;
                    ccvariable.sendVars["message"] = message;
                    var broadcastflag = 0;
                }else{
                    broadcastData.push(id,message);
                    ccvariable.sendVars["broadcast"] = broadcastData;
                    var broadcastflag = 1;
                }
                sendAjax(broadcastflag);
            }else{
                broadcastData.push(id,message);
                if(sendbroadcastinterval == 0){
                    sendbroadcastinterval = setInterval(function(){
                        sendbroadcastinterval = 0;
                        clearInterval(sendbroadcastinterval);
                        if(broadcastData.length == 0){
                            clearInterval(sendbroadcastinterval);
                        }
                        if(sendajax == true && broadcastData.length > 0){
                            sendbroadcastinterval = 0;
                            clearInterval(sendbroadcastinterval);
                            ccvariable.sendVars["basedata"] = ccvariable.baseData;
                            ccvariable.sendVars["broadcast"] = broadcastData;
                            sendAjax(1);
                            broadcastData = [];
                        }
                    }, 50);
                }
            }
            if(messagenext.length>0){
                jqcc.cometchat.chatboxKeydownSet(id, '...'+messagenext);
            }
        };

        arguments.callee.sendMessage = function(id, message){
            jqcc.cometchat.chatboxKeydownSet(id,message);
        };

        arguments.callee.addMessage = function(boxid,message,msgid){
            if(typeof (jqcc[calleeAPI].addMessages)!=='undefined'){
                jqcc[calleeAPI].addMessages([{"from": boxid, "message": message, "self": 1, "old": 1, "id": msgid, "sent": Math.floor(new Date().getTime())}]);
            }
            if(typeof (jqcc[calleeAPI].scrollDown)!=='undefined'){
                jqcc[calleeAPI].scrollDown(boxid);
            }
        };

        arguments.callee.addMessage = function(boxid,message,msgid){
            if(typeof (jqcc[calleeAPI].addMessages)!=='undefined'){
                jqcc[calleeAPI].addMessages([{"from": boxid, "message": message, "self": 1, "old": 1, "id": msgid, "sent": Math.floor(new Date().getTime())}]);
            }
            if(typeof (jqcc[calleeAPI].scrollDown)!=='undefined'){
                jqcc[calleeAPI].scrollDown(boxid);
            }
        }

        arguments.callee.statusSendMessageSet = function(message, statustextarea){
            $.ajax({
                url: baseUrl+"cometchat_send.php",
                data: {statusmessage: message, basedata: ccvariable.baseData},
                dataType: 'jsonp',
                type: ccvariable.dataMethod,
                timeout: ccvariable.dataTimeout,
                success: function(data){
                    jqcc[settings.theme].statusSendMessageSuccess(statustextarea);
                },
                error: function(data){
                    jqcc[settings.theme].statusSendMessageError();
                }
            });
        };
        arguments.callee.setGuestNameSet = function(guestname, guestnametextarea){
            $.ajax({
                url: baseUrl+"cometchat_send.php",
                data: {guestname: guestname, basedata: ccvariable.baseData},
                dataType: 'jsonp',
                type: ccvariable.dataMethod,
                timeout: ccvariable.dataTimeout,
                success: function(data){
                    jqcc[settings.theme].setGuestNameSuccess(guestnametextarea);
                },
                error: function(data){
                    jqcc[settings.theme].setGuestNameError();
                }
            });
        };
        arguments.callee.hideBar = function(){
            if(typeof (jqcc[calleeAPI].hideBar)!=='undefined'){
                jqcc[calleeAPI].hideBar();
            }
        };
        arguments.callee.getBaseUrl = function(){
            return baseUrl;
        };
        arguments.callee.setAlert = function(id, number){
            if(typeof (jqcc[calleeAPI].setModuleAlert)!=='undefined'){
                jqcc[calleeAPI].setModuleAlert(id, number);
            }
        };
        arguments.callee.closeTooltip = function(){
            if(typeof (jqcc[calleeAPI].closeTooltip)!=='undefined'){
                jqcc[calleeAPI].closeTooltip();
            }
        };
        arguments.callee.scrollToTop = function(){
            if(typeof (jqcc[calleeAPI].scrollToTop)!=='undefined'){
                jqcc[calleeAPI].scrollToTop();
            }
        };
        arguments.callee.reinitialize = function(){
            ccvariable.baseData = $.cookie(settings.cookiePrefix+'data');
            if(typeof (jqcc[calleeAPI].reinitialize)!=='undefined'){
                jqcc[calleeAPI].reinitialize();
            }
        };
        arguments.callee.updateHtml = function(id, temp){
            if(typeof (jqcc[calleeAPI].updateHtml)!=='undefined'){
                jqcc[calleeAPI].updateHtml(id, temp);
            }
        };
        arguments.callee.processMessage = function(id, value){
            if(typeof (jqcc[calleeAPI].processMessage)!=='undefined'){
                return jqcc[calleeAPI].processMessage(id, value);
            }
        };
        arguments.callee.replaceHtml = function(id, value){
            replaceHtml(id, value);
        };
        arguments.callee.getSettings = function(e){
            return settings;
        };

        arguments.callee.getTrayicon = function(e){
            return trayicon;
        };
        arguments.callee.getCcvariable = function(e){
            return ccvariable;
        };
        arguments.callee.echo = function(e){
            return "ECHO";
        };
        arguments.callee.userAdd = function(id, s, m, n, a, l){
            ccvariable.isJabber[id] = 1;
            ccvariable.buddylistStatus[id] = s;
            ccvariable.buddylistMessage[id] = m;
            ccvariable.buddylistName[id] = n;
            ccvariable.buddylistAvatar[id] = a;
            ccvariable.buddylistLink[id] = l;
        };
        arguments.callee.updateJabberOnlineNumber = function(number){
            if(typeof (jqcc[calleeAPI].updateJabberOnlineNumber)!=='undefined'){
                jqcc[calleeAPI].updateJabberOnlineNumber(number);
            }
        };
        arguments.callee.getName = function(id){
            if(typeof (ccvariable.buddylistName[id])!=='undefined'){
                return ccvariable.buddylistName[id];
            }
        };
        arguments.callee.lightbox = function(name){
            var allowpopout = 0;
            if(trayicon[name]){
                if(name=='chatrooms'||name=='games'||name=='broadcast'){
                    allowpopout = 1;
                    if(settings.theme == 'lite' && name=='chatrooms'){
                        jqcc[calleeAPI].minimizeOpenChatbox();
                    }
                }
                loadCCPopup(trayicon[name][2]+'?', trayicon[name][0], "status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=0, width="+(Number(trayicon[name][4])+2)+",height="+trayicon[name][5]+"", Number(trayicon[name][4])+2, trayicon[name][5], trayicon[name][1], 0, 0, 0, allowpopout);
            }
            ccvariable.openChatboxId = '';
            jqcc.cometchat.setSessionVariable('openChatboxId', ccvariable.openChatboxId);
        };
        arguments.callee.sendStatus = function(message){
            $.ajax({
                url: baseUrl+"cometchat_send.php",
                data: {status: message, basedata: ccvariable.baseData},
                dataType: 'jsonp',
                type: ccvariable.dataMethod,
                timeout: ccvariable.dataTimeout,
                success: function(data){
                    if(message!='away'){
                        ccvariable.currentStatus = message;
                    }
                }
            });
        };
        arguments.callee.tryClickSync = function(id){
            if(ccvariable.buddylistName[id]==null||ccvariable.buddylistName[id]==''){
                if(ccvariable.trying[id]<5){
                    setTimeout(function(){
                        jqcc.cometchat.tryClickSync(id);
                    }, 500);
                }
            }else{
                if(typeof (jqcc[calleeAPI].ccClicked)!=='undefined'){
                    jqcc[calleeAPI].ccClicked('#cometchat_user_'+id);
                }
            }
        };
        arguments.callee.userDoubleClick = function(listing){
            var id = listing;
            if(typeof (jqcc[calleeAPI].createChatbox)!=='undefined'){
                jqcc[calleeAPI].createChatbox(id, ccvariable.buddylistName[id], ccvariable.buddylistStatus[id], ccvariable.buddylistMessage[id], ccvariable.buddylistAvatar[id], ccvariable.buddylistLink[id], 1);
            }
        };
        arguments.callee.tryClick = function(id){
            if(ccvariable.buddylistName[id]==null||ccvariable.buddylistName[id]==''){
                if(ccvariable.trying[id]<5){
                    setTimeout(function(){
                        jqcc.cometchat.tryClick(id);
                    }, 500);
                }
            }else{
                if(ccvariable.openChatboxId!=id){
                    if(typeof (jqcc[calleeAPI].ccClicked)!=='undefined'){
                        jqcc[calleeAPI].ccClicked('#cometchat_user_'+id);
                    }
                }
            }
        };
        arguments.callee.notify = function(title, image, message, clickEvent, id, msgid){
            if(navigator.userAgent.match(/chrome|firefox/i)&&settings.desktopNotifications==1&&ccvariable.idleFlag){
				 if (Notification.permission !== 'denied') {
					Notification.requestPermission(function (permission) {
						if(!('permission' in Notification)) {
							Notification.permission = permission;
						}
					});
				}
                if(Notification.permission === "granted"&&typeof title!='undefined'&&typeof image!='undefined'&&typeof message!='undefined'){
                    tempMsg = jqcc('<div>'+message+'</div>');
                    jqcc.each(tempMsg.find('img.cometchat_smiley'),function(){
                        jqcc(this).replaceWith('*'+jqcc(this).attr('title')+'*');
                    });
                    message = tempMsg.text();
            		if(typeof id!='undefined'){
                        if(typeof ccvariable.desktopNotification[id]=="undefined"){
                            ccvariable.desktopNotification[id] = {};
                        }
                        ccvariable.desktopNotification[id][msgid] = new Notification(title, {icon: image, body: message});
                        ccvariable.desktopNotification[id][msgid].onclick = function(){
                            if(typeof clickEvent=='function'){
                                clickEvent();
                            }
                        };
                    }else{
                        ccvariable.desktopNotification[id][msgid] = new Notification(title, {icon: image, body: message});
                        ccvariable.desktopNotification[id][msgid].onclick = function(){
                            if(typeof clickEvent=='function'){
                                clickEvent();
                            }
                        };
                    }
                }
			}
		};
        arguments.callee.statusKeydown = function(event, statustextarea){
            if(event.keyCode==13&&event.shiftKey==0){
                if(typeof (jqcc[calleeAPI].statusSendMessage)!=='undefined'){
                    jqcc[calleeAPI].statusSendMessage();
                }
                return false;
            }
        };
        arguments.callee.guestnameKeydown = function(event, statustextarea){
            if(event.keyCode==13&&event.shiftKey==0){
                if(typeof (jqcc[calleeAPI].setGuestName)!=='undefined'){
                    jqcc[calleeAPI].setGuestName(statustextarea);
                }
                return false;
            }
        };
        arguments.callee.resetTypingTo = function(id){
            if(ccvariable.typingTo==id){
                ccvariable.typingTo = 0;
            }
        };
        arguments.callee.minimizeAll = function(){
            if(typeof (jqcc[calleeAPI].setGuestName)!=='undefined'){
                jqcc[settings.theme].minimizeAll();
            }
        };
        arguments.callee.processcontrolmessage = function(incoming){
           var message = incoming.message;
           var message_array = message.split('_');
           return jqcc['cc'+message_array[2].toLowerCase()].processControlMessage(message_array);
        };
    };
    $.expr[':'].icontains = function(a, i, m){
        return (a.textContent||a.innerText||"").toLowerCase().indexOf(m[3].toLowerCase())>=0;
    };
    function replaceHtml(el, html){
        var oldEl = typeof el==="string" ? document.getElementById(el) : el;
        /*@cc_on // Pure innerHTML is slightly faster in IE
         oldEl.innerHTML = html;
         return oldEl;
         @*/
        var newEl = oldEl.cloneNode(false);
        newEl.innerHTML = html;
        oldEl.parentNode.replaceChild(newEl, oldEl);
        /* Since we just removed the old element from the DOM, return a reference
         to the new element, which can be used to restore variable references. */
        return newEl;
    }
    ;
})(jqcc);
jqcc(document).bind('keyup', function(e){
    if(e.keyCode==27){
        jqcc.cometchat.minimizeAll();
    }
});
jqcc(document).ready(function(){
    if(typeof CometChathasBeenRun==='undefined'){
        CometChathasBeenRun = true;
    }else{
        return;
    }
    jqcc.cometchat();
    jqcc.cometchat.c5();
});
var chatScroll, lobbyScroll, chatroomScroll, woScroll, cruserScroll, baseurl = "/cometchat/";
var cookie_prefix = 'cc_';
/* jquery.nicescroll
-- version 3.5.0 BETA5
-- copyright 2011-12-13 InuYaksa*2013
-- licensed under the MIT
--
-- http://areaaperta.com/nicescroll
-- https://github.com/inuyaksa/jquery.nicescroll
--
*/

(function(jQuery){

  // globals
  var domfocus = false;
  var mousefocus = false;
  var zoomactive = false;
  var tabindexcounter = 5000;
  var ascrailcounter = 2000;
  var globalmaxzindex = 0;
  
  var $ = jQuery;  // sandbox
 
  // http://stackoverflow.com/questions/2161159/get-script-path
  function getScriptPath() {
    var scripts=document.getElementsByTagName('script');
    var path=scripts[scripts.length-1].src.split('?')[0];
    return (path.split('/').length>0) ? path.split('/').slice(0,-1).join('/')+'/' : '';
  }
  var scriptpath = getScriptPath();
  
  var vendors = ['ms','moz','webkit','o'];
  
  var setAnimationFrame = window.requestAnimationFrame||false;
  var clearAnimationFrame = window.cancelAnimationFrame||false;

  if (!setAnimationFrame) {
    for(var vx in vendors) {
      var v = vendors[vx];
      if (!setAnimationFrame) setAnimationFrame = window[v+'RequestAnimationFrame'];
      if (!clearAnimationFrame) clearAnimationFrame = window[v+'CancelAnimationFrame']||window[v+'CancelRequestAnimationFrame'];
    }
  }
  
  var clsMutationObserver = window.MutationObserver || window.WebKitMutationObserver || false;
  
  var _globaloptions = {
      zindex:"auto",
      cursoropacitymin:0,
      cursoropacitymax:1,
      cursorcolor:"#424242",
      cursorwidth:"5px",
      cursorborder:"1px solid #fff",
      cursorborderradius:"5px",
      scrollspeed:60,
      mousescrollstep:8*3,
      touchbehavior:false,
      hwacceleration:true,
      usetransition:true,
      boxzoom:false,
      dblclickzoom:true,
      gesturezoom:true,
      grabcursorenabled:true,
      autohidemode:true,
      background:"",
      iframeautoresize:true,
      cursorminheight:32,
      preservenativescrolling:true,
      railoffset:false,
      bouncescroll:true,
      spacebarenabled:true,
      railpadding:{top:0,right:0,left:0,bottom:0},
      disableoutline:true,
      horizrailenabled:true,
      railalign:"right",
      railvalign:"bottom",
      enabletranslate3d:true,
      enablemousewheel:true,
      enablekeyboard:true,
      smoothscroll:true,
      sensitiverail:true,
      enablemouselockapi:true,
//      cursormaxheight:false,
      cursorfixedheight:false,      
      directionlockdeadzone:6,
      hidecursordelay:400,
      nativeparentscrolling:true,
      enablescrollonselection:true,
      overflowx:true,
      overflowy:true,
      cursordragspeed:0.3,
      rtlmode:false,
      cursordragontouch:false,
      oneaxismousemode:"auto"
  }
  
  var browserdetected = false;
  
  var getBrowserDetection = function() {
  
    if (browserdetected) return browserdetected;
  
    var domtest = document.createElement('DIV');

    var d = {};
    
		d.haspointerlock = "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document;
		
    d.isopera = ("opera" in window);
    d.isopera12 = (d.isopera&&("getUserMedia" in navigator));
    d.isoperamini = (Object.prototype.toString.call(window.operamini) === "[object OperaMini]");
    
    d.isie = (("all" in document) && ("attachEvent" in domtest) && !d.isopera);
    d.isieold = (d.isie && !("msInterpolationMode" in domtest.style));  // IE6 and older
    d.isie7 = d.isie&&!d.isieold&&(!("documentMode" in document)||(document.documentMode==7));
    d.isie8 = d.isie&&("documentMode" in document)&&(document.documentMode==8);
    d.isie9 = d.isie&&("performance" in window)&&(document.documentMode>=9);
    d.isie10 = d.isie&&("performance" in window)&&(document.documentMode>=10);
    
    d.isie9mobile = /iemobile.9/i.test(navigator.userAgent);  //wp 7.1 mango
    if (d.isie9mobile) d.isie9 = false;
    d.isie7mobile = (!d.isie9mobile&&d.isie7) && /iemobile/i.test(navigator.userAgent);  //wp 7.0
    
    d.ismozilla = ("MozAppearance" in domtest.style);
		
    d.iswebkit = ("WebkitAppearance" in domtest.style);
    
    d.ischrome = ("chrome" in window);
		d.ischrome22 = (d.ischrome&&d.haspointerlock);
    d.ischrome26 = (d.ischrome&&("transition" in domtest.style));  // issue with transform detection (maintain prefix)
    
    d.cantouch = ("ontouchstart" in document.documentElement)||("ontouchstart" in window);  // detection for Chrome Touch Emulation
    d.hasmstouch = (window.navigator.msPointerEnabled||false);  // IE10+ pointer events
		
    d.ismac = /^mac$/i.test(navigator.platform);
    
    d.isios = (d.cantouch && /iphone|ipad|ipod/i.test(navigator.platform));
    d.isios4 = ((d.isios)&&!("seal" in Object));
    
    d.isandroid = (/android/i.test(navigator.userAgent));
    
    d.trstyle = false;
    d.hastransform = false;
    d.hastranslate3d = false;
    d.transitionstyle = false;
    d.hastransition = false;
    d.transitionend = false;
    
    var check = ['transform','msTransform','webkitTransform','MozTransform','OTransform'];
    for(var a=0;a<check.length;a++){
      if (typeof domtest.style[check[a]] != "undefined") {
        d.trstyle = check[a];
        break;
      }
    }
    d.hastransform = (d.trstyle != false);
    if (d.hastransform) {
      domtest.style[d.trstyle] = "translate3d(1px,2px,3px)";
      d.hastranslate3d = /translate3d/.test(domtest.style[d.trstyle]);
    }
    
    d.transitionstyle = false;
    d.prefixstyle = '';
    d.transitionend = false;
    var check = ['transition','webkitTransition','MozTransition','OTransition','OTransition','msTransition','KhtmlTransition'];
    var prefix = ['','-webkit-','-moz-','-o-','-o','-ms-','-khtml-'];
    var evs = ['transitionend','webkitTransitionEnd','transitionend','otransitionend','oTransitionEnd','msTransitionEnd','KhtmlTransitionEnd'];
    for(var a=0;a<check.length;a++) {
      if (check[a] in domtest.style) {
        d.transitionstyle = check[a];
        d.prefixstyle = prefix[a];
        d.transitionend = evs[a];
        break;
      }
    }
    if (d.ischrome26) {  // use always prefix
      d.prefixstyle = prefix[1];
    }
    
    d.hastransition = (d.transitionstyle);
    
    function detectCursorGrab() {      
      var lst = ['-moz-grab','-webkit-grab','grab'];
      if ((d.ischrome&&!d.ischrome22)||d.isie) lst=[];  // force setting for IE returns false positive and chrome cursor bug
      for(var a=0;a<lst.length;a++) {
        var p = lst[a];
        domtest.style['cursor']=p;
        if (domtest.style['cursor']==p) return p;
      }
      return 'url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize';  // thank you google for custom cursor!
    }
    d.cursorgrabvalue = detectCursorGrab();

    d.hasmousecapture = ("setCapture" in domtest);
    
    d.hasMutationObserver = (clsMutationObserver !== false);
    
    domtest = null;  //memory released

    browserdetected = d;
    
    return d;  
  }
  
  var NiceScrollClass = function(myopt,me) {

    var self = this;

    this.version = '3.5.0 BETA5';
    this.name = 'nicescroll';
    
    this.me = me;
    
    this.opt = {
      doc:$("body"),
      win:false
    };
    
    $.extend(this.opt,_globaloptions);
    
// Options for internal use
    this.opt.snapbackspeed = 80;
    
    if (myopt||false) {
      for(var a in self.opt) {
        if (typeof myopt[a] != "undefined") self.opt[a] = myopt[a];
      }
    }
    
    this.doc = self.opt.doc;
    this.iddoc = (this.doc&&this.doc[0])?this.doc[0].id||'':'';    
    this.ispage = /BODY|HTML/.test((self.opt.win)?self.opt.win[0].nodeName:this.doc[0].nodeName);
    this.haswrapper = (self.opt.win!==false);
    this.win = self.opt.win||(this.ispage?$(window):this.doc);
    this.docscroll = (this.ispage&&!this.haswrapper)?$(window):this.win;
    this.body = $("body");
    this.viewport = false;
    
    this.isfixed = false;
    
    this.iframe = false;
    this.isiframe = ((this.doc[0].nodeName == 'IFRAME') && (this.win[0].nodeName == 'IFRAME'));
    
    this.istextarea = (this.win[0].nodeName == 'TEXTAREA');
    
    this.forcescreen = false; //force to use screen position on events

    this.canshowonmouseevent = (self.opt.autohidemode!="scroll");
    
// Events jump table    
    this.onmousedown = false;
    this.onmouseup = false;
    this.onmousemove = false;
    this.onmousewheel = false;
    this.onkeypress = false;
    this.ongesturezoom = false;
    this.onclick = false;
    
// Nicescroll custom events
    this.onscrollstart = false;
    this.onscrollend = false;
    this.onscrollcancel = false;    
    
    this.onzoomin = false;
    this.onzoomout = false;
    
// Let's start!  
    this.view = false;
    this.page = false;
    
    this.scroll = {x:0,y:0};
    this.scrollratio = {x:0,y:0};    
    this.cursorheight = 20;
    this.scrollvaluemax = 0;
    
    this.checkrtlmode = false;
    
    this.scrollrunning = false;
    
    this.scrollmom = false;
    
    this.observer = false;
    this.observerremover = false;  // observer on parent for remove detection
    
    do {
      this.id = "ascrail"+(ascrailcounter++);
    } while (document.getElementById(this.id));
    
    this.rail = false;
    this.cursor = false;
    this.cursorfreezed = false;  
    this.selectiondrag = false;
    
    this.zoom = false;
    this.zoomactive = false;
    
    this.hasfocus = false;
    this.hasmousefocus = false;
    
    this.visibility = true;
    this.locked = false;
    this.hidden = false; // rails always hidden
    this.cursoractive = true; // user can interact with cursors
    
    this.overflowx = self.opt.overflowx;
    this.overflowy = self.opt.overflowy;
    
    this.nativescrollingarea = false;
    this.checkarea = 0;
    
    this.events = [];  // event list for unbind
    
    this.saved = {};
    
    this.delaylist = {};
    this.synclist = {};
    
    this.lastdeltax = 0;
    this.lastdeltay = 0;
    
    this.detected = getBrowserDetection(); 
    
    var cap = $.extend({},this.detected);
 
    this.canhwscroll = (cap.hastransform&&self.opt.hwacceleration);
    this.ishwscroll = (this.canhwscroll&&self.haswrapper);
    
    this.istouchcapable = false;  // desktop devices with touch screen support
    
//## Check Chrome desktop with touch support
    if (cap.cantouch&&cap.ischrome&&!cap.isios&&!cap.isandroid) {
      this.istouchcapable = true;
      cap.cantouch = false;  // parse normal desktop events
    }    

//## Firefox 18 nightly build (desktop) false positive (or desktop with touch support)
    if (cap.cantouch&&cap.ismozilla&&!cap.isios&&!cap.isandroid) {
      this.istouchcapable = true;
      cap.cantouch = false;  // parse normal desktop events
    }    
    
//## disable MouseLock API on user request

    if (!self.opt.enablemouselockapi) {
      cap.hasmousecapture = false;
      cap.haspointerlock = false;
    }
    
    this.delayed = function(name,fn,tm,lazy) {
      var dd = self.delaylist[name];
      var nw = (new Date()).getTime();
      if (!lazy&&dd&&dd.tt) return false;
      if (dd&&dd.tt) clearTimeout(dd.tt);
      if (dd&&dd.last+tm>nw&&!dd.tt) {      
        self.delaylist[name] = {
          last:nw+tm,
          tt:setTimeout(function(){self.delaylist[name].tt=0;fn.call();},tm)
        }
      }
      else if (!dd||!dd.tt) {
        self.delaylist[name] = {
          last:nw,
          tt:0
        }
        setTimeout(function(){fn.call();},0);
      }
    };
    
    this.debounced = function(name,fn,tm) {
      var dd = self.delaylist[name];
      var nw = (new Date()).getTime();      
      self.delaylist[name] = fn;
      if (!dd) {        
        setTimeout(function(){var fn=self.delaylist[name];self.delaylist[name]=false;fn.call();},tm);
      }
    }
    
    this.synched = function(name,fn) {
    
      function requestSync() {
        if (self.onsync) return;
        setAnimationFrame(function(){
          self.onsync = false;
          for(name in self.synclist){
            var fn = self.synclist[name];
            if (fn) fn.call(self);
            self.synclist[name] = false;
          }
        });
        self.onsync = true;
      };    
    
      self.synclist[name] = fn;
      requestSync();
      return name;
    };
    
    this.unsynched = function(name) {
      if (self.synclist[name]) self.synclist[name] = false;
    }
    
    this.css = function(el,pars) {  // save & set
      for(var n in pars) {
        self.saved.css.push([el,n,el.css(n)]);
        el.css(n,pars[n]);
      }
    };
    
    this.scrollTop = function(val) {
      return (typeof val == "undefined") ? self.getScrollTop() : self.setScrollTop(val);
    };

    this.scrollLeft = function(val) {
      return (typeof val == "undefined") ? self.getScrollLeft() : self.setScrollLeft(val);
    };
    
// derived by by Dan Pupius www.pupius.net
    BezierClass = function(st,ed,spd,p1,p2,p3,p4) {
      this.st = st;
      this.ed = ed;
      this.spd = spd;
      
      this.p1 = p1||0;
      this.p2 = p2||1;
      this.p3 = p3||0;
      this.p4 = p4||1;
      
      this.ts = (new Date()).getTime();
      this.df = this.ed-this.st;
    };
    BezierClass.prototype = {
      B2:function(t){ return 3*t*t*(1-t) },
      B3:function(t){ return 3*t*(1-t)*(1-t) },
      B4:function(t){ return (1-t)*(1-t)*(1-t) },
      getNow:function(){
        var nw = (new Date()).getTime();
        var pc = 1-((nw-this.ts)/this.spd);
        var bz = this.B2(pc) + this.B3(pc) + this.B4(pc);
        return (pc<0) ? this.ed : this.st+Math.round(this.df*bz);
      },
      update:function(ed,spd){
        this.st = this.getNow();
        this.ed = ed;
        this.spd = spd;
        this.ts = (new Date()).getTime();
        this.df = this.ed-this.st;
        return this;
      }
    };
    
    if (this.ishwscroll) {  
    // hw accelerated scroll
      this.doc.translate = {x:0,y:0,tx:"0px",ty:"0px"};
      
      //this one can help to enable hw accel on ios6 http://indiegamr.com/ios6-html-hardware-acceleration-changes-and-how-to-fix-them/
      if (cap.hastranslate3d&&cap.isios) this.doc.css("-webkit-backface-visibility","hidden");  // prevent flickering http://stackoverflow.com/questions/3461441/      
      
      //derived from http://stackoverflow.com/questions/11236090/
      function getMatrixValues() {
        var tr = self.doc.css(cap.trstyle);
        if (tr&&(tr.substr(0,6)=="matrix")) {
          return tr.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g,'').split(/, +/);
        }
        return false;
      }
      
      this.getScrollTop = function(last) {
        if (!last) {
          var mtx = getMatrixValues();
          if (mtx) return (mtx.length==16) ? -mtx[13] : -mtx[5];  //matrix3d 16 on IE10
          if (self.timerscroll&&self.timerscroll.bz) return self.timerscroll.bz.getNow();
        }
        return self.doc.translate.y;
      };

      this.getScrollLeft = function(last) {
        if (!last) {
          var mtx = getMatrixValues();          
          if (mtx) return (mtx.length==16) ? -mtx[12] : -mtx[4];  //matrix3d 16 on IE10
          if (self.timerscroll&&self.timerscroll.bh) return self.timerscroll.bh.getNow();
        }
        return self.doc.translate.x;
      };
      
      if (document.createEvent) {
        this.notifyScrollEvent = function(el) {
          var e = document.createEvent("UIEvents");
          e.initUIEvent("scroll", false, true, window, 1);
          el.dispatchEvent(e);
        };
      }
      else if (document.fireEvent) {
        this.notifyScrollEvent = function(el) {
          var e = document.createEventObject();
          el.fireEvent("onscroll");
          e.cancelBubble = true; 
        };
      }
      else {
        this.notifyScrollEvent = function(el,add) {}; //NOPE
      }
      
      if (cap.hastranslate3d&&self.opt.enabletranslate3d) {
        this.setScrollTop = function(val,silent) {
          self.doc.translate.y = val;
          self.doc.translate.ty = (val*-1)+"px";
          self.doc.css(cap.trstyle,"translate3d("+self.doc.translate.tx+","+self.doc.translate.ty+",0px)");          
          if (!silent) self.notifyScrollEvent(self.win[0]);
        };
        this.setScrollLeft = function(val,silent) {          
          self.doc.translate.x = val;
          self.doc.translate.tx = (val*-1)+"px";
          self.doc.css(cap.trstyle,"translate3d("+self.doc.translate.tx+","+self.doc.translate.ty+",0px)");          
          if (!silent) self.notifyScrollEvent(self.win[0]);
        };
      } else {
        this.setScrollTop = function(val,silent) {
          self.doc.translate.y = val;
          self.doc.translate.ty = (val*-1)+"px";
          self.doc.css(cap.trstyle,"translate("+self.doc.translate.tx+","+self.doc.translate.ty+")");
          if (!silent) self.notifyScrollEvent(self.win[0]);          
        };
        this.setScrollLeft = function(val,silent) {        
          self.doc.translate.x = val;
          self.doc.translate.tx = (val*-1)+"px";
          self.doc.css(cap.trstyle,"translate("+self.doc.translate.tx+","+self.doc.translate.ty+")");
          if (!silent) self.notifyScrollEvent(self.win[0]);
        };
      }
    } else {
    // native scroll
      this.getScrollTop = function() {
        return self.docscroll.scrollTop();
      };
      this.setScrollTop = function(val) {        
        return self.docscroll.scrollTop(val);
      };
      this.getScrollLeft = function() {
        return self.docscroll.scrollLeft();
      };
      this.setScrollLeft = function(val) {
        return self.docscroll.scrollLeft(val);
      };
    }
    
    this.getTarget = function(e) {
      if (!e) return false;
      if (e.target) return e.target;
      if (e.srcElement) return e.srcElement;
      return false;
    };
    
    this.hasParent = function(e,id) {
      if (!e) return false;
      var el = e.target||e.srcElement||e||false;
      while (el && el.id != id) {
        el = el.parentNode||false;
      }
      return (el!==false);
    };
    
    function getZIndex() {
      var dom = self.win;
      if ("zIndex" in dom) return dom.zIndex();  // use jQuery UI method when available
      while (dom.length>0) {        
        if (dom[0].nodeType==9) return false;
        var zi = dom.css('zIndex');        
        if (!isNaN(zi)&&zi!=0) return parseInt(zi);
        dom = dom.parent();
      }
      return false;
    };
    
//inspired by http://forum.jquery.com/topic/width-includes-border-width-when-set-to-thin-medium-thick-in-ie
    var _convertBorderWidth = {"thin":1,"medium":3,"thick":5};
    function getWidthToPixel(dom,prop,chkheight) {
      var wd = dom.css(prop);
      var px = parseFloat(wd);
      if (isNaN(px)) {
        px = _convertBorderWidth[wd]||0;
        var brd = (px==3) ? ((chkheight)?(self.win.outerHeight() - self.win.innerHeight()):(self.win.outerWidth() - self.win.innerWidth())) : 1; //DON'T TRUST CSS
        if (self.isie8&&px) px+=1;
        return (brd) ? px : 0; 
      }
      return px;
    };
    
    this.getOffset = function() {
      if (self.isfixed) return {top:parseFloat(self.win.css('top')),left:parseFloat(self.win.css('left'))};
      if (!self.viewport) return self.win.offset();
      var ww = self.win.offset();
      var vp = self.viewport.offset();
      return {top:ww.top-vp.top+self.viewport.scrollTop(),left:ww.left-vp.left+self.viewport.scrollLeft()};
    };
    
    this.updateScrollBar = function(len) {
      if (self.ishwscroll) {
        self.rail.css({height:self.win.innerHeight()});
        if (self.railh) self.railh.css({width:self.win.innerWidth()});
      } else {
        var wpos = self.getOffset();
        var pos = {top:wpos.top,left:wpos.left};
        pos.top+= getWidthToPixel(self.win,'border-top-width',true);
        var brd = (self.win.outerWidth() - self.win.innerWidth())/2;
        pos.left+= (self.rail.align) ? self.win.outerWidth() - getWidthToPixel(self.win,'border-right-width') - self.rail.width : getWidthToPixel(self.win,'border-left-width');
        
        var off = self.opt.railoffset;
        if (off) {
          if (off.top) pos.top+=off.top;
          if (self.rail.align&&off.left) pos.left+=off.left;
        }
        
				if (!self.locked) self.rail.css({top:pos.top,left:pos.left,height:(len)?len.h:self.win.innerHeight()});
				
				if (self.zoom) {				  
				  self.zoom.css({top:pos.top+1,left:(self.rail.align==1) ? pos.left-20 : pos.left+self.rail.width+4});
			  }
				
				if (self.railh&&!self.locked) {
					var pos = {top:wpos.top,left:wpos.left};
					var y = (self.railh.align) ? pos.top + getWidthToPixel(self.win,'border-top-width',true) + self.win.innerHeight() - self.railh.height : pos.top + getWidthToPixel(self.win,'border-top-width',true);
					var x = pos.left + getWidthToPixel(self.win,'border-left-width');
					self.railh.css({top:y,left:x,width:self.railh.width});
				}
		
				
      }
    };
    
    this.doRailClick = function(e,dbl,hr) {

      var fn,pg,cur,pos;
      
//      if (self.rail.drag&&self.rail.drag.pt!=1) return;
      if (self.locked) return;
//      if (self.rail.drag) return;

//      self.cancelScroll();       
      
      self.cancelEvent(e);
      
      if (dbl) {
        fn = (hr) ? self.doScrollLeft : self.doScrollTop;
        cur = (hr) ? ((e.pageX - self.railh.offset().left - (self.cursorwidth/2)) * self.scrollratio.x) : ((e.pageY - self.rail.offset().top - (self.cursorheight/2)) * self.scrollratio.y);
        fn(cur);
      } else {
//        console.log(e.pageY);
        fn = (hr) ? self.doScrollLeftBy : self.doScrollBy;
        cur = (hr) ? self.scroll.x : self.scroll.y;
        pos = (hr) ? e.pageX - self.railh.offset().left : e.pageY - self.rail.offset().top;
        pg = (hr) ? self.view.w : self.view.h;        
        (cur>=pos) ? fn(pg) : fn(-pg);
      }
    
    }
    
    self.hasanimationframe = (setAnimationFrame);
    self.hascancelanimationframe = (clearAnimationFrame);
    
    if (!self.hasanimationframe) {
      setAnimationFrame=function(fn){return setTimeout(fn,15-Math.floor((+new Date)/1000)%16)}; // 1000/60)};
      clearAnimationFrame=clearInterval;
    } 
    else if (!self.hascancelanimationframe) clearAnimationFrame=function(){self.cancelAnimationFrame=true};
    
    this.init = function() {

      self.saved.css = [];
      
      if (cap.isie7mobile) return true; // SORRY, DO NOT WORK!
      if (cap.isoperamini) return true; // SORRY, DO NOT WORK!
      
      if (cap.hasmstouch) self.css((self.ispage)?$("html"):self.win,{'-ms-touch-action':'none'});
      
      self.zindex = "auto";
      if (!self.ispage&&self.opt.zindex=="auto") {
        self.zindex = getZIndex()||"auto";
      } else {
        self.zindex = self.opt.zindex;
      }
      
      if (!self.ispage&&self.zindex!="auto") {
        if (self.zindex>globalmaxzindex) globalmaxzindex=self.zindex;
      }
      
      if (self.isie&&self.zindex==0&&self.opt.zindex=="auto") {  // fix IE auto == 0
        self.zindex="auto";
      }
      
/*      
      self.ispage = true;
      self.haswrapper = true;
//      self.win = $(window);
      self.docscroll = $("body");
//      self.doc = $("body");
*/
      
      if (!self.ispage || (!cap.cantouch && !cap.isieold && !cap.isie9mobile)) {
      
        var cont = self.docscroll;
        if (self.ispage) cont = (self.haswrapper)?self.win:self.doc;
        
        if (!cap.isie9mobile) self.css(cont,{'overflow-y':'hidden'});      
        
        if (self.ispage&&cap.isie7) {
          if (self.doc[0].nodeName=='BODY') self.css($("html"),{'overflow-y':'hidden'});  //IE7 double scrollbar issue
          else if (self.doc[0].nodeName=='HTML') self.css($("body"),{'overflow-y':'hidden'});  //IE7 double scrollbar issue
        }
        
        if (cap.isios&&!self.ispage&&!self.haswrapper) self.css($("body"),{"-webkit-overflow-scrolling":"touch"});  //force hw acceleration
        
        var cursor = $(document.createElement('div'));
        cursor.css({
          position:"relative",top:0,"float":"right",width:self.opt.cursorwidth,height:"0px",
          'background-color':self.opt.cursorcolor,
          border:self.opt.cursorborder,
          'background-clip':'padding-box',
          '-webkit-border-radius':self.opt.cursorborderradius,
          '-moz-border-radius':self.opt.cursorborderradius,
          'border-radius':self.opt.cursorborderradius
        });   
        
        cursor.hborder = parseFloat(cursor.outerHeight() - cursor.innerHeight());        
        self.cursor = cursor;        
        
        var rail = $(document.createElement('div'));
        rail.attr('id',self.id);
        rail.addClass('nicescroll-rails');
        
        var v,a,kp = ["left","right"];  //"top","bottom"
        for(var n in kp) {
          a=kp[n];
          v = self.opt.railpadding[a];
          (v) ? rail.css("padding-"+a,v+"px") : self.opt.railpadding[a] = 0;
        }
        
        rail.append(cursor);
        
        rail.width = Math.max(parseFloat(self.opt.cursorwidth),cursor.outerWidth()) + self.opt.railpadding['left'] + self.opt.railpadding['right'];
        rail.css({width:rail.width+"px",'zIndex':self.zindex,"background":self.opt.background,cursor:"default"});        
        
        rail.visibility = true;
        rail.scrollable = true;
        
        rail.align = (self.opt.railalign=="left") ? 0 : 1;
        
        self.rail = rail;
        
        self.rail.drag = false;
        
        var zoom = false;
        if (self.opt.boxzoom&&!self.ispage&&!cap.isieold) {
          zoom = document.createElement('div');          
          self.bind(zoom,"click",self.doZoom);
          self.zoom = $(zoom);
          self.zoom.css({"cursor":"pointer",'z-index':self.zindex,'backgroundImage':'url('+scriptpath+'zoomico.png)','height':18,'width':18,'backgroundPosition':'0px 0px'});
          if (self.opt.dblclickzoom) self.bind(self.win,"dblclick",self.doZoom);
          if (cap.cantouch&&self.opt.gesturezoom) {
            self.ongesturezoom = function(e) {
              if (e.scale>1.5) self.doZoomIn(e);
              if (e.scale<0.8) self.doZoomOut(e);
              return self.cancelEvent(e);
            };
            self.bind(self.win,"gestureend",self.ongesturezoom);             
          }
        }
        
// init HORIZ

        self.railh = false;

        if (self.opt.horizrailenabled) {

          self.css(cont,{'overflow-x':'hidden'});

          var cursor = $(document.createElement('div'));
          cursor.css({
            position:"relative",top:0,height:self.opt.cursorwidth,width:"0px",
            'background-color':self.opt.cursorcolor,
            border:self.opt.cursorborder,
            'background-clip':'padding-box',
            '-webkit-border-radius':self.opt.cursorborderradius,
            '-moz-border-radius':self.opt.cursorborderradius,
            'border-radius':self.opt.cursorborderradius
          });   
          
          cursor.wborder = parseFloat(cursor.outerWidth() - cursor.innerWidth());
          self.cursorh = cursor;
          
          var railh = $(document.createElement('div'));
          railh.attr('id',self.id+'-hr');
          railh.addClass('nicescroll-rails');
          railh.height = Math.max(parseFloat(self.opt.cursorwidth),cursor.outerHeight());
          railh.css({height:railh.height+"px",'zIndex':self.zindex,"background":self.opt.background});
          
          railh.append(cursor);
          
          railh.visibility = true;
          railh.scrollable = true;
          
          railh.align = (self.opt.railvalign=="top") ? 0 : 1;
          
          self.railh = railh;
          
          self.railh.drag = false;
          
        }
        
//        
        
        if (self.ispage) {
          rail.css({position:"fixed",top:"0px",height:"100%"});
          (rail.align) ? rail.css({right:"0px"}) : rail.css({left:"0px"});
          self.body.append(rail);
          if (self.railh) {
            railh.css({position:"fixed",left:"0px",width:"100%"});
            (railh.align) ? railh.css({bottom:"0px"}) : railh.css({top:"0px"});
            self.body.append(railh);
          }
        } else {          
          if (self.ishwscroll) {
            if (self.win.css('position')=='static') self.css(self.win,{'position':'relative'});
            var bd = (self.win[0].nodeName == 'HTML') ? self.body : self.win;
            if (self.zoom) {
              self.zoom.css({position:"absolute",top:1,right:0,"margin-right":rail.width+4});
              bd.append(self.zoom);
            }
            rail.css({position:"absolute",top:0});
            (rail.align) ? rail.css({right:0}) : rail.css({left:0});
            bd.append(rail);
            if (railh) {
              railh.css({position:"absolute",left:0,bottom:0});
              (railh.align) ? railh.css({bottom:0}) : railh.css({top:0});
              bd.append(railh);
            }
          } else {
            self.isfixed = (self.win.css("position")=="fixed");
            var rlpos = (self.isfixed) ? "fixed" : "absolute";
            
            if (!self.isfixed) self.viewport = self.getViewport(self.win[0]);
            if (self.viewport) {
              self.body = self.viewport;              
              if ((/relative|absolute/.test(self.viewport.css("position")))==false) self.css(self.viewport,{"position":"relative"});
            }            
            
            rail.css({position:rlpos});
            if (self.zoom) self.zoom.css({position:rlpos});
            self.updateScrollBar();
            self.body.append(rail);
            if (self.zoom) self.body.append(self.zoom);
            if (self.railh) {
              railh.css({position:rlpos});
              self.body.append(railh);           
            }
          }
          
          if (cap.isios) self.css(self.win,{'-webkit-tap-highlight-color':'rgba(0,0,0,0)','-webkit-touch-callout':'none'});  // prevent grey layer on click
          
					if (cap.isie&&self.opt.disableoutline) self.win.attr("hideFocus","true");  // IE, prevent dotted rectangle on focused div
					if (cap.iswebkit&&self.opt.disableoutline) self.win.css({"outline":"none"});
//          if (cap.isopera&&self.opt.disableoutline) self.win.css({"outline":"0"});  // Opera to test [TODO]
          
        }
        
        if (self.opt.autohidemode===false) {
          self.autohidedom = false;
          self.rail.css({opacity:self.opt.cursoropacitymax});          
          if (self.railh) self.railh.css({opacity:self.opt.cursoropacitymax});
        }
        else if (self.opt.autohidemode===true) {
          self.autohidedom = $().add(self.rail);          
          if (cap.isie8) self.autohidedom=self.autohidedom.add(self.cursor);
          if (self.railh) self.autohidedom=self.autohidedom.add(self.railh);
          if (self.railh&&cap.isie8) self.autohidedom=self.autohidedom.add(self.cursorh);
        }
        else if (self.opt.autohidemode=="scroll") {
          self.autohidedom = $().add(self.rail);
          if (self.railh) self.autohidedom=self.autohidedom.add(self.railh);
        }
        else if (self.opt.autohidemode=="cursor") {
          self.autohidedom = $().add(self.cursor);
          if (self.railh) self.autohidedom=self.autohidedom.add(self.cursorh);
        }
        else if (self.opt.autohidemode=="hidden") {
          self.autohidedom = false;
          self.hide();
          self.locked = false;
        }
        
        if (cap.isie9mobile) {

          self.scrollmom = new ScrollMomentumClass2D(self);        

          /*
          var trace = function(msg) {
            var db = $("#debug");
            if (isNaN(msg)&&(typeof msg != "string")) {
              var x = [];
              for(var a in msg) {
                x.push(a+":"+msg[a]);
              }
              msg ="{"+x.join(",")+"}";
            }
            if (db.children().length>0) {
              db.children().eq(0).before("<div>"+msg+"</div>");
            } else {
              db.append("<div>"+msg+"</div>");
            }
          }
          window.onerror = function(msg,url,ln) {
            trace("ERR: "+msg+" at "+ln);
          }
*/          
  
          self.onmangotouch = function(e) {
            var py = self.getScrollTop();
            var px = self.getScrollLeft();
            
            if ((py == self.scrollmom.lastscrolly)&&(px == self.scrollmom.lastscrollx)) return true;
//            $("#debug").html('DRAG:'+py);

            var dfy = py-self.mangotouch.sy;
            var dfx = px-self.mangotouch.sx;            
            var df = Math.round(Math.sqrt(Math.pow(dfx,2)+Math.pow(dfy,2)));            
            if (df==0) return;
            
            var dry = (dfy<0)?-1:1;
            var drx = (dfx<0)?-1:1;
            
            var tm = +new Date();
            if (self.mangotouch.lazy) clearTimeout(self.mangotouch.lazy);
            
            if (((tm-self.mangotouch.tm)>80)||(self.mangotouch.dry!=dry)||(self.mangotouch.drx!=drx)) {
//              trace('RESET+'+(tm-self.mangotouch.tm));
              self.scrollmom.stop();
              self.scrollmom.reset(px,py);
              self.mangotouch.sy = py;
              self.mangotouch.ly = py;
              self.mangotouch.sx = px;
              self.mangotouch.lx = px;
              self.mangotouch.dry = dry;
              self.mangotouch.drx = drx;
              self.mangotouch.tm = tm;
            } else {
              
              self.scrollmom.stop();
              self.scrollmom.update(self.mangotouch.sx-dfx,self.mangotouch.sy-dfy);
              var gap = tm - self.mangotouch.tm;              
              self.mangotouch.tm = tm;
              
//              trace('MOVE:'+df+" - "+gap);
              
              var ds = Math.max(Math.abs(self.mangotouch.ly-py),Math.abs(self.mangotouch.lx-px));
              self.mangotouch.ly = py;
              self.mangotouch.lx = px;
              
              if (ds>2) {
                self.mangotouch.lazy = setTimeout(function(){
//                  trace('END:'+ds+'+'+gap);                  
                  self.mangotouch.lazy = false;
                  self.mangotouch.dry = 0;
                  self.mangotouch.drx = 0;
                  self.mangotouch.tm = 0;                  
                  self.scrollmom.doMomentum(30);
                },100);
              }
            }
          }
          
          var top = self.getScrollTop();
          var lef = self.getScrollLeft();
          self.mangotouch = {sy:top,ly:top,dry:0,sx:lef,lx:lef,drx:0,lazy:false,tm:0};
          
          self.bind(self.docscroll,"scroll",self.onmangotouch);
        
        } else {
        
          if (cap.cantouch||self.istouchcapable||self.opt.touchbehavior||cap.hasmstouch) {
          
            self.scrollmom = new ScrollMomentumClass2D(self);
          
            self.ontouchstart = function(e) {
              if (e.pointerType&&e.pointerType!=2) return false;
              
              if (!self.locked) {
              
                if (cap.hasmstouch) {
                  var tg = (e.target) ? e.target : false;
                  while (tg) {
                    var nc = $(tg).getNiceScroll();
                    if ((nc.length>0)&&(nc[0].me == self.me)) break;
                    if (nc.length>0) return false;
                    if ((tg.nodeName=='DIV')&&(tg.id==self.id)) break;
                    tg = (tg.parentNode) ? tg.parentNode : false;
                  }
                }
              
                self.cancelScroll();
                
                var tg = self.getTarget(e);
                
                if (tg) {
                  var skp = (/INPUT/i.test(tg.nodeName))&&(/range/i.test(tg.type));
                  if (skp) return self.stopPropagation(e);
                }
                
                if (!("clientX" in e) && ("changedTouches" in e)) {
                  e.clientX = e.changedTouches[0].clientX;
                  e.clientY = e.changedTouches[0].clientY;
                }
                
                if (self.forcescreen) {
                  var le = e;
                  var e = {"original":(e.original)?e.original:e};
                  e.clientX = le.screenX;
                  e.clientY = le.screenY;    
                }
                
                self.rail.drag = {x:e.clientX,y:e.clientY,sx:self.scroll.x,sy:self.scroll.y,st:self.getScrollTop(),sl:self.getScrollLeft(),pt:2,dl:false};
                
                if (self.ispage||!self.opt.directionlockdeadzone) {
                  self.rail.drag.dl = "f";
                } else {
                
                  var view = {
                    w:$(window).width(),
                    h:$(window).height()
                  };
                  
                  var page = {
                    w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),
                    h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)
                  }
                  
                  var maxh = Math.max(0,page.h - view.h);
                  var maxw = Math.max(0,page.w - view.w);                
                
                  if (!self.rail.scrollable&&self.railh.scrollable) self.rail.drag.ck = (maxh>0) ? "v" : false;
                  else if (self.rail.scrollable&&!self.railh.scrollable) self.rail.drag.ck = (maxw>0) ? "h" : false;
                  else self.rail.drag.ck = false;
                  if (!self.rail.drag.ck) self.rail.drag.dl = "f";
                }
                
                if (self.opt.touchbehavior&&self.isiframe&&cap.isie) {
                  var wp = self.win.position();
                  self.rail.drag.x+=wp.left;
                  self.rail.drag.y+=wp.top;
                }
                
                self.hasmoving = false;
                self.lastmouseup = false;
                self.scrollmom.reset(e.clientX,e.clientY);
                if (!cap.cantouch&&!this.istouchcapable&&!cap.hasmstouch) {
                  
                  var ip = (tg)?/INPUT|SELECT|TEXTAREA/i.test(tg.nodeName):false;
                  if (!ip) {
                    if (!self.ispage&&cap.hasmousecapture) tg.setCapture();                   
//                  return self.cancelEvent(e);
                    return (self.opt.touchbehavior) ? self.cancelEvent(e) : self.stopPropagation(e);
                  }
                  if (/SUBMIT|CANCEL|BUTTON/i.test($(tg).attr('type'))) {
                    pc = {"tg":tg,"click":false};
                    self.preventclick = pc;
                  }
                  
                }
              }
              
            };
            
            self.ontouchend = function(e) {
              if (e.pointerType&&e.pointerType!=2) return false;
              if (self.rail.drag&&(self.rail.drag.pt==2)) {
                self.scrollmom.doMomentum();
                self.rail.drag = false;
                if (self.hasmoving) {
                  self.hasmoving = false;
                  self.lastmouseup = true;
                  self.hideCursor();
                  if (cap.hasmousecapture) document.releaseCapture();
                  if (!cap.cantouch) return self.cancelEvent(e);
                }                            
              }                        
              
            };
            
            var moveneedoffset = (self.opt.touchbehavior&&self.isiframe&&!cap.hasmousecapture);
            
            self.ontouchmove = function(e,byiframe) {
              
              if (e.pointerType&&e.pointerType!=2) return false;
    
              if (self.rail.drag&&(self.rail.drag.pt==2)) {
                if (cap.cantouch&&(typeof e.original == "undefined")) return true;  // prevent ios "ghost" events by clickable elements
              
                self.hasmoving = true;

                if (self.preventclick&&!self.preventclick.click) {
                  self.preventclick.click = self.preventclick.tg.onclick||false;                
                  self.preventclick.tg.onclick = self.onpreventclick;
                }

                var ev = $.extend({"original":e},e);
                e = ev;
                
                if (("changedTouches" in e)) {
                  e.clientX = e.changedTouches[0].clientX;
                  e.clientY = e.changedTouches[0].clientY;
                }                
                
                if (self.forcescreen) {
                  var le = e;
                  var e = {"original":(e.original)?e.original:e};
                  e.clientX = le.screenX;
                  e.clientY = le.screenY;      
                }
                
                var ofx = ofy = 0;
                
                if (moveneedoffset&&!byiframe) {
                  var wp = self.win.position();
                  ofx=-wp.left;
                  ofy=-wp.top;
                }                
                
                var fy = e.clientY + ofy;
                var my = (fy-self.rail.drag.y);
                var fx = e.clientX + ofx;
                var mx = (fx-self.rail.drag.x);
                
                var ny = self.rail.drag.st-my;
                
                if (self.ishwscroll&&self.opt.bouncescroll) {
                  if (ny<0) {
                    ny = Math.round(ny/2);
//                    fy = 0;
                  }
                  else if (ny>self.page.maxh) {
                    ny = self.page.maxh+Math.round((ny-self.page.maxh)/2);
//                    fy = 0;
                  }
                } else {
                  if (ny<0) {ny=0;fy=0}
                  if (ny>self.page.maxh) {ny=self.page.maxh;fy=0}
                }
                  
                if (self.railh&&self.railh.scrollable) {
                  var nx = self.rail.drag.sl-mx;
                  
                  if (self.ishwscroll&&self.opt.bouncescroll) {                  
                    if (nx<0) {
                      nx = Math.round(nx/2);
//                      fx = 0;
                    }
                    else if (nx>self.page.maxw) {
                      nx = self.page.maxw+Math.round((nx-self.page.maxw)/2);
//                      fx = 0;
                    }
                  } else {
                    if (nx<0) {nx=0;fx=0}
                    if (nx>self.page.maxw) {nx=self.page.maxw;fx=0}
                  }
                
                }
                
                var grabbed = false;
                if (self.rail.drag.dl) {
                  grabbed = true;
                  if (self.rail.drag.dl=="v") nx = self.rail.drag.sl;
                  else if (self.rail.drag.dl=="h") ny = self.rail.drag.st;                  
                } else {
                  var ay = Math.abs(my);
                  var ax = Math.abs(mx);
                  var dz = self.opt.directionlockdeadzone;
                  if (self.rail.drag.ck=="v") {    
                    if (ay>dz&&(ax<=(ay*0.3))) {
                      self.rail.drag = false;                      
                      return true;
                    }
                    else if (ax>dz) {
                      self.rail.drag.dl="f";                      
                      $("body").scrollTop($("body").scrollTop());  // stop iOS native scrolling (when active javascript has blocked)
                    }
                  }
                  else if (self.rail.drag.ck=="h") {
                    if (ax>dz&&(ay<=(ax*0.3))) {
                      self.rail.drag = false;                      
                      return true;
                    }
                    else if (ay>dz) {                      
                      self.rail.drag.dl="f";
                      $("body").scrollLeft($("body").scrollLeft());  // stop iOS native scrolling (when active javascript has blocked)
                    }
                  }  
                }
                
                self.synched("touchmove",function(){
                  if (self.rail.drag&&(self.rail.drag.pt==2)) {
                    if (self.prepareTransition) self.prepareTransition(0);
                    if (self.rail.scrollable) self.setScrollTop(ny);
                    self.scrollmom.update(fx,fy);
                    if (self.railh&&self.railh.scrollable) {
                      self.setScrollLeft(nx);
                      self.showCursor(ny,nx);
                    } else {
                      self.showCursor(ny);
                    }
                    if (cap.isie10) document.selection.clear();
                  }
                });
                
                if (cap.ischrome&&self.istouchcapable) grabbed=false;  //chrome touch emulation doesn't like!
                if (grabbed) return self.cancelEvent(e);
              }
              
            };
          
          }
          
          self.onmousedown = function(e,hronly) {    
            if (self.rail.drag&&self.rail.drag.pt!=1) return;
            if (self.locked) return self.cancelEvent(e);            
            self.cancelScroll();              
            self.rail.drag = {x:e.clientX,y:e.clientY,sx:self.scroll.x,sy:self.scroll.y,pt:1,hr:(!!hronly)};
            var tg = self.getTarget(e);
            if (!self.ispage&&cap.hasmousecapture) tg.setCapture();
            if (self.isiframe&&!cap.hasmousecapture) {
              self.saved["csspointerevents"] = self.doc.css("pointer-events");
              self.css(self.doc,{"pointer-events":"none"});
            }
            return self.cancelEvent(e);
          };
          
          self.onmouseup = function(e) {
            if (self.rail.drag) {
              if (cap.hasmousecapture) document.releaseCapture();
              if (self.isiframe&&!cap.hasmousecapture) self.doc.css("pointer-events",self.saved["csspointerevents"]);
              if(self.rail.drag.pt!=1)return;
              self.rail.drag = false;
              //if (!self.rail.active) self.hideCursor();
              return self.cancelEvent(e);
            }
          };        
          
          self.onmousemove = function(e) {
            if (self.rail.drag) {
              if(self.rail.drag.pt!=1)return;
              
              if (cap.ischrome&&e.which==0) return self.onmouseup(e);
              
              self.cursorfreezed = true;
                  
              if (self.rail.drag.hr) {
                self.scroll.x = self.rail.drag.sx + (e.clientX-self.rail.drag.x);
                if (self.scroll.x<0) self.scroll.x=0;
                var mw = self.scrollvaluemaxw;
                if (self.scroll.x>mw) self.scroll.x=mw;
              } else {                
                self.scroll.y = self.rail.drag.sy + (e.clientY-self.rail.drag.y);
                if (self.scroll.y<0) self.scroll.y=0;
                var my = self.scrollvaluemax;
                if (self.scroll.y>my) self.scroll.y=my;
              }
              
              self.synched('mousemove',function(){
                if (self.rail.drag&&(self.rail.drag.pt==1)) {
                  self.showCursor();
                  if (self.rail.drag.hr) self.doScrollLeft(Math.round(self.scroll.x*self.scrollratio.x),self.opt.cursordragspeed);
                  else self.doScrollTop(Math.round(self.scroll.y*self.scrollratio.y),self.opt.cursordragspeed);
                }
              });
              
              return self.cancelEvent(e);
            } 
/*              
            else {
              self.checkarea = true;
            }
*/              
          };          
         
          if (cap.cantouch||self.opt.touchbehavior) {
          
            self.onpreventclick = function(e) {
              if (self.preventclick) {
                self.preventclick.tg.onclick = self.preventclick.click;
                self.preventclick = false;            
                return self.cancelEvent(e);
              }
            }
          
//            self.onmousedown = self.ontouchstart;            
//            self.onmouseup = self.ontouchend;
//            self.onmousemove = self.ontouchmove;

            self.bind(self.win,"mousedown",self.ontouchstart);  // control content dragging

            self.onclick = (cap.isios) ? false : function(e) { 
              if (self.lastmouseup) {
                self.lastmouseup = false;
                return self.cancelEvent(e);
              } else {
                return true;
              }
            }; 
            
            if (self.opt.grabcursorenabled&&cap.cursorgrabvalue) {
              self.css((self.ispage)?self.doc:self.win,{'cursor':cap.cursorgrabvalue});            
              self.css(self.rail,{'cursor':cap.cursorgrabvalue});
            }
            
          } else {

            function checkSelectionScroll(e) {
              if (!self.selectiondrag) return;
              
              if (e) {
                var ww = self.win.outerHeight();
                var df = (e.pageY - self.selectiondrag.top);
                if (df>0&&df<ww) df=0;
                if (df>=ww) df-=ww;
                self.selectiondrag.df = df;                
              }
              if (self.selectiondrag.df==0) return;
              
              var rt = -Math.floor(self.selectiondrag.df/6)*2;              
//              self.doScrollTop(self.getScrollTop(true)+rt);
              self.doScrollBy(rt);
              
              self.debounced("doselectionscroll",function(){checkSelectionScroll()},50);
            }
            
            if ("getSelection" in document) {  // A grade - Major browsers
              self.hasTextSelected = function() {  
                return (document.getSelection().rangeCount>0);
              }
            } 
            else if ("selection" in document) {  //IE9-
              self.hasTextSelected = function() {
                return (document.selection.type != "None");
              }
            } 
            else {
              self.hasTextSelected = function() {  // no support
                return false;
              }
            }            
            
            self.onselectionstart = function(e) {
              if (self.ispage) return;
              self.selectiondrag = self.win.offset();
            }
            self.onselectionend = function(e) {
              self.selectiondrag = false;
            }
            self.onselectiondrag = function(e) {              
              if (!self.selectiondrag) return;
              if (self.hasTextSelected()) self.debounced("selectionscroll",function(){checkSelectionScroll(e)},250);
            }
            
            
          }
          
          if (cap.hasmstouch) {
            self.css(self.rail,{'-ms-touch-action':'none'});
            self.css(self.cursor,{'-ms-touch-action':'none'});
            
            self.bind(self.win,"MSPointerDown",self.ontouchstart);
            self.bind(document,"MSPointerUp",self.ontouchend);
            self.bind(document,"MSPointerMove",self.ontouchmove);
            self.bind(self.cursor,"MSGestureHold",function(e){e.preventDefault()});
            self.bind(self.cursor,"contextmenu",function(e){e.preventDefault()});
          }

          if (this.istouchcapable) {  //desktop with screen touch enabled
            self.bind(self.win,"touchstart",self.ontouchstart);
            self.bind(document,"touchend",self.ontouchend);
            self.bind(document,"touchcancel",self.ontouchend);
            self.bind(document,"touchmove",self.ontouchmove);            
          }
          
          self.bind(self.cursor,"mousedown",self.onmousedown);
          self.bind(self.cursor,"mouseup",self.onmouseup);

          if (self.railh) {
            self.bind(self.cursorh,"mousedown",function(e){self.onmousedown(e,true)});
            self.bind(self.cursorh,"mouseup",function(e){
              if (self.rail.drag&&self.rail.drag.pt==2) return;
              self.rail.drag = false;
              self.hasmoving = false;
              self.hideCursor();
              if (cap.hasmousecapture) document.releaseCapture();
              return self.cancelEvent(e);
            });
          }
		
          if (self.opt.cursordragontouch||!cap.cantouch&&!self.opt.touchbehavior) {

            self.rail.css({"cursor":"default"});
            self.railh&&self.railh.css({"cursor":"default"});          
          
            self.jqbind(self.rail,"mouseenter",function() {
              if (self.canshowonmouseevent) self.showCursor();
              self.rail.active = true;
            });
            self.jqbind(self.rail,"mouseleave",function() { 
              self.rail.active = false;
              if (!self.rail.drag) self.hideCursor();
            });
            
            if (self.opt.sensitiverail) {
              self.bind(self.rail,"click",function(e){self.doRailClick(e,false,false)});
              self.bind(self.rail,"dblclick",function(e){self.doRailClick(e,true,false)});
              self.bind(self.cursor,"click",function(e){self.cancelEvent(e)});
              self.bind(self.cursor,"dblclick",function(e){self.cancelEvent(e)});
            }

            if (self.railh) {
              self.jqbind(self.railh,"mouseenter",function() {
                if (self.canshowonmouseevent) self.showCursor();
                self.rail.active = true;
              });          
              self.jqbind(self.railh,"mouseleave",function() { 
                self.rail.active = false;
                if (!self.rail.drag) self.hideCursor();
              });
              
              if (self.opt.sensitiverail) {
                self.bind(self.railh, "click", function(e){self.doRailClick(e,false,true)});
                self.bind(self.railh, "dblclick", function(e){self.doRailClick(e, true, true) });
                self.bind(self.cursorh, "click", function (e) { self.cancelEvent(e) });
                self.bind(self.cursorh, "dblclick", function (e) { self.cancelEvent(e) });
              }
              
            }
          
          }
    
          if (!cap.cantouch&&!self.opt.touchbehavior) {

            self.bind((cap.hasmousecapture)?self.win:document,"mouseup",self.onmouseup);            
            self.bind(document,"mousemove",self.onmousemove);
            if (self.onclick) self.bind(document,"click",self.onclick);
            
            if (!self.ispage&&self.opt.enablescrollonselection) {
              self.bind(self.win[0],"mousedown",self.onselectionstart);
              self.bind(document,"mouseup",self.onselectionend);
              self.bind(self.cursor,"mouseup",self.onselectionend);
              if (self.cursorh) self.bind(self.cursorh,"mouseup",self.onselectionend);
              self.bind(document,"mousemove",self.onselectiondrag);
            }

						if (self.zoom) {
							self.jqbind(self.zoom,"mouseenter",function() {
								if (self.canshowonmouseevent) self.showCursor();
								self.rail.active = true;
							});          
							self.jqbind(self.zoom,"mouseleave",function() { 
								self.rail.active = false;
								if (!self.rail.drag) self.hideCursor();
							});
						}

          } else {
            
            self.bind((cap.hasmousecapture)?self.win:document,"mouseup",self.ontouchend);
            self.bind(document,"mousemove",self.ontouchmove);
            if (self.onclick) self.bind(document,"click",self.onclick);
            
            if (self.opt.cursordragontouch) {
              self.bind(self.cursor,"mousedown",self.onmousedown);
              self.bind(self.cursor,"mousemove",self.onmousemove);
              self.cursorh&&self.bind(self.cursorh,"mousedown",self.onmousedown);
              self.cursorh&&self.bind(self.cursorh,"mousemove",self.onmousemove);
            }
          
          }
						
					if (self.opt.enablemousewheel) {
						if (!self.isiframe) self.bind((cap.isie&&self.ispage) ? document : self.win /*self.docscroll*/ ,"mousewheel",self.onmousewheel);
						self.bind(self.rail,"mousewheel",self.onmousewheel);
						if (self.railh) self.bind(self.railh,"mousewheel",self.onmousewheelhr);
					}						
						
          if (!self.ispage&&!cap.cantouch&&!(/HTML|BODY/.test(self.win[0].nodeName))) {
            if (!self.win.attr("tabindex")) self.win.attr({"tabindex":tabindexcounter++});
            
            self.jqbind(self.win,"focus",function(e) {
              domfocus = (self.getTarget(e)).id||true;
              self.hasfocus = true;
              if (self.canshowonmouseevent) self.noticeCursor();
            });
            self.jqbind(self.win,"blur",function(e) {
              domfocus = false;
              self.hasfocus = false;
            });
            
            self.jqbind(self.win,"mouseenter",function(e) {
              mousefocus = (self.getTarget(e)).id||true;
              self.hasmousefocus = true;
              if (self.canshowonmouseevent) self.noticeCursor();
            });
            self.jqbind(self.win,"mouseleave",function() {
              mousefocus = false;
              self.hasmousefocus = false;
            });
            
          };
          
        }  // !ie9mobile
        
        //Thanks to http://www.quirksmode.org !!
        self.onkeypress = function(e) {
          if (self.locked&&self.page.maxh==0) return true;
          
          e = (e) ? e : window.e;
          var tg = self.getTarget(e);
          if (tg&&/INPUT|TEXTAREA|SELECT|OPTION/.test(tg.nodeName)) {
            var tp = tg.getAttribute('type')||tg.type||false;            
            if ((!tp)||!(/submit|button|cancel/i.tp)) return true;
          }
          
          if (self.hasfocus||(self.hasmousefocus&&!domfocus)||(self.ispage&&!domfocus&&!mousefocus)) {
            var key = e.keyCode;
            
            if (self.locked&&key!=27) return self.cancelEvent(e);

            var ctrl = e.ctrlKey||false;
            var shift = e.shiftKey || false;
            
            var ret = false;
            switch (key) {
              case 38:
              case 63233: //safari
                self.doScrollBy(24*3);
                ret = true;
                break;
              case 40:
              case 63235: //safari
                self.doScrollBy(-24*3);
                ret = true;
                break;
              case 37:
              case 63232: //safari
                if (self.railh) {
                  (ctrl) ? self.doScrollLeft(0) : self.doScrollLeftBy(24*3);
                  ret = true;
                }
                break;
              case 39:
              case 63234: //safari
                if (self.railh) {
                  (ctrl) ? self.doScrollLeft(self.page.maxw) : self.doScrollLeftBy(-24*3);
                  ret = true;
                }
                break;
              case 33:
              case 63276: // safari
                self.doScrollBy(self.view.h);
                ret = true;
                break;
              case 34:
              case 63277: // safari
                self.doScrollBy(-self.view.h);
                ret = true;
                break;
              case 36:
              case 63273: // safari                
                (self.railh&&ctrl) ? self.doScrollPos(0,0) : self.doScrollTo(0);
                ret = true;
                break;
              case 35:
              case 63275: // safari
                (self.railh&&ctrl) ? self.doScrollPos(self.page.maxw,self.page.maxh) : self.doScrollTo(self.page.maxh);
                ret = true;
                break;
              case 32:
                if (self.opt.spacebarenabled) {
                  (shift) ? self.doScrollBy(self.view.h) : self.doScrollBy(-self.view.h);
                  ret = true;
                }
                break;
              case 27: // ESC
                if (self.zoomactive) {
                  self.doZoom();
                  ret = true;
                }
                break;
            }
            if (ret) return self.cancelEvent(e);
          }
        };
        
        if (self.opt.enablekeyboard) self.bind(document,(cap.isopera&&!cap.isopera12)?"keypress":"keydown",self.onkeypress);
        
        self.bind(window,'resize',self.lazyResize);
        self.bind(window,'orientationchange',self.lazyResize);
        
        self.bind(window,"load",self.lazyResize);
		
        if (cap.ischrome&&!self.ispage&&!self.haswrapper) { //chrome void scrollbar bug - it persists in version 26
          var tmp=self.win.attr("style");
					var ww = parseFloat(self.win.css("width"))+1;
          self.win.css('width',ww);
          self.synched("chromefix",function(){self.win.attr("style",tmp)});
        }
        
        
// Trying a cross-browser implementation - good luck!

        self.onAttributeChange = function(e) {
          self.lazyResize(250);
        }
        
        if (!self.ispage&&!self.haswrapper) {
          // redesigned MutationObserver for Chrome18+/Firefox14+/iOS6+ with support for: remove div, add/remove content
          if (clsMutationObserver !== false) {
            self.observer = new clsMutationObserver(function(mutations) {            
              mutations.forEach(self.onAttributeChange);
            });
            self.observer.observe(self.win[0],{childList: true, characterData: false, attributes: true, subtree: false});
            
            self.observerremover = new clsMutationObserver(function(mutations) {
               mutations.forEach(function(mo){
                 if (mo.removedNodes.length>0) {
                   for (var dd in mo.removedNodes) {
                     if (mo.removedNodes[dd]==self.win[0]) return self.remove();
                   }
                 }
               });
            });
            self.observerremover.observe(self.win[0].parentNode,{childList: true, characterData: false, attributes: false, subtree: false});
            
          } else {        
            self.bind(self.win,(cap.isie&&!cap.isie9)?"propertychange":"DOMAttrModified",self.onAttributeChange);            
            if (cap.isie9) self.win[0].attachEvent("onpropertychange",self.onAttributeChange); //IE9 DOMAttrModified bug
            self.bind(self.win,"DOMNodeRemoved",function(e){
              if (e.target==self.win[0]) self.remove();
            });
          }
        }
        
//

        if (!self.ispage&&self.opt.boxzoom) self.bind(window,"resize",self.resizeZoom);
        if (self.istextarea) self.bind(self.win,"mouseup",self.lazyResize);
        
        self.checkrtlmode = true;
        self.lazyResize(30);
        
      }
      
      if (this.doc[0].nodeName == 'IFRAME') {
        function oniframeload(e) {
          self.iframexd = false;
          try {
            var doc = 'contentDocument' in this ? this.contentDocument : this.contentWindow.document;
            var a = doc.domain;            
          } catch(e){self.iframexd = true;doc=false};
          
          if (self.iframexd) {
            if ("console" in window) console.log('NiceScroll error: policy restriced iframe');
            return true;  //cross-domain - I can't manage this        
          }
          
          self.forcescreen = true;
          
          if (self.isiframe) {            
            self.iframe = {
              "doc":$(doc),
              "html":self.doc.contents().find('html')[0],
              "body":self.doc.contents().find('body')[0]
            };
            self.getContentSize = function(){
              return {
                w:Math.max(self.iframe.html.scrollWidth,self.iframe.body.scrollWidth),
                h:Math.max(self.iframe.html.scrollHeight,self.iframe.body.scrollHeight)
              }
            }            
            self.docscroll = $(self.iframe.body);//$(this.contentWindow);
          }
          
          if (!cap.isios&&self.opt.iframeautoresize&&!self.isiframe) {
            self.win.scrollTop(0); // reset position
            self.doc.height("");  //reset height to fix browser bug
            var hh=Math.max(doc.getElementsByTagName('html')[0].scrollHeight,doc.body.scrollHeight);
            self.doc.height(hh);          
          }
          self.lazyResize(30);
          
          if (cap.isie7) self.css($(self.iframe.html),{'overflow-y':'hidden'});
          //self.css($(doc.body),{'overflow-y':'hidden'});
          self.css($(self.iframe.body),{'overflow-y':'hidden'});
          
          if (cap.isios&&self.haswrapper) {
            self.css($(doc.body),{'-webkit-transform':'translate3d(0,0,0)'});  // avoid iFrame content clipping - thanks to http://blog.derraab.com/2012/04/02/avoid-iframe-content-clipping-with-css-transform-on-ios/
          }
          
          if ('contentWindow' in this) {
            self.bind(this.contentWindow,"scroll",self.onscroll);  //IE8 & minor
          } else {          
            self.bind(doc,"scroll",self.onscroll);
          }                    
          
          if (self.opt.enablemousewheel) {
            self.bind(doc,"mousewheel",self.onmousewheel);
          }
          
          if (self.opt.enablekeyboard) self.bind(doc,(cap.isopera)?"keypress":"keydown",self.onkeypress);
          
          if (cap.cantouch||self.opt.touchbehavior) {
            self.bind(doc,"mousedown",self.ontouchstart);
            self.bind(doc,"mousemove",function(e){self.ontouchmove(e,true)});
            if (self.opt.grabcursorenabled&&cap.cursorgrabvalue) self.css($(doc.body),{'cursor':cap.cursorgrabvalue});
          }
          
          self.bind(doc,"mouseup",self.ontouchend);
          
          if (self.zoom) {
            if (self.opt.dblclickzoom) self.bind(doc,'dblclick',self.doZoom);
            if (self.ongesturezoom) self.bind(doc,"gestureend",self.ongesturezoom);             
          }
        };
        
        if (this.doc[0].readyState&&this.doc[0].readyState=="complete"){
          setTimeout(function(){oniframeload.call(self.doc[0],false)},500);
        }
        self.bind(this.doc,"load",oniframeload);
        
      }
      
    };
    
    this.showCursor = function(py,px) {
      if (self.cursortimeout) {
        clearTimeout(self.cursortimeout);
        self.cursortimeout = 0;
      }
      if (!self.rail) return;
      if (self.autohidedom) {
        self.autohidedom.stop().css({opacity:self.opt.cursoropacitymax});
        self.cursoractive = true;
      }
      
      if (!self.rail.drag||self.rail.drag.pt!=1) {      
        if ((typeof py != "undefined")&&(py!==false)) {
          self.scroll.y = Math.round(py * 1/self.scrollratio.y);
        }
        if (typeof px != "undefined") {
          self.scroll.x = Math.round(px * 1/self.scrollratio.x);
        }
      }
      
      self.cursor.css({height:self.cursorheight,top:self.scroll.y}); 
      if (self.cursorh) {
        (!self.rail.align&&self.rail.visibility) ? self.cursorh.css({width:self.cursorwidth,left:self.scroll.x+self.rail.width}) : self.cursorh.css({width:self.cursorwidth,left:self.scroll.x});
        self.cursoractive = true;
      }
      
      if (self.zoom) self.zoom.stop().css({opacity:self.opt.cursoropacitymax});      
    };
    
    this.hideCursor = function(tm) {
      if (self.cursortimeout) return;
      if (!self.rail) return;
      if (!self.autohidedom) return;
      self.cursortimeout = setTimeout(function() {
         if (!self.rail.active||!self.showonmouseevent) {
           self.autohidedom.stop().animate({opacity:self.opt.cursoropacitymin});
           if (self.zoom) self.zoom.stop().animate({opacity:self.opt.cursoropacitymin});
           self.cursoractive = false;
         }
         self.cursortimeout = 0;
      },tm||self.opt.hidecursordelay);
    };
    
    this.noticeCursor = function(tm,py,px) {
      self.showCursor(py,px);
      if (!self.rail.active) self.hideCursor(tm);
    };
        
    this.getContentSize = 
      (self.ispage) ?
        function(){
          return {
            w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),
            h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)
          }
        }
      : (self.haswrapper) ?
        function(){
          return {
            w:self.doc.outerWidth()+parseInt(self.win.css('paddingLeft'))+parseInt(self.win.css('paddingRight')),
            h:self.doc.outerHeight()+parseInt(self.win.css('paddingTop'))+parseInt(self.win.css('paddingBottom'))
          }
        }
      : function() {        
        return {
          w:self.docscroll[0].scrollWidth,
          h:self.docscroll[0].scrollHeight
        }
      };
  
    this.onResize = function(e,page) {
    
	  if (!self.win) return false;
	
      if (!self.haswrapper&&!self.ispage) {
        if (self.win.css('display')=='none') {
          if (self.visibility) self.hideRail().hideRailHr();
          return false;
        } else {          
          if (!self.hidden&&!self.visibility) self.showRail().showRailHr();
        }        
      }
    
      var premaxh = self.page.maxh;
      var premaxw = self.page.maxw;

      var preview = {h:self.view.h,w:self.view.w};   
      
      self.view = {
        w:(self.ispage) ? self.win.width() : parseInt(self.win[0].clientWidth),
        h:(self.ispage) ? self.win.height() : parseInt(self.win[0].clientHeight)
      };
      
      self.page = (page) ? page : self.getContentSize();
      
      self.page.maxh = Math.max(0,self.page.h - self.view.h);
      self.page.maxw = Math.max(0,self.page.w - self.view.w);
      
      if ((self.page.maxh==premaxh)&&(self.page.maxw==premaxw)&&(self.view.w==preview.w)) {
        // test position        
        if (!self.ispage) {
          var pos = self.win.offset();
          if (self.lastposition) {
            var lst = self.lastposition;
            if ((lst.top==pos.top)&&(lst.left==pos.left)) return self; //nothing to do            
          }
          self.lastposition = pos;
        } else {
          return self; //nothing to do
        }
      }
      
      if (self.page.maxh==0) {
        self.hideRail();        
        self.scrollvaluemax = 0;
        self.scroll.y = 0;
        self.scrollratio.y = 0;
        self.cursorheight = 0;
        self.setScrollTop(0);
        self.rail.scrollable = false;
      } else {       
        self.rail.scrollable = true;
      }
      
      if (self.page.maxw==0) {
        self.hideRailHr();
        self.scrollvaluemaxw = 0;
        self.scroll.x = 0;
        self.scrollratio.x = 0;
        self.cursorwidth = 0;
        self.setScrollLeft(0);
        self.railh.scrollable = false;
      } else {        
        self.railh.scrollable = true;
      }
  
      self.locked = (self.page.maxh==0)&&(self.page.maxw==0);
      if (self.locked) {
				if (!self.ispage) self.updateScrollBar(self.view);
			  return false;
		  }

      if (!self.hidden&&!self.visibility) {
        self.showRail().showRailHr();
      }      
      else if (!self.hidden&&!self.railh.visibility) self.showRailHr();
      
      if (self.istextarea&&self.win.css('resize')&&self.win.css('resize')!='none') self.view.h-=20;      

      self.cursorheight = Math.min(self.view.h,Math.round(self.view.h * (self.view.h / self.page.h)));
      self.cursorheight = (self.opt.cursorfixedheight) ? self.opt.cursorfixedheight : Math.max(self.opt.cursorminheight,self.cursorheight);

      self.cursorwidth = Math.min(self.view.w,Math.round(self.view.w * (self.view.w / self.page.w)));
      self.cursorwidth = (self.opt.cursorfixedheight) ? self.opt.cursorfixedheight : Math.max(self.opt.cursorminheight,self.cursorwidth);
      
      self.scrollvaluemax = self.view.h-self.cursorheight-self.cursor.hborder;
      
      if (self.railh) {
        self.railh.width = (self.page.maxh>0) ? (self.view.w-self.rail.width) : self.view.w;
        self.scrollvaluemaxw = self.railh.width-self.cursorwidth-self.cursorh.wborder;
      }
      
      if (self.checkrtlmode&&self.railh) {
        self.checkrtlmode = false;
        if (self.opt.rtlmode&&self.scroll.x==0) self.setScrollLeft(self.page.maxw);
      }
      
      if (!self.ispage) self.updateScrollBar(self.view);
      
      self.scrollratio = {
        x:(self.page.maxw/self.scrollvaluemaxw),
        y:(self.page.maxh/self.scrollvaluemax)
      };
     
      var sy = self.getScrollTop();
      if (sy>self.page.maxh) {
        self.doScrollTop(self.page.maxh);
      } else {     
        self.scroll.y = Math.round(self.getScrollTop() * (1/self.scrollratio.y));
        self.scroll.x = Math.round(self.getScrollLeft() * (1/self.scrollratio.x));
        if (self.cursoractive) self.noticeCursor();     
      }      
      
      if (self.scroll.y&&(self.getScrollTop()==0)) self.doScrollTo(Math.floor(self.scroll.y*self.scrollratio.y));
      
      return self;
    };
    
    this.resize = self.onResize;
    
    this.lazyResize = function(tm) {   // event debounce
      tm = (isNaN(tm)) ? 30 : tm;
      self.delayed('resize',self.resize,tm);
      return self;
    }
   
// modified by MDN https://developer.mozilla.org/en-US/docs/DOM/Mozilla_event_reference/wheel
    function _modernWheelEvent(dom,name,fn,bubble) {      
      self._bind(dom,name,function(e){
        var  e = (e) ? e : window.event;
        var event = {
          original: e,
          target: e.target || e.srcElement,
          type: "wheel",
          deltaMode: e.type == "MozMousePixelScroll" ? 0 : 1,
          deltaX: 0,
          deltaZ: 0,
          preventDefault: function() {
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            return false;
          },
          stopImmediatePropagation: function() {
            (e.stopImmediatePropagation) ? e.stopImmediatePropagation() : e.cancelBubble = true;
          }
        };
            
        if (name=="mousewheel") {
          event.deltaY = - 1/40 * e.wheelDelta;
          e.wheelDeltaX && (event.deltaX = - 1/40 * e.wheelDeltaX);
        } else {
          event.deltaY = e.detail;
        }

        return fn.call(dom,event);      
      },bubble);
    };     
   
    this._bind = function(el,name,fn,bubble) {  // primitive bind
      self.events.push({e:el,n:name,f:fn,b:bubble,q:false});
      if (el.addEventListener) {
        el.addEventListener(name,fn,bubble||false);
      }
      else if (el.attachEvent) {
        el.attachEvent("on"+name,fn);
      }
      else {
        el["on"+name] = fn;        
      }        
    };
   
    this.jqbind = function(dom,name,fn) {  // use jquery bind for non-native events (mouseenter/mouseleave)
      self.events.push({e:dom,n:name,f:fn,q:true});
      $(dom).bind(name,fn);
    }
   
    this.bind = function(dom,name,fn,bubble) {  // touch-oriented & fixing jquery bind
      var el = ("jquery" in dom) ? dom[0] : dom;
      
      if (name=='mousewheel') {
        if ("onwheel" in self.win) {            
          self._bind(el,"wheel",fn,bubble||false);
        } else {            
          var wname = (typeof document.onmousewheel != "undefined") ? "mousewheel" : "DOMMouseScroll";  // older IE/Firefox
          _modernWheelEvent(el,wname,fn,bubble||false);
          if (wname=="DOMMouseScroll") _modernWheelEvent(el,"MozMousePixelScroll",fn,bubble||false);  // Firefox legacy
        }
      } 
      else if (el.addEventListener) {
        if (cap.cantouch && /mouseup|mousedown|mousemove/.test(name)) {  // touch device support
          var tt=(name=='mousedown')?'touchstart':(name=='mouseup')?'touchend':'touchmove';
          self._bind(el,tt,function(e){
            if (e.touches) {
              if (e.touches.length<2) {var ev=(e.touches.length)?e.touches[0]:e;ev.original=e;fn.call(this,ev);}
            } 
            else if (e.changedTouches) {var ev=e.changedTouches[0];ev.original=e;fn.call(this,ev);}  //blackberry
          },bubble||false);
        }
        self._bind(el,name,fn,bubble||false);
        if (cap.cantouch && name=="mouseup") self._bind(el,"touchcancel",fn,bubble||false);
      }
      else {
        self._bind(el,name,function(e) {
          e = e||window.event||false;
          if (e) {
            if (e.srcElement) e.target=e.srcElement;
          }
          if (!("pageY" in e)) {
            e.pageX = e.clientX + document.documentElement.scrollLeft;
            e.pageY = e.clientY + document.documentElement.scrollTop; 
          }
          return ((fn.call(el,e)===false)||bubble===false) ? self.cancelEvent(e) : true;
        });
      } 
    };
    
    this._unbind = function(el,name,fn,bub) {  // primitive unbind
      if (el.removeEventListener) {
        el.removeEventListener(name,fn,bub);
      }
      else if (el.detachEvent) {
        el.detachEvent('on'+name,fn);
      } else {
        el['on'+name] = false;
      }
    };
    
    this.unbindAll = function() {
      for(var a=0;a<self.events.length;a++) {
        var r = self.events[a];        
        (r.q) ? r.e.unbind(r.n,r.f) : self._unbind(r.e,r.n,r.f,r.b);
      }
    };
    
    // Thanks to http://www.switchonthecode.com !!
    this.cancelEvent = function(e) {
      var e = (e.original) ? e.original : (e) ? e : window.event||false;
      if (!e) return false;      
      if(e.preventDefault) e.preventDefault();
      if(e.stopPropagation) e.stopPropagation();
      if(e.preventManipulation) e.preventManipulation();  //IE10
      e.cancelBubble = true;
      e.cancel = true;
      e.returnValue = false;
      return false;
    };

    this.stopPropagation = function(e) {
      var e = (e.original) ? e.original : (e) ? e : window.event||false;
      if (!e) return false;
      if (e.stopPropagation) return e.stopPropagation();
      if (e.cancelBubble) e.cancelBubble=true;
      return false;
    }
    
    this.showRail = function() {
      if ((self.page.maxh!=0)&&(self.ispage||self.win.css('display')!='none')) {
        self.visibility = true;
        self.rail.visibility = true;
        self.rail.css('display','block');
      }
      return self;
    };

    this.showRailHr = function() {
      if (!self.railh) return self;
      if ((self.page.maxw!=0)&&(self.ispage||self.win.css('display')!='none')) {
        self.railh.visibility = true;
        self.railh.css('display','block');
      }
      return self;
    };
    
    this.hideRail = function() {
      self.visibility = false;
      self.rail.visibility = false;
      self.rail.css('display','none');
      return self;
    };

    this.hideRailHr = function() {
      if (!self.railh) return self;
      self.railh.visibility = false;
      self.railh.css('display','none');
      return self;
    };
    
    this.show = function() {
      self.hidden = false;
      self.locked = false;
      return self.showRail().showRailHr();
    };

    this.hide = function() {
      self.hidden = true;
      self.locked = true;
      return self.hideRail().hideRailHr();
    };
    
    this.toggle = function() {
      return (self.hidden) ? self.show() : self.hide();
    };
    
    this.remove = function() {
      self.stop();
      if (self.cursortimeout) clearTimeout(self.cursortimeout);
      self.doZoomOut();
      self.unbindAll();     

      if (cap.isie9) self.win[0].detachEvent("onpropertychange",self.onAttributeChange); //IE9 DOMAttrModified bug
      
      if (self.observer !== false) self.observer.disconnect();
      if (self.observerremover !== false) self.observerremover.disconnect();      
      
      self.events = null;
      
      if (self.cursor) {
        self.cursor.remove();
      }
      if (self.cursorh) {
        self.cursorh.remove();
      }
      if (self.rail) {
        self.rail.remove();
      }
      if (self.railh) {
        self.railh.remove();
      }
      if (self.zoom) {
        self.zoom.remove();
      }
      for(var a=0;a<self.saved.css.length;a++) {
        var d=self.saved.css[a];
        d[0].css(d[1],(typeof d[2]=="undefined") ? '' : d[2]);
      }
      self.saved = false;      
      self.me.data('__nicescroll',''); //erase all traces
      
      // memory leak fixed by GianlucaGuarini - thanks a lot!
      // remove the current nicescroll from the $.nicescroll array & normalize array
      var lst = $.nicescroll;
      lst.each(function(i){
        if (!this) return;
        if(this.id === self.id) {
          delete lst[i];          
          for(var b=++i;b<lst.length;b++,i++) lst[i]=lst[b];
          lst.length--;
          if (lst.length) delete lst[lst.length];
        }
      });      
      
      for (var i in self) {
        self[i] = null;
        delete self[i];
      }
      
      self = null;
      
    };
    
    this.scrollstart = function(fn) {
      this.onscrollstart = fn;
      return self;
    }
    this.scrollend = function(fn) {
      this.onscrollend = fn;
      return self;
    }
    this.scrollcancel = function(fn) {
      this.onscrollcancel = fn;
      return self;
    }
    
    this.zoomin = function(fn) {
      this.onzoomin = fn;
      return self;
    }
    this.zoomout = function(fn) {
      this.onzoomout = fn;
      return self;
    }
    
    this.isScrollable = function(e) {      
      var dom = (e.target) ? e.target : e;
      if (dom.nodeName == 'OPTION') return true;
      while (dom&&(dom.nodeType==1)&&!(/BODY|HTML/.test(dom.nodeName))) {
        var dd = $(dom);
        var ov = dd.css('overflowY')||dd.css('overflowX')||dd.css('overflow')||'';
        if (/scroll|auto/.test(ov)) return (dom.clientHeight!=dom.scrollHeight);
        dom = (dom.parentNode) ? dom.parentNode : false;        
      }
      return false;
    };

    this.getViewport = function(me) {      
      var dom = (me&&me.parentNode) ? me.parentNode : false;
      while (dom&&(dom.nodeType==1)&&!(/BODY|HTML/.test(dom.nodeName))) {
        var dd = $(dom);
        var ov = dd.css('overflowY')||dd.css('overflowX')||dd.css('overflow')||'';
        if ((/scroll|auto/.test(ov))&&(dom.clientHeight!=dom.scrollHeight)) return dd;
        if (dd.getNiceScroll().length>0) return dd;
        dom = (dom.parentNode) ? dom.parentNode : false;
      }
      return false;
    };
    
    function execScrollWheel(e,hr,chkscroll) {
      var px,py;
      var rt = 1;
      
      if (e.deltaMode==0) {  // PIXEL
        px = -Math.floor(e.deltaX*(self.opt.mousescrollstep/(18*3)));
        py = -Math.floor(e.deltaY*(self.opt.mousescrollstep/(18*3)));
      }
      else if (e.deltaMode==1) {  // LINE
        px = -Math.floor(e.deltaX*self.opt.mousescrollstep);
        py = -Math.floor(e.deltaY*self.opt.mousescrollstep);
      }
      
      if (hr&&self.opt.oneaxismousemode&&(px==0)&&py) {  // classic vertical-only mousewheel + browser with x/y support 
        px = py;
        py = 0;
      }

      if (px) {
        if (self.scrollmom) {self.scrollmom.stop()}
        self.lastdeltax+=px;
        self.debounced("mousewheelx",function(){var dt=self.lastdeltax;self.lastdeltax=0;if(!self.rail.drag){self.doScrollLeftBy(dt)}},120);
      }
      if (py) {
        if (self.opt.nativeparentscrolling&&chkscroll&&!self.ispage&&!self.zoomactive) {
          if (py<0) {
            if (self.getScrollTop()>=self.page.maxh) return true;
          } else {
            if (self.getScrollTop()<=0) return true;
          }
        }
        if (self.scrollmom) {self.scrollmom.stop()}
        self.lastdeltay+=py;
        self.debounced("mousewheely",function(){var dt=self.lastdeltay;self.lastdeltay=0;if(!self.rail.drag){self.doScrollBy(dt)}},120);
      }
      
      e.stopImmediatePropagation();
      return e.preventDefault();
//      return self.cancelEvent(e);
    };
    
    this.onmousewheel = function(e) {          
      if (self.locked) {
        self.debounced("checkunlock",self.resize,250);
        return true;
      }
      if (self.rail.drag) return self.cancelEvent(e);
      
      if (self.opt.oneaxismousemode=="auto"&&e.deltaX!=0) self.opt.oneaxismousemode = false;  // check two-axis mouse support (not very elegant)
      
      if (self.opt.oneaxismousemode&&e.deltaX==0) {
        if (!self.rail.scrollable) {
          if (self.railh&&self.railh.scrollable) {
            return self.onmousewheelhr(e);
          } else {          
            return true;
          }
        }
      }
      
      var nw = +(new Date());
      var chk = false;
      if (self.opt.preservenativescrolling&&((self.checkarea+600)<nw)) {
//        self.checkarea = false;
        self.nativescrollingarea = self.isScrollable(e);
        chk = true;
      }
      self.checkarea = nw;
      if (self.nativescrollingarea) return true; // this isn't my business
//      if (self.locked) return self.cancelEvent(e);
      var ret = execScrollWheel(e,false,chk);
      if (ret) self.checkarea = 0;
      return ret;
    };

    this.onmousewheelhr = function(e) {
      if (self.locked||!self.railh.scrollable) return true;
      if (self.rail.drag) return self.cancelEvent(e);
      
      var nw = +(new Date());
      var chk = false;
      if (self.opt.preservenativescrolling&&((self.checkarea+600)<nw)) {
//        self.checkarea = false;
        self.nativescrollingarea = self.isScrollable(e); 
        chk = true;
      }
      self.checkarea = nw;
      if (self.nativescrollingarea) return true; // this isn't my business
      if (self.locked) return self.cancelEvent(e);

      return execScrollWheel(e,true,chk);
    };
    
    this.stop = function() {
      self.cancelScroll();
      if (self.scrollmon) self.scrollmon.stop();
      self.cursorfreezed = false;
      self.scroll.y = Math.round(self.getScrollTop() * (1/self.scrollratio.y));      
      self.noticeCursor();
      return self;
    };
    
    this.getTransitionSpeed = function(dif) {
      var sp = Math.round(self.opt.scrollspeed*10);
      var ex = Math.min(sp,Math.round((dif / 20) * self.opt.scrollspeed));
      return (ex>20) ? ex : 0;
    }
    
    if (!self.opt.smoothscroll) {
      this.doScrollLeft = function(x,spd) {  //direct
        var y = self.getScrollTop();
        self.doScrollPos(x,y,spd);
      }      
      this.doScrollTop = function(y,spd) {   //direct
        var x = self.getScrollLeft();
        self.doScrollPos(x,y,spd);
      }
      this.doScrollPos = function(x,y,spd) {  //direct
        var nx = (x>self.page.maxw) ? self.page.maxw : x;
        if (nx<0) nx=0;
        var ny = (y>self.page.maxh) ? self.page.maxh : y;
        if (ny<0) ny=0;
        self.synched('scroll',function(){
          self.setScrollTop(ny);
          self.setScrollLeft(nx);
        });
      }
      this.cancelScroll = function() {}; // direct
    } 
    else if (self.ishwscroll&&cap.hastransition&&self.opt.usetransition) {
      this.prepareTransition = function(dif,istime) {
        var ex = (istime) ? ((dif>20)?dif:0) : self.getTransitionSpeed(dif);        
        var trans = (ex) ? cap.prefixstyle+'transform '+ex+'ms ease-out' : '';
        if (!self.lasttransitionstyle||self.lasttransitionstyle!=trans) {
          self.lasttransitionstyle = trans;
          self.doc.css(cap.transitionstyle,trans);
        }
        return ex;
      };
      
      this.doScrollLeft = function(x,spd) {  //trans
        var y = (self.scrollrunning) ? self.newscrolly : self.getScrollTop();
        self.doScrollPos(x,y,spd);
      }      
      
      this.doScrollTop = function(y,spd) {   //trans
        var x = (self.scrollrunning) ? self.newscrollx : self.getScrollLeft();
        self.doScrollPos(x,y,spd);
      }
      
      this.doScrollPos = function(x,y,spd) {  //trans
   
        var py = self.getScrollTop();
        var px = self.getScrollLeft();        
      
        if (((self.newscrolly-py)*(y-py)<0)||((self.newscrollx-px)*(x-px)<0)) self.cancelScroll();  //inverted movement detection      
        
        if (self.opt.bouncescroll==false) {
          if (y<0) y=0;
          else if (y>self.page.maxh) y=self.page.maxh;
          if (x<0) x=0;
          else if (x>self.page.maxw) x=self.page.maxw;
        }
        
        if (self.scrollrunning&&x==self.newscrollx&&y==self.newscrolly) return false;
        
        self.newscrolly = y;
        self.newscrollx = x;
        
        self.newscrollspeed = spd||false;
        
        if (self.timer) return false;
        
        self.timer = setTimeout(function(){
        
          var top = self.getScrollTop();
          var lft = self.getScrollLeft();
          
          var dst = {};
          dst.x = x-lft;
          dst.y = y-top;
          dst.px = lft;
          dst.py = top;
          
          var dd = Math.round(Math.sqrt(Math.pow(dst.x,2)+Math.pow(dst.y,2)));          
          
//          var df = (self.newscrollspeed) ? self.newscrollspeed : dd;
          
          var ms = (self.newscrollspeed && self.newscrollspeed>1) ? self.newscrollspeed : self.getTransitionSpeed(dd);
          if (self.newscrollspeed&&self.newscrollspeed<=1) ms*=self.newscrollspeed;
          
          self.prepareTransition(ms,true);
          
          if (self.timerscroll&&self.timerscroll.tm) clearInterval(self.timerscroll.tm);    
          
          if (ms>0) {
          
            if (!self.scrollrunning&&self.onscrollstart) {
              var info = {"type":"scrollstart","current":{"x":lft,"y":top},"request":{"x":x,"y":y},"end":{"x":self.newscrollx,"y":self.newscrolly},"speed":ms};
              self.onscrollstart.call(self,info);
            }
            
            if (cap.transitionend) {
              if (!self.scrollendtrapped) {
                self.scrollendtrapped = true;
                self.bind(self.doc,cap.transitionend,self.onScrollEnd,false); //I have got to do something usefull!!
              }
            } else {              
              if (self.scrollendtrapped) clearTimeout(self.scrollendtrapped);
              self.scrollendtrapped = setTimeout(self.onScrollEnd,ms);  // simulate transitionend event
            }
            
            var py = top;
            var px = lft;
            self.timerscroll = {
              bz: new BezierClass(py,self.newscrolly,ms,0,0,0.58,1),
              bh: new BezierClass(px,self.newscrollx,ms,0,0,0.58,1)
            };            
            if (!self.cursorfreezed) self.timerscroll.tm=setInterval(function(){self.showCursor(self.getScrollTop(),self.getScrollLeft())},60);
            
          }
          
          self.synched("doScroll-set",function(){
            self.timer = 0;
            if (self.scrollendtrapped) self.scrollrunning = true;
            self.setScrollTop(self.newscrolly);
            self.setScrollLeft(self.newscrollx);
            if (!self.scrollendtrapped) self.onScrollEnd();
          });
          
          
        },50);
        
      };
      
      this.cancelScroll = function() {
        if (!self.scrollendtrapped) return true;        
        var py = self.getScrollTop();
        var px = self.getScrollLeft();
        self.scrollrunning = false;
        if (!cap.transitionend) clearTimeout(cap.transitionend);
        self.scrollendtrapped = false;
        self._unbind(self.doc,cap.transitionend,self.onScrollEnd);        
        self.prepareTransition(0);
        self.setScrollTop(py); // fire event onscroll
        if (self.railh) self.setScrollLeft(px);
        if (self.timerscroll&&self.timerscroll.tm) clearInterval(self.timerscroll.tm);
        self.timerscroll = false;
        
        self.cursorfreezed = false;

        //self.noticeCursor(false,py,px);
        self.showCursor(py,px);
        return self;
      };
      this.onScrollEnd = function() {                
        if (self.scrollendtrapped) self._unbind(self.doc,cap.transitionend,self.onScrollEnd);
        self.scrollendtrapped = false;        
        self.prepareTransition(0);
        if (self.timerscroll&&self.timerscroll.tm) clearInterval(self.timerscroll.tm);
        self.timerscroll = false;        
        var py = self.getScrollTop();
        var px = self.getScrollLeft();
        self.setScrollTop(py);  // fire event onscroll        
        if (self.railh) self.setScrollLeft(px);  // fire event onscroll left
        
        self.noticeCursor(false,py,px);     
        
        self.cursorfreezed = false;
        
        if (py<0) py=0
        else if (py>self.page.maxh) py=self.page.maxh;
        if (px<0) px=0
        else if (px>self.page.maxw) px=self.page.maxw;
        if((py!=self.newscrolly)||(px!=self.newscrollx)) return self.doScrollPos(px,py,self.opt.snapbackspeed);
        
        if (self.onscrollend&&self.scrollrunning) {
          var info = {"type":"scrollend","current":{"x":px,"y":py},"end":{"x":self.newscrollx,"y":self.newscrolly}};
          self.onscrollend.call(self,info);
        } 
        self.scrollrunning = false;
        
      };

    } else {

      this.doScrollLeft = function(x,spd) {  //no-trans
        var y = (self.scrollrunning) ? self.newscrolly : self.getScrollTop();
        self.doScrollPos(x,y,spd);
      }

      this.doScrollTop = function(y,spd) {  //no-trans
        var x = (self.scrollrunning) ? self.newscrollx : self.getScrollLeft();
        self.doScrollPos(x,y,spd);
      }

      this.doScrollPos = function(x,y,spd) {  //no-trans
        var y = ((typeof y == "undefined")||(y===false)) ? self.getScrollTop(true) : y;
      
        if  ((self.timer)&&(self.newscrolly==y)&&(self.newscrollx==x)) return true;
      
        if (self.timer) clearAnimationFrame(self.timer);
        self.timer = 0;      

        var py = self.getScrollTop();
        var px = self.getScrollLeft();
        
        if (((self.newscrolly-py)*(y-py)<0)||((self.newscrollx-px)*(x-px)<0)) self.cancelScroll();  //inverted movement detection
        
        self.newscrolly = y;
        self.newscrollx = x;
        
        if (!self.bouncescroll||!self.rail.visibility) {
          if (self.newscrolly<0) {
            self.newscrolly = 0;
          }
          else if (self.newscrolly>self.page.maxh) {
            self.newscrolly = self.page.maxh;
          }
        }
        if (!self.bouncescroll||!self.railh.visibility) {
          if (self.newscrollx<0) {
            self.newscrollx = 0;
          }
          else if (self.newscrollx>self.page.maxw) {
            self.newscrollx = self.page.maxw;
          }
        }

        self.dst = {};
        self.dst.x = x-px;
        self.dst.y = y-py;
        self.dst.px = px;
        self.dst.py = py;
        
        var dst = Math.round(Math.sqrt(Math.pow(self.dst.x,2)+Math.pow(self.dst.y,2)));
        
        self.dst.ax = self.dst.x / dst;
        self.dst.ay = self.dst.y / dst;
        
        var pa = 0;
        var pe = dst;
        
        if (self.dst.x==0) {
          pa = py;
          pe = y;
          self.dst.ay = 1;
          self.dst.py = 0;
        } else if (self.dst.y==0) {
          pa = px;
          pe = x;
          self.dst.ax = 1;
          self.dst.px = 0;
        }

        var ms = self.getTransitionSpeed(dst);
        if (spd&&spd<=1) ms*=spd;
        if (ms>0) {
          self.bzscroll = (self.bzscroll) ? self.bzscroll.update(pe,ms) : new BezierClass(pa,pe,ms,0,1,0,1);
        } else {
          self.bzscroll = false;
        }
        
        if (self.timer) return;
        
        if ((py==self.page.maxh&&y>=self.page.maxh)||(px==self.page.maxw&&x>=self.page.maxw)) self.checkContentSize();
        
        var sync = 1;
        
        function scrolling() {          
          if (self.cancelAnimationFrame) return true;
          
          self.scrollrunning = true;
          
          sync = 1-sync;
          if (sync) return (self.timer = setAnimationFrame(scrolling)||1);

          var done = 0;
          
          var sc = sy = self.getScrollTop();
          if (self.dst.ay) {            
            sc = (self.bzscroll) ? self.dst.py + (self.bzscroll.getNow()*self.dst.ay) : self.newscrolly;
            var dr=sc-sy;          
            if ((dr<0&&sc<self.newscrolly)||(dr>0&&sc>self.newscrolly)) sc = self.newscrolly;
            self.setScrollTop(sc);
            if (sc == self.newscrolly) done=1;
          } else {
            done=1;
          }
          
          var scx = sx = self.getScrollLeft();
          if (self.dst.ax) {            
            scx = (self.bzscroll) ? self.dst.px + (self.bzscroll.getNow()*self.dst.ax) : self.newscrollx;            
            var dr=scx-sx;
            if ((dr<0&&scx<self.newscrollx)||(dr>0&&scx>self.newscrollx)) scx = self.newscrollx;
            self.setScrollLeft(scx);
            if (scx == self.newscrollx) done+=1;
          } else {
            done+=1;
          }
          
          if (done==2) {
            self.timer = 0;
            self.cursorfreezed = false;
            self.bzscroll = false;
            self.scrollrunning = false;
            if (sc<0) sc=0;
            else if (sc>self.page.maxh) sc=self.page.maxh;
            if (scx<0) scx=0;
            else if (scx>self.page.maxw) scx=self.page.maxw;
            if ((scx!=self.newscrollx)||(sc!=self.newscrolly)) self.doScrollPos(scx,sc);
            else {
              if (self.onscrollend) {
                var info = {"type":"scrollend","current":{"x":sx,"y":sy},"end":{"x":self.newscrollx,"y":self.newscrolly}};
                self.onscrollend.call(self,info);
              }             
            } 
          } else {
            self.timer = setAnimationFrame(scrolling)||1;
          }
        };
        self.cancelAnimationFrame=false;
        self.timer = 1;

        if (self.onscrollstart&&!self.scrollrunning) {
          var info = {"type":"scrollstart","current":{"x":px,"y":py},"request":{"x":x,"y":y},"end":{"x":self.newscrollx,"y":self.newscrolly},"speed":ms};
          self.onscrollstart.call(self,info);
        }        

        scrolling();
        
        if ((py==self.page.maxh&&y>=py)||(px==self.page.maxw&&x>=px)) self.checkContentSize();
        
        self.noticeCursor();
      };
  
      this.cancelScroll = function() {        
        if (self.timer) clearAnimationFrame(self.timer);
        self.timer = 0;
        self.bzscroll = false;
        self.scrollrunning = false;
        return self;
      };
      
    }
    
    this.doScrollBy = function(stp,relative) {
      var ny = 0;
      if (relative) {
        ny = Math.floor((self.scroll.y-stp)*self.scrollratio.y)
      } else {        
        var sy = (self.timer) ? self.newscrolly : self.getScrollTop(true);
        ny = sy-stp;
      }
      if (self.bouncescroll) {
        var haf = Math.round(self.view.h/2);
        if (ny<-haf) ny=-haf
        else if (ny>(self.page.maxh+haf)) ny = (self.page.maxh+haf);
      }
      self.cursorfreezed = false;      

      py = self.getScrollTop(true);
      if (ny<0&&py<=0) return self.noticeCursor();      
      else if (ny>self.page.maxh&&py>=self.page.maxh) {
        self.checkContentSize();
        return self.noticeCursor();
      }
      
      self.doScrollTop(ny);
    };

    this.doScrollLeftBy = function(stp,relative) {
      var nx = 0;
      if (relative) {
        nx = Math.floor((self.scroll.x-stp)*self.scrollratio.x)
      } else {
        var sx = (self.timer) ? self.newscrollx : self.getScrollLeft(true);
        nx = sx-stp;
      }
      if (self.bouncescroll) {
        var haf = Math.round(self.view.w/2);
        if (nx<-haf) nx=-haf
        else if (nx>(self.page.maxw+haf)) nx = (self.page.maxw+haf);
      }
      self.cursorfreezed = false;    

      px = self.getScrollLeft(true);
      if (nx<0&&px<=0) return self.noticeCursor();      
      else if (nx>self.page.maxw&&px>=self.page.maxw) return self.noticeCursor();
      
      self.doScrollLeft(nx);
    };
    
    this.doScrollTo = function(pos,relative) {
      var ny = (relative) ? Math.round(pos*self.scrollratio.y) : pos;
      if (ny<0) ny=0
      else if (ny>self.page.maxh) ny = self.page.maxh;
      self.cursorfreezed = false;
      self.doScrollTop(pos);
    };
    
    this.checkContentSize = function() {      
      var pg = self.getContentSize();
      if ((pg.h!=self.page.h)||(pg.w!=self.page.w)) self.resize(false,pg);
    };
    
    self.onscroll = function(e) {    
      if (self.rail.drag) return;
      if (!self.cursorfreezed) {
        self.synched('scroll',function(){
          self.scroll.y = Math.round(self.getScrollTop() * (1/self.scrollratio.y));
          if (self.railh) self.scroll.x = Math.round(self.getScrollLeft() * (1/self.scrollratio.x));
          self.noticeCursor();
        });
      }
    };
    self.bind(self.docscroll,"scroll",self.onscroll);
    
    this.doZoomIn = function(e) {
      if (self.zoomactive) return;
      self.zoomactive = true;
      
      self.zoomrestore = {
        style:{}
      };
      var lst = ['position','top','left','zIndex','backgroundColor','marginTop','marginBottom','marginLeft','marginRight'];
      var win = self.win[0].style;
      for(var a in lst) {
        var pp = lst[a];
        self.zoomrestore.style[pp] = (typeof win[pp] != "undefined") ? win[pp] : '';        
      }
      
      self.zoomrestore.style.width = self.win.css('width');
      self.zoomrestore.style.height = self.win.css('height');
      
      self.zoomrestore.padding = {
        w:self.win.outerWidth()-self.win.width(),
        h:self.win.outerHeight()-self.win.height()
      };
      
      if (cap.isios4) {
        self.zoomrestore.scrollTop = $(window).scrollTop();
        $(window).scrollTop(0);
      }
      
      self.win.css({
        "position":(cap.isios4)?"absolute":"fixed",
        "top":0,
        "left":0,
        "z-index":globalmaxzindex+100,
        "margin":"0px"
      });
      var bkg = self.win.css("backgroundColor");      
      if (bkg==""||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(bkg)) self.win.css("backgroundColor","#fff");
      self.rail.css({"z-index":globalmaxzindex+101});
      self.zoom.css({"z-index":globalmaxzindex+102});      
      self.zoom.css('backgroundPosition','0px -18px');
      self.resizeZoom();
      
      if (self.onzoomin) self.onzoomin.call(self);
      
      return self.cancelEvent(e);
    };

    this.doZoomOut = function(e) {
      if (!self.zoomactive) return;
      self.zoomactive = false;
      
      self.win.css("margin","");
      self.win.css(self.zoomrestore.style);
      
      if (cap.isios4) {
        $(window).scrollTop(self.zoomrestore.scrollTop);
      }
      
      self.rail.css({"z-index":self.zindex});
      self.zoom.css({"z-index":self.zindex});
      self.zoomrestore = false;
      self.zoom.css('backgroundPosition','0px 0px');
      self.onResize();
      
      if (self.onzoomout) self.onzoomout.call(self);
      
      return self.cancelEvent(e);
    };
    
    this.doZoom = function(e) {
      return (self.zoomactive) ? self.doZoomOut(e) : self.doZoomIn(e);
    };
    
    this.resizeZoom = function() {
      if (!self.zoomactive) return;

      var py = self.getScrollTop(); //preserve scrolling position
      self.win.css({
        width:$(window).width()-self.zoomrestore.padding.w+"px",
        height:$(window).height()-self.zoomrestore.padding.h+"px"
      });
      self.onResize();
      
      self.setScrollTop(Math.min(self.page.maxh,py));
    };
   
    this.init();
    
    $.nicescroll.push(this);

  };
  
// Inspired by the work of Kin Blas
// http://webpro.host.adobe.com/people/jblas/momentum/includes/jquery.momentum.0.7.js  
  
  
  var ScrollMomentumClass2D = function(nc) {
    var self = this;
    this.nc = nc;
    
    this.lastx = 0;
    this.lasty = 0;
    this.speedx = 0;
    this.speedy = 0;
    this.lasttime = 0;
    this.steptime = 0;
    this.snapx = false;
    this.snapy = false;
    this.demulx = 0;
    this.demuly = 0;
    
    this.lastscrollx = -1;
    this.lastscrolly = -1;
    
    this.chkx = 0;
    this.chky = 0;
    
    this.timer = 0;
    
    this.time = function() {
      return +new Date();//beautifull hack
    };
    
    this.reset = function(px,py) {
      self.stop();
      var now = self.time();
      self.steptime = 0;
      self.lasttime = now;
      self.speedx = 0;
      self.speedy = 0;
      self.lastx = px;
      self.lasty = py;
      self.lastscrollx = -1;
      self.lastscrolly = -1;
    };
    
    this.update = function(px,py) {
      var now = self.time();
      self.steptime = now - self.lasttime;
      self.lasttime = now;      
      var dy = py - self.lasty;
      var dx = px - self.lastx;
      var sy = self.nc.getScrollTop();
      var sx = self.nc.getScrollLeft();
      var newy = sy + dy;
      var newx = sx + dx;
      self.snapx = (newx<0)||(newx>self.nc.page.maxw);
      self.snapy = (newy<0)||(newy>self.nc.page.maxh);
      self.speedx = dx;
      self.speedy = dy;
      self.lastx = px;
      self.lasty = py;
    };
    
    this.stop = function() {
      self.nc.unsynched("domomentum2d");
      if (self.timer) clearTimeout(self.timer);
      self.timer = 0;
      self.lastscrollx = -1;
      self.lastscrolly = -1;
    };
    
    this.doSnapy = function(nx,ny) {
      var snap = false;
      
      if (ny<0) {
        ny=0;
        snap=true;        
      } 
      else if (ny>self.nc.page.maxh) {
        ny=self.nc.page.maxh;
        snap=true;
      }

      if (nx<0) {
        nx=0;
        snap=true;        
      } 
      else if (nx>self.nc.page.maxw) {
        nx=self.nc.page.maxw;
        snap=true;
      }
      
      if (snap) self.nc.doScrollPos(nx,ny,self.nc.opt.snapbackspeed);
    };
    
    this.doMomentum = function(gp) {
      var t = self.time();
      var l = (gp) ? t+gp : self.lasttime;

      var sl = self.nc.getScrollLeft();
      var st = self.nc.getScrollTop();
      
      var pageh = self.nc.page.maxh;
      var pagew = self.nc.page.maxw;
      
      self.speedx = (pagew>0) ? Math.min(60,self.speedx) : 0;
      self.speedy = (pageh>0) ? Math.min(60,self.speedy) : 0;
      
      var chk = l && (t - l) <= 60;
      
      if ((st<0)||(st>pageh)||(sl<0)||(sl>pagew)) chk = false;
      
      var sy = (self.speedy && chk) ? self.speedy : false;
      var sx = (self.speedx && chk) ? self.speedx : false;
      
      if (sy||sx) {
        var tm = Math.max(16,self.steptime); //timeout granularity
        
        if (tm>50) {  // do smooth
          var xm = tm/50;
          self.speedx*=xm;
          self.speedy*=xm;
          tm = 50;
        }
        
        self.demulxy = 0;

        self.lastscrollx = self.nc.getScrollLeft();
        self.chkx = self.lastscrollx;
        self.lastscrolly = self.nc.getScrollTop();
        self.chky = self.lastscrolly;
        
        var nx = self.lastscrollx;
        var ny = self.lastscrolly;
        
        var onscroll = function(){
          var df = ((self.time()-t)>600) ? 0.04 : 0.02;
        
          if (self.speedx) {
            nx = Math.floor(self.lastscrollx - (self.speedx*(1-self.demulxy)));
            self.lastscrollx = nx;
            if ((nx<0)||(nx>pagew)) df=0.10;
          }

          if (self.speedy) {
            ny = Math.floor(self.lastscrolly - (self.speedy*(1-self.demulxy)));
            self.lastscrolly = ny;
            if ((ny<0)||(ny>pageh)) df=0.10;
          }
          
          self.demulxy = Math.min(1,self.demulxy+df);
          
          self.nc.synched("domomentum2d",function(){

            if (self.speedx) {
              var scx = self.nc.getScrollLeft();
              if (scx!=self.chkx) self.stop();
              self.chkx=nx;
              self.nc.setScrollLeft(nx);
            }
          
            if (self.speedy) {
              var scy = self.nc.getScrollTop();
              if (scy!=self.chky) self.stop();          
              self.chky=ny;
              self.nc.setScrollTop(ny);
            }
            
            if(!self.timer) {
              self.nc.hideCursor();
              self.doSnapy(nx,ny);
            }
            
          });
          
          if (self.demulxy<1) {            
            self.timer = setTimeout(onscroll,tm);
          } else {
            self.stop();
            self.nc.hideCursor();
            self.doSnapy(nx,ny);
          }
        };
        
        onscroll();
        
      } else {
        self.doSnapy(self.nc.getScrollLeft(),self.nc.getScrollTop());
      }      
      
    }
    
  };

  
// override jQuery scrollTop
 
  var _scrollTop = jQuery.fn.scrollTop; // preserve original function
   
  jQuery.cssHooks["pageYOffset"] = {
    get: function(elem,computed,extra) {      
      var nice = $.data(elem,'__nicescroll')||false;
      return (nice&&nice.ishwscroll) ? nice.getScrollTop() : _scrollTop.call(elem);
    },
    set: function(elem,value) {
      var nice = $.data(elem,'__nicescroll')||false;    
      (nice&&nice.ishwscroll) ? nice.setScrollTop(parseInt(value)) : _scrollTop.call(elem,value);
      return this;
    }
  };
  
/*  
  $.fx.step["scrollTop"] = function(fx){    
    $.cssHooks["scrollTop"].set( fx.elem, fx.now + fx.unit );
  };
*/  
  
  jQuery.fn.scrollTop = function(value) {    
    if (typeof value == "undefined") {
      var nice = (this[0]) ? $.data(this[0],'__nicescroll')||false : false;
      return (nice&&nice.ishwscroll) ? nice.getScrollTop() : _scrollTop.call(this);
    } else {      
      return this.each(function() {
        var nice = $.data(this,'__nicescroll')||false;
        (nice&&nice.ishwscroll) ? nice.setScrollTop(parseInt(value)) : _scrollTop.call($(this),value);
      });
    }
  }

// override jQuery scrollLeft
 
  var _scrollLeft = jQuery.fn.scrollLeft; // preserve original function
   
  $.cssHooks.pageXOffset = {
    get: function(elem,computed,extra) {
      var nice = $.data(elem,'__nicescroll')||false;
      return (nice&&nice.ishwscroll) ? nice.getScrollLeft() : _scrollLeft.call(elem);
    },
    set: function(elem,value) {
      var nice = $.data(elem,'__nicescroll')||false;    
      (nice&&nice.ishwscroll) ? nice.setScrollLeft(parseInt(value)) : _scrollLeft.call(elem,value);
      return this;
    }
  };
  
/*  
  $.fx.step["scrollLeft"] = function(fx){
    $.cssHooks["scrollLeft"].set( fx.elem, fx.now + fx.unit );
  };  
*/  
 
  jQuery.fn.scrollLeft = function(value) {    
    if (typeof value == "undefined") {
      var nice = (this[0]) ? $.data(this[0],'__nicescroll')||false : false;
      return (nice&&nice.ishwscroll) ? nice.getScrollLeft() : _scrollLeft.call(this);
    } else {
      return this.each(function() {     
        var nice = $.data(this,'__nicescroll')||false;
        (nice&&nice.ishwscroll) ? nice.setScrollLeft(parseInt(value)) : _scrollLeft.call($(this),value);
      });
    }
  }
  
  var NiceScrollArray = function(doms) {
    var self = this;
    this.length = 0;
    this.name = "nicescrollarray";
  
    this.each = function(fn) {
      for(var a=0,i=0;a<self.length;a++) fn.call(self[a],i++);
      return self;
    };
    
    this.push = function(nice) {
      self[self.length]=nice;
      self.length++;
    };
    
    this.eq = function(idx) {
      return self[idx];
    };
    
    if (doms) {
      for(a=0;a<doms.length;a++) {
        var nice = $.data(doms[a],'__nicescroll')||false;
        if (nice) {
          this[this.length]=nice;
          this.length++;
        }
      };
    }
    
    return this;
  };
  
  function mplex(el,lst,fn) {
    for(var a=0;a<lst.length;a++) fn(el,lst[a]);
  };  
  mplex(
    NiceScrollArray.prototype,
    ['show','hide','toggle','onResize','resize','remove','stop','doScrollPos'],
    function(e,n) {
      e[n] = function(){
        var args = arguments;
        return this.each(function(){          
          this[n].apply(this,args);
        });
      };
    }
  );  
  
  jQuery.fn.getNiceScroll = function(index) {
    if (typeof index == "undefined") {
      return new NiceScrollArray(this);
    } else {      
      var nice = this[index]&&$.data(this[index],'__nicescroll')||false;
      return nice;
    }
  };
  
  jQuery.extend(jQuery.expr[':'], {
    nicescroll: function(a) {
      return ($.data(a,'__nicescroll'))?true:false;
    }
  });  
  
  $.fn.niceScroll = function(wrapper,opt) {        
    if (typeof opt=="undefined") {
      if ((typeof wrapper=="object")&&!("jquery" in wrapper)) {
        opt = wrapper;
        wrapper = false;        
      }
    }
    var ret = new NiceScrollArray();
    if (typeof opt=="undefined") opt = {};
    
    if (wrapper||false) {      
      opt.doc = $(wrapper);
      opt.win = $(this);
    }    
    var docundef = !("doc" in opt);   
    if (!docundef&&!("win" in opt)) opt.win = $(this);    
    
    this.each(function() {
      var nice = $(this).data('__nicescroll')||false;
      if (!nice) {
        opt.doc = (docundef) ? $(this) : opt.doc;
        nice = new NiceScrollClass(opt,$(this));        
        $(this).data('__nicescroll',nice);
      }
      ret.push(nice);
    });
    return (ret.length==1) ? ret[0] : ret;
  };
  
  window.NiceScroll = {
    getjQuery:function(){return jQuery}
  };
  
  if (!$.nicescroll) {
   $.nicescroll = new NiceScrollArray();
   $.nicescroll.options = _globaloptions;
  }
  
})( jQuery );
  var enableType = '1';
var winheight = '';
(function($){
    $.mobilewebapp = (function(){
        return {
            init: function(){
                winheight = $(window).height();
                if(typeof (jqcc.chatmobilewebapp)!=='undefined'){
                    jqcc.chatmobilewebapp.chatinit();
                }
                jqcc.mobilewebapp.detect();
            },
            addscroll: function(){
                $.browser.device = (/iphone|ipad/i.test(navigator.userAgent.toLowerCase()));
                if($.browser.device==false){
                    setTimeout(function(){
                        chatScroll = $("#chatcontent").niceScroll({horizrailenabled: false, bouncescroll: true, nativeparentscrolling: true, railalign: "right"});
                        chatroomScroll = $("#chatroomcontent").niceScroll({horizrailenabled: false, bouncescroll: true, nativeparentscrolling: true});
                        lobbyScroll = $("#lobbycontent").niceScroll({horizrailenabled: false, bouncescroll: true, nativeparentscrolling: true});
                        woScroll = $("#wocontent").niceScroll({horizrailenabled: false, bouncescroll: true, nativeparentscrolling: true});
                        cruserScroll = $("#chatroomusercontent").niceScroll({horizrailenabled: false, bouncescroll: true, nativeparentscrolling: true});
                    }, 200);
                }
            },
            detect: function(){
                if(window.orientation==90||window.orientation==-90){
                    $("div.chatlink_icon").css({'height':'20px', 'top':'15px'});
                    $("div.chatroomlink_icon").css({'height':'20px', 'top':'15px'});
                    $('div.chatlink_txt').css('display', 'none');
                    $('div.chatroomlink_txt').css('display', 'none');
                }else{
                    $("div.chatlink_icon").css({'height':'30px', 'top':'-1px'});
                    $("div.chatroomlink_icon").css({'height':'30px', 'top':'-1px'});
                    $('div.chatlink_txt').css('display', 'block');
                    $('div.chatroomlink_txt').css('display', 'block');
                }
                var headerHeight;
                var baseHeight = window.innerHeight;
                var footerbtnHeight = 0;
                var footerHeight = $("#chatfooter").outerHeight();
                var cheaderHeight = $('#cheader').height();
                var crheaderHeight = $('#crheadertop').height();
                var footerCRHeight = $("#chatroomfooter").outerHeight();
                var headerHeight = $('#header').height();
                if($('#footer').length==0){
                    footerbtnHeight = 0;
                }else{
                    footerbtnHeight = $('#footer').height();
                }
                $('body').css({'height':(baseHeight)+'px', 'min-height':(baseHeight)+'px', 'max-height':(baseHeight)+'px', 'width':'100%'});
                $.browser.device = (/ipad/i.test(navigator.userAgent.toLowerCase()));
                if($.browser.device==true){
                    $("#options").css('width', '20%');
                    $("div.chatoptions").css('width', '20%');
                    $("#lobbyhome").css('width', '20%');
                    $("#buddyhome").css('width', '20%');
                    $("#backbtnChat").css('width', '20%');
                    $("#backbtnChatroom").css('width', '20%');
                    $("#backbtnChatroomuser").css('width', '20%');
                    $("#backbtnCreateChatroom").css('width', '20%');
                    if(window.orientation==90||window.orientation==-90){
                        if(baseHeight<winheight){
                            $("#chatroomcontent").css('height', '86.5%');
                            $("#chatcontent").css('height', '86.5%');
                        }else{
                            $("#chatroomcontent").css('height', (baseHeight-crheaderHeight-footerHeight-50)+'px');
                            $("#chatcontent").css('height', (baseHeight-cheaderHeight-footerHeight+5)+'px');
                        }
                    }else{
                        if(baseHeight<winheight){
                            $("#chatroomcontent").css('height', '90%');
                            $("#chatcontent").css('height', '90%');
                        }else{
                            $("#chatroomcontent").css('height', (baseHeight-crheaderHeight-footerHeight-50)+'px');
                            $("#chatcontent").css('height', (baseHeight-cheaderHeight-footerHeight+5)+'px');
                        }
                    }
                }
                $.browser.device = (/android|iphone|ipad/i.test(navigator.userAgent.toLowerCase()));
                if($.browser.device==false){
                    $("#chatcontent").css({'height':(baseHeight-headerHeight-footerHeight)+'px', 'min-height':(baseHeight-headerHeight-footerHeight)+'px', 'max-height':(baseHeight-headerHeight-footerHeight)+'px'}).getNiceScroll().resize();
                    $("#chatroomcontent").css({'height':(baseHeight-headerHeight-footerCRHeight)+'px', 'min-height':(baseHeight-headerHeight-footerCRHeight)+'px', 'max-height':(baseHeight-headerHeight-footerCRHeight)+'px'}).getNiceScroll().resize();
                    $("#chatroomusercontent").css({'max-height':(baseHeight-headerHeight)+'px !important', 'bottom':'1px', 'overflow-y':'auto'}).getNiceScroll().resize();
                }
                $.browser.device = (/android|iphone/i.test(navigator.userAgent.toLowerCase()));
                if($.browser.device==true){
                    if(window.orientation==90||window.orientation==-90){
                        var baseinnerHeight = window.innerHeight;
                        var baseHeight = $(window).height();
                        var headtop = baseHeight-baseinnerHeight;
                        $("#chatfooter").css({'position':'', 'bottom':'0', 'height':'50px', 'width':'100%'});
                        $("#chatroomfooter").css({'position':'', 'bottom':'0', 'height':'50px', 'width':'100%'});
                        $("#cheader").css({'position':'fixed', 'top':headtop+'px !important', 'height':'42px', 'width':'100%'});
                        $("#crheadertop").css({'position':'fixed', 'top':headtop+'px !important', 'height':'42px', 'width':'100%'});
                        $('#opt').css('top', (headtop+42)+'px');
                        var chathead = $('#cheader').height();
                        var chatfooter = $('#chatfooter').height();
                        var chatroomhead = $('#crheadertop').height();
                        var chatroomfooter = $('#chatroomfooter').height();
                        $("#chatcontent").css({'position':'', 'overflow-y':'scroll', 'height':(baseinnerHeight-chathead-chatfooter)+'px', 'width':'100%', 'bottom':'50px'});
                        $("#chatroomcontent").css({'position':'', 'overflow-y':'scroll', 'height':(baseinnerHeight-chatroomhead-chatroomfooter)+'px', 'width':'100%', 'bottom':'50px'});
                    }else{
                        $("#chatfooter").css({'position':'', 'bottom':'0', 'height':'50px', 'width':'100%'});
                        $("#chatroomfooter").css({'position':'', 'bottom':'0', 'height':'50px', 'width':'100%'});
                        $("#cheader").css({'position':'', 'top':'0px', 'height':'42px', 'width':'100%'});
                        $("#crheadertop").css({'position':'', 'top':'0px', 'height':'42px', 'width':'100%'});
                        var baseHeight = $(window).height();
                        var chathead = $('#cheader').height();
                        var chatfooter = $('#chatfooter').height();
                        var chatroomhead = $('#crheadertop').height();
                        var chatroomfooter = $('#chatroomfooter').height();
                        $("#chatcontent").css({'position':'', 'overflow-y':'scroll', 'height':(baseHeight-chathead-chatfooter)+'px', 'width':'100%', 'bottom':'50px'});
                        $("#chatroomcontent").css({'position':'', 'overflow-y':'scroll', 'height':(baseHeight-chatroomhead-chatroomfooter)+'px', 'width':'100%', 'bottom':'50px'});
                    }
                    $("#chatroomusercontent").css({'position':'', 'overflow-y':'scroll', 'max-height':(baseinnerHeight-headerHeight)+'px', 'min-height':(baseinnerHeight-headerHeight)+'px', 'height':(baseinnerHeight-headerHeight)+'px', 'width':'100%', 'bottom':'1px'});
                }
                $("#chatroom").css({'height':(baseHeight)+'px', 'min-height':(baseHeight)+'px', 'max-height':(baseHeight)+'px'});
                var baseinnerHeight = window.innerHeight;
                var head = $('#header').height();
                var footer = $('#footer').height();
                $("#wocontent").css({'bottom':footerbtnHeight+'px', 'height':(baseinnerHeight-head-footer)+'px', 'min-height':(baseinnerHeight-head-footer)+'px', 'max-height':(baseinnerHeight-head-footer)+'px'});
                $("#lobbycontent").css({'bottom':footerbtnHeight+'px', 'height':(baseinnerHeight-head-footer)+'px', 'min-height':(baseinnerHeight-head-footer)+'px', 'max-height':(baseinnerHeight-head-footer)+'px'});
                if(typeof (jqcc.chatmobilewebapp)!=='undefined'){
                    jqcc.chatmobilewebapp.chatdetect();
                }
                if(typeof (jqcc.mobilewebapp.chatroomdetect)=='function'){
                    jqcc.mobilewebapp.chatroomdetect();
                }
            },
            buddyList: function(data){
                if(typeof (jqcc.chatmobilewebapp)!=='undefined'){
                    jqcc.chatmobilewebapp.chatbuddyList(data);
                }                
            },
            userStatus: function(item){
                jqcc.cometchat.setThemeVariable('userid', item.id);
                jqcc.cometchat.setThemeArray('buddylistStatus', item.id, item.status);
                jqcc.cometchat.setThemeArray('buddylistMessage', item.id, item.message);
                jqcc.cometchat.setThemeArray('buddylistName', item.id, item.n);
                jqcc.cometchat.setThemeArray('buddylistAvatar', item.id, item.a);
                jqcc.cometchat.setThemeArray('buddylistLink', item.id, item.l);
            },
            loadData: function(id, data){
                if(typeof (jqcc.chatmobilewebapp)!=='undefined'){
                    jqcc.chatmobilewebapp.chatloadData(id, data);
                }
            },
            txtfocus: function(){
                $('#cometchat_container_report').find('.cometchat_closebox').click();
                $('#opt').css('display', 'none');
            },
            get_user: function(){
                var searchc = document.getElementById('searchtxt').value;
                $("li.userlists").css("display", "none");
                $("span.search_name:containsIgnoreCase('"+searchc+"')").parent().parent().css("display", "block");
            },
            get_chatroom: function(){
                var searchc = document.getElementById('searchtxtCR').value;
                //console.log (searchc);
                $("li.crlists").css("display", "none");
                $("span.lobby_room_1:contains('"+searchc+"')").parent().parent().css("display", "block");
            },
            pathRedirect: function(showdiv){
                $("#buddy").hide();
                $("#lobby").hide();
                $("#chat").hide();
                $("#chatroom").hide();
                $("#chatroomuser").hide();
                $("#createChatroom").hide();
                if(showdiv!=''){
                    if(showdiv=='#lobby'){
                        $("#lobby").css('display', 'block');
                    }else if(showdiv=='#buddy'){
                        $("#buddy").css('display', 'block');
                    }else{
                        $(showdiv).css('display', 'block');
                    }
                }else{
                    $("#buddy").css('display', 'block');
                }
            },
            loggedOut: function(){
                alert(jqcc.cometchat.getLanguage(56));
                location.href = jqcc.cometchat.getBaseUrl()+'../';
            },
            scrollToBottom: function(){
                if($('#cwlist').length > 0 && $('#cwlist').find("li").length > 0)
                    $('#chatcontent').scrollTop($('#cwlist').find("li").last().position().top+$('#cwlist').find("li").last().height());
            },
            crscrollToBottom: function(){
                if($('#currentroom_convotext').find('div').length)
                    $('#chatroomcontent').scrollTop($('#currentroom_convotext').find('div').last().position().top+$('#currentroom_convotext').find('div').last().height());
            },
            refreshLists: function(id){
                $('#'+id).listview("refresh");
            },
            addChatroomMessage: function(fromid, incomingmessage, incomingid, selfadded, sent, fromname){
                jqcc.mobilewebapp.ChatroomMessage(fromid, incomingmessage, incomingid, selfadded, sent, fromname);
            },
            loadChatbox: function(){
                jqcc.mobilewebapp.pathRedirect('#chat');
            },
            loadChatboxReverse: function(){
                jqcc.mobilewebapp.pathRedirect('#buddy');
                if(typeof (jqcc.chatmobilewebapp)!=='undefined'){
                    jqcc.chatmobilewebapp.back();
                }
                $('#buddy_link').click();
            },
            loadChatroom: function(){
                jqcc.mobilewebapp.pathRedirect('#chatroom');
            },
            loadChatroomReverse: function(){
                jqcc.mobilewebapp.pathRedirect('#chatroom');
            },
            loadLobbyReverse: function(){
                jqcc.mobilewebapp.pathRedirect('#lobby');
                if(typeof (jqcc.mobilewebapp)!=='undefined'){
                    jqcc.mobilewebapp.backchatroom();
                }
                $('#chatroomlink').click();
            },
            showChatroomUser: function(){
                jqcc.mobilewebapp.pathRedirect('#chatroomuser');
            },
            chatwith: function(){
                jqcc.mobilewebapp.pathRedirect('#chat');
                return true;
            },
            createChatroom: function(){
                jqcc.mobilewebapp.pathRedirect('#createChatroom');
            },
            refreshPage: function(){
                location.reload();
            },
            getCookieInfo: function(cookieName){
                var i, x, y, ARRcookies = document.cookie.split(";");
                for(i = 0; i<ARRcookies.length; i++)
                {
                    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
                    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
                    x = x.replace(/^\s+|\s+$/g, "");
                    if(x==cookieName){
                        return unescape(y);
                    }
                }
            },
            addMessages: function(data){
                if(typeof (jqcc.chatmobilewebapp)!=='undefined'){
                    jqcc.chatmobilewebapp.attachMessage(data);
                }
            },
            loadUserData: function(id, data){
                if(typeof (jqcc.chatmobilewebapp)!=='undefined'){
                    jqcc.chatmobilewebapp.chatloadUserData(id, data);
                }
            },
            checkSmiley: function(message){
                message = message.replace('\ud83d\udd51', ' :clock2: ');
                message = message.replace('\ud83d\udd5d', ' :clock230: ');
                message = message.replace('\ud83d\udd52', ' :clock3: ');
                message = message.replace('\ud83d\udd5e', ' :clock330: ');
                message = message.replace('\ud83d\udd53', ' :clock4: ');
                message = message.replace('\ud83d\udd5f', ' :clock430: ');
                message = message.replace('\ud83d\udd54', ' :clock5: ');
                message = message.replace('\ud83d\udd60', ' :clock530: ');
                message = message.replace('\ud83d\udd55', ' :clock6: ');
                message = message.replace('\ud83d\udd61', ' :clock630: ');
                message = message.replace('\ud83d\udd56', ' :clock7: ');
                message = message.replace('\ud83d\udd62', ' :clock730: ');
                message = message.replace('\ud83d\udd57', ' :clock8: ');
                message = message.replace('\ud83d\udd63', ' :clock830: ');
                message = message.replace('\ud83d\udd58', ' :clock9: ');
                message = message.replace('\ud83d\udd64', ' :clock930: ');
                message = message.replace('\u3297', ' :congratulations: ');
                message = message.replace('\ud83c\udd92', ' :cool: ');
                message = message.replace('\u00a9', ' :copyright: ');
                message = message.replace('\u27b0', ' :curly_loop: ');
                message = message.replace('\ud83d\udcb1', ' :currency_exchange: ');
                message = message.replace('\ud83d\udec3', ' :customs: ');
                message = message.replace('\ud83d\udca0', ' :diamond_shape_with_a_dot_inside: ');
                message = message.replace('\ud83d\udeaf', ' :do_not_litter: ');
                message = message.replace('\u0038\u20e3', ' :eight: ');
                message = message.replace('\u2734', ' :eight_pointed_black_star: ');
                message = message.replace('\u2733', ' :eight_spoked_asterisk: ');
                message = message.replace('\ud83d\udd1a', ' :end: ');
                message = message.replace('\u23e9', ' :fast_forward: ');
                message = message.replace('\u0035\u20e3', ' :five: ');
                message = message.replace('\u0034\u20e3', ' :four: ');
                message = message.replace('\ud83c\udd93', ' :free: ');
                message = message.replace('\u264a', ' :gemini: ');
                message = message.replace('\u0023\u20e3', ' :hash: ');
                message = message.replace('\ud83d\udc9f', ' :heart_decoration: ');
                message = message.replace('\u2714', ' :heavy_check_mark: ');
                message = message.replace('\u2797', ' :heavy_division_sign: ');
                message = message.replace('\ud83d\udcb2', ' :heavy_dollar_sign: ');
                message = message.replace('\u2757', ' :heavy_exclamation_mark: ');
                message = message.replace('\u2796', ' :heavy_minus_sign: ');
                message = message.replace('\u2716', ' :heavy_multiplication_x: ');
                message = message.replace('\u2795', ' :heavy_plus_sign: ');
                message = message.replace('\ud83c\udd94', ' :id: ');
                message = message.replace('\ud83c\ude50', ' :ideograph_advantage: ');
                message = message.replace('\u2139', ' :information_source: ');
                message = message.replace('\u2049', ' :interrobang: ');
                message = message.replace('\ud83d\udd1f', ' :keycap_ten: ');
                message = message.replace('\ud83c\ude01', ' :koko: ');
                message = message.replace('\ud83d\udd35', ' :large_blue_circle: ');
                message = message.replace('\ud83d\udd37', ' :large_blue_diamond: ');
                message = message.replace('\ud83d\udd36', ' :large_orange_diamond: ');
                message = message.replace('\ud83d\udec5', ' :left_luggage: ');
                message = message.replace('\u2194', ' :left_right_arrow: ');
                message = message.replace('\u21a9', ' :leftwards_arrow_with_hook: ');
                message = message.replace('\u264c', ' :leo: ');
                message = message.replace('\u264e', ' :libra: ');
                message = message.replace('\ud83d\udd17', ' :link: ');
                message = message.replace('\u24c2', ' :m: ');
                message = message.replace('\ud83d\udeb9', ' :mens: ');
                message = message.replace('\ud83d\ude87', ' :metro: ');
                message = message.replace('\ud83d\udcf4', ' :mobile_phone_off: ');
                message = message.replace('\u274e', ' :negative_squared_cross_mark: ');
                message = message.replace('\ud83c\udd95', ' :new: ');
                message = message.replace('\ud83c\udd96', ' :ng: ');
                message = message.replace('\u0039\u20e3', ' :nine: ');
                message = message.replace('\ud83d\udeb3', ' :no_bicycles: ');
                message = message.replace('\u26d4', ' :no_entry: ');
                message = message.replace('\ud83d\udeab', ' :no_entry_sign: ');
                message = message.replace('\ud83d\udcf5', ' :no_mobile_phones: ');
                message = message.replace('\ud83d\udeb7', ' :no_pedestrians: ');
                message = message.replace('\ud83d\udead', ' :no_smoking: ');
                message = message.replace('\ud83d\udeb1', ' :non-potable_water: ');
                message = message.replace('\u2b55', ' :o: ');
                message = message.replace('\ud83c\udd7e', ' :o2: ');
                message = message.replace('\ud83c\udd97', ' :ok: ');
                message = message.replace('\ud83d\udd1b', ' :on: ');
                message = message.replace('\u0031\u20e3', ' :one: ');
                message = message.replace('\u26ce', ' :ophiuchus: ');
                message = message.replace('\ud83c\udd7f', ' :parking: ');
                message = message.replace('\u303d', ' :part_alternation_mark: ');
                message = message.replace('\ud83d\udec2', ' :passport_control: ');
                message = message.replace('\u2653', ' :pisces: ');
                message = message.replace('\ud83d\udeb0', ' :potable_water: ');
                message = message.replace('\ud83d\udeae', ' :put_litter_in_its_place: ');
                message = message.replace('\ud83d\udd18', ' :radio_button: ');
                message = message.replace('\u267b', ' :recycle: ');
                message = message.replace('\ud83d\udd34', ' :red_circle: ');
                message = message.replace('\u00ae', ' :registered: ');
                message = message.replace('\ud83d\udd01', ' :repeat: ');
                message = message.replace('\ud83d\udd02', ' :repeat_one: ');
                message = message.replace('\ud83d\udebb', ' :restroom: ');
                message = message.replace('\u23ea', ' :rewind: ');
                message = message.replace('\ud83c\ude02', ' :sa: ');
                message = message.replace('\u2650', ' :sagittarius: ');
                message = message.replace('\u264f', ' :scorpius: ');
                message = message.replace('\u3299', ' :secret: ');
                message = message.replace('\u0037\u20e3', ' :seven: ');
                message = message.replace(':shipit:', ' :shipit: ');
                message = message.replace('\ud83d\udcf6', ' :signal_strength: ');
                message = message.replace('\u0036\u20e3', ' :six: ');
                message = message.replace('\ud83d\udd2f', ' :six_pointed_star: ');
                message = message.replace('\ud83d\udd39', ' :small_blue_diamond: ');
                message = message.replace('\ud83d\udd38', ' :small_orange_diamond: ');
                message = message.replace('\ud83d\udd3a', ' :small_red_triangle: ');
                message = message.replace('\ud83d\udd3b', ' :small_red_triangle_down: ');
                message = message.replace('\ud83d\udd1c', ' :soon: ');
                message = message.replace('\ud83c\udd98', ' :sos: ');
                message = message.replace('\ud83d\udd23', ' :symbols1: ');
                message = message.replace('\u2649', ' :taurus: ');
                message = message.replace('\u0033\u20e3', ' :three: ');
                message = message.replace('\u2122', ' :tm: ');
                message = message.replace('\ud83d\udd1d', ' :top: ');
                message = message.replace('\ud83d\udd31', ' :trident: ');
                message = message.replace('\ud83d\udd00', ' :twisted_rightwards_arrows: ');
                message = message.replace('\u0032\u20e3', ' :two: ');
                message = message.replace('\ud83c\ude39', ' :u5272: ');
                message = message.replace('\ud83c\ude34', ' :u5408: ');
                message = message.replace('\ud83c\ude3a', ' :u55b6: ');
                message = message.replace('\ud83c\ude2f', ' :u6307: ');
                message = message.replace('\ud83c\ude37', ' :u6708: ');
                message = message.replace('\ud83c\ude36', ' :u6709: ');
                message = message.replace('\ud83c\ude35', ' :u6e80: ');
                message = message.replace('\ud83c\ude1a', ' :u7121: ');
                message = message.replace('\ud83c\ude38', ' :u7533: ');
                message = message.replace('\ud83c\ude32', ' :u7981: ');
                message = message.replace('\ud83c\ude33', ' :u7a7a: ');
                message = message.replace('\ud83d\udd1e', ' :underage: ');
                message = message.replace('\ud83c\udd99', ' :up: ');
                message = message.replace('\ud83d\udcf3', ' :vibration_mode: ');
                message = message.replace('\u264d', ' :virgo: ');
                message = message.replace('\ud83c\udd9a', ' :vs: ');
                message = message.replace('\u3030', ' :wavy_dash: ');
                message = message.replace('\ud83d\udebe', ' :wc: ');
                message = message.replace('\u267f', ' :wheelchair: ');
                message = message.replace('\u2705', ' :white_check_mark: ');
                message = message.replace('\u26aa', ' :white_circle: ');
                message = message.replace('\ud83d\udcae', ' :white_flower: ');
                message = message.replace('\u25fb', ' :white_square: ');
                message = message.replace('\ud83d\udd33', ' :white_square_button: ');
                message = message.replace('\ud83d\udeba', ' :womens: ');
                message = message.replace('\u274c', ' :x: ');
                message = message.replace('\u0030\u20e3', ' :zero: ');
                message = message.replace('\u2708', ' :airplane: ');
                message = message.replace('\ud83d\ude91', ' :ambulance: ');
                message = message.replace('\u2693', ' :anchor: ');
                message = message.replace('\ud83d\ude9b', ' :articulated_lorry: ');
                message = message.replace('\ud83c\udfe7', ' :atm: ');
                message = message.replace('\ud83c\udfe6', ' :bank: ');
                message = message.replace('\ud83d\udc88', ' :barber: ');
                message = message.replace('\ud83d\udd30', ' :beginner: ');
                message = message.replace('\ud83d\udeb2', ' :bike: ');
                message = message.replace('\ud83d\ude99', ' :blue_car: ');
                message = message.replace('\u26f5', ' :boat: ');
                message = message.replace('\ud83c\udf09', ' :bridge_at_night: ');
                message = message.replace('\ud83d\ude85', ' :bullettrain_front: ');
                message = message.replace('\ud83d\ude84', ' :bullettrain_side: ');
                message = message.replace('\ud83d\ude8c', ' :bus: ');
                message = message.replace('\ud83d\ude8f', ' :busstop: ');
                message = message.replace('\ud83d\ude97', ' :car: ');
                message = message.replace('\ud83c\udfa0', ' :carousel_horse: ');
                message = message.replace('\ud83c\udfc1', ' :checkered_flag: ');
                message = message.replace('\u26ea', ' :church: ');
                message = message.replace('\ud83c\udfaa', ' :circus_tent: ');
                message = message.replace('\ud83c\udf07', ' :city_sunrise: ');
                message = message.replace('\ud83c\udf06', ' :city_sunset: ');
                message = message.replace('\ud83c\udde8\ud83c\uddf3', ' :cn: ');
                message = message.replace('\ud83d\udea7', ' :construction: ');
                message = message.replace('\ud83c\udfea', ' :convenience_store: ');
                message = message.replace('\ud83c\udf8c', ' :crossed_flags: ');
                message = message.replace('\ud83c\udde9\ud83c\uddea', ' :de: ');
                message = message.replace('\ud83c\udfec', ' :department_store: ');
                message = message.replace('\ud83c\uddea\ud83c\uddf8', ' :es: ');
                message = message.replace('\ud83c\udff0', ' :european_castle: ');
                message = message.replace('\ud83c\udfe4', ' :european_post_office: ');
                message = message.replace('\ud83c\udfed', ' :factory: ');
                message = message.replace('\ud83c\udfa1', ' :ferris_wheel: ');
                message = message.replace('\ud83d\ude92', ' :fire_engine: ');
                message = message.replace('\u26f2', ' :fountain: ');
                message = message.replace('\ud83c\uddeb\ud83c\uddf7', ' :fr: ');
                message = message.replace('\u26fd', ' :fuelpump: ');
                message = message.replace('\ud83c\uddec\ud83c\udde7', ' :gb: ');
                message = message.replace('\ud83d\ude81', ' :helicopter: ');
                message = message.replace('\ud83c\udfe5', ' :hospital: ');
                message = message.replace('\ud83c\udfe8', ' :hotel: ');
                message = message.replace('\u2668', ' :hotsprings: ');
                message = message.replace('\ud83c\udfe0', ' :house: ');
                message = message.replace('\ud83c\udfe1', ' :house_with_garden: ');
                message = message.replace('\ud83c\uddee\ud83c\uddf9', ' :it: ');
                message = message.replace('\ud83c\udfee', ' :izakaya_lantern: ');
                message = message.replace('\ud83d\uddfe', ' :japan: ');
                message = message.replace('\ud83c\udfef', ' :japanese_castle: ');
                message = message.replace('\ud83c\uddef\ud83c\uddf5', ' :jp: ');
                message = message.replace('\ud83c\uddf0\ud83c\uddf7', ' :kr: ');
                message = message.replace('\ud83d\ude88', ' :light_rail: ');
                message = message.replace('\ud83c\udfe9', ' :love_hotel: ');
                message = message.replace('\ud83d\ude90', ' :minibus: ');
                message = message.replace('\ud83d\ude9d', ' :monorail: ');
                message = message.replace('\ud83d\uddfb', ' :mount_fuji: ');
                message = message.replace('\ud83d\udea0', ' :mountain_cableway: ');
                message = message.replace('\ud83d\ude9e', ' :mountain_railway: ');
                message = message.replace('\ud83d\uddff', ' :moyai: ');
                message = message.replace('\ud83c\udfe2', ' :office: ');
                message = message.replace('\ud83d\ude98', ' :oncoming_automobile: ');
                message = message.replace('\ud83d\ude8d', ' :oncoming_bus: ');
                message = message.replace('\ud83d\ude94', ' :oncoming_police_car: ');
                message = message.replace('\ud83d\ude96', ' :oncoming_taxi: ');
                message = message.replace('\ud83c\udfad', ' :performing_arts: ');
                message = message.replace('\ud83d\ude93', ' :police_car: ');
                message = message.replace('\ud83c\udfe3', ' :post_office: ');
                message = message.replace('\ud83d\ude83', ' :railway_car: ');
                message = message.replace('\ud83c\udf08', ' :rainbow: ');
                message = message.replace('\ud83d\ude97', ' :red_car: ');
                message = message.replace('\ud83d\ude80', ' :rocket: ');
                message = message.replace('\ud83c\udfa2', ' :roller_coaster: ');
                message = message.replace('\ud83d\udea8', ' :rotating_light: ');
                message = message.replace('\ud83d\udccd', ' :round_pushpin: ');
                message = message.replace('\ud83d\udea3', ' :rowboat: ');
                message = message.replace('\ud83c\uddf7\ud83c\uddfa', ' :ru: ');
                message = message.replace('\u26f5', ' :sailboat: ');
                message = message.replace('\ud83c\udfeb', ' :school: ');
                message = message.replace('\ud83d\udea2', ' :ship: ');
                message = message.replace('\ud83c\udfb0', ' :slot_machine: ');
                message = message.replace('\ud83d\udea4', ' :speedboat: ');
                message = message.replace('\ud83c\udf03', ' :stars: ');
                message = message.replace('\ud83d\ude89', ' :station: ');
                message = message.replace('\ud83d\uddfd', ' :statue_of_liberty: ');
                message = message.replace('\ud83d\ude82', ' :steam_locomotive: ');
                message = message.replace('\ud83c\udf05', ' :sunrise: ');
                message = message.replace('\ud83c\udf04', ' :sunrise_over_mountains: ');
                message = message.replace('\ud83d\ude9f', ' :suspension_railway: ');
                message = message.replace('\ud83d\ude95', ' :taxi: ');
                message = message.replace('\u26fa', ' :tent: ');
                message = message.replace('\ud83c\udfab', ' :ticket: ');
                message = message.replace('\ud83d\uddfc', ' :tokyo_tower: ');
                message = message.replace('\ud83d\ude9c', ' :tractor: ');
                message = message.replace('\ud83d\udea5', ' :traffic_light: ');
                message = message.replace('\ud83d\ude83', ' :train: ');
                message = message.replace('\ud83d\ude86', ' :train2: ');
                message = message.replace('\ud83d\ude8a', ' :tram: ');
                message = message.replace('\ud83d\udea9', ' :triangular_flag_on_post: ');
                message = message.replace('\ud83d\ude8e', ' :trolleybus: ');
                message = message.replace('\ud83d\ude9a', ' :truck: ');
                message = message.replace('\ud83c\uddec\ud83c\udde7', ' :uk: ');
                message = message.replace('\ud83c\uddfa\ud83c\uddf8', ' :us: ');
                message = message.replace('\ud83d\udea6', ' :vertical_traffic_light: ');
                message = message.replace('\u26a0', ' :warning: ');
                message = message.replace('\ud83d\udc92', ' :wedding: ');
                message = message.replace('\ud83d\udc7d', ' :alien: ');
                message = message.replace('\ud83d\udc7c', ' :angel: ');
                message = message.replace('\ud83d\udca2', ' :anger: ');
                message = message.replace('\ud83d\ude20', ' :angry: ');
                message = message.replace('\ud83d\ude27', ' :anguished: ');
                message = message.replace('\ud83d\ude32', ' :astonished: ');
                message = message.replace('\ud83d\udc76', ' :baby: ');
                message = message.replace('\ud83d\udc99', ' :blue_heart: ');
                message = message.replace('\ud83d\ude0a', ' :blush: ');
                message = message.replace('\ud83d\udca5', ' :boom: ');
                message = message.replace('\ud83d\ude47', ' :bow: ');
                message = message.replace(':bowtie:', ' :bowtie: ');
                message = message.replace('\ud83d\udc66', ' :boy: ');
                message = message.replace('\ud83d\udc70', ' :bride_with_veil: ');
                message = message.replace('\ud83d\udc94', ' :broken_heart: ');
                message = message.replace('\ud83d\udc64', ' :bust_in_silhouette: ');
                message = message.replace('\ud83d\udc65', ' :busts_in_silhouette: ');
                message = message.replace('\ud83d\udc4f', ' :clap: ');
                message = message.replace('\ud83d\ude30', ' :cold_sweat: ');
                message = message.replace('\ud83d\udca5', ' :collision: ');
                message = message.replace('\ud83d\ude16', ' :confounded: ');
                message = message.replace('\ud83d\ude15', ' :confused: ');
                message = message.replace('\ud83d\udc77', ' :construction_worker: ');
                message = message.replace('\ud83d\udc6e', ' :cop: ');
                message = message.replace('\ud83d\udc6b', ' :couple: ');
                message = message.replace('\ud83d\udc91', ' :couple_with_heart: ');
                message = message.replace('\ud83d\udc8f', ' :couplekiss: ');
                message = message.replace('\ud83d\ude22', ' :cry: ');
                message = message.replace('\ud83d\ude3f', ' :crying_cat_face: ');
                message = message.replace('\ud83d\udc98', ' :cupid: ');
                message = message.replace('\ud83d\udc83', ' :dancer: ');
                message = message.replace('\ud83d\udc6f', ' :dancers: ');
                message = message.replace('\ud83d\udca8', ' :dash: ');
                message = message.replace('\ud83d\ude1e', ' :disappointed: ');
                message = message.replace('\ud83d\ude25', ' :disappointed_relieved: ');
                message = message.replace('\ud83d\udcab', ' :dizzy: ');
                message = message.replace('\ud83d\ude35', ' :dizzy_face: ');
                message = message.replace('\ud83d\udca7', ' :droplet: ');
                message = message.replace('\ud83d\udc42', ' :ear: ');
                message = message.replace('\u2757', ' :exclamation: ');
                message = message.replace('\ud83d\ude11', ' :expressionless: ');
                message = message.replace('\ud83d\udc40', ' :eyes: ');
                message = message.replace('\ud83d\udc6a', ' :family: ');
                message = message.replace('\ud83d\ude28', ' :fearful: ');
                message = message.replace(':feelsgood:', ' :feelsgood: ');
                message = message.replace('\ud83d\udc63', ' :feet: ');
                message = message.replace(':finnadie:', ' :finnadie: ');
                message = message.replace('\ud83d\udd25', ' :fire: ');
                message = message.replace('\u270a', ' :fist: ');
                message = message.replace('\ud83d\ude33', ' :flushed: ');
                message = message.replace('\ud83d\ude26', ' :frowning: ');
                message = message.replace(':fu:', ' :fu: ');
                message = message.replace('\ud83d\udc67', ' :girl: ');
                message = message.replace(':goberserk:', ' :goberserk: ');
                message = message.replace(':godmode:', ' :godmode: ');
                message = message.replace('\ud83d\udc9a', ' :green_heart: ');
                message = message.replace('\u2755', ' :grey_exclamation: ');
                message = message.replace('\u2754', ' :grey_question: ');
                message = message.replace('\ud83d\ude01', ' :grimacing: ');
                message = message.replace('\ud83d\ude2c', ' :grin: ');
                message = message.replace('\ud83d\ude00', ' :grinning: ');
                message = message.replace('\ud83d\udc82', ' :guardsman: ');
                message = message.replace('\ud83d\udc87', ' :haircut: ');
                message = message.replace('\u270b', ' :hand: ');
                message = message.replace('\ud83d\ude49', ' :hear_no_evil: ');
                message = message.replace('\u2764', ' :heart: ');
                message = message.replace('\ud83d\ude0d', ' :heart_eyes: ');
                message = message.replace('\ud83d\ude3b', ' :heart_eyes_cat: ');
                message = message.replace('\ud83d\udc93', ' :heartbeat: ');
                message = message.replace('\ud83d\udc97', ' :heartpulse: ');
                message = message.replace(':hurtrealbad:', ' :hurtrealbad: ');
                message = message.replace('\ud83d\ude2f', ' :hushed: ');
                message = message.replace('\ud83d\udc7f', ' :imp: ');
                message = message.replace('\ud83d\udc81', ' :information_desk_person: ');
                message = message.replace('\ud83d\ude07', ' :innocent: ');
                message = message.replace('\ud83d\udc7a', ' :japanese_goblin: ');
                message = message.replace('\ud83d\udc79', ' :japanese_ogre: ');
                message = message.replace('\ud83d\ude02', ' :joy: ');
                message = message.replace('\ud83d\ude39', ' :joy_cat: ');
                message = message.replace('\ud83d\udc8b', ' :kiss: ');
                message = message.replace('\ud83d\ude17', ' :kissing: ');
                message = message.replace('\ud83d\ude3d', ' :kissing_cat: ');
                message = message.replace('\ud83d\ude1a', ' :kissing_closed_eyes: ');
                message = message.replace('\ud83d\ude18', ' :kissing_heart: ');
                message = message.replace('\ud83d\ude19', ' :kissing_smiling_eyes: ');
                message = message.replace('\ud83d\ude06', ' :laughing: ');
                message = message.replace('\ud83d\udc44', ' :lips: ');
                message = message.replace('\ud83d\udc8c', ' :love_letter: ');
                message = message.replace('\ud83d\udc68', ' :man: ');
                message = message.replace('\ud83d\udc72', ' :man_with_gua_pi_mao: ');
                message = message.replace('\ud83d\udc73', ' :man_with_turban: ');
                message = message.replace('\ud83d\ude37', ' :mask: ');
                message = message.replace('\ud83d\udc86', ' :massage: ');
                message = message.replace(':metal:', ' :metal: ');
                message = message.replace('\ud83d\udcaa', ' :muscle: ');
                message = message.replace('\ud83c\udfb5', ' :musical_note: ');
                message = message.replace('\ud83d\udc85', ' :nail_care: ');
                message = message.replace(':neckbeard:', ' :neckbeard: ');
                message = message.replace('\ud83d\ude10', ' :neutral_face: ');
                message = message.replace('\ud83d\ude45', ' :no_good: ');
                message = message.replace('\ud83d\ude36', ' :no_mouth: ');
                message = message.replace('\ud83d\udc43', ' :nose: ');
                message = message.replace('\ud83c\udfb6', ' :notes: ');
                message = message.replace('\ud83d\udc4c', ' :ok_hand: ');
                message = message.replace('\ud83d\ude46', ' :ok_woman: ');
                message = message.replace('\ud83d\udc74', ' :older_man: ');
                message = message.replace('\ud83d\udc75', ' :older_woman: ');
                message = message.replace('\ud83d\udc50', ' :open_hands: ');
                message = message.replace('\ud83d\ude2E', ' :open_mouth: ');
                message = message.replace('\ud83d\ude14', ' :pensive: ');
                message = message.replace('\ud83d\ude23', ' :persevere: ');
                message = message.replace('\ud83d\de4d', ' :person_frowning: ');
                message = message.replace('\ud83d\udc71', ' :person_with_blond_hair: ');
                message = message.replace('\ud83d\ude4e', ' :person_with_pouting_face: ');
                message = message.replace('\ud83d\udc47', ' :point_down: ');
                message = message.replace('\ud83d\udc48', ' :point_left: ');
                message = message.replace('\ud83d\udc49', ' :point_right: ');
                message = message.replace('\u261d', ' :point_up: ');
                message = message.replace('\ud83d\udc46', ' :point_up_2: ');
                message = message.replace('\ud83d\ude3e', ' :pouting_cat: ');
                message = message.replace('\ud83d\ude4f', ' :pray: ');
                message = message.replace('\ud83d\udc78', ' :princess: ');
                message = message.replace('\ud83d\udc4a', ' :punch: ');
                message = message.replace('\ud83d\udc9c', ' :purple_heart: ');
                message = message.replace('\u2753', ' :question: ');
                message = message.replace('\ud83d\ude21', ' :rage: ');
                message = message.replace('\u270b', ' :raised_hand: ');
                message = message.replace('\ud83d\ude4c', ' :raised_hands: ');
                message = message.replace('\ud83d\ude4b', ' :raising_hand: ');
                message = message.replace('\u263a', ' :relaxed: ');
                message = message.replace('\ud83d\ude0c', ' :relieved: ');
                message = message.replace('\ud83d\udc9e', ' :revolving_hearts: ');
                message = message.replace('\ud83c\udfc3', ' :runner: ');
                message = message.replace('\ud83c\udfc3', ' :running: ');
                message = message.replace('\ud83d\ude06', ' :satisfied: ');
                message = message.replace('\ud83d\ude31', ' :scream: ');
                message = message.replace('\ud83d\ude40', ' :scream_cat: ');
                message = message.replace('\ud83d\ude48', ' :see_no_evil: ');
                message = message.replace('\ud83d\udca9', ' :shit: ');
                message = message.replace('\ud83d\udc80', ' :skull: ');
                message = message.replace('\ud83d\ude34', ' :sleeping: ');
                message = message.replace('\ud83d\ude2a', ' :sleepy: ');
                message = message.replace('\ud83d\ude03', ' :smile: ');
                message = message.replace('\ud83d\ude38', ' :smile_cat: ');
                message = message.replace('\ud83d\ude04', ' :smiley: ');
                message = message.replace('\ud83d\ude3a', ' :smiley_cat: ');
                message = message.replace('\ud83d\ude08', ' :smiling_imp: ');
                message = message.replace('\ud83d\ude0f', ' :smirk: ');
                message = message.replace('\ud83d\ude3c', ' :smirk_cat: ');
                message = message.replace('\ud83d\ude2d', ' :sob: ');
                message = message.replace('\u2728', ' :sparkles: ');
                message = message.replace('\ud83d\udc96', ' :sparkling_heart: ');
                message = message.replace('\ud83d\ude4a', ' :speak_no_evil: ');
                message = message.replace('\ud83d\udcac', ' :speech_balloon: ');
                message = message.replace('\u2b50', ' :star: ');
                message = message.replace('\ud83c\udf1f', ' :star2: ');
                message = message.replace('\ud83d\ude1b', ' :stuck_out_tongue: ');
                message = message.replace('\ud83d\ude1d', ' :stuck_out_tongue_closed_eyes: ');
                message = message.replace('\ud83d\ude1c', ' :stuck_out_tongue_winking_eye: ');
                message = message.replace('\ud83d\ude0e', ' :sunglasses: ');
                message = message.replace(':suspect:', ' :suspect: ');
                message = message.replace('\ud83d\ude13', ' :sweat: ');
                message = message.replace('\ud83d\udca6', ' :sweat_drops: ');
                message = message.replace('\ud83d\ude05', ' :sweat_smile: ');
                message = message.replace('\ud83d\udcad', ' :thought_balloon: ');
                message = message.replace('\ud83d\udc4e', ' :thumbsdown: ');
                message = message.replace('\ud83d\udc4d', ' :thumbsup: ');
                message = message.replace('\ud83d\ude2b', ' :tired_face: ');
                message = message.replace('\ud83d\udc45', ' :tongue: ');
                message = message.replace('\ud83d\ude24', ' :triumph: ');
                message = message.replace(':trollface:', ' :trollface: ');
                message = message.replace('\ud83d\udc95', ' :two_hearts: ');
                message = message.replace('\ud83d\udc6c', ' :two_men_holding_hands: ');
                message = message.replace('\ud83d\udc6d', ' :two_women_holding_hands: ');
                message = message.replace('\ud83d\ude12', ' :unamused: ');
                message = message.replace('\u270c', ' :v: ');
                message = message.replace('\ud83d\udeb6', ' :walking: ');
                message = message.replace('\ud83d\udc4b', ' :wave: ');
                message = message.replace('\ud83d\ude29', ' :weary: ');
                message = message.replace('\ud83d\ude09', ' :wink: ');
                message = message.replace('\ud83d\udc69', ' :woman: ');
                message = message.replace('\ud83d\ude1f', ' :worried: ');
                message = message.replace('\ud83d\udc9b', ' :yellow_heart: ');
                message = message.replace('\ud83d\ude0b', ' :yum: ');
                message = message.replace('\ud83d\udca4', ' :zzz: ');
                message = message.replace('\ud83c\udfb1', ' :n8ball: ');
                message = message.replace('\u23f0', ' :alarm_clock: ');
                message = message.replace('\ud83c\udf4e', ' :apple: ');
                message = message.replace('\ud83c\udfa8', ' :art: ');
                message = message.replace('\ud83c\udf7c', ' :baby_bottle: ');
                message = message.replace('\ud83c\udf88', ' :balloon: ');
                message = message.replace('\ud83c\udf8d', ' :bamboo: ');
                message = message.replace('\ud83c\udf4c', ' :banana: ');
                message = message.replace('\ud83d\udcca', ' :bar_chart: ');
                message = message.replace('\u26be', ' :baseball: ');
                message = message.replace('\ud83c\udfc0', ' :basketball: ');
                message = message.replace('\ud83d\udec0', ' :bath: ');
                message = message.replace('\ud83d\udec1', ' :bathtub: ');
                message = message.replace('\ud83d\udd0b', ' :battery: ');
                message = message.replace('\ud83c\udf7a', ' :beer: ');
                message = message.replace('\ud83c\udf7b', ' :beers: ');
                message = message.replace('\ud83d\udd14 ', ' :bell: ');
                message = message.replace('\ud83c\udf71', ' :bento: ');
                message = message.replace('\ud83d\udeb4', ' :bicyclist: ');
                message = message.replace('\ud83d\udc59', ' :bikini: ');
                message = message.replace('\ud83c\udf82', ' :birthday: ');
                message = message.replace('\ud83c\udccf', ' :black_joker: ');
                message = message.replace('\u2712', ' :black_nib: ');
                message = message.replace('\ud83d\udcd8', ' :blue_book: ');
                message = message.replace('\ud83d\udca3', ' :bomb: ');
                message = message.replace('\ud83d\udcd6', ' :book: ');
                message = message.replace('\ud83d\udd16', ' :bookmark: ');
                message = message.replace('\ud83d\udcd1', ' :bookmark_tabs: ');
                message = message.replace('\ud83d\udcda', ' :books: ');
                message = message.replace('\ud83d\udc62', ' :boot: ');
                message = message.replace('\ud83c\udfb3', ' :bowling: ');
                message = message.replace('\ud83c\udf5e', ' :bread: ');
                message = message.replace('\ud83d\udcbc', ' :briefcase: ');
                message = message.replace('\ud83d\udca1', ' :bulb: ');
                message = message.replace('\ud83c\udf70', ' :cake: ');
                message = message.replace('\ud83d\udcc6', ' :calendar: ');
                message = message.replace('\ud83d\udcf2', ' :calling: ');
                message = message.replace('\ud83d\udcf7', ' :camera: ');
                message = message.replace('\ud83c\udf6c', ' :candy: ');
                message = message.replace('\ud83d\udcc7', ' :card_index: ');
                message = message.replace('\ud83d\udcbf', ' :cd: ');
                message = message.replace('\ud83d\udcc9', ' :chart_with_downwards_trend: ');
                message = message.replace('\ud83d\udcc8', ' :chart_with_upwards_trend: ');
                message = message.replace('\ud83c\udf52', ' :cherries: ');
                message = message.replace('\ud83c\udf6b', ' :chocolate_bar: ');
                message = message.replace('\ud83c\udf84', ' :christmas_tre: ');
                message = message.replace('\ud83c\udfac', ' :clapper: ');
                message = message.replace('\ud83d\udccb', ' :clipboard: ');
                message = message.replace('\ud83d\udcd5', ' :closed_book: ');
                message = message.replace('\ud83d\udd10', ' :closed_lock_with_key: ');
                message = message.replace('\ud83c\udf02', ' :closed_umbrella: ');
                message = message.replace('\u2663', ' :clubs: ');
                message = message.replace('\ud83c\udf78', ' :cocktail: ');
                message = message.replace('\u2615', ' :coffee: ');
                message = message.replace('\ud83d\udcbb', ' :computer: ');
                message = message.replace('\ud83c\udf8a', ' :confetti_ball: ');
                message = message.replace('\ud83c\udf6a', ' :cookie: ');
                message = message.replace('\ud83c\udf3d', ' :corn: ');
                message = message.replace('\ud83d\udcb3', ' :credit_card: ');
                message = message.replace('\ud83d\udc51', ' :crown: ');
                message = message.replace('\ud83d\udd2e', ' :crystal_ball: ');
                message = message.replace('\ud83c\udf5b', ' :curry: ');
                message = message.replace('\ud83c\udf6e', ' :custard: ');
                message = message.replace('\ud83c\udf61', ' :dango: ');
                message = message.replace('\ud83c\udfaf', ' :dart: ');
                message = message.replace('\ud83d\udcc5', ' :date: ');
                message = message.replace('\u2666', ' :diamonds: ');
                message = message.replace('\ud83d\udcb5', ' :dollar: ');
                message = message.replace('\ud83c\udf8e', ' :dolls: ');
                message = message.replace('\ud83d\udeaa', ' :door: ');
                message = message.replace('\ud83c\udf69', ' :doughnut: ');
                message = message.replace('\ud83d\udc57', ' :dress: ');
                message = message.replace('\ud83d\udcc0', ' :dvd: ');
                message = message.replace('\ud83d\udce7', ' :e-mail: ');
                message = message.replace('\ud83c\udf73', ' :egg: ');
                message = message.replace('\ud83c\udf46', ' :eggplant: ');
                message = message.replace('\ud83d\udd0c', ' :electric_plug: ');
                message = message.replace('\ud83d\udce9', ' :email: ');
                message = message.replace('\u2709', ' :envelope: ');
                message = message.replace('\ud83d\udcb6', ' :euro: ');
                message = message.replace('\ud83d\udc53', ' :eyeglasses: ');
                message = message.replace('\ud83d\udce0', ' :fax: ');
                message = message.replace('\ud83d\udcc1', ' :file_folder: ');
                message = message.replace('\ud83c\udf86 ', ' :fireworks: ');
                message = message.replace('\ud83c\udf65', ' :fish_cake: ');
                message = message.replace('\ud83c\udfa3', ' :fishing_pole_and_fish: ');
                message = message.replace('\ud83c\udf8f', ' :flags: ');
                message = message.replace('\ud83d\udd26', ' :flashlight: ');
                message = message.replace('\ud83d\udcbe', ' :floppy_disk: ');
                message = message.replace('\ud83c\udfb4', ' :flower_playing_cards: ');
                message = message.replace('\ud83c\udfc8', ' :football: ');
                message = message.replace('\ud83c\udf74', ' :fork_and_knife: ');
                message = message.replace('\ud83c\udf64', ' :fried_shrimp: ');
                message = message.replace('\ud83c\udf5f', ' :fries: ');
                message = message.replace('\ud83c\udfb2', ' :game_die: ');
                message = message.replace('\ud83d\udc8e', ' :gem: ');
                message = message.replace('\ud83d\udc7b', ' :ghost: ');
                message = message.replace('\ud83c\udf81', ' :gift: ');
                message = message.replace('\ud83d\udc9d', ' :gift_heart: ');
                message = message.replace('\u26f3', ' :golf: ');
                message = message.replace('\ud83c\udf47', ' :grapes: ');
                message = message.replace('\ud83c\udf4f', ' :green_apple: ');
                message = message.replace('\ud83d\udcd7', ' :green_book: ');
                message = message.replace('\ud83c\udfb8', ' :guitar: ');
                message = message.replace('\ud83d\udd2b', ' :gun: ');
                message = message.replace('\ud83c\udf54', ' :hamburger: ');
                message = message.replace('\ud83d\udd28', ' :hammer: ');
                message = message.replace('\ud83d\udc5c', ' :handbag: ');
                message = message.replace('\ud83c\udfa7', ' :headphones: ');
                message = message.replace('\u2665', ' :hearts: ');
                message = message.replace('\ud83d\udd06', ' :high_brightness: ');
                message = message.replace('\ud83d\udc60', ' :high_heel: ');
                message = message.replace('\ud83d\udd2a', ' :hocho: ');
                message = message.replace('\ud83c\udf6f', ' :honey_pot: ');
                message = message.replace('\ud83c\udfc7', ' :horse_racing: ');
                message = message.replace('\u231b', ' :hourglass: ');
                message = message.replace('\u23f3', ' :hourglass_flowing_sand: ');
                message = message.replace('\ud83c\udf68', ' :ice_cream: ');
                message = message.replace('\ud83c\udf66', ' :icecream: ');
                message = message.replace('\ud83d\udce5', ' :inbox_tray: ');
                message = message.replace('\ud83d\udce8', ' :incoming_envelope: ');
                message = message.replace('\ud83d\udcf1', ' :iphone: ');
                message = message.replace('\ud83c\udf83', ' :jack_o_lantern: ');
                message = message.replace('\ud83d\udc56', ' :jeans: ');
                message = message.replace('\ud83d\udd11', ' :key: ');
                message = message.replace('\ud83d\udc58', ' :kimono: ');
                message = message.replace('\ud83d\udcd2', ' :ledger: ');
                message = message.replace('\ud83c\udf4b', ' :lemon: ');
                message = message.replace('\ud83d\udc84', ' :lipstick: ');
                message = message.replace('\ud83d\udd12', ' :lock: ');
                message = message.replace('\ud83d\udd0f ', ' :lock_with_ink_pen: ');
                message = message.replace('\ud83c\udf6d', ' :lollipop: ');
                message = message.replace('\u27bf', ' :loop: ');
                message = message.replace('\ud83d\udce2', ' :loudspeaker: ');
                message = message.replace('\ud83d\udd05', ' :low_brightness: ');
                message = message.replace('\ud83d\udd0d', ' :mag: ');
                message = message.replace('\ud83d\udd0e', ' :mag_right: ');
                message = message.replace('\ud83c\udc04', ' :mahjong: ');
                message = message.replace('\ud83d\udceb', ' :mailbox: ');
                message = message.replace('\ud83d\udcea', ' :mailbox_closed: ');
                message = message.replace('\ud83d\udcec', ' :mailbox_with_mail: ');
                message = message.replace('\ud83d\udced', ' :mailbox_with_no_mail: ');
                message = message.replace('\ud83d\udc5e', ' :mans_shoe: ');
                message = message.replace('\ud83c\udf56', ' :meat_on_bone: ');
                message = message.replace('\ud83d\udce3', ' :mega: ');
                message = message.replace('\ud83c\udf48', ' :melon: ');
                message = message.replace('\ud83d\udcdd', ' :memo: ');
                message = message.replace('\ud83c\udfa4', ' :microphone: ');
                message = message.replace('\ud83d\udd2C', ' :microscope: ');
                message = message.replace('\ud83d\udcbd', ' :minidisc: ');
                message = message.replace('\ud83d\udcb8', ' :money_with_wings: ');
                message = message.replace('\ud83d\udcb0', ' :moneybag: ');
                message = message.replace('\ud83c\udf93', ' :mortar_board: ');
                message = message.replace('\ud83d\udeb5', ' :mountain_bicyclist: ');
                message = message.replace('\ud83c\udfa5', ' :movie_camera: ');
                message = message.replace('\ud83c\udfb9', ' :musical_keyboard: ');
                message = message.replace('\ud83c\udfbc', ' :musical_score: ');
                message = message.replace('\ud83d\udd07', ' :mute: ');
                message = message.replace('\ud83d\udcdb', ' :name_badge: ');
                message = message.replace('\ud83d\udc54', ' :necktie: ');
                message = message.replace('\ud83d\udcf0 ', ' :newspaper: ');
                message = message.replace('\ud83d\udd15', ' :no_bell: ');
                message = message.replace('\ud83d\udcd3', ' :notebook: ');
                message = message.replace('\ud83d\udcd4', ' :notebook_with_decorative_cover: ');
                message = message.replace('\ud83d\udd29', ' :nut_and_bolt: ');
                message = message.replace('\ud83c\udf62', ' :oden: ');
                message = message.replace('\ud83d\udcc2', ' :open_file_folder: ');
                message = message.replace('\ud83d\udcd9', ' :orange_book: ');
                message = message.replace('\ud83d\udce4', ' :outbox_tray: ');
                message = message.replace('\ud83d\udcc4 ', ' :page_facing_up: ');
                message = message.replace('\ud83d\udcc3', ' :page_with_curl: ');
                message = message.replace('\ud83d\udcdf', ' :pager: ');
                message = message.replace('\ud83d\udcces', ' :paperclip: ');
                message = message.replace('\ud83c\udf51', ' :peach: ');
                message = message.replace('\ud83c\udf50', ' :pear: ');
                message = message.replace('\u270f', ' :pencil: ');
                message = message.replace('\u270f', ' :pencil2: ');
                message = message.replace('\u260e', ' :phone: ');
                message = message.replace('\ud83d\udc8a', ' :pill: ');
                message = message.replace('\ud83c\udf4d', ' :pineapple: ');
                message = message.replace('\ud83c\udf55', ' :pizza: ');
                message = message.replace('\ud83d\udcef', ' :postal_horn: ');
                message = message.replace('\ud83d\udcee', ' :postbox: ');
                message = message.replace('\ud83d\udc5d', ' :pouch: ');
                message = message.replace('\ud83c\udf57', ' :poultry_leg: ');
                message = message.replace('\ud83d\udcb7', ' :pound: ');
                message = message.replace('\ud83d\udc5b', ' :purse: ');
                message = message.replace('\ud83d\udccc', ' :pushpin: ');
                message = message.replace('\ud83d\udcfb ', ' :radio: ');
                message = message.replace('\ud83c\udf5c', ' :ramen: ');
                message = message.replace('\ud83c\udf80', ' :ribbon: ');
                message = message.replace('\ud83c\udf5a', ' :rice: ');
                message = message.replace('\ud83c\udf59', ' :rice_ball: ');
                message = message.replace('\ud83c\udf58', ' :rice_cracker: ');
                message = message.replace('\ud83c\udf91', ' :rice_scene: ');
                message = message.replace('\ud83d\udc8d', ' :ring: ');
                message = message.replace('\ud83c\udfc9', ' :rugby_football: ');
                message = message.replace('\ud83c\udfbd', ' :running_sirt_with_sash: ');
                message = message.replace('\ud83c\udf76', ' :sake: ');
                message = message.replace('\ud83d\udc61', ' :sandal: ');
                message = message.replace('\ud83c\udf85', ' :santa: ');
                message = message.replace('\ud83d\udce1', ' :satellite: ');
                message = message.replace('\ud83c\udfb7', ' :saxophone: ');
                message = message.replace('\ud83c\udf92', ' :school_satchel: ');
                message = message.replace('\u2702', ' :scissors: ');
                message = message.replace('\ud83d\udcdc', ' :scroll: ');
                message = message.replace('\ud83d\udcba', ' :seat: ');
                message = message.replace('\ud83c\udf67', ' :shaved_ice: ');
                message = message.replace('\ud83d\udc55', ' :shirt: ');
                message = message.replace('\ud83d\udc5f', ' :shoe: ');
                message = message.replace('\ud83d\udebf', ' :shower: ');
                message = message.replace('\ud83c\udfbf', ' :ski: ');
                message = message.replace('\ud83d\udeac', ' :smoking: ');
                message = message.replace('\ud83c\udfc2', ' :snowboarder: ');
                message = message.replace('\u26bd', ' :soccer: ');
                message = message.replace('\ud83d\udd09', ' :sound: ');
                message = message.replace('\ud83d\udc7e', ' :space_invader: ');
                message = message.replace('\u2660', ' :spades: ');
                message = message.replace('\ud83c\udf5d', ' :spaghetti: ');
                message = message.replace('\ud83c\udf87', ' :sparkler: ');
                message = message.replace('\ud83d\udd0a', ' :speaker: ');
                message = message.replace('\ud83c\udf72', ' :stew: ');
                message = message.replace('\ud83d\udccf', ' :straight_ruler: ');
                message = message.replace('\ud83c\udf53', ' :strawberry: ');
                message = message.replace('\ud83c\udfc4', ' :surfer: ');
                message = message.replace('\ud83c\udf63', ' :sushi: ');
                message = message.replace('\ud83c\udf60', ' :sweet_potato: ');
                message = message.replace('\ud83c\udfca', ' :swimmer: ');
                message = message.replace('\ud83d\udc89', ' :syringe: ');
                message = message.replace('\ud83c\udf89', ' :tada: ');
                message = message.replace('\ud83c\udf8b', ' :tanabata_tree:');
                message = message.replace('\ud83c\udf4a', ' :tangerine: ');
                message = message.replace('\ud83c\udf75', ' :tea: ');
                message = message.replace('\u260e', ' :telephone: ');
                message = message.replace('\ud83d\udcde', ' :telephone_receiver: ');
                message = message.replace('\ud83d\udd2d', ' :telescope: ');
                message = message.replace('\ud83c\udfbe', ' :tennis: ');
                message = message.replace('\ud83d\udebd', ' :toilet: ');
                message = message.replace('\ud83c\udf45', ' :tomato: ');
                message = message.replace('\ud83c\udfa9', ' :tophat: ');
                message = message.replace('\ud83d\udcd0', ' :triangular_ruler: ');
                message = message.replace('\ud83c\udfc6', ' :trophy: ');
                message = message.replace('\ud83c\udf79', ' :tropical_drink: ');
                message = message.replace('\ud83c\udfba', ' :trumpet: ');
                message = message.replace('\ud83d\udc55', ' :tshirt: ');
                message = message.replace('\ud83d\udcfa', ' :tv: ');
                message = message.replace('\ud83d\udd13', ' :unlock: ');
                message = message.replace('\ud83d\udcfc', ' :vhs: ');
                message = message.replace('\ud83d\udcf9', ' :video_camera: ');
                message = message.replace('\ud83c\udfae', ' :video_game: ');
                message = message.replace('\ud83c\udfbb', ' :violin: ');
                message = message.replace('\u231a', ' :watch: ');
                message = message.replace('\ud83c\udf49', ' :watermelon: ');
                message = message.replace('\ud83c\udf90', ' :wind_chime: ');
                message = message.replace('\ud83c\udf77', ' :wine_glass: ');
                message = message.replace('\ud83d\udc5a', ' :womans_clothes: ');
                message = message.replace('\ud83d\udc52', ' :womans_hat: ');
                message = message.replace('\ud83d\udd27', ' :wrench: ');
                message = message.replace('\ud83d\udcb4', ' :yen: ');
                message = message.replace('\ud83d\udc1c', ' :ant: ');
                message = message.replace('\ud83d\udc24', ' :baby_chick: ');
                message = message.replace('\ud83d\udc3b', ' :bear: ');
                message = message.replace('\ud83d\udc1e', ' :beetle: ');
                message = message.replace('\ud83d\udc26', ' :bird: ');
                message = message.replace('\ud83c\udf3c', ' :blossom: ');
                message = message.replace('\ud83d\udc21', ' :blowfish: ');
                message = message.replace('\ud83d\udc17', ' :boar: ');
                message = message.replace('\ud83d\udc90', ' :bouquet: ');
                message = message.replace('\ud83d\udc1b', ' :bug: ');
                message = message.replace('\ud83c\udf35', ' :cactus: ');
                message = message.replace('\ud83d\udc2b', ' :camel: ');
                message = message.replace('\ud83d\udc31', ' :cat: ');
                message = message.replace('\ud83d\udc08', ' :cat2: ');
                message = message.replace('\ud83c\udf38', ' :cherry_blossom: ');
                message = message.replace('\ud83c\udf30', ' :chestnut: ');
                message = message.replace('\ud83d\udc14', ' :chicken: ');
                message = message.replace('\u2601', ' :cloud: ');
                message = message.replace('\ud83d\udc2e', ' :cow: ');
                message = message.replace('\ud83d\udc04', ' :cow2: ');
                message = message.replace('\ud83d\udc0a', ' :crocodile: ');
                message = message.replace('\ud83c\udf00', ' :cyclone: ');
                message = message.replace('\ud83c\udf33', ' :deciduous_tree: ');
                message = message.replace('\ud83d\udc36', ' :dog: ');
                message = message.replace('\ud83d\udc15', ' :dog2: ');
                message = message.replace('\ud83d\udc2c', ' :dolphin: ');
                message = message.replace('\ud83d\udc09', ' :dragon: ');
                message = message.replace('\ud83d\udc32', ' :dragon_face: ');
                message = message.replace('\ud83d\udc2a', ' :dromedary_camel:');
                message = message.replace('\ud83c\udf3e', ' :ear_of_rice: ');
                message = message.replace('\ud83c\udf0d', ' :earth_africa: ');
                message = message.replace('\ud83c\udf0e', ' :earth_americas: ');
                message = message.replace('\ud83c\udf0f', ' :earth_asia: ');
                message = message.replace('\ud83d\udc18', ' :elephant: ');
                message = message.replace('\ud83c\udf32', ' :evergreen_tree: ');
                message = message.replace('\ud83c\udf42', ' :fallen_leaf: ');
                message = message.replace('\ud83c\udf13', ' :first_quarter_moon: ');
                message = message.replace('\ud83c\udf1b', ' :first_quarter_moon_with_face: ');
                message = message.replace('\ud83d\udc1f', ' :fish: ');
                message = message.replace('\ud83c\udf01', ' :foggy: ');
                message = message.replace('\ud83c\udf40', ' :four_leaf_clover: ');
                message = message.replace('\ud83d\udc38', ' :frog: ');
                message = message.replace('\ud83c\udf15', ' :full_moon: ');
                message = message.replace('\ud83c\udf1d', ' :full_moon_with_face: ');
                message = message.replace('\ud83c\udf10', ' :globe_with_meridians: ');
                message = message.replace('\ud83d\udc10', ' :goat: ');
                message = message.replace('\ud83d\udc39', ' :hamster: ');
                message = message.replace('\ud83d\udc25', ' :hatched_chick: ');
                message = message.replace('\ud83d\udc23', ' :hatching_chick: ');
                message = message.replace('\ud83c\udf3f', ' :herb: ');
                message = message.replace('\ud83c\udf3a', ' :hibiscus: ');
                message = message.replace('\ud83d\udc1d', ' :honeybee: ');
                message = message.replace('\ud83d\udc34', ' :horse: ');
                message = message.replace('\ud83d\udc28', ' :koala: ');
                message = message.replace('\ud83c\udf17', ' :last_quarter_moon: ');
                message = message.replace('\ud83c\udf1c', ' :last_quarter_moon_with_face: ');
                message = message.replace('\ud83c\udf43', ' :leaves: ');
                message = message.replace('\ud83d\udc06', ' :leopard: ');
                message = message.replace('\ud83c\udf41', ' :maple_leaf: ');
                message = message.replace('\ud83c\udf0c', ' :milky_way: ');
                message = message.replace('\ud83d\udc12', ' :monkey: ');
                message = message.replace('\ud83d\udc35', ' :monkey_face: ');
                message = message.replace('\ud83c\udf19', ' :moon: ');
                message = message.replace('\ud83d\udc2d', ' :mouse: ');
                message = message.replace('\ud83d\udc01', ' :mouse2: ');
                message = message.replace('\ud83c\udf44', ' :mushroom:');
                message = message.replace('\ud83c\udf11', ' :new_moon: ');
                message = message.replace('\ud83c\udf1a', ' :new_moon_with_face: ');
                message = message.replace('\ud83c\udf0a', ' :ocean: ');
                message = message.replace('\ud83d\udc7f', ' :octocat: ');
                message = message.replace('\ud83d\udc19', ' :octopus: ');
                message = message.replace('\ud83d\udc02', ' :ox: ');
                message = message.replace('\ud83c\udf34', ' :palm_tree: ');
                message = message.replace('\ud83d\udc3c', ' :panda_face: ');
                message = message.replace('\u26c5', ' :partly_sunny: ');
                message = message.replace('\ud83d\udc3e', ' :paw_prints: ');
                message = message.replace('\ud83d\udc27', ' :penguin: ');
                message = message.replace('\ud83d\udc37', ' :pig: ');
                message = message.replace('\ud83d\udc16', ' :pig2: ');
                message = message.replace('\ud83d\udc3d', ' :pig_nose: ');
                message = message.replace('\ud83d\udc29', ' :poodle: ');
                message = message.replace('\ud83d\udc30', ' :rabbit: ');
                message = message.replace('\ud83d\udc07', ' :rabbit2: ');
                message = message.replace('\ud83d\udc0e', ' :racehorse: ');
                message = message.replace('\ud83d\udc0f', ' :ram: ');
                message = message.replace('\ud83d\udc00', ' :rat: ');
                message = message.replace('\ud83d\udc13', ' :rooster: ');
                message = message.replace('\ud83c\udf39', ' :rose: ');
                message = message.replace('\ud83c\udf31', ' :seedling: ');
                message = message.replace('\ud83d\udc11', ' :sheep: ');
                message = message.replace('\ud83d\udc1a', ' :shell: ');
                message = message.replace('\ud83d\udc0c', ' :snail: ');
                message = message.replace('\ud83d\udc0d', ' :snake: ');
                message = message.replace('\u2744', ' :snowflake: ');
                message = message.replace('\u26c4', ' :snowman: ');
                message = message.replace(':squirrel:', ' :squirrel: ');
                message = message.replace('\ud83c\udf1e', ' :sun_with_face: ');
                message = message.replace('\ud83c\udf3b', ' :sunflower: ');
                message = message.replace('\u2600', ' :sunny: ');
                message = message.replace('\ud83d\udc2f', ' :tiger: ');
                message = message.replace('\ud83d\udc05', ' :tiger2: ');
                message = message.replace('\ud83d\udc20', ' :tropical_fish: ');
                message = message.replace('\ud83c\udf37', ' :tulip: ');
                message = message.replace('\ud83d\udc22', ' :turtle: ');
                message = message.replace('\u2614', ' :umbrella: ');
                message = message.replace('\ud83c\udf0b', ' :volcano: ');
                message = message.replace('\ud83c\udf18', ' :waning_crescent_moon: ');
                message = message.replace('\ud83c\udf16', ' :waning_gibbous_moon: ');
                message = message.replace('\ud83d\udc03', ' :water_buffalo: ');
                message = message.replace('\ud83c\udf12', ' :waxing_crescent_moon: ');
                message = message.replace('\ud83c\udf14', ' :waxing_gibbous_moon: ');
                message = message.replace('\ud83d\udc33', ' :whale: ');
                message = message.replace('\ud83d\udc0b', ' :whale2: ');
                message = message.replace('\ud83d\udc3a', ' :wolf: ');
                message = message.replace('\u26a1', ' :zap: ');
                return message;
            }
        };
    })();
})(jqcc);
$(document).ready(function(){
    $.extend($.expr[":"], {
        "containsIgnoreCase": function(elem, i, match, array) {
            return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
        }
    });
    setInterval(function(){
        $('span.notifier').each(function(){
            if($(this).html()==0){
                $(this).css('display', 'none');
            }else{
                $(this).css('display', 'block');
            }
        });
    }, 100);
});

 
Notice: Undefined variable: chatrooms_language in /home/p/prohor5v/student-app.ru/public_html/cometchat/extensions/mobilewebapp/js/chatrooms.js on line 8

Warning: Invalid argument supplied for foreach() in /home/p/prohor5v/student-app.ru/public_html/cometchat/extensions/mobilewebapp/js/chatrooms.js on line 8

/*
 * CometChat
 * Copyright (c) 2014 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
 */

if(typeof (jqcc)==='undefined'){
    jqcc = jQuery;
}
jqcc.ajaxSetup({scriptCharset: "utf-8", cache: "false"});
if(typeof (jqcc.mobilewebapp)==='undefined'){
    jqcc.mobilewebapp = function(){
    };
}
jqcc(document).ready(function(){
    jqcc.mobilewebapp.chatHeartbeatWebapp(1);
    if($("#chatroom").is(':visible')){
        jqcc.mobilewebapp.setChatroomVars('chatroomMessageCount', '0');
    }
    if($("#lobby").is(':visible')){
        var cookieName = 'cc_'+'chatroom';
        var cookieData = jqcc.mobilewebapp.getCookieInfo(cookieName);
        if(!cookieData){
            cookieData = '';
        }
        if(jqcc.cometchat.getChatroomVars('autoLoginFlag')==0&&jqcc.cometchat.getChatroomVars('cookieData')==''){
            var autoLogin = '0';
            var name = '';
            if(autoLogin!=0){
                jqcc.mobilewebapp.chatroom(autoLogin, name);
            }
            jqcc.mobilewebapp.setChatroomVars('autoLoginFlag', '1');
        }
    }
});
jqcc.extend($.mobilewebapp, {
    crvariables: {themename: 'standard',
        autoLoginFlag: 0,
        chatroomMessageCount: 0,
        detectTimer: '',
    },
    getcrAllVariables: function(){
        return this.crvariables;
    },
    getChatroomVars: function(key, value){
        if(typeof (this.crvariables[key])!=='undefined')
            return this.crvariables[key];

        return value;
    },
    setChatroomVars: function(key, value){
        this.crvariables[key] = value;
    },
    chatroomdetect: function(keyboard){
        clearTimeout(this.crvariables.detectTimer);
        this.crvariables.detectTimer = setTimeout(function(){
            jqcc.mobilewebapp.detect();
        }, 200);
    },
    chatHeartbeatWebapp: function(forceUpdate, chatroommessageno){
        jqcc.cometchat.chatroomHeartbeat(forceUpdate);
    },
    loadChatroomList: function(item){
        var temp = '';
        $.each(item, function(i, room){
            longname = room.name;
            shortname = room.name;
            if(room.status=='available'){
                onlineNumber++;
            }
            var selected = '';
            if(jqcc.cometchat.getChatroomVars('currentroom')==room.id){
                selected = ' cometchat_chatroomselected';
            }
            roomtype = '';
            roomowner = '';
            if(room.type!=0){
                roomtype = '
Notice: Undefined variable: chatrooms_language in /home/p/prohor5v/student-app.ru/public_html/cometchat/extensions/mobilewebapp/js/chatrooms.js on line 99
';
            }
            if(room.s!=0){
                roomowner = '
Notice: Undefined variable: chatrooms_language in /home/p/prohor5v/student-app.ru/public_html/cometchat/extensions/mobilewebapp/js/chatrooms.js on line 102
';
            }
            temp += '<li id="lobbylist_'+room.id+'" class="row crlists" onclick="javascript:jqcc.mobilewebapp.mobilechatroom(\''+room.id+'\',\''+urlencode(shortname)+'\',\''+room.type+'\',\''+room.i+'\',\''+room.s+'\');" data-filtertext="'+longname+'">'+'<div class="small-12 columns"><span class="lobby_room_1">'+longname+'</span></div>'+'</li>';
        });
        if(temp!=''){
            $("#lobbylist").html(temp);
            $("#lobbylist").append('<li id="lobbylist_last" class="" style="border-style:none !important;background:none !important;" ></li>');
        }
    },
    displayChatroomMessage: function(item, fetchedUsers){
        var temp = '';
        var beepNewMessages = 0;
        $.each(item, function(i, incoming){
            var message = incoming.message;
            if(((message.indexOf('jqcc.cc')>-1))){
                var first = message.indexOf('<a');
                message = message.substring(0, (first-1));
                incoming.message = message+'Ошибко';
            }
            jqcc.cometchat.setChatroomVars('timestamp', incoming.id);
            var fromname = incoming.from;
            var bannedKicked = incoming.message;
            var bannedOrKicked = bannedKicked.split('_');
            if(bannedOrKicked[1]=='kicked'||bannedOrKicked[1]=='banned'||bannedOrKicked[1]=='deletemessage'){
                if(jqcc.cometchat.getChatroomVars('myid')==bannedOrKicked[2]){
                    if(bannedOrKicked[1]=='kicked'){
                        jqcc.mobilewebapp.kickUser(bannedOrKicked[1], incoming.id);
                        alert('
Notice: Undefined variable: chatrooms_language in /home/p/prohor5v/student-app.ru/public_html/cometchat/extensions/mobilewebapp/js/chatrooms.js on line 129
');
                        jqcc.mobilewebapp.leaveChatroom();
                        jqcc.mobilewebapp.loadLobbyReverse();
                    }
                    if(bannedOrKicked[1]=='banned'){
                        jqcc.mobilewebapp.banUser(bannedOrKicked[1], incoming.id);
                        alert('
Notice: Undefined variable: chatrooms_language in /home/p/prohor5v/student-app.ru/public_html/cometchat/extensions/mobilewebapp/js/chatrooms.js on line 135
');
                        jqcc.mobilewebapp.leaveChatroom(1);
                        jqcc.mobilewebapp.loadLobbyReverse();
                    }
                }
                $("#cometchat_userlist_"+bannedOrKicked[2]).remove();
            }else{
                if($("#cometchat_message_"+incoming.id).length>0){
                    $("#cometchat_message_"+incoming.id).find("span.cometchat_chatboxmessagecontent").html(incoming.message);
                }else{
                    var ts = new Date(incoming.sent*1000);
                    if(!jqcc.cometchat.getChatroomVars('fullName')&&fromname.indexOf(" ")!=-1){
                        fromname = fromname.slice(0, fromname.indexOf(" "));
                    }
                    if(incoming.fromid!=jqcc.cometchat.getChatroomVars('myid')){
                        temp += ('<div class="cometchat_chatboxmessage you" id="' + incoming.id + '"><a href="http://student-app.ru/p/users/index.php?id=' + incoming.fromid + '"><div class="ava" style="width:40px; height:40px; float:left; background: url(/resources/images/avatars/' + incoming.fromid + '.jpg) no-repeat center; background-size: cover" id="ava_' + incoming.id + '"></div></a><table class="menu" id="menu_' + incoming.id + '" border="1" style="position:absolute; max-height:48px; left:53px; background-color: #435A87; z-index:1000; display:none;"><tbody><tr><td><a href="http://student-app.ru/p/pm/chat.php?id=' + incoming.fromid + '"><img src="/resources/images/icons/i_pm.png" width="48" style="margin:0px; padding: 0px;"></a></td><td><a href="http://student-app.ru/p/users/index.php?id=' + incoming.fromid + '"><img src="/resources/images/icons/i_profile.png" width="48"></a></td><td onclick="doLike('+incoming.id+', '+incoming.fromid+')"><img src="/resources/images/icons/i_like.png" width="48"></td><td><a href="#"><img src="/resources/images/icons/i_allert.png" width="48"></a></td></tr></tbody></table><div style="margin-left:50px;" class="menuser" id="' + incoming.id + '"><span class="cometchat_chatboxmessagefrom"><strong>');
                        if(typeof (jqcc.chatmobilewebapp)!=='undefined'){
                            temp += ('<p>'+fromname+':</p>');
                            //TAG_1
                        }else{
                            temp += ('<p>'+fromname+':</p>');
                        }
                        temp += ('</strong></span><span class="cometchat_chatboxmessagecontent" id="'+incoming.id+'">'+incoming.message+'</span><span class="cometchat_ts" id="'+incoming.id+'">'+jqcc.mobilewebapp.getLikes(incoming.id)+'</span></div><div style="clear:both;"></div></div><div class="userSeperator"></div>');
                        jqcc.cometchat.setChatroomVars('newMessages', (jqcc.cometchat.getChatroomVars('newMessages')+1));
                        beepNewMessages++;
                        jqcc.cometchat.setChatroomVars('chatroomMessageCount', (jqcc.cometchat.getChatroomVars('chatroomMessageCount')+1));
                    }else{
                        temp += ('<div class="cometchat_chatboxmessage me" id="'+incoming.id+'"><div style="float:left; width:40px; height:40px; float:left; background: url(/upload/main/e1c/e1c5b41c159a0cad966deed42c4cca80.jpg) no-repeat center; background-size: cover"></div><div style="margin-left:50px;"></table><span class="cometchat_chatboxmessagefrom"><strong>Я:</strong></span></br><span class="cometchat_chatboxmessagecontent" id="'+incoming.id+'">'+incoming.message+'</span><span class="cometchat_ts" id="'+incoming.id+'"></span></div><div style="clear:both;"></div></div><div class="userSeperator"></div>');
                    }
                }
            }
        });
        jqcc.cometchat.setChatroomVars('heartbeatCount', 1);
        jqcc.cometchat.setChatroomVars('heartbeatTime', jqcc.cometchat.getChatroomVars('minHeartbeat'));
        if(beepNewMessages>0&&fetchedUsers==0){
            if(typeof (jqcc.chatmobilewebapp)!=='undefined')
                jqcc.chatmobilewebapp.playSound(); 
            else
                jqcc.mobilewebapp.playSound();
        }
        if(temp!=''){
            if(jqcc.cometchat.getChatroomVars('prepend')==0){
                $("#currentroom_convotext").append(temp);
                setTimeout(function(){
                    jqcc.mobilewebapp.crscrollToBottom();
                }, 500);
            }else{
                $("#currentroom_convotext").prepend(temp);
                setTimeout(function(){
                    crscrollToTop();
                }, 500);
            }
        }
    },
    updateChatroomUsers: function(item, fetchedUsers){
        var cookieName = 'cc_'+'chatroom';
        var cookieData = jqcc.mobilewebapp.getCookieInfo(cookieName);
        if(typeof (cookieData)!='undefined'&&cookieData!=""){
            var crDetails = urldecode(cookieData).split(":");
            var currentChatroomid = crDetails[0];
        }
        var temp = '';
        var newUsers = {};
        var newUsersName = {};
        fetchedUsers = 1;
        $.each(item, function(i, user){
            longname = user.n;
            if(jqcc.cometchat.getcrAllVariables().users[user.id]!=1&&jqcc.cometchat.getChatroomVars('initializeRoom')==0&&jqcc.cometchat.getChatroomVars('hideEnterExit')==0){
                var ts = new Date();
                $("#currentroom_convotext").append('<div class="cometchat_chatboxalert" id="cometchat_message_0">'+user.n+'
Notice: Undefined variable: chatrooms_language in /home/p/prohor5v/student-app.ru/public_html/cometchat/extensions/mobilewebapp/js/chatrooms.js on line 204
'+jqcc.mobilewebapp.getTimeDisplay(ts)+'</div><div style="clear:both;"></div>');
                setTimeout(function(){
                    jqcc.mobilewebapp.crscrollToBottom();
                }, 500);
            }
            newUsers[user.id] = 1;
            newUsersName[user.id] = user.n;
            if(user.id==0||user.id==jqcc.cometchat.getChatroomVars('myid')){
                temp += '<li class="chatroomuser"><div id="cometchat_userlist_'+user.id+'" class="cometchat_userlist"><span class="cometchat_userscontentname">'+user.n+'</span></div></li>';
            }else{
                if(typeof (jqcc.chatmobilewebapp)!=='undefined'){
                    temp += '<li class="chatroomuser"><div id="cometchat_userlist_'+user.id+'" class="cometchat_userlist" onclick="javascript:parent.jqcc.chatmobilewebapp.chatWith(\''+user.id+'\',\''+currentChatroomid+'\');" ><span class="cometchat_userscontentname">'+user.n+'</span><span class="arrow_icon"></span></div></li>';
                }else{
                    temp += '<li class="chatroomuser"><div id="cometchat_userlist_'+user.id+'" class="cometchat_userlist" ><span class="cometchat_userscontentname">'+user.n+'</span><span class="arrow_icon"></span></div></li>';
                }
            }
        });
        for(user in jqcc.cometchat.getChatroomVars('users')){
            if(jqcc.cometchat.getChatroomVars('users').hasOwnProperty(user)){
                if(newUsers[user]!=1&&jqcc.cometchat.getChatroomVars('initializeRoom')==0&&jqcc.cometchat.getChatroomVars('hideEnterExit')==0){
                    var ts = new Date();
                    $("#currentroom_convotext").append('<div class="cometchat_chatboxalert" id="cometchat_message_0">'+jqcc.cometchat.getcrAllVariables().usersName[user]+'
Notice: Undefined variable: chatrooms_language in /home/p/prohor5v/student-app.ru/public_html/cometchat/extensions/mobilewebapp/js/chatrooms.js on line 225
'+jqcc.mobilewebapp.getTimeDisplay(ts)+'</div><div style="clear:both;"></div>');
                    setTimeout(function(){
                        jqcc.mobilewebapp.crscrollToBottom();
                    }, 500);
                }
            }
        }
        $("#currentroom_users").html(temp);
        jqcc.cometchat.setChatroomVars('users', newUsers);
        jqcc.cometchat.setChatroomVars('usersName', newUsersName);
        jqcc.cometchat.setChatroomVars('initializeRoom', 0);
    },
    sendchatroommessage: function(chatboxtextarea){
        var message = $(chatboxtextarea).val();
        message = jqcc.mobilewebapp.checkSmiley(message);
        message = message.replace(/^\s+|\s+$/g, "");

        if(jqcc.cometchat.getChatroomVars('currentroom')!=0){
            $(chatboxtextarea).val('');

            if(message!=''){
                jqcc.cometchat.sendmessageProcess(message, jqcc.cometchat.getChatroomVars('currentroom'), jqcc.cometchat.getChatroomVars('myid'), jqcc.cometchat.getChatroomVars('currentroomname'));
            }
            jqcc.mobilewebapp.crscrollToBottom();
            $(chatboxtextarea).focus();
            $('#chatroommessage').blur();
        }
    },
    ChatroomMessage: function(fromid, incomingmessage, incomingid, selfadded, sent, fromname){
        var temp = '';
        var message = incomingmessage;
        if(((message.indexOf('jqcc.cc')>-1))){
            var first = message.indexOf('<a');
            message = message.substring(0, (first-1));
            incomingmessage = message+'Ошибко';
        }
        separator = '
Notice: Undefined variable: chatrooms_language in /home/p/prohor5v/student-app.ru/public_html/cometchat/extensions/mobilewebapp/js/chatrooms.js on line 261
';
        var bannedKicked = incomingmessage;
        var bannedOrKicked = bannedKicked.split('_');

        if(bannedOrKicked[1]=='kicked'||bannedOrKicked[1]=='banned'){
            if(jqcc.cometchat.getChatroomVars('myid')==bannedOrKicked[2]){
                if(bannedOrKicked[1]=='kicked'){
                    jqcc.mobilewebapp.kickUser(bannedOrKicked[1], incomingid);
                    alert('
Notice: Undefined variable: chatrooms_language in /home/p/prohor5v/student-app.ru/public_html/cometchat/extensions/mobilewebapp/js/chatrooms.js on line 269
');
                    jqcc.mobilewebapp.leaveChatroom();
                    jqcc.mobilewebapp.loadLobbyReverse();
                }
                if(bannedOrKicked[1]=='banned'){
                    jqcc.mobilewebapp.banUser(bannedOrKicked[1], incomingid);
                    alert('
Notice: Undefined variable: chatrooms_language in /home/p/prohor5v/student-app.ru/public_html/cometchat/extensions/mobilewebapp/js/chatrooms.js on line 275
');
                    jqcc.mobilewebapp.leaveChatroom(bannedOrKicked[2]);
                    jqcc.mobilewebapp.loadLobbyReverse();
                }
            }
            $("#cometchat_userlist_"+bannedOrKicked[2]).remove();
        }else{
            if($("#cometchat_message_"+incomingid).length>0){
                $("#cometchat_message_"+incomingid).find("span.cometchat_chatboxmessagecontent").html(incomingmessage);
            }else{
                sentdata = '';
                if(sent!=null){
                    var ts = new Date(sent);
                    sentdata = jqcc.mobilewebapp.getTimeDisplay(ts);
                }
                if(fromname == '0'){
                    fromname = '
Notice: Undefined variable: chatrooms_language in /home/p/prohor5v/student-app.ru/public_html/cometchat/extensions/mobilewebapp/js/chatrooms.js on line 291
';
                }
                if(!jqcc.cometchat.getChatroomVars('fullName')&&fromname.indexOf(" ")!=-1){
                    fromname = fromname.slice(0, fromname.indexOf(" "));
                }
                if(fromid!=jqcc.cometchat.getChatroomVars('myid')){
                    temp += ('<div class="cometchat_chatboxmessage you" id="cometchat_message_'+incomingid+'"><span class="cometchat_chatboxmessagefrom"><strong>');
                    if(typeof (jqcc.chatmobilewebapp)!=='undefined'){
                        temp += ('<a href="javascript:void(0)" onclick="javascript:parent.jqcc.chatmobilewebapp.chatWith(\''+fromid+'\');">'+fromname+':</a>');
                    }else{
                        temp += ('<a href="javascript:void(0)" >'+fromname+':</a>');
                    }
                    temp += ('</strong></span><span class="cometchat_chatboxmessagecontent" id="'+incoming.id+'">'+incomingmessage+'</span>'+jqcc.mobilewebapp.getTimeDisplay(id)+'</div><div class="userSeperator"></div><div style="clear:both;"></div>');
                }else{
                    $("#currentroom_convotext").append('<div class="cometchat_chatboxmessage me" id="cometchat_message_'+incoming.id+'"><div style="float:left">/upload/main/e1c/e1c5b41c159a0cad966deed42c4cca80.jpg</div><div style="margin-left:50px;"></table><span class="cometchat_chatboxmessagefrom"><strong>'+fromname+':</strong></span></br><span class="cometchat_chatboxmessagecontent" id="'+incoming.id+'">'+incoming.message+'</span>'+jqcc.mobilewebapp.getLikeDisplay(id)+'</div><div style="clear:both;"></div></div><div class="userSeperator"></div>');
                }

                if(temp!=''){
                    $("#currentroom_convotext").append(temp);
                }
                setTimeout(function(){
                    jqcc.mobilewebapp.crscrollToBottom();
                }, 500);
                if(typeof (jqcc.chatmobilewebapp)!=='undefined')
                    jqcc.chatmobilewebapp.playSound();
                else
                    jqcc.mobilewebapp.playSound();
            }
        }
    },
    checkDropDown: function(dropdown){
        var id = $('#type').val();
        if(id==1){
            $("#chatroomPassword").css('display', 'block');
        }
        else{
            $("#chatroomPassword").css('display', 'none');
        }
    },
    getLikes: function(id){
        return '<i class="fa fa-fw fa-thumbs-o-up"></i>'+$.ajax({
            url: "http://student-app.ru/resources/helpers/scripts/chat_likes/show_like_count.php?mid="+id,
            async: false,
        }).responseText
    },
    loadRoom: function(){
        document.cookie = 'cc_chatroom='+urlencode(jqcc.cometchat.getChatroomVars('currentroom')+':'+jqcc.cometchat.getChatroomVars('currentp')+':'+urlencode(jqcc.cometchat.getChatroomVars('currentroomname')));
        setTimeout(function(){
            jqcc.mobilewebapp.crscrollToBottom();
        }, 500);
    },
    loadMobileChatroom: function(){
        jqcc.mobilewebapp.loadChatroom();
    },
    loadMobileLobbyReverse: function(){
        jqcc.mobilewebapp.loadLobbyReverse();
        exit;
    },
    mobilecreateChatroomSubmit: function(){
        jqcc.cometchat.createChatroomSubmit();
        jqcc.mobilewebapp.chatHeartbeatWebapp(1);
    },
    backchatroom: function(){
        document.cookie = 'cc_chatroom=';
    },
    createChatroomSubmitStruct: function(){
        var name = $('#name').val();
        var type = $('#type').val();
        var password = $('#password').val();
        var room = {};
        if(name!=''&&name!=null){
            name = name.replace(/^\s+|\s+$/g, "");
            if(type==1&&password==''){
                alert('
Notice: Undefined variable: chatrooms_language in /home/p/prohor5v/student-app.ru/public_html/cometchat/extensions/mobilewebapp/js/chatrooms.js on line 364
');
                return false;
            }
            if(type==0){
                password = '';
            }
        }
        room['name'] = name;
        room['password'] = password;
        room['type'] = type;

        return room;
    },
    mobileleaveChatroom: function(id){
        jqcc.cometchat.leaveChatroom(id);
    },
    loadLobby: function(){
        jqcc.mobilewebapp.loadLobbyReverse();
    },
    getChatroomCookie: function(){
        var cookieName = 'cc_'+'chatroom';
        var cookieData = jqcc.mobilewebapp.getCookieInfo(cookieName);
        if(typeof (cookieData)!='undefined'&&cookieData!=""){
            var crDetails = urldecode(cookieData).split(":");
            var id = crDetails[0];
            var name = crDetails[2];
            var invite = crDetails[1];
            setTimeout(function(){
                jqcc.mobilewebapp.mobilechatroom(id, name, null, invite, 1);
            }, 500);
        }
    },
    mobilechatroom: function(id, name, type, invite, silent){
        jqcc.cometchat.chatroom(id, name, type, invite, silent);
    },
    setRoomName: function(currentroomname){
        $('#chatroomName').html(currentroomname);
        $('#chatroomUserName').html(currentroomname);
        $('#crscroller').html('<div id="currentroom_convotext"></div>');
        $('#chatroomusercontent').html('<ul id="currentroom_users"></ul>');
    },
    silentRoom: function(id, name, silent){
        var temp = prompt('
Notice: Undefined variable: chatrooms_language in /home/p/prohor5v/student-app.ru/public_html/cometchat/extensions/mobilewebapp/js/chatrooms.js on line 406
', '')
        if(temp){
            password = SHA1(temp);
        }else{
            return;
        }
        jqcc.cometchat.checkChatroomPass(id, name, silent, temp);
    },
    kickUser: function(kickid, kick){
        jqcc.cometchat.kickChatroomUser(kickid, kick);
    },
    banUser: function(banid, ban){
        jqcc.cometchat.banChatroomUser(banid, ban);
    },
    playSound: function(){
        try{
            jqcc.mobilewebapp.getFlashMovie("cometchatbeep").beep();
        }catch(error){
            jqcc.cometchat.setChatroomVars('messageBeep', 0);
        }
    },
    getFlashMovie: function(movieName){
        var isIE = navigator.appName.indexOf("Microsoft")!=-1;
        return (isIE) ? window[movieName] : document[movieName];
    },
    //1212121212
    getTimeDisplay: function(ts){
        var ap = "";
        var hour = ts.getHours();
        var minute = ts.getMinutes();
        var date = ts.getDate();
        var month = ts.getMonth();
        var armyTime = jqcc.cometchat.getChatroomVars('armyTime');
        if(armyTime!=1){
            ap = hour>11 ? "PM" : "AM";
            hour = hour==0 ? 12 : hour>12 ? hour-12 : hour;
        }else{
            hour = hour<10 ? "0"+hour : hour;
        }
        minute = minute<10 ? "0"+minute : minute;
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var type = 'th';
        if(date==1||date==21||date==31){
            type = 'st';
        }else if(date==2||date==22){
            type = 'nd';
        }else if(date==3||date==23){
            type = 'rd';
        }
        if(ts<jqcc.cometchat.getChatroomVars('todays12am')){
            return '';
        }else{
            return '';
        }
    },

    replaceHtml: function(el, html){
        var oldEl = typeof el==="string" ? document.getElementById(el) : el;
        /*@cc_on // Pure innerHTML is slightly faster in IE
         oldEl.innerHTML = html;
         return oldEl;
         @*/
        var newEl = oldEl.cloneNode(false);
        newEl.innerHTML = html;
        oldEl.parentNode.replaceChild(newEl, oldEl);
        return newEl;
    },
    ccstateReader: function(){
        var cc_state = jqcc.cookie(cookie_prefix+'state');
        if(cc_state!=null){
            var cc_states = cc_state.split(/:/);
            if(cc_states[1]!=' '&&cc_states[1]!=''){
                var chatboxData = cc_states[1].split(/,/);
                for(i = 0; i<chatboxData.length; i++){
                    var chatboxIds = chatboxData[i].split(/\|/)[0];
                    var newMsgCount = chatboxData[i].split(/\|/)[1];
                    if(newMsgCount>0){
                        jqcc('#onlinelist_'+chatboxIds).find('span.newmessages').html(newMsgCount).addClass('newmessageCount');
                    }
                }
            }
        }
    }
});



if (typeof(jqcc) === 'undefined') {
	jqcc = jQuery;
}

jqcc.ajaxSetup({scriptCharset: "utf-8", cache: "false"});

if (typeof(jqcc.cometchat)==='undefined') {
    var mode = 1;
    jqcc.cometchat = function() {};
}

jqcc.extend(jqcc.cometchat, {
    crvariables : {themename: 'standard',
                timestamp: '0',
                currentroom: '0',
                currentp: '',
                currentroomcode: '',
                myid: '0',
                owner: '0',
                isModerator: 0,
                cu_uids: [],
                heartbeatTimer: '',
                baseUrl: '/cometchat/',
                minHeartbeat: '3000',
                maxHeartbeat: '12000',
                fullName: '1',
                hideEnterExit: '0',
                messageBeep: '1',
                heartbeatTime: this.minHeartbeat,
                heartbeatCount: 1,
                todaysDate: new Date(),
                todays12am: (new Date()).getTime() - ((new Date()).getTime()%(24*60*60*1000)),
                clh: '',
                ulh: '',
                prepend: 0,
                users: {},
                usersName: {},
                initializeRoom: 0,
                password: '',
                currentroomname: '',
                armyTime: '0',
                specialChars: /([^\x00-\x80]+)|([&][#])+/,
                apiAccess: 0,
                lightboxWindows: '1',
                newMessages: 0,
                plugins: ['chattime', 'style', 'filetransfer', 'smilies'],
                cookie_prefix: 'cc_',
                basedata: getURLParameter('basedata'),
                allowDelete: '1',
                lastmessagetime : Math.floor(new Date().getTime()),
                floodControl: '0',
                calleeAPI: 'mobilewebapp',
                moderators: [1],
                windowCount: 0,
                windows: [],
                popoutmode: getURLParameter('popoutmode'),
                cookiePrefix: 'cc_',
				newMessageIndicator: '1'
            },
            getcrAllVariables: function() {
                return this.crvariables;
            },
            getChatroomVars: function(key) {
                if (typeof(this.crvariables[key])!=='undefined')
                    return this.crvariables[key];
            },
            setChatroomVars: function(key, value) {
                this.crvariables[key] = value;
            },
            chatroommessageBeep: function() {
                return this.crvariables.messageBeep;
            },

            getBaseUrl: function() {
                return this.crvariables.baseUrl;
            },

            getBaseData: function() {
				if ($.cookie(this.crvariables.cookiePrefix + 'data') !== null) {
					return $.cookie(this.crvariables.cookiePrefix + 'data');
				}
                return this.crvariables.basedata;
            },
            popoutChatroom: function() {
                jqcc.cometchat.leaveChatroom();
                myRef = window.open(self.location,'popoutchat','left=20,top=20,status=0,toolbar=0,menubar=0,directories=0,location=0,status=0,scrollbars=0,resizable=1,width=800,height=600');
                if (typeof(parent.jqcc.cometchat.closeModule) == "function")
                    parent.jqcc.cometchat.closeModule('chatrooms');
                setTimeout('window.location.reload()',3000);
            },
            checkModerator: function() {
                if(typeof jqcc.cometchat.getChatroomVars != 'undefined' && jqcc.cometchat.getChatroomVars('myid') != ''){
                    var moderators = jqcc.cometchat.getChatroomVars('moderators');
                    var userid = jqcc.cometchat.getChatroomVars('myid');
                    if(moderators.indexOf(userid) > -1){
                        jqcc.cometchat.setChatroomVars('isModerator','1');
                        return 1;
                    }
                }
                return 0;
            },
            chatroomBoxKeydown: function(event,chatboxtextarea,force) {
                var condition = 1;
                if ((event.keyCode == 13 && event.shiftKey == 0) || force == 1) {

                    var message = jqcc(chatboxtextarea).val();
                    message = message.replace(/^\s+|\s+$/g,"");
                    if (this.crvariables.floodControl != 0) {
                        condition = ((Math.floor(new Date().getTime())) - this.crvariables.lastmessagetime > 2000);
                    }
                    if (condition) {
                        var messageLength = message.length;
                        this.crvariables.lastmessagetime = Math.floor(new Date().getTime());
                        if (this.crvariables.currentroom != 0) {
                            if(typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].sendChatroomMessage) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].sendChatroomMessage(chatboxtextarea);
                            if (message != '') {
                                jqcc.cometchat.sendmessageProcess(message, this.crvariables.currentroom, this.crvariables.basedata, this.crvariables.currentroomname);
                            }
                        }
                        return false;
                    } else {
                        alert('Please do not spam in chatroom');
                    }
                }
            },
            sendmessageProcess: function(message, currentroom, basedata, currentroomname) {

                if (message != '') {
					if (message.length > 1000){
						if (message.charAt(1000) == ' ') {
							messagecurrent = message.substring(0,1000);
						} else {
							messagecurrent = message.substring(0,1000);
							var spacePos = messagecurrent.length;
							while (messagecurrent.charAt(spacePos) != ' ') {
								  spacePos--;
							}
							messagecurrent = message.substring(0,spacePos);
						}
						messagenext = message.substring(messagecurrent.length);
						if (messagenext.length > 0) {
							messagecurrent = messagecurrent + "...";
						}
					} else {
							messagecurrent = message;
							messagenext = '';
					}
					message = messagecurrent;
                    jqcc.post(this.crvariables.baseUrl+"modules/chatrooms/chatrooms.php?action=sendmessage", {message: message , currentroom: currentroom, basedata:basedata, currentroomname: currentroomname} , function(data) {

                        if (data) {
                        if(data.hasOwnProperty('m')){
                            message = data.m;
                        }
                                                    if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].addChatroomMessage) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].addChatroomMessage(jqcc.cometchat.getChatroomVars('myid'), message,data.id,1,Math.floor(new Date().getTime()),'0');
                                                    if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomScrollDown) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomScrollDown(1);
                        } else if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].crscrollToBottom) == "function") {
                            jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].crscrollToBottom();
                        }
                        if (messagenext.length > 0) {
                                jqcc.cometchat.sendmessageProcess('...'+messagenext, currentroom, basedata, currentroomname);
                        }
                    },'json');

                }
            },
            confirmDelete: function(delid) {
                var confirmed = confirm('Are you want to sure you want to delete this message?');
                if (confirmed==true) {
                    jqcc.cometchat.deleteMessage(delid);
                }
            },
            deleteMessage: function(delid) {
                jqcc.ajax({
                    url: "chatrooms.php?action=deleteChatroomMessage",
                    type: "POST",
                    data: {delid:delid,currentroom:this.crvariables.currentroom, basedata:this.crvariables.basedata},
                    success: function(s) {
                        if (s == 1) {
                            $("#cometchat_message_"+delid).remove();
                        }
                    }
                });
            },
            leaveChatroom: function(id, banflag, callbackfn) {
                var flag=0;
                var params = "action=leavechatroom";
                if (typeof(id) != 'undefined') {
                    flag=1;
                }
                if (typeof(banflag) != 'undefined') {
                    params = params + "&banflag=1";
                }
                                if (typeof(jqcc[this.crvariables.calleeAPI].leaveRoomClass) == "function")
                    jqcc[this.crvariables.calleeAPI].leaveRoomClass(this.crvariables.currentroom);
                jqcc.post(this.crvariables.baseUrl+"modules/chatrooms/chatrooms.php?"+params, {currentroom: this.crvariables.currentroom, flag:flag, basedata:this.crvariables.basedata}, function(data) {
                    if (data) {
                        jqcc.cometchat.setChatroomVars('currentp','');
                        jqcc.cometchat.setChatroomVars('currentroomname','');
                        jqcc.cometchat.setChatroomVars('currentroom',0);
                        if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].removeCurrentRoomTab) == "function")
                            jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].removeCurrentRoomTab();
                        document.cookie = 'cc_chatroom=';
                        if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadLobby) == "function" && callbackfn != 'mobilewebapp')
                            jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadLobby();
                        clearTimeout(jqcc.cometchat.getChatroomVars('heartbeatTimer'));
                        jqcc.cometchat.chatroomHeartbeat(1);
                    }
                });
            },
            createChatroomSubmit: function() {
                var room = jqcc[this.crvariables.calleeAPI].createChatroomSubmitStruct();
                if (room.name != '' && typeof(room.name) != 'undefined') {
                    jqcc.post(this.crvariables.baseUrl+"modules/chatrooms/chatrooms.php?action=createchatroom", {name: room.name, type:room.type, password: room.password, basedata:this.crvariables.basedata} , function(data) {
                        if (parseInt(data)!=0) {
                            jqcc.cometchat.setChatroomVars('currentp',SHA1(room.password))
                            room.name = urlencode(room.name);
                            jqcc.cometchat.chatroom(data,room.name,room.type,jqcc.cometchat.getChatroomVars('currentp'),1);
                        } else {
                            alert('This room name is not available.');
                            if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].createChatroom) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].createChatroom();
                        }
                    });
                } else {
                    alert('Please enter the room name.');
                }
                return false;
            },
            deleteChatroom: function(event,id){
                event.stopPropagation();
                var confirmDeletion = confirm('Are you sure you want to delete this chatroom?');
                if (confirmDeletion == true) {
                    jqcc.cometchat.leaveChatroom();
                    jqcc.post(this.crvariables.baseUrl+"modules/chatrooms/chatrooms.php?action=deletechatroom", {id: id, basedata:this.crvariables.basedata} , function(data) {
                        if (data != '' && parseInt(data)!=0) {
                            alert('The room has been deleted successfully');
                            jqcc.cometchat.chatroomHeartbeat(1);
                        } else {
                            alert('You do not have permissions to delete the chatroom');
                        }
                    });
                }
            },
            inviteChatroomUser: function() {
                jqcc[this.crvariables.calleeAPI].loadCCPopup(this.crvariables.baseUrl+'modules/chatrooms/chatrooms.php?action=invite&roomid='+this.crvariables.currentroom+'&inviteid='+this.crvariables.currentp+'&basedata='+this.crvariables.basedata+'&roomname='+urlencode(this.crvariables.currentroomname)+'&popoutmode='+this.crvariables.popoutmode, 'invite',"status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=1, width=400,height=200",400,200,'Please select users');
            },
            unbanChatroomUser: function() {
                jqcc[this.crvariables.calleeAPI].loadCCPopup(this.crvariables.baseUrl+'modules/chatrooms/chatrooms.php?action=unban&roomid='+this.crvariables.currentroom+'&inviteid='+this.crvariables.currentp+'&basedata='+this.crvariables.basedata+'&roomname='+urlencode(this.crvariables.currentroomname)+'&popoutmode='+this.crvariables.popoutmode+'&time='+Math.random(), 'invite',"status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=1, width=400,height=200",400,200,'Please select users');
            },
            loadChatroomPro: function(uid,owner,longname) {
                jqcc[this.crvariables.calleeAPI].loadCCPopup(this.crvariables.baseUrl+'modules/chatrooms/chatrooms.php?action=loadChatroomPro&apiAccess='+this.crvariables.apiAccess+'&owner='+owner+'&roomid='+this.crvariables.currentroom+'&basedata='+this.crvariables.basedata+'&inviteid='+uid+'&roomname='+urlencode(this.crvariables.currentroomname)+'&popoutmode='+this.crvariables.popoutmode, 'loadChatroomPro',"status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=1, width=365,height=100",365,75,longname);
            },
            silentroom: function(roomid, inviteid, roomname) {
                jqcc.cometchat.chatroom(roomid,roomname,1,inviteid,1);
            },
            checkChatroomPass: function(id,name,silent,password) {
                if (silent != 1) {
                    password=SHA1(password);
                }
                jqcc.post(this.crvariables.baseUrl+"modules/chatrooms/chatrooms.php?action=checkpassword", {password: password, id: id, basedata:this.crvariables.basedata} , function(data) {
                    if (data) {
                        if (data['s'] != 'INVALID_PASSWORD' && data['s'] != 'BANNED' && data['s'] !='INVALID_CHATROOM') {

                                                        jqcc.cometchat.setChatroomVars('owner',parseInt(data['owner']));
                            jqcc.cometchat.setChatroomVars('myid',parseInt(data['userid']));
                            jqcc.cometchat.setChatroomVars('isModerator',parseInt(data['ismoderator']));
                            jqcc.cometchat.setChatroomVars('currentp',password);
                            jqcc.cometchat.setChatroomVars('initializeRoom',1);
                            if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].hidetabs) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].hidetabs();
                            if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].selectChatroom) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].selectChatroom(jqcc.cometchat.getChatroomVars('currentroom'),id);
                            jqcc.cometchat.setChatroomVars('currentroom',id);
                            jqcc.cometchat.setChatroomVars('ulh','');
                            jqcc.cometchat.setChatroomVars('timestamp',0);
                            jqcc.cometchat.setChatroomVars('currentroomname',name);
                            if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].checkOwnership) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].checkOwnership(jqcc.cometchat.getChatroomVars('owner'),jqcc.cometchat.getChatroomVars('isModerator'),name);
                            if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].setRoomName) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].setRoomName(name);
                            if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadRoom) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadRoom();
                            clearTimeout(jqcc.cometchat.getChatroomVars('heartbeatTimer'));
                            if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadMobileChatroom) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadMobileChatroom();
                            jqcc.cometchat.setChatroomVars('cu_uids','');
                            jqcc.cometchat.chatroomHeartbeat(1);
                        } else {
                            if (data['s'] == 'BANNED') {
                                if (silent != 1) {
                                    alert ('Sorry, you are banned from this chatroom.');
                                    if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadMobileLobbyReverse) == "function")
                                        jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadMobileLobbyReverse();
                                }
                            }else if (data['s'] == 'INVALID_CHATROOM'){
                                alert('The room has been deleted.');
                            }else {
                                alert('Incorrect password. Please try again.');
                            }
                        }
                    }
                });
},
            chatroom: function(id,name,type,invite,silent) {
                name = urldecode(name);
                if (this.crvariables.currentroom != id) {
                    this.crvariables.password = '';
                    if (invite != '') {
                        this.crvariables.password = invite;
                    }
                    if (type == 1 || type == 2) {
                        if (silent != 1) {
                            if (typeof(jqcc[this.crvariables.calleeAPI].silentRoom) == "function")
                                jqcc[this.crvariables.calleeAPI].silentRoom(id, name, silent);
                        } else {
                            jqcc.cometchat.checkChatroomPass(id,name,silent,this.crvariables.password);
                        }
                    } else {
                        jqcc.cometchat.checkChatroomPass(id,name,silent,this.crvariables.password);
                    }
                } else {
                    if (typeof(jqcc[this.crvariables.calleeAPI].loadRoom) == "function")
                        jqcc[this.crvariables.calleeAPI].loadRoom();
                    clearTimeout(this.crvariables.heartbeatTimer);
                    jqcc.cometchat.chatroomHeartbeat(1);
                }
            },
            chatroomHeartbeat: function(forceUpdate) {
                jqcc.ajax({
                    url: this.crvariables.baseUrl+"modules/chatrooms/chatrooms.php?action=heartbeat",
                    data: {timestamp: this.crvariables.timestamp, currentroom: this.crvariables.currentroom, clh: this.crvariables.clh, ulh: this.crvariables.ulh, currentp: this.crvariables.currentp, popout:this.crvariables.apiAccess, force: forceUpdate ,basedata:this.crvariables.basedata},
                    type: 'post',
                    cache: false,
                    timeout: 10000,
                    error: function() {
                        clearTimeout(jqcc.cometchat.getChatroomVars('heartbeatTimer'));
                        jqcc.cometchat.setChatroomVars('heartbeatTime', jqcc.cometchat.getChatroomVars('minHeartbeat'));
                        jqcc.cometchat.setChatroomVars('heartbeatTimer', setTimeout( function() { jqcc.cometchat.chatroomHeartbeat(); },jqcc.cometchat.getChatroomVars('heartbeatTime')));
                    },
                    success: function(data) {
                        if (data) {
                            var fetchedUsers = 0;
                            $.each(data, function(type,item) {
                                if (type == 'logout') {
                                    if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomLogout) == "function")
                                        jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomLogout();
                                }
                                if (type == 'userid') {
                                    jqcc.cometchat.setChatroomVars('myid',item);
                                }
                                if (type == 'chatrooms') {
                                    if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadChatroomList) == "function")
                                        jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadChatroomList(item);
                                }
                                if (type == 'clh') {
                                    jqcc.cometchat.setChatroomVars('clh',item);
                                }
                                if (type == 'prepend') {
                                    jqcc.cometchat.setChatroomVars('prepend',item);
                                }
                                if (type == 'ulh') {
                                    jqcc.cometchat.setChatroomVars('ulh',item);
                                }
                                if (type == 'messages') {
                                    if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].displayChatroomMessage) == "function")
                                        jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].displayChatroomMessage(item,fetchedUsers);
                                }
                                if (type == 'users') {
                                    if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].updateChatroomUsers) == "function")
                                        jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].updateChatroomUsers(item,fetchedUsers);
                                }
								if (type == 'error') {
									if(item =='ROOM_DOES_NOT_EXISTS'){
										alert('The room has been deleted.');
									}
									jqcc.cometchat.leaveChatroom();
                                }
                            });
                        }
                        jqcc.cometchat.setChatroomVars('heartbeatCount',jqcc.cometchat.getChatroomVars('heartbeatCount')+1);
                        if (jqcc.cometchat.getChatroomVars('heartbeatCount') > 4) {
                            jqcc.cometchat.setChatroomVars('heartbeatTime',jqcc.cometchat.getChatroomVars('heartbeatTime') * 2);
                            jqcc.cometchat.setChatroomVars('heartbeatCount',1);
                        }
                        if (jqcc.cometchat.getChatroomVars('heartbeatTime') > jqcc.cometchat.getChatroomVars('maxHeartbeat')) {
                            jqcc.cometchat.setChatroomVars('heartbeatTime', jqcc.cometchat.getChatroomVars('maxHeartbeat'));
                        }
                        clearTimeout(jqcc.cometchat.getChatroomVars('heartbeatTimer'));
                        jqcc.cometchat.setChatroomVars('heartbeatTime', jqcc.cometchat.getChatroomVars('minHeartbeat'));
                        jqcc.cometchat.setChatroomVars('heartbeatTimer', setTimeout( function() { jqcc.cometchat.chatroomHeartbeat(); },jqcc.cometchat.getChatroomVars('heartbeatTime')));
                    }
                });
            },
            kickChatroomUser: function(kickid,kick){
                jqcc.ajax({
                    url: this.crvariables.baseUrl+"modules/chatrooms/chatrooms.php?action=kickUser",
                    type: "POST",
                    data: {kickid:kickid,currentroom:this.crvariables.currentroom,kick:kick, basedata:this.crvariables.basedata},
                    success: function(s) {
                        if (s == 1) {
                            if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].kickid) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].kickid(kickid);
                            jqcc.cometchat.setChatroomVars('ulh','');
                        }
                    }
                });
            },
            banChatroomUser: function(banid,ban){
                jqcc.ajax({
                    url: this.crvariables.baseUrl+"modules/chatrooms/chatrooms.php?action=banUser",
                    type: "POST",
                    data: {banid:banid,currentroom:this.crvariables.currentroom,ban:ban, basedata:this.crvariables.basedata, popoutmode:this.crvariables.popoutmode},
                    success: function(s) {
                        if (s == 1) {
                            if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].banid) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].banid(banid);
                        }
                    }
                });
            },
            chatroomready: function() {
                jqcc(document).ready(function() {
                    if(jqcc.cometchat.getChatroomVars('calleeAPI') != 'mobilewebapp') {
                        if ((jqcc.cometchat.chatroommessageBeep()) == 1) {
                            $('<audio id="messageBeep" style="display:none;"><source src="'+jqcc.cometchat.getChatroomVars('baseUrl')+'mp3/beep.mp3" type="audio/mpeg"><source src="'+jqcc.cometchat.getChatroomVars('baseUrl')+'mp3/beep.ogg" type="audio/ogg"><source src="'+jqcc.cometchat.getChatroomVars('baseUrl')+'mp3/beep.wav" type="audio/wav"></audio>').appendTo($("body"));
                        }
                        try {
                            if (parent.jqcc.cometchat.ping() == 1) {
                                jqcc.cometchat.setChatroomVars('apiAccess',1);
                            }
                        } catch (e) {}
                                if(jqcc.cometchat.getChatroomVars('calleeAPI') !== 'mobilewebapp') {
                                        jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomWindowResize();
                                }
                        if (jqcc().slimScroll) {
                            jqcc("#currentroom_convo").slimScroll({height: jqcc("#currentroom_convo").css('height')});
                            jqcc("#currentroom_users").slimScroll({height: jqcc("#currentroom_users").css('height')});
                        }
                        window.onresize = function(event) {
                            if(jqcc.cometchat.getChatroomVars('calleeAPI') !== 'mobilewebapp') {
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomWindowResize();
                            }
                        }
                        jqcc('#currentroom').mouseover(function() {
                            jqcc.cometchat.setChatroomVars('newMessages',0);
                        });
                        jqcc.cometchat.chatroomHeartbeat(1);
                        jqcc("textarea.cometchat_textarea").keydown(function(event) {
                            return jqcc.cometchat.chatroomBoxKeydown(event,this);
                        });
                        jqcc("div.cometchat_tabcontentsubmit").click(function(event) {
                            return jqcc.cometchat.chatroomBoxKeydown(event,jqcc("textarea.cometchat_textarea"),1);
                        });
                        jqcc("textarea.cometchat_textarea").keyup(function(event) {
                            return jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomBoxKeyup(event,this);
                        });
                    }
                });
            }
        }
    );

    jqcc.cometchat.chatroomready();


    function SHA1(e){function rotate_left(n,s){var a=(n<<s)|(n>>>(32-s));return a};function lsb_hex(a){var b="";var i;var c;var d;for(i=0;i<=6;i+=2){c=(a>>>(i*4+4))&0x0f;d=(a>>>(i*4))&0x0f;b+=c.toString(16)+d.toString(16)}return b};function cvt_hex(a){var b="";var i;var v;for(i=7;i>=0;i--){v=(a>>>(i*4))&0x0f;b+=v.toString(16)}return b};function Utf8Encode(a){a=a.replace(/\r\n/g,"\n");var b="";for(var n=0;n<a.length;n++){var c=a.charCodeAt(n);if(c<128){b+=String.fromCharCode(c)}else if((c>127)&&(c<2048)){b+=String.fromCharCode((c>>6)|192);b+=String.fromCharCode((c&63)|128)}else{b+=String.fromCharCode((c>>12)|224);b+=String.fromCharCode(((c>>6)&63)|128);b+=String.fromCharCode((c&63)|128)}}return b};var f;var i,j;var W=new Array(80);var g=0x67452301;var h=0xEFCDAB89;var k=0x98BADCFE;var l=0x10325476;var m=0xC3D2E1F0;var A,B,C,D,E;var o;e=Utf8Encode(e);var p=e.length;var q=new Array();for(i=0;i<p-3;i+=4){j=e.charCodeAt(i)<<24|e.charCodeAt(i+1)<<16|e.charCodeAt(i+2)<<8|e.charCodeAt(i+3);q.push(j)}switch(p%4){case 0:i=0x080000000;break;case 1:i=e.charCodeAt(p-1)<<24|0x0800000;break;case 2:i=e.charCodeAt(p-2)<<24|e.charCodeAt(p-1)<<16|0x08000;break;case 3:i=e.charCodeAt(p-3)<<24|e.charCodeAt(p-2)<<16|e.charCodeAt(p-1)<<8|0x80;break}q.push(i);while((q.length%16)!=14)q.push(0);q.push(p>>>29);q.push((p<<3)&0x0ffffffff);for(f=0;f<q.length;f+=16){for(i=0;i<16;i++)W[i]=q[f+i];for(i=16;i<=79;i++)W[i]=rotate_left(W[i-3]^W[i-8]^W[i-14]^W[i-16],1);A=g;B=h;C=k;D=l;E=m;for(i=0;i<=19;i++){o=(rotate_left(A,5)+((B&C)|(~B&D))+E+W[i]+0x5A827999)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=o}for(i=20;i<=39;i++){o=(rotate_left(A,5)+(B^C^D)+E+W[i]+0x6ED9EBA1)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=o}for(i=40;i<=59;i++){o=(rotate_left(A,5)+((B&C)|(B&D)|(C&D))+E+W[i]+0x8F1BBCDC)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=o}for(i=60;i<=79;i++){o=(rotate_left(A,5)+(B^C^D)+E+W[i]+0xCA62C1D6)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=o}g=(g+A)&0x0ffffffff;h=(h+B)&0x0ffffffff;k=(k+C)&0x0ffffffff;l=(l+D)&0x0ffffffff;m=(m+E)&0x0ffffffff}var o=cvt_hex(g)+cvt_hex(h)+cvt_hex(k)+cvt_hex(l)+cvt_hex(m);return o.toLowerCase()}

    function MD5(j){function RotateLeft(a,b){return(a<<b)|(a>>>(32-b))}function AddUnsigned(a,b){var c,lY4,lX8,lY8,lResult;lX8=(a&0x80000000);lY8=(b&0x80000000);c=(a&0x40000000);lY4=(b&0x40000000);lResult=(a&0x3FFFFFFF)+(b&0x3FFFFFFF);if(c&lY4){return(lResult^0x80000000^lX8^lY8)}if(c|lY4){if(lResult&0x40000000){return(lResult^0xC0000000^lX8^lY8)}else{return(lResult^0x40000000^lX8^lY8)}}else{return(lResult^lX8^lY8)}}function F(x,y,z){return(x&y)|((~x)&z)}function G(x,y,z){return(x&z)|(y&(~z))}function H(x,y,z){return(x^y^z)}function I(x,y,z){return(y^(x|(~z)))}function FF(a,b,c,d,x,s,e){a=AddUnsigned(a,AddUnsigned(AddUnsigned(F(b,c,d),x),e));return AddUnsigned(RotateLeft(a,s),b)};function GG(a,b,c,d,x,s,e){a=AddUnsigned(a,AddUnsigned(AddUnsigned(G(b,c,d),x),e));return AddUnsigned(RotateLeft(a,s),b)};function HH(a,b,c,d,x,s,e){a=AddUnsigned(a,AddUnsigned(AddUnsigned(H(b,c,d),x),e));return AddUnsigned(RotateLeft(a,s),b)};function II(a,b,c,d,x,s,e){a=AddUnsigned(a,AddUnsigned(AddUnsigned(I(b,c,d),x),e));return AddUnsigned(RotateLeft(a,s),b)};function ConvertToWordArray(a){var b;var c=a.length;var d=c+8;var e=(d-(d%64))/64;var f=(e+1)*16;var g=Array(f-1);var h=0;var i=0;while(i<c){b=(i-(i%4))/4;h=(i%4)*8;g[b]=(g[b]|(a.charCodeAt(i)<<h));i++}b=(i-(i%4))/4;h=(i%4)*8;g[b]=g[b]|(0x80<<h);g[f-2]=c<<3;g[f-1]=c>>>29;return g};function WordToHex(a){var b="",WordToHexValue_temp="",lByte,lCount;for(lCount=0;lCount<=3;lCount++){lByte=(a>>>(lCount*8))&255;WordToHexValue_temp="0"+lByte.toString(16);b=b+WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2)}return b};function Utf8Encode(a){a=a.replace(/\r\n/g,"\n");var b="";for(var n=0;n<a.length;n++){var c=a.charCodeAt(n);if(c<128){b+=String.fromCharCode(c)}else if((c>127)&&(c<2048)){b+=String.fromCharCode((c>>6)|192);b+=String.fromCharCode((c&63)|128)}else{b+=String.fromCharCode((c>>12)|224);b+=String.fromCharCode(((c>>6)&63)|128);b+=String.fromCharCode((c&63)|128)}}return b};var x=Array();var k,AA,BB,CC,DD,a,b,c,d;var l=7,S12=12,S13=17,S14=22;var m=5,S22=9,S23=14,S24=20;var o=4,S32=11,S33=16,S34=23;var p=6,S42=10,S43=15,S44=21;j=Utf8Encode(j);x=ConvertToWordArray(j);a=0x67452301;b=0xEFCDAB89;c=0x98BADCFE;d=0x10325476;for(k=0;k<x.length;k+=16){AA=a;BB=b;CC=c;DD=d;a=FF(a,b,c,d,x[k+0],l,0xD76AA478);d=FF(d,a,b,c,x[k+1],S12,0xE8C7B756);c=FF(c,d,a,b,x[k+2],S13,0x242070DB);b=FF(b,c,d,a,x[k+3],S14,0xC1BDCEEE);a=FF(a,b,c,d,x[k+4],l,0xF57C0FAF);d=FF(d,a,b,c,x[k+5],S12,0x4787C62A);c=FF(c,d,a,b,x[k+6],S13,0xA8304613);b=FF(b,c,d,a,x[k+7],S14,0xFD469501);a=FF(a,b,c,d,x[k+8],l,0x698098D8);d=FF(d,a,b,c,x[k+9],S12,0x8B44F7AF);c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);a=FF(a,b,c,d,x[k+12],l,0x6B901122);d=FF(d,a,b,c,x[k+13],S12,0xFD987193);c=FF(c,d,a,b,x[k+14],S13,0xA679438E);b=FF(b,c,d,a,x[k+15],S14,0x49B40821);a=GG(a,b,c,d,x[k+1],m,0xF61E2562);d=GG(d,a,b,c,x[k+6],S22,0xC040B340);c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);b=GG(b,c,d,a,x[k+0],S24,0xE9B6C7AA);a=GG(a,b,c,d,x[k+5],m,0xD62F105D);d=GG(d,a,b,c,x[k+10],S22,0x2441453);c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);b=GG(b,c,d,a,x[k+4],S24,0xE7D3FBC8);a=GG(a,b,c,d,x[k+9],m,0x21E1CDE6);d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);c=GG(c,d,a,b,x[k+3],S23,0xF4D50D87);b=GG(b,c,d,a,x[k+8],S24,0x455A14ED);a=GG(a,b,c,d,x[k+13],m,0xA9E3E905);d=GG(d,a,b,c,x[k+2],S22,0xFCEFA3F8);c=GG(c,d,a,b,x[k+7],S23,0x676F02D9);b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);a=HH(a,b,c,d,x[k+5],o,0xFFFA3942);d=HH(d,a,b,c,x[k+8],S32,0x8771F681);c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);a=HH(a,b,c,d,x[k+1],o,0xA4BEEA44);d=HH(d,a,b,c,x[k+4],S32,0x4BDECFA9);c=HH(c,d,a,b,x[k+7],S33,0xF6BB4B60);b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);a=HH(a,b,c,d,x[k+13],o,0x289B7EC6);d=HH(d,a,b,c,x[k+0],S32,0xEAA127FA);c=HH(c,d,a,b,x[k+3],S33,0xD4EF3085);b=HH(b,c,d,a,x[k+6],S34,0x4881D05);a=HH(a,b,c,d,x[k+9],o,0xD9D4D039);d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);b=HH(b,c,d,a,x[k+2],S34,0xC4AC5665);a=II(a,b,c,d,x[k+0],p,0xF4292244);d=II(d,a,b,c,x[k+7],S42,0x432AFF97);c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);b=II(b,c,d,a,x[k+5],S44,0xFC93A039);a=II(a,b,c,d,x[k+12],p,0x655B59C3);d=II(d,a,b,c,x[k+3],S42,0x8F0CCC92);c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);b=II(b,c,d,a,x[k+1],S44,0x85845DD1);a=II(a,b,c,d,x[k+8],p,0x6FA87E4F);d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);c=II(c,d,a,b,x[k+6],S43,0xA3014314);b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);a=II(a,b,c,d,x[k+4],p,0xF7537E82);d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);c=II(c,d,a,b,x[k+2],S43,0x2AD7D2BB);b=II(b,c,d,a,x[k+9],S44,0xEB86D391);a=AddUnsigned(a,AA);b=AddUnsigned(b,BB);c=AddUnsigned(c,CC);d=AddUnsigned(d,DD)}var q=WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);return q.toLowerCase()}

    function base64_encode(a){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var c,o2,o3,h1,h2,h3,h4,bits,i=0,ac=0,enc="",tmp_arr=[];if(!a){return a}a=this.utf8_encode(a+'');do{c=a.charCodeAt(i++);o2=a.charCodeAt(i++);o3=a.charCodeAt(i++);bits=c<<16|o2<<8|o3;h1=bits>>18&0x3f;h2=bits>>12&0x3f;h3=bits>>6&0x3f;h4=bits&0x3f;tmp_arr[ac++]=b.charAt(h1)+b.charAt(h2)+b.charAt(h3)+b.charAt(h4)}while(i<a.length);enc=tmp_arr.join('');switch(a.length%3){case 1:enc=enc.slice(0,-2)+'==';break;case 2:enc=enc.slice(0,-1)+'=';break}return enc}

    function base64_decode(a){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var c,o2,o3,h1,h2,h3,h4,bits,i=0,ac=0,dec="",tmp_arr=[];if(!a){return a}a+='';do{h1=b.indexOf(a.charAt(i++));h2=b.indexOf(a.charAt(i++));h3=b.indexOf(a.charAt(i++));h4=b.indexOf(a.charAt(i++));bits=h1<<18|h2<<12|h3<<6|h4;c=bits>>16&0xff;o2=bits>>8&0xff;o3=bits&0xff;if(h3==64){tmp_arr[ac++]=String.fromCharCode(c)}else if(h4==64){tmp_arr[ac++]=String.fromCharCode(c,o2)}else{tmp_arr[ac++]=String.fromCharCode(c,o2,o3)}}while(i<a.length);dec=tmp_arr.join('');dec=this.utf8_decode(dec);return dec}

    function utf8_decode(a){var b=[],i=0,ac=0,c1=0,c2=0,c3=0;a+='';while(i<a.length){c1=a.charCodeAt(i);if(c1<128){b[ac++]=String.fromCharCode(c1);i++}else if((c1>191)&&(c1<224)){c2=a.charCodeAt(i+1);b[ac++]=String.fromCharCode(((c1&31)<<6)|(c2&63));i+=2}else{c2=a.charCodeAt(i+1);c3=a.charCodeAt(i+2);b[ac++]=String.fromCharCode(((c1&15)<<12)|((c2&63)<<6)|(c3&63));i+=3}}return b.join('')}

    function utf8_encode(a){var b=(a+'');var c="";var d,end;var e=0;d=end=0;e=b.length;for(var n=0;n<e;n++){var f=b.charCodeAt(n);var g=null;if(f<128){end++}else if(f>127&&f<2048){g=String.fromCharCode((f>>6)|192)+String.fromCharCode((f&63)|128)}else{g=String.fromCharCode((f>>12)|224)+String.fromCharCode(((f>>6)&63)|128)+String.fromCharCode((f&63)|128)}if(g!==null){if(end>d){c+=b.substring(d,end)}c+=g;d=end=n+1}}if(end>d){c+=b.substring(d,b.length)}return c}

    function urlencode (string) {
            return base64_encode(string);
    }

    function urldecode (string) {
            return base64_decode(string);
    }

    function getURLParameter (name) {
            return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
    }

    /* Copyright (c) 2006 Klaus Hartl (stilbuero.de)
     http://www.opensource.org/licenses/mit-license.php*/

    jqcc.cookie=function(a,b,c){if(typeof b!='undefined'){c=c||{};if(b===null){b='';c.expires=-1}var d='';if(c.expires&&(typeof c.expires=='number'||c.expires.toUTCString)){var e;if(typeof c.expires=='number'){e=new Date();e.setTime(e.getTime()+(c.expires*24*60*60*1000))}else{e=c.expires}d='; expires='+e.toUTCString()}var f=c.path?'; path='+(c.path):'';var g=c.domain?'; domain='+(c.domain):'';var h=c.secure?'; secure':'';document.cookie=[a,'=',encodeURIComponent(b),d,f,g,h].join('')}else{var j=null;if(document.cookie&&document.cookie!=''){var k=document.cookie.split(';');for(var i=0;i<k.length;i++){var l=jqcc.trim(k[i]);if(l.substring(0,a.length+1)==(a+'=')){j=decodeURIComponent(l.substring(a.length+1));break}}}return j}};

    /* SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License
     http://www.opensource.org/licenses/mit-license.php */

    if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectCCUtil=="undefined"){deconcept.SWFObjectCCUtil=new Object();}deconcept.SWFObjectCC=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectCCUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObjectCC.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObjectCC.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectCCUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectCCUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObjectCC.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectCCUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectCCUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectCCUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObjectCC;var SWFObjectCC=deconcept.SWFObjectCC;


	function getTimeDisplay(ts){
		var ap = "";
		var hour = ts.getHours();
		var minute = ts.getMinutes();
		var date = ts.getDate();
		var month = ts.getMonth();
		var year = ts.getFullYear();
		if(jqcc.cometchat.getChatroomVars('armyTime')!=1){
			ap = hour>11 ? "PM" : "AM";
			hour = hour==0 ? 12 : hour>12 ? hour-12 : hour;
		}else{
			hour = hour<10 ? "0"+hour : hour;
		}
		minute = minute<10 ? "0"+minute : minute;
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var type = 'th';
		if(date==1||date==21||date==31){
			type = 'st';
		}else if(date==2||date==22){
			type = 'nd';
		}else if(date==3||date==23){
			type = 'rd';
		}
		return {ap:ap,hour:hour,minute:minute,date:date,month:months[month],year:year,type:type};
	}


/*
		* CometChat
		* Copyright (c) 2014 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

(function($){

	$.ccchattime = (function () {
		var title = 'Show/hide time';
		var enabled=new Array();
		return {

			getTitle: function() {
				return title;
			},

			init: function (id) {
								var cometchat_user_popup = $("#cometchat_user_"+id+"_popup");
				if (cometchat_user_popup.find("span.cometchat_ts").css('display') == 'none') {
					cometchat_user_popup.find("span.cometchat_ts").css('display','inline');
					enabled[id]=1;
				} else {
					cometchat_user_popup.find("span.cometchat_ts_date").css('display','none');
					cometchat_user_popup.find("span.cometchat_ts").css('display','none');
					enabled[id]=0;
				}
							},

			getEnabled:function (id){
								if(typeof(enabled[id])=='undefined'){
					return 0;
				}
				return enabled[id];
				
			}

		};
	})();
})(jqcc);
/*
 * CometChat
 * Copyright (c) 2014 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

(function($){   
  
	$.ccstyle = (function () {

		var title = 'Color your text';
		var chatroommode = 0;

        return {

			getTitle: function() {
				return title;	
			},

			init: function (id,mode) {
				if(typeof(mode) !== "undefined") {
					chatroommode = mode;
				}

				baseUrl = $.cometchat.getBaseUrl();
				basedata = $.cometchat.getBaseData();
				$[$.cometchat.getChatroomVars('calleeAPI')].loadCCPopup(baseUrl+'plugins/style/index.php?id='+id+'&basedata='+basedata, 'style',"status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=0, width=260,height=130",260,80,'Which color would you like to use?'); 
			},

			updatecolor: function (text) {

				if (text != '' && text != null) {
					document.cookie = 'cc_chatroomcolor='+text;
				}

				$('#currentroom').find("textarea.cometchat_textarea").focus();
				
			}

        };
    })();
 
})(jqcc);
/*
 * CometChat
 * Copyright (c) 2014 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

(function($){
	$.ccfiletransfer = (function() {
		var title = 'Send a file';
		return {
			getTitle: function() {
				return title;
			},
			init: function (id) {
								baseUrl = $.cometchat.getBaseUrl();
				baseData = $.cometchat.getBaseData();
				loadCCPopup(baseUrl+'plugins/filetransfer/index.php?id='+id+'&basedata='+baseData+'&sendername='+jqcc.cometchat.getName(jqcc.cometchat.getThemeVariable('userid')), 'filetransfer',"status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=0, width=400,height=140",400,130,'Which file would you like to send?');
							}
		};
	})();
})(jqcc);
/*
 * CometChat
 * Copyright (c) 2014 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

(function($){   
  
	$.ccsmilies = (function () {
	
		var title = 'Add a smiley';
		var height = 285;
		var width = 420;
		
        return {

			getTitle: function() {
				return title;	
			},

			init: function (id) {
									baseUrl = $.cometchat.getBaseUrl();
					baseData = $.cometchat.getBaseData();
					loadCCPopup(baseUrl+'plugins/smilies/index.php?id='+id+'&basedata='+baseData, 'smilies',"status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=0, width="+width+",height="+height,width,height-50,'Which smiley would you like?'); 
							},

			addtext: function (id,text) {
				var string = '';
				                    var cometchat_user_textarea = $('#cometchat_user_'+id+'_popup').find('textarea.cometchat_textarea');
					jqcc.cometchat.chatWith(id);
					string = cometchat_user_textarea.val();
					
					if (string.charAt(string.length-1) == ' ') {
						cometchat_user_textarea.val(string+text);
					} else {
						if (string.length == 0) {
							cometchat_user_textarea.val(text);
						} else {
							cometchat_user_textarea.val(string+' '+text);
						}
					}					
					cometchat_user_textarea.focus();
								
			}
        };
    })();
 
})(jqcc);
/*
 * CometChat
 * Copyright (c) 2014 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

(function($){   
        var pushNotifications = '1';
        
	$.ccmobilenativeapp = (function () {
			return {
				sendnotification: function (message, channel, displayname, chatroommode) {
					if (typeof chatroommode == 'undefined' && pushNotifications == '1') { 
						baseUrl = $.cometchat.getBaseUrl();
						$.getJSON(baseUrl+'extensions/mobileapp/sendnotification.php', {channel: channel, message: message, displayname: displayname});
					} else if (pushNotifications == '1') {
						baseUrl = $.cometchat.getBaseUrl();
						$.getJSON(baseUrl+'extensions/mobileapp/sendnotification.php?chatroommode=1', {channel: channel, message: message, displayname: displayname});
					}
				}
			};
    })();
 
})(jqcc);/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-inlinesvg-svg-svgclippaths-touch-shiv-mq-cssclasses-teststyles-prefixes-ie8compat-load
 */
;window.Modernizr=function(a,b,c){function y(a){j.cssText=a}function z(a,b){return y(m.join(a+";")+(b||""))}function A(a,b){return typeof a===b}function B(a,b){return!!~(""+a).indexOf(b)}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:A(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={svg:"http://www.w3.org/2000/svg"},o={},p={},q={},r=[],s=r.slice,t,u=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},v=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return u("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},w={}.hasOwnProperty,x;!A(w,"undefined")&&!A(w.call,"undefined")?x=function(a,b){return w.call(a,b)}:x=function(a,b){return b in a&&A(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=s.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(s.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(s.call(arguments)))};return e}),o.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:u(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},o.svg=function(){return!!b.createElementNS&&!!b.createElementNS(n.svg,"svg").createSVGRect},o.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==n.svg},o.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(l.call(b.createElementNS(n.svg,"clipPath")))};for(var D in o)x(o,D)&&(t=D.toLowerCase(),e[t]=o[D](),r.push((e[t]?"":"no-")+t));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)x(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},y(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e.mq=v,e.testStyles=u,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+r.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("ie8compat",function(){return!window.addEventListener&&document.documentMode&&document.documentMode===7});

/*
 * CometChat
 * Copyright (c) 2014 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

(function($){   
  
	$.ccclearconversation = (function () {

		var title = 'Clear conversation';
		
        return {

			getTitle: function() {
				return title;	
			},

			init: function (id) {
									if ($("#cometchat_user_"+id+"_popup").find("div.cometchat_tabcontenttext").html() != '') {
						baseUrl = $.cometchat.getBaseUrl();
						baseData = $.cometchat.getBaseData();
						$.getJSON(baseUrl+'plugins/clearconversation/index.php?action=clear&callback=?', {clearid: id, basedata: baseData});
						$("#cometchat_user_"+id+"_popup").find("div.cometchat_tabcontenttext > div.cometchat_chatboxmessage").remove();
					}
							}

        };
    })();
 
})(jqcc);