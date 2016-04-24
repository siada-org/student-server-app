<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetPageProperty("TITLE", "Работа");
$APPLICATION->SetTitle("Работа");
?>
<?
$file = $_REQUEST["f"];
echo "<img src='".CFile::GetPath($file)."' style='max-width:100%; max-height:100%'>";
?>
<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>
