<?

CModule::IncludeModule("iblock");
$self = $USER->GetID();
$photo_cnt = CIBlockElement::GetList(
    array(),
    array('IBLOCK_ID' => 1, 'CREATED_BY' => $self,),
    array(),
    false,
    array('ID', 'NAME')
);
echo "<a href='/p/profile/photo.php'><div class='photo-icon' style='border-radius: 5px; border: 1px solid black'><img src='/resources/images/icons/i_photo.png'><span>".$photo_cnt."</span></div></a>";

?>