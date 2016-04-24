<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("Регистрация и фвторизация");
?>

<?
global $USER;
if ($USER->IsAuthorized()) header('Location: /p/profile/index.php');
?>
<div class="row">
    <div class="col-sm-12" style="text-align: center; padding: 0 30px">
        <div style="margin-top: 40vh">
            <a href="/p/auth/auth.php">
                <button class="btn btn-block btn-primary btn-lg"><b>ВХОД</b></button>
            </a>
            <br>
            <a href="/p/auth/reg.php">
                <button class="btn btn-block btn-primary-light btn-lg"><b>РЕГИСТРАЦИЯ</b></button>
            </a>
        </div>
    </div>
</div>
<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>