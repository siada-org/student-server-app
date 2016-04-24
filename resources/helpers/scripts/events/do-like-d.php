<?

require($_SERVER['DOCUMENT_ROOT'].'/bitrix/header.php');
include $_SERVER["DOCUMENT_ROOT"]."/resources/helpers/scripts/dbconn.php";

$id=$_REQUEST['id'];
$slave = $USER->GetID();
if ($result = mysqli_query($link, 'SELECT * FROM event_likes WHERE id_master='.$id.' ORDER BY id ')) {
    if(mysqli_num_rows($result)==0){
        $send = mysqli_query($link, 'INSERT INTO event_likes (id_master, id_slave) VALUES ('.$id.', '.$slave.')');
    }
    else{
        $dresult = mysqli_query($link, 'SELECT * FROM event_likes WHERE id_master='.$id.' AND id_slave='.$slave.' LIMIT 1');
        if(mysqli_num_rows($dresult)==0){
            $send = mysqli_query($link, 'INSERT INTO event_likes (id_master, id_slave) VALUES ('.$id.', '.$slave.')');
        }
        else{
            $send = mysqli_query($link, 'DELETE FROM event_likes WHERE id_master='.$id.' AND id_slave='.$slave.' LIMIT 1');
        };
    }
    mysqli_free_result($result);
}
mysqli_close($link);
header("Location: /p/events/detail.php?id=".$id);
 ?>

