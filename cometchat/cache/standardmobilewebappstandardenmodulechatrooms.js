
if (typeof(jqcc) === 'undefined') {
	jqcc = jQuery;
}

jqcc.ajaxSetup({scriptCharset: "utf-8", cache: "false"});

if (typeof(jqcc.cometchat)==='undefined') {
    var mode = 1;
    jqcc.cometchat = function() {};
}

jqcc.extend(jqcc.cometchat, {
    crvariables : {themename: 'standard',
                timestamp: '0',
                currentroom: '0',
                currentp: '',
                currentroomcode: '',
                myid: '0',
                owner: '0',
                isModerator: 0,
                cu_uids: [],
                heartbeatTimer: '',
                baseUrl: '/cometchat/',
                minHeartbeat: '3000',
                maxHeartbeat: '12000',
                fullName: '1',
                hideEnterExit: '0',
                messageBeep: '1',
                heartbeatTime: this.minHeartbeat,
                heartbeatCount: 1,
                todaysDate: new Date(),
                todays12am: (new Date()).getTime() - ((new Date()).getTime()%(24*60*60*1000)),
                clh: '',
                ulh: '',
                prepend: 0,
                users: {},
                usersName: {},
                initializeRoom: 0,
                password: '',
                currentroomname: '',
                armyTime: '0',
                specialChars: /([^\x00-\x80]+)|([&][#])+/,
                apiAccess: 0,
                lightboxWindows: '1',
                newMessages: 0,
                plugins: ['chattime', 'style', 'filetransfer', 'smilies'],
                cookie_prefix: 'cc_',
                basedata: getURLParameter('basedata'),
                allowDelete: '1',
                lastmessagetime : Math.floor(new Date().getTime()),
                floodControl: '0',
                calleeAPI: 'mobilewebapp',
                moderators: [1],
                windowCount: 0,
                windows: [],
                popoutmode: getURLParameter('popoutmode'),
                cookiePrefix: 'cc_',
				newMessageIndicator: '1'
            },
            getcrAllVariables: function() {
                return this.crvariables;
            },
            getChatroomVars: function(key) {
                if (typeof(this.crvariables[key])!=='undefined')
                    return this.crvariables[key];
            },
            setChatroomVars: function(key, value) {
                this.crvariables[key] = value;
            },
            chatroommessageBeep: function() {
                return this.crvariables.messageBeep;
            },

            getBaseUrl: function() {
                return this.crvariables.baseUrl;
            },

            getBaseData: function() {
				if ($.cookie(this.crvariables.cookiePrefix + 'data') !== null) {
					return $.cookie(this.crvariables.cookiePrefix + 'data');
				}
                return this.crvariables.basedata;
            },
            popoutChatroom: function() {
                jqcc.cometchat.leaveChatroom();
                myRef = window.open(self.location,'popoutchat','left=20,top=20,status=0,toolbar=0,menubar=0,directories=0,location=0,status=0,scrollbars=0,resizable=1,width=800,height=600');
                if (typeof(parent.jqcc.cometchat.closeModule) == "function")
                    parent.jqcc.cometchat.closeModule('chatrooms');
                setTimeout('window.location.reload()',3000);
            },
            checkModerator: function() {
                if(typeof jqcc.cometchat.getChatroomVars != 'undefined' && jqcc.cometchat.getChatroomVars('myid') != ''){
                    var moderators = jqcc.cometchat.getChatroomVars('moderators');
                    var userid = jqcc.cometchat.getChatroomVars('myid');
                    if(moderators.indexOf(userid) > -1){
                        jqcc.cometchat.setChatroomVars('isModerator','1');
                        return 1;
                    }
                }
                return 0;
            },
            chatroomBoxKeydown: function(event,chatboxtextarea,force) {
                var condition = 1;
                if ((event.keyCode == 13 && event.shiftKey == 0) || force == 1) {

                    var message = jqcc(chatboxtextarea).val();
                    message = message.replace(/^\s+|\s+$/g,"");
                    if (this.crvariables.floodControl != 0) {
                        condition = ((Math.floor(new Date().getTime())) - this.crvariables.lastmessagetime > 2000);
                    }
                    if (condition) {
                        var messageLength = message.length;
                        this.crvariables.lastmessagetime = Math.floor(new Date().getTime());
                        if (this.crvariables.currentroom != 0) {
                            if(typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].sendChatroomMessage) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].sendChatroomMessage(chatboxtextarea);
                            if (message != '') {
                                jqcc.cometchat.sendmessageProcess(message, this.crvariables.currentroom, this.crvariables.basedata, this.crvariables.currentroomname);
                            }
                        }
                        return false;
                    } else {
                        alert('Please do not spam in chatroom');
                    }
                }
            },
            sendmessageProcess: function(message, currentroom, basedata, currentroomname) {

                if (message != '') {
					if (message.length > 1000){
						if (message.charAt(1000) == ' ') {
							messagecurrent = message.substring(0,1000);
						} else {
							messagecurrent = message.substring(0,1000);
							var spacePos = messagecurrent.length;
							while (messagecurrent.charAt(spacePos) != ' ') {
								  spacePos--;
							}
							messagecurrent = message.substring(0,spacePos);
						}
						messagenext = message.substring(messagecurrent.length);
						if (messagenext.length > 0) {
							messagecurrent = messagecurrent + "...";
						}
					} else {
							messagecurrent = message;
							messagenext = '';
					}
					message = messagecurrent;
                    jqcc.post(this.crvariables.baseUrl+"modules/chatrooms/chatrooms.php?action=sendmessage", {message: message , currentroom: currentroom, basedata:basedata, currentroomname: currentroomname} , function(data) {

                        if (data) {
                        if(data.hasOwnProperty('m')){
                            message = data.m;
                        }
                                                    if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].addChatroomMessage) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].addChatroomMessage(jqcc.cometchat.getChatroomVars('myid'), message,data.id,1,Math.floor(new Date().getTime()),'0');
                                                    if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomScrollDown) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomScrollDown(1);
                        } else if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].crscrollToBottom) == "function") {
                            jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].crscrollToBottom();
                        }
                        if (messagenext.length > 0) {
                                jqcc.cometchat.sendmessageProcess('...'+messagenext, currentroom, basedata, currentroomname);
                        }
                    },'json');

                }
            },
            confirmDelete: function(delid) {
                var confirmed = confirm('Are you want to sure you want to delete this message?');
                if (confirmed==true) {
                    jqcc.cometchat.deleteMessage(delid);
                }
            },
            deleteMessage: function(delid) {
                jqcc.ajax({
                    url: "chatrooms.php?action=deleteChatroomMessage",
                    type: "POST",
                    data: {delid:delid,currentroom:this.crvariables.currentroom, basedata:this.crvariables.basedata},
                    success: function(s) {
                        if (s == 1) {
                            $("#cometchat_message_"+delid).remove();
                        }
                    }
                });
            },
            leaveChatroom: function(id, banflag, callbackfn) {
                var flag=0;
                var params = "action=leavechatroom";
                if (typeof(id) != 'undefined') {
                    flag=1;
                }
                if (typeof(banflag) != 'undefined') {
                    params = params + "&banflag=1";
                }
                                if (typeof(jqcc[this.crvariables.calleeAPI].leaveRoomClass) == "function")
                    jqcc[this.crvariables.calleeAPI].leaveRoomClass(this.crvariables.currentroom);
                jqcc.post(this.crvariables.baseUrl+"modules/chatrooms/chatrooms.php?"+params, {currentroom: this.crvariables.currentroom, flag:flag, basedata:this.crvariables.basedata}, function(data) {
                    if (data) {
                        jqcc.cometchat.setChatroomVars('currentp','');
                        jqcc.cometchat.setChatroomVars('currentroomname','');
                        jqcc.cometchat.setChatroomVars('currentroom',0);
                        if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].removeCurrentRoomTab) == "function")
                            jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].removeCurrentRoomTab();
                        document.cookie = 'cc_chatroom=';
                        if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadLobby) == "function" && callbackfn != 'mobilewebapp')
                            jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadLobby();
                        clearTimeout(jqcc.cometchat.getChatroomVars('heartbeatTimer'));
                        jqcc.cometchat.chatroomHeartbeat(1);
                    }
                });
            },
            createChatroomSubmit: function() {
                var room = jqcc[this.crvariables.calleeAPI].createChatroomSubmitStruct();
                if (room.name != '' && typeof(room.name) != 'undefined') {
                    jqcc.post(this.crvariables.baseUrl+"modules/chatrooms/chatrooms.php?action=createchatroom", {name: room.name, type:room.type, password: room.password, basedata:this.crvariables.basedata} , function(data) {
                        if (parseInt(data)!=0) {
                            jqcc.cometchat.setChatroomVars('currentp',SHA1(room.password))
                            room.name = urlencode(room.name);
                            jqcc.cometchat.chatroom(data,room.name,room.type,jqcc.cometchat.getChatroomVars('currentp'),1);
                        } else {
                            alert('This room name is not available.');
                            if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].createChatroom) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].createChatroom();
                        }
                    });
                } else {
                    alert('Please enter the room name.');
                }
                return false;
            },
            deleteChatroom: function(event,id){
                event.stopPropagation();
                var confirmDeletion = confirm('Are you sure you want to delete this chatroom?');
                if (confirmDeletion == true) {
                    jqcc.cometchat.leaveChatroom();
                    jqcc.post(this.crvariables.baseUrl+"modules/chatrooms/chatrooms.php?action=deletechatroom", {id: id, basedata:this.crvariables.basedata} , function(data) {
                        if (data != '' && parseInt(data)!=0) {
                            alert('The room has been deleted successfully');
                            jqcc.cometchat.chatroomHeartbeat(1);
                        } else {
                            alert('You do not have permissions to delete the chatroom');
                        }
                    });
                }
            },
            inviteChatroomUser: function() {
                jqcc[this.crvariables.calleeAPI].loadCCPopup(this.crvariables.baseUrl+'modules/chatrooms/chatrooms.php?action=invite&roomid='+this.crvariables.currentroom+'&inviteid='+this.crvariables.currentp+'&basedata='+this.crvariables.basedata+'&roomname='+urlencode(this.crvariables.currentroomname)+'&popoutmode='+this.crvariables.popoutmode, 'invite',"status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=1, width=400,height=200",400,200,'Please select users');
            },
            unbanChatroomUser: function() {
                jqcc[this.crvariables.calleeAPI].loadCCPopup(this.crvariables.baseUrl+'modules/chatrooms/chatrooms.php?action=unban&roomid='+this.crvariables.currentroom+'&inviteid='+this.crvariables.currentp+'&basedata='+this.crvariables.basedata+'&roomname='+urlencode(this.crvariables.currentroomname)+'&popoutmode='+this.crvariables.popoutmode+'&time='+Math.random(), 'invite',"status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=1, width=400,height=200",400,200,'Please select users');
            },
            loadChatroomPro: function(uid,owner,longname) {
                jqcc[this.crvariables.calleeAPI].loadCCPopup(this.crvariables.baseUrl+'modules/chatrooms/chatrooms.php?action=loadChatroomPro&apiAccess='+this.crvariables.apiAccess+'&owner='+owner+'&roomid='+this.crvariables.currentroom+'&basedata='+this.crvariables.basedata+'&inviteid='+uid+'&roomname='+urlencode(this.crvariables.currentroomname)+'&popoutmode='+this.crvariables.popoutmode, 'loadChatroomPro',"status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=1, width=365,height=100",365,75,longname);
            },
            silentroom: function(roomid, inviteid, roomname) {
                jqcc.cometchat.chatroom(roomid,roomname,1,inviteid,1);
            },
            checkChatroomPass: function(id,name,silent,password) {
                if (silent != 1) {
                    password=SHA1(password);
                }
                jqcc.post(this.crvariables.baseUrl+"modules/chatrooms/chatrooms.php?action=checkpassword", {password: password, id: id, basedata:this.crvariables.basedata} , function(data) {
                    if (data) {
                        if (data['s'] != 'INVALID_PASSWORD' && data['s'] != 'BANNED' && data['s'] !='INVALID_CHATROOM') {

                                                        jqcc.cometchat.setChatroomVars('owner',parseInt(data['owner']));
                            jqcc.cometchat.setChatroomVars('myid',parseInt(data['userid']));
                            jqcc.cometchat.setChatroomVars('isModerator',parseInt(data['ismoderator']));
                            jqcc.cometchat.setChatroomVars('currentp',password);
                            jqcc.cometchat.setChatroomVars('initializeRoom',1);
                            if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].hidetabs) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].hidetabs();
                            if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].selectChatroom) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].selectChatroom(jqcc.cometchat.getChatroomVars('currentroom'),id);
                            jqcc.cometchat.setChatroomVars('currentroom',id);
                            jqcc.cometchat.setChatroomVars('ulh','');
                            jqcc.cometchat.setChatroomVars('timestamp',0);
                            jqcc.cometchat.setChatroomVars('currentroomname',name);
                            if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].checkOwnership) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].checkOwnership(jqcc.cometchat.getChatroomVars('owner'),jqcc.cometchat.getChatroomVars('isModerator'),name);
                            if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].setRoomName) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].setRoomName(name);
                            if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadRoom) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadRoom();
                            clearTimeout(jqcc.cometchat.getChatroomVars('heartbeatTimer'));
                            if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadMobileChatroom) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadMobileChatroom();
                            jqcc.cometchat.setChatroomVars('cu_uids','');
                            jqcc.cometchat.chatroomHeartbeat(1);
                        } else {
                            if (data['s'] == 'BANNED') {
                                if (silent != 1) {
                                    alert ('Sorry, you are banned from this chatroom.');
                                    if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadMobileLobbyReverse) == "function")
                                        jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadMobileLobbyReverse();
                                }
                            }else if (data['s'] == 'INVALID_CHATROOM'){
                                alert('The room has been deleted.');
                            }else {
                                alert('Incorrect password. Please try again.');
                            }
                        }
                    }
                });
},
            chatroom: function(id,name,type,invite,silent) {
                name = urldecode(name);
                if (this.crvariables.currentroom != id) {
                    this.crvariables.password = '';
                    if (invite != '') {
                        this.crvariables.password = invite;
                    }
                    if (type == 1 || type == 2) {
                        if (silent != 1) {
                            if (typeof(jqcc[this.crvariables.calleeAPI].silentRoom) == "function")
                                jqcc[this.crvariables.calleeAPI].silentRoom(id, name, silent);
                        } else {
                            jqcc.cometchat.checkChatroomPass(id,name,silent,this.crvariables.password);
                        }
                    } else {
                        jqcc.cometchat.checkChatroomPass(id,name,silent,this.crvariables.password);
                    }
                } else {
                    if (typeof(jqcc[this.crvariables.calleeAPI].loadRoom) == "function")
                        jqcc[this.crvariables.calleeAPI].loadRoom();
                    clearTimeout(this.crvariables.heartbeatTimer);
                    jqcc.cometchat.chatroomHeartbeat(1);
                }
            },
            chatroomHeartbeat: function(forceUpdate) {
                jqcc.ajax({
                    url: this.crvariables.baseUrl+"modules/chatrooms/chatrooms.php?action=heartbeat",
                    data: {timestamp: this.crvariables.timestamp, currentroom: this.crvariables.currentroom, clh: this.crvariables.clh, ulh: this.crvariables.ulh, currentp: this.crvariables.currentp, popout:this.crvariables.apiAccess, force: forceUpdate ,basedata:this.crvariables.basedata},
                    type: 'post',
                    cache: false,
                    timeout: 10000,
                    error: function() {
                        clearTimeout(jqcc.cometchat.getChatroomVars('heartbeatTimer'));
                        jqcc.cometchat.setChatroomVars('heartbeatTime', jqcc.cometchat.getChatroomVars('minHeartbeat'));
                        jqcc.cometchat.setChatroomVars('heartbeatTimer', setTimeout( function() { jqcc.cometchat.chatroomHeartbeat(); },jqcc.cometchat.getChatroomVars('heartbeatTime')));
                    },
                    success: function(data) {
                        if (data) {
                            var fetchedUsers = 0;
                            $.each(data, function(type,item) {
                                if (type == 'logout') {
                                    if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomLogout) == "function")
                                        jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomLogout();
                                }
                                if (type == 'userid') {
                                    jqcc.cometchat.setChatroomVars('myid',item);
                                }
                                if (type == 'chatrooms') {
                                    if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadChatroomList) == "function")
                                        jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].loadChatroomList(item);
                                }
                                if (type == 'clh') {
                                    jqcc.cometchat.setChatroomVars('clh',item);
                                }
                                if (type == 'prepend') {
                                    jqcc.cometchat.setChatroomVars('prepend',item);
                                }
                                if (type == 'ulh') {
                                    jqcc.cometchat.setChatroomVars('ulh',item);
                                }
                                if (type == 'messages') {
                                    if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].displayChatroomMessage) == "function")
                                        jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].displayChatroomMessage(item,fetchedUsers);
                                }
                                if (type == 'users') {
                                    if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].updateChatroomUsers) == "function")
                                        jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].updateChatroomUsers(item,fetchedUsers);
                                }
								if (type == 'error') {
									if(item =='ROOM_DOES_NOT_EXISTS'){
										alert('The room has been deleted.');
									}
									jqcc.cometchat.leaveChatroom();
                                }
                            });
                        }
                        jqcc.cometchat.setChatroomVars('heartbeatCount',jqcc.cometchat.getChatroomVars('heartbeatCount')+1);
                        if (jqcc.cometchat.getChatroomVars('heartbeatCount') > 4) {
                            jqcc.cometchat.setChatroomVars('heartbeatTime',jqcc.cometchat.getChatroomVars('heartbeatTime') * 2);
                            jqcc.cometchat.setChatroomVars('heartbeatCount',1);
                        }
                        if (jqcc.cometchat.getChatroomVars('heartbeatTime') > jqcc.cometchat.getChatroomVars('maxHeartbeat')) {
                            jqcc.cometchat.setChatroomVars('heartbeatTime', jqcc.cometchat.getChatroomVars('maxHeartbeat'));
                        }
                        clearTimeout(jqcc.cometchat.getChatroomVars('heartbeatTimer'));
                        jqcc.cometchat.setChatroomVars('heartbeatTime', jqcc.cometchat.getChatroomVars('minHeartbeat'));
                        jqcc.cometchat.setChatroomVars('heartbeatTimer', setTimeout( function() { jqcc.cometchat.chatroomHeartbeat(); },jqcc.cometchat.getChatroomVars('heartbeatTime')));
                    }
                });
            },
            kickChatroomUser: function(kickid,kick){
                jqcc.ajax({
                    url: this.crvariables.baseUrl+"modules/chatrooms/chatrooms.php?action=kickUser",
                    type: "POST",
                    data: {kickid:kickid,currentroom:this.crvariables.currentroom,kick:kick, basedata:this.crvariables.basedata},
                    success: function(s) {
                        if (s == 1) {
                            if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].kickid) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].kickid(kickid);
                            jqcc.cometchat.setChatroomVars('ulh','');
                        }
                    }
                });
            },
            banChatroomUser: function(banid,ban){
                jqcc.ajax({
                    url: this.crvariables.baseUrl+"modules/chatrooms/chatrooms.php?action=banUser",
                    type: "POST",
                    data: {banid:banid,currentroom:this.crvariables.currentroom,ban:ban, basedata:this.crvariables.basedata, popoutmode:this.crvariables.popoutmode},
                    success: function(s) {
                        if (s == 1) {
                            if (typeof(jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].banid) == "function")
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].banid(banid);
                        }
                    }
                });
            },
            chatroomready: function() {
                jqcc(document).ready(function() {
                    if(jqcc.cometchat.getChatroomVars('calleeAPI') != 'mobilewebapp') {
                        if ((jqcc.cometchat.chatroommessageBeep()) == 1) {
                            $('<audio id="messageBeep" style="display:none;"><source src="'+jqcc.cometchat.getChatroomVars('baseUrl')+'mp3/beep.mp3" type="audio/mpeg"><source src="'+jqcc.cometchat.getChatroomVars('baseUrl')+'mp3/beep.ogg" type="audio/ogg"><source src="'+jqcc.cometchat.getChatroomVars('baseUrl')+'mp3/beep.wav" type="audio/wav"></audio>').appendTo($("body"));
                        }
                        try {
                            if (parent.jqcc.cometchat.ping() == 1) {
                                jqcc.cometchat.setChatroomVars('apiAccess',1);
                            }
                        } catch (e) {}
                                if(jqcc.cometchat.getChatroomVars('calleeAPI') !== 'mobilewebapp') {
                                        jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomWindowResize();
                                }
                        if (jqcc().slimScroll) {
                            jqcc("#currentroom_convo").slimScroll({height: jqcc("#currentroom_convo").css('height')});
                            jqcc("#currentroom_users").slimScroll({height: jqcc("#currentroom_users").css('height')});
                        }
                        window.onresize = function(event) {
                            if(jqcc.cometchat.getChatroomVars('calleeAPI') !== 'mobilewebapp') {
                                jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomWindowResize();
                            }
                        }
                        jqcc('#currentroom').mouseover(function() {
                            jqcc.cometchat.setChatroomVars('newMessages',0);
                        });
                        jqcc.cometchat.chatroomHeartbeat(1);
                        jqcc("textarea.cometchat_textarea").keydown(function(event) {
                            return jqcc.cometchat.chatroomBoxKeydown(event,this);
                        });
                        jqcc("div.cometchat_tabcontentsubmit").click(function(event) {
                            return jqcc.cometchat.chatroomBoxKeydown(event,jqcc("textarea.cometchat_textarea"),1);
                        });
                        jqcc("textarea.cometchat_textarea").keyup(function(event) {
                            return jqcc[jqcc.cometchat.getChatroomVars('calleeAPI')].chatroomBoxKeyup(event,this);
                        });
                    }
                });
            }
        }
    );

    jqcc.cometchat.chatroomready();


    function SHA1(e){function rotate_left(n,s){var a=(n<<s)|(n>>>(32-s));return a};function lsb_hex(a){var b="";var i;var c;var d;for(i=0;i<=6;i+=2){c=(a>>>(i*4+4))&0x0f;d=(a>>>(i*4))&0x0f;b+=c.toString(16)+d.toString(16)}return b};function cvt_hex(a){var b="";var i;var v;for(i=7;i>=0;i--){v=(a>>>(i*4))&0x0f;b+=v.toString(16)}return b};function Utf8Encode(a){a=a.replace(/\r\n/g,"\n");var b="";for(var n=0;n<a.length;n++){var c=a.charCodeAt(n);if(c<128){b+=String.fromCharCode(c)}else if((c>127)&&(c<2048)){b+=String.fromCharCode((c>>6)|192);b+=String.fromCharCode((c&63)|128)}else{b+=String.fromCharCode((c>>12)|224);b+=String.fromCharCode(((c>>6)&63)|128);b+=String.fromCharCode((c&63)|128)}}return b};var f;var i,j;var W=new Array(80);var g=0x67452301;var h=0xEFCDAB89;var k=0x98BADCFE;var l=0x10325476;var m=0xC3D2E1F0;var A,B,C,D,E;var o;e=Utf8Encode(e);var p=e.length;var q=new Array();for(i=0;i<p-3;i+=4){j=e.charCodeAt(i)<<24|e.charCodeAt(i+1)<<16|e.charCodeAt(i+2)<<8|e.charCodeAt(i+3);q.push(j)}switch(p%4){case 0:i=0x080000000;break;case 1:i=e.charCodeAt(p-1)<<24|0x0800000;break;case 2:i=e.charCodeAt(p-2)<<24|e.charCodeAt(p-1)<<16|0x08000;break;case 3:i=e.charCodeAt(p-3)<<24|e.charCodeAt(p-2)<<16|e.charCodeAt(p-1)<<8|0x80;break}q.push(i);while((q.length%16)!=14)q.push(0);q.push(p>>>29);q.push((p<<3)&0x0ffffffff);for(f=0;f<q.length;f+=16){for(i=0;i<16;i++)W[i]=q[f+i];for(i=16;i<=79;i++)W[i]=rotate_left(W[i-3]^W[i-8]^W[i-14]^W[i-16],1);A=g;B=h;C=k;D=l;E=m;for(i=0;i<=19;i++){o=(rotate_left(A,5)+((B&C)|(~B&D))+E+W[i]+0x5A827999)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=o}for(i=20;i<=39;i++){o=(rotate_left(A,5)+(B^C^D)+E+W[i]+0x6ED9EBA1)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=o}for(i=40;i<=59;i++){o=(rotate_left(A,5)+((B&C)|(B&D)|(C&D))+E+W[i]+0x8F1BBCDC)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=o}for(i=60;i<=79;i++){o=(rotate_left(A,5)+(B^C^D)+E+W[i]+0xCA62C1D6)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=o}g=(g+A)&0x0ffffffff;h=(h+B)&0x0ffffffff;k=(k+C)&0x0ffffffff;l=(l+D)&0x0ffffffff;m=(m+E)&0x0ffffffff}var o=cvt_hex(g)+cvt_hex(h)+cvt_hex(k)+cvt_hex(l)+cvt_hex(m);return o.toLowerCase()}

    function MD5(j){function RotateLeft(a,b){return(a<<b)|(a>>>(32-b))}function AddUnsigned(a,b){var c,lY4,lX8,lY8,lResult;lX8=(a&0x80000000);lY8=(b&0x80000000);c=(a&0x40000000);lY4=(b&0x40000000);lResult=(a&0x3FFFFFFF)+(b&0x3FFFFFFF);if(c&lY4){return(lResult^0x80000000^lX8^lY8)}if(c|lY4){if(lResult&0x40000000){return(lResult^0xC0000000^lX8^lY8)}else{return(lResult^0x40000000^lX8^lY8)}}else{return(lResult^lX8^lY8)}}function F(x,y,z){return(x&y)|((~x)&z)}function G(x,y,z){return(x&z)|(y&(~z))}function H(x,y,z){return(x^y^z)}function I(x,y,z){return(y^(x|(~z)))}function FF(a,b,c,d,x,s,e){a=AddUnsigned(a,AddUnsigned(AddUnsigned(F(b,c,d),x),e));return AddUnsigned(RotateLeft(a,s),b)};function GG(a,b,c,d,x,s,e){a=AddUnsigned(a,AddUnsigned(AddUnsigned(G(b,c,d),x),e));return AddUnsigned(RotateLeft(a,s),b)};function HH(a,b,c,d,x,s,e){a=AddUnsigned(a,AddUnsigned(AddUnsigned(H(b,c,d),x),e));return AddUnsigned(RotateLeft(a,s),b)};function II(a,b,c,d,x,s,e){a=AddUnsigned(a,AddUnsigned(AddUnsigned(I(b,c,d),x),e));return AddUnsigned(RotateLeft(a,s),b)};function ConvertToWordArray(a){var b;var c=a.length;var d=c+8;var e=(d-(d%64))/64;var f=(e+1)*16;var g=Array(f-1);var h=0;var i=0;while(i<c){b=(i-(i%4))/4;h=(i%4)*8;g[b]=(g[b]|(a.charCodeAt(i)<<h));i++}b=(i-(i%4))/4;h=(i%4)*8;g[b]=g[b]|(0x80<<h);g[f-2]=c<<3;g[f-1]=c>>>29;return g};function WordToHex(a){var b="",WordToHexValue_temp="",lByte,lCount;for(lCount=0;lCount<=3;lCount++){lByte=(a>>>(lCount*8))&255;WordToHexValue_temp="0"+lByte.toString(16);b=b+WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2)}return b};function Utf8Encode(a){a=a.replace(/\r\n/g,"\n");var b="";for(var n=0;n<a.length;n++){var c=a.charCodeAt(n);if(c<128){b+=String.fromCharCode(c)}else if((c>127)&&(c<2048)){b+=String.fromCharCode((c>>6)|192);b+=String.fromCharCode((c&63)|128)}else{b+=String.fromCharCode((c>>12)|224);b+=String.fromCharCode(((c>>6)&63)|128);b+=String.fromCharCode((c&63)|128)}}return b};var x=Array();var k,AA,BB,CC,DD,a,b,c,d;var l=7,S12=12,S13=17,S14=22;var m=5,S22=9,S23=14,S24=20;var o=4,S32=11,S33=16,S34=23;var p=6,S42=10,S43=15,S44=21;j=Utf8Encode(j);x=ConvertToWordArray(j);a=0x67452301;b=0xEFCDAB89;c=0x98BADCFE;d=0x10325476;for(k=0;k<x.length;k+=16){AA=a;BB=b;CC=c;DD=d;a=FF(a,b,c,d,x[k+0],l,0xD76AA478);d=FF(d,a,b,c,x[k+1],S12,0xE8C7B756);c=FF(c,d,a,b,x[k+2],S13,0x242070DB);b=FF(b,c,d,a,x[k+3],S14,0xC1BDCEEE);a=FF(a,b,c,d,x[k+4],l,0xF57C0FAF);d=FF(d,a,b,c,x[k+5],S12,0x4787C62A);c=FF(c,d,a,b,x[k+6],S13,0xA8304613);b=FF(b,c,d,a,x[k+7],S14,0xFD469501);a=FF(a,b,c,d,x[k+8],l,0x698098D8);d=FF(d,a,b,c,x[k+9],S12,0x8B44F7AF);c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);a=FF(a,b,c,d,x[k+12],l,0x6B901122);d=FF(d,a,b,c,x[k+13],S12,0xFD987193);c=FF(c,d,a,b,x[k+14],S13,0xA679438E);b=FF(b,c,d,a,x[k+15],S14,0x49B40821);a=GG(a,b,c,d,x[k+1],m,0xF61E2562);d=GG(d,a,b,c,x[k+6],S22,0xC040B340);c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);b=GG(b,c,d,a,x[k+0],S24,0xE9B6C7AA);a=GG(a,b,c,d,x[k+5],m,0xD62F105D);d=GG(d,a,b,c,x[k+10],S22,0x2441453);c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);b=GG(b,c,d,a,x[k+4],S24,0xE7D3FBC8);a=GG(a,b,c,d,x[k+9],m,0x21E1CDE6);d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);c=GG(c,d,a,b,x[k+3],S23,0xF4D50D87);b=GG(b,c,d,a,x[k+8],S24,0x455A14ED);a=GG(a,b,c,d,x[k+13],m,0xA9E3E905);d=GG(d,a,b,c,x[k+2],S22,0xFCEFA3F8);c=GG(c,d,a,b,x[k+7],S23,0x676F02D9);b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);a=HH(a,b,c,d,x[k+5],o,0xFFFA3942);d=HH(d,a,b,c,x[k+8],S32,0x8771F681);c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);a=HH(a,b,c,d,x[k+1],o,0xA4BEEA44);d=HH(d,a,b,c,x[k+4],S32,0x4BDECFA9);c=HH(c,d,a,b,x[k+7],S33,0xF6BB4B60);b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);a=HH(a,b,c,d,x[k+13],o,0x289B7EC6);d=HH(d,a,b,c,x[k+0],S32,0xEAA127FA);c=HH(c,d,a,b,x[k+3],S33,0xD4EF3085);b=HH(b,c,d,a,x[k+6],S34,0x4881D05);a=HH(a,b,c,d,x[k+9],o,0xD9D4D039);d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);b=HH(b,c,d,a,x[k+2],S34,0xC4AC5665);a=II(a,b,c,d,x[k+0],p,0xF4292244);d=II(d,a,b,c,x[k+7],S42,0x432AFF97);c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);b=II(b,c,d,a,x[k+5],S44,0xFC93A039);a=II(a,b,c,d,x[k+12],p,0x655B59C3);d=II(d,a,b,c,x[k+3],S42,0x8F0CCC92);c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);b=II(b,c,d,a,x[k+1],S44,0x85845DD1);a=II(a,b,c,d,x[k+8],p,0x6FA87E4F);d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);c=II(c,d,a,b,x[k+6],S43,0xA3014314);b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);a=II(a,b,c,d,x[k+4],p,0xF7537E82);d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);c=II(c,d,a,b,x[k+2],S43,0x2AD7D2BB);b=II(b,c,d,a,x[k+9],S44,0xEB86D391);a=AddUnsigned(a,AA);b=AddUnsigned(b,BB);c=AddUnsigned(c,CC);d=AddUnsigned(d,DD)}var q=WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);return q.toLowerCase()}

    function base64_encode(a){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var c,o2,o3,h1,h2,h3,h4,bits,i=0,ac=0,enc="",tmp_arr=[];if(!a){return a}a=this.utf8_encode(a+'');do{c=a.charCodeAt(i++);o2=a.charCodeAt(i++);o3=a.charCodeAt(i++);bits=c<<16|o2<<8|o3;h1=bits>>18&0x3f;h2=bits>>12&0x3f;h3=bits>>6&0x3f;h4=bits&0x3f;tmp_arr[ac++]=b.charAt(h1)+b.charAt(h2)+b.charAt(h3)+b.charAt(h4)}while(i<a.length);enc=tmp_arr.join('');switch(a.length%3){case 1:enc=enc.slice(0,-2)+'==';break;case 2:enc=enc.slice(0,-1)+'=';break}return enc}

    function base64_decode(a){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var c,o2,o3,h1,h2,h3,h4,bits,i=0,ac=0,dec="",tmp_arr=[];if(!a){return a}a+='';do{h1=b.indexOf(a.charAt(i++));h2=b.indexOf(a.charAt(i++));h3=b.indexOf(a.charAt(i++));h4=b.indexOf(a.charAt(i++));bits=h1<<18|h2<<12|h3<<6|h4;c=bits>>16&0xff;o2=bits>>8&0xff;o3=bits&0xff;if(h3==64){tmp_arr[ac++]=String.fromCharCode(c)}else if(h4==64){tmp_arr[ac++]=String.fromCharCode(c,o2)}else{tmp_arr[ac++]=String.fromCharCode(c,o2,o3)}}while(i<a.length);dec=tmp_arr.join('');dec=this.utf8_decode(dec);return dec}

    function utf8_decode(a){var b=[],i=0,ac=0,c1=0,c2=0,c3=0;a+='';while(i<a.length){c1=a.charCodeAt(i);if(c1<128){b[ac++]=String.fromCharCode(c1);i++}else if((c1>191)&&(c1<224)){c2=a.charCodeAt(i+1);b[ac++]=String.fromCharCode(((c1&31)<<6)|(c2&63));i+=2}else{c2=a.charCodeAt(i+1);c3=a.charCodeAt(i+2);b[ac++]=String.fromCharCode(((c1&15)<<12)|((c2&63)<<6)|(c3&63));i+=3}}return b.join('')}

    function utf8_encode(a){var b=(a+'');var c="";var d,end;var e=0;d=end=0;e=b.length;for(var n=0;n<e;n++){var f=b.charCodeAt(n);var g=null;if(f<128){end++}else if(f>127&&f<2048){g=String.fromCharCode((f>>6)|192)+String.fromCharCode((f&63)|128)}else{g=String.fromCharCode((f>>12)|224)+String.fromCharCode(((f>>6)&63)|128)+String.fromCharCode((f&63)|128)}if(g!==null){if(end>d){c+=b.substring(d,end)}c+=g;d=end=n+1}}if(end>d){c+=b.substring(d,b.length)}return c}

    function urlencode (string) {
            return base64_encode(string);
    }

    function urldecode (string) {
            return base64_decode(string);
    }

    function getURLParameter (name) {
            return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
    }

    /* Copyright (c) 2006 Klaus Hartl (stilbuero.de)
     http://www.opensource.org/licenses/mit-license.php*/

    jqcc.cookie=function(a,b,c){if(typeof b!='undefined'){c=c||{};if(b===null){b='';c.expires=-1}var d='';if(c.expires&&(typeof c.expires=='number'||c.expires.toUTCString)){var e;if(typeof c.expires=='number'){e=new Date();e.setTime(e.getTime()+(c.expires*24*60*60*1000))}else{e=c.expires}d='; expires='+e.toUTCString()}var f=c.path?'; path='+(c.path):'';var g=c.domain?'; domain='+(c.domain):'';var h=c.secure?'; secure':'';document.cookie=[a,'=',encodeURIComponent(b),d,f,g,h].join('')}else{var j=null;if(document.cookie&&document.cookie!=''){var k=document.cookie.split(';');for(var i=0;i<k.length;i++){var l=jqcc.trim(k[i]);if(l.substring(0,a.length+1)==(a+'=')){j=decodeURIComponent(l.substring(a.length+1));break}}}return j}};

    /* SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License
     http://www.opensource.org/licenses/mit-license.php */

    if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectCCUtil=="undefined"){deconcept.SWFObjectCCUtil=new Object();}deconcept.SWFObjectCC=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectCCUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObjectCC.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObjectCC.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectCCUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectCCUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObjectCC.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectCCUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectCCUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectCCUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObjectCC;var SWFObjectCC=deconcept.SWFObjectCC;


	function getTimeDisplay(ts){
		var ap = "";
		var hour = ts.getHours();
		var minute = ts.getMinutes();
		var date = ts.getDate();
		var month = ts.getMonth();
		var year = ts.getFullYear();
		if(jqcc.cometchat.getChatroomVars('armyTime')!=1){
			ap = hour>11 ? "PM" : "AM";
			hour = hour==0 ? 12 : hour>12 ? hour-12 : hour;
		}else{
			hour = hour<10 ? "0"+hour : hour;
		}
		minute = minute<10 ? "0"+minute : minute;
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var type = 'th';
		if(date==1||date==21||date==31){
			type = 'st';
		}else if(date==2||date==22){
			type = 'nd';
		}else if(date==3||date==23){
			type = 'rd';
		}
		return {ap:ap,hour:hour,minute:minute,date:date,month:months[month],year:year,type:type};
	}


