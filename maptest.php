<?
require_once($_SERVER['DOCUMENT_ROOT'] . "/bitrix/modules/main/include/prolog_before.php");
?>
    <!DOCTYPE html>
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
        </style>
    </head>
    <body>
    <div id="map"></div>
    <script type="text/javascript">

        var map;
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 54.77772207, lng: 56.03748322},
                zoom: 12
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
            infowindow" . $arFields["ID"] . ".open(map, e" . $arFields["ID"] . ");})";
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
