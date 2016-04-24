<?
/**
 * @global CMain $APPLICATION
 * @param array $arParams
 * @param array $arResult
 */
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
	die();
?>
<div class="row" style="padding: 30px">
<div class="bx-auth-profile">

	<?ShowError($arResult["strProfileError"]);?>
	<?
	if ($arResult['DATA_SAVED'] == 'Y')
		ShowNote(GetMessage('PROFILE_DATA_SAVED'));
	?>
	<script type="text/javascript">
		<!--
		var opened_sections = [<?
			$arResult["opened"] = $_COOKIE[$arResult["COOKIE_PREFIX"]."_user_profile_open"];
			$arResult["opened"] = preg_replace("/[^a-z0-9_,]/i", "", $arResult["opened"]);
			if (strlen($arResult["opened"]) > 0)
			{
				echo "'".implode("', '", explode(",", $arResult["opened"]))."'";
			}
			else
			{
				$arResult["opened"] = "reg";
				echo "'reg'";
			}
			?>];
		//-->

		var cookie_prefix = '<?=$arResult["COOKIE_PREFIX"]?>';
	</script>
	<div class="row" style="padding: 5px;">
	<form method="post" name="form1" action="<?=$arResult["FORM_TARGET"]?>" enctype="multipart/form-data">
		<?=$arResult["BX_SESSION_CHECK"]?>
		<input type="hidden" name="lang" value="<?=LANG?>" />
		<input type="hidden" name="ID" value=<?=$arResult["ID"]?> />

		<table class="profile-table data-table pt">
			<tbody>
			<tr>
				<td class="profile_label">Ник</td>
				<td class="profile_input"><input type="text" name="TITLE" maxlength="50" value="<?=$arResult["arUser"]["TITLE"]?>" /></td>
			</tr>
			<tr>
				<td class="profile_label"><?=GetMessage('NAME')?></td>
				<td class="profile_input"><input type="text" name="NAME" maxlength="50" value="<?=$arResult["arUser"]["NAME"]?>" /></td>
			</tr>
			<tr>
				<td class="profile_label"><?=GetMessage('LAST_NAME')?></td>
				<td class="profile_input"><input type="text" name="LAST_NAME" maxlength="50" value="<?=$arResult["arUser"]["LAST_NAME"]?>" /></td>
			</tr>
			<tr>
				<td class="profile_label">Пол</td>
				<td class="profile_input">
						<? if ($arResult["arUser"]["PERSONAL_GENDER"] == "F" or $arResult["arUser"]["PERSONAL_GENDER"] == ""){
							echo '<select name="PERSONAL_GENDER" class="opts">
						<option disabled>Выберите пол</option>
						<option value="M">Мужской</option>
						<option selected value="F">Женский</option>
					</select>';
						}
						else{
							echo '<select name="PERSONAL_GENDER" class="opts">
						<option disabled>Выберите пол</option>
						<option selected value="M">Мужской</option>
						<option value="F">Женский</option>
					</select>';
						}
						?>

				</td>
			</tr>
			<tr>
				<td class="profile_label">День рождения</td>
				<td class="profile_input"><input type="text" name="PERSONAL_BIRTHDAY" maxlength="10" value="<?=$arResult["arUser"]["PERSONAL_BIRTHDAY"]?>" <?CJSCore::Init(array('date'));?>onclick="BX.calendar({node:this, field:'PERSONAL_BIRTHDAY', form: '', bTime: false, bHideTime: false});" /></td>
			</tr>
			<tr>
				<td class="profile_label">Семейное положение</td>
				<td class="profile_input">
					<select name="PERSONAL_PROFESSION" class="opts">
						<option disabled>Выберите семейное положение</option>
						<option <? if($arResult["arUser"]["PERSONAL_PROFESSION"] == "Не женат(а)"){echo "selected";} ?> value="Не женат(а)">Не женат(а)</option>
						<option <? if($arResult["arUser"]["PERSONAL_PROFESSION"] == "Встречаюсь"){echo "selected";} ?> value="Встречаюсь">Встречаюсь</option>
						<option <? if($arResult["arUser"]["PERSONAL_PROFESSION"] == "Влюблен(а)"){echo "selected";} ?> value="Влюблен(а)">Влюблен(а)</option>
						<option <? if($arResult["arUser"]["PERSONAL_PROFESSION"] == "Все сложно"){echo "selected";} ?> value="Все сложно">Все сложно</option>
						<option <? if($arResult["arUser"]["PERSONAL_PROFESSION"] == "В активном поиске"){echo "selected";} ?> value="В активном поиске">В активном поиске</option>
					</select>
				</td>
			</tr>
			<tr>
				<td class="profile_label">Родной город</td>
				<td class="profile_input"><input type="text" name="PERSONAL_CITY" maxlength="50" value="<?=$arResult["arUser"]["PERSONAL_CITY"]?>" /></td>
			</tr>
			<tr>
				<td class="profile_label">ВУЗ</td>
				<td class="profile_input">
					<select name="WORK_COMPANY" class="opts">
						<option disabled>Выберите ВУЗ</option>
						<option <? if($arResult["arUser"]["WORK_COMPANY"] == "УГАТУ"){echo "selected";} ?> value="УГАТУ">УГАТУ</option>
						<option <? if($arResult["arUser"]["WORK_COMPANY"] == "УГНТУ"){echo "selected";} ?> value="УГНТУ">УГНТУ</option>
						<option <? if($arResult["arUser"]["WORK_COMPANY"] == "БашГУ"){echo "selected";} ?> value="БашГУ">БашГУ</option>
						<option <? if($arResult["arUser"]["WORK_COMPANY"] == "БашГМУ"){echo "selected";} ?> value="БашГМУ">БашГМУ</option>
					</select>
				</td>
			</tr>
			<tr>
				<td class="profile_label">О себе</td>
				<td class="profile_input"><input type="text" name="WORK_POSITION" maxlength="50" value="<?if($arResult["arUser"]["WORK_POSITION"]==""){echo "Напишите о себе";}else{echo $arResult["arUser"]["WORK_POSITION"];}?>" /></td>
			</tr>
			<tr>
				<td class="profile_label">Интересы</td>
				<td class="profile_input">
					<select name="WORK_DEPARTMENT" class="opts">
						<option disabled>Выберите </option>
						<option <? if($arResult["arUser"]["WORK_DEPARTMENT"] == "Чтение и литература"){echo "selected";} ?> value="Чтение и литература">Чтение и литература</option>
						<option <? if($arResult["arUser"]["WORK_DEPARTMENT"] == "Общение"){echo "selected";} ?> value="Общение">Общение</option>
						<option <? if($arResult["arUser"]["WORK_DEPARTMENT"] == "Коллекционирование"){echo "selected";} ?> value="Коллекционирование">Коллекционирование</option>
						<option <? if($arResult["arUser"]["WORK_DEPARTMENT"] == "Занятие спортом"){echo "selected";} ?> value="Занятие спортом">Занятие спортом</option>
					</select>
				</td>
			</tr>
			<tr>
				<td class="profile_label">Номер телефона</td>
				<td class="profile_input"><input type="text" name="LOGIN" maxlength="50" value="<?=$arResult["arUser"]["LOGIN"]?>" /></td>
			</tr>

		</table>

		<p><input class="btn btn-block btn-primary btn-sm" style="background-color: #435A87" type="submit" name="save" value="<?=(($arResult["ID"]>0) ? GetMessage("MAIN_SAVE") : GetMessage("MAIN_ADD"))?>"></p>
	</form>
		</div>

</div>
</div>