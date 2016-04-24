<?
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/header.php');
$APPLICATION->SetTitle('Главная');
?>

<?
$order = array('sort' => 'asc');
$tmp = 'sort'; // параметр проигнорируется методом, но обязан быть
$rsUsers = CUser::GetList($order, $tmp);
while ($ob = $rsUsers->GetNext()) {
    if(isset($ob["WORK_FAX"])&$ob["WORK_FAX"]!=="") {
        echo "<div class='user-popup-map'><a href='/p/users/index.php?id=".$ob['ID']."'><div class='user-popup-map-avatar' style='background-image: url(".(CFile::GetPath($ob['PERSONAL_PHOTO'])).") ;'></div></a>
        <p>".$ob['NAME']." ".$ob['LAST_NAME']."</p>
        <p>".$ob['PERSONAL_GENDER']." ".$ob['PERSONAL_BIRTHDAY']."</p>
        <a href='/p/pm/chat.php?id=".$ob["ID"]."'><div class='map-message-button'><i class='fa fa-fw fa-envelope-o'></i></div></a>
        </div>";
    }
}
?>
<?
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/footer.php');
?>
