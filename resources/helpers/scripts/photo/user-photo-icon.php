
<?
CModule::IncludeModule("iblock");
$self = $_REQUEST["id"];
$photo_cnt = CIBlockElement::GetList(
    array(),
    array('IBLOCK_ID' => 1, 'CREATED_BY' => $self,),
    array(),
    false,
    array('ID', 'NAME')
);
echo "<a href='/p/users/photo-user.php?id=".$self."'><div class='photo-icon'><img src='/resources/images/icons/i_photo.png'><span>".$photo_cnt."</span></div></a>";

?>