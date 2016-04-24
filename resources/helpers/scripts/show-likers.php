<?
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/header.php');
include $_SERVER["DOCUMENT_ROOT"]."/resources/helpers/scripts/dbconn.php";

$master = $_REQUEST['id'];

if ($result = mysqli_query($link, 'SELECT * FROM likes_users WHERE id_master='.$master.' ORDER BY id')) {

    while( $row = mysqli_fetch_assoc($result) ){
        $rsUser = CUser::GetByID($row['id_slave']);
        $arUser = $rsUser->Fetch();
        $user_photo = CFile::GetPath($arUser["PERSONAL_PHOTO"]);
        if($user_photo==""){
            $user_photo = "/resources/images/noavatar.png";
        }
        echo "<div class='row'>
                <div class='col-sm-3'>
                    <a href='/pages/users/show-user.php?id=".$arUser["ID"]."'>
                        <img style='' height='50' src='".$user_photo."'>
                    </a>
                </div>
                <div class='col-sm-9'>
                ".$arUser["NAME"]." ".$arUser["LAST_NAME"]."
                </div>
             </div><br>";
    }
    mysqli_free_result($result);
}

mysqli_close($link);
?>