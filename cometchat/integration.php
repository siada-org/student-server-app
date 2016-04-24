<?php

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ADVANCED */

define('SET_SESSION_NAME','');			// Session name
define('DO_NOT_START_SESSION','0');		// Set to 1 if you have already started the session
define('SWITCH_ENABLED','1');		
define('INCLUDE_JQUERY','1');	
define('FORCE_MAGIC_QUOTES','0');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* DATABASE */


// DO NOT EDIT DATABASE VALUES BELOW
// DO NOT EDIT DATABASE VALUES BELOW
// DO NOT EDIT DATABASE VALUES BELOW

define('DB_SERVER',				'localhost'		);
define('DB_PORT',				'3306'				);
define('DB_USERNAME',				'prohor5v_student'	);
define('DB_PASSWORD',				'Lucifer666'	);
define('DB_NAME',				'prohor5v_student'		);
define('TABLE_PREFIX',				''		);
define('DB_USERTABLE',				'b_user'				);
define('DB_USERTABLE_NAME',			'NAME'			);
define('DB_USERTABLE_USERID',                   'ID'			);
define('DB_AVATARTABLE',                        "" );
define('DB_AVATARFIELD',                        "PERSONAL_PHOTO");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* FUNCTIONS */

function getUserID() {
    $userid = 0;
    if (!empty($_SESSION['SESS_AUTH']['USER_ID']) && $_SESSION['SESS_AUTH']['USER_ID'] != 'null') {
            $_REQUEST['basedata'] = $_SESSION['SESS_AUTH']['USER_ID'];
    }

    if (!empty($_REQUEST['basedata'])) {

            if (function_exists('mcrypt_encrypt')) {
                    $key = KEY_A.KEY_B.KEY_C;
                    $uid = rtrim(mcrypt_decrypt(MCRYPT_RIJNDAEL_256, md5($key), base64_decode($_REQUEST['basedata']), MCRYPT_MODE_CBC, md5(md5($key))), "\0");
                    if (intval($uid) > 0) {
                            $userid = $uid;
                    }
            } else {
                    $userid = $_REQUEST['basedata'];
            }
    }
    
    if (empty($_COOKIE['PHPSESSID'])) {
        $sql = ("SELECT data from ".TABLE_PREFIX."core_session where id = '".mysqli_real_escape_string($GLOBALS['dbh'],$_COOKIE['PHPSESSID'])."'");
        $result = mysqli_query($GLOBALS['dbh'],$sql);
        $row = mysqli_fetch_assoc($result);
        $_SESSION['Zend_Auth']['storage'] = 0;
        session_decode($row['data']);
        if (filter_var($_SESSION['Zend_Auth']['storage'], FILTER_VALIDATE_EMAIL)) {
            $email = $_SESSION['Zend_Auth']['storage'];
            $sql = ("SELECT user_id FROM ".TABLE_PREFIX.DB_USERTABLE." WHERE email ='".$email."'");
            $result = mysqli_query($GLOBALS['dbh'], $sql);
            $row = mysqli_fetch_assoc($result);
            $userid = $row['user_id'];            
        } elseif (filter_var($_SESSION['Zend_Auth']['storage'], FILTER_VALIDATE_INT)) {
            $userid = $_SESSION['Zend_Auth']['storage'];
        }
    }
    $userid = $_REQUEST['basedata'];
    return $userid;
}

function chatLogin($userName,$userPass) {

	$userid = 0;
	if (filter_var($userName, FILTER_VALIDATE_EMAIL)) {
		$sql = ("SELECT * FROM ".TABLE_PREFIX.DB_USERTABLE." WHERE email ='".$userName."'");
	} else {
		$sql = ("SELECT * FROM ".TABLE_PREFIX.DB_USERTABLE." WHERE username ='".$userName."'"); 
	}
	$result = mysqli_query($GLOBALS['dbh'],$sql);
	$row = mysqli_fetch_assoc($result);
	$sql1 = ("SELECT * FROM `".TABLE_PREFIX."core_settings` WHERE name='core.secret'");
	$result1 = mysqli_query($GLOBALS['dbh'],$sql1);
	$row1 = mysqli_fetch_assoc($result1);
	$salted_password = md5($row1['value'].$userPass.$row['salt']);
	if($row['password'] == $salted_password) {
		$userid = $row['user_id'];
                if (isset($_REQUEST['callbackfn']) && $_REQUEST['callbackfn'] == 'mobileapp') {
                    $sql = ("insert into cometchat_status (userid,isdevice) values ('".mysqli_real_escape_string($GLOBALS['dbh'],$userid)."','1') on duplicate key update isdevice = '1'");
                    mysqli_query($GLOBALS['dbh'], $sql);
                }
	}
	if($userid && function_exists('mcrypt_encrypt')) {
		$key = KEY_A.KEY_B.KEY_C;
		$userid = base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_256, md5($key), $userid, MCRYPT_MODE_CBC, md5(md5($key))));
	}

	return $userid;
}

