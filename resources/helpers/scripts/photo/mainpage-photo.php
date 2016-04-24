<div class="mainpage-photo">
<?
$self = $USER->GetID();
CModule::IncludeModule("iblock");
$arSelect = Array("ID", "NAME", "PREVIEW_PICTURE", "CREATED_BY", "CREATED_DATE", "DETAIL_TEXT", "PROPERTY_URL", "PROPERTY_USER",); // Указываем список параметров, которые будем использовать
$arFilter = Array("IBLOCK_ID" => 1, "CREATED_BY" => $self); // Указываем параметры фильтра, по которым будем выводить элементы
$res = CIBlockElement::GetList(Array("RAND" => "ASC",), $arFilter, false, Array("nTopCount"=>1), $arSelect); // Вызов

while ($ob = $res->GetNextElement()) {
    $arFields = $ob->GetFields();
    $master = $arFields["ID"];
    echo '<div style="width: 81px; height: 81px; background: url('.CFile::GetPath($arFields["PREVIEW_PICTURE"]).') no-repeat center; background-size: cover"></div>';
}
?>
</div>
