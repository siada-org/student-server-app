<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("TITLE", "Альбом");
$APPLICATION->SetTitle("Просмотр альбома");
?><?$APPLICATION->IncludeComponent(
	"bitrix:photogallery.section",
	"",
	Array(
		"ALBUM_PHOTO_SIZE" => "150",
		"ALBUM_PHOTO_THUMBS_SIZE" => "70",
		"BEHAVIOUR" => "",
		"CACHE_TIME" => "3600",
		"CACHE_TYPE" => "A",
		"COMPONENT_TEMPLATE" => ".default",
		"DATE_TIME_FORMAT" => "d.m.Y",
		"DETAIL_SLIDE_SHOW_URL" => "slide_show.php?SECTION_ID=#SECTION_ID#&ELEMENT_ID=#ELEMENT_ID#",
		"IBLOCK_ID" => "3",
		"IBLOCK_TYPE" => "photo_ib",
		"INDEX_URL" => "index.php",
		"RETURN_SECTION_INFO" => "Y",
		"SECTION_CODE" => "",
		"SECTION_EDIT_ICON_URL" => "section_edit_icon.php?SECTION_ID=#SECTION_ID#",
		"SECTION_EDIT_URL" => "section_edit.php?SECTION_ID=#SECTION_ID#",
		"SECTION_ID" => $_REQUEST["SECTION_ID"],
		"SECTION_URL" => "section.php?SECTION_ID=#SECTION_ID#",
		"SET_STATUS_404" => "N",
		"SET_TITLE" => "Y",
		"UPLOAD_URL" => "upload.php?SECTION_ID=#SECTION_ID#",
		"USER_ALIAS" => ""
	)
);?><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>