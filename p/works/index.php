<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("Работа");
global $USER;
if ($USER->IsAuthorized()){
}
else{
	header('Location: /p/auth/index.php');
};
?><script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script><script type="text/javascript">// <![CDATA[
    jQuery(document).ready(function(){
        jQuery('.spoiler-text').hide()
        jQuery('.spoiler').click(function(){
            jQuery(this).toggleClass("folded").toggleClass("unfolded").next().slideToggle()
        })
    })
    // ]]></script>
	<div class="row" style="margin: 3px">
		<div class="col-xs-4 work-menu" style="padding: 3px; padding-left: 7px ">
			<a href="/p/works/index.php">
				<button class="btn btn-block btn-lg act" style="padding: 10px 0;text-align: center">
					Материалы
				</button>
			</a>
		</div>
		<div class="col-xs-4 work-menu" style="padding: 3px">
			<a href="/p/works/work.php">
				<button class="btn btn-block btn-lg" style="padding: 10px;text-align: center">
					Работа				</button></a>
		</div>
		<div class="col-xs-4 work-menu" style="padding: 3px; padding-right: 8px ">
			<a href="/p/works/my-task.php">
				<button class="btn btn-block btn-lg" style="padding: 10px 0;text-align: center">
					Заказать&nbsp;&nbsp;<img src="/resources/images/icons/i_lon.png" style="width: 17px; margin-bottom: 2px">
				</button>
			</a><br>
			<br>
		</div>
	</div>
<div class="spoiler-area">
<?$APPLICATION->IncludeComponent(
	"bitrix:catalog.section.list", 
	"book-list", 
	array(
		"ADD_SECTIONS_CHAIN" => "Y",
		"CACHE_GROUPS" => "Y",
		"CACHE_TIME" => "36000000",
		"CACHE_TYPE" => "A",
		"COMPONENT_TEMPLATE" => "book-list",
		"COUNT_ELEMENTS" => "Y",
		"IBLOCK_ID" => "2",
		"IBLOCK_TYPE" => "lib_ib",
		"SECTION_CODE" => "",
		"SECTION_FIELDS" => array(
			0 => "",
			1 => "",
		),
		"SECTION_ID" => $_REQUEST["SECTION_ID"],
		"SECTION_URL" => "",
		"SECTION_USER_FIELDS" => array(
			0 => "",
			1 => "",
		),
		"SHOW_PARENT_NAME" => "Y",
		"TOP_DEPTH" => "2",
		"VIEW_MODE" => "LINE"
	),
	false
);?>
</div>

<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>