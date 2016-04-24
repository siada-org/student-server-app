<?
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/header.php');
include $_SERVER["DOCUMENT_ROOT"]."/resources/helpers/scripts/dbconn.php";

$master = $_REQUEST['id'];
if ($results = mysqli_query($link, 'SELECT COUNT(*) FROM event_likes WHERE id_master='.$master.' ORDER BY id')){
    while( $rows = mysqli_fetch_assoc($results) ){
        $counts = $rows['COUNT(*)'];
        //echo $counts;
    }
}
if ($result = mysqli_query($link, 'SELECT * FROM event_likes WHERE id_master='.$master.' ORDER BY id')) {
echo "<div class='row'>";
    while( $row = mysqli_fetch_assoc($result) ){
        $rsUser = CUser::GetByID($row['id_slave']);
        $arUser = $rsUser->Fetch();
        $user_photo = CFile::GetPath($arUser["PERSONAL_PHOTO"]);
        $user_name = $arUser["TITLE"];
        if($user_photo==""){
            $user_photo = "/resources/images/noavatar.png";
        }
        echo "
                <div class='col-xs-4' style='text-align: center'>
                    <a href='/p/users/index.php?id=".$arUser["ID"]."'>
                        <img style='' height='50' src='".$user_photo."'>
                    </a><br>
                ".$user_name."
                </div>";
    }
    mysqli_free_result($result);
}
echo "</div>";
echo "<hr>";
echo "<div class='row' style='margin: 0'>Всего идет ".$counts." человек</div>";

mysqli_close($link);
?>