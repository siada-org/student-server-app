<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<div style="text-align: center">Результаты поиска</div>
    <script>
        var currentFilter = '<?echo CUtil::JSEscape($arResult["CURRENT_FILTER"])?>';
        var arFilters = ['simple', 'adv'];
        function BXSetFilter(currentFilterNew) {
            if (currentFilter == currentFilterNew)
                return;

            for (var i = 0; i < arFilters.length; i++) {
                var obTabContent = document.getElementById('bx_users_filter_' + arFilters[i]);
                var obTab = document.getElementById('bx_users_selector_tab_' + arFilters[i]);

                if (null != obTabContent) {
                    obTabContent.style.display = (currentFilterNew == arFilters[i] ? 'block' : 'none');
                    currentFilter = currentFilterNew;
                }

                if (null != obTab) {
                    obTab.className = (currentFilterNew == arFilters[i] ? 'bx-selected' : '');
                }
            }
        }
    </script>
    <div class="bx-users-selector-filter"
         id="bx_users_filter_adv"<?= $arResult["CURRENT_FILTER"] == 'adv' ? '' : ' style="display: none;"' ?>>
        <form action="<?= $arResult["Urls"]["UserSearch"] ?>" class="bx-selector-form filter-form"
              name="bx_users_filter_adv_form">
            <input type="hidden" name="current_view" value="<?= htmlspecialcharsbx($arResult['CURRENT_VIEW']) ?>"/>
            <input type="hidden" name="current_filter" value="adv"/>
            <table class="bx-selector-table filter-table">
                <tbody>
                <tr>
                    <td class="bx-filter-caption"><?= GetMessage("SONET_C241_T_FIO") ?>:</td>
                    <td>
                        <input type="text" name="FLT_FIO" value="<?= htmlspecialcharsex($_REQUEST["FLT_FIO"]) ?>"/>
                    </td>
                </tr>
                <? foreach ($arResult["UserFieldsSearchAdv"] as $userFieldName => $userFieldDescr): ?>
                    <tr>
                        <td class="bx-filter-caption"><?= $userFieldDescr["TITLE"] ?>:</td>
                        <td><?
                            if ($userFieldDescr["TYPE"] == "exact"):
                                echo $userFieldDescr["STRING"];
                            elseif ($userFieldDescr["TYPE"] == "select"):
                                ?><select name="<?= $userFieldDescr["NAME"] ?>">
                                <option value=""></option>
                                <? foreach ($userFieldDescr["VALUES"] as $keyTmp => $valTmp): ?>
                                <option
                                    value="<?= $keyTmp ?>"<?= (($keyTmp == $userFieldDescr["VALUE"]) ? " selected" : "") ?>><?= $valTmp ?></option>
                            <? endforeach; ?>
                                </select><?
                            elseif ($userFieldDescr["TYPE"] == "string"):
                                ?><input type="text" name="<?= $userFieldDescr["NAME"] ?>"
                                         value="<?= $userFieldDescr["VALUE"] ?>" /><?
                            elseif ($userFieldDescr["TYPE"] == "calendar"):
                                echo "<nobr>";
                                $APPLICATION->IncludeComponent(
                                    'bitrix:main.calendar',
                                    '.default',
                                    array(
                                        'SHOW_INPUT' => 'Y',
                                        'FORM_NAME' => 'bx_users_filter_adv_form',
                                        'INPUT_NAME' => $userFieldDescr["NAME"],
                                        'INPUT_VALUE' => $userFieldDescr["VALUE"],
                                        'SHOW_TIME' => 'N',
                                    ),
                                    null,
                                    array('HIDE_ICONS' => 'Y')
                                );
                                echo "</nobr>";
                            endif;
                            ?></td>
                    </tr>
                <? endforeach; ?>
                <? foreach ($arResult["UserPropertiesSearchAdv"] as $userFieldName => $userFieldDescr): ?>
                    <tr>
                        <td class="bx-filter-caption"><?= $userFieldDescr["EDIT_FORM_LABEL"] ?>:</td>
                        <td><?
                            $APPLICATION->IncludeComponent(
                                'bitrix:system.field.edit',
                                $userFieldDescr['USER_TYPE_ID'],
                                array(
                                    "arUserField" => $userFieldDescr,
                                    'form_name' => 'bx_users_filter_adv_form',
                                    "bVarsFromForm" => true
                                ),
                                null,
                                array('HIDE_ICONS' => 'Y')
                            );
                            ?></td>
                    </tr>
                <? endforeach; ?>
                </tbody>
                <tfoot>
                <tr>
                    <td colspan="2">
                        <input type="submit" name="set_filter" value="<? echo GetMessage('SONET_C241_T_DO_SEARCH') ?>"
                               class="bx-submit-btn"/>
                        <input type="reset" name="del_filter" value="<? echo GetMessage('SONET_C241_T_DO_CANCEL') ?>"
                               class="bx-reset-btn" onclick="window.location='<?= $arResult["Urls"]["UserSearch"] ?>'"/>
                    </td>
                </tr>
                </tfoot>
            </table>
        </form>
    </div>
