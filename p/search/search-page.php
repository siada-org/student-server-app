<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Поиск");
global $USER;
if ($USER->IsAuthorized()){
}
else{
	header('Location: /p/auth/index.php');
};
?><?$APPLICATION->IncludeComponent("bitrix:search.form", "search-form", Array(
	"COMPONENT_TEMPLATE" => ".default",
		"PAGE" => "#SITE_DIR#search/index.php",	// Страница выдачи результатов поиска (доступен макрос #SITE_DIR#)
		"USE_SUGGEST" => "N",	// Показывать подсказку с поисковыми фразами
	),
	false
);?><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>