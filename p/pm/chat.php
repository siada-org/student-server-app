<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Переписка");
?><?$APPLICATION->IncludeComponent("bitrix:socialnetwork.messages_chat", "pm", Array(
	"COMPONENT_TEMPLATE" => ".default",
		"PAGE_VAR" => "",	// Имя переменной для страницы
		"PATH_TO_MESSAGES_USERS_MESSAGES" => "",	// Шаблон пути к истории сообщений пользователя
		"PATH_TO_SMILE" => "/bitrix/images/socialnetwork/smile/",	// Путь к папке со смайликам относительно корня сайта
		"PATH_TO_USER" => "/p/users/index.php?id=#user_id#",	// Шаблон пути к странице пользователя
		"SET_NAV_CHAIN" => "Y",	// Устанавливать цепочку навигации
		"USER_ID" => $id,	// Идентификатор пользователя
		"USER_VAR" => "",	// Имя переменной для пользователя
	),
	false
);?><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>