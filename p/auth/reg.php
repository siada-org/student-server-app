<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Регистрация");
?>

<script src="/resources/helpers/scripts/js/inputmask/jquery.inputmask.js"></script>


<?$APPLICATION->IncludeComponent("bitrix:main.register", "reg", Array(
	"AUTH" => "Y",	// Автоматически авторизовать пользователей
		"COMPONENT_TEMPLATE" => ".default",
		"REQUIRED_FIELDS" => "",	// Поля, обязательные для заполнения
		"SET_TITLE" => "Y",	// Устанавливать заголовок страницы
		"SHOW_FIELDS" => "",	// Поля, которые показывать в форме
		"SUCCESS_PAGE" => "",	// Страница окончания регистрации
		"USER_PROPERTY" => "",	// Показывать доп. свойства
		"USER_PROPERTY_NAME" => "",	// Название блока пользовательских свойств
		"USE_BACKURL" => "Y",	// Отправлять пользователя по обратной ссылке, если она есть
	),
	false
);?>
<script>
	$("#phone").inputmask("+7(999)9999999")
</script>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>