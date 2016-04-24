<?
if(isset($user_id) && $user_id!='')
{
    // получаем объект класса CDbResult
    $rsUser = $USER->GetByID($user_id);
    // считаем кол-во выбранных записей
    $rows_q = $rsUser -> SelectedRowsCount();
    if($rows_q > 0)
    {
        $arUser = $rsUser->Fetch();
        // создаем тег изображения - фото пользователя
        if (intval($arUser["PERSONAL_PHOTO"]) > 0)
        {
            $imageFile = CFile::GetFileArray($arUser["PERSONAL_PHOTO"]);
            if ($imageFile !== false)
            {
                $arFileTmp = CFile::ResizeImageGet(
                    $imageFile,
                    array("width" => $iSize, "height" => $iSize),
                    BX_RESIZE_IMAGE_PROPORTIONAL,
                    false
                );
                // в переменной хранится готовый тег изображения
                $imageImg = CFile::ShowImage($arFileTmp["src"], $iSize, $iSize, "border='0'", "");
                $header_usermenu_img = CFile::ShowImage($arFileTmp["src"], 160, 160, "", "");
                $header_usermenu_img_big = CFile::ShowImage($arFileTmp["src"], "", "");
                $chat_avatar = CFile::GetPath($arFileTmp["src"]);

            }
        }
        //формируем $arResult
        $arResult=array();
        // выбираем Данные: имя, фамилия, e-mail, профессию, персональную страницу
        // Отчество, id фото
        $arResult["User"] = array(
            "NAME" => $arUser["NAME"],
            "SECOND_NAME" => $arUser["SECOND_NAME"],
            "LAST_NAME" => $arUser["LAST_NAME"],
            "EMAIL" => $arUser["EMAIL"],
            "PERSONAL_PROFESSION" => $arUser["PERSONAL_PROFESSION"],
            "PERSONAL_WWW" => $arUser["PERSONAL_WWW"],
            "MOTTO" => $arUser["UF_DEVISE"],
            "PHOTO_IMGTAG" => $imageImg,
            "PHOTO_AVATAR" => $header_usermenu_img,
            "PHOTO_AVATAR_BIG" => $header_usermenu_img_big,
            "AVATAR_CHAT" => $chat_avatar,
        );
    }
    else
    {
    }
}
else
{
}
?>