/*
		* CometChat
		* Copyright (c) 2014 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

(function($){

	$.ccchattime = (function () {
		var title = 'Show/hide time';
		var enabled=new Array();
		return {

			getTitle: function() {
				return title;
			},

			init: function (id) {
								var currentroom = $("#currentroom");
				if (currentroom.find("span.cometchat_ts").css('display') == 'none') {
					currentroom.find("span.cometchat_ts").css('display','inline');
					enabled=1;
				} else {
					currentroom.find("span.cometchat_ts_date").css('display','none');
					currentroom.find("span.cometchat_ts").css('display','none');
					enabled=0;
				}

							},

			getEnabled:function (id){
								if(typeof(enabled)=='undefined'){
					return 0;
				}
				return enabled;
				
			}

		};
	})();
})(jqcc);
/*
 * CometChat
 * Copyright (c) 2014 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

(function($){   
  
	$.ccstyle = (function () {

		var title = 'Color your text';
		var chatroommode = 0;

        return {

			getTitle: function() {
				return title;	
			},

			init: function (id,mode) {
				if(typeof(mode) !== "undefined") {
					chatroommode = mode;
				}

				baseUrl = $.cometchat.getBaseUrl();
				basedata = $.cometchat.getBaseData();
				$[$.cometchat.getChatroomVars('calleeAPI')].loadCCPopup(baseUrl+'plugins/style/index.php?id='+id+'&basedata='+basedata, 'style',"status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=0, width=260,height=130",260,80,'Which color would you like to use?'); 
			},

			updatecolor: function (text) {

				if (text != '' && text != null) {
					document.cookie = 'cc_chatroomcolor='+text;
				}

				$('#currentroom').find("textarea.cometchat_textarea").focus();
				
			}

        };
    })();
 
})(jqcc);
/*
 * CometChat
 * Copyright (c) 2014 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

(function($){
	$.ccfiletransfer = (function() {
		var title = 'Send a file';
		return {
			getTitle: function() {
				return title;
			},
			init: function (id) {
								baseUrl = $.cometchat.getBaseUrl();
				basedata = $.cometchat.getBaseData();
				$[$.cometchat.getChatroomVars('calleeAPI')].loadCCPopup(baseUrl+'plugins/filetransfer/index.php?chatroommode=1&id='+id+'&basedata='+basedata+'&sendername='+jqcc.cometchat.getChatroomVars('currentroomname'), 'filetransfer',"status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=0, width=400,height=140",400,130,'Which file would you like to send?');
							}
		};
	})();
})(jqcc);
/*
 * CometChat
 * Copyright (c) 2014 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

(function($){   
  
	$.ccsmilies = (function () {
	
		var title = 'Add a smiley';
		var height = 285;
		var width = 420;
		
        return {

			getTitle: function() {
				return title;	
			},

			init: function (id) {
									baseUrl = $.cometchat.getBaseUrl();
					basedata = $.cometchat.getBaseData();
					$[$.cometchat.getChatroomVars('calleeAPI')].loadCCPopup(baseUrl+'plugins/smilies/index.php?chatroommode=1&id='+id+'&basedata='+basedata, 'smilies',"status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=0, width=420,height=285",width,height-50,'Which smiley would you like?'); 
							},

			addtext: function (id,text) {
				var string = '';
				                    var currentroom_textarea = $('#currentroom').find('textarea.cometchat_textarea');
					string = currentroom_textarea.val();
					if (string.charAt(string.length-1) == ' ') {
						currentroom_textarea.val(currentroom_textarea.val()+text);
					} else {
						if (string.length == 0) {
							currentroom_textarea.val(text);
						} else {
							currentroom_textarea.val(currentroom_textarea.val()+' '+text);
						}
					}					
					currentroom_textarea.focus();
								
			}
        };
    })();
 
})(jqcc);
/*
 * CometChat
 * Copyright (c) 2014 Inscripts - support@cometchat.com | http://www.cometchat.com | http://www.inscripts.com
*/

