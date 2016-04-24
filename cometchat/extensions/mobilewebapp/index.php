<?php
include_once(dirname(dirname(dirname(__FILE__))).DIRECTORY_SEPARATOR."modules.php");
include_once(dirname(__FILE__).DIRECTORY_SEPARATOR."lang".DIRECTORY_SEPARATOR."en.php");
include_once(dirname(dirname(dirname(__FILE__))).DIRECTORY_SEPARATOR."modules".DIRECTORY_SEPARATOR."chatrooms".DIRECTORY_SEPARATOR."lang".DIRECTORY_SEPARATOR."en.php");
include_once(dirname(dirname(dirname(__FILE__))).DIRECTORY_SEPARATOR."modules".DIRECTORY_SEPARATOR."chatrooms".DIRECTORY_SEPARATOR."config.php");
include_once(dirname(__FILE__).DIRECTORY_SEPARATOR."config.php");

if (file_exists(dirname(__FILE__).DIRECTORY_SEPARATOR."lang".DIRECTORY_SEPARATOR.$lang.".php")) {
	include_once(dirname(__FILE__).DIRECTORY_SEPARATOR."lang".DIRECTORY_SEPARATOR.$lang.".php");
}
if (file_exists (dirname(dirname(dirname(__FILE__))).DIRECTORY_SEPARATOR."modules".DIRECTORY_SEPARATOR."chatrooms".DIRECTORY_SEPARATOR."lang".DIRECTORY_SEPARATOR.$lang.".php")) {
	include_once(dirname(dirname(dirname(__FILE__))).DIRECTORY_SEPARATOR."modules".DIRECTORY_SEPARATOR."chatrooms".DIRECTORY_SEPARATOR."lang".DIRECTORY_SEPARATOR.$lang.".php");
}
if(!(in_array('mobilewebapp',$extensions))){
	echo $mobilewebapp_language[33];
	exit;
}



