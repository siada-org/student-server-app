<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Мероприятия");
global $USER;
if ($USER->IsAuthorized()){
}
else{
    header('Location: /p/auth/index.php');
};
?>
<div class="row" style="margin: 10px">
    <div class="search-place">
        <table>
            <tr>
                <td><form action="/p/search/events.php">
                        <input name="q" placeholder="Выбрать место" type="text" method="POST">
                    </form>
                </td>
                <td style="text-align: right">
                    <i class="fa fa-search" style="color: white"></i>
                </td>
            </tr>
        </table>
    </div>
</div>
    <div class="row" style="margin: 10px">
        <div class="col-xs-12">
            <?
            CModule::IncludeModule("iblock");
            $arSelect = Array("ID", "NAME", "PREVIEW_PICTURE", "CREATED_BY", "CREATED_DATE", "DETAIL_TEXT", "PROPERTY_URL",); // Указываем список параметров, которые будем использовать
            $arFilter = Array("IBLOCK_ID" => 4,); // Указываем параметры фильтра, по которым будем выводить элементы
            $res = CIBlockElement::GetList(Array("SORT" => "ASC"), $arFilter, false, false, $arSelect); // Вызов

            while ($ob = $res->GetNextElement()) {
                $arFields = $ob->GetFields();
                $master = $arFields["ID"];
                echo '<div class="row" style="position: relative">';
                echo '<a href="/p/events/detail.php?id=' . $arFields['ID'] . '"><img class="image-responsive" style="width:100%" src="' . CFile::GetPath($arFields["PREVIEW_PICTURE"]) . '"></a>';
                include $_SERVER["DOCUMENT_ROOT"]."/resources/helpers/scripts/events/like-button.php";
                echo '</div><br>';
            }
            ?>
        </div>
    </div>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>