(function($){   
        var pushNotifications = '1';
        
	$.ccmobilenativeapp = (function () {
			return {
				sendnotification: function (message, channel, displayname, chatroommode) {
					if (typeof chatroommode == 'undefined' && pushNotifications == '1') { 
						baseUrl = $.cometchat.getBaseUrl();
						$.getJSON(baseUrl+'extensions/mobileapp/sendnotification.php', {channel: channel, message: message, displayname: displayname});
					} else if (pushNotifications == '1') {
						baseUrl = $.cometchat.getBaseUrl();
						$.getJSON(baseUrl+'extensions/mobileapp/sendnotification.php?chatroommode=1', {channel: channel, message: message, displayname: displayname});
					}
				}
			};
    })();
 
})(jqcc);        
/*! jQuery UI 1.8.18 */

(function(a,b){function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;if(!b.href||!g||f.nodeName.toLowerCase()!=="map")return!1;h=a("img[usemap=#"+g+"]")[0];return!!h&&d(h)}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}a.ui=a.ui||{};a.ui.version||(a.extend(a.ui,{version:"1.8.18",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.each(["Width","Height"],function(c,d){function h(b,c,d,f){a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)});return c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){if(c===b)return g["inner"+d].call(this);return this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){if(typeof b!="number")return g["outer"+d].call(this,b);return this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));c.offsetHeight,a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!!d&&!!a.element[0].parentNode)for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;if(b[d]>0)return!0;b[d]=1,e=b[d]>0,b[d]=0;return e},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}}))})(jqcc); 
(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}});return d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e;if(f&&e.charAt(0)==="_")return h;f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b){h=f;return!1}}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))});return h}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}this._setOptions(e);return this},_setOptions:function(b){var c=this;a.each(b,function(a,b){c._setOption(a,b)});return this},_setOption:function(a,b){this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b);return this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);this.element.trigger(c,d);return!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jqcc);
(function(a,b){var c=!1;a(document).mouseup(function(a){c=!1}),a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent")){a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation();return!1}}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(b){if(!c){this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which==1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted){b.preventDefault();return!0}}!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0;return!0}},_mouseMove:function(b){if(a.browser.msie&&!(document.documentMode>=9)&&!b.button)return this._mouseUp(b);if(this._mouseStarted){this._mouseDrag(b);return b.preventDefault()}this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b));return!this._mouseStarted},_mouseUp:function(b){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b));return!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})})(jqcc);
(function(a,b){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},destroy:function(){if(!!this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy();return this}},_mouseCapture:function(b){var c=this.options;if(this.helper||c.disabled||a(b.target).is(".ui-resizable-handle"))return!1;this.handle=this._getHandle(b);if(!this.handle)return!1;c.iframeFix&&a(c.iframeFix===!0?"iframe":c.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(a(this).offset()).appendTo("body")});return!0},_mouseStart:function(b){var c=this.options;this.helper=this._createHelper(b),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),c.containment&&this._setContainment();if(this._trigger("start",b)===!1){this._clear();return!1}this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.helper.addClass("ui-draggable-dragging"),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b);return!0},_mouseDrag:function(b,c){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute");if(!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1){this._mouseUp({});return!1}this.position=d.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";a.ui.ddmanager&&a.ui.ddmanager.drag(this,b);return!1},_mouseStop:function(b){var c=!1;a.ui.ddmanager&&!this.options.dropBehaviour&&(c=a.ui.ddmanager.drop(this,b)),this.dropped&&(c=this.dropped,this.dropped=!1);if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return!1;if(this.options.revert=="invalid"&&!c||this.options.revert=="valid"&&c||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)){var d=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){d._trigger("stop",b)!==!1&&d._clear()})}else this._trigger("stop",b)!==!1&&this._clear();return!1},_mouseUp:function(b){this.options.iframeFix===!0&&a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b);return a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?!0:!1;a(this.options.handle,this.element).find("*").andSelf().each(function(){this==b.target&&(c=!0)});return c},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b])):c.helper=="clone"?this.element.clone().removeAttr("id"):this.element;d.parents("body").length||d.appendTo(c.appendTo=="parent"?this.element[0].parentNode:c.appendTo),d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute");return d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[b.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,b.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(b.containment=="document"?0:a(window).scrollLeft())+a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b.containment=="document"?0:a(window).scrollTop())+(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)&&b.containment.constructor!=Array){var c=a(b.containment),d=c[0];if(!d)return;var e=c.offset(),f=a(d).css("overflow")!="hidden";this.containment=[(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0),(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0),(f?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=c}else b.containment.constructor==Array&&(this.containment=b.containment)},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName),f=b.pageX,g=b.pageY;if(this.originalPosition){var h;if(this.containment){if(this.relative_container){var i=this.relative_container.offset();h=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]}else h=this.containment;b.pageX-this.offset.click.left<h[0]&&(f=h[0]+this.offset.click.left),b.pageY-this.offset.click.top<h[1]&&(g=h[1]+this.offset.click.top),b.pageX-this.offset.click.left>h[2]&&(f=h[2]+this.offset.click.left),b.pageY-this.offset.click.top>h[3]&&(g=h[3]+this.offset.click.top)}if(c.grid){var j=c.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1]:this.originalPageY;g=h?j-this.offset.click.top<h[1]||j-this.offset.click.top>h[3]?j-this.offset.click.top<h[1]?j+c.grid[1]:j-c.grid[1]:j:j;var k=c.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0]:this.originalPageX;f=h?k-this.offset.click.left<h[0]||k-this.offset.click.left>h[2]?k-this.offset.click.left<h[0]?k+c.grid[0]:k-c.grid[0]:k:k}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(b,c,d){d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d]),b=="drag"&&(this.positionAbs=this._convertPositionTo("absolute"));return a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(a){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.extend(a.ui.draggable,{version:"1.8.18"}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c){var d=a(this).data("draggable"),e=d.options,f=a.extend({},c,{item:d.element});d.sortables=[],a(e.connectToSortable).each(function(){var c=a.data(this,"sortable");c&&!c.options.disabled&&(d.sortables.push({instance:c,shouldRevert:c.options.revert}),c.refreshPositions(),c._trigger("activate",b,f))})},stop:function(b,c){var d=a(this).data("draggable"),e=a.extend({},c,{item:d.element});a.each(d.sortables,function(){this.instance.isOver?(this.instance.isOver=0,d.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(b),this.instance.options.helper=this.instance.options._helper,d.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",b,e))})},drag:function(b,c){var d=a(this).data("draggable"),e=this,f=function(b){var c=this.offset.click.top,d=this.offset.click.left,e=this.positionAbs.top,f=this.positionAbs.left,g=b.height,h=b.width,i=b.top,j=b.left;return a.ui.isOver(e+c,f+d,i,j,g,h)};a.each(d.sortables,function(f){this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this.instance._intersectsWith(this.instance.containerCache)?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return c.helper[0]},b.target=this.instance.currentItem[0],this.instance._mouseCapture(b,!0),this.instance._mouseStart(b,!0,!0),this.instance.offset.click.top=d.offset.click.top,this.instance.offset.click.left=d.offset.click.left,this.instance.offset.parent.left-=d.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=d.offset.parent.top-this.instance.offset.parent.top,d._trigger("toSortable",b),d.dropped=this.instance.element,d.currentItem=d.element,this.instance.fromOutside=d),this.instance.currentItem&&this.instance._mouseDrag(b)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",b,this.instance._uiHash(this.instance)),this.instance._mouseStop(b,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),d._trigger("fromSortable",b),d.dropped=!1)})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c){var d=a("body"),e=a(this).data("draggable").options;d.css("cursor")&&(e._cursor=d.css("cursor")),d.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;d._cursor&&a("body").css("cursor",d._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(b,c){var d=a(this).data("draggable");d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"&&(d.overflowOffset=d.scrollParent.offset())},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=!1;if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!e.axis||e.axis!="x")d.overflowOffset.top+d.scrollParent[0].offsetHeight-b.pageY<e.scrollSensitivity?d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop-e.scrollSpeed);if(!e.axis||e.axis!="y")d.overflowOffset.left+d.scrollParent[0].offsetWidth-b.pageX<e.scrollSensitivity?d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft-e.scrollSpeed)}else{if(!e.axis||e.axis!="x")b.pageY-a(document).scrollTop()<e.scrollSensitivity?f=a(document).scrollTop(a(document).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<e.scrollSensitivity&&(f=a(document).scrollTop(a(document).scrollTop()+e.scrollSpeed));if(!e.axis||e.axis!="y")b.pageX-a(document).scrollLeft()<e.scrollSensitivity?f=a(document).scrollLeft(a(document).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<e.scrollSensitivity&&(f=a(document).scrollLeft(a(document).scrollLeft()+e.scrollSpeed))}f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c){var d=a(this).data("draggable"),e=d.options;d.snapElements=[],a(e.snap.constructor!=String?e.snap.items||":data(draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!=d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=e.snapTolerance,g=c.offset.left,h=g+d.helperProportions.width,i=c.offset.top,j=i+d.helperProportions.height;for(var k=d.snapElements.length-1;k>=0;k--){var l=d.snapElements[k].left,m=l+d.snapElements[k].width,n=d.snapElements[k].top,o=n+d.snapElements[k].height;if(!(l-f<g&&g<m+f&&n-f<i&&i<o+f||l-f<g&&g<m+f&&n-f<j&&j<o+f||l-f<h&&h<m+f&&n-f<i&&i<o+f||l-f<h&&h<m+f&&n-f<j&&j<o+f)){d.snapElements[k].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=!1;continue}if(e.snapMode!="inner"){var p=Math.abs(n-j)<=f,q=Math.abs(o-i)<=f,r=Math.abs(l-h)<=f,s=Math.abs(m-g)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n-d.helperProportions.height,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l-d.helperProportions.width}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m}).left-d.margins.left)}var t=p||q||r||s;if(e.snapMode!="outer"){var p=Math.abs(n-i)<=f,q=Math.abs(o-j)<=f,r=Math.abs(l-g)<=f,s=Math.abs(m-h)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o-d.helperProportions.height,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m-d.helperProportions.width}).left-d.margins.left)}!d.snapElements[k].snapping&&(p||q||r||s||t)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=p||q||r||s||t}}}),a.ui.plugin.add("draggable","stack",{start:function(b,c){var d=a(this).data("draggable").options,e=a.makeArray(a(d.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});if(!!e.length){var f=parseInt(e[0].style.zIndex)||0;a(e).each(function(a){this.style.zIndex=f+a}),this[0].style.zIndex=f+e.length}}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("zIndex")&&(e._zIndex=d.css("zIndex")),d.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})})(jqcc);

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la) */
(function($) {

  jqcc.fn.extend({
    slimScroll: function(options) {

      var defaults = {
        wheelStep : 20,
        width : 'auto',
        height : 'auto',
        size : '7px',
        color: '#000',
        position : 'right',
        distance : '1px',
        start : 'top',
        opacity : .4,
        alwaysVisible : false,
        railVisible : false,
        railColor : '#333',
        railOpacity : '0.2',
        railClass : 'slimScrollRail',
        barClass : 'slimScrollBar',
        wrapperClass : 'slimScrollDiv',
        allowPageScroll: false,
        scroll: 0,
        resize: 0,
        railAlwaysVisible: false,
        callback:function(){}
      };

      var o = ops = $.extend( defaults , options );

      this.each(function(){

      var isOverPanel, isOverBar, isDragg, queueHide, barHeight, percentScroll,
        divS = '<div></div>',
        minBarHeight = 30,
        releaseScroll = false,
        wheelStep = parseInt(o.wheelStep),
        cwidth = o.width,
        cheight = o.height,
        size = o.size,
        color = o.color,
        position = o.position,
        distance = o.distance,
        start = o.start,
        opacity = o.opacity,
        alwaysVisible = o.alwaysVisible,
        railVisible = o.railVisible,
        railColor = o.railColor,
        railOpacity = o.railOpacity,
        allowPageScroll = o.allowPageScroll,
        scroll = o.scroll;
        resize = o.resize;
        railAlwaysVisible = o.railAlwaysVisible;
        callback = o.callback;
      
        var me = $(this);

        if (me.parent().hasClass('slimScrollDiv')) {
            if (scroll) {
				bar = me.parent().find('.slimScrollBar');
				rail = me.parent().find('.slimScrollRail');
				getBarHeight();
				loc = me.outerHeight() - bar.outerHeight();
				bar.css({ top: loc });
		        scrollContent(0, true);
            }

			 if (resize) {
				bar = me.parent().find('.slimScrollBar');
	            rail = me.parent().find('.slimScrollRail');
	   			getBarHeight();
			 }

            return;
        }

        var wrapper = $(divS)
          .addClass( o.wrapperClass )
          .css({
            position: 'relative',
            overflow: 'hidden',
            width: cwidth,
            height: cheight
          });

		var cw = me;

		while (parseInt(cw.css('width')) <= 0) {
			cw = cw.parent();
		}

		if (typeof cw == 'undefined' || typeof cw.css('width') == 'undefined' || cw.css('width') == 'auto') {
		} else { 
			newwidth = (cw.css('width').replace('px','')-10 + 8 )+'px';
			me.css({ width: newwidth });
		}

		me.css({
          overflow: 'hidden'
		});	

		/*if (position == 'right') {
			me.css({'padding-right':'0px'});
		} else {
			me.css({'padding-left':'0px'});
		}*/

        var rail  = $(divS)
          .addClass( o.railClass )
          .css({
            width: size,
            height: '100%',
            position: 'absolute',
            top: 0,
            display: ((alwaysVisible && railVisible) || railAlwaysVisible) ? 'block' : 'none',
            'border-radius': size,
            background: railColor,
            opacity: railOpacity,
            zIndex: 90
          });
        var bar = $(divS)
          .addClass( o.barClass )
          .css({
            background: color,
            width: size,
            position: 'absolute',
            top: 0,
            opacity: opacity,
            display: alwaysVisible ? 'block' : 'none',
            'border-radius' : size,
            BorderRadius: size,
            MozBorderRadius: size,
            WebkitBorderRadius: size,
            zIndex: 99
          });

        var posCss = (position == 'right') ? { right: distance } : { left: distance };
        rail.css(posCss);
        bar.css(posCss);

        me.wrap(wrapper);
        me.parent().append(bar);
        me.parent().append(rail);

        bar.draggable({ 
          axis: 'y', 
          containment: 'parent',
          start: function() { isDragg = true; },
          stop: function() { isDragg = false; hideBar(); },
          drag: function(e) 
          { 
            scrollContent(0, $(this).position().top, false);
          }
        });

        rail.hover(function(){
          showBar();
        }, function(){
          hideBar();
        });

        bar.hover(function(){
          isOverBar = true;
        }, function(){
          isOverBar = false;
        });

        me.hover(function(){
          isOverPanel = true;
          showBar();
          hideBar();
        }, function(){
          isOverPanel = false;
          hideBar();
        });

        var _onWheel = function(e)
        {
          if (!isOverPanel) { return; }

          var e = e || window.event;

          var delta = 0;
          if (e.wheelDelta) { delta = -e.wheelDelta/120; }
          if (e.detail) { delta = e.detail / 3; }

          scrollContent(delta, true);

          if (e.preventDefault && !releaseScroll) { e.preventDefault(); }
          if (!releaseScroll) { e.returnValue = false; }
        }

        function scrollContent(y, isWheel, isJump)
        {

          var delta = y;

          if (isWheel)
          {
            delta = parseInt(bar.css('top')) + y * wheelStep / 100 * bar.outerHeight();

            var maxTop = me.outerHeight() - bar.outerHeight();
            delta = Math.min(Math.max(delta, 0), maxTop);

            bar.css({ top: delta + 'px' });
          }

          percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
          delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

          if (isJump)
          {
            delta = y;
            var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
            bar.css({ top: offsetTop + 'px' });
          }

          me.scrollTop(delta);
          showBar();
          hideBar();
        }

        var attachWheel = function()
        {
          if (window.addEventListener)
          {
            this.addEventListener('DOMMouseScroll', _onWheel, false );
            this.addEventListener('mousewheel', _onWheel, false );
          } 
          else
          {
            document.attachEvent("onmousewheel", _onWheel)
          }
        }

		attachWheel();

        function getBarHeight() {
			barHeight = 0;

			if (me[0].scrollHeight != 0) {
				barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);	
			}
			
			bar.css({ height: barHeight + 'px' });
        }

        getBarHeight();

        function showBar()
        {
          getBarHeight();
          clearTimeout(queueHide);

          releaseScroll = allowPageScroll && percentScroll == ~~ percentScroll;
          if(barHeight >= me.outerHeight()) {
            releaseScroll = true;
            return;
          }
          bar.stop(true,true).fadeIn('fast');
          if (railVisible || railAlwaysVisible) { rail.stop(true,true).fadeIn('fast'); }
        }

        function hideBar()
        {
          if (!alwaysVisible)
          {
            queueHide = setTimeout(function(){
              if (!isOverBar && !isDragg) 
              { 
                bar.fadeOut('slow');
                if(!railAlwaysVisible) rail.fadeOut('slow');
              }
            }, 1000);
          }
        }

        if (start == 'bottom') 
        {
          bar.css({ top: me.outerHeight() - bar.outerHeight() });
          scrollContent(0, true);
        }
        else if (typeof start == 'object')
        {
          scrollContent($(start).position().top, null, true);

          if (!alwaysVisible) { bar.hide(); }
        }
      });
      callback();
      return this;
    }
  });

  jqcc.fn.extend({
    slimscroll: jqcc.fn.slimScroll
  });

})(jqcc);
if (typeof(jqcc) === 'undefined') {
	jqcc = jQuery;
}
(function($) {
    var settings = {};
    settings = jqcc.cometchat.getcrAllVariables();
    var calleeAPI = jqcc.cometchat.getChatroomVars('calleeAPI');

    $.crstandard = (function() {
            return {
                playsound: function() {
                        try	{
                            document.getElementById('messageBeep').play();
                        } catch (error) {
                            jqcc.cometchat.setChatroomVars('messageBeep',0);
                        }
                },
                sendChatroomMessage: function(chatboxtextarea) {
                    $(chatboxtextarea).val('');
                    $(chatboxtextarea).css('height','18px');
                    var height = $[calleeAPI].crgetWindowHeight();
                    $("#currentroom_convo").css('height',height-58-parseInt($('textarea.cometchat_textarea').css('height'))-8-3);
                    $("#currentroom_left").find("div.slimScrollDiv").css('height',$("#currentroom_convo").css('height'));
                    $(chatboxtextarea).css('overflow-y','hidden');
                    $(chatboxtextarea).focus();
                },
                createChatroom: function() {
                    $[calleeAPI].hidetabs();
                    $('#createtab').addClass('tab_selected');
                    $('#create').css('display','block');
                    $('div.welcomemessage').html('Invitation only rooms will not be displayed in the lobby');
                },
                getTimeDisplay: function(ts,id) {
                    var style ="style=\"display:none;\"";

                    if (typeof(jqcc.ccchattime)!='undefined' && jqcc.ccchattime.getEnabled(id,0)) {
                            style="style=\"display:inline;\"";
                    }
					var time = getTimeDisplay(ts);
					if (ts < jqcc.cometchat.getChatroomVars('todays12am')) {
							return "<span class=\"cometchat_ts\" "+style+">("+time.hour+":"+time.minute+time.ap+" "+time.date+time.type+" "+time.month+")</span>";
                    } else {
							return "<span class=\"cometchat_ts\" "+style+">("+time.hour+":"+time.minute+time.ap+")</span>";
                    }
                },
                addChatroomMessage: function(fromid,incomingmessage,incomingid,selfadded,sent,fromname) {
                    if(typeof(fromname) === 'undefined' || fromname == 0 || fromid == settings.myid){
                        fromname = 'Me';
                    }
                    var temp = '';
                    settings.timestamp=incomingid;
                    separator = ':  ';
                    var bannedKicked = incomingmessage;
                    var bannedOrKicked=bannedKicked.split('_');
                    if (bannedOrKicked[1]=='kicked' || bannedOrKicked[1]=='banned') {
                        if (settings.myid==bannedOrKicked[2]) {
                            if (bannedOrKicked[1]=='kicked') {
                                jqcc.cometchat.kickChatroomUser(bannedOrKicked[1],incomingid);
                                alert ('You have been kicked from this chatroom.');
                                jqcc.cometchat.leaveChatroom();
                            }
                            if (bannedOrKicked[1]=='banned') {
                                jqcc.cometchat.banChatroomUser(bannedOrKicked[1],incomingid);
                                alert ('Sorry, you are banned from this chatroom.');
                                jqcc.cometchat.leaveChatroom(bannedOrKicked[2], 1);
                            }
                        }
                    $("#cometchat_userlist_"+bannedOrKicked[2]).remove();
                    }  else if(bannedOrKicked[1] == "deletemessage") {
                        $("#cometchat_message_"+bannedOrKicked[2]).remove();
                    } else {
                            if ($("#cometchat_message_"+incomingid).length > 0) {
                                $("#cometchat_message_"+incomingid).find("span.cometchat_chatboxmessagecontent").html(incomingmessage);
                            } else {
                                if (incomingmessage.indexOf('CC^CONTROL_deletemessage_') <= -1) {
                                sentdata = '';
                                if (sent != null) {
                                    var ts = new Date(parseInt(sent));
                                    sentdata = $[calleeAPI].getTimeDisplay(ts,incomingid);
                                }
                                if (!settings.fullName && fromname.indexOf(" ") != -1) {
                                    fromname = fromname.slice(0,fromname.indexOf(" "));
                                }
                                if (fromid != settings.myid) {
                                    temp += ('<div class="cometchat_chatboxmessage" id="cometchat_message_'+incomingid+'"><span class="cometchat_chatboxmessagefrom"><strong>');
                                    if (settings.apiAccess && fromid != 0) {
                                        temp += ('<a href="javascript:void(0)" onclick="javascript:parent.jqcc.cometchat.chatWith(\''+fromid+'\');">');
                                    }
                                    temp += fromname;
                                    if (settings.apiAccess && fromid != 0) {
                                        temp += ('</a>');
                                    }
                                    temp += ('</strong>'+separator+'</span><span class="cometchat_chatboxmessagecontent">'+incomingmessage+'</span>'+sentdata+'</div>');
                                } else {
                                    temp += ('<div class="cometchat_chatboxmessage" id="cometchat_message_'+incomingid+'"><span class="cometchat_chatboxmessagefrom"><strong>'+fromname+'</strong>'+separator+'</span><span class="cometchat_chatboxmessagecontent">'+incomingmessage+'</span>'+sentdata+'</div>');
                                }
                                $("#currentroom_convotext").append(temp);
                                if ($.cookie(jqcc.cometchat.getChatroomVars('cookie_prefix')+"sound") && $.cookie(jqcc.cometchat.getChatroomVars('cookie_prefix')+"sound") == 'true') { } else {
                                    $[calleeAPI].playsound();
                                }
                            }
                        }
                    }
                    if(jqcc.cometchat.getChatroomVars('owner')|| jqcc.cometchat.getChatroomVars('isModerator') || (jqcc.cometchat.getChatroomVars('allowDelete') == 1 && fromid == settings.myid)) {
                        if ($("#cometchat_message_"+incomingid).find("span.delete_msg").length < 1) {
                            jqcc('#cometchat_message_'+incomingid).find('span.cometchat_ts').after('<span class="delete_msg" onclick="javascript:jqcc.cometchat.confirmDelete(\''+incomingid+'\');">(<span class="hoverbraces">delete</span>)</span>');
                        }
                        $(".cometchat_chatboxmessage").live("mouseover",function() {
                            $(this).find(".delete_msg").css('display','inline');
                        });
                        $(".cometchat_chatboxmessage").live("mouseout",function() {
                            $(this).find(".delete_msg").css('display','none');
                        });
                        $("span.delete_msg").mouseover(function() {
                            $(this).css('display','inline');
                        });
                    }
                        var forced = (fromid == settings.myid) ? 1 : 0;
                        $[calleeAPI].chatroomScrollDown(forced);
                    if (settings.apiAccess == 1 && typeof (parent.jqcc.cometchat.setAlert) != 'undefined') {
                        parent.jqcc.cometchat.setAlert('chatrooms',jqcc.cometchat.getChatroomVars('newMessages'));
                    }
                },
                chatroomBoxKeyup: function(event,chatboxtextarea) {
                    if (event.keyCode == 13 && event.shiftKey == 0)  {
                        $(chatboxtextarea).val('');
                    }
                    var adjustedHeight = chatboxtextarea.clientHeight;
                    var maxHeight = 94;
                    var height = $[calleeAPI].crgetWindowHeight();

                    if (maxHeight > adjustedHeight) {
                        adjustedHeight = Math.max(chatboxtextarea.scrollHeight, adjustedHeight);
                        if (maxHeight)
                            adjustedHeight = Math.min(maxHeight, adjustedHeight);
                        if (adjustedHeight > chatboxtextarea.clientHeight) {
                            $(chatboxtextarea).css('height',adjustedHeight+6 +'px');
                            $("#currentroom_convo").css('height',height-58-parseInt($('textarea.cometchat_textarea').css('height'))-6-3);
                            $("#currentroom_left").find("div.slimScrollDiv").css('height',$("#currentroom_convo").css('height'));
                            $[calleeAPI].chatroomScrollDown(1);
                        }
                    } else {
                        $(chatboxtextarea).css('overflow-y','auto');
                    }
                },
                hidetabs: function() {
                    $('li').removeClass('tab_selected');
                    $('#lobby').css('display','none');
                    $('#currentroom').css('display','none');
                    $('#create').css('display','none');
                    $('#plugins').css('display','none');
                },
                loadLobby: function() {
                    $[calleeAPI].hidetabs();
                    $('#lobbytab').addClass('tab_selected');
                    $('#lobby').css('display','block');
                    $('div.welcomemessage').html('Please select a public/private chatroom you would like to join');
                    clearTimeout(jqcc.cometchat.getChatroomVars('heartbeatTimer'));
                    jqcc.cometchat.chatroomHeartbeat(1);
                },
                crcheckDropDown: function(dropdown) {
                    var id = $('#type').attr("selectedIndex");
                    if (id == 1) {
                        $('div.password_hide').css('display','block');
                    } else {
                        $('div.password_hide').css('display','none');
                    }
                },
                loadRoom: function() {
                    var roomname = jqcc.cometchat.getChatroomVars('currentroomname');
                    var roomno = jqcc.cometchat.getChatroomVars('currentroom');

                    $[calleeAPI].hidetabs();
                    $('#plugins').css('display','block');
                    $('#currentroom').css('display','block');
                    $('#currentroomtab').css('display','block');
                    $('#currentroomtab').addClass('tab_selected');
                    $('div.welcomemessage').html('<a href="javascript:void(0);" onclick="javascript:jqcc.cometchat.leaveChatroom()">Leave room</a>'+'<span> | </span>'+'<a href="javascript:void(0);" onclick="javascript:jqcc.cometchat.inviteChatroomUser()">Invite users</a>'+'<span id="unbanuser"> | <a  href="javascript:void(0);" onclick="javascript:jqcc.cometchat.unbanChatroomUser()">Unban users</a></span>');
                    document.cookie = 'cc_chatroom='+urlencode(roomno+':'+jqcc.cometchat.getChatroomVars('currentp')+':'+urlencode(roomname));
                    if ($('#currentroomtab').find('a').attr('show')==0) {
                        $('#unbanuser').remove();
                    }
                    var pluginshtml = '';
                    var plugins = jqcc.cometchat.getChatroomVars('plugins');
                    if (plugins.length > 0) {
                        pluginshtml += '<div class="cometchat_plugins">';
                        for (var i = 0;i < plugins.length;i++) {
                            var name = 'cc'+plugins[i];
                            if (typeof($[name]) == 'object') {
                                pluginshtml += '<div class="cometchat_pluginsicon cometchat_'+ settings.plugins[i] + '" title="' + $[name].getTitle() + '" onclick="javascript:jqcc.'+name+'.init('+roomno+',1);"></div>';
                            }
                        }
                        pluginshtml += '</div>';
                    }
                    $('#plugins').html(pluginshtml);
                    $[calleeAPI].chatroomWindowResize();
                },
                chatroomWindowResize: function() {
                    var height = $[calleeAPI].crgetWindowHeight();
                    $("div.content_div").css('height',height-58-3);
                    $("#currentroom_convo").css('height',height-58-parseInt($('textarea.cometchat_textarea').css('height'))-4-3-3);

                    var width = $[calleeAPI].crgetWindowWidth();
                    $('#currentroom_left').css('width',width-144-48);
                    $('textarea.cometchat_textarea').css('width',width-174-48);
                    $[calleeAPI].chatroomScrollDown();
                    if (jqcc().slimScroll) {
                        $("#currentroom_left").find("div.slimScrollDiv").css('height',$("#currentroom_convo").css('height'));
                        $("#currentroom_right").find("div.slimScrollDiv").css('height',$("#currentroom_right").css('height'));
                    }
                },
                kickid: function(kickid) {
                    $("#chatroom_userlist_"+kickid).remove();
                },
                banid: function(banid) {
                    $("#chatroom_userlist_"+banid).remove();
                },
                chatroomScrollDown: function(forced) {
                    if(settings.newMessageIndicator == 1 && ($('#currentroom_convotext').outerHeight()+$('#currentroom_convotext').offset().top-$('#currentroom_convo').height()-$('#currentroom_convo').offset().top-$('.cometchat_chatboxmessage').height()-$('.cometchat_chatboxmessage').height()>0)){
                        if(($('#currentroom_convo').height()-$('#currentroom_convotext').outerHeight()) < 0){
                            if(forced) {
    	                        if (jqcc().slimScroll) {
    	                            $('#currentroom_convo').slimScroll({scroll: '1'});
    	                        } else {
    	                            setTimeout(function() {
    	                            $("#currentroom_convo").scrollTop(50000);
    	                            },100);
    	                        }
    	                        if($('.talkindicator').length != 0){
    	                            $('.talkindicator').fadeOut();
                                }
    	                    }else{
                                if($('.talkindicator').length){
                                    $('.talkindicator').fadeIn();
                                }else{
                                    var indicator = "<a class='talkindicator' href='#'>New</a>";
                                    $('#currentroom_convo').append(indicator);
                                    $('.talkindicator').click(function(e) {
                                        e.preventDefault();
                                        if (jqcc().slimScroll) {
                                            $('#currentroom_convo').slimScroll({scroll: '1'});
                                        } else {
                                            setTimeout(function() {
                                                $("#currentroom_convo").scrollTop(50000);
                                            },100);
                                        }
                                        $('.talkindicator').fadeOut();
                                    });
                                    $('#currentroom_convo').scroll(function(){
                                        if($('#currentroom_convotext').outerHeight() + $('#currentroom_convotext').offset().top - $('#currentroom_convo').offset().top <= $('#currentroom_convo').height()){
                                            $('.talkindicator').fadeOut();
                                        }
                                    });
                                }
                        	}
                        }
                    }else{
                        if (jqcc().slimScroll) {
                            $('#currentroom_convo').slimScroll({scroll: '1'});
                        } else {
                            setTimeout(function() {
                                $("#currentroom_convo").scrollTop(50000);
                            },100);
                        }
                    }
                },
                createChatroomSubmitStruct: function() {
                    var string = $('input.create_input').val();
                    var room={};
                    if (($.trim( string )).length == 0) {
                        return false;
                    }
                    var name = document.getElementById('name').value;
                    var type = document.getElementById('type').value;
                    var password = document.getElementById('password').value;
                    if (name != '' && name != null) {
                        name = name.replace(/^\s+|\s+$/g,"");
                        if (type == 1 && password == '') {
                            alert ('Please enter a password');
                            return false;
                        }
                        if (type == 2) {
                            password = 'i'+(Math.round(new Date().getTime()));
                        }
                        if (type == 0) {
                            password = '';
                        }
                    }
                    room['name'] = name;
                    room['password'] = password;
                    room['type'] = type;
                    return room;
                },
                crgetWindowHeight: function() {
                    var windowHeight = 0;
                    if (typeof(window.innerHeight) == 'number') {
                        windowHeight = window.innerHeight;
                    } else {
                        if (document.documentElement && document.documentElement.clientHeight) {
                            windowHeight = document.documentElement.clientHeight;
                        } else {
                            if (document.body && document.body.clientHeight) {
                                windowHeight = document.body.clientHeight;
                            }
                        }
                    }
                    return windowHeight;
                },
                crgetWindowWidth: function() {
                    var windowWidth = 0;
                    if (typeof(window.innerWidth) == 'number') {
                        windowWidth = window.innerWidth;
                    } else {
                        if (document.documentElement && document.documentElement.clientWidth) {
                            windowWidth = document.documentElement.clientWidth;
                        } else {
                            if (document.body && document.body.clientWidth) {
                                windowWidth = document.body.clientWidth;
                            }
                        }
                    }
                    return windowWidth;
                },
                selectChatroom: function(currentroom,id) {
                    jqcc("#cometchat_userlist_"+currentroom).removeClass("cometchat_chatroomselected");
                    jqcc("#cometchat_userlist_"+id).addClass("cometchat_chatroomselected");
                },
                checkOwnership: function(owner,isModerator,name) {
                    var loadroom = 'javascript:jqcc["'+calleeAPI+'"].loadRoom()';
                    if (owner || isModerator) {
                        jqcc('#currentroomtab').html('<a href="javascript:void(0);" show=1 onclick='+loadroom+'>'+name+'</a>');
                    } else {
                        jqcc('#currentroomtab').html('<a href="javascript:void(0);" show=0 onclick='+loadroom+'>'+name+'</a>');
                    }
                    jqcc('#currentroom_convotext').html('');
                    jqcc("#currentroom_users").html('');
                },
                leaveRoomClass : function(currentroom) {
                    jqcc("#cometchat_userlist_"+currentroom).removeClass("cometchat_chatroomselected");
                },
                removeCurrentRoomTab : function() {
                    jqcc('#currentroomtab').css('display','none');
                },
                chatroomLogout : function() {
                    window.location.reload();
                },
                loadChatroomList : function(item) {
                    var temp = '';
                    var onlineNumber = 0;
                    $.each(item, function(i,room) {
                        longname = room.name;
                        shortname = room.name;

                        if (room.status == 'available') {
                            onlineNumber++;
                        }
                        var selected = '';

                        if (jqcc.cometchat.getChatroomVars('currentroom') == room.id) {
                            selected = ' cometchat_chatroomselected';
                        }
                        roomtype = '';
                        roomowner = '';
                        deleteroom = '';

                        if (room.type != 0) {
                            roomtype = '<img src="lock.png" />';
                        }

                        if (room.s == 1) {
                            roomowner = '<img src="user.png" />';
                        }

                        if((room.s == 1 || jqcc.cometchat.checkModerator() == 1) && room.createdby != 0){
                            deleteroom = '<img src="remove.png" />';
                        }

                        if (room.s == 2) {
                            room.s = 1;
                        }

                        temp += '<div id="cometchat_userlist_'+room.id+'" class="lobby_room'+selected+'" onmouseover="jQuery(this).addClass(\'cometchat_userlist_hover\');" onmouseout="jQuery(this).removeClass(\'cometchat_userlist_hover\');" onclick="javascript:jqcc.cometchat.chatroom(\''+room.id+'\',\''+urlencode(shortname)+'\',\''+room.type+'\',\''+room.i+'\',\''+room.s+'\');" ><span class="lobby_room_1">'+longname+'</span><span class="lobby_room_2">'+room.online+' online</span><span class="lobby_room_3">'+roomtype+'</span><span class="lobby_room_4" title="Delete this room." onclick="javascript:jqcc.cometchat.deleteChatroom(event,\''+room.id+'\');">'+deleteroom+'</span><span class="lobby_room_5">'+roomowner+'</span><div style="clear:both"></div></div>';
                    });
                    if (temp != '') {
                        jqcc('#lobby_rooms').html(temp);
                    }else{
                        jqcc('#lobby_rooms').html('<div class="lobby_noroom">No rooms available currently</div>');
                    }
                },
                displayChatroomMessage: function(item,fetchedUsers) {
                    var beepNewMessages = 0;
                    $.each(item, function(i,incoming) {
                        if(incoming.fromid == settings.myid){
                            incoming.from = 'Me';
                        }
                        jqcc.cometchat.setChatroomVars('timestamp',incoming.id);

                        if (incoming.message != '') {
                                var temp = '';
                                var fromname = incoming.from;
                                var bannedKicked = incoming.message;
                                var bannedOrKicked=bannedKicked.split('_');
                                if (bannedOrKicked[0]=='CC^CONTROL') {
                                    if (bannedOrKicked[1]=='kicked' || bannedOrKicked[1]=='banned') {
                                        if (settings.myid==bannedOrKicked[2]) {
                                            if (bannedOrKicked[1]=='kicked') {
                                                jqcc.cometchat.kickChatroomUser(bannedOrKicked[1],incoming.id);
                                                alert ('You have been kicked from this chatroom.');
                                                jqcc.cometchat.leaveChatroom();
                                            }
                                            if (bannedOrKicked[1]=='banned') {
                                                jqcc.cometchat.banChatroomUser(bannedOrKicked[1],incoming.id);
                                                alert ('Sorry, you are banned from this chatroom.');
                                                jqcc.cometchat.leaveChatroom(bannedOrKicked[2], 1);
                                            }
                                        }
                                        $("#cometchat_userlist_"+bannedOrKicked[2]).remove();
                                    } else if (bannedOrKicked[1] == "deletemessage") {
                                        $("#cometchat_message_"+bannedOrKicked[2]).remove();
                                    }
                                } else {
                                    if ($("#cometchat_message_"+incoming.id).length > 0) {
                                        $("#cometchat_message_"+incoming.id).find("span.cometchat_chatboxmessagecontent").html(incoming.message);
                                    } else {
                                        var ts = new Date(parseInt(incoming.sent)*1000);
                                        if (!settings.fullName && fromname.indexOf(" ") != -1) {
                                            fromname = fromname.slice(0,fromname.indexOf(" "));
                                        }
                                        if (incoming.fromid != settings.myid) {
                                            temp += ('<div class="cometchat_chatboxmessage" id="cometchat_message_'+incoming.id+'"><span class="cometchat_chatboxmessagefrom"><strong>');
                                            if (settings.apiAccess && incoming.fromid != 0) {
                                                temp += ('<a href="javascript:void(0)" onclick="javascript:parent.jqcc.cometchat.chatWith(\''+incoming.fromid+'\');">');
                                            }
                                            temp += fromname;
                                            if (settings.apiAccess && incoming.fromid != 0) {
                                                temp += ('</a>');
                                            }
                                            temp += ('</strong>:&nbsp;&nbsp;</span><span class="cometchat_chatboxmessagecontent">'+incoming.message+'</span>'+$[calleeAPI].getTimeDisplay(ts,incoming.from)+'</div>');
                                            jqcc.cometchat.setChatroomVars('newMessages',jqcc.cometchat.getChatroomVars('newMessages')+1);
                                            beepNewMessages++;
                                        } else {
                                            temp += ('<div class="cometchat_chatboxmessage" id="cometchat_message_'+incoming.id+'"><span class="cometchat_chatboxmessagefrom"><strong>'+fromname+'</strong>:&nbsp;&nbsp;</span><span class="cometchat_chatboxmessagecontent">'+incoming.message+'</span>'+$[calleeAPI].getTimeDisplay(ts,incoming.from)+'</div>');
                                        }
                                    }
                                }
                                $('#currentroom_convotext').append(temp);
                                if (jqcc.cometchat.getChatroomVars('owner') || jqcc.cometchat.getChatroomVars('isModerator') || (incoming.fromid == settings.myid && jqcc.cometchat.getChatroomVars('allowDelete') == 1)) {
                                    if ($("#cometchat_message_"+incoming.id+" .delete_msg").length < 1) {
                                        jqcc('#cometchat_message_'+incoming.id+' .cometchat_ts').after('<span class="delete_msg" onclick="javascript:jqcc.cometchat.confirmDelete(\''+incoming.id+'\');">(<span class="hoverbraces">delete</span>)</span>');
                                    }
                                    $(".cometchat_chatboxmessage").live("mouseover",function() {
                                        $(this).find(".delete_msg").css('display','inline');
                                    });
                                    $(".cometchat_chatboxmessage").live("mouseout",function() {
                                        $(this).find(".delete_msg").css('display','none');
                                    });
                                    $(".delete_msg").mouseover(function() {
                                        $(this).css('display','inline');
                                        $(this).find(".hoverbraces").css('text-decoration','underline');
                                    });
                                    $(".delete_msg").mouseout(function() {
                                        $(this).find("span.hoverbraces").css('text-decoration','none');
                                    });
                                }
                                var forced = (incoming.fromid == settings.myid) ? 1 : 0;
                                $[calleeAPI].chatroomScrollDown(forced);
                            }
                        });
                        jqcc.cometchat.setChatroomVars('heartbeatCount',1);
                        jqcc.cometchat.setChatroomVars('heartbeatTime',settings.minHeartbeat);
                        if (settings.apiAccess == 1 && fetchedUsers == 0 && typeof (parent.jqcc.cometchat.setAlert) != 'undefined') {
                            parent.jqcc.cometchat.setAlert('chatrooms',jqcc.cometchat.getChatroomVars('newMessages'));
                        }
                        if ($.cookie(settings.cookie_prefix+"sound") && $.cookie(settings.cookie_prefix+"sound") == 'true') { } else {
                            if (beepNewMessages > 0 && fetchedUsers == 0) {
                                $[calleeAPI].playsound();
                            }
                        }
                    },
                    silentRoom: function(id, name, silent) {
                        if (settings.lightboxWindows == 1) {
                            jqcc[settings.calleeAPI].loadCCPopup(settings.baseUrl+'modules/chatrooms/chatrooms.php?id='+id+'&basedata='+settings.basedata+'&name='+name+'&silent='+silent+'&action=passwordBox', 'passwordBox',"status=0,toolbar=0,menubar=0,directories=0,resizable=0,location=0,status=0,scrollbars=1, width=320,height=110",320,110,name);
                        } else {
                            var temp = prompt('Please enter the chatroom password :','');
                            if (temp) {
                                jqcc.cometchat.checkChatroomPass(id,name,silent,temp);
                            } else {
                                return;
                            }
                        }
                    },
                    updateChatroomUsers: function(item,fetchedUsers) {
                        var temp = '';
                        var temp1 = '';
                        var newUsers = {};
                        var newUsersName = {};
                        fetchedUsers = 1;
                        $.each(item, function(i,user) {
                            if (user.id != jqcc.cometchat.getChatroomVars('kick_ban_id')) {
                                    longname = user.n;
                                    if (settings.users[user.id] != 1 && settings.initializeRoom == 0 && settings.hideEnterExit == 0) {
                                            var ts = new Date();
                                            $("#currentroom_convotext").append('<div class="cometchat_chatboxalert" id="cometchat_message_0">'+user.n+' присоединился к беседе'+$[calleeAPI].getTimeDisplay(ts,user.id)+'</div>');
                                            $[calleeAPI].chatroomScrollDown();
                                    }
                                    if (parseInt(user.b)!=1) {
                                            var avatar = '';
                                            if (user.a != '') {
                                                    avatar = '<span class="cometchat_userscontentavatar"><img class="cometchat_userscontentavatarimage" src='+user.a+'></span>';
                                            }
                                            newUsers[user.id] = 1;
                                            newUsersName[user.id] = user.n;
                                            userhtml='<div class="cometchat_subsubtitleusers"><hr class="hrleft">Users<hr class="hrright"></div>';
                                            moderatorhtml='<div class="cometchat_subsubtitle"><hr class="hrleft">Moderators<hr class="hrright"></div>';
                                            if (jQuery.inArray(user.id ,jqcc.cometchat.getChatroomVars('moderators') ) != -1 ) {
                                                    if (user.id == settings.myid) {
                                                            temp1 += '<div id="chatroom_userlist_'+user.id+'" class="cometchat_userlist" style="cursor:default !important;">'+avatar+'<span class="cometchat_userscontentname">'+longname+'</span></div>';
                                                    } else {
                                                            temp1 += '<div id="chatroom_userlist_'+user.id+'" class="cometchat_userlist" onmouseover="jqcc(this).addClass(\'cometchat_userlist_hover\');" onmouseout="jqcc(this).removeClass(\'cometchat_userlist_hover\');" onClick="jqcc.cometchat.loadChatroomPro('+user.id+','+settings.owner+',\''+user.n+'\')">'+avatar+'<span class="cometchat_userscontentname">'+longname+'</span></div>';
                                                    }
                                            } else {
                                                    if (user.id == settings.myid) {
                                                            temp += '<div id="chatroom_userlist_'+user.id+'" class="cometchat_userlist" style="cursor:default !important;">'+avatar+'<span class="cometchat_userscontentname">'+longname+'</span></div>';
                                                    } else {
                                                            temp += '<div id="chatroom_userlist_'+user.id+'" class="cometchat_userlist" onmouseover="jqcc(this).addClass(\'cometchat_userlist_hover\');" onmouseout="jqcc(this).removeClass(\'cometchat_userlist_hover\');" onClick="jqcc.cometchat.loadChatroomPro('+user.id+','+settings.owner+',\''+user.n+'\')">'+avatar+'<span class="cometchat_userscontentname">'+longname+'</span></div>';
                                                    }
                                            }
                                    }
                            }
                        });
                        for (user in settings.users) {
                            if (settings.users.hasOwnProperty(user)) {
                                if (newUsers[user] != 1 && settings.initializeRoom == 0 && settings.hideEnterExit == 0) {
                                    var ts = new Date();
                                    $("#currentroom_convotext").append('<div class="cometchat_chatboxalert" id="cometchat_message_0">'+settings.usersName[user]+' покинул беседу'+$[calleeAPI].getTimeDisplay(ts,user.id)+'</div>');
                                    $[calleeAPI].chatroomScrollDown();
                                }
                            }
                        }
                        if(temp1 != "" && temp !="")
                            jqcc('#currentroom_users').html(moderatorhtml+temp1+userhtml+temp);
                        else if(temp == "")
                            jqcc('#currentroom_users').html(moderatorhtml+temp1);
                        else
                            jqcc('#currentroom_users').html(userhtml+temp);
                        jqcc.cometchat.setChatroomVars('users',newUsers);
                        jqcc.cometchat.setChatroomVars('usersName',newUsersName);
                        jqcc.cometchat.setChatroomVars('initializeRoom',0);
                    },
                    loadCCPopup: function(url,name,properties,width,height,title,force,allowmaximize,allowresize,allowpopout){
                        if (jqcc.cometchat.getChatroomVars('apiAccess') == 1 && jqcc.cometchat.getChatroomVars('lightboxWindows') == 1) {
                            parent.loadCCPopup(url,name,properties,width,height,title,force,allowmaximize,allowresize,allowpopout);
                        } else {
                            var w = window.open(url,name,properties);
                            w.focus();
                        }
                    }
                };
        })();
})(jqcc);

if(typeof(jqcc.standard) === "undefined"){
    jqcc.standard=function(){};
}

jqcc.extend(jqcc.standard, jqcc.crstandard);
