<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<?
if ($arResult["NEED_AUTH"] == "Y")
{
	$APPLICATION->AuthForm("");
}
elseif (strlen($arResult["FatalError"])>0)
{
	?>
	<span class='errortext'><?=$arResult["FatalError"]?></span><br /><br />
	<?
}
else
{
	if(strlen($arResult["ErrorMessage"])>0)
	{
		?>
		<span class='errortext'><?=$arResult["ErrorMessage"]?></span><br /><br />
		<?
	}
	?>
	<script language="javascript">
	<!--
	function SelectAllRows(checkbox)
	{
		var tbl = checkbox.parentNode.parentNode.parentNode.parentNode;
		var bChecked = checkbox.checked;
		var i;
		var n = tbl.rows.length;
		for (i = 1; i < n; i++)
		{
			var j;
			var m = tbl.rows[i].cells[0].childNodes.length;
			for (j = 0; j < m; j++)
			{
				var box = tbl.rows[i].cells[0].childNodes[j];
				if (box && box.tagName && box.tagName.toUpperCase() == 'INPUT' && box.type.toUpperCase() == "CHECKBOX")
				{
					if (box.checked != bChecked && !box.disabled)
						box.checked = bChecked;
					break;
				}
			}
		}
	}
	//-->
	</script>
	<?if (StrLen($arResult["NAV_STRING"]) > 0):?>
		<?=$arResult["NAV_STRING"]?><br /><br />
	<?endif;?>
	<div class="sonet-cntnr-messages-users-messages" style="display: none">
	<table width="100%" class="sonet-user-profile-friends data-table">
		<tr>
			<th width="0%"><input type="checkbox" id="check_all" value="" title="<?= GetMessage("SONET_C31_T_SELECT_ALL") ?>" onclick="SelectAllRows(this);"></th>
			<th width="100%"><?= GetMessage("SONET_C31_T_MESSAGE") ?></th>
			<th width="0%"><?= GetMessage("SONET_C31_T_ACTION") ?></th>
		</tr>
		<?$ind = 0;?>
		<?if ($arResult["Events"]):?>
			<?foreach ($arResult["Events"] as $event):?>
				<tr>
					<td valign="top" align="center"<?= (!$event["IS_READ"] ? " class=\"selected\"" : "") ?> width="0%">
						<input type="checkbox" name="checked_<?= $ind ?>" value="Y">
						<input type="hidden" name="id_<?= $ind ?>" value="<?= $event["ID"] ?>">
					</td>
					<td valign="top"<?= (!$event["IS_READ"] ? " class=\"selected\"" : "") ?> width="100%">
						<b><?= (($event["WHO"] == "OUT") ? GetMessage("SONET_C31_T_ME_LABEL") : $arResult["User"]["NAME_FORMATTED"]); ?></b>:
						<?= $event["MESSAGE"]; ?><br><br>
						<i><?= $event["DATE_CREATE_FORMAT"]; ?></i><br>
					</td>
					<td valign="top"<?= (!$event["IS_READ"] ? " class=\"selected\"" : "") ?> width="0%" nowrap>
						<?if (!$event["IS_READ"]):?>
							<a href="<?= $event["READ_LINK"] ?>"><?= GetMessage("SONET_C31_T_ACT_READ") ?></a><br><br>
						<?endif;?>
						<a href="<?= $event["DELETE_LINK"] ?>"><?= GetMessage("SONET_C31_T_ACT_DEL") ?></a><br><br>
					</td>
				</tr>
				<?$ind++;?>
			<?endforeach;?>
		<?else:?>
			<tr>
				<td colspan="4"><?= GetMessage("SONET_C31_T_EMPTY") ?></td>
			</tr>
		<?endif;?>
	</table>
	</div>
	<?if (StrLen($arResult["NAV_STRING"]) > 0):?>
		<?=$arResult["NAV_STRING"]?>
		<br /><br />
	<?endif;?>
		<input type="hidden" name="max_count" value="<?= $ind ?>">
		<?=bitrix_sessid_post()?>
	</form>
	<?
}
print_r($event["MESSAGE"])
?>