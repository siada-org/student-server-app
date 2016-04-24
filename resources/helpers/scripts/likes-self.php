<?
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/header.php');
include $_SERVER["DOCUMENT_ROOT"]."/resources/helpers/scripts/dbconn.php";

$master = $USER->GetID();

if ($result = mysqli_query($link, 'SELECT COUNT(*) FROM likes_users WHERE id_master='.$master.' ORDER BY id')) {

    while( $row = mysqli_fetch_assoc($result) ){
        echo "<a style='position:absolute; bottom: 0px; left: 78%' href='#'>
                <div class='btn btn-block' style=' border: 1px solid black; background: #6d7cdd; color: white;width:55px; padding: 3px'><i class='fa fa-fw fa-thumbs-o-up'></i>".$row['COUNT(*)']."</div>
            </a>";

    }
    mysqli_free_result($result);
}

mysqli_close($link);

?>