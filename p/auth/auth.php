<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetPageProperty("TITLE", "Авторизация");
$APPLICATION->SetTitle("Авторизация");
?>
    <script src="/resources/helpers/scripts/js/inputmask/jquery.inputmask.js"></script>
<? $APPLICATION->IncludeComponent("bitrix:system.auth.form", "auth-form", Array(
    "COMPONENT_TEMPLATE" => ".default",
    "FORGOT_PASSWORD_URL" => "",    // Страница забытого пароля
    "PROFILE_URL" => "/p/profile/index.php",    // Страница профиля
    "REGISTER_URL" => "/p/auth/reg.php",    // Страница регистрации
    "SHOW_ERRORS" => "N",    // Показывать ошибки
),
    false
); ?>
    <script>
        $("#phone").inputmask("+7(999)9999999")
    </script>
<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>