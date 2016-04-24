<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("Пользователи");
?>

    <div style="border: 1px solid grey; padding: 3px">
        <div class="row" style="margin-top: 20px; margin-left: 20px">
            <div class="col-xs-3">
                <img src="/resources/images/icons/settings/nast.png" class="set-icon">
            </div>
            <div class="col-xs-9" style="vertical-align: middle">
                <span style="font-size: large; font-weight: bold">Учетная запись</span>
            </div>
        </div>
        <div class="row" style="margin-left: 100px">
            <span style="font-size: large; font-weight: bold">Запомнить пароль</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input
                type="checkbox" checked="checked"><br>
            <span style="font-size: large; font-weight: bold">Номер телефона</span><br>
            <input type="tel" placeholder="" style="width: 50%">
        </div>
    </div>
    <div style="border: 1px solid grey; padding: 3px">
        <div class="row" style="margin-top: 20px; margin-left: 20px">
            <div class="col-xs-3">
                <img src="/resources/images/icons/settings/sum.png" class="set-icon">
            </div>
            <div class="col-xs-9" style="vertical-align: middle">
                <span style="font-size: large; font-weight: bold">Настройка уведомлений</span>
            </div>
        </div>
        <div class="row" style="margin-left: 100px">
            <table>
                <tr>
                    <td><span style="font-size: large; font-weight: bold">Вибрация</span></td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" checked="checked"></td>
                </tr>
                <tr>
                    <td><span style="font-size: large; font-weight: bold">Звуковое уведомление</span></td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" checked="checked"></td>
                </tr>
            </table>
        </div>
    </div>
    <div style="border: 1px solid grey; padding: 3px">
        <div class="row" style="margin-top: 20px; margin-left: 20px">
            <div class="col-xs-3">
                <img src="/resources/images/icons/settings/support.png" class="set-icon">
            </div>
            <div class="col-xs-9" style="vertical-align: middle">
                <span style="font-size: large; font-weight: bold">Техподдержка</span>
            </div>
        </div>
        <div class="row" style="margin-left: 100px">
            <table>
                <tr>
                    <td><input type="text" style="width: 100%"></td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/resources/images/icons/settings/mess.png" class="set-icon" </td>
                </tr>
            </table>
        </div>
    </div>
    <div style="border: 1px solid grey; padding: 3px">
        <div class="row" style="margin-top: 20px; margin-left: 20px">
            <div class="col-xs-3">
                <img src="/resources/images/icons/settings/info.png" class="set-icon">
            </div>
            <div class="col-xs-9" style="vertical-align: middle">
                <span style="font-size: large; font-weight: bold">О программе</span>
            </div>
        </div>
        <div class="row" style="margin-left: 100px">
            <table>
                <tr>
                    <td><span style="font-size: large; font-weight: bold">Студент для Android<br>Версия 0.9.12</span></td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/resources/images/icons/settings/logo.png" class="set-icon" </td>
                </tr>
            </table>
        </div>
    </div>
<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>