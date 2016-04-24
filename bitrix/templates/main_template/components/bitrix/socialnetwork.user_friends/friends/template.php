<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<div class='user-status' style='padding-left: 100px'><table><tr><td><img src='/resources/images/icons/i_friends.png' height='35'></td><td style='padding-top: 3px; padding-left: 10px;'><span class='segoe-text1' style='color: #00FF00'>  Онлайн</span></td></tr></table></div>
<div class="row" style="margin: 0">
<?
if (strlen($arResult["FatalError"]) > 0) {
    ?>
    <span class='errortext'><?= $arResult["FatalError"] ?></span><br/><br/>
    <?
} else {
    if (strlen($arResult["ErrorMessage"]) > 0) {
        ?>
        <span class='errortext'><?= $arResult["ErrorMessage"] ?></span><br/><br/>
        <?
    }
    ?>
    <?
    if ($arResult["CurrentUserPerms"]["IsCurrentUser"]):
        ?><form method="post" name="form1" action="<?= POST_FORM_ACTION_URI ?>" enctype="multipart/form-data"><?
    endif;
    ?>
    <? if (StrLen($arResult["NAV_STRING"]) > 0):?>
        <?= $arResult["NAV_STRING"] ?><br/><br/>
    <?endif; ?>
    <?
    if ($arResult["CurrentUserPerms"]["Operations"]["viewprofile"] && $arResult["CurrentUserPerms"]["Operations"]["viewfriends"]) {
        if ($arResult["Friends"] && $arResult["Friends"]["List"]) {
            $ind = 0;
            $ind_row = 0;

            $colcnt = 2;
            $cnt = count($arResult["Friends"]["List"]);
            $rowcnt = intval(round($cnt / $colcnt));

            foreach ($arResult["Friends"]["List"] as $friend) {
                if ($ind_row >= $rowcnt) {
                    echo "</td><td align='left' valign='top' width='" . intval(100 / $colcnt) . "%'>";
                    $ind_row = 0;
                }

                ?><?

                if ($arResult["CurrentUserPerms"]["IsCurrentUser"]&&$friend['IS_ONLINE']==1) {
                    ?><?
                    //echo "<input type=\"checkbox\" name=\"checked_" . $ind . "\" value=\"Y\">";
                    echo "<input type=\"hidden\" name=\"id_" . $ind . "\" value=\"" . $friend["USER_ID"] . "\">";
                    ?>
                    <div class="col-xs-4" style="padding: 2px;text-align: center">
                        <a href="/p/users/?id=<?=$friend["USER_ID"]?>"><div style="padding: 10px; width: 100px; height: 100px; background: url(<?=$friend["USER_PERSONAL_PHOTO_FILE"]["SRC"]?>) no-repeat center; background-size: cover"></div></a>
                        <div style="text-align: center; font-size: large; font-weight: bold">
                            <?
                            echo $friend["USER_NAME"]
                            ?>
                        </div>
                    </div>
                    <?
                }
                if (StrLen($friend["REQUEST_GROUP_LINK"]) > 0 || $friend["CAN_ADD2FRIENDS"] || $friend["CAN_DELETE_FRIEND"]) {
                    ?><?
                    if (StrLen($friend["REQUEST_GROUP_LINK"]) > 0)
                        echo "<a href=\"" . $friend["REQUEST_GROUP_LINK"] . "\" class=\"action-link\"><b>" . GetMessage("SONET_C33_T_INVITE") . "</b></a>";
                    ?><?
                }

                if ($arResult["CurrentUserPerms"]["IsCurrentUser"]) {
                    ?><?
                }

                $ind++;
                $ind_row++;
                ?><?
            }
            ?>

            <?
        }
    } else
        echo GetMessage("SONET_C33_T_FR_UNAVAIL");
    ?>
    <? if ($arResult["CurrentUserPerms"]["IsCurrentUser"]):?>
    <?endif; ?>
    <? if (StrLen($arResult["NAV_STRING"]) > 0):?>
        <br><?= $arResult["NAV_STRING"] ?><br/><br/>
    <?endif; ?>
    <?
    if ($arResult["CurrentUserPerms"]["IsCurrentUser"]):
        ?><br/>
        <input type="hidden" name="max_count" value="<?= $ind ?>">
        <?= bitrix_sessid_post() ?>
        </form><?
    endif;
}
?>
</div>
<div class='user-status' style='padding-left: 100px'><table><tr><td><img src='/resources/images/icons/i_friends.png' height='35'></td><td style='padding-top: 3px; padding-left: 10px;'><span class='segoe-text1' style='color: #ee0837'>  Офлайн</span></td></tr></table></div>
<div class="row" style="margin: 0">
    <?
    if (strlen($arResult["FatalError"]) > 0) {
        ?>
        <span class='errortext'><?= $arResult["FatalError"] ?></span><br/><br/>
        <?
    } else {
        if (strlen($arResult["ErrorMessage"]) > 0) {
            ?>
            <span class='errortext'><?= $arResult["ErrorMessage"] ?></span><br/><br/>
            <?
        }
        ?>
        <?
        if ($arResult["CurrentUserPerms"]["IsCurrentUser"]):
            ?><form method="post" name="form1" action="<?= POST_FORM_ACTION_URI ?>" enctype="multipart/form-data"><?
        endif;
        ?>
        <? if (StrLen($arResult["NAV_STRING"]) > 0):?>
            <?= $arResult["NAV_STRING"] ?><br/><br/>
        <?endif; ?>
        <?
        if ($arResult["CurrentUserPerms"]["Operations"]["viewprofile"] && $arResult["CurrentUserPerms"]["Operations"]["viewfriends"]) {
            if ($arResult["Friends"] && $arResult["Friends"]["List"]) {
                $ind = 0;
                $ind_row = 0;

                $colcnt = 2;
                $cnt = count($arResult["Friends"]["List"]);
                $rowcnt = intval(round($cnt / $colcnt));

                foreach ($arResult["Friends"]["List"] as $friend) {
                    if ($ind_row >= $rowcnt) {
                        echo "</td><td align='left' valign='top' width='" . intval(100 / $colcnt) . "%'>";
                        $ind_row = 0;
                    }

                    ?><?

                    if ($arResult["CurrentUserPerms"]["IsCurrentUser"]&&$friend['IS_ONLINE']!=1) {
                        ?><?
                        //echo "<input type=\"checkbox\" name=\"checked_" . $ind . "\" value=\"Y\">";
                        echo "<input type=\"hidden\" name=\"id_" . $ind . "\" value=\"" . $friend["USER_ID"] . "\">";
                        ?>
                        <div class="col-xs-4" style="padding: 2px;text-align: center">
                            <a href="/p/users/?id=<?=$friend["USER_ID"]?>"><div style="padding: 10px; width: 100px; height: 100px; background: url(<?=$friend["USER_PERSONAL_PHOTO_FILE"]["SRC"]?>) no-repeat center; background-size: cover"></div></a>
                            <div style="text-align: center; font-size: large; font-weight: bold">
                                <?
                                echo $friend["USER_NAME"]
                                ?>
                            </div>

                        </div>
                        <?
                    }
                    if (StrLen($friend["REQUEST_GROUP_LINK"]) > 0 || $friend["CAN_ADD2FRIENDS"] || $friend["CAN_DELETE_FRIEND"]) {
                        ?><?
                        if (StrLen($friend["REQUEST_GROUP_LINK"]) > 0)
                            echo "<a href=\"" . $friend["REQUEST_GROUP_LINK"] . "\" class=\"action-link\"><b>" . GetMessage("SONET_C33_T_INVITE") . "</b></a>";
                        ?><?
                    }

                    if ($arResult["CurrentUserPerms"]["IsCurrentUser"]) {
                        ?><?
                    }

                    $ind++;
                    $ind_row++;
                }
                ?>

                <?
            }
        } else
            echo GetMessage("SONET_C33_T_FR_UNAVAIL");
        ?>
        <? if ($arResult["CurrentUserPerms"]["IsCurrentUser"]):?>
        <?endif; ?>
        <? if (StrLen($arResult["NAV_STRING"]) > 0):?>
            <br><?= $arResult["NAV_STRING"] ?><br/><br/>
        <?endif; ?>
        <?
        if ($arResult["CurrentUserPerms"]["IsCurrentUser"]):
            ?><br/>
            <input type="hidden" name="max_count" value="<?= $ind ?>">
            <?= bitrix_sessid_post() ?>
            </form><?
        endif;
    }
    ?>
</div>