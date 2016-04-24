<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("TITLE", "Мои заказы");
$APPLICATION->SetTitle("Мои заказы");
?>

	<div class="row" style="margin: 3px">
		<div class="col-xs-4 work-menu" style="padding: 3px; padding-left: 7px">
			<a href="/p/works/index.php">
				<button class="btn btn-block btn-lg" style="padding: 10px 0;text-align: center">
					Материалы
				</button>
			</a>
		</div>
		<div class="col-xs-4 work-menu" style="padding: 3px">
			<a href="/p/works/work.php">
				<button class="btn btn-block btn-lg" style="padding: 10px;text-align: center">
					Работа				</button></a>
		</div>
		<div class="col-xs-4 work-menu" style="padding: 3px; padding-right: 8px">
			<a href="/p/works/my-task.php">
				<button class="btn btn-block btn-lg act" style="padding: 10px 0;text-align: center">
					Заказать&nbsp;<img src="/resources/images/icons/i_lon.png" style="width: 17px; margin-bottom: 2px">
				</button>
			</a><br>
			<br>
		</div>
	</div>


<?$APPLICATION->IncludeComponent(
	"bitrix:iblock.element.add", 
	"add-work", 
	array(
		"AJAX_MODE" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"ALLOW_DELETE" => "Y",
		"ALLOW_EDIT" => "Y",
		"COMPONENT_TEMPLATE" => "add-work",
		"CUSTOM_TITLE_DATE_ACTIVE_FROM" => "",
		"CUSTOM_TITLE_DATE_ACTIVE_TO" => "",
		"CUSTOM_TITLE_DETAIL_PICTURE" => "",
		"CUSTOM_TITLE_DETAIL_TEXT" => "",
		"CUSTOM_TITLE_IBLOCK_SECTION" => "",
		"CUSTOM_TITLE_NAME" => "Введите предмет",
		"CUSTOM_TITLE_PREVIEW_PICTURE" => "",
		"CUSTOM_TITLE_PREVIEW_TEXT" => "",
		"CUSTOM_TITLE_TAGS" => "",
		"DEFAULT_INPUT_SIZE" => "30",
		"DETAIL_TEXT_USE_HTML_EDITOR" => "N",
		"ELEMENT_ASSOC" => "CREATED_BY",
		"GROUPS" => array(
			0 => "1",
			1 => "5",
		),
		"IBLOCK_ID" => "3",
		"IBLOCK_TYPE" => "work_ib",
		"LEVEL_LAST" => "Y",
		"MAX_FILE_SIZE" => "0",
		"MAX_LEVELS" => "100000",
		"MAX_USER_ENTRIES" => "100000",
		"NAV_ON_PAGE" => "10",
		"PREVIEW_TEXT_USE_HTML_EDITOR" => "N",
		"PROPERTY_CODES" => array(
			0 => "4",
			1 => "5",
			2 => "6",
			3 => "7",
			4 => "NAME",
			5 => "DATE_ACTIVE_FROM",
		),
		"PROPERTY_CODES_REQUIRED" => array(
			0 => "5",
			1 => "6",
			2 => "7",
			3 => "NAME",
		),
		"RESIZE_IMAGES" => "N",
		"SEF_MODE" => "N",
		"STATUS" => "ANY",
		"STATUS_NEW" => "N",
		"USER_MESSAGE_ADD" => "Задание добавлено",
		"USER_MESSAGE_EDIT" => "Задание сохранено",
		"USE_CAPTCHA" => "N"
	),
	false
);?><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>