<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("works");
?>

<?
$order = array('sort' => 'asc');
$tmp = 'sort'; // параметр проигнорируется методом, но обязан быть
$rsUsers = CUser::GetList($order, $tmp); // выбираем пользователей
while ($ob = $rsUsers->GetNext()) {
    $file = $_SERVER["DOCUMENT_ROOT"] . CFile::GetPath($ob["PERSONAL_PHOTO"]);
    $new_file = $_SERVER["DOCUMENT_ROOT"] . "/resources/images/avatars/" . $ob["ID"] . ".jpg";
    copy($file, $new_file);
}
?>

<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>
