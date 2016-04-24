<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("Мероприятия");
?><?
$id = $_REQUEST['id'];
$P_CODE = "USER";
$P_VALUE = $USER->GetID();

?>
<div style="margin: 0 auto; width: 100%; height: 100%; background: #435A87">
	<div class="row" style="margin-right: 0;margin-left: 0;">
		<div class="col-xs-12">
			 <?
                CModule::IncludeModule("iblock");
                $arSelect = Array("ID", "NAME", "PREVIEW_TEXT", "PREVIEW_PICTURE", "CREATED_BY", "CREATED_DATE", "DETAIL_TEXT", "PROPERTY_URL",); // Указываем список параметров, которые будем использовать
                $arFilter = Array("IBLOCK_ID" => 4, "ID" => $id); // Указываем параметры фильтра, по которым будем выводить элементы
                $res = CIBlockElement::GetList(Array("SORT" => "ASC"), $arFilter, false, false, $arSelect); // Вызов

                while ($ob = $res->GetNextElement()) {
                    $arFields = $ob->GetFields();
                    echo '<div class="row" style="padding: 5px">';
                    echo '<a href="' . $arFields['PROPERTY_URL_VALUE'] . '"><img class="image-responsive" style="width:100%" src="' . CFile::GetPath($arFields["PREVIEW_PICTURE"]) . '"></a>';
					echo "<div style='color: white; text-align: justify; width: 100%; padding-top: 5px'>".$arFields['PREVIEW_TEXT']."</div>";
                    echo '</div>';
                }
                echo '<div class="row" style="margin: 0">
            <a href="/resources/helpers/scripts/events/do-like-d.php?id='.$id.'"><div class="col-xs-12" style="margin: 10px auto; padding: 10px 10px; background-color: #4ebb4e; border-radius: 5px; border: 1px solid black; text-align: center; font-weight: bold; color: black" >Я иду !</div></a>
    </div>';
                echo "<div style='text-align: center;width: 100%; background: white; padding: 10px; border-radius: 10px'>";
                include $_SERVER["DOCUMENT_ROOT"] . "/resources/helpers/scripts/events/show-likers.php";
                ?><br>
		</div>
	</div>
</div>
<div class="row" style="margin: 0; padding: 20px 15px;">
    <div style="background-color: white; border-radius: 10px; padding: 5px">
 <?$APPLICATION->IncludeComponent(
	"bitrix:forum.topic.reviews", 
	"comments", 
	array(
		"AJAX_POST" => "Y",
		"CACHE_TIME" => "0",
		"CACHE_TYPE" => "A",
		"COMPONENT_TEMPLATE" => "comments",
		"DATE_TIME_FORMAT" => "d.m.Y H:i:s",
		"EDITOR_CODE_DEFAULT" => "N",
		"ELEMENT_ID" => $id,
		"FILES_COUNT" => "2",
		"FORUM_ID" => "1",
		"IBLOCK_ID" => "4",
		"IBLOCK_TYPE" => "events_ib",
		"MESSAGES_PER_PAGE" => "10",
		"NAME_TEMPLATE" => "",
		"PAGE_NAVIGATION_TEMPLATE" => "",
		"PREORDER" => "Y",
		"RATING_TYPE" => "",
		"SHOW_AVATAR" => "Y",
		"SHOW_LINK_TO_FORUM" => "Y",
		"SHOW_MINIMIZED" => "N",
		"SHOW_RATING" => "",
		"URL_TEMPLATES_DETAIL" => "",
		"URL_TEMPLATES_PROFILE_VIEW" => "",
		"URL_TEMPLATES_READ" => "",
		"USE_CAPTCHA" => "Y"
	),
	false
);?>
    </div>
</div>
<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>