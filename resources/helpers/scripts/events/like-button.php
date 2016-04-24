<?
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/header.php');
include $_SERVER["DOCUMENT_ROOT"]."/resources/helpers/scripts/dbconn.php";

//$master = $_REQUEST['id'];

if ($result = mysqli_query($link, 'SELECT COUNT(*) FROM event_likes WHERE id_master='.$master.' ORDER BY id')) {

    while( $row = mysqli_fetch_assoc($result) ){
        echo "<a style='position: absolute; right: 0; bottom: 0;' href='/resources/helpers/scripts/events/do-like.php?id=".$master."'>
<div class='btn btn-block btn-primary' style='width:55px'><img style='width:20px;' src='/resources/images/icons/i_go.png'> ".$row['COUNT(*)']."</div></a>";
    }
    mysqli_free_result($result);
}

mysqli_close($link);
?>
