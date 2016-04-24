<?

$link = mysqli_connect(
    'localhost',  /* Хост, к которому мы подключаемся */
    'prohor5v_student',       /* Имя пользователя */
    'Lucifer666',   /* Используемый пароль */
    'prohor5v_student');     /* База данных для запросов по умолчанию */

if (!$link) {
    printf("Невозможно подключиться к базе данных. Код ошибки: %s\n", mysqli_connect_error());
    exit;
}
?>