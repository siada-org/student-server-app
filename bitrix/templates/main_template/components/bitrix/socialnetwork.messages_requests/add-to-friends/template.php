<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<?
if ($arResult["NEED_AUTH"] == "Y") {
    $APPLICATION->AuthForm("");
} elseif (strlen($arResult["FatalError"]) > 0) {
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
    <? if ($arResult["Events"]):?>
        <div class="sonet-cntnr-messages-requests" style="padding-top: 20px; border: 1px solid black; border-radius: 5px">
        <table width="100%" >
            <? foreach ($arResult["Events"] as $event):?>
                <tr>
                    <td valign="top" width="10%" nowrap>
                        <? if ($event["EventType"] == "FriendRequest"):?>
                            <div
                                style="width: 90px; height: 90px; background: url(<?= CFile::GetPath($event["Event"]["USER_PERSONAL_PHOTO"]); ?>) no-repeat center; background-size: cover"></div>

                        <?
                        else:?>
                            <?= $event["Event"]["GROUP_IMAGE_ID_IMG"]; ?><br>
                            <?
                            if ($event["Event"]["SHOW_GROUP_LINK"])
                                echo "<a href=\"" . $event["Event"]["GROUP_PROFILE_URL"] . "\">";
                            echo $event["Event"]["GROUP_NAME"];
                            if ($event["Event"]["SHOW_GROUP_LINK"])
                                echo "</a>";
                            ?>
                        <?endif; ?>
                    </td>
                    <td valign="top" width="90%">
                        <? if ($event["EventType"] == "FriendRequest"):?>
                            <?= $event["Event"]["USER_NAME"] ?> <?= $event["Event"]["USER_LAST_NAME"] ?> <?= GetMessage("SONET_C29_T_FRIEND_REQUEST") ?>:
                            <br/><br/>
                            <?= $event["Event"]["MESSAGE"]; ?><br/><br/>
                        <?
                        else:?>
                            <?= GetMessage("SONET_C29_T_USER") ?>
                            <?

                            $APPLICATION->IncludeComponent("bitrix:main.user.link",
                                '',
                                array(
                                    "ID" => $event["Event"]["USER_ID"],
                                    "NAME" => htmlspecialcharsback($event["Event"]["USER_NAME"]),
                                    "LAST_NAME" => htmlspecialcharsback($event["Event"]["USER_LAST_NAME"]),
                                    "SECOND_NAME" => htmlspecialcharsback($event["Event"]["USER_SECOND_NAME"]),
                                    "LOGIN" => htmlspecialcharsback($event["Event"]["USER_LOGIN"]),
                                    "USE_THUMBNAIL_LIST" => "N",
                                    "PROFILE_URL" => $event["Event"]["USER_PROFILE_URL"],
                                    "PATH_TO_SONET_MESSAGES_CHAT" => $arParams["~PATH_TO_MESSAGES_CHAT"],
                                    "PATH_TO_SONET_USER_PROFILE" => $arParams["~PATH_TO_USER"],
                                    "PATH_TO_VIDEO_CALL" => $arParams["~PATH_TO_VIDEO_CALL"],
                                    "DATE_TIME_FORMAT" => $arParams["DATE_TIME_FORMAT"],
                                    "SHOW_YEAR" => $arParams["SHOW_YEAR"],
                                    "CACHE_TYPE" => $arParams["CACHE_TYPE"],
                                    "CACHE_TIME" => $arParams["CACHE_TIME"],
                                    "NAME_TEMPLATE" => $arParams["NAME_TEMPLATE"],
                                    "SHOW_LOGIN" => $arParams["SHOW_LOGIN"],
                                    "PATH_TO_CONPANY_DEPARTMENT" => $arParams["~PATH_TO_CONPANY_DEPARTMENT"],
                                    "INLINE" => "Y",
                                ),
                                false,
                                array("HIDE_ICONS" => "Y")
                            );

                            ?>
                            <?= GetMessage("SONET_C29_T_INVITE") ?>:<br/><br/>
                            <?= $event["Event"]["MESSAGE"]; ?><br/><br/>
                            <i><?= $event["Event"]["DATE_CREATE"]; ?></i>
                        <?endif; ?>
                    </td>
                </tr>
               <tr>
                   <td colspan="3">
                       <? if ($event["EventType"] == "FriendRequest"):?>
                           <a href="<?= $event["Urls"]["FriendAdd"] ?>">
                               <div class="col-xs-6" style="background-color: #00a65a; border-radius: 5px; color: white; text-align: center; height: 40px; padding-top: 10px;"><?= GetMessage("SONET_C29_T_DO_FRIEND") ?></div></a>
                           <a href="<?= $event["Urls"]["FriendReject"] ?>">
                               <div class="col-xs-6" style="background-color: #cc3b51; border-radius: 5px; color: white; text-align: center; height: 40px; padding-top: 10px;"><?= GetMessage("SONET_C29_T_DO_DENY") ?></div>
                           </a>
                           <?
                       else:?>
                           <a href="<?= $event["Urls"]["FriendAdd"] ?>"><?= GetMessage("SONET_C29_T_DO_AGREE") ?></a>
                           <a href="<?= $event["Urls"]["FriendReject"] ?>"><?= GetMessage("SONET_C29_T_DO_DENY") ?></a>
                       <?endif; ?>
                   </td>
               </tr>
            <?endforeach; ?>
        </table>
        </div>
    <?endif; ?>
    <?
}
?>