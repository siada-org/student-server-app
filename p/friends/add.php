<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("TITLE", "Добавить друга");
$APPLICATION->SetTitle("Добавить друга");
?><?$APPLICATION->IncludeComponent("bitrix:socialnetwork.user_friends_add", "add-friend", Array(
	"COMPONENT_TEMPLATE" => ".default",
		"ID" => $id,	// Идентификатор пользователя
		"PAGE_VAR" => "",	// Имя переменной для страницы
		"PATH_TO_USER" => "/p/users/index.php?id=#user_id#",	// Шаблон пути к странице пользователя
		"SET_NAVCHAIN" => "Y",	// Устанавливать цепочку навигации
		"SET_TITLE" => "Y",	// Устанавливать заголовок страницы
		"USER_VAR" => "",	// Имя переменной для пользователя
	),
	false
);?><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>