<?
include $_SERVER["DOCUMENT_ROOT"]."/resources/helpers/scripts/dbconn.php";
$mid = $_REQUEST["mid"];
if ($result = mysqli_query($link, 'SELECT COUNT(*) FROM chat_likes WHERE mid='.$mid.' ORDER BY id')) {

    while( $row = mysqli_fetch_assoc($result) ){
        echo $row['COUNT(*)'];
    }
    mysqli_free_result($result);
}

mysqli_close($link);
?>
