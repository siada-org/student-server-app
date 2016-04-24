<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<?
$id = $_REQUEST['id'];
$uid = $USER->GetID();
if ($arResult["NEED_AUTH"] == "Y")
{
	$APPLICATION->AuthForm("");
}
elseif (strlen($arResult["FatalError"]) > 0)
{
	?><span class='errortext'><?=$arResult["FatalError"]?></span><br /><br /><?
}
else
{
	if(strlen($arResult["ErrorMessage"])>0)
	{
		?><span class='errortext'><?=$arResult["ErrorMessage"]?></span><br /><br /><?
	}

	?><div style="margin: 10px;">
	<table width="100%" cellspacing="0" cellpadding="8" border="0" class="sonet-user-short">
		<tr>
			<td valign="top" width="100%" class="sonet-user-avatar"><?
				?>
				<table style="width: 100%;height: 100%">
					<tr>
						<td colspan="3" rowspan="3" style="max-width: 75%; text-align: center; padding: 5px 5px ">
							<div style="border-bottom-right-radius: 3px; position: relative; width: 100%; height: 260px; background: url(<? echo CFile::GetPath($arResult["User"]["PERSONAL_PHOTO"]) ?>) no-repeat center; background-size: cover">
								<?
								include $_SERVER["DOCUMENT_ROOT"]."/resources/helpers/scripts/user_likes.php"
								?>
							</div>
						</td>
						<td><? include $_SERVER["DOCUMENT_ROOT"]."/resources/helpers/scripts/photo/user-photo-icon.php"?></td>
					</tr>
					<tr>
						<td style="text-align: center">
							<? include $_SERVER["DOCUMENT_ROOT"]."/resources/helpers/scripts/photo/userpage-photo.php"?>
						</td>
					</tr>
					<tr>
						<td style="width: 25%; text-align: center"><? include $_SERVER["DOCUMENT_ROOT"]."/resources/helpers/scripts/photo/userpage-photo.php"?></td>
					</tr>
					<tr>
						<td style="width: 25%; text-align: center"><? include $_SERVER["DOCUMENT_ROOT"]."/resources/helpers/scripts/photo/userpage-photo.php"?></td>
						<td style="width: 25%; text-align: center"><? include $_SERVER["DOCUMENT_ROOT"]."/resources/helpers/scripts/photo/userpage-photo.php"?></td>
						<td style="width: 25%; text-align: center"><? include $_SERVER["DOCUMENT_ROOT"]."/resources/helpers/scripts/photo/userpage-photo.php"?></td>
						<td style="width: 25%; text-align: center"><? include $_SERVER["DOCUMENT_ROOT"]."/resources/helpers/scripts/photo/userpage-photo.php"?></td>
					</tr>
				</table>
				<?
				if ($arResult['IS_ONLINE'] || $arResult['IS_BIRTHDAY'] || $arResult['IS_ABSENT'] || $arResult["IS_HONOURED"])
				{
					?><div class="bx-user-control">
					<ul>
						<?if ($arResult['IS_ONLINE']):?><li class="bx-icon bx-icon-online"><?= GetMessage("SONET_C38_T_ONLINE") ?></li><?endif;?>
						<?if ($arResult['IS_BIRTHDAY']):?><li class="bx-icon bx-icon-birth"><?= GetMessage("SONET_C38_T_BIRTHDAY") ?></li><?endif;?>
						<?if ($arResult["IS_HONOURED"]):?><li class="bx-icon bx-icon-featured"><?= GetMessage("SONET_C38_T_HONOURED") ?></li><?endif;?>
						<?if ($arResult['IS_ABSENT']):?><li class="bx-icon bx-icon-away"><?= GetMessage("SONET_C39_ABSENT") ?></li><?endif;?>
					</ul>
					</div><?
				}

				if ($GLOBALS["USER"]->IsAuthorized())
				{
					if (!$arResult["CurrentUserPerms"]["IsCurrentUser"])
					{
						if ($arResult["CurrentUserPerms"]["Operations"]["message"] || $arResult["CurrentUserPerms"]["Operations"]["videocall"])
						{
							?><div class="bx-user-control">
							<ul><?
								if ($arResult["CurrentUserPerms"]["Operations"]["message"] && $arResult["User"]["ACTIVE"] != "N")
								{
									?><li><nobr><a href="<?= $arResult["Urls"]["MessageChat"] ?>" class="btn btn-block btn-primary">Отправить сообщение</a></nobr></li>
									<?
									if(CSocNetUserRelations::IsFriends($id, $uid)!=1){

										echo "<br><li><nobr><a href='".$arResult['Urls']['FriendsAdd']."' class='btn btn-block btn-primary'>Добавить в друзья</a></nobr></li>";
									}
									?>
									<?
								}
								if ($arResult["CurrentUserPerms"]["Operations"]["videocall"] && $arResult["User"]["ACTIVE"] != "N")
								{
									?><li class="bx-icon-action bx-icon-video-call"><nobr><a href="<?= $arResult["Urls"]["VideoCall"] ?>" onclick="window.open('<?= $arResult["Urls"]["VideoCall"] ?>', '', 'location=yes,status=no,scrollbars=yes,resizable=yes,width=1000,height=600,top='+Math.floor((screen.height - 600)/2-14)+',left='+Math.floor((screen.width - 1000)/2-5)); return false;"><?= GetMessage("SONET_C39_VIDEO_CALL") ?></a></nobr></li><?
								}
								?></ul>
							</div><?
						}
					}
				}
				?></td>
		</tr>
		<tr>
			<td valign="top" width="65%" class="sonet-user-text">
				<h4><?=$arResult["User"]["NAME_FORMATTED"]?></h4><?
				if ($arResult["CurrentUserPerms"]["Operations"]["viewprofile"])
				{
					?><table width="100%" cellspacing="2" cellpadding="2" class="table table-hover"><?
					if ($arResult["UserFieldsMain"]["SHOW"] == "Y")
					{
						foreach ($arResult["UserFieldsMain"]["DATA"] as $fieldName => $arUserField)
						{
							if (StrLen($arUserField["VALUE"]) > 0)
							{
								?><tr><?
								?><td width="25%"><?= $arUserField["NAME"] ?>:</td>
								<td width="75%"><?= $arUserField["VALUE"] ?></td><?
								?></tr><?
							}
						}
					}

					if ($arResult["UserPropertiesMain"]["SHOW"] == "Y")
					{
						foreach ($arResult["UserPropertiesMain"]["DATA"] as $fieldName => $arUserField)
						{
							if (
								is_array($arUserField["VALUE"]) && count($arUserField["VALUE"]) > 0
								|| !is_array($arUserField["VALUE"]) && StrLen($arUserField["VALUE"]) > 0
							)
							{
								?><tr>
								<td width="25%"><?=$arUserField["EDIT_FORM_LABEL"]?>:</td>
								<td width="75%"><?
									if (
										IsModuleInstalled('intranet')
										&& (
											!IsModuleInstalled("extranet")
											|| !CExtranet::IsExtranetSite()
										)
									)
									{
										$arUserField['SETTINGS']['SECTION_URL'] = $arParams["PATH_TO_CONPANY_DEPARTMENT"];
									}

									$APPLICATION->IncludeComponent(
										"bitrix:system.field.view",
										$arUserField["USER_TYPE"]["USER_TYPE_ID"],
										array("arUserField" => $arUserField),
										null,
										array("HIDE_ICONS"=>"Y")
									);
									?></td>
								</tr><?
							}
						}
					}
					?></table><?
				}
				else
				{
					?><?=GetMessage("SONET_C38_TP_NO_PERMS")?><?
				}
				?></td>
		</tr>
	</table>
	</div>
	<?
	//echo CSocNetUserRelations::IsFriends($uid, $id);

}
?>