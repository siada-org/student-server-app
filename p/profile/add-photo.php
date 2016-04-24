<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("TITLE", "Добавить фотографию");
$APPLICATION->SetTitle("add-photo");
?><?$APPLICATION->IncludeComponent(
	"bitrix:photogallery.upload",
	"",
	Array(
		"ALBUM_PHOTO_THUMBS_WIDTH" => "120",
		"COMPONENT_TEMPLATE" => ".default",
		"IBLOCK_ID" => "3",
		"IBLOCK_TYPE" => "photo_ib",
		"INDEX_URL" => "/p/profile/photo.php",
		"JPEG_QUALITY" => "100",
		"JPEG_QUALITY1" => "100",
		"MODERATION" => "N",
		"ORIGINAL_SIZE" => "1280",
		"PATH_TO_FONT" => "default.ttf",
		"SECTION_ID" => $_REQUEST["SECTION_ID"],
		"SECTION_URL" => "section.php?SECTION_ID=#SECTION_ID#",
		"SET_TITLE" => "Y",
		"THUMBNAIL_SIZE" => "90",
		"UPLOAD_MAX_FILE_SIZE" => "7",
		"USE_WATERMARK" => "Y",
		"WATERMARK_MIN_PICTURE_SIZE" => "800",
		"WATERMARK_RULES" => "USER",
		"WATERMARK_TYPE" => "BOTH"
	)
);?><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>