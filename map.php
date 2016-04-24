<?
require_once($_SERVER['DOCUMENT_ROOT'] . "/bitrix/modules/main/include/prolog_before.php");
$APPLICATION->SetTitle("");
?>    <!DOCTYPE html>
    <html>
    <head>
        <style type="text/css">
            html, body {
                height: 100%;
                margin: 0;
                padding: 0;
            }

            #map {
                height: 100%;
            }
            .user-popup-map-avatar{
                width: 50px;
                height: 50px;
                background-size: cover;
                margin: 5px;
                float: left;
            }
            .user-popup-map p{
                font-size: larger;
                font-weight: bold;
            }
            .map-message-button{
                margin: 3px;
                width: 90%;
                padding: 0px;
                height: 40px;
                text-align: center;
                border-radius: 10px;
                background-color: #0A3A68;
                color: white;
                font-size: 30px;
            }
        </style>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/resources/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="/resources/dist/css/AdminLTE.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    </head>
    <body>
    <div id="map"></div>
    <script type="text/javascript">

        var map;
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 54.77772207, lng: 56.03748322},
                zoom: 11
            });
            <?
            CModule::IncludeModule("iblock");
            $arSelect = Array("ID", "NAME", "PREVIEW_PICTURE", "DETAIL_TEXT", "PROPERTY_URL", "PROPERTY_LAT", "PROPERTY_LNG",); // Указываем список параметров, которые будем использовать
            $arFilter = Array("IBLOCK_ID" => 4, "ACTIVE" => "Y", "ACTIVE_DATE" => "Y"); // Указываем параметры фильтра, по которым будем выводить элементы
            $res = CIBlockElement::GetList(Array("SORT" => "ASC"), $arFilter, false, false, $arSelect); // Вызов

            while ($ob = $res->GetNextElement()) {
                $arFields = $ob->GetFields();
                if(isset($arFields["PROPERTY_LAT_VALUE"])& $arFields["PROPERTY_LAT_VALUE"] !== "") {
                    echo "var infowindow" . $arFields["ID"] . " = new google.maps.InfoWindow({
            content: '" . $arFields["DETAIL_TEXT"] . "'
        });";
                    echo "var e" . $arFields["ID"] . " = new google.maps.Marker({
                position: {lat: " . $arFields["PROPERTY_LAT_VALUE"] . ", lng: " . $arFields["PROPERTY_LNG_VALUE"] . "},
                map: map,
                title: '" . $arFields["NAME"] . "'
            });";
                    echo "e" . $arFields["ID"] . ".addListener('click', function() {
						infowindow" . $arFields["ID"] . ".open(map, e" . $arFields["ID"] . ");});";
                }
            }
            ?>

            <?
            $order = array('sort' => 'asc');
            $tmp = 'sort'; // параметр проигнорируется методом, но обязан быть
            $rsUsers = CUser::GetList($order, $tmp);
            while ($ob = $rsUsers->GetNext()) {
                if(isset($ob["WORK_FAX"])&$ob["WORK_FAX"]!=="") {
                    $file = CFile::ResizeImageGet($ob['PERSONAL_PHOTO'], array('width'=>50, 'height'=>50), BX_RESIZE_IMAGE_PROPORTIONAL, false);
                    $content = '<div class="user-popup-map" style="width: 250px"><a href="/p/users/index.php?id='.$ob['ID'].'"><div class="user-popup-map-avatar" style="height:50px; width:50px;background-size:cover;margin: 5px;float: left; background-image: url('.(CFile::GetPath($ob['PERSONAL_PHOTO'])).') ;"></div></a><p>'.$ob['NAME'].' '.$ob['LAST_NAME'].'</p><p>'.$ob['PERSONAL_GENDER'].' '.$ob['PERSONAL_BIRTHDAY'].'</p><a href="/p/pm/chat.php?id='.$ob["ID"].'"><div class="map-message-button"><i class="fa fa-fw fa-envelope-o"></i></div></a></div>';
                    echo "var infowindow_u" . $ob["ID"] . " = new google.maps.InfoWindow({
            content: '".$content."'});";
                    echo "var eu" . $ob["ID"] . " = new google.maps.Marker({
                position: {lat: " . $ob["WORK_FAX"] . ", lng: " . $ob["WORK_PAGER"] . "},
                map: map,
                icon: '".$file["src"]."',
                title: '" . $ob["NAME"] . " ".$ob["LAST_NAME"]."'
            });";
                    echo "eu" . $ob["ID"] . ".addListener('click', function() {
						infowindow_u" . $ob["ID"] . ".open(map, eu" . $ob["ID"] . ");});";
                }
            }
            ?>
        }
    </script>
    <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnqH6KqQXgwdhtbycM2asa75M511TUhN0&language=ru&callback=initMap">
    </script>
    </body>
</html>