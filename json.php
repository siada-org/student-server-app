<?
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/prolog_before.php');
?>

<?
header("Content-type: application/json; charset=utf-8");
$name = "Kirill";
$last_name = "Silyanov";
$so_name = "Olegovich";
$arr = array('name'=>$name, 'last_name'=>$last_name, 'soname'=>$so_name);
$a =  json_encode($arr);
$b = json_decode($a, JSON_FORCE_OBJECT);
//echo $a;
//echo "<br>";
print_r($a);
?>