<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("p");
global $USER;
if ($USER->IsAuthorized()){
}
else{
    header('Location: /p/auth/index.php');
};
?>Страницы<br><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>