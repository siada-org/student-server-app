<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetPageProperty("TITLE", "Работа");
$APPLICATION->SetTitle("Работа");
?>

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
    <script type="text/javascript">
        jQuery(document).ready(function () {
            jQuery('.spoiler-text').hide()
            jQuery('.spoiler').click(function () {
                jQuery(this).toggleClass("folded").toggleClass("unfolded").next().slideToggle()
            })
        })
    </script>
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
                <button class="btn btn-block btn-lg act" style="padding: 0;text-align: center">
                    Работа
                </button>
            </a>
        </div>
        <div class="col-xs-4 work-menu" style="padding: 3px; padding-right: 8px">
            <a href="/p/works/my-task.php">
                <button class="btn btn-block btn-lg" style="padding: 10px 0;text-align: center">
                    Заказать  <img src="/resources/images/icons/i_lon.png"
                                             style="width: 17px; margin-bottom: 2px">
                </button>
            </a><br>
            <br>
        </div>
    </div>
    <div class="row" style="margin: 0px">
        <div class="spoiler-wrapper">
            <div class="spoiler folded">
                <div style="width: 90%; margin: 0 auto;">
                    <button class="btn btn-block btn-primary btn-lg"
                            style="height: 200px; border-radius: 20px 20px 0 0; background-color: #435A87">
                        <h2>Текущие заказы</h2><img src="/resources/images/hat.png" height="100"></button>
                </div>
            </div>
            <div class="spoiler-text" id="work-spoiler">
                <?
                CModule::IncludeModule("iblock");
                $arSelect = Array("ID", "NAME", "PREVIEW_PICTURE", "CREATED_BY", "CREATED_DATE", "DETAIL_TEXT", "PROPERTY_THEME", "PROPERTY_COST", "PROPERTY_TYPE", "PROPERTY_FILE",);
                $arFilter = array("IBLOCK_ID" => 3,);
                $res = CIBlockElement::GetList(Array(), $arFilter, false, false, $arSelect);
                while ($ob = $res->GetNextElement()) {
                    $arFields = $ob->GetFields();
                    //echo '<a href="' . CFile::GetPath($arFields['PROPERTY_BOOKFILE_VALUE']) . '" download=""><img class="article_preview" src="' . CFile::GetPath($arFields["PREVIEW_PICTURE"]) . '"></a>';
                    echo "<div class='spoiler-wrapper'>";
                    echo "<div class='work-item spoiler folder' style='height: 65px;padding-top: 15px'>";
                    echo "<div class='col-xs-7' >";
                    echo '<b>' . $arFields["NAME"] . '</b><br>';
                    echo '<span class="book_author">' . $arFields["PROPERTY_TYPE_VALUE"] . '</span>';
                    echo "</div>";
                    echo "<div class='col-xs-5' style='padding-top: 7px; text-align: right'>";
                    echo '<b><span style="font-size: medium;" class="book_author"> ' . $arFields["PROPERTY_COST_VALUE"] . '</span></b> <img src="/resources/images/icons/i_rub.png" style="width:20px"></br>';
                    echo "</div><br>";
                    echo "</div>";
                    echo "<div class='spoiler-text comment-place'>";
                    echo "<span class='work-desc'>" . $arFields["PROPERTY_THEME_VALUE"] . "</span><br>";
                    if (isset($arFields["PROPERTY_FILE_VALUE"]) & $arFields["PROPERTY_FILE_VALUE"] !== "") {
                        echo "<span class='work-desc'><a href='/p/works/info-detail.php?f=" . $arFields["PROPERTY_FILE_VALUE"] . "'><div class='doc-file'><tr><td>Скачать документацию</td><td><img src=''></td></tr></div></a></span><br>";
                    }
                    $rsUser=CUser::GetByID($arFields["CREATED_BY"]);
                    $arUser= $rsUser->Fetch();
                    echo "<div class='work-item'><a href='/p/users/index.php?id=".$arUser["ID"]."'><div style='background:url(".CFile::GetPath($arUser["PERSONAL_PHOTO"]).") no-repeat center; background-size: cover; height:40px; width:40px; float:left;'></div></a><a href='/p/pm/chat.php?id=".$arUser["ID"]."'><img src='/resources/images/icons/i_pm.png' style='float:left; margin: 4px; width:36px'></a>Заказчик: ".$arUser["NAME"]." ".$arUser["LAST_NAME"]."</div>";
                    echo "Комментарии";
                    $APPLICATION->IncludeComponent(
	"bitrix:forum.topic.reviews", 
	"comments", 
	array(
		"AJAX_POST" => "Y",
		"CACHE_TIME" => "0",
		"CACHE_TYPE" => "A",
		"COMPONENT_TEMPLATE" => "comments",
		"DATE_TIME_FORMAT" => "d.m.Y H:i:s",
		"EDITOR_CODE_DEFAULT" => "N",
		"ELEMENT_ID" => $arFields["ID"],
		"FILES_COUNT" => "2",
		"FORUM_ID" => "1",
		"IBLOCK_ID" => "3",
		"IBLOCK_TYPE" => "work_ib",
		"MESSAGES_PER_PAGE" => "10",
		"NAME_TEMPLATE" => "",
		"PAGE_NAVIGATION_TEMPLATE" => "",
		"PREORDER" => "Y",
		"RATING_TYPE" => "",
		"SHOW_AVATAR" => "Y",
		"SHOW_LINK_TO_FORUM" => "Y",
		"SHOW_MINIMIZED" => "N",
		"SHOW_RATING" => "N",
		"URL_TEMPLATES_DETAIL" => "",
		"URL_TEMPLATES_PROFILE_VIEW" => "",
		"URL_TEMPLATES_READ" => "",
		"USE_CAPTCHA" => "Y"
	),
	false
);
                    echo "</div>";
                    echo "</div>";
                }
                ?>
            </div>

        </div>
        <div class="spoiler-wrapper">
                <div class="spoiler folded">
                    <div style="width: 90%; margin: 0 auto;">
                    <button class="btn btn-block btn-primary btn-lg"
                            style="height: 200px; background-color: #435A87;"><h2>
                            Трудоустройство</h2></button>
                </div>
            </div>
            <div class="spoiler-text">
<?
CModule::IncludeModule("iblock");
$arSelect = Array("ID", "NAME", "PREVIEW_PICTURE", "CREATED_BY", "CREATED_DATE", "PREVIEW_TEXT", "DETAIL_TEXT", "PROPERTY_MONEY", );
$arFilter = array("IBLOCK_ID" => 5,);
$res = CIBlockElement::GetList(Array(), $arFilter, false, false, $arSelect);
while ($ob = $res->GetNextElement()) {
    $arFields = $ob->GetFields();
    //echo '<a href="' . CFile::GetPath($arFields['PROPERTY_BOOKFILE_VALUE']) . '" download=""><img class="article_preview" src="' . CFile::GetPath($arFields["PREVIEW_PICTURE"]) . '"></a>';
	echo "<div class='job-item' style='height: padding-top: 15px;margin-top: 5px;'>";
    echo '<b>' . $arFields["NAME"] . '</b><br>';
    echo '<span class="book_author">Зарплата: ' . $arFields["PROPERTY_MONEY_VALUE"] . '</span><br>';
    echo '<span class="book_author">' . $arFields["DETAIL_TEXT"] . '</span><br>';
    echo '<span class="book_author"> Контакты: ' . $arFields["PREVIEW_TEXT"] . '</span>';
    echo "</div>";
}
    ?>
            </div>

    </div>
<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>