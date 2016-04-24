<?php
include_once(dirname(dirname(dirname(__FILE__))) . DIRECTORY_SEPARATOR . "plugins.php");

include_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . "lang" . DIRECTORY_SEPARATOR . "en.php");
if (file_exists(dirname(__FILE__) . DIRECTORY_SEPARATOR . "lang" . DIRECTORY_SEPARATOR . $lang . ".php")) {
    include_once(dirname(__FILE__) . DIRECTORY_SEPARATOR . "lang" . DIRECTORY_SEPARATOR . $lang . ".php");
}

$id = $_GET['id'];

$text = '';
$people_text = '';
$nature_text = '';
$objects_text = '';
$places_text = '';
$symbols_text = '';

$used = array();

$chatroommode = 0;

if (!empty($_GET['chatroommode'])) {
    $chatroommode = 1;
}

$embed = '';
$embedcss = '';
$close = "setTimeout('window.close()',2000);";
$before = 'window.opener';

if (!empty($_GET['embed']) && $_GET['embed'] == 'web') {
    $embed = 'web';
    $embedcss = 'embed';
    $close = "";
    $before = 'parent';

    if ($chatroommode == 1) {
        $before = "$('#cometchat_trayicon_chatrooms_iframe,#cometchat_container_chatrooms .cometchat_iframe,.cometchat_embed_chatrooms',parent.document)[0].contentWindow";
    }
}

if (!empty($_GET['embed']) && $_GET['embed'] == 'desktop') {
    $embed = 'desktop';
    $embedcss = 'embed';
    $close = "";
    $before = 'parentSandboxBridge';
}

foreach ($smileys as $pattern => $result) {

    if (!empty($used[$result])) {
    } else {
        $pattern_class = str_replace("'", "\\'", $pattern);
        $title = str_replace("-", " ", ucwords(preg_replace("/\.(.*)/", "", $result)));
        $class = str_replace("-", " ", preg_replace("/\.(.*)/", "", $result));
        if (in_array($result, $people)) {
            $people_text .= '<span class="cometchat_smiley ' . $class . ' people" title="' . $pattern . ' (' . $title . ')" onclick="' . $before . '.jqcc.ccsmilies.addtext(\'' . $id . '\',\'' . $pattern_class . '\',\'' . $chatroommode . '\');' . $close . '" style="padding:2px;"></span>';
        } elseif (in_array($result, $nature)) {
            $nature_text .= '<span class="cometchat_smiley ' . $class . ' nature" title="' . $pattern . ' (' . $title . ')" onclick="' . $before . '.jqcc.ccsmilies.addtext(\'' . $id . '\',\'' . $pattern_class . '\',\'' . $chatroommode . '\');' . $close . '" style="padding:2px;"></span>';
        } elseif (in_array($result, $objects)) {
            $objects_text .= '<span class="cometchat_smiley ' . $class . ' objects" title="' . $pattern . ' (' . $title . ')" onclick="' . $before . '.jqcc.ccsmilies.addtext(\'' . $id . '\',\'' . $pattern_class . '\',\'' . $chatroommode . '\');' . $close . '" style="padding:2px;"></span>';
        } elseif (in_array($result, $places)) {
            $places_text .= '<span class="cometchat_smiley ' . $class . ' places" title="' . $pattern . ' (' . $title . ')" onclick="' . $before . '.jqcc.ccsmilies.addtext(\'' . $id . '\',\'' . $pattern_class . '\',\'' . $chatroommode . '\');' . $close . '" style="padding:2px;"></span>';
        } elseif (in_array($result, $symbols)) {
            $symbols_text .= '<span class="cometchat_smiley ' . $class . ' symbols" title="' . $pattern . ' (' . $title . ')" onclick="' . $before . '.jqcc.ccsmilies.addtext(\'' . $id . '\',\'' . $pattern_class . '\',\'' . $chatroommode . '\');' . $close . '" style="padding:2px;"></span>';
        } else {
            $text .= '<img class="cometchat_smiley" width="20" height="20" src="' . BASE_URL . 'images/smileys/' . $result . '" title="' . $pattern . ' (' . $title . ')" onclick="' . $before . '.jqcc.ccsmilies.addtext(\'' . $id . '\',\'' . $pattern_class . '\',\'' . $chatroommode . '\');' . $close . '" style="padding:2px">';
        }
        $used[$result] = 1;
    }
}

$extrajs = "";
$scrollcss = "overflow-y:scroll;overflow-x:hidden;position:absolute;top:26px;";
if ($sleekScroller == 1) {
    $extrajs = '<script>jqcc=jQuery;</script><script src="../../js.php?type=core&name=scroll"></script>';
    $scrollcss = "";
}

$container_body_height = $smlHeight - 76;

echo <<<EOD
<!DOCTYPE html>
<html>
	<head>
		<title>{$smilies_language[0]}</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
		<link type="text/css" rel="stylesheet" media="all" href="../../css.php?type=plugin&name=smilies&subtype=smilies" />
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
		{$extrajs}
		<style>
			.container_body.embed {
				height: {$container_body_height}px !important;
				{$scrollcss};
			}
		</style>
		<script type="text/javascript">
	    	$(function(){
	    		$('.tab').click(function(){
	    			$('.tab').removeClass('selected');
	    			$('.emojis').removeClass('emoji_selected');
	    			$(this).addClass('selected');
	    			$('.'+$(this).attr('id')).addClass('emoji_selected');
	    		});
				if (jQuery().slimScroll) {
					$(".container_body").slimScroll({ width: '100%'});
				}
			});
			window.onload = function() { resizeTo(431,364); }
			window.onresize = function() { resizeTo(431,364); }
	    </script>
	</head>
	<body>
		<div class="container">
			<div class="container_title {$embedcss}">{$smilies_language[1]}</div>
			<div id="tabs">
			    <div id="people" class="tab selected"><h2>{$smilies_language[2]}</h2></div>
			    <div id="nature" class="tab "><h2>{$smilies_language[3]}</h2></div>
			    <div id="objects" class="tab "><h2>{$smilies_language[4]}</h2></div>
			    <div id="places" class="tab "><h2>{$smilies_language[5]}</h2></div>
			    <div id="symbols" class="tab "><h2>{$smilies_language[6]}</h2></div>
			    <div id="additional" class="tab "><h2>{$smilies_language[7]}</h2></div>
		    </div>
			<div class="container_body {$embedcss}">
				<div class="people emojis emoji_selected" id="emoji-people">{$people_text}</div>
				<div class="nature emojis" id="emoji-nature">{$nature_text}</div>
				<div class="objects emojis" id="emoji-objects">{$objects_text}</div>
				<div class="places emojis" id="emoji-places">{$places_text}</div>
				<div class="symbols emojis" id="emoji-symbols">{$symbols_text}</div>
				<div class="additional emojis" id="emoji-additional">{$text}</div>
			</div>
		</div>
	</body>
</html>
EOD;