<?
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/header.php');
$APPLICATION->SetTitle('Главная');
?>

<?
global $USER;
$id = $USER->GetID();
$lat = $_REQUEST["lat"];
$lng = $_REQUEST["lng"];

$cuser = new CUser();
$fields = Array (
    "WORK_PAGER" => $lat,
    "WORK_FAX" => $lng,
);
$cuser->Update($id, $fields);

$file = $_SERVER["DOCUMENT_ROOT"].'/people.txt';
$current = "Широта = ".$lat. ", Долгота = " .$lng. " id=".$id;
file_put_contents($file, $current);
?>
<?
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/footer.php');
?>