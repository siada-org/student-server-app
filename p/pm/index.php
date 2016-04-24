<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("личные сообщения");
global $USER;
if ($USER->IsAuthorized()){
}
else{
	header('Location: /p/auth/index.php');
};
?><?$APPLICATION->IncludeComponent("bitrix:socialnetwork.messages_users", "chat-list", Array(
	"COMPONENT_TEMPLATE" => ".default",
		"ITEMS_COUNT" => "20",	// Число записей на странице
		"PAGE_VAR" => "",	// Имя переменной для страницы
		"PATH_TO_MESSAGES_CHAT" => "/p/pm/chat?id=#user_id#",	// Шаблон пути к странице чата с пользователем
		"PATH_TO_MESSAGES_USERS" => "/p/pm/chat?id=#user_id#",	// Шаблон пути к странице переписки
		"PATH_TO_MESSAGES_USERS_MESSAGES" => "/p/pm/chat?id=#user_id#",	// Шаблон пути к переписке с пользователем
		"PATH_TO_MESSAGE_FORM" => "/p/pm/chat?id=#user_id#",	// Шаблон пути к странице отправки сообщений
		"PATH_TO_SMILE" => "/bitrix/images/socialnetwork/smile/",	// Путь к папке со смайликам относительно корня сайта
		"PATH_TO_USER" => "/p/users/index.php?id=#user_id#",	// Шаблон пути к странице пользователя
		"SET_NAVCHAIN" => "Y",	// Устанавливать цепочку навигации
		"USER_ID" => $id,	// Идентификатор пользователя
		"USER_VAR" => "",	// Имя переменной для пользователя
	),
	false
);?><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>