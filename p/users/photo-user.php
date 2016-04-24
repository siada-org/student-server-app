<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Пользователи");
?>
<?
CModule::IncludeModule("iblock");
$arSelect = Array("ID", "NAME", "PREVIEW_PICTURE", "CREATED_BY", "CREATED_DATE", "DETAIL_TEXT", "PROPERTY_URL", "PROPERTY_USER",); // Указываем список параметров, которые будем использовать
$arFilter = Array("IBLOCK_ID" => 1, "CREATED_BY" => $_REQUEST["id"]); // Указываем параметры фильтра, по которым будем выводить элементы
$res = CIBlockElement::GetList(Array("SORT" => "ASC",), $arFilter, false, false, $arSelect); // Вызов
echo "<table>";
while ($ob = $res->GetNextElement()) {
    $arFields = $ob->GetFields();
    echo '<tr>';
    echo '<td style="padding: 3px"><a href="/p/profile/detail-photo.php?id=' . $arFields['ID'] . '"><img class="image-responsive" style="width:100px" src="' . CFile::GetPath($arFields["PREVIEW_PICTURE"]) . '"></a></td><td>'.$arFields['NAME'].'</td>';
    echo '</tr>';
}
echo "</table>";
?>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>