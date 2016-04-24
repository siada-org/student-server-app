<?
if(isset($from_user_id) && $from_user_id!='')
{
    // получаем объект класса CDbResult
    $frsUser = $USER->GetByID($from_user_id);
    // считаем кол-во выбранных записей
    $frows_q = $frsUser -> SelectedRowsCount();
    if($frows_q > 0)
    {
        $farUser = $frsUser->Fetch();
        // создаем тег изображения - фото пользователя
        if (intval($farUser["PERSONAL_PHOTO"]) > 0)
        {
            $fimageFile = CFile::GetFileArray($farUser["PERSONAL_PHOTO"]);
            if ($fimageFile !== false)
            {
                $farFileTmp = CFile::ResizeImageGet(
                    $fimageFile,
                    array("width" => $iSize, "height" => $iSize),
                    BX_RESIZE_IMAGE_PROPORTIONAL,
                    false
                );
                // в переменной хранится готовый тег изображения
                $fchat_avatar = CFile::ShowImage($farFileTmp["src"], 35, 35, "", "");

            }
        }
        //формируем $arResult
        $farResult=array();
        // выбираем Данные: имя, фамилия, e-mail, профессию, персональную страницу
        // Отчество, id фото
        $farResult["From"] = array(

            "FROM_AVATAR_CHAT" => $chat_avatar,
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