<? if (strlen($arResult["ERROR_MESSAGE"]) <= 0): ?>
    <? if (count($arResult["SEARCH_RESULT"]) > 0): ?>
        <br/>
        <? if ($arResult['CURRENT_VIEW'] == "list"): ?>
            <? foreach ($arResult["SEARCH_RESULT"] as $v): ?>
                <div class="col-xs-4">
                    <a href="/p/users/?id=<?= $v["id"] ?>">
                        <div style="width: 100px; height: 100px; background: url(<?= $v["IMAGE_FILE"]["SRC"] ?>) no-repeat center; background-size: cover"></div>
                        <div style="text-align: center"><?=$v["NAME"]?></div>
                    </a>
                </div>
            <? endforeach; ?>
        <? elseif ($arResult['CURRENT_VIEW'] == "bigicon"): ?>
            <div class="sonet-cntnr-user-search2">
                <table width="100%" border="0" class="sonet-user-profile-friend-box">
                    <?
                    $ind = 0;
                    foreach ($arResult["SEARCH_RESULT"] as $v) {
                        if ($ind % 3 == 0)
                            echo "<tr>";
                        echo "<td align=\"center\" valign=\"top\" width=\"33%\">";
                        echo $v["IMAGE_IMG"];

                        $APPLICATION->IncludeComponent("bitrix:main.user.link",
                            '',
                            array(
                                "ID" => $v["ID"],
                                "NAME" => htmlspecialcharsback($v["NAME"]),
                                "LAST_NAME" => htmlspecialcharsback($v["LAST_NAME"]),
                                "SECOND_NAME" => htmlspecialcharsback($v["SECOND_NAME"]),
                                "LOGIN" => htmlspecialcharsback($v["LOGIN"]),
                                "USE_THUMBNAIL_LIST" => "N",
                                "PERSONAL_PHOTO_IMG" => $v["IMAGE_IMG"],
                                "PERSONAL_PHOTO_FILE" => $v["IMAGE_FILE"],
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
                            ),
                            false,
                            array("HIDE_ICONS" => "Y")
                        );

                        if ($v["CAN_ADD2FRIENDS"])
                            echo "<a href=\"" . $v["ADD_TO_FRIENDS_LINK"] . "\">" . GetMessage("SONET_C241_T_ADD_FR") . "</a><br>";
                        if ($v["CAN_MESSAGE"])
                            echo "<a href=\"" . $v["MESSAGE_LINK"] . "\" onclick=\"if (typeof(BX) != 'undefined' && BX.IM) { BXIM.openMessenger(" . $v["ID"] . "); return false; } else { window.open('" . $v["MESSAGE_LINK"] . "', '', 'status=no,scrollbars=yes,resizable=yes,width=700,height=550,top='+Math.floor((screen.height - 550)/2-14)+',left='+Math.floor((screen.width - 700)/2-5)); return false; }\">" . GetMessage("SONET_C241_T_WRITE") . "</a><br>";

                        echo "</td>";
                        if ($ind % 3 == 2)
                            echo "</tr>";
                        $ind++;
                    }
                    ?>
                </table>
            </div>
        <? elseif ($arResult['CURRENT_VIEW'] == "icon"): ?>
            <div class="sonet-cntnr-user-search3">
                <table width="100%" border="0" class="sonet-user-profile-friend-box">
                    <?
                    $ind = 0;
                    foreach ($arResult["SEARCH_RESULT"] as $v) {
                        if ($ind % 4 == 0)
                            echo "<tr>";
                        echo "<td align=\"center\" valign=\"top\" width=\"25%\">";
                        echo $v["IMAGE_IMG"];

                        $APPLICATION->IncludeComponent("bitrix:main.user.link",
                            '',
                            array(
                                "ID" => $v["ID"],
                                "NAME" => htmlspecialcharsback($v["NAME"]),
                                "LAST_NAME" => htmlspecialcharsback($v["LAST_NAME"]),
                                "SECOND_NAME" => htmlspecialcharsback($v["SECOND_NAME"]),
                                "LOGIN" => htmlspecialcharsback($v["LOGIN"]),
                                "USE_THUMBNAIL_LIST" => "N",
                                "PERSONAL_PHOTO_IMG" => $v["IMAGE_IMG"],
                                "PERSONAL_PHOTO_FILE" => $v["IMAGE_FILE"],
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
                            ),
                            false,
                            array("HIDE_ICONS" => "Y")
                        );

                        if ($v["CAN_ADD2FRIENDS"])
                            echo "<a href=\"" . $v["ADD_TO_FRIENDS_LINK"] . "\">" . GetMessage("SONET_C241_T_ADD_FR") . "</a><br>";
                        if ($v["CAN_MESSAGE"])
                            echo "<a href=\"" . $v["MESSAGE_LINK"] . "\" onclick=\"if (typeof(BX) != 'undefined' && BX.IM) { BXIM.openMessenger(" . $v["ID"] . "); return false; } else { window.open('" . $v["MESSAGE_LINK"] . "', '', 'status=no,scrollbars=yes,resizable=yes,width=700,height=550,top='+Math.floor((screen.height - 550)/2-14)+',left='+Math.floor((screen.width - 700)/2-5)); return false; }\">" . GetMessage("SONET_C241_T_WRITE") . "</a><br>";

                        echo "</td>";
                        if ($ind % 4 == 3)
                            echo "</tr>";
                        $ind++;
                    }
                    ?>
                </table>
            </div>
        <? endif; ?>

        <? if (strlen($arResult["NAV_STRING"]) > 0): ?>
            <p><?= $arResult["NAV_STRING"] ?></p>
        <? endif; ?>

    <? else: ?>
        <? if (!$arResult["ShowResults"]): ?>
            <?= GetMessage("SONET_C241_T_NOT_FILTERED") ?>
        <? else: ?>
            <?= GetMessage("SONET_C241_T_NOT_FOUND") ?>
        <? endif; ?>
    <? endif; ?>
<? else: ?>
    <?= ShowError($arResult["ERROR_MESSAGE"]); ?>
<? endif; ?>