function getFriendsList($userid,$time) {
	global $hideOffline;
	$offlinecondition = '';
	$sql = ("select ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_USERID." userid, ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_NAME." username, ".TABLE_PREFIX.DB_USERTABLE.".username link, ".DB_AVATARFIELD." avatar, cometchat_status.lastactivity lastactivity, cometchat_status.status, cometchat_status.message, cometchat_status.isdevice from  ".TABLE_PREFIX."user_membership join ".TABLE_PREFIX.DB_USERTABLE."  on ".TABLE_PREFIX."user_membership.user_id = ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_USERID." left join cometchat_status on ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_USERID." = cometchat_status.userid ".DB_AVATARTABLE." where ".TABLE_PREFIX."user_membership.resource_id = '".mysqli_real_escape_string($GLOBALS['dbh'],$userid)."' and active = 1 order by username asc");
	
	if ((defined('MEMCACHE') && MEMCACHE <> 0) || DISPLAY_ALL_USERS == 1) {
		if ($hideOffline) {
			$offlinecondition = "where (('".mysqli_real_escape_string($GLOBALS['dbh'],$time)."' - cometchat_status.lastactivity < '".((ONLINE_TIMEOUT)*2)."') OR cometchat_status.isdevice = 1) and (cometchat_status.status IS NULL OR cometchat_status.status <> 'invisible' OR cometchat_status.status <> 'offline') ";
		}
		$sql = ("select ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_USERID." userid, ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_NAME." username, ".TABLE_PREFIX.DB_USERTABLE.".username link, ".DB_AVATARFIELD." avatar, cometchat_status.lastactivity lastactivity, cometchat_status.status, cometchat_status.message, cometchat_status.isdevice from  ".TABLE_PREFIX.DB_USERTABLE."  left join cometchat_status on ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_USERID." = cometchat_status.userid ".DB_AVATARTABLE." ".$offlinecondition." order by username asc");
	}
	
	return $sql;
}
function getFriendsIds($userid) {

	$sql = ("select group_concat(friends.fid) myfrndids from (select ".TABLE_PREFIX."user_membership.user_id fid from ".TABLE_PREFIX."user_membership where ".TABLE_PREFIX."user_membership.resource_id = '".mysqli_real_escape_string($GLOBALS['dbh'],$userid)."' and active = 1) friends");
	
	return $sql;
}

function getUserDetails($userid) {
	$sql = ("select ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_USERID." userid, ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_NAME." username, ".TABLE_PREFIX.DB_USERTABLE.".username link, ".DB_AVATARFIELD." avatar, cometchat_status.lastactivity lastactivity, cometchat_status.status, cometchat_status.message, cometchat_status.isdevice from ".TABLE_PREFIX.DB_USERTABLE." left join cometchat_status on ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_USERID." = cometchat_status.userid ".DB_AVATARTABLE." where ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_USERID." = '".mysqli_real_escape_string($GLOBALS['dbh'],$userid)."'");

	return $sql;
}

function updateLastActivity($userid) {
	$sql = ("insert into cometchat_status (userid,lastactivity) values ('".mysqli_real_escape_string($GLOBALS['dbh'],$userid)."','".getTimeStamp()."') on duplicate key update lastactivity = '".getTimeStamp()."'");
	return $sql;
}

function getUserStatus($userid) {
	 $sql = ("select ".TABLE_PREFIX.DB_USERTABLE.".status message, cometchat_status.status from ".TABLE_PREFIX.DB_USERTABLE." left join cometchat_status on ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_USERID." = cometchat_status.userid where ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_USERID." = '".mysqli_real_escape_string($GLOBALS['dbh'],$userid)."'");

	 return $sql;
}

function fetchLink($link) {
	return BASE_URL."../profile/".$link;
}

function getAvatar($image) {
	if (is_file(dirname(dirname(__FILE__)).DIRECTORY_SEPARATOR.''.$image)) {
		return BASE_URL."../".$image;
	} else {
		return BASE_URL."../resources/images/noavatar.png";
	}
}

function getTimeStamp() {
	return time();
}

function processTime($time) {
	return $time;
}

if (!function_exists('getLink')) {
  	function getLink($userid) { return fetchLink($userid); }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* HOOKS */

function hooks_statusupdate($userid,$statusmessage) {
	$sql = ("update ".TABLE_PREFIX.DB_USERTABLE." set status = '".mysqli_real_escape_string($GLOBALS['dbh'],$statusmessage)."', status_date = '".date("Y-m-d H:i:s",getTimeStamp())."' where ".TABLE_PREFIX.DB_USERTABLE.".".DB_USERTABLE_USERID." = '".mysqli_real_escape_string($GLOBALS['dbh'],$userid)."'");
 	$query = mysqli_query($GLOBALS['dbh'],$sql);
}

function hooks_forcefriends() {
	
}

function hooks_activityupdate($userid,$status) {

}

function hooks_message($userid,$to,$unsanitizedmessage) {
	
}

function hooks_updateLastActivity($userid) {
    
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Cometchat V5.4 Socialengine Integration by QASEDAK Group */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////