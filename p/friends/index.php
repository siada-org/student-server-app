<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("Друзья");
global $USER;
if ($USER->IsAuthorized()){
}
else{
	header('Location: /p/auth/index.php');
};
?><div class="row" style="padding-left: 25px; padding-right: 25px;">
	<div class="user-status" style=" color: white; padding-top: 5px">
		<form action="/p/search/index.php" method="post">
 <span style="font-size: 30px"><i class="fa fa-fw fa-search"></i></span><input class="search-friends" name="q" placeholder="Найти друзей" type="text" style="height: 100%">
		</form>
	</div>
<div>
<?$APPLICATION->IncludeComponent(
	"bitrix:socialnetwork.messages_requests",
	"add-to-friends",
	array(
		"COMPONENT_TEMPLATE" => "add-to-friends",
		"ITEMS_COUNT" => "30",
		"PAGE_VAR" => "",
		"PATH_TO_MESSAGE_FORM" => "/p/pm/chat.php?id=#user_id#",
		"PATH_TO_SMILE" => "/bitrix/images/socialnetwork/smile/",
		"PATH_TO_USER" => "/p/users/?id=#user_id#",
		"SET_NAVCHAIN" => "Y",
		"USER_VAR" => ""
	),
	false
);?>
</div>
	 <?$APPLICATION->IncludeComponent(
	"bitrix:socialnetwork.user_friends",
	"friends",
	Array(
		"COMPONENT_TEMPLATE" => "friends",
		"ID" => $id,
		"ITEMS_COUNT" => "30",
		"PAGE_VAR" => "",
		"PATH_TO_LOG" => "",
		"PATH_TO_SEARCH" => "",
		"PATH_TO_USER" => "",
		"PATH_TO_USER_FRIENDS_ADD" => "",
		"PATH_TO_USER_FRIENDS_DELETE" => "",
		"SET_NAV_CHAIN" => "Y",
		"SET_TITLE" => "Y",
		"USER_VAR" => ""
	)
);?>
</div>
<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>