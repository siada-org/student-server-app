<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Пользователи");
global $USER;
if ($USER->IsAuthorized()){
}
else{
	header('Location: /p/auth/index.php');
};
?>
<div class="row" style="margin: 0px">
<?$APPLICATION->IncludeComponent(
	"bitrix:socialnetwork.user_profile", 
	"show-user", 
	array(
		"AVATAR_SIZE" => "300",
		"COMPONENT_TEMPLATE" => "show-user",
		"DATE_TIME_FORMAT" => "d.m.Y H:i:s",
		"ID" => $id,
		"ITEMS_COUNT" => "6",
		"PAGE_VAR" => "",
		"PATH_TO_GROUP" => "",
		"PATH_TO_GROUP_CREATE" => "",
		"PATH_TO_GROUP_EDIT" => "",
		"PATH_TO_GROUP_SEARCH" => "",
		"PATH_TO_LOG" => "",
		"PATH_TO_MESSAGES_CHAT" => "http://student-app.ru/p/pm/chat.php?id=#user_id#",
		"PATH_TO_MESSAGES_USERS_MESSAGES" => "",
		"PATH_TO_MESSAGE_FORM" => "",
		"PATH_TO_SEARCH" => "",
		"PATH_TO_SEARCH_INNER" => "",
		"PATH_TO_USER" => "http://student-app.ru/p/users/index.php?id=#user_id#",
		"PATH_TO_USER_EDIT" => "",
		"PATH_TO_USER_FEATURES" => "",
		"PATH_TO_USER_FRIENDS" => "",
		"PATH_TO_USER_FRIENDS_ADD" => "http://student-app.ru/p/friends/add.php?id=#user_id#",
		"PATH_TO_USER_FRIENDS_DELETE" => "",
		"PATH_TO_USER_GROUPS" => "",
		"PATH_TO_USER_SETTINGS_EDIT" => "",
		"PATH_TO_USER_SUBSCRIBE" => "",
		"SET_NAV_CHAIN" => "Y",
		"SET_TITLE" => "Y",
		"SHORT_FORM" => "N",
		"SHOW_YEAR" => "Y",
		"SONET_USER_FIELDS_SEARCHABLE" => array(
			0 => "WORK_MAILBOX",
		),
		"SONET_USER_PROPERTY_SEARCHABLE" => array(
		),
		"USER_FIELDS_CONTACT" => array(
		),
		"USER_FIELDS_MAIN" => array(
			0 => "LOGIN",
			1 => "NAME",
			2 => "LAST_NAME",
			3 => "PERSONAL_MOBILE",
			4 => "PERSONAL_CITY",
		),
		"USER_FIELDS_PERSONAL" => array(
		),
		"USER_PROPERTY_CONTACT" => array(
		),
		"USER_PROPERTY_MAIN" => array(
			0 => "UF_NICK",
			1 => "UF_VUZ",
			2 => "UF_CITY",
			3 => "UF_REL",
			4 => "UF_BD",
		),
		"USER_PROPERTY_PERSONAL" => array(
			0 => "UF_NICK",
			1 => "UF_VUZ",
			2 => "UF_CITY",
			3 => "UF_REL",
			4 => "UF_BD",
		),
		"USER_VAR" => ""
	),
	false
);?>

	</div><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>