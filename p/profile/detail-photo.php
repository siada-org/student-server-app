<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Новая страница");
?>
<?

?>
			<?
			CModule::IncludeModule("iblock");
			$arSelect = Array("ID","ELEMENT_ID","PREVIEW_PICTURE", "NAME"); // Указываем список параметров, которые будем использовать
			$arFilter = Array("IBLOCK_ID" => 1,"ID" => $_REQUEST["id"]); // Указываем параметры фильтра, по которым будем выводить элементы
			$res = CIBlockElement::GetList(Array("SORT" => "ASC"), $arFilter, false, false, $arSelect); // Вызов
			while ($ob = $res->GetNextElement()) {
				$arFields = $ob->GetFields();
				echo "<span style='text-align:center'>".$arFields["NAME"]."</span>";
				echo '<img class="image-detail" style="max-width:100%" src="' . CFile::GetPath($arFields["PREVIEW_PICTURE"]) . '">';
			}
			?>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>