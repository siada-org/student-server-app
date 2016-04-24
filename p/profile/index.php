<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("Профиль пользователя");
global $USER;
if ($USER->IsAuthorized()){
}
else{
    header('Location: /p/auth/index.php');
};
?>

<?
$rsUser = CUser::GetByID($USER->GetID());
$arUser = $rsUser->Fetch();
$avatarPath = CFile::GetPath($arUser["PERSONAL_PHOTO"]);
if (empty($avatarPath)) {
    $avatarPath = "/resources/images/noavatar.png";
}

?>
    <div class="row" style="background: #394575;margin: 0;padding: 5px 0">
        <div class="col-xs-12" style="padding: 0px; padding-left: 3px">
            <table style="width: 100%">
                <tr>
                    <td colspan="3" rowspan="3" style="max-width: 80%; text-align: center; padding-top: 0px; padding-left: 3px; padding-right: 5px; padding-bottom: 6px; ">
                        <div style="border-bottom-right-radius: 3px; position: relative; width: 100%; height: 240px; background: url(<? echo $avatarPath ?>) no-repeat center; background-size: cover">
                            <?
                            include $_SERVER["DOCUMENT_ROOT"]."/resources/helpers/scripts/likes-self.php"
                            ?>
                    </td>
                    <td><? include $_SERVER["DOCUMENT_ROOT"]."/resources/helpers/scripts/photo-icon.php"?></td>
                </tr>
                <tr>
                    <td style="text-align: center">
                        <a href="/p/profile/add-avatar.php"><div class='photo-icon' style='border-radius: 5px; border: 1px solid black '><img src='/resources/images/icons/photo_icon.png'></div></a>
                    </td>
                </tr>
                <tr>
                    <td style="width: 20%; text-align: center"><? include $_SERVER["DOCUMENT_ROOT"]."/resources/helpers/scripts/photo/mainpage-photo.php"?></td>
                </tr>
                <tr>
                    <td style="width: 25%; text-align: center"><? include $_SERVER["DOCUMENT_ROOT"]."/resources/helpers/scripts/photo/mainpage-photo.php"?></td>
                    <td style="width: 25%; text-align: center"><? include $_SERVER["DOCUMENT_ROOT"]."/resources/helpers/scripts/photo/mainpage-photo.php"?></td>
                    <td style="width: 25%; text-align: center"><? include $_SERVER["DOCUMENT_ROOT"]."/resources/helpers/scripts/photo/mainpage-photo.php"?></td>
                    <td style="width: 25%; text-align: center"><? include $_SERVER["DOCUMENT_ROOT"]."/resources/helpers/scripts/photo/mainpage-photo.php"?></td>
                </tr>
            </table>
        </div>
    </div>

    <div class="info-field row" style="margin: 0;">
        <div class="col-xs-12">
            <? $APPLICATION->IncludeComponent(
	"bitrix:main.profile", 
	"user-profile", 
	array(
		"AJAX_MODE" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"CHECK_RIGHTS" => "N",
		"COMPONENT_TEMPLATE" => "user-profile",
		"SEND_INFO" => "N",
		"SET_TITLE" => "Y",
		"USER_PROPERTY" => array(
		),
		"USER_PROPERTY_NAME" => ""
	),
	false
); ?>
        </div>
    </div>
<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>