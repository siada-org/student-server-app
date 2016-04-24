<?
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/header.php');
include $_SERVER["DOCUMENT_ROOT"] . "/resources/helpers/scripts/dbconn.php";

$mid = $_REQUEST['mid'];
$uid = 'u' . $_REQUEST['uid'];

if ($result = mysqli_query($link, 'SELECT * FROM chat_likes WHERE mid="' . $mid . '" ORDER BY id ')) {

    if (mysqli_num_rows($result) == 0) {
        $send = mysqli_query($link, 'INSERT INTO chat_likes (mid, uid) VALUES ("' . $mid . '", "' . $uid . '")');
    } else {
        while ($row = mysqli_fetch_assoc($result)) {
            print_r($row);
            if (!in_array($uid, $row)) {
                $send = mysqli_query($link, 'INSERT INTO chat_likes (mid, uid) VALUES ("' . $mid . '", "' . $uid . '")');
            } else {
                $send = mysqli_query($link, 'DELETE FROM chat_likes WHERE mid="' . $mid . '" AND uid="' . $uid . '" LIMIT 1');
            }
        }
    }
    mysqli_free_result($result);
}
mysqli_close($link);
