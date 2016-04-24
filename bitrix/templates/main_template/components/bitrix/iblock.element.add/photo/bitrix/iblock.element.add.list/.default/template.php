<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(false);

$colspan = 2;
if ($arResult["CAN_EDIT"] == "Y") $colspan++;
if ($arResult["CAN_DELETE"] == "Y") $colspan++;
?>
<?if (strlen($arResult["MESSAGE"]) > 0):?>
	<?ShowNote($arResult["MESSAGE"])?>
<?endif?>
	<table class="data-table" style="width: 100%;">
		<?if($arResult["NO_USER"] == "N"):?>
			<thead>
			<tr>
				<td class="head-form" <?=$colspan > 1 ? " colspan=\"".$colspan."\"" : ""?>> <?=GetMessage("IBLOCK_ADD_LIST_TITLE")?></td>
			</tr>
			</thead>
			<tbody>
			<?if (count($arResult["ELEMENTS"]) > 0):?>
				<?foreach ($arResult["ELEMENTS"] as $arElement):?>
					<tr style="border-bottom: 1px solid #394575">
						<td><img class="album-img" src="<?echo CFile::GetPath($arElement["PREVIEW_PICTURE"])?>"></td>
						<td style="text-align: center;"><span class="work-name"><?=$arElement["NAME"]?></span></td>
						<?if ($arResult["CAN_DELETE"] == "Y"):?>
							<td><?if ($arElement["CAN_DELETE"] == "Y"):?><a href="?delete=Y&amp;CODE=<?=$arElement["ID"]?>&amp;<?=bitrix_sessid_get()?>" onClick="return confirm('<?echo CUtil::JSEscape(str_replace("#ELEMENT_NAME#", $arElement["NAME"], GetMessage("IBLOCK_ADD_LIST_DELETE_CONFIRM")))?>')"><button class="btn btn-block btn-sm btn-danger" style="width: 100px"><?=GetMessage("IBLOCK_ADD_LIST_DELETE")?></button></a><?else:?>&nbsp;<?endif?></td>
						<?endif?>
					</tr>
				<?endforeach?>
			<?else:?>
				<tr>
					<td<?=$colspan > 1 ? " colspan=\"".$colspan."\"" : ""?>><?=GetMessage("IBLOCK_ADD_LIST_EMPTY")?></td>
				</tr>
			<?endif?>
			</tbody>
		<?endif?>
		<tfoot>
		<tr>
			<td<?=$colspan > 1 ? " colspan=\"".$colspan."\"" : ""?>><?if ($arParams["MAX_USER_ENTRIES"] > 0 && $arResult["ELEMENTS_COUNT"] < $arParams["MAX_USER_ENTRIES"]):?><a href="<?=$arParams["EDIT_URL"]?>?edit=Y"><button class="btn btn-block color-main btn-sm"><?=GetMessage("IBLOCK_ADD_LINK_TITLE")?></button></a><?else:?><?=GetMessage("IBLOCK_LIST_CANT_ADD_MORE")?><?endif?></td>
		</tr>
		</tfoot>
	</table>
<?if (strlen($arResult["NAV_STRING"]) > 0):?><?=$arResult["NAV_STRING"]?><?endif?>