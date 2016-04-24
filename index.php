<?
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/header.php');
$APPLICATION->SetTitle('Главная');
global $USER;
if ($USER->IsAuthorized()){
}
else{
    header('Location: /p/auth/index.php');
};
?> 

<?
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/footer.php');
?>