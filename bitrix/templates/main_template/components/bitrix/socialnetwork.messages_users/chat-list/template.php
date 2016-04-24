<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<?
if ($arResult["NEED_AUTH"] == "Y")
	$APPLICATION->AuthForm("");
elseif (strlen($arResult["FatalError"]) > 0) {
	?><span class='errortext'><?= $arResult["FatalError"] ?></span><br/><br/><?
} else {
	if (strlen($arResult["ErrorMessage"]) > 0) {
		?><span class='errortext'><?= $arResult["ErrorMessage"] ?></span><br/><br/><?
	}
	?>
	<div class="sonet-cntnr-messages-users">
	<a href='/p/search/search-page.php'><button class='btn btn-block color-main btn-sm' style="width: 95%; margin: 0 auto; margin-bottom: 4px; margin-top: 4px;">Найти пользователей <i class="fa fa-fw fa-search"></i> </button></a>
	<table width="95%" style="margin: 5px">

		<?
		$ind = 0;
		if ($arResult["Events"]):
			foreach ($arResult["Events"] as $event):
				?>
				<tr>
				<td style="border-bottom: 1px solid black; padding: 5px;" valign="top"<?= ($event["UNREAD"] > 0 ? " class=\"selected\"" : "") ?> width="1%" nowrap><?
					?><img src="<?= $event["USER_PERSONAL_PHOTO_FILE"]["SRC"]; ?>" width="50"><?
					?></td>
				<a href="<? echo "/pages/users/chat.php?id=" . $event['USER_ID']; ?>">
					<td valign="top" style="padding: 5px; border-bottom: 1px solid black" <?= ($event["UNREAD"] > 0 ? " class=\"selected\"" : "") ?>align="center"
						onclick="location.href='<? echo "/p/pm/chat.php?id=" . $event['USER_ID']; ?>'"><?

						$rsUser = CUser::getByID($event['USER_ID']);
						$arUser = $rsUser->Fetch();
						echo $arUser["NAME"] . " " . $arUser["LAST_NAME"] . " (" . $arUser['WORK_COMPANY'] . ", " . $arUser['GENDER'] . ", " . $arUser["PERSONAL_BIRTHDAY"] . ")" ?><br>
						<?
						$user_id = $event["USER_ID"];
						$APPLICATION->IncludeComponent("bitrix:socialnetwork.messages_users_messages", "tempos", Array(
							"COMPONENT_TEMPLATE" => ".default",
							"ITEMS_COUNT" => "20",	// Число записей на странице
							"MESSAGE_VAR" => "",	// Имя переменной для сообщения
							"PAGE_VAR" => "",	// Имя переменной для страницы
							"PATH_TO_MESSAGES_CHAT" => "",	// Шаблон пути к странице чата с пользователем
							"PATH_TO_MESSAGES_USERS" => "",	// Шаблон пути к странице переписки
							"PATH_TO_MESSAGES_USERS_MESSAGES" => "",	// Шаблон пути к переписке с пользователем
							"PATH_TO_MESSAGE_FORM" => "",	// Шаблон пути к странице отправки сообщений
							"PATH_TO_MESSAGE_FORM_MESS" => "",	// Шаблон пути к странице ответа на сообщение
							"PATH_TO_SMILE" => "/bitrix/images/socialnetwork/smile/",	// Путь к папке со смайликам относительно корня сайта
							"PATH_TO_USER" => "",	// Шаблон пути к странице пользователя
							"SET_NAVCHAIN" => "Y",	// Устанавливать цепочку навигации
							"USER_ID" => $user_id,	// Идентификатор пользователя
							"USER_VAR" => "",	// Имя переменной для пользователя
						),
							false
						);?>
						<hr>
					</td>
				</a>
				</tr><?
			endforeach;
		else:
			?>
			<tr>
			<td colspan="4"><?= GetMessage("SONET_C30_T_EMPTY") ?></td>
			</tr><?
		endif;
		?></table>
	</div><?
	if (StrLen($arResult["NAV_STRING"]) > 0):
		?><?= $arResult["NAV_STRING"] ?><br/><br/><?
	endif;
}
?>