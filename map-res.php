<?
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/header.php');
$APPLICATION->SetTitle('Главная');
?>

<?
$lat = $_REQUEST["lat"];
$lng = $_REQUEST["lng"];

$file = $_SERVER["DOCUMENT_ROOT"].'/people.txt';
$current = "Широта = ".$lat. ", Долгота = " .$lng;

file_put_contents($file, $current);
?>

<?
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/footer.php');
?>