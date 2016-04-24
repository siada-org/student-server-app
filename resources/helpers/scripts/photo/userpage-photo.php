<div class="mainpage-photo">
    <?
    $self = $_REQUEST["id"];
    CModule::IncludeModule("iblock");
    $arSelect = Array("ID", "NAME", "PREVIEW_PICTURE", "CREATED_BY", "CREATED_DATE", "DETAIL_TEXT", "PROPERTY_URL", "PROPERTY_USER",); // Указываем список параметров, которые будем использовать
    $arFilter = Array("IBLOCK_ID" => 1, "CREATED_BY" => $self); // Указываем параметры фильтра, по которым будем выводить элементы
    $res = CIBlockElement::GetList(Array("RAND" => "ASC",), $arFilter, false, Array("nTopCount"=>1), $arSelect); // Вызов

    while ($ob = $res->GetNextElement()) {
        $arFields = $ob->GetFields();
        $master = $arFields["ID"];
       echo '<a href="/p/profile/detail-photo.php?id=' . $arFields['ID'] . '"><div style="width: 83px; height: 83px; background: url('.CFile::GetPath($arFields["PREVIEW_PICTURE"]).') no-repeat center; background-size: cover"></div></a>';
    }
    ?>
</div>