?>
<?
require_once($_SERVER['DOCUMENT_ROOT'] . "/bitrix/modules/main/include/prolog_before.php");
$user_id=$USER->GetID();
include $_SERVER['DOCUMENT_ROOT'].'/resources/helpers/scripts/user_info.php';
?>
	<!DOCTYPE HTML>
	<html lang="en">
	<head>

		<style type="text/css">
			.loading {
				display: none;
			}

			.accordion {
				border: none;
				width: 100%;
			}

			.accordion li h3 a {
				background: #394575;
				height: 60px;
				border-bottom: 1px solid #333;
				border-radius: 10px;
				border-top: 1px solid #ccc;
				color: #fff;
				display: block;
				font-style: normal;
				margin: 10px;
				padding: 5px 10px;
				text-shadow: 0 -1px 2px #333, #ccc 0 1px 2px;
			}

			.accordion li.active h3 a {
				background: #394575;
				border-bottom: 1px solid #036;
				border-top: 1px solid #9cf;
				text-shadow: 0 -1px 2px #036, #9cf 0 1px 2px;
			}

			.accordion li.locked h3 a {
				background: #963;
				background: #963 -webkit-gradient(linear, left top, left bottom, from(#c96), to(#963)) no-repeat;
				background: #963 -moz-linear-gradient(top, #c96, #963) no-repeat;
				border-bottom: 1px solid #630;
				border-top: 1px solid #fc9;
				text-shadow: 0 -1px 2px #630, #fc9 0 1px 2px;
			}

			.accordion li h3 {
				margin: 0;
				padding: 0;
			}

			.accordion .apanel {
				padding: 0px;
				background: none;
			}
		</style>

		<meta name="viewport" content="user-scalable=0,width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0" />
		<link rel="apple-touch-icon" href="images/apple-touch-icon.png"/>

		<title><?php echo $mobilewebapp_language[0]; ?></title>

		<link type="text/css" href="../../css.php?type=extension&name=mobilewebapp" rel="stylesheet" charset="utf-8">

		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>

		<script type="text/javascript" charset="utf-8" src="../../js.php?type=extension&name=mobilewebapp&callbackfn=mobilewebapp"></script>
		<script type="text/javascript" charset="utf-8" src="../../js.php?type=module&name=chatrooms&callbackfn=mobilewebapp"></script>


		<script>
			var isPhoneTouched = 0;
			document.addEventListener('touchstart', function () {
				if (isPhoneTouched == 0) {
					document.getElementsByTagName('audio')[0].play();
					document.getElementsByTagName('audio')[0].pause();
					isPhoneTouched = 1;
				}
			});

			$("#buddy_link").live('click', function() {
				$('.chatlink_icon').html('<span class="notifier">0</span>');
				$("#footer #footerbtns .button-group li").find('#buddy_link').addClass('btn-active');
				$("#footer #footerbtns .button-group li").find('#chatroomlink').removeClass('btn-active');
				jqcc.mobilewebapp.pathRedirect('#buddy');
			});
			$("#chatroomlink").live('click', function() {
				$("#footer #footerbtns .button-group li").find("#chatroomlink").addClass('btn-active');
				$("#footer #footerbtns .button-group li").find('#buddy_link').removeClass('btn-active');
				jqcc.mobilewebapp.pathRedirect('#lobby');
			});

			$(document).ready(function () {
				var enableType = '<?php echo $enableType ?>';
				$('#options').on('click', function() {
					$('#cometchat_container_report .cometchat_container_title .cometchat_closebox').click();
					if($("#opt").is(':visible')) {
						$('#opt').css('display', 'none');
					} else {
						$('#opt').css('display', 'block');
					}
				});
				$('#chatcontent').on('click', function() {
					$('#opt').css('display', 'none');
				});
				$("#chatroommessage").on('click', function () {
					setTimeout(function () {jqcc.mobilewebapp.crscrollToBottom();},700);
				});
				$("#chatmessage").on('click', function() {
					setTimeout(function () {jqcc.mobilewebapp.scrollToBottom();},700);
				});
				$("#chatroommessage").keyup(function (event) {
					if ($("#chatroommessage").val() !== '' && event.keyCode == 13 && event.shiftKey == 0) {
						$("#chatroom_send").click();
					}
				});
			});
		</script>
	</head>
	<body>
	<div id="smiles" class="smile-area" style="display: none; padding: 10px;">
		<img class="smelic" src="/cometchat/images/smileys/bomb.png"
			 onclick="jQuery('#chatroommessage').val($('#chatroommessage').val()+' :bomb:');">
		<img class="smelic" src="/cometchat/images/smileys/book.png"
			 onclick="jQuery('#chatroommessage').val($('#chatroommessage').val()+' :book:');">
		<img class="smelic" src="/cometchat/images/smileys/bookmark.png"
			 onclick="jQuery('#chatroommessage').val($('#chatroommessage').val()+' :bookmark:');">
		<img class="smelic" src="/cometchat/images/smileys/bookmark_tabs.png"
			 onclick="jQuery('#chatroommessage').val($('#chatroommessage').val()+' :bookmark_tabs:');">
		<img class="smelic" src="/cometchat/images/smileys/boom.png"
			 onclick="jQuery('#chatroommessage').val($('#chatroommessage').val()+' :boom:');">
		<img class="smelic" src="/cometchat/images/smileys/bouquet.png"
			 onclick="jQuery('#chatroommessage').val($('#chatroommessage').val()+' :bouquet:');">
		<img class="smelic" src="/cometchat/images/smileys/bow.png"
			 onclick="jQuery('#chatroommessage').val($('#chatroommessage').val()+' :bow:');">
		<img class="smelic" src="/cometchat/images/smileys/bowling.png"
			 onclick="jQuery('#chatroommessage').val($('#chatroommessage').val()+' :bowling:');">
		<img class="smelic" src="/cometchat/images/smileys/bowtie.png"
			 onclick="jQuery('#chatroommessage').val($('#chatroommessage').val()+' :bowtie:');">
		<img class="smelic" src="/cometchat/images/smileys/boy.png"
			 onclick="jQuery('#chatroommessage').val($('#chatroommessage').val()+' :boy:');">
		<img class="smelic" src="/cometchat/images/smileys/bread.png"
			 onclick="jQuery('#chatroommessage').val($('#chatroommessage').val()+' :bread:');">
		<img class="smelic" src="/cometchat/images/smileys/bride_with_veil.png"
			 onclick="jQuery('#chatroommessage').val($('#chatroommessage').val()+' :bride_with_veil:');">
		<img class="smelic" src="/cometchat/images/smileys/bridge_at_night.png"
			 onclick="jQuery('#chatroommessage').val($('#chatroommessage').val()+' :bridge_at_night:');">
		<img class="smelic" src="/cometchat/images/smileys/briefcase.png"
			 onclick="jQuery('#chatroommessage').val($('#chatroommessage').val()+' :briefcase:');">
		<img class="smelic" src="/cometchat/images/smileys/broken_heart.png"
			 onclick="jQuery('#chatroommessage').val($('#chatroommessage').val()+' :broken_heart:');">
		<img class="smelic" src="/cometchat/images/smileys/bug.png"
			 onclick="jQuery('#chatroommessage').val($('#chatroommessage').val()+' :bug:');">
	</div>
	<?php if($enableType == 0 OR $enableType == 2):?>
		<div id="buddy" style="background:inherit;width:100% !important;" class="displaynone">
			<nav class="top-bar" id="header">
				<div class="small-12 columns" id="createheader" style="background: #394575">
					<h1><?php echo $mobilewebapp_language[18]; ?></h1>
					<audio style="display:none">
						<source src="mp3/beep.mp3" type="audio/mpeg">
					</audio>
				</div>
			</nav>
			<div id="wocontent">
				<div id="woscroll">
					<div class="row" id="search">
						<input  type="text" id="searchtxt" onKeyup="jqcc.mobilewebapp.get_user();" placeholder="<?php echo $mobilewebapp_language[15]; ?>">
					</div>
					<div class="row" id="userlist">
						<ul id="wolist" class="small-12 columns">
						</ul>
						<div id="endoftext"></div>
					</div>
				</div>
			</div>
			<?php if($enableType == 0):?>
				<div id="footer" class="row">
					<div class="small-12 columns" id="footerbtns">
						<ul class="button-group">
							<li><a href="#buddy" id="buddy_link" class="small button chatlink"><div class="chatlink_icon"><span class="notifier">0</span></div><div class="chatlink_txt"><?php echo $mobilewebapp_language[20]; ?></div></a></li>
							<li><a href="#lobby" id="chatroomlink" class="small button chatroomlink"><div class="chatroomlink_icon"></div><div class="chatroomlink_txt"><?php echo $mobilewebapp_language[21]; ?></div></a></li>
						</ul>
					</div>
				</div>
			<?php endif;?>
		</div>
	<?php endif;?>


	<div id="chat" style="background:inherit;width:100% !important;" class="displaynone">
		<div id="cheader">
			<div class="row" id="chatheader">
				<div class="small-3 columns">
					<a id="backbtnChat" onclick="javascript:jqcc.mobilewebapp.loadChatboxReverse()">
						<div class="back_icon">
							<div class="arrow-left"></div>
							<div class="rectangle"></div>
						</div>
					</a>
				</div>
				<div class="small-6 columns" id="createheader">
					<h1></h1>
				</div>
				<div class="small-3 columns chatoptions">
					<a id="options">
						<div class="option_icon">
							<div class="bar1"></div>
							<div class="bar2"></div>
							<div class="bar3"></div>
						</div>
					</a>
				</div>
			</div>
		</div>
		<div id="opt">
			<div id="clear"><img src="images/clearconversation.png"/>&nbsp;&nbsp;&nbsp;<?php echo $mobilewebapp_language[30]; ?></div>
			<div id="report"><img src="images/report.png"/>&nbsp;&nbsp;<?php echo $mobilewebapp_language[31]; ?></div>
		</div>
		<div id="chatcontent">
			<div id="scroller">
			</div>
			<div id="endoftext"></div>
		</div>
		<div id="chatfooter">
			<div id="chatmessageForm" onclick="" data-ajax="false">
				<div class="small-1 colums" id="smile"><img src="/resources/images/icons/smile.jpg"></div>
				<div class="small-8 columns" id="chattxt">
					<input id="chatmessage" type="text" name="chatmessage" onFocus="jqcc.mobilewebapp.txtfocus();" placeholder="<?php echo $mobilewebapp_language[9]; ?>"/>
				</div>
				<div class="small-3 columns" id="chatsendbutton">
					<a id="chat_send" class="mobile_send small alert button"><?php echo $mobilewebapp_language[25]; ?></a>
				</div>
			</div>
		</div>
	</div>

	<?php if($enableType == 0 OR $enableType == 1):?>
		<a id="lobbyhome>"<div id="123" style="height:100px; width:100px; background-color:black;"></div></a>
		<div id="lobby" style="background-color:inherit;width:100% !important;" class="displaynone">
			<nav class="top-bar" id="header">
				<div class="row">
					<div class="small-3 columns" id="home">
						<a id="lobbyhome">
							<div class="home_icon">
								<div class="arrow-up"></div>
								<div class="rect1"></div>
								<div class="rect2"></div>
							</div>
						</a>
					</div>
					<div class="small-6 columns" id="crheader">
						<h1><?php echo $mobilewebapp_language[19]; ?></h1>
					</div>
					<div class="small-3 columns" id="adddiv">
						<?php if ($allowUsers == '1'): ?>
							<a id="addchatroom" href="javascript:void(0);" onclick="javascript:jqcc.mobilewebapp.createChatroom()">
								<div class="add_icon">
									<div class="vertrect"></div>
									<div class="horirect"></div>
								</div>
							</a>
						<?php endif; ?>
					</div>
				</div>
			</nav>
			<!--TAGS-->
			<div id="lobbycontent" style="background-color:#FFFFFF">
				<div id="lobbyscroller">
					<link rel="stylesheet" href="/resources/helpers/css/reset.css" type="text/css" charset="utf-8">
					<link rel="stylesheet" href="/resources/helpers/css/core.css" type="text/css" charset="utf-8">
					<link rel="stylesheet" href="/resources/helpers/css/accordion.core.css" type="text/css"
						  charset="utf-8">

					<ul id="example1" class="accordion">
						<li>
							<h3 class="acc-header">Выбор города</h3>
							<div class="apanel loading">
									<input type="text" id="searchtxtCR" onKeyup="jqcc.mobilewebapp.get_chatroom();"
										   placeholder="<?php echo $mobilewebapp_language[16]; ?>">
								<div class="row" id="chatroomlist">
									<ul id="lobbylist" class="small-12 columns">
									</ul>
								</div>
						</li>
					</ul>
				</div>
				<script src="">
				</script>
				<script type="text/javascript" src="/resources/helpers/scripts/jquery.accordion.2.0.js"
						charset="utf-8"></script>
				<script type="text/javascript" src="/resources/helpers/scripts/jquery.easing.min.js"
						charset="utf-8"></script>
				<script type="text/javascript">
					$('#example1').accordion();
					$(".loading").removeClass("loading");
				</script>
			</div>

		</div>
		</div>
		</div>
		<?php if($enableType == 0):?>
			<div id="footer" class="row" style="display: none">
				<div class="small-12 columns" id="footerbtns">
					<ul class="button-group">
						<li><a href="#buddy" id="buddy_link" class="small button chatlink"><div class="chatlink_icon"></div><div class="chatlink_txt"><?php echo $mobilewebapp_language[20]; ?></div></a></li>
						<li><a href="#lobby" id="chatroomlink" class="small button chatroomlink"><div class="chatroomlink_icon"></div><div class="chatroomlink_txt"><?php echo $mobilewebapp_language[21]; ?></div></a></li>
					</ul>
				</div>
			</div>
		<?php endif;?>
		</div>
	<?php endif;?>


	<div id="chatroom" style="background:inherit;width:100% !important;" class="displaynone">
		<div id="crheadertop">
			<div class="row" id="chatroomheader">
				<div class="small-12 columns" id="createheader"
					 onclick="jqcc.mobilewebapp.loadLobbyReverse();">
					<div class="chat-head">
						<span class="chatroom-name" id="chatroomName"></span>
					</div>

				</div>
			</div>
		</div>
		<div id="chatroomcontent" >
			<!--TAG-->
			<div id="crscroller">
			</div>
			<div id="endoftext"></div>
		</div>
		<div id="chatroomfooter" class="row">
			<div id="chatroommessageForm" onsubmit="#" data-ajax="false">
				<div class="small-8 columns" id="chattxt">
					<img id="smile_button" src="/resources/images/icons/smile.jpg" width="30" style="float: left; "
						 onclick="">
					<input id="chatroommessage" type="text" name="chatmessage" style="margin: 0 auto "
						   placeholder="<?php echo $mobilewebapp_language[9]; ?>"/>
				</div>
				<div class="small-3 columns" id="chatsendbutton">
					<a id="chatroom_send" class="mobile_send small alert button" onclick="javascript:jqcc.mobilewebapp.sendchatroommessage($('#chatroommessage'));"></a>
				</div>
			</div>
		</div>
	</div>


	<div id="chatroomuser" style="background:inherit;width:100% !important;" class="displaynone">
		<nav class="top-bar" id="header">
			<div class="row" id="chatroomuserheader">
				<div class="small-3 columns">
					<a id="backbtnChatroomuser" onclick="javascript:jqcc.mobilewebapp.loadChatroomReverse();jqcc.mobilewebapp.crscrollToBottom();" >
						<div class="back_icon">
							<div class="arrow-left"></div>
							<div class="rectangle"></div>
						</div>
					</a>
				</div>
				<div class="small-6 columns" id="createheader">
					<span id="chatroomUserName" style="margin:0 auto;padding:0 10px;height:inherit;display:inline-block;"></span>
				</div>
				<div class="small-3 columns">&nbsp;</div>
			</div>
		</nav>
		<div class="row" id="chatroomusercontent">
			<div id="cruserScroll">
				<ul id="currentroom_users" class="small-12 columns">
				</ul>
			</div>
		</div>
	</div>


	<div id="createChatroom" style="background:inherit;width:100% !important;" class="displaynone">
		<nav  id="header">
			<div class="row">
				<div class="small-3 columns">
					<a id="backbtnCreateChatroom" onclick="javascript:jqcc.mobilewebapp.loadLobbyReverse()" class="small alert button bck">
						<div class="back_icon">
							<div class="arrow-left"></div>
							<div class="rectangle"></div>
						</div>
					</a>
				</div>
				<div class="small-6 columns" id="createheader">
					<h1><?php echo $mobilewebapp_language[22]; ?></h1>
				</div>
				<div class="small-3 columns">&nbsp;</div>
			</div>
		</nav>
		<div style="font-size:13px;">
			<form id="createChatroomForm"  onsubmit="return false" data-ajax="false">
				<div class="row" id="crname" >
					<div class="small-4 columns" id="labelname">
						<label class="chatroomedit" for="name"><?php echo $chatrooms_language[27]; ?></label>
					</div>
					<div class="small-8 columns">
						<input type="text" name="name" id="name" value="" />
					</div>
				</div>
				<div class="row" id="crtype" >
					<div class="small-4 columns">
						<label class="chatroomedit" for="type" class="select"><?php echo $chatrooms_language[28]; ?></label>
					</div>
					<div class="small-8 columns">
						<select name="type" id="type" onchange="javascript:jqcc.mobilewebapp.checkDropDown(this)">
							<option value="0"><?php echo $chatrooms_language[29]; ?></option>
							<option value="1"><?php echo $chatrooms_language[30]; ?></option>
						</select>
					</div>
				</div>
				<div class="row" id="chatroomPassword">
					<div class="small-4 columns" id="labelname">
						<label for="password"><?php echo $chatrooms_language[32]; ?></label>
					</div>
					<div class="small-8 columns">
						<input type="password" name="password" id="password" value="" />
					</div>
				</div>
				<div class="row" id="createbtn">
					<div id="createChatroomField" class="small-12 columns">
						<a id="createChatroomButton" class="small button success radius" onclick="javascript:jqcc.mobilewebapp.mobilecreateChatroomSubmit()"><?php echo $chatrooms_language[33]; ?></a>
					</div>
				</div>
			</form>
		</div>
	</div>
	</body>

	<script type="text/javascript">
		var reportPlugin = 0;
		var clearPlugin = 0;
		var plugins = <?php echo json_encode($plugins); ?>;
		if(plugins.indexOf("report") != -1) {
			reportPlugin = 1;
		}
		if(plugins.indexOf("clearconversation") != -1) {
			clearPlugin = 1;
		}
		if(clearPlugin == 0 && reportPlugin == 0) {
			$("#options").css('display','none');
		}
		if(clearPlugin == 1 && reportPlugin == 0) {
			$("#report").css('display','none')
			$("#opt").css('height','35px');
		}
		if(clearPlugin == 0 && reportPlugin == 1) {
			$("#clear").css('display','none')
			$("#opt").css('height','35px');
		}
		var path = $(location).attr('href');
		$('#buddyhome').css('display','block');
		$('#lobbyhome').css('display','block');
		$('#buddyhome').click(function() { window.location.href = '<?php echo $_SERVER['HTTP_REFERER'];?>';});
		$('#lobbyhome').click(function() { $('#buddyhome').click();});
		var arr = path.split('/extensions/mobilewebapp/')[1];
		var showdiv = arr;
		if(enableType == 2 || enableType == 0){
			jqcc.mobilewebapp.pathRedirect(showdiv);
		} else if(enableType == 1){
			jqcc.mobilewebapp.pathRedirect('#lobby');
		}
		jqcc.mobilewebapp.addscroll();
	</script>
	<script>
		$(".city-name").click(function () {
			var qq = this.id;
			console.log(qq);
			$("li.crlists").css("display", "none");
			$("span.lobby_room_1:contains('" + qq + "')").parent().parent().css("display", "block");

		});
	</script>
	<script>
		$(function () {
			$('#smile_button').click(function (e) {
				e.preventDefault();
				$("#smiles").toggle();
			});
		});
	</script>
	<script>
		$(document).mouseup(function (e) {
			var container = $('#smiles');
			if (container.has(e.target).length === 0){
				container.hide();
			}
		});
	</script>
	<script>
		$('.you').live('click', function(e) {
			var id_click = "#menu_"+e.target.id;
			$(id_click).toggle();
		});

	</script>
	
	<script>
		$(document).mouseup(function (e) {
			var cont = $('.menu');
			if (cont.has(e.target).length === 0){
				cont.hide();
			}
		});
	</script>
	<script>
		$('#chatroomcontent').scroll(function () {
			$('.menu').hide();
		})
	</script>
<script>
	window.onload=function(){
		jqcc.mobilewebapp.getChatroomCookie();
	}
</script>
<script>
	function doLike(mid, uid){
		console.log(mid);
		//$('.menu').hide();
		var data = {
			mid: mid,
			uid: uid
		};
		$.get ("http://student-app.ru/resources/helpers/scripts/chat_likes/do_like.php",data).done(function() {
			location.reload();
		});
	}
</script>
	</html>
<? include $_SERVER["DOCUMENT_ROOT"] . "/resources/helpers/scripts/avatar-copy.php"; ?>