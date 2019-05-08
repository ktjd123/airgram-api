# TDLib methods

- [`acceptCall()`](#apiacceptcall)
- [`acceptTermsOfService()`](#apiaccepttermsofservice)
- [`addChatMember()`](#apiaddchatmember)
- [`addChatMembers()`](#apiaddchatmembers)
- [`addCustomServerLanguagePack()`](#apiaddcustomserverlanguagepack)
- [`addFavoriteSticker()`](#apiaddfavoritesticker)
- [`addLocalMessage()`](#apiaddlocalmessage)
- [`addLogMessage()`](#apiaddlogmessage)
- [`addNetworkStatistics()`](#apiaddnetworkstatistics)
- [`addProxy()`](#apiaddproxy)
- [`addRecentSticker()`](#apiaddrecentsticker)
- [`addRecentlyFoundChat()`](#apiaddrecentlyfoundchat)
- [`addSavedAnimation()`](#apiaddsavedanimation)
- [`addStickerToSet()`](#apiaddstickertoset)
- [`answerCallbackQuery()`](#apianswercallbackquery)
- [`answerCustomQuery()`](#apianswercustomquery)
- [`answerInlineQuery()`](#apianswerinlinequery)
- [`answerPreCheckoutQuery()`](#apianswerprecheckoutquery)
- [`answerShippingQuery()`](#apianswershippingquery)
- [`blockUser()`](#apiblockuser)
- [`cancelDownloadFile()`](#apicanceldownloadfile)
- [`cancelUploadFile()`](#apicanceluploadfile)
- [`changeChatReportSpamState()`](#apichangechatreportspamstate)
- [`changeImportedContacts()`](#apichangeimportedcontacts)
- [`changePhoneNumber()`](#apichangephonenumber)
- [`changeStickerSet()`](#apichangestickerset)
- [`checkAuthenticationBotToken()`](#apicheckauthenticationbottoken)
- [`checkAuthenticationCode()`](#apicheckauthenticationcode)
- [`checkAuthenticationPassword()`](#apicheckauthenticationpassword)
- [`checkChangePhoneNumberCode()`](#apicheckchangephonenumbercode)
- [`checkChatInviteLink()`](#apicheckchatinvitelink)
- [`checkChatUsername()`](#apicheckchatusername)
- [`checkDatabaseEncryptionKey()`](#apicheckdatabaseencryptionkey)
- [`checkEmailAddressVerificationCode()`](#apicheckemailaddressverificationcode)
- [`checkPhoneNumberConfirmationCode()`](#apicheckphonenumberconfirmationcode)
- [`checkPhoneNumberVerificationCode()`](#apicheckphonenumberverificationcode)
- [`checkRecoveryEmailAddressCode()`](#apicheckrecoveryemailaddresscode)
- [`cleanFileName()`](#apicleanfilename)
- [`clearAllDraftMessages()`](#apiclearalldraftmessages)
- [`clearImportedContacts()`](#apiclearimportedcontacts)
- [`clearRecentStickers()`](#apiclearrecentstickers)
- [`clearRecentlyFoundChats()`](#apiclearrecentlyfoundchats)
- [`close()`](#apiclose)
- [`closeChat()`](#apiclosechat)
- [`closeSecretChat()`](#apiclosesecretchat)
- [`createBasicGroupChat()`](#apicreatebasicgroupchat)
- [`createCall()`](#apicreatecall)
- [`createNewBasicGroupChat()`](#apicreatenewbasicgroupchat)
- [`createNewSecretChat()`](#apicreatenewsecretchat)
- [`createNewStickerSet()`](#apicreatenewstickerset)
- [`createNewSupergroupChat()`](#apicreatenewsupergroupchat)
- [`createPrivateChat()`](#apicreateprivatechat)
- [`createSecretChat()`](#apicreatesecretchat)
- [`createSupergroupChat()`](#apicreatesupergroupchat)
- [`createTemporaryPassword()`](#apicreatetemporarypassword)
- [`deleteAccount()`](#apideleteaccount)
- [`deleteChatHistory()`](#apideletechathistory)
- [`deleteChatMessagesFromUser()`](#apideletechatmessagesfromuser)
- [`deleteChatReplyMarkup()`](#apideletechatreplymarkup)
- [`deleteFile()`](#apideletefile)
- [`deleteLanguagePack()`](#apideletelanguagepack)
- [`deleteMessages()`](#apideletemessages)
- [`deletePassportElement()`](#apideletepassportelement)
- [`deleteProfilePhoto()`](#apideleteprofilephoto)
- [`deleteSavedCredentials()`](#apideletesavedcredentials)
- [`deleteSavedOrderInfo()`](#apideletesavedorderinfo)
- [`deleteSupergroup()`](#apideletesupergroup)
- [`destroy()`](#apidestroy)
- [`disableProxy()`](#apidisableproxy)
- [`discardCall()`](#apidiscardcall)
- [`disconnectAllWebsites()`](#apidisconnectallwebsites)
- [`disconnectWebsite()`](#apidisconnectwebsite)
- [`downloadFile()`](#apidownloadfile)
- [`editCustomLanguagePackInfo()`](#apieditcustomlanguagepackinfo)
- [`editInlineMessageCaption()`](#apieditinlinemessagecaption)
- [`editInlineMessageLiveLocation()`](#apieditinlinemessagelivelocation)
- [`editInlineMessageMedia()`](#apieditinlinemessagemedia)
- [`editInlineMessageReplyMarkup()`](#apieditinlinemessagereplymarkup)
- [`editInlineMessageText()`](#apieditinlinemessagetext)
- [`editMessageCaption()`](#apieditmessagecaption)
- [`editMessageLiveLocation()`](#apieditmessagelivelocation)
- [`editMessageMedia()`](#apieditmessagemedia)
- [`editMessageReplyMarkup()`](#apieditmessagereplymarkup)
- [`editMessageText()`](#apieditmessagetext)
- [`editProxy()`](#apieditproxy)
- [`enableProxy()`](#apienableproxy)
- [`finishFileGeneration()`](#apifinishfilegeneration)
- [`forwardMessages()`](#apiforwardmessages)
- [`generateChatInviteLink()`](#apigeneratechatinvitelink)
- [`getAccountTtl()`](#apigetaccountttl)
- [`getActiveLiveLocationMessages()`](#apigetactivelivelocationmessages)
- [`getActiveSessions()`](#apigetactivesessions)
- [`getAllPassportElements()`](#apigetallpassportelements)
- [`getApplicationConfig()`](#apigetapplicationconfig)
- [`getArchivedStickerSets()`](#apigetarchivedstickersets)
- [`getAttachedStickerSets()`](#apigetattachedstickersets)
- [`getAuthorizationState()`](#apigetauthorizationstate)
- [`getBasicGroup()`](#apigetbasicgroup)
- [`getBasicGroupFullInfo()`](#apigetbasicgroupfullinfo)
- [`getBlockedUsers()`](#apigetblockedusers)
- [`getCallbackQueryAnswer()`](#apigetcallbackqueryanswer)
- [`getChat()`](#apigetchat)
- [`getChatAdministrators()`](#apigetchatadministrators)
- [`getChatEventLog()`](#apigetchateventlog)
- [`getChatHistory()`](#apigetchathistory)
- [`getChatMember()`](#apigetchatmember)
- [`getChatMessageByDate()`](#apigetchatmessagebydate)
- [`getChatMessageCount()`](#apigetchatmessagecount)
- [`getChatNotificationSettingsExceptions()`](#apigetchatnotificationsettingsexceptions)
- [`getChatPinnedMessage()`](#apigetchatpinnedmessage)
- [`getChatReportSpamState()`](#apigetchatreportspamstate)
- [`getChatStatisticsUrl()`](#apigetchatstatisticsurl)
- [`getChats()`](#apigetchats)
- [`getConnectedWebsites()`](#apigetconnectedwebsites)
- [`getContacts()`](#apigetcontacts)
- [`getCountryCode()`](#apigetcountrycode)
- [`getCreatedPublicChats()`](#apigetcreatedpublicchats)
- [`getCurrentState()`](#apigetcurrentstate)
- [`getDatabaseStatistics()`](#apigetdatabasestatistics)
- [`getDeepLinkInfo()`](#apigetdeeplinkinfo)
- [`getFavoriteStickers()`](#apigetfavoritestickers)
- [`getFile()`](#apigetfile)
- [`getFileDownloadedPrefixSize()`](#apigetfiledownloadedprefixsize)
- [`getFileExtension()`](#apigetfileextension)
- [`getFileMimeType()`](#apigetfilemimetype)
- [`getGameHighScores()`](#apigetgamehighscores)
- [`getGroupsInCommon()`](#apigetgroupsincommon)
- [`getImportedContactCount()`](#apigetimportedcontactcount)
- [`getInlineGameHighScores()`](#apigetinlinegamehighscores)
- [`getInlineQueryResults()`](#apigetinlinequeryresults)
- [`getInstalledStickerSets()`](#apigetinstalledstickersets)
- [`getInviteText()`](#apigetinvitetext)
- [`getJsonString()`](#apigetjsonstring)
- [`getJsonValue()`](#apigetjsonvalue)
- [`getLanguagePackInfo()`](#apigetlanguagepackinfo)
- [`getLanguagePackString()`](#apigetlanguagepackstring)
- [`getLanguagePackStrings()`](#apigetlanguagepackstrings)
- [`getLocalizationTargetInfo()`](#apigetlocalizationtargetinfo)
- [`getLogStream()`](#apigetlogstream)
- [`getLogTagVerbosityLevel()`](#apigetlogtagverbositylevel)
- [`getLogTags()`](#apigetlogtags)
- [`getLogVerbosityLevel()`](#apigetlogverbositylevel)
- [`getMapThumbnailFile()`](#apigetmapthumbnailfile)
- [`getMe()`](#apigetme)
- [`getMessage()`](#apigetmessage)
- [`getMessageLink()`](#apigetmessagelink)
- [`getMessageLocally()`](#apigetmessagelocally)
- [`getMessages()`](#apigetmessages)
- [`getNetworkStatistics()`](#apigetnetworkstatistics)
- [`getOption()`](#apigetoption)
- [`getPassportAuthorizationForm()`](#apigetpassportauthorizationform)
- [`getPassportAuthorizationFormAvailableElements()`](#apigetpassportauthorizationformavailableelements)
- [`getPassportElement()`](#apigetpassportelement)
- [`getPasswordState()`](#apigetpasswordstate)
- [`getPaymentForm()`](#apigetpaymentform)
- [`getPaymentReceipt()`](#apigetpaymentreceipt)
- [`getPreferredCountryLanguage()`](#apigetpreferredcountrylanguage)
- [`getProxies()`](#apigetproxies)
- [`getProxyLink()`](#apigetproxylink)
- [`getPublicMessageLink()`](#apigetpublicmessagelink)
- [`getPushReceiverId()`](#apigetpushreceiverid)
- [`getRecentInlineBots()`](#apigetrecentinlinebots)
- [`getRecentStickers()`](#apigetrecentstickers)
- [`getRecentlyVisitedTMeUrls()`](#apigetrecentlyvisitedtmeurls)
- [`getRecoveryEmailAddress()`](#apigetrecoveryemailaddress)
- [`getRemoteFile()`](#apigetremotefile)
- [`getRepliedMessage()`](#apigetrepliedmessage)
- [`getSavedAnimations()`](#apigetsavedanimations)
- [`getSavedOrderInfo()`](#apigetsavedorderinfo)
- [`getScopeNotificationSettings()`](#apigetscopenotificationsettings)
- [`getSecretChat()`](#apigetsecretchat)
- [`getStickerEmojis()`](#apigetstickeremojis)
- [`getStickerSet()`](#apigetstickerset)
- [`getStickers()`](#apigetstickers)
- [`getStorageStatistics()`](#apigetstoragestatistics)
- [`getStorageStatisticsFast()`](#apigetstoragestatisticsfast)
- [`getSupergroup()`](#apigetsupergroup)
- [`getSupergroupFullInfo()`](#apigetsupergroupfullinfo)
- [`getSupergroupMembers()`](#apigetsupergroupmembers)
- [`getSupportUser()`](#apigetsupportuser)
- [`getTemporaryPasswordState()`](#apigettemporarypasswordstate)
- [`getTextEntities()`](#apigettextentities)
- [`getTopChats()`](#apigettopchats)
- [`getTrendingStickerSets()`](#apigettrendingstickersets)
- [`getUser()`](#apigetuser)
- [`getUserFullInfo()`](#apigetuserfullinfo)
- [`getUserPrivacySettingRules()`](#apigetuserprivacysettingrules)
- [`getUserProfilePhotos()`](#apigetuserprofilephotos)
- [`getWallpapers()`](#apigetwallpapers)
- [`getWebPageInstantView()`](#apigetwebpageinstantview)
- [`getWebPagePreview()`](#apigetwebpagepreview)
- [`importContacts()`](#apiimportcontacts)
- [`joinChat()`](#apijoinchat)
- [`joinChatByInviteLink()`](#apijoinchatbyinvitelink)
- [`leaveChat()`](#apileavechat)
- [`logOut()`](#apilogout)
- [`openChat()`](#apiopenchat)
- [`openMessageContent()`](#apiopenmessagecontent)
- [`optimizeStorage()`](#apioptimizestorage)
- [`parseTextEntities()`](#apiparsetextentities)
- [`pinChatMessage()`](#apipinchatmessage)
- [`pingProxy()`](#apipingproxy)
- [`processPushNotification()`](#apiprocesspushnotification)
- [`readAllChatMentions()`](#apireadallchatmentions)
- [`readFilePart()`](#apireadfilepart)
- [`recoverAuthenticationPassword()`](#apirecoverauthenticationpassword)
- [`recoverPassword()`](#apirecoverpassword)
- [`registerDevice()`](#apiregisterdevice)
- [`removeContacts()`](#apiremovecontacts)
- [`removeFavoriteSticker()`](#apiremovefavoritesticker)
- [`removeNotification()`](#apiremovenotification)
- [`removeNotificationGroup()`](#apiremovenotificationgroup)
- [`removeProxy()`](#apiremoveproxy)
- [`removeRecentHashtag()`](#apiremoverecenthashtag)
- [`removeRecentSticker()`](#apiremoverecentsticker)
- [`removeRecentlyFoundChat()`](#apiremoverecentlyfoundchat)
- [`removeSavedAnimation()`](#apiremovesavedanimation)
- [`removeStickerFromSet()`](#apiremovestickerfromset)
- [`removeTopChat()`](#apiremovetopchat)
- [`reorderInstalledStickerSets()`](#apireorderinstalledstickersets)
- [`reportChat()`](#apireportchat)
- [`reportSupergroupSpam()`](#apireportsupergroupspam)
- [`requestAuthenticationPasswordRecovery()`](#apirequestauthenticationpasswordrecovery)
- [`requestPasswordRecovery()`](#apirequestpasswordrecovery)
- [`resendAuthenticationCode()`](#apiresendauthenticationcode)
- [`resendChangePhoneNumberCode()`](#apiresendchangephonenumbercode)
- [`resendEmailAddressVerificationCode()`](#apiresendemailaddressverificationcode)
- [`resendPhoneNumberConfirmationCode()`](#apiresendphonenumberconfirmationcode)
- [`resendPhoneNumberVerificationCode()`](#apiresendphonenumberverificationcode)
- [`resendRecoveryEmailAddressCode()`](#apiresendrecoveryemailaddresscode)
- [`resetAllNotificationSettings()`](#apiresetallnotificationsettings)
- [`resetNetworkStatistics()`](#apiresetnetworkstatistics)
- [`saveApplicationLogEvent()`](#apisaveapplicationlogevent)
- [`searchCallMessages()`](#apisearchcallmessages)
- [`searchChatMembers()`](#apisearchchatmembers)
- [`searchChatMessages()`](#apisearchchatmessages)
- [`searchChatRecentLocationMessages()`](#apisearchchatrecentlocationmessages)
- [`searchChats()`](#apisearchchats)
- [`searchChatsOnServer()`](#apisearchchatsonserver)
- [`searchContacts()`](#apisearchcontacts)
- [`searchHashtags()`](#apisearchhashtags)
- [`searchInstalledStickerSets()`](#apisearchinstalledstickersets)
- [`searchMessages()`](#apisearchmessages)
- [`searchPublicChat()`](#apisearchpublicchat)
- [`searchPublicChats()`](#apisearchpublicchats)
- [`searchSecretMessages()`](#apisearchsecretmessages)
- [`searchStickerSet()`](#apisearchstickerset)
- [`searchStickerSets()`](#apisearchstickersets)
- [`searchStickers()`](#apisearchstickers)
- [`sendBotStartMessage()`](#apisendbotstartmessage)
- [`sendCallDebugInformation()`](#apisendcalldebuginformation)
- [`sendCallRating()`](#apisendcallrating)
- [`sendChatAction()`](#apisendchataction)
- [`sendChatScreenshotTakenNotification()`](#apisendchatscreenshottakennotification)
- [`sendChatSetTtlMessage()`](#apisendchatsetttlmessage)
- [`sendCustomRequest()`](#apisendcustomrequest)
- [`sendEmailAddressVerificationCode()`](#apisendemailaddressverificationcode)
- [`sendInlineQueryResultMessage()`](#apisendinlinequeryresultmessage)
- [`sendMessage()`](#apisendmessage)
- [`sendMessageAlbum()`](#apisendmessagealbum)
- [`sendPassportAuthorizationForm()`](#apisendpassportauthorizationform)
- [`sendPaymentForm()`](#apisendpaymentform)
- [`sendPhoneNumberConfirmationCode()`](#apisendphonenumberconfirmationcode)
- [`sendPhoneNumberVerificationCode()`](#apisendphonenumberverificationcode)
- [`setAccountTtl()`](#apisetaccountttl)
- [`setAlarm()`](#apisetalarm)
- [`setAuthenticationPhoneNumber()`](#apisetauthenticationphonenumber)
- [`setBio()`](#apisetbio)
- [`setBotUpdatesStatus()`](#apisetbotupdatesstatus)
- [`setChatClientData()`](#apisetchatclientdata)
- [`setChatDraftMessage()`](#apisetchatdraftmessage)
- [`setChatMemberStatus()`](#apisetchatmemberstatus)
- [`setChatNotificationSettings()`](#apisetchatnotificationsettings)
- [`setChatPhoto()`](#apisetchatphoto)
- [`setChatTitle()`](#apisetchattitle)
- [`setCustomLanguagePack()`](#apisetcustomlanguagepack)
- [`setCustomLanguagePackString()`](#apisetcustomlanguagepackstring)
- [`setDatabaseEncryptionKey()`](#apisetdatabaseencryptionkey)
- [`setFileGenerationProgress()`](#apisetfilegenerationprogress)
- [`setGameScore()`](#apisetgamescore)
- [`setInlineGameScore()`](#apisetinlinegamescore)
- [`setLogStream()`](#apisetlogstream)
- [`setLogTagVerbosityLevel()`](#apisetlogtagverbositylevel)
- [`setLogVerbosityLevel()`](#apisetlogverbositylevel)
- [`setName()`](#apisetname)
- [`setNetworkType()`](#apisetnetworktype)
- [`setOption()`](#apisetoption)
- [`setPassportElement()`](#apisetpassportelement)
- [`setPassportElementErrors()`](#apisetpassportelementerrors)
- [`setPassword()`](#apisetpassword)
- [`setPinnedChats()`](#apisetpinnedchats)
- [`setPollAnswer()`](#apisetpollanswer)
- [`setProfilePhoto()`](#apisetprofilephoto)
- [`setRecoveryEmailAddress()`](#apisetrecoveryemailaddress)
- [`setScopeNotificationSettings()`](#apisetscopenotificationsettings)
- [`setStickerPositionInSet()`](#apisetstickerpositioninset)
- [`setSupergroupDescription()`](#apisetsupergroupdescription)
- [`setSupergroupStickerSet()`](#apisetsupergroupstickerset)
- [`setSupergroupUsername()`](#apisetsupergroupusername)
- [`setTdlibParameters()`](#apisettdlibparameters)
- [`setUserPrivacySettingRules()`](#apisetuserprivacysettingrules)
- [`setUsername()`](#apisetusername)
- [`stopPoll()`](#apistoppoll)
- [`synchronizeLanguagePack()`](#apisynchronizelanguagepack)
- [`terminateAllOtherSessions()`](#apiterminateallothersessions)
- [`terminateSession()`](#apiterminatesession)
- [`testCallBytes()`](#apitestcallbytes)
- [`testCallEmpty()`](#apitestcallempty)
- [`testCallString()`](#apitestcallstring)
- [`testCallVectorInt()`](#apitestcallvectorint)
- [`testCallVectorIntObject()`](#apitestcallvectorintobject)
- [`testCallVectorString()`](#apitestcallvectorstring)
- [`testCallVectorStringObject()`](#apitestcallvectorstringobject)
- [`testGetDifference()`](#apitestgetdifference)
- [`testNetwork()`](#apitestnetwork)
- [`testSquareInt()`](#apitestsquareint)
- [`testUseError()`](#apitestuseerror)
- [`testUseUpdate()`](#apitestuseupdate)
- [`toggleBasicGroupAdministrators()`](#apitogglebasicgroupadministrators)
- [`toggleChatDefaultDisableNotification()`](#apitogglechatdefaultdisablenotification)
- [`toggleChatIsMarkedAsUnread()`](#apitogglechatismarkedasunread)
- [`toggleChatIsPinned()`](#apitogglechatispinned)
- [`toggleSupergroupInvites()`](#apitogglesupergroupinvites)
- [`toggleSupergroupIsAllHistoryAvailable()`](#apitogglesupergroupisallhistoryavailable)
- [`toggleSupergroupSignMessages()`](#apitogglesupergroupsignmessages)
- [`unblockUser()`](#apiunblockuser)
- [`unpinChatMessage()`](#apiunpinchatmessage)
- [`upgradeBasicGroupChatToSupergroupChat()`](#apiupgradebasicgroupchattosupergroupchat)
- [`uploadFile()`](#apiuploadfile)
- [`uploadStickerFile()`](#apiuploadstickerfile)
- [`validateOrderInfo()`](#apivalidateorderinfo)
- [`viewMessages()`](#apiviewmessages)
- [`viewTrendingStickerSets()`](#apiviewtrendingstickersets)
- [`writeGeneratedFilePart()`](#apiwritegeneratedfilepart)
-------------
### `api.acceptCall()`
Accepts an incoming call


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `callId` | number | Call identifier |
| `protocol` | [CallProtocolInput](./td-inputs.md#callprotocolinput) | Description of the call protocols supported by the client |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface AcceptCallParams {
  callId?: number
  protocol?: CallProtocolInput
}

function acceptCall(api: ApiMethods, params: AcceptCallParams): Promise<OkUnion> {
 return api.acceptCall(params)
}
```


### `api.acceptTermsOfService()`
Accepts Telegram terms of services


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `termsOfServiceId` | string | Terms of service identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface AcceptTermsOfServiceParams {
  termsOfServiceId?: string
}

function acceptTermsOfService(api: ApiMethods, params: AcceptTermsOfServiceParams): Promise<OkUnion> {
 return api.acceptTermsOfService(params)
}
```


### `api.addChatMember()`
Adds a new member to a chat. Members can't be added to private or secret chats. Members will not be added until the chat state has been synchronized with the server


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `userId` | number | Identifier of the user |
| `forwardLimit` | number | The number of earlier messages from the chat to be forwarded to the new member; up to 100. Ignored for supergroups and channels |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface AddChatMemberParams {
  chatId?: number
  userId?: number
  forwardLimit?: number
}

function addChatMember(api: ApiMethods, params: AddChatMemberParams): Promise<OkUnion> {
 return api.addChatMember(params)
}
```


### `api.addChatMembers()`
Adds multiple new members to a chat. Currently this option is only available for supergroups and channels. This option can't be used to join a chat. Members can't be added to a channel if it has more than 200 members. Members will not be added until the chat state has been synchronized with the server


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `userIds` | number[] | Identifiers of the users to be added to the chat |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface AddChatMembersParams {
  chatId?: number
  userIds?: number[]
}

function addChatMembers(api: ApiMethods, params: AddChatMembersParams): Promise<OkUnion> {
 return api.addChatMembers(params)
}
```


### `api.addCustomServerLanguagePack()`
Adds a custom server language pack to the list of installed language packs in current localization target. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `languagePackId` | string | Identifier of a language pack to be added; may be different from a name that is used in an "https://t.me/setlanguage/" link |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface AddCustomServerLanguagePackParams {
  languagePackId?: string
}

function addCustomServerLanguagePack(api: ApiMethods, params: AddCustomServerLanguagePackParams): Promise<OkUnion> {
 return api.addCustomServerLanguagePack(params)
}
```


### `api.addFavoriteSticker()`
Adds a new sticker to the list of favorite stickers. The new sticker is added to the top of the list. If the sticker was already in the list, it is removed from the list first. Only stickers belonging to a sticker set can be added to this list


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `sticker` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | Sticker file to add |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface AddFavoriteStickerParams {
  sticker?: InputFileInputUnion
}

function addFavoriteSticker(api: ApiMethods, params: AddFavoriteStickerParams): Promise<OkUnion> {
 return api.addFavoriteSticker(params)
}
```


### `api.addLocalMessage()`
Adds a local message to a chat. The message is persistent across application restarts only if the message database is used. Returns the added message


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Target chat |
| `senderUserId` | number | Identifier of the user who will be shown as the sender of the message; may be 0 for channel posts |
| `replyToMessageId` | number | Identifier of the message to reply to or 0 |
| `disableNotification` | boolean | Pass true to disable notification for the message |
| `inputMessageContent` | [InputMessageContentInputUnion](./td-inputs.md#inputmessagecontentinputunion) | The content of the message to be added |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface AddLocalMessageParams {
  chatId?: number
  senderUserId?: number
  replyToMessageId?: number
  disableNotification?: boolean
  inputMessageContent?: InputMessageContentInputUnion
}

function addLocalMessage(api: ApiMethods, params: AddLocalMessageParams): Promise<MessageUnion> {
 return api.addLocalMessage(params)
}
```


### `api.addLogMessage()`
Adds a message to TDLib internal log. This is an offline method. Can be called before authorization. Can be called synchronously


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `verbosityLevel` | number | Minimum verbosity level needed for the message to be logged, 0-1023 |
| `text` | string | Text of a message to log |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface AddLogMessageParams {
  verbosityLevel?: number
  text?: string
}

function addLogMessage(api: ApiMethods, params: AddLogMessageParams): Promise<OkUnion> {
 return api.addLogMessage(params)
}
```


### `api.addNetworkStatistics()`
Adds the specified data to data usage statistics. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `entry` | [NetworkStatisticsEntryInputUnion](./td-inputs.md#networkstatisticsentryinputunion) | The network statistics entry with the data to be added to statistics |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface AddNetworkStatisticsParams {
  entry?: NetworkStatisticsEntryInputUnion
}

function addNetworkStatistics(api: ApiMethods, params: AddNetworkStatisticsParams): Promise<OkUnion> {
 return api.addNetworkStatistics(params)
}
```


### `api.addProxy()`
Adds a proxy server for network requests. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `server` | string | Proxy server IP address |
| `port` | number | Proxy server port |
| `enable` | boolean | True, if the proxy should be enabled |
| `type` | [ProxyTypeInputUnion](./td-inputs.md#proxytypeinputunion) | Proxy type |


**Returns type:** [ProxyUnion](./td-outputs.md#proxyunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface AddProxyParams {
  server?: string
  port?: number
  enable?: boolean
  type?: ProxyTypeInputUnion
}

function addProxy(api: ApiMethods, params: AddProxyParams): Promise<ProxyUnion> {
 return api.addProxy(params)
}
```


### `api.addRecentSticker()`
Manually adds a new sticker to the list of recently used stickers. The new sticker is added to the top of the list. If the sticker was already in the list, it is removed from the list first. Only stickers belonging to a sticker set can be added to this list


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `isAttached` | boolean | Pass true to add the sticker to the list of stickers recently attached to photo or video files; pass false to add the sticker to the list of recently sent stickers |
| `sticker` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | Sticker file to add |


**Returns type:** [StickersUnion](./td-outputs.md#stickersunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface AddRecentStickerParams {
  isAttached?: boolean
  sticker?: InputFileInputUnion
}

function addRecentSticker(api: ApiMethods, params: AddRecentStickerParams): Promise<StickersUnion> {
 return api.addRecentSticker(params)
}
```


### `api.addRecentlyFoundChat()`
Adds a chat to the list of recently found chats. The chat is added to the beginning of the list. If the chat is already in the list, it will be removed from the list first


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat to add |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface AddRecentlyFoundChatParams {
  chatId?: number
}

function addRecentlyFoundChat(api: ApiMethods, params: AddRecentlyFoundChatParams): Promise<OkUnion> {
 return api.addRecentlyFoundChat(params)
}
```


### `api.addSavedAnimation()`
Manually adds a new animation to the list of saved animations. The new animation is added to the beginning of the list. If the animation was already in the list, it is removed first. Only non-secret video animations with MIME type "video/mp4" can be added to the list


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `animation` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | The animation file to be added. Only animations known to the server (i.e. successfully sent via a message) can be added to the list |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface AddSavedAnimationParams {
  animation?: InputFileInputUnion
}

function addSavedAnimation(api: ApiMethods, params: AddSavedAnimationParams): Promise<OkUnion> {
 return api.addSavedAnimation(params)
}
```


### `api.addStickerToSet()`
Adds a new sticker to a set; for bots only. Returns the sticker set


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | Sticker set owner |
| `name` | string | Sticker set name |
| `sticker` | [InputStickerInput](./td-inputs.md#inputstickerinput) | Sticker to add to the set |


**Returns type:** [StickerSetUnion](./td-outputs.md#stickersetunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface AddStickerToSetParams {
  userId?: number
  name?: string
  sticker?: InputStickerInput
}

function addStickerToSet(api: ApiMethods, params: AddStickerToSetParams): Promise<StickerSetUnion> {
 return api.addStickerToSet(params)
}
```


### `api.answerCallbackQuery()`
Sets the result of a callback query; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `callbackQueryId` | number &#124; string | Identifier of the callback query |
| `text` | string | Text of the answer |
| `showAlert` | boolean | If true, an alert should be shown to the user instead of a toast notification |
| `url` | string | URL to be opened |
| `cacheTime` | number | Time during which the result of the query can be cached, in seconds |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface AnswerCallbackQueryParams {
  callbackQueryId?: number | string
  text?: string
  showAlert?: boolean
  url?: string
  cacheTime?: number
}

function answerCallbackQuery(api: ApiMethods, params: AnswerCallbackQueryParams): Promise<OkUnion> {
 return api.answerCallbackQuery(params)
}
```


### `api.answerCustomQuery()`
Answers a custom query; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `customQueryId` | number &#124; string | Identifier of a custom query |
| `data` | string | JSON-serialized answer to the query |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface AnswerCustomQueryParams {
  customQueryId?: number | string
  data?: string
}

function answerCustomQuery(api: ApiMethods, params: AnswerCustomQueryParams): Promise<OkUnion> {
 return api.answerCustomQuery(params)
}
```


### `api.answerInlineQuery()`
Sets the result of an inline query; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `inlineQueryId` | number &#124; string | Identifier of the inline query |
| `isPersonal` | boolean | True, if the result of the query can be cached for the specified user |
| `results` | [InputInlineQueryResultInputUnion[]](./td-inputs.md#inputinlinequeryresultinputunion) | The results of the query |
| `cacheTime` | number | Allowed time to cache the results of the query, in seconds |
| `nextOffset` | string | Offset for the next inline query; pass an empty string if there are no more results |
| `switchPmText` | string | If non-empty, this text should be shown on the button that opens a private chat with the bot and sends a start message to the bot with the parameter switch_pm_parameter |
| `switchPmParameter` | string | The parameter for the bot start message |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface AnswerInlineQueryParams {
  inlineQueryId?: number | string
  isPersonal?: boolean
  results?: InputInlineQueryResultInputUnion[]
  cacheTime?: number
  nextOffset?: string
  switchPmText?: string
  switchPmParameter?: string
}

function answerInlineQuery(api: ApiMethods, params: AnswerInlineQueryParams): Promise<OkUnion> {
 return api.answerInlineQuery(params)
}
```


### `api.answerPreCheckoutQuery()`
Sets the result of a pre-checkout query; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `preCheckoutQueryId` | number &#124; string | Identifier of the pre-checkout query |
| `errorMessage` | string | An error message, empty on success |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface AnswerPreCheckoutQueryParams {
  preCheckoutQueryId?: number | string
  errorMessage?: string
}

function answerPreCheckoutQuery(api: ApiMethods, params: AnswerPreCheckoutQueryParams): Promise<OkUnion> {
 return api.answerPreCheckoutQuery(params)
}
```


### `api.answerShippingQuery()`
Sets the result of a shipping query; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `shippingQueryId` | number &#124; string | Identifier of the shipping query |
| `shippingOptions` | [ShippingOptionInput[]](./td-inputs.md#shippingoptioninput) | Available shipping options |
| `errorMessage` | string | An error message, empty on success |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface AnswerShippingQueryParams {
  shippingQueryId?: number | string
  shippingOptions?: ShippingOptionInput[]
  errorMessage?: string
}

function answerShippingQuery(api: ApiMethods, params: AnswerShippingQueryParams): Promise<OkUnion> {
 return api.answerShippingQuery(params)
}
```


### `api.blockUser()`
Adds a user to the blacklist


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | User identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface BlockUserParams {
  userId?: number
}

function blockUser(api: ApiMethods, params: BlockUserParams): Promise<OkUnion> {
 return api.blockUser(params)
}
```


### `api.cancelDownloadFile()`
Stops the downloading of a file. If a file has already been downloaded, does nothing


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `fileId` | number | Identifier of a file to stop downloading |
| `onlyIfPending` | boolean | Pass true to stop downloading only if it hasn't been started, i.e. request hasn't been sent to server |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CancelDownloadFileParams {
  fileId?: number
  onlyIfPending?: boolean
}

function cancelDownloadFile(api: ApiMethods, params: CancelDownloadFileParams): Promise<OkUnion> {
 return api.cancelDownloadFile(params)
}
```


### `api.cancelUploadFile()`
Stops the uploading of a file. Supported only for files uploaded by using uploadFile. For other files the behavior is undefined


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `fileId` | number | Identifier of the file to stop uploading |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CancelUploadFileParams {
  fileId?: number
}

function cancelUploadFile(api: ApiMethods, params: CancelUploadFileParams): Promise<OkUnion> {
 return api.cancelUploadFile(params)
}
```


### `api.changeChatReportSpamState()`
Reports to the server whether a chat is a spam chat or not. Can be used only if ChatReportSpamState.can_report_spam is true. After this request, ChatReportSpamState.can_report_spam becomes false forever


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `isSpamChat` | boolean | If true, the chat will be reported as spam; otherwise it will be marked as not spam |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface ChangeChatReportSpamStateParams {
  chatId?: number
  isSpamChat?: boolean
}

function changeChatReportSpamState(api: ApiMethods, params: ChangeChatReportSpamStateParams): Promise<OkUnion> {
 return api.changeChatReportSpamState(params)
}
```


### `api.changeImportedContacts()`
Changes imported contacts using the list of current user contacts saved on the device. Imports newly added contacts and, if at least the file database is enabled, deletes recently deleted contacts. Query result depends on the result of the previous query, so only one query is possible at the same time


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `contacts` | [ContactInput[]](./td-inputs.md#contactinput) | The new list of contacts, contact's vCard are ignored and are not imported |


**Returns type:** [ImportedContactsUnion](./td-outputs.md#importedcontactsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface ChangeImportedContactsParams {
  contacts?: ContactInput[]
}

function changeImportedContacts(api: ApiMethods, params: ChangeImportedContactsParams): Promise<ImportedContactsUnion> {
 return api.changeImportedContacts(params)
}
```


### `api.changePhoneNumber()`
Changes the phone number of the user and sends an authentication code to the user's new phone number. On success, returns information about the sent code


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `phoneNumber` | string | The new phone number of the user in international format |
| `allowFlashCall` | boolean | Pass true if the code can be sent via flash call to the specified phone number |
| `isCurrentPhoneNumber` | boolean | Pass true if the phone number is used on the current device. Ignored if allow_flash_call is false |


**Returns type:** [AuthenticationCodeInfoUnion](./td-outputs.md#authenticationcodeinfounion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface ChangePhoneNumberParams {
  phoneNumber?: string
  allowFlashCall?: boolean
  isCurrentPhoneNumber?: boolean
}

function changePhoneNumber(api: ApiMethods, params: ChangePhoneNumberParams): Promise<AuthenticationCodeInfoUnion> {
 return api.changePhoneNumber(params)
}
```


### `api.changeStickerSet()`
Installs/uninstalls or activates/archives a sticker set


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `setId` | number &#124; string | Identifier of the sticker set |
| `isInstalled` | boolean | The new value of is_installed |
| `isArchived` | boolean | The new value of is_archived. A sticker set can't be installed and archived simultaneously |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface ChangeStickerSetParams {
  setId?: number | string
  isInstalled?: boolean
  isArchived?: boolean
}

function changeStickerSet(api: ApiMethods, params: ChangeStickerSetParams): Promise<OkUnion> {
 return api.changeStickerSet(params)
}
```


### `api.checkAuthenticationBotToken()`
Checks the authentication token of a bot; to log in as a bot. Works only when the current authorization state is authorizationStateWaitPhoneNumber. Can be used instead of setAuthenticationPhoneNumber and checkAuthenticationCode to log in


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `token` | string | The bot token |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CheckAuthenticationBotTokenParams {
  token?: string
}

function checkAuthenticationBotToken(api: ApiMethods, params: CheckAuthenticationBotTokenParams): Promise<OkUnion> {
 return api.checkAuthenticationBotToken(params)
}
```


### `api.checkAuthenticationCode()`
Checks the authentication code. Works only when the current authorization state is authorizationStateWaitCode


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `code` | string | The verification code received via SMS, Telegram message, phone call, or flash call |
| `firstName` | string | If the user is not yet registered, the first name of the user; 1-64 characters. You can also pass an empty string for unregistered user there to check verification code validness. In the latter case PHONE_NUMBER_UNOCCUPIED error will be returned for a valid code |
| `lastName` | string | If the user is not yet registered; the last name of the user; optional; 0-64 characters |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CheckAuthenticationCodeParams {
  code?: string
  firstName?: string
  lastName?: string
}

function checkAuthenticationCode(api: ApiMethods, params: CheckAuthenticationCodeParams): Promise<OkUnion> {
 return api.checkAuthenticationCode(params)
}
```


### `api.checkAuthenticationPassword()`
Checks the authentication password for correctness. Works only when the current authorization state is authorizationStateWaitPassword


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `password` | string | The password to check |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CheckAuthenticationPasswordParams {
  password?: string
}

function checkAuthenticationPassword(api: ApiMethods, params: CheckAuthenticationPasswordParams): Promise<OkUnion> {
 return api.checkAuthenticationPassword(params)
}
```


### `api.checkChangePhoneNumberCode()`
Checks the authentication code sent to confirm a new phone number of the user


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `code` | string | Verification code received by SMS, phone call or flash call |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CheckChangePhoneNumberCodeParams {
  code?: string
}

function checkChangePhoneNumberCode(api: ApiMethods, params: CheckChangePhoneNumberCodeParams): Promise<OkUnion> {
 return api.checkChangePhoneNumberCode(params)
}
```


### `api.checkChatInviteLink()`
Checks the validity of an invite link for a chat and returns information about the corresponding chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `inviteLink` | string | Invite link to be checked; should begin with "https://t.me/joinchat/", "https://telegram.me/joinchat/", or "https://telegram.dog/joinchat/" |


**Returns type:** [ChatInviteLinkInfoUnion](./td-outputs.md#chatinvitelinkinfounion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CheckChatInviteLinkParams {
  inviteLink?: string
}

function checkChatInviteLink(api: ApiMethods, params: CheckChatInviteLinkParams): Promise<ChatInviteLinkInfoUnion> {
 return api.checkChatInviteLink(params)
}
```


### `api.checkChatUsername()`
Checks whether a username can be set for a chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier; should be identifier of a supergroup chat, or a channel chat, or a private chat with self, or zero if chat is being created |
| `username` | string | Username to be checked |


**Returns type:** [CheckChatUsernameResultUnion](./td-outputs.md#checkchatusernameresultunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CheckChatUsernameParams {
  chatId?: number
  username?: string
}

function checkChatUsername(api: ApiMethods, params: CheckChatUsernameParams): Promise<CheckChatUsernameResultUnion> {
 return api.checkChatUsername(params)
}
```


### `api.checkDatabaseEncryptionKey()`
Checks the database encryption key for correctness. Works only when the current authorization state is authorizationStateWaitEncryptionKey


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `encryptionKey` | string | Encryption key to check or set up |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CheckDatabaseEncryptionKeyParams {
  encryptionKey?: string
}

function checkDatabaseEncryptionKey(api: ApiMethods, params: CheckDatabaseEncryptionKeyParams): Promise<OkUnion> {
 return api.checkDatabaseEncryptionKey(params)
}
```


### `api.checkEmailAddressVerificationCode()`
Checks the email address verification code for Telegram Passport


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `code` | string | Verification code |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CheckEmailAddressVerificationCodeParams {
  code?: string
}

function checkEmailAddressVerificationCode(api: ApiMethods, params: CheckEmailAddressVerificationCodeParams): Promise<OkUnion> {
 return api.checkEmailAddressVerificationCode(params)
}
```


### `api.checkPhoneNumberConfirmationCode()`
Checks phone number confirmation code


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `code` | string | The phone number confirmation code |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CheckPhoneNumberConfirmationCodeParams {
  code?: string
}

function checkPhoneNumberConfirmationCode(api: ApiMethods, params: CheckPhoneNumberConfirmationCodeParams): Promise<OkUnion> {
 return api.checkPhoneNumberConfirmationCode(params)
}
```


### `api.checkPhoneNumberVerificationCode()`
Checks the phone number verification code for Telegram Passport


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `code` | string | Verification code |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CheckPhoneNumberVerificationCodeParams {
  code?: string
}

function checkPhoneNumberVerificationCode(api: ApiMethods, params: CheckPhoneNumberVerificationCodeParams): Promise<OkUnion> {
 return api.checkPhoneNumberVerificationCode(params)
}
```


### `api.checkRecoveryEmailAddressCode()`
Checks the 2-step verification recovery email address verification code


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `code` | string | Verification code |


**Returns type:** [PasswordStateUnion](./td-outputs.md#passwordstateunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CheckRecoveryEmailAddressCodeParams {
  code?: string
}

function checkRecoveryEmailAddressCode(api: ApiMethods, params: CheckRecoveryEmailAddressCodeParams): Promise<PasswordStateUnion> {
 return api.checkRecoveryEmailAddressCode(params)
}
```


### `api.cleanFileName()`
Removes potentially dangerous characters from the name of a file. The encoding of the file name is supposed to be UTF-8. Returns an empty string on failure. This is an offline method. Can be called before authorization. Can be called synchronously


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `fileName` | string | File name or path to the file |


**Returns type:** [TextUnion](./td-outputs.md#textunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CleanFileNameParams {
  fileName?: string
}

function cleanFileName(api: ApiMethods, params: CleanFileNameParams): Promise<TextUnion> {
 return api.cleanFileName(params)
}
```


### `api.clearAllDraftMessages()`
Clears draft messages in all chats


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `excludeSecretChats` | boolean | If true, local draft messages in secret chats will not be cleared |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface ClearAllDraftMessagesParams {
  excludeSecretChats?: boolean
}

function clearAllDraftMessages(api: ApiMethods, params: ClearAllDraftMessagesParams): Promise<OkUnion> {
 return api.clearAllDraftMessages(params)
}
```


### `api.clearImportedContacts()`
Clears all imported contacts, contact list remains unchanged




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function clearImportedContacts(api: ApiMethods): Promise<OkUnion> {
 return api.clearImportedContacts()
}
```


### `api.clearRecentStickers()`
Clears the list of recently used stickers


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `isAttached` | boolean | Pass true to clear the list of stickers recently attached to photo or video files; pass false to clear the list of recently sent stickers |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface ClearRecentStickersParams {
  isAttached?: boolean
}

function clearRecentStickers(api: ApiMethods, params: ClearRecentStickersParams): Promise<OkUnion> {
 return api.clearRecentStickers(params)
}
```


### `api.clearRecentlyFoundChats()`
Clears the list of recently found chats




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function clearRecentlyFoundChats(api: ApiMethods): Promise<OkUnion> {
 return api.clearRecentlyFoundChats()
}
```


### `api.close()`
Closes the TDLib instance. All databases will be flushed to disk and properly closed. After the close completes, updateAuthorizationState with authorizationStateClosed will be sent




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function close(api: ApiMethods): Promise<OkUnion> {
 return api.close()
}
```


### `api.closeChat()`
Informs TDLib that the chat is closed by the user. Many useful activities depend on the chat being opened or closed


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CloseChatParams {
  chatId?: number
}

function closeChat(api: ApiMethods, params: CloseChatParams): Promise<OkUnion> {
 return api.closeChat(params)
}
```


### `api.closeSecretChat()`
Closes a secret chat, effectively transfering its state to secretChatStateClosed


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `secretChatId` | number | Secret chat identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CloseSecretChatParams {
  secretChatId?: number
}

function closeSecretChat(api: ApiMethods, params: CloseSecretChatParams): Promise<OkUnion> {
 return api.closeSecretChat(params)
}
```


### `api.createBasicGroupChat()`
Returns an existing chat corresponding to a known basic group


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `basicGroupId` | number | Basic group identifier |
| `force` | boolean | If true, the chat will be created without network request. In this case all information about the chat except its type, title and photo can be incorrect |


**Returns type:** [ChatUnion](./td-outputs.md#chatunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CreateBasicGroupChatParams {
  basicGroupId?: number
  force?: boolean
}

function createBasicGroupChat(api: ApiMethods, params: CreateBasicGroupChatParams): Promise<ChatUnion> {
 return api.createBasicGroupChat(params)
}
```


### `api.createCall()`
Creates a new call


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | Identifier of the user to be called |
| `protocol` | [CallProtocolInput](./td-inputs.md#callprotocolinput) | Description of the call protocols supported by the client |


**Returns type:** [CallIdUnion](./td-outputs.md#callidunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CreateCallParams {
  userId?: number
  protocol?: CallProtocolInput
}

function createCall(api: ApiMethods, params: CreateCallParams): Promise<CallIdUnion> {
 return api.createCall(params)
}
```


### `api.createNewBasicGroupChat()`
Creates a new basic group and sends a corresponding messageBasicGroupChatCreate. Returns the newly created chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userIds` | number[] | Identifiers of users to be added to the basic group |
| `title` | string | Title of the new basic group; 1-128 characters |


**Returns type:** [ChatUnion](./td-outputs.md#chatunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CreateNewBasicGroupChatParams {
  userIds?: number[]
  title?: string
}

function createNewBasicGroupChat(api: ApiMethods, params: CreateNewBasicGroupChatParams): Promise<ChatUnion> {
 return api.createNewBasicGroupChat(params)
}
```


### `api.createNewSecretChat()`
Creates a new secret chat. Returns the newly created chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | Identifier of the target user |


**Returns type:** [ChatUnion](./td-outputs.md#chatunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CreateNewSecretChatParams {
  userId?: number
}

function createNewSecretChat(api: ApiMethods, params: CreateNewSecretChatParams): Promise<ChatUnion> {
 return api.createNewSecretChat(params)
}
```


### `api.createNewStickerSet()`
Creates a new sticker set; for bots only. Returns the newly created sticker set


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | Sticker set owner |
| `title` | string | Sticker set title; 1-64 characters |
| `name` | string | Sticker set name. Can contain only English letters, digits and underscores. Must end with *"_by_<bot username>"* (*<bot_username>* is case insensitive); 1-64 characters |
| `isMasks` | boolean | True, if stickers are masks |
| `stickers` | [InputStickerInput[]](./td-inputs.md#inputstickerinput) | List of stickers to be added to the set |


**Returns type:** [StickerSetUnion](./td-outputs.md#stickersetunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CreateNewStickerSetParams {
  userId?: number
  title?: string
  name?: string
  isMasks?: boolean
  stickers?: InputStickerInput[]
}

function createNewStickerSet(api: ApiMethods, params: CreateNewStickerSetParams): Promise<StickerSetUnion> {
 return api.createNewStickerSet(params)
}
```


### `api.createNewSupergroupChat()`
Creates a new supergroup or channel and sends a corresponding messageSupergroupChatCreate. Returns the newly created chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `title` | string | Title of the new chat; 1-128 characters |
| `isChannel` | boolean | True, if a channel chat should be created |
| `description` | string | Chat description; 0-255 characters |


**Returns type:** [ChatUnion](./td-outputs.md#chatunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CreateNewSupergroupChatParams {
  title?: string
  isChannel?: boolean
  description?: string
}

function createNewSupergroupChat(api: ApiMethods, params: CreateNewSupergroupChatParams): Promise<ChatUnion> {
 return api.createNewSupergroupChat(params)
}
```


### `api.createPrivateChat()`
Returns an existing chat corresponding to a given user


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | User identifier |
| `force` | boolean | If true, the chat will be created without network request. In this case all information about the chat except its type, title and photo can be incorrect |


**Returns type:** [ChatUnion](./td-outputs.md#chatunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CreatePrivateChatParams {
  userId?: number
  force?: boolean
}

function createPrivateChat(api: ApiMethods, params: CreatePrivateChatParams): Promise<ChatUnion> {
 return api.createPrivateChat(params)
}
```


### `api.createSecretChat()`
Returns an existing chat corresponding to a known secret chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `secretChatId` | number | Secret chat identifier |


**Returns type:** [ChatUnion](./td-outputs.md#chatunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CreateSecretChatParams {
  secretChatId?: number
}

function createSecretChat(api: ApiMethods, params: CreateSecretChatParams): Promise<ChatUnion> {
 return api.createSecretChat(params)
}
```


### `api.createSupergroupChat()`
Returns an existing chat corresponding to a known supergroup or channel


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | Supergroup or channel identifier |
| `force` | boolean | If true, the chat will be created without network request. In this case all information about the chat except its type, title and photo can be incorrect |


**Returns type:** [ChatUnion](./td-outputs.md#chatunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CreateSupergroupChatParams {
  supergroupId?: number
  force?: boolean
}

function createSupergroupChat(api: ApiMethods, params: CreateSupergroupChatParams): Promise<ChatUnion> {
 return api.createSupergroupChat(params)
}
```


### `api.createTemporaryPassword()`
Creates a new temporary password for processing payments


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `password` | string | Persistent user password |
| `validFor` | number | Time during which the temporary password will be valid, in seconds; should be between 60 and 86400 |


**Returns type:** [TemporaryPasswordStateUnion](./td-outputs.md#temporarypasswordstateunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface CreateTemporaryPasswordParams {
  password?: string
  validFor?: number
}

function createTemporaryPassword(api: ApiMethods, params: CreateTemporaryPasswordParams): Promise<TemporaryPasswordStateUnion> {
 return api.createTemporaryPassword(params)
}
```


### `api.deleteAccount()`
Deletes the account of the current user, deleting all information associated with the user from the server. The phone number of the account can be used to create a new account. Can be called before authorization when the current authorization state is authorizationStateWaitPassword


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `reason` | string | The reason why the account was deleted; optional |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface DeleteAccountParams {
  reason?: string
}

function deleteAccount(api: ApiMethods, params: DeleteAccountParams): Promise<OkUnion> {
 return api.deleteAccount(params)
}
```


### `api.deleteChatHistory()`
Deletes all messages in the chat. Use Chat.can_be_deleted_only_for_self and Chat.can_be_deleted_for_all_users fields to find whether and how the method can be applied to the chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `removeFromChatList` | boolean | Pass true if the chat should be removed from the chat list |
| `revoke` | boolean | Pass true to try to delete chat history for all users |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface DeleteChatHistoryParams {
  chatId?: number
  removeFromChatList?: boolean
  revoke?: boolean
}

function deleteChatHistory(api: ApiMethods, params: DeleteChatHistoryParams): Promise<OkUnion> {
 return api.deleteChatHistory(params)
}
```


### `api.deleteChatMessagesFromUser()`
Deletes all messages sent by the specified user to a chat. Supported only in supergroups; requires can_delete_messages administrator privileges


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `userId` | number | User identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface DeleteChatMessagesFromUserParams {
  chatId?: number
  userId?: number
}

function deleteChatMessagesFromUser(api: ApiMethods, params: DeleteChatMessagesFromUserParams): Promise<OkUnion> {
 return api.deleteChatMessagesFromUser(params)
}
```


### `api.deleteChatReplyMarkup()`
Deletes the default reply markup from a chat. Must be called after a one-time keyboard or a ForceReply reply markup has been used. UpdateChatReplyMarkup will be sent if the reply markup will be changed


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `messageId` | number | The message identifier of the used keyboard |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface DeleteChatReplyMarkupParams {
  chatId?: number
  messageId?: number
}

function deleteChatReplyMarkup(api: ApiMethods, params: DeleteChatReplyMarkupParams): Promise<OkUnion> {
 return api.deleteChatReplyMarkup(params)
}
```


### `api.deleteFile()`
Deletes a file from the TDLib file cache


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `fileId` | number | Identifier of the file to delete |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface DeleteFileParams {
  fileId?: number
}

function deleteFile(api: ApiMethods, params: DeleteFileParams): Promise<OkUnion> {
 return api.deleteFile(params)
}
```


### `api.deleteLanguagePack()`
Deletes all information about a language pack in the current localization target. The language pack which is currently in use (including base language pack) or is being synchronized can't be deleted. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `languagePackId` | string | Identifier of the language pack to delete |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface DeleteLanguagePackParams {
  languagePackId?: string
}

function deleteLanguagePack(api: ApiMethods, params: DeleteLanguagePackParams): Promise<OkUnion> {
 return api.deleteLanguagePack(params)
}
```


### `api.deleteMessages()`
Deletes messages


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `messageIds` | number[] | Identifiers of the messages to be deleted |
| `revoke` | boolean | Pass true to try to delete messages for all chat members. Always true for supergroups, channels and secret chats |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface DeleteMessagesParams {
  chatId?: number
  messageIds?: number[]
  revoke?: boolean
}

function deleteMessages(api: ApiMethods, params: DeleteMessagesParams): Promise<OkUnion> {
 return api.deleteMessages(params)
}
```


### `api.deletePassportElement()`
Deletes a Telegram Passport element


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `type` | [PassportElementTypeInputUnion](./td-inputs.md#passportelementtypeinputunion) | Element type |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface DeletePassportElementParams {
  type?: PassportElementTypeInputUnion
}

function deletePassportElement(api: ApiMethods, params: DeletePassportElementParams): Promise<OkUnion> {
 return api.deletePassportElement(params)
}
```


### `api.deleteProfilePhoto()`
Deletes a profile photo. If something changes, updateUser will be sent


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `profilePhotoId` | number &#124; string | Identifier of the profile photo to delete |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface DeleteProfilePhotoParams {
  profilePhotoId?: number | string
}

function deleteProfilePhoto(api: ApiMethods, params: DeleteProfilePhotoParams): Promise<OkUnion> {
 return api.deleteProfilePhoto(params)
}
```


### `api.deleteSavedCredentials()`
Deletes saved credentials for all payment provider bots




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function deleteSavedCredentials(api: ApiMethods): Promise<OkUnion> {
 return api.deleteSavedCredentials()
}
```


### `api.deleteSavedOrderInfo()`
Deletes saved order info




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function deleteSavedOrderInfo(api: ApiMethods): Promise<OkUnion> {
 return api.deleteSavedOrderInfo()
}
```


### `api.deleteSupergroup()`
Deletes a supergroup or channel along with all messages in the corresponding chat. This will release the supergroup or channel username and remove all members; requires creator privileges in the supergroup or channel. Chats with more than 1000 members can't be deleted using this method


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | Identifier of the supergroup or channel |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface DeleteSupergroupParams {
  supergroupId?: number
}

function deleteSupergroup(api: ApiMethods, params: DeleteSupergroupParams): Promise<OkUnion> {
 return api.deleteSupergroup(params)
}
```


### `api.destroy()`
Closes the TDLib instance, destroying all local data without a proper logout. The current user session will remain in the list of all active sessions. All local data will be destroyed. After the destruction completes updateAuthorizationState with authorizationStateClosed will be sent




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function destroy(api: ApiMethods): Promise<OkUnion> {
 return api.destroy()
}
```


### `api.disableProxy()`
Disables the currently enabled proxy. Can be called before authorization




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function disableProxy(api: ApiMethods): Promise<OkUnion> {
 return api.disableProxy()
}
```


### `api.discardCall()`
Discards a call


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `callId` | number | Call identifier |
| `isDisconnected` | boolean | True, if the user was disconnected |
| `duration` | number | The call duration, in seconds |
| `connectionId` | number &#124; string | Identifier of the connection used during the call |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface DiscardCallParams {
  callId?: number
  isDisconnected?: boolean
  duration?: number
  connectionId?: number | string
}

function discardCall(api: ApiMethods, params: DiscardCallParams): Promise<OkUnion> {
 return api.discardCall(params)
}
```


### `api.disconnectAllWebsites()`
Disconnects all websites from the current user's Telegram account




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function disconnectAllWebsites(api: ApiMethods): Promise<OkUnion> {
 return api.disconnectAllWebsites()
}
```


### `api.disconnectWebsite()`
Disconnects website from the current user's Telegram account


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `websiteId` | number &#124; string | Website identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface DisconnectWebsiteParams {
  websiteId?: number | string
}

function disconnectWebsite(api: ApiMethods, params: DisconnectWebsiteParams): Promise<OkUnion> {
 return api.disconnectWebsite(params)
}
```


### `api.downloadFile()`
Downloads a file from the cloud. Download progress and completion of the download will be notified through updateFile updates


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `fileId` | number | Identifier of the file to download |
| `priority` | number | Priority of the download (1-32). The higher the priority, the earlier the file will be downloaded. If the priorities of two files are equal, then the last one for which downloadFile was called will be downloaded first |
| `offset` | number | The starting position from which the file should be downloaded |
| `limit` | number | Number of bytes which should be downloaded starting from the "offset" position before the download will be automatically cancelled; use 0 to download without a limit |
| `synchronous` | boolean | If false, this request returns file state just after the download has been started. If true, this request returns file state only after the download has succeeded, has failed, has been cancelled or a new downloadFile request with different offset/limit parameters was sent |


**Returns type:** [FileUnion](./td-outputs.md#fileunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface DownloadFileParams {
  fileId?: number
  priority?: number
  offset?: number
  limit?: number
  synchronous?: boolean
}

function downloadFile(api: ApiMethods, params: DownloadFileParams): Promise<FileUnion> {
 return api.downloadFile(params)
}
```


### `api.editCustomLanguagePackInfo()`
Edits information about a custom local language pack in the current localization target. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `info` | [LanguagePackInfoInput](./td-inputs.md#languagepackinfoinput) | New information about the custom local language pack |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface EditCustomLanguagePackInfoParams {
  info?: LanguagePackInfoInput
}

function editCustomLanguagePackInfo(api: ApiMethods, params: EditCustomLanguagePackInfoParams): Promise<OkUnion> {
 return api.editCustomLanguagePackInfo(params)
}
```


### `api.editInlineMessageCaption()`
Edits the caption of an inline message sent via a bot; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `inlineMessageId` | string | Inline message identifier |
| `replyMarkup` | [ReplyMarkupInputUnion](./td-inputs.md#replymarkupinputunion) | The new message reply markup |
| `caption` | [FormattedTextInput](./td-inputs.md#formattedtextinput) | New message content caption; 0-GetOption("message_caption_length_max") characters |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface EditInlineMessageCaptionParams {
  inlineMessageId?: string
  replyMarkup?: ReplyMarkupInputUnion
  caption?: FormattedTextInput
}

function editInlineMessageCaption(api: ApiMethods, params: EditInlineMessageCaptionParams): Promise<OkUnion> {
 return api.editInlineMessageCaption(params)
}
```


### `api.editInlineMessageLiveLocation()`
Edits the content of a live location in an inline message sent via a bot; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `inlineMessageId` | string | Inline message identifier |
| `replyMarkup` | [ReplyMarkupInputUnion](./td-inputs.md#replymarkupinputunion) | The new message reply markup |
| `location` | [LocationInput](./td-inputs.md#locationinput) | New location content of the message; may be null. Pass null to stop sharing the live location |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface EditInlineMessageLiveLocationParams {
  inlineMessageId?: string
  replyMarkup?: ReplyMarkupInputUnion
  location?: LocationInput
}

function editInlineMessageLiveLocation(api: ApiMethods, params: EditInlineMessageLiveLocationParams): Promise<OkUnion> {
 return api.editInlineMessageLiveLocation(params)
}
```


### `api.editInlineMessageMedia()`
Edits the content of a message with an animation, an audio, a document, a photo or a video in an inline message sent via a bot; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `inlineMessageId` | string | Inline message identifier |
| `replyMarkup` | [ReplyMarkupInputUnion](./td-inputs.md#replymarkupinputunion) | The new message reply markup; for bots only |
| `inputMessageContent` | [InputMessageContentInputUnion](./td-inputs.md#inputmessagecontentinputunion) | New content of the message. Must be one of the following types: InputMessageAnimation, InputMessageAudio, InputMessageDocument, InputMessagePhoto or InputMessageVideo |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface EditInlineMessageMediaParams {
  inlineMessageId?: string
  replyMarkup?: ReplyMarkupInputUnion
  inputMessageContent?: InputMessageContentInputUnion
}

function editInlineMessageMedia(api: ApiMethods, params: EditInlineMessageMediaParams): Promise<OkUnion> {
 return api.editInlineMessageMedia(params)
}
```


### `api.editInlineMessageReplyMarkup()`
Edits the reply markup of an inline message sent via a bot; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `inlineMessageId` | string | Inline message identifier |
| `replyMarkup` | [ReplyMarkupInputUnion](./td-inputs.md#replymarkupinputunion) | The new message reply markup |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface EditInlineMessageReplyMarkupParams {
  inlineMessageId?: string
  replyMarkup?: ReplyMarkupInputUnion
}

function editInlineMessageReplyMarkup(api: ApiMethods, params: EditInlineMessageReplyMarkupParams): Promise<OkUnion> {
 return api.editInlineMessageReplyMarkup(params)
}
```


### `api.editInlineMessageText()`
Edits the text of an inline text or game message sent via a bot; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `inlineMessageId` | string | Inline message identifier |
| `replyMarkup` | [ReplyMarkupInputUnion](./td-inputs.md#replymarkupinputunion) | The new message reply markup |
| `inputMessageContent` | [InputMessageContentInputUnion](./td-inputs.md#inputmessagecontentinputunion) | New text content of the message. Should be of type InputMessageText |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface EditInlineMessageTextParams {
  inlineMessageId?: string
  replyMarkup?: ReplyMarkupInputUnion
  inputMessageContent?: InputMessageContentInputUnion
}

function editInlineMessageText(api: ApiMethods, params: EditInlineMessageTextParams): Promise<OkUnion> {
 return api.editInlineMessageText(params)
}
```


### `api.editMessageCaption()`
Edits the message content caption. Returns the edited message after the edit is completed on the server side


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | The chat the message belongs to |
| `messageId` | number | Identifier of the message |
| `replyMarkup` | [ReplyMarkupInputUnion](./td-inputs.md#replymarkupinputunion) | The new message reply markup; for bots only |
| `caption` | [FormattedTextInput](./td-inputs.md#formattedtextinput) | New message content caption; 0-GetOption("message_caption_length_max") characters |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface EditMessageCaptionParams {
  chatId?: number
  messageId?: number
  replyMarkup?: ReplyMarkupInputUnion
  caption?: FormattedTextInput
}

function editMessageCaption(api: ApiMethods, params: EditMessageCaptionParams): Promise<MessageUnion> {
 return api.editMessageCaption(params)
}
```


### `api.editMessageLiveLocation()`
Edits the message content of a live location. Messages can be edited for a limited period of time specified in the live location. Returns the edited message after the edit is completed on the server side


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | The chat the message belongs to |
| `messageId` | number | Identifier of the message |
| `replyMarkup` | [ReplyMarkupInputUnion](./td-inputs.md#replymarkupinputunion) | The new message reply markup; for bots only |
| `location` | [LocationInput](./td-inputs.md#locationinput) | New location content of the message; may be null. Pass null to stop sharing the live location |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface EditMessageLiveLocationParams {
  chatId?: number
  messageId?: number
  replyMarkup?: ReplyMarkupInputUnion
  location?: LocationInput
}

function editMessageLiveLocation(api: ApiMethods, params: EditMessageLiveLocationParams): Promise<MessageUnion> {
 return api.editMessageLiveLocation(params)
}
```


### `api.editMessageMedia()`
Edits the content of a message with an animation, an audio, a document, a photo or a video. The media in the message can't be replaced if the message was set to self-destruct. Media can't be replaced by self-destructing media. Media in an album can be edited only to contain a photo or a video. Returns the edited message after the edit is completed on the server side


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | The chat the message belongs to |
| `messageId` | number | Identifier of the message |
| `replyMarkup` | [ReplyMarkupInputUnion](./td-inputs.md#replymarkupinputunion) | The new message reply markup; for bots only |
| `inputMessageContent` | [InputMessageContentInputUnion](./td-inputs.md#inputmessagecontentinputunion) | New content of the message. Must be one of the following types: InputMessageAnimation, InputMessageAudio, InputMessageDocument, InputMessagePhoto or InputMessageVideo |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface EditMessageMediaParams {
  chatId?: number
  messageId?: number
  replyMarkup?: ReplyMarkupInputUnion
  inputMessageContent?: InputMessageContentInputUnion
}

function editMessageMedia(api: ApiMethods, params: EditMessageMediaParams): Promise<MessageUnion> {
 return api.editMessageMedia(params)
}
```


### `api.editMessageReplyMarkup()`
Edits the message reply markup; for bots only. Returns the edited message after the edit is completed on the server side


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | The chat the message belongs to |
| `messageId` | number | Identifier of the message |
| `replyMarkup` | [ReplyMarkupInputUnion](./td-inputs.md#replymarkupinputunion) | The new message reply markup |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface EditMessageReplyMarkupParams {
  chatId?: number
  messageId?: number
  replyMarkup?: ReplyMarkupInputUnion
}

function editMessageReplyMarkup(api: ApiMethods, params: EditMessageReplyMarkupParams): Promise<MessageUnion> {
 return api.editMessageReplyMarkup(params)
}
```


### `api.editMessageText()`
Edits the text of a message (or a text of a game message). Returns the edited message after the edit is completed on the server side


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | The chat the message belongs to |
| `messageId` | number | Identifier of the message |
| `replyMarkup` | [ReplyMarkupInputUnion](./td-inputs.md#replymarkupinputunion) | The new message reply markup; for bots only |
| `inputMessageContent` | [InputMessageContentInputUnion](./td-inputs.md#inputmessagecontentinputunion) | New text content of the message. Should be of type InputMessageText |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface EditMessageTextParams {
  chatId?: number
  messageId?: number
  replyMarkup?: ReplyMarkupInputUnion
  inputMessageContent?: InputMessageContentInputUnion
}

function editMessageText(api: ApiMethods, params: EditMessageTextParams): Promise<MessageUnion> {
 return api.editMessageText(params)
}
```


### `api.editProxy()`
Edits an existing proxy server for network requests. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `proxyId` | number | Proxy identifier |
| `server` | string | Proxy server IP address |
| `port` | number | Proxy server port |
| `enable` | boolean | True, if the proxy should be enabled |
| `type` | [ProxyTypeInputUnion](./td-inputs.md#proxytypeinputunion) | Proxy type |


**Returns type:** [ProxyUnion](./td-outputs.md#proxyunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface EditProxyParams {
  proxyId?: number
  server?: string
  port?: number
  enable?: boolean
  type?: ProxyTypeInputUnion
}

function editProxy(api: ApiMethods, params: EditProxyParams): Promise<ProxyUnion> {
 return api.editProxy(params)
}
```


### `api.enableProxy()`
Enables a proxy. Only one proxy can be enabled at a time. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `proxyId` | number | Proxy identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface EnableProxyParams {
  proxyId?: number
}

function enableProxy(api: ApiMethods, params: EnableProxyParams): Promise<OkUnion> {
 return api.enableProxy(params)
}
```


### `api.finishFileGeneration()`
Finishes the file generation


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `generationId` | number &#124; string | The identifier of the generation process |
| `error` | [ErrorInput](./td-inputs.md#errorinput) | If set, means that file generation has failed and should be terminated |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface FinishFileGenerationParams {
  generationId?: number | string
  error?: ErrorInput
}

function finishFileGeneration(api: ApiMethods, params: FinishFileGenerationParams): Promise<OkUnion> {
 return api.finishFileGeneration(params)
}
```


### `api.forwardMessages()`
Forwards previously sent messages. Returns the forwarded messages in the same order as the message identifiers passed in message_ids. If a message can't be forwarded, null will be returned instead of the message


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat to which to forward messages |
| `fromChatId` | number | Identifier of the chat from which to forward messages |
| `messageIds` | number[] | Identifiers of the messages to forward |
| `disableNotification` | boolean | Pass true to disable notification for the message, doesn't work if messages are forwarded to a secret chat |
| `fromBackground` | boolean | Pass true if the message is sent from the background |
| `asAlbum` | boolean | True, if the messages should be grouped into an album after forwarding. For this to work, no more than 10 messages may be forwarded, and all of them must be photo or video messages |


**Returns type:** [MessagesUnion](./td-outputs.md#messagesunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface ForwardMessagesParams {
  chatId?: number
  fromChatId?: number
  messageIds?: number[]
  disableNotification?: boolean
  fromBackground?: boolean
  asAlbum?: boolean
}

function forwardMessages(api: ApiMethods, params: ForwardMessagesParams): Promise<MessagesUnion> {
 return api.forwardMessages(params)
}
```


### `api.generateChatInviteLink()`
Generates a new invite link for a chat; the previously generated link is revoked. Available for basic groups, supergroups, and channels. In basic groups this can be called only by the group's creator; in supergroups and channels this requires appropriate administrator rights


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |


**Returns type:** [ChatInviteLinkUnion](./td-outputs.md#chatinvitelinkunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GenerateChatInviteLinkParams {
  chatId?: number
}

function generateChatInviteLink(api: ApiMethods, params: GenerateChatInviteLinkParams): Promise<ChatInviteLinkUnion> {
 return api.generateChatInviteLink(params)
}
```


### `api.getAccountTtl()`
Returns the period of inactivity after which the account of the current user will automatically be deleted




**Returns type:** [AccountTtlUnion](./td-outputs.md#accountttlunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getAccountTtl(api: ApiMethods): Promise<AccountTtlUnion> {
 return api.getAccountTtl()
}
```


### `api.getActiveLiveLocationMessages()`
Returns all active live locations that should be updated by the client. The list is persistent across application restarts only if the message database is used




**Returns type:** [MessagesUnion](./td-outputs.md#messagesunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getActiveLiveLocationMessages(api: ApiMethods): Promise<MessagesUnion> {
 return api.getActiveLiveLocationMessages()
}
```


### `api.getActiveSessions()`
Returns all active sessions of the current user




**Returns type:** [SessionsUnion](./td-outputs.md#sessionsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getActiveSessions(api: ApiMethods): Promise<SessionsUnion> {
 return api.getActiveSessions()
}
```


### `api.getAllPassportElements()`
Returns all available Telegram Passport elements


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `password` | string | Password of the current user |


**Returns type:** [PassportElementsUnion](./td-outputs.md#passportelementsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetAllPassportElementsParams {
  password?: string
}

function getAllPassportElements(api: ApiMethods, params: GetAllPassportElementsParams): Promise<PassportElementsUnion> {
 return api.getAllPassportElements(params)
}
```


### `api.getApplicationConfig()`
Returns application config, provided by the server. Can be called before authorization




**Returns type:** [JsonValueUnion](./td-outputs.md#jsonvalueunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getApplicationConfig(api: ApiMethods): Promise<JsonValueUnion> {
 return api.getApplicationConfig()
}
```


### `api.getArchivedStickerSets()`
Returns a list of archived sticker sets


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `isMasks` | boolean | Pass true to return mask stickers sets; pass false to return ordinary sticker sets |
| `offsetStickerSetId` | number &#124; string | Identifier of the sticker set from which to return the result |
| `limit` | number | Maximum number of sticker sets to return |


**Returns type:** [StickerSetsUnion](./td-outputs.md#stickersetsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetArchivedStickerSetsParams {
  isMasks?: boolean
  offsetStickerSetId?: number | string
  limit?: number
}

function getArchivedStickerSets(api: ApiMethods, params: GetArchivedStickerSetsParams): Promise<StickerSetsUnion> {
 return api.getArchivedStickerSets(params)
}
```


### `api.getAttachedStickerSets()`
Returns a list of sticker sets attached to a file. Currently only photos and videos can have attached sticker sets


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `fileId` | number | File identifier |


**Returns type:** [StickerSetsUnion](./td-outputs.md#stickersetsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetAttachedStickerSetsParams {
  fileId?: number
}

function getAttachedStickerSets(api: ApiMethods, params: GetAttachedStickerSetsParams): Promise<StickerSetsUnion> {
 return api.getAttachedStickerSets(params)
}
```


### `api.getAuthorizationState()`
Returns the current authorization state; this is an offline request. For informational purposes only. Use updateAuthorizationState instead to maintain the current authorization state




**Returns type:** [AuthorizationStateUnion](./td-outputs.md#authorizationstateunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getAuthorizationState(api: ApiMethods): Promise<AuthorizationStateUnion> {
 return api.getAuthorizationState()
}
```


### `api.getBasicGroup()`
Returns information about a basic group by its identifier. This is an offline request if the current user is not a bot


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `basicGroupId` | number | Basic group identifier |


**Returns type:** [BasicGroupUnion](./td-outputs.md#basicgroupunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetBasicGroupParams {
  basicGroupId?: number
}

function getBasicGroup(api: ApiMethods, params: GetBasicGroupParams): Promise<BasicGroupUnion> {
 return api.getBasicGroup(params)
}
```


### `api.getBasicGroupFullInfo()`
Returns full information about a basic group by its identifier


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `basicGroupId` | number | Basic group identifier |


**Returns type:** [BasicGroupFullInfoUnion](./td-outputs.md#basicgroupfullinfounion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetBasicGroupFullInfoParams {
  basicGroupId?: number
}

function getBasicGroupFullInfo(api: ApiMethods, params: GetBasicGroupFullInfoParams): Promise<BasicGroupFullInfoUnion> {
 return api.getBasicGroupFullInfo(params)
}
```


### `api.getBlockedUsers()`
Returns users that were blocked by the current user


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `offset` | number | Number of users to skip in the result; must be non-negative |
| `limit` | number | Maximum number of users to return; up to 100 |


**Returns type:** [UsersUnion](./td-outputs.md#usersunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetBlockedUsersParams {
  offset?: number
  limit?: number
}

function getBlockedUsers(api: ApiMethods, params: GetBlockedUsersParams): Promise<UsersUnion> {
 return api.getBlockedUsers(params)
}
```


### `api.getCallbackQueryAnswer()`
Sends a callback query to a bot and returns an answer. Returns an error with code 502 if the bot fails to answer the query before the query timeout expires


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat with the message |
| `messageId` | number | Identifier of the message from which the query originated |
| `payload` | [CallbackQueryPayloadInputUnion](./td-inputs.md#callbackquerypayloadinputunion) | Query payload |


**Returns type:** [CallbackQueryAnswerUnion](./td-outputs.md#callbackqueryanswerunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetCallbackQueryAnswerParams {
  chatId?: number
  messageId?: number
  payload?: CallbackQueryPayloadInputUnion
}

function getCallbackQueryAnswer(api: ApiMethods, params: GetCallbackQueryAnswerParams): Promise<CallbackQueryAnswerUnion> {
 return api.getCallbackQueryAnswer(params)
}
```


### `api.getChat()`
Returns information about a chat by its identifier, this is an offline request if the current user is not a bot


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |


**Returns type:** [ChatUnion](./td-outputs.md#chatunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetChatParams {
  chatId?: number
}

function getChat(api: ApiMethods, params: GetChatParams): Promise<ChatUnion> {
 return api.getChat(params)
}
```


### `api.getChatAdministrators()`
Returns a list of users who are administrators of the chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |


**Returns type:** [UsersUnion](./td-outputs.md#usersunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetChatAdministratorsParams {
  chatId?: number
}

function getChatAdministrators(api: ApiMethods, params: GetChatAdministratorsParams): Promise<UsersUnion> {
 return api.getChatAdministrators(params)
}
```


### `api.getChatEventLog()`
Returns a list of service actions taken by chat members and administrators in the last 48 hours. Available only in supergroups and channels. Requires administrator rights. Returns results in reverse chronological order (i. e., in order of decreasing event_id)


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `query` | string | Search query by which to filter events |
| `fromEventId` | number &#124; string | Identifier of an event from which to return results. Use 0 to get results from the latest events |
| `limit` | number | Maximum number of events to return; up to 100 |
| `filters` | [ChatEventLogFiltersInput](./td-inputs.md#chateventlogfiltersinput) | The types of events to return. By default, all types will be returned |
| `userIds` | number[] | User identifiers by which to filter events. By default, events relating to all users will be returned |


**Returns type:** [ChatEventsUnion](./td-outputs.md#chateventsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetChatEventLogParams {
  chatId?: number
  query?: string
  fromEventId?: number | string
  limit?: number
  filters?: ChatEventLogFiltersInput
  userIds?: number[]
}

function getChatEventLog(api: ApiMethods, params: GetChatEventLogParams): Promise<ChatEventsUnion> {
 return api.getChatEventLog(params)
}
```


### `api.getChatHistory()`
Returns messages in a chat. The messages are returned in a reverse chronological order (i.e., in order of decreasing message_id). For optimal performance the number of returned messages is chosen by the library. This is an offline request if only_local is true


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `fromMessageId` | number | Identifier of the message starting from which history must be fetched; use 0 to get results from the last message |
| `offset` | number | Specify 0 to get results from exactly the from_message_id or a negative offset up to 99 to get additionally some newer messages |
| `limit` | number | The maximum number of messages to be returned; must be positive and can't be greater than 100. If the offset is negative, the limit must be greater or equal to -offset. Fewer messages may be returned than specified by the limit, even if the end of the message history has not been reached |
| `onlyLocal` | boolean | If true, returns only messages that are available locally without sending network requests |


**Returns type:** [MessagesUnion](./td-outputs.md#messagesunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetChatHistoryParams {
  chatId?: number
  fromMessageId?: number
  offset?: number
  limit?: number
  onlyLocal?: boolean
}

function getChatHistory(api: ApiMethods, params: GetChatHistoryParams): Promise<MessagesUnion> {
 return api.getChatHistory(params)
}
```


### `api.getChatMember()`
Returns information about a single member of a chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `userId` | number | User identifier |


**Returns type:** [ChatMemberUnion](./td-outputs.md#chatmemberunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetChatMemberParams {
  chatId?: number
  userId?: number
}

function getChatMember(api: ApiMethods, params: GetChatMemberParams): Promise<ChatMemberUnion> {
 return api.getChatMember(params)
}
```


### `api.getChatMessageByDate()`
Returns the last message sent in a chat no later than the specified date


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `date` | number | Point in time (Unix timestamp) relative to which to search for messages |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetChatMessageByDateParams {
  chatId?: number
  date?: number
}

function getChatMessageByDate(api: ApiMethods, params: GetChatMessageByDateParams): Promise<MessageUnion> {
 return api.getChatMessageByDate(params)
}
```


### `api.getChatMessageCount()`
Returns approximate number of messages of the specified type in the chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat in which to count messages |
| `filter` | [SearchMessagesFilterInputUnion](./td-inputs.md#searchmessagesfilterinputunion) | Filter for message content; searchMessagesFilterEmpty is unsupported in this function |
| `returnLocal` | boolean | If true, returns count that is available locally without sending network requests, returning -1 if the number of messages is unknown |


**Returns type:** [CountUnion](./td-outputs.md#countunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetChatMessageCountParams {
  chatId?: number
  filter?: SearchMessagesFilterInputUnion
  returnLocal?: boolean
}

function getChatMessageCount(api: ApiMethods, params: GetChatMessageCountParams): Promise<CountUnion> {
 return api.getChatMessageCount(params)
}
```


### `api.getChatNotificationSettingsExceptions()`
Returns list of chats with non-default notification settings


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `scope` | [NotificationSettingsScopeInputUnion](./td-inputs.md#notificationsettingsscopeinputunion) | If specified, only chats from the specified scope will be returned |
| `compareSound` | boolean | If true, also chats with non-default sound will be returned |


**Returns type:** [ChatsUnion](./td-outputs.md#chatsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetChatNotificationSettingsExceptionsParams {
  scope?: NotificationSettingsScopeInputUnion
  compareSound?: boolean
}

function getChatNotificationSettingsExceptions(api: ApiMethods, params: GetChatNotificationSettingsExceptionsParams): Promise<ChatsUnion> {
 return api.getChatNotificationSettingsExceptions(params)
}
```


### `api.getChatPinnedMessage()`
Returns information about a pinned chat message


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat the message belongs to |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetChatPinnedMessageParams {
  chatId?: number
}

function getChatPinnedMessage(api: ApiMethods, params: GetChatPinnedMessageParams): Promise<MessageUnion> {
 return api.getChatPinnedMessage(params)
}
```


### `api.getChatReportSpamState()`
Returns information on whether the current chat can be reported as spam


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |


**Returns type:** [ChatReportSpamStateUnion](./td-outputs.md#chatreportspamstateunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetChatReportSpamStateParams {
  chatId?: number
}

function getChatReportSpamState(api: ApiMethods, params: GetChatReportSpamStateParams): Promise<ChatReportSpamStateUnion> {
 return api.getChatReportSpamState(params)
}
```


### `api.getChatStatisticsUrl()`
Returns URL with the chat statistics. Currently this method can be used only for channels


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `parameters` | string | Parameters from "tg://statsrefresh?params=******" link |
| `isDark` | boolean | Pass true if a URL with the dark theme must be returned |


**Returns type:** [HttpUrlUnion](./td-outputs.md#httpurlunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetChatStatisticsUrlParams {
  chatId?: number
  parameters?: string
  isDark?: boolean
}

function getChatStatisticsUrl(api: ApiMethods, params: GetChatStatisticsUrlParams): Promise<HttpUrlUnion> {
 return api.getChatStatisticsUrl(params)
}
```


### `api.getChats()`
Returns an ordered list of chats. Chats are sorted by the pair (order, chat_id) in decreasing order. (For example, to get a list of chats from the beginning, the offset_order should be equal to a biggest signed 64-bit number 9223372036854775807 == 2^63 - 1). For optimal performance the number of returned chats is chosen by the library.


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `offsetOrder` | number &#124; string | Chat order to return chats from |
| `offsetChatId` | number | Chat identifier to return chats from |
| `limit` | number | The maximum number of chats to be returned. It is possible that fewer chats than the limit are returned even if the end of the list is not reached |


**Returns type:** [ChatsUnion](./td-outputs.md#chatsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetChatsParams {
  offsetOrder?: number | string
  offsetChatId?: number
  limit?: number
}

function getChats(api: ApiMethods, params: GetChatsParams): Promise<ChatsUnion> {
 return api.getChats(params)
}
```


### `api.getConnectedWebsites()`
Returns all website where the current user used Telegram to log in




**Returns type:** [ConnectedWebsitesUnion](./td-outputs.md#connectedwebsitesunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getConnectedWebsites(api: ApiMethods): Promise<ConnectedWebsitesUnion> {
 return api.getConnectedWebsites()
}
```


### `api.getContacts()`
Returns all user contacts




**Returns type:** [UsersUnion](./td-outputs.md#usersunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getContacts(api: ApiMethods): Promise<UsersUnion> {
 return api.getContacts()
}
```


### `api.getCountryCode()`
Uses current user IP to found his country. Returns two-letter ISO 3166-1 alpha-2 country code. Can be called before authorization




**Returns type:** [TextUnion](./td-outputs.md#textunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getCountryCode(api: ApiMethods): Promise<TextUnion> {
 return api.getCountryCode()
}
```


### `api.getCreatedPublicChats()`
Returns a list of public chats created by the user




**Returns type:** [ChatsUnion](./td-outputs.md#chatsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getCreatedPublicChats(api: ApiMethods): Promise<ChatsUnion> {
 return api.getCreatedPublicChats()
}
```


### `api.getCurrentState()`
Returns all updates needed to restore current TDLib state, i.e. all actual UpdateAuthorizationState/UpdateUser/UpdateNewChat and others. This is especially usefull if TDLib is run in a separate process. This is an offline method. Can be called before authorization




**Returns type:** [UpdatesUnion](./td-outputs.md#updatesunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getCurrentState(api: ApiMethods): Promise<UpdatesUnion> {
 return api.getCurrentState()
}
```


### `api.getDatabaseStatistics()`
Returns database statistics




**Returns type:** [DatabaseStatisticsUnion](./td-outputs.md#databasestatisticsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getDatabaseStatistics(api: ApiMethods): Promise<DatabaseStatisticsUnion> {
 return api.getDatabaseStatistics()
}
```


### `api.getDeepLinkInfo()`
Returns information about a tg:// deep link. Use "tg://need_update_for_some_feature" or "tg:some_unsupported_feature" for testing. Returns a 404 error for unknown links. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `link` | string | The link |


**Returns type:** [DeepLinkInfoUnion](./td-outputs.md#deeplinkinfounion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetDeepLinkInfoParams {
  link?: string
}

function getDeepLinkInfo(api: ApiMethods, params: GetDeepLinkInfoParams): Promise<DeepLinkInfoUnion> {
 return api.getDeepLinkInfo(params)
}
```


### `api.getFavoriteStickers()`
Returns favorite stickers




**Returns type:** [StickersUnion](./td-outputs.md#stickersunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getFavoriteStickers(api: ApiMethods): Promise<StickersUnion> {
 return api.getFavoriteStickers()
}
```


### `api.getFile()`
Returns information about a file; this is an offline request


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `fileId` | number | Identifier of the file to get |


**Returns type:** [FileUnion](./td-outputs.md#fileunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetFileParams {
  fileId?: number
}

function getFile(api: ApiMethods, params: GetFileParams): Promise<FileUnion> {
 return api.getFile(params)
}
```


### `api.getFileDownloadedPrefixSize()`
Returns file downloaded prefix size from a given offset


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `fileId` | number | Identifier of the file |
| `offset` | number | Offset from which downloaded prefix size should be calculated |


**Returns type:** [CountUnion](./td-outputs.md#countunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetFileDownloadedPrefixSizeParams {
  fileId?: number
  offset?: number
}

function getFileDownloadedPrefixSize(api: ApiMethods, params: GetFileDownloadedPrefixSizeParams): Promise<CountUnion> {
 return api.getFileDownloadedPrefixSize(params)
}
```


### `api.getFileExtension()`
Returns the extension of a file, guessed by its MIME type. Returns an empty string on failure. This is an offline method. Can be called before authorization. Can be called synchronously


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `mimeType` | string | The MIME type of the file |


**Returns type:** [TextUnion](./td-outputs.md#textunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetFileExtensionParams {
  mimeType?: string
}

function getFileExtension(api: ApiMethods, params: GetFileExtensionParams): Promise<TextUnion> {
 return api.getFileExtension(params)
}
```


### `api.getFileMimeType()`
Returns the MIME type of a file, guessed by its extension. Returns an empty string on failure. This is an offline method. Can be called before authorization. Can be called synchronously


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `fileName` | string | The name of the file or path to the file |


**Returns type:** [TextUnion](./td-outputs.md#textunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetFileMimeTypeParams {
  fileName?: string
}

function getFileMimeType(api: ApiMethods, params: GetFileMimeTypeParams): Promise<TextUnion> {
 return api.getFileMimeType(params)
}
```


### `api.getGameHighScores()`
Returns the high scores for a game and some part of the high score table in the range of the specified user; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | The chat that contains the message with the game |
| `messageId` | number | Identifier of the message |
| `userId` | number | User identifier |


**Returns type:** [GameHighScoresUnion](./td-outputs.md#gamehighscoresunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetGameHighScoresParams {
  chatId?: number
  messageId?: number
  userId?: number
}

function getGameHighScores(api: ApiMethods, params: GetGameHighScoresParams): Promise<GameHighScoresUnion> {
 return api.getGameHighScores(params)
}
```


### `api.getGroupsInCommon()`
Returns a list of common group chats with a given user. Chats are sorted by their type and creation date


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | User identifier |
| `offsetChatId` | number | Chat identifier starting from which to return chats; use 0 for the first request |
| `limit` | number | Maximum number of chats to be returned; up to 100 |


**Returns type:** [ChatsUnion](./td-outputs.md#chatsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetGroupsInCommonParams {
  userId?: number
  offsetChatId?: number
  limit?: number
}

function getGroupsInCommon(api: ApiMethods, params: GetGroupsInCommonParams): Promise<ChatsUnion> {
 return api.getGroupsInCommon(params)
}
```


### `api.getImportedContactCount()`
Returns the total number of imported contacts




**Returns type:** [CountUnion](./td-outputs.md#countunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getImportedContactCount(api: ApiMethods): Promise<CountUnion> {
 return api.getImportedContactCount()
}
```


### `api.getInlineGameHighScores()`
Returns game high scores and some part of the high score table in the range of the specified user; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `inlineMessageId` | string | Inline message identifier |
| `userId` | number | User identifier |


**Returns type:** [GameHighScoresUnion](./td-outputs.md#gamehighscoresunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetInlineGameHighScoresParams {
  inlineMessageId?: string
  userId?: number
}

function getInlineGameHighScores(api: ApiMethods, params: GetInlineGameHighScoresParams): Promise<GameHighScoresUnion> {
 return api.getInlineGameHighScores(params)
}
```


### `api.getInlineQueryResults()`
Sends an inline query to a bot and returns its results. Returns an error with code 502 if the bot fails to answer the query before the query timeout expires


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `botUserId` | number | The identifier of the target bot |
| `chatId` | number | Identifier of the chat, where the query was sent |
| `userLocation` | [LocationInput](./td-inputs.md#locationinput) | Location of the user, only if needed |
| `query` | string | Text of the query |
| `offset` | string | Offset of the first entry to return |


**Returns type:** [InlineQueryResultsUnion](./td-outputs.md#inlinequeryresultsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetInlineQueryResultsParams {
  botUserId?: number
  chatId?: number
  userLocation?: LocationInput
  query?: string
  offset?: string
}

function getInlineQueryResults(api: ApiMethods, params: GetInlineQueryResultsParams): Promise<InlineQueryResultsUnion> {
 return api.getInlineQueryResults(params)
}
```


### `api.getInstalledStickerSets()`
Returns a list of installed sticker sets


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `isMasks` | boolean | Pass true to return mask sticker sets; pass false to return ordinary sticker sets |


**Returns type:** [StickerSetsUnion](./td-outputs.md#stickersetsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetInstalledStickerSetsParams {
  isMasks?: boolean
}

function getInstalledStickerSets(api: ApiMethods, params: GetInstalledStickerSetsParams): Promise<StickerSetsUnion> {
 return api.getInstalledStickerSets(params)
}
```


### `api.getInviteText()`
Returns the default text for invitation messages to be used as a placeholder when the current user invites friends to Telegram




**Returns type:** [TextUnion](./td-outputs.md#textunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getInviteText(api: ApiMethods): Promise<TextUnion> {
 return api.getInviteText()
}
```


### `api.getJsonString()`
Converts a JsonValue object to corresponding JSON-serialized string. This is an offline method. Can be called before authorization. Can be called synchronously


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `jsonValue` | [JsonValueInputUnion](./td-inputs.md#jsonvalueinputunion) | The JsonValue object |


**Returns type:** [TextUnion](./td-outputs.md#textunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetJsonStringParams {
  jsonValue?: JsonValueInputUnion
}

function getJsonString(api: ApiMethods, params: GetJsonStringParams): Promise<TextUnion> {
 return api.getJsonString(params)
}
```


### `api.getJsonValue()`
Converts a JSON-serialized string to corresponding JsonValue object. This is an offline method. Can be called before authorization. Can be called synchronously


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `json` | string | The JSON-serialized string |


**Returns type:** [JsonValueUnion](./td-outputs.md#jsonvalueunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetJsonValueParams {
  json?: string
}

function getJsonValue(api: ApiMethods, params: GetJsonValueParams): Promise<JsonValueUnion> {
 return api.getJsonValue(params)
}
```


### `api.getLanguagePackInfo()`
Returns information about a language pack. Returned language pack identifier may be different from a provided one. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `languagePackId` | string | Language pack identifier |


**Returns type:** [LanguagePackInfoUnion](./td-outputs.md#languagepackinfounion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetLanguagePackInfoParams {
  languagePackId?: string
}

function getLanguagePackInfo(api: ApiMethods, params: GetLanguagePackInfoParams): Promise<LanguagePackInfoUnion> {
 return api.getLanguagePackInfo(params)
}
```


### `api.getLanguagePackString()`
Returns a string stored in the local database from the specified localization target and language pack by its key. Returns a 404 error if the string is not found. This is an offline method. Can be called before authorization. Can be called synchronously


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `languagePackDatabasePath` | string | Path to the language pack database in which strings are stored |
| `localizationTarget` | string | Localization target to which the language pack belongs |
| `languagePackId` | string | Language pack identifier |
| `key` | string | Language pack key of the string to be returned |


**Returns type:** [LanguagePackStringValueUnion](./td-outputs.md#languagepackstringvalueunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetLanguagePackStringParams {
  languagePackDatabasePath?: string
  localizationTarget?: string
  languagePackId?: string
  key?: string
}

function getLanguagePackString(api: ApiMethods, params: GetLanguagePackStringParams): Promise<LanguagePackStringValueUnion> {
 return api.getLanguagePackString(params)
}
```


### `api.getLanguagePackStrings()`
Returns strings from a language pack in the current localization target by their keys. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `languagePackId` | string | Language pack identifier of the strings to be returned |
| `keys` | string[] | Language pack keys of the strings to be returned; leave empty to request all available strings |


**Returns type:** [LanguagePackStringsUnion](./td-outputs.md#languagepackstringsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetLanguagePackStringsParams {
  languagePackId?: string
  keys?: string[]
}

function getLanguagePackStrings(api: ApiMethods, params: GetLanguagePackStringsParams): Promise<LanguagePackStringsUnion> {
 return api.getLanguagePackStrings(params)
}
```


### `api.getLocalizationTargetInfo()`
Returns information about the current localization target. This is an offline request if only_local is true. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `onlyLocal` | boolean | If true, returns only locally available information without sending network requests |


**Returns type:** [LocalizationTargetInfoUnion](./td-outputs.md#localizationtargetinfounion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetLocalizationTargetInfoParams {
  onlyLocal?: boolean
}

function getLocalizationTargetInfo(api: ApiMethods, params: GetLocalizationTargetInfoParams): Promise<LocalizationTargetInfoUnion> {
 return api.getLocalizationTargetInfo(params)
}
```


### `api.getLogStream()`
Returns information about currently used log stream for internal logging of TDLib. This is an offline method. Can be called before authorization. Can be called synchronously




**Returns type:** [LogStreamUnion](./td-outputs.md#logstreamunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getLogStream(api: ApiMethods): Promise<LogStreamUnion> {
 return api.getLogStream()
}
```


### `api.getLogTagVerbosityLevel()`
Returns current verbosity level for a specified TDLib internal log tag. This is an offline method. Can be called before authorization. Can be called synchronously


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `tag` | string | Logging tag to change verbosity level |


**Returns type:** [LogVerbosityLevelUnion](./td-outputs.md#logverbositylevelunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetLogTagVerbosityLevelParams {
  tag?: string
}

function getLogTagVerbosityLevel(api: ApiMethods, params: GetLogTagVerbosityLevelParams): Promise<LogVerbosityLevelUnion> {
 return api.getLogTagVerbosityLevel(params)
}
```


### `api.getLogTags()`
Returns list of available TDLib internal log tags, for example, ["actor", "binlog", "connections", "notifications", "proxy"]. This is an offline method. Can be called before authorization. Can be called synchronously




**Returns type:** [LogTagsUnion](./td-outputs.md#logtagsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getLogTags(api: ApiMethods): Promise<LogTagsUnion> {
 return api.getLogTags()
}
```


### `api.getLogVerbosityLevel()`
Returns current verbosity level of the internal logging of TDLib. This is an offline method. Can be called before authorization. Can be called synchronously




**Returns type:** [LogVerbosityLevelUnion](./td-outputs.md#logverbositylevelunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getLogVerbosityLevel(api: ApiMethods): Promise<LogVerbosityLevelUnion> {
 return api.getLogVerbosityLevel()
}
```


### `api.getMapThumbnailFile()`
Returns information about a file with a map thumbnail in PNG format. Only map thumbnail files with size less than 1MB can be downloaded


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `location` | [LocationInput](./td-inputs.md#locationinput) | Location of the map center |
| `zoom` | number | Map zoom level; 13-20 |
| `width` | number | Map width in pixels before applying scale; 16-1024 |
| `height` | number | Map height in pixels before applying scale; 16-1024 |
| `scale` | number | Map scale; 1-3 |
| `chatId` | number | Identifier of a chat, in which the thumbnail will be shown. Use 0 if unknown |


**Returns type:** [FileUnion](./td-outputs.md#fileunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetMapThumbnailFileParams {
  location?: LocationInput
  zoom?: number
  width?: number
  height?: number
  scale?: number
  chatId?: number
}

function getMapThumbnailFile(api: ApiMethods, params: GetMapThumbnailFileParams): Promise<FileUnion> {
 return api.getMapThumbnailFile(params)
}
```


### `api.getMe()`
Returns the current user




**Returns type:** [UserUnion](./td-outputs.md#userunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getMe(api: ApiMethods): Promise<UserUnion> {
 return api.getMe()
}
```


### `api.getMessage()`
Returns information about a message


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat the message belongs to |
| `messageId` | number | Identifier of the message to get |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetMessageParams {
  chatId?: number
  messageId?: number
}

function getMessage(api: ApiMethods, params: GetMessageParams): Promise<MessageUnion> {
 return api.getMessage(params)
}
```


### `api.getMessageLink()`
Returns a private HTTPS link to a message in a chat. Available only for already sent messages in supergroups and channels. The link will work only for members of the chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat to which the message belongs |
| `messageId` | number | Identifier of the message |


**Returns type:** [HttpUrlUnion](./td-outputs.md#httpurlunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetMessageLinkParams {
  chatId?: number
  messageId?: number
}

function getMessageLink(api: ApiMethods, params: GetMessageLinkParams): Promise<HttpUrlUnion> {
 return api.getMessageLink(params)
}
```


### `api.getMessageLocally()`
Returns information about a message, if it is available locally without sending network request. This is an offline request


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat the message belongs to |
| `messageId` | number | Identifier of the message to get |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetMessageLocallyParams {
  chatId?: number
  messageId?: number
}

function getMessageLocally(api: ApiMethods, params: GetMessageLocallyParams): Promise<MessageUnion> {
 return api.getMessageLocally(params)
}
```


### `api.getMessages()`
Returns information about messages. If a message is not found, returns null on the corresponding position of the result


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat the messages belong to |
| `messageIds` | number[] | Identifiers of the messages to get |


**Returns type:** [MessagesUnion](./td-outputs.md#messagesunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetMessagesParams {
  chatId?: number
  messageIds?: number[]
}

function getMessages(api: ApiMethods, params: GetMessagesParams): Promise<MessagesUnion> {
 return api.getMessages(params)
}
```


### `api.getNetworkStatistics()`
Returns network data usage statistics. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `onlyCurrent` | boolean | If true, returns only data for the current library launch |


**Returns type:** [NetworkStatisticsUnion](./td-outputs.md#networkstatisticsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetNetworkStatisticsParams {
  onlyCurrent?: boolean
}

function getNetworkStatistics(api: ApiMethods, params: GetNetworkStatisticsParams): Promise<NetworkStatisticsUnion> {
 return api.getNetworkStatistics(params)
}
```


### `api.getOption()`
Returns the value of an option by its name. (Check the list of available options on https://core.telegram.org/tdlib/options.) Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `name` | string | The name of the option |


**Returns type:** [OptionValueUnion](./td-outputs.md#optionvalueunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetOptionParams {
  name?: string
}

function getOption(api: ApiMethods, params: GetOptionParams): Promise<OptionValueUnion> {
 return api.getOption(params)
}
```


### `api.getPassportAuthorizationForm()`
Returns a Telegram Passport authorization form for sharing data with a service


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `botUserId` | number | User identifier of the service's bot |
| `scope` | string | Telegram Passport element types requested by the service |
| `publicKey` | string | Service's public_key |
| `nonce` | string | Authorization form nonce provided by the service |


**Returns type:** [PassportAuthorizationFormUnion](./td-outputs.md#passportauthorizationformunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetPassportAuthorizationFormParams {
  botUserId?: number
  scope?: string
  publicKey?: string
  nonce?: string
}

function getPassportAuthorizationForm(api: ApiMethods, params: GetPassportAuthorizationFormParams): Promise<PassportAuthorizationFormUnion> {
 return api.getPassportAuthorizationForm(params)
}
```


### `api.getPassportAuthorizationFormAvailableElements()`
Returns already available Telegram Passport elements suitable for completing a Telegram Passport authorization form. Result can be received only once for each authorization form


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `autorizationFormId` | number | Authorization form identifier |
| `password` | string | Password of the current user |


**Returns type:** [PassportElementsWithErrorsUnion](./td-outputs.md#passportelementswitherrorsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetPassportAuthorizationFormAvailableElementsParams {
  autorizationFormId?: number
  password?: string
}

function getPassportAuthorizationFormAvailableElements(api: ApiMethods, params: GetPassportAuthorizationFormAvailableElementsParams): Promise<PassportElementsWithErrorsUnion> {
 return api.getPassportAuthorizationFormAvailableElements(params)
}
```


### `api.getPassportElement()`
Returns one of the available Telegram Passport elements


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `type` | [PassportElementTypeInputUnion](./td-inputs.md#passportelementtypeinputunion) | Telegram Passport element type |
| `password` | string | Password of the current user |


**Returns type:** [PassportElementUnion](./td-outputs.md#passportelementunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetPassportElementParams {
  type?: PassportElementTypeInputUnion
  password?: string
}

function getPassportElement(api: ApiMethods, params: GetPassportElementParams): Promise<PassportElementUnion> {
 return api.getPassportElement(params)
}
```


### `api.getPasswordState()`
Returns the current state of 2-step verification




**Returns type:** [PasswordStateUnion](./td-outputs.md#passwordstateunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getPasswordState(api: ApiMethods): Promise<PasswordStateUnion> {
 return api.getPasswordState()
}
```


### `api.getPaymentForm()`
Returns an invoice payment form. This method should be called when the user presses inlineKeyboardButtonBuy


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier of the Invoice message |
| `messageId` | number | Message identifier |


**Returns type:** [PaymentFormUnion](./td-outputs.md#paymentformunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetPaymentFormParams {
  chatId?: number
  messageId?: number
}

function getPaymentForm(api: ApiMethods, params: GetPaymentFormParams): Promise<PaymentFormUnion> {
 return api.getPaymentForm(params)
}
```


### `api.getPaymentReceipt()`
Returns information about a successful payment


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier of the PaymentSuccessful message |
| `messageId` | number | Message identifier |


**Returns type:** [PaymentReceiptUnion](./td-outputs.md#paymentreceiptunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetPaymentReceiptParams {
  chatId?: number
  messageId?: number
}

function getPaymentReceipt(api: ApiMethods, params: GetPaymentReceiptParams): Promise<PaymentReceiptUnion> {
 return api.getPaymentReceipt(params)
}
```


### `api.getPreferredCountryLanguage()`
Returns an IETF language tag of the language preferred in the country, which should be used to fill native fields in Telegram Passport personal details. Returns a 404 error if unknown


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `countryCode` | string | A two-letter ISO 3166-1 alpha-2 country code |


**Returns type:** [TextUnion](./td-outputs.md#textunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetPreferredCountryLanguageParams {
  countryCode?: string
}

function getPreferredCountryLanguage(api: ApiMethods, params: GetPreferredCountryLanguageParams): Promise<TextUnion> {
 return api.getPreferredCountryLanguage(params)
}
```


### `api.getProxies()`
Returns list of proxies that are currently set up. Can be called before authorization




**Returns type:** [ProxiesUnion](./td-outputs.md#proxiesunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getProxies(api: ApiMethods): Promise<ProxiesUnion> {
 return api.getProxies()
}
```


### `api.getProxyLink()`
Returns an HTTPS link, which can be used to add a proxy. Available only for SOCKS5 and MTProto proxies. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `proxyId` | number | Proxy identifier |


**Returns type:** [TextUnion](./td-outputs.md#textunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetProxyLinkParams {
  proxyId?: number
}

function getProxyLink(api: ApiMethods, params: GetProxyLinkParams): Promise<TextUnion> {
 return api.getProxyLink(params)
}
```


### `api.getPublicMessageLink()`
Returns a public HTTPS link to a message. Available only for messages in public supergroups and channels


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat to which the message belongs |
| `messageId` | number | Identifier of the message |
| `forAlbum` | boolean | Pass true if a link for a whole media album should be returned |


**Returns type:** [PublicMessageLinkUnion](./td-outputs.md#publicmessagelinkunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetPublicMessageLinkParams {
  chatId?: number
  messageId?: number
  forAlbum?: boolean
}

function getPublicMessageLink(api: ApiMethods, params: GetPublicMessageLinkParams): Promise<PublicMessageLinkUnion> {
 return api.getPublicMessageLink(params)
}
```


### `api.getPushReceiverId()`
Returns a globally unique push notification subscription identifier for identification of an account, which has received a push notification. This is an offline method. Can be called before authorization. Can be called synchronously


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `payload` | string | JSON-encoded push notification payload |


**Returns type:** [PushReceiverIdUnion](./td-outputs.md#pushreceiveridunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetPushReceiverIdParams {
  payload?: string
}

function getPushReceiverId(api: ApiMethods, params: GetPushReceiverIdParams): Promise<PushReceiverIdUnion> {
 return api.getPushReceiverId(params)
}
```


### `api.getRecentInlineBots()`
Returns up to 20 recently used inline bots in the order of their last usage




**Returns type:** [UsersUnion](./td-outputs.md#usersunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getRecentInlineBots(api: ApiMethods): Promise<UsersUnion> {
 return api.getRecentInlineBots()
}
```


### `api.getRecentStickers()`
Returns a list of recently used stickers


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `isAttached` | boolean | Pass true to return stickers and masks that were recently attached to photos or video files; pass false to return recently sent stickers |


**Returns type:** [StickersUnion](./td-outputs.md#stickersunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetRecentStickersParams {
  isAttached?: boolean
}

function getRecentStickers(api: ApiMethods, params: GetRecentStickersParams): Promise<StickersUnion> {
 return api.getRecentStickers(params)
}
```


### `api.getRecentlyVisitedTMeUrls()`
Returns t.me URLs recently visited by a newly registered user


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `referrer` | string | Google Play referrer to identify the user |


**Returns type:** [TMeUrlsUnion](./td-outputs.md#tmeurlsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetRecentlyVisitedTMeUrlsParams {
  referrer?: string
}

function getRecentlyVisitedTMeUrls(api: ApiMethods, params: GetRecentlyVisitedTMeUrlsParams): Promise<TMeUrlsUnion> {
 return api.getRecentlyVisitedTMeUrls(params)
}
```


### `api.getRecoveryEmailAddress()`
Returns a 2-step verification recovery email address that was previously set up. This method can be used to verify a password provided by the user


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `password` | string | The password for the current user |


**Returns type:** [RecoveryEmailAddressUnion](./td-outputs.md#recoveryemailaddressunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetRecoveryEmailAddressParams {
  password?: string
}

function getRecoveryEmailAddress(api: ApiMethods, params: GetRecoveryEmailAddressParams): Promise<RecoveryEmailAddressUnion> {
 return api.getRecoveryEmailAddress(params)
}
```


### `api.getRemoteFile()`
Returns information about a file by its remote ID; this is an offline request. Can be used to register a URL as a file for further uploading, or sending as a message


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `remoteFileId` | string | Remote identifier of the file to get |
| `fileType` | [FileTypeInputUnion](./td-inputs.md#filetypeinputunion) | File type, if known |


**Returns type:** [FileUnion](./td-outputs.md#fileunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetRemoteFileParams {
  remoteFileId?: string
  fileType?: FileTypeInputUnion
}

function getRemoteFile(api: ApiMethods, params: GetRemoteFileParams): Promise<FileUnion> {
 return api.getRemoteFile(params)
}
```


### `api.getRepliedMessage()`
Returns information about a message that is replied by given message


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat the message belongs to |
| `messageId` | number | Identifier of the message reply to which get |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetRepliedMessageParams {
  chatId?: number
  messageId?: number
}

function getRepliedMessage(api: ApiMethods, params: GetRepliedMessageParams): Promise<MessageUnion> {
 return api.getRepliedMessage(params)
}
```


### `api.getSavedAnimations()`
Returns saved animations




**Returns type:** [AnimationsUnion](./td-outputs.md#animationsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getSavedAnimations(api: ApiMethods): Promise<AnimationsUnion> {
 return api.getSavedAnimations()
}
```


### `api.getSavedOrderInfo()`
Returns saved order info, if any




**Returns type:** [OrderInfoUnion](./td-outputs.md#orderinfounion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getSavedOrderInfo(api: ApiMethods): Promise<OrderInfoUnion> {
 return api.getSavedOrderInfo()
}
```


### `api.getScopeNotificationSettings()`
Returns the notification settings for chats of a given type


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `scope` | [NotificationSettingsScopeInputUnion](./td-inputs.md#notificationsettingsscopeinputunion) | Types of chats for which to return the notification settings information |


**Returns type:** [ScopeNotificationSettingsUnion](./td-outputs.md#scopenotificationsettingsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetScopeNotificationSettingsParams {
  scope?: NotificationSettingsScopeInputUnion
}

function getScopeNotificationSettings(api: ApiMethods, params: GetScopeNotificationSettingsParams): Promise<ScopeNotificationSettingsUnion> {
 return api.getScopeNotificationSettings(params)
}
```


### `api.getSecretChat()`
Returns information about a secret chat by its identifier. This is an offline request


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `secretChatId` | number | Secret chat identifier |


**Returns type:** [SecretChatUnion](./td-outputs.md#secretchatunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetSecretChatParams {
  secretChatId?: number
}

function getSecretChat(api: ApiMethods, params: GetSecretChatParams): Promise<SecretChatUnion> {
 return api.getSecretChat(params)
}
```


### `api.getStickerEmojis()`
Returns emoji corresponding to a sticker


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `sticker` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | Sticker file identifier |


**Returns type:** [StickerEmojisUnion](./td-outputs.md#stickeremojisunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetStickerEmojisParams {
  sticker?: InputFileInputUnion
}

function getStickerEmojis(api: ApiMethods, params: GetStickerEmojisParams): Promise<StickerEmojisUnion> {
 return api.getStickerEmojis(params)
}
```


### `api.getStickerSet()`
Returns information about a sticker set by its identifier


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `setId` | number &#124; string | Identifier of the sticker set |


**Returns type:** [StickerSetUnion](./td-outputs.md#stickersetunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetStickerSetParams {
  setId?: number | string
}

function getStickerSet(api: ApiMethods, params: GetStickerSetParams): Promise<StickerSetUnion> {
 return api.getStickerSet(params)
}
```


### `api.getStickers()`
Returns stickers from the installed sticker sets that correspond to a given emoji. If the emoji is not empty, favorite and recently used stickers may also be returned


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `emoji` | string | String representation of emoji. If empty, returns all known installed stickers |
| `limit` | number | Maximum number of stickers to be returned |


**Returns type:** [StickersUnion](./td-outputs.md#stickersunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetStickersParams {
  emoji?: string
  limit?: number
}

function getStickers(api: ApiMethods, params: GetStickersParams): Promise<StickersUnion> {
 return api.getStickers(params)
}
```


### `api.getStorageStatistics()`
Returns storage usage statistics. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatLimit` | number | Maximum number of chats with the largest storage usage for which separate statistics should be returned. All other chats will be grouped in entries with chat_id == 0. If the chat info database is not used, the chat_limit is ignored and is always set to 0 |


**Returns type:** [StorageStatisticsUnion](./td-outputs.md#storagestatisticsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetStorageStatisticsParams {
  chatLimit?: number
}

function getStorageStatistics(api: ApiMethods, params: GetStorageStatisticsParams): Promise<StorageStatisticsUnion> {
 return api.getStorageStatistics(params)
}
```


### `api.getStorageStatisticsFast()`
Quickly returns approximate storage usage statistics. Can be called before authorization




**Returns type:** [StorageStatisticsFastUnion](./td-outputs.md#storagestatisticsfastunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getStorageStatisticsFast(api: ApiMethods): Promise<StorageStatisticsFastUnion> {
 return api.getStorageStatisticsFast()
}
```


### `api.getSupergroup()`
Returns information about a supergroup or channel by its identifier. This is an offline request if the current user is not a bot


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | Supergroup or channel identifier |


**Returns type:** [SupergroupUnion](./td-outputs.md#supergroupunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetSupergroupParams {
  supergroupId?: number
}

function getSupergroup(api: ApiMethods, params: GetSupergroupParams): Promise<SupergroupUnion> {
 return api.getSupergroup(params)
}
```


### `api.getSupergroupFullInfo()`
Returns full information about a supergroup or channel by its identifier, cached for up to 1 minute


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | Supergroup or channel identifier |


**Returns type:** [SupergroupFullInfoUnion](./td-outputs.md#supergroupfullinfounion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetSupergroupFullInfoParams {
  supergroupId?: number
}

function getSupergroupFullInfo(api: ApiMethods, params: GetSupergroupFullInfoParams): Promise<SupergroupFullInfoUnion> {
 return api.getSupergroupFullInfo(params)
}
```


### `api.getSupergroupMembers()`
Returns information about members or banned users in a supergroup or channel. Can be used only if SupergroupFullInfo.can_get_members == true; additionally, administrator privileges may be required for some filters


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | Identifier of the supergroup or channel |
| `filter` | [SupergroupMembersFilterInputUnion](./td-inputs.md#supergroupmembersfilterinputunion) | The type of users to return. By default, supergroupMembersRecent |
| `offset` | number | Number of users to skip |
| `limit` | number | The maximum number of users be returned; up to 200 |


**Returns type:** [ChatMembersUnion](./td-outputs.md#chatmembersunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetSupergroupMembersParams {
  supergroupId?: number
  filter?: SupergroupMembersFilterInputUnion
  offset?: number
  limit?: number
}

function getSupergroupMembers(api: ApiMethods, params: GetSupergroupMembersParams): Promise<ChatMembersUnion> {
 return api.getSupergroupMembers(params)
}
```


### `api.getSupportUser()`
Returns a user that can be contacted to get support




**Returns type:** [UserUnion](./td-outputs.md#userunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getSupportUser(api: ApiMethods): Promise<UserUnion> {
 return api.getSupportUser()
}
```


### `api.getTemporaryPasswordState()`
Returns information about the current temporary password




**Returns type:** [TemporaryPasswordStateUnion](./td-outputs.md#temporarypasswordstateunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getTemporaryPasswordState(api: ApiMethods): Promise<TemporaryPasswordStateUnion> {
 return api.getTemporaryPasswordState()
}
```


### `api.getTextEntities()`
Returns all entities (mentions, hashtags, cashtags, bot commands, URLs, and email addresses) contained in the text. This is an offline method. Can be called before authorization. Can be called synchronously


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `text` | string | The text in which to look for entites |


**Returns type:** [TextEntitiesUnion](./td-outputs.md#textentitiesunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetTextEntitiesParams {
  text?: string
}

function getTextEntities(api: ApiMethods, params: GetTextEntitiesParams): Promise<TextEntitiesUnion> {
 return api.getTextEntities(params)
}
```


### `api.getTopChats()`
Returns a list of frequently used chats. Supported only if the chat info database is enabled


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `category` | [TopChatCategoryInputUnion](./td-inputs.md#topchatcategoryinputunion) | Category of chats to be returned |
| `limit` | number | Maximum number of chats to be returned; up to 30 |


**Returns type:** [ChatsUnion](./td-outputs.md#chatsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetTopChatsParams {
  category?: TopChatCategoryInputUnion
  limit?: number
}

function getTopChats(api: ApiMethods, params: GetTopChatsParams): Promise<ChatsUnion> {
 return api.getTopChats(params)
}
```


### `api.getTrendingStickerSets()`
Returns a list of trending sticker sets




**Returns type:** [StickerSetsUnion](./td-outputs.md#stickersetsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getTrendingStickerSets(api: ApiMethods): Promise<StickerSetsUnion> {
 return api.getTrendingStickerSets()
}
```


### `api.getUser()`
Returns information about a user by their identifier. This is an offline request if the current user is not a bot


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | User identifier |


**Returns type:** [UserUnion](./td-outputs.md#userunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetUserParams {
  userId?: number
}

function getUser(api: ApiMethods, params: GetUserParams): Promise<UserUnion> {
 return api.getUser(params)
}
```


### `api.getUserFullInfo()`
Returns full information about a user by their identifier


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | User identifier |


**Returns type:** [UserFullInfoUnion](./td-outputs.md#userfullinfounion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetUserFullInfoParams {
  userId?: number
}

function getUserFullInfo(api: ApiMethods, params: GetUserFullInfoParams): Promise<UserFullInfoUnion> {
 return api.getUserFullInfo(params)
}
```


### `api.getUserPrivacySettingRules()`
Returns the current privacy settings


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `setting` | [UserPrivacySettingInputUnion](./td-inputs.md#userprivacysettinginputunion) | The privacy setting |


**Returns type:** [UserPrivacySettingRulesUnion](./td-outputs.md#userprivacysettingrulesunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetUserPrivacySettingRulesParams {
  setting?: UserPrivacySettingInputUnion
}

function getUserPrivacySettingRules(api: ApiMethods, params: GetUserPrivacySettingRulesParams): Promise<UserPrivacySettingRulesUnion> {
 return api.getUserPrivacySettingRules(params)
}
```


### `api.getUserProfilePhotos()`
Returns the profile photos of a user. The result of this query may be outdated: some photos might have been deleted already


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | User identifier |
| `offset` | number | The number of photos to skip; must be non-negative |
| `limit` | number | Maximum number of photos to be returned; up to 100 |


**Returns type:** [UserProfilePhotosUnion](./td-outputs.md#userprofilephotosunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetUserProfilePhotosParams {
  userId?: number
  offset?: number
  limit?: number
}

function getUserProfilePhotos(api: ApiMethods, params: GetUserProfilePhotosParams): Promise<UserProfilePhotosUnion> {
 return api.getUserProfilePhotos(params)
}
```


### `api.getWallpapers()`
Returns background wallpapers




**Returns type:** [WallpapersUnion](./td-outputs.md#wallpapersunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function getWallpapers(api: ApiMethods): Promise<WallpapersUnion> {
 return api.getWallpapers()
}
```


### `api.getWebPageInstantView()`
Returns an instant view version of a web page if available. Returns a 404 error if the web page has no instant view page


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `url` | string | The web page URL |
| `forceFull` | boolean | If true, the full instant view for the web page will be returned |


**Returns type:** [WebPageInstantViewUnion](./td-outputs.md#webpageinstantviewunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetWebPageInstantViewParams {
  url?: string
  forceFull?: boolean
}

function getWebPageInstantView(api: ApiMethods, params: GetWebPageInstantViewParams): Promise<WebPageInstantViewUnion> {
 return api.getWebPageInstantView(params)
}
```


### `api.getWebPagePreview()`
Returns a web page preview by the text of the message. Do not call this function too often. Returns a 404 error if the web page has no preview


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `text` | [FormattedTextInput](./td-inputs.md#formattedtextinput) | Message text with formatting |


**Returns type:** [WebPageUnion](./td-outputs.md#webpageunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface GetWebPagePreviewParams {
  text?: FormattedTextInput
}

function getWebPagePreview(api: ApiMethods, params: GetWebPagePreviewParams): Promise<WebPageUnion> {
 return api.getWebPagePreview(params)
}
```


### `api.importContacts()`
Adds new contacts or edits existing contacts; contacts' user identifiers are ignored


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `contacts` | [ContactInput[]](./td-inputs.md#contactinput) | The list of contacts to import or edit, contact's vCard are ignored and are not imported |


**Returns type:** [ImportedContactsUnion](./td-outputs.md#importedcontactsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface ImportContactsParams {
  contacts?: ContactInput[]
}

function importContacts(api: ApiMethods, params: ImportContactsParams): Promise<ImportedContactsUnion> {
 return api.importContacts(params)
}
```


### `api.joinChat()`
Adds current user as a new member to a chat. Private and secret chats can't be joined using this method


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface JoinChatParams {
  chatId?: number
}

function joinChat(api: ApiMethods, params: JoinChatParams): Promise<OkUnion> {
 return api.joinChat(params)
}
```


### `api.joinChatByInviteLink()`
Uses an invite link to add the current user to the chat if possible. The new member will not be added until the chat state has been synchronized with the server


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `inviteLink` | string | Invite link to import; should begin with "https://t.me/joinchat/", "https://telegram.me/joinchat/", or "https://telegram.dog/joinchat/" |


**Returns type:** [ChatUnion](./td-outputs.md#chatunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface JoinChatByInviteLinkParams {
  inviteLink?: string
}

function joinChatByInviteLink(api: ApiMethods, params: JoinChatByInviteLinkParams): Promise<ChatUnion> {
 return api.joinChatByInviteLink(params)
}
```


### `api.leaveChat()`
Removes current user from chat members. Private and secret chats can't be left using this method


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface LeaveChatParams {
  chatId?: number
}

function leaveChat(api: ApiMethods, params: LeaveChatParams): Promise<OkUnion> {
 return api.leaveChat(params)
}
```


### `api.logOut()`
Closes the TDLib instance after a proper logout. Requires an available network connection. All local data will be destroyed. After the logout completes, updateAuthorizationState with authorizationStateClosed will be sent




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function logOut(api: ApiMethods): Promise<OkUnion> {
 return api.logOut()
}
```


### `api.openChat()`
Informs TDLib that the chat is opened by the user. Many useful activities depend on the chat being opened or closed (e.g., in supergroups and channels all updates are received only for opened chats)


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface OpenChatParams {
  chatId?: number
}

function openChat(api: ApiMethods, params: OpenChatParams): Promise<OkUnion> {
 return api.openChat(params)
}
```


### `api.openMessageContent()`
Informs TDLib that the message content has been opened (e.g., the user has opened a photo, video, document, location or venue, or has listened to an audio file or voice note message). An updateMessageContentOpened update will be generated if something has changed


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier of the message |
| `messageId` | number | Identifier of the message with the opened content |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface OpenMessageContentParams {
  chatId?: number
  messageId?: number
}

function openMessageContent(api: ApiMethods, params: OpenMessageContentParams): Promise<OkUnion> {
 return api.openMessageContent(params)
}
```


### `api.optimizeStorage()`
Optimizes storage usage, i.e. deletes some files and returns new storage usage statistics. Secret thumbnails can't be deleted


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `size` | number | Limit on the total size of files after deletion. Pass -1 to use the default limit |
| `ttl` | number | Limit on the time that has passed since the last time a file was accessed (or creation time for some filesystems). Pass -1 to use the default limit |
| `count` | number | Limit on the total count of files after deletion. Pass -1 to use the default limit |
| `immunityDelay` | number | The amount of time after the creation of a file during which it can't be deleted, in seconds. Pass -1 to use the default value |
| `fileTypes` | [FileTypeInputUnion[]](./td-inputs.md#filetypeinputunion) | If not empty, only files with the given type(s) are considered. By default, all types except thumbnails, profile photos, stickers and wallpapers are deleted |
| `chatIds` | number[] | If not empty, only files from the given chats are considered. Use 0 as chat identifier to delete files not belonging to any chat (e.g., profile photos) |
| `excludeChatIds` | number[] | If not empty, files from the given chats are excluded. Use 0 as chat identifier to exclude all files not belonging to any chat (e.g., profile photos) |
| `chatLimit` | number | Same as in getStorageStatistics. Affects only returned statistics |


**Returns type:** [StorageStatisticsUnion](./td-outputs.md#storagestatisticsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface OptimizeStorageParams {
  size?: number
  ttl?: number
  count?: number
  immunityDelay?: number
  fileTypes?: FileTypeInputUnion[]
  chatIds?: number[]
  excludeChatIds?: number[]
  chatLimit?: number
}

function optimizeStorage(api: ApiMethods, params: OptimizeStorageParams): Promise<StorageStatisticsUnion> {
 return api.optimizeStorage(params)
}
```


### `api.parseTextEntities()`
Parses Bold, Italic, Code, Pre, PreCode and TextUrl entities contained in the text. This is an offline method. Can be called before authorization. Can be called synchronously


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `text` | string | The text which should be parsed |
| `parseMode` | [TextParseModeInputUnion](./td-inputs.md#textparsemodeinputunion) | Text parse mode |


**Returns type:** [FormattedTextUnion](./td-outputs.md#formattedtextunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface ParseTextEntitiesParams {
  text?: string
  parseMode?: TextParseModeInputUnion
}

function parseTextEntities(api: ApiMethods, params: ParseTextEntitiesParams): Promise<FormattedTextUnion> {
 return api.parseTextEntities(params)
}
```


### `api.pinChatMessage()`
Pins a message in a chat; requires appropriate administrator rights in the group or channel


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat |
| `messageId` | number | Identifier of the new pinned message |
| `disableNotification` | boolean | True, if there should be no notification about the pinned message |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface PinChatMessageParams {
  chatId?: number
  messageId?: number
  disableNotification?: boolean
}

function pinChatMessage(api: ApiMethods, params: PinChatMessageParams): Promise<OkUnion> {
 return api.pinChatMessage(params)
}
```


### `api.pingProxy()`
Computes time needed to receive a response from a Telegram server through a proxy. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `proxyId` | number | Proxy identifier. Use 0 to ping a Telegram server without a proxy |


**Returns type:** [SecondsUnion](./td-outputs.md#secondsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface PingProxyParams {
  proxyId?: number
}

function pingProxy(api: ApiMethods, params: PingProxyParams): Promise<SecondsUnion> {
 return api.pingProxy(params)
}
```


### `api.processPushNotification()`
Handles a push notification. Returns error with code 406 if the push notification is not supported and connection to the server is required to fetch new data. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `payload` | string | JSON-encoded push notification payload with all fields sent by the server, and "google.sent_time" and "google.notification.sound" fields added |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface ProcessPushNotificationParams {
  payload?: string
}

function processPushNotification(api: ApiMethods, params: ProcessPushNotificationParams): Promise<OkUnion> {
 return api.processPushNotification(params)
}
```


### `api.readAllChatMentions()`
Marks all mentions in a chat as read


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface ReadAllChatMentionsParams {
  chatId?: number
}

function readAllChatMentions(api: ApiMethods, params: ReadAllChatMentionsParams): Promise<OkUnion> {
 return api.readAllChatMentions(params)
}
```


### `api.readFilePart()`
Reads a part of a file from the TDLib file cache and returns read bytes. This method is intended to be used only if the client has no direct access to TDLib's file system, because it is usually slower than a direct read from the file


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `fileId` | number | Identifier of the file. The file must be located in the TDLib file cache |
| `offset` | number | The offset from which to read the file |
| `count` | number | Number of bytes to read. An error will be returned if there are not enough bytes available in the file from the specified position. Pass 0 to read all available data from the specified position |


**Returns type:** [FilePartUnion](./td-outputs.md#filepartunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface ReadFilePartParams {
  fileId?: number
  offset?: number
  count?: number
}

function readFilePart(api: ApiMethods, params: ReadFilePartParams): Promise<FilePartUnion> {
 return api.readFilePart(params)
}
```


### `api.recoverAuthenticationPassword()`
Recovers the password with a password recovery code sent to an email address that was previously set up. Works only when the current authorization state is authorizationStateWaitPassword


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `recoveryCode` | string | Recovery code to check |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface RecoverAuthenticationPasswordParams {
  recoveryCode?: string
}

function recoverAuthenticationPassword(api: ApiMethods, params: RecoverAuthenticationPasswordParams): Promise<OkUnion> {
 return api.recoverAuthenticationPassword(params)
}
```


### `api.recoverPassword()`
Recovers the password using a recovery code sent to an email address that was previously set up


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `recoveryCode` | string | Recovery code to check |


**Returns type:** [PasswordStateUnion](./td-outputs.md#passwordstateunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface RecoverPasswordParams {
  recoveryCode?: string
}

function recoverPassword(api: ApiMethods, params: RecoverPasswordParams): Promise<PasswordStateUnion> {
 return api.recoverPassword(params)
}
```


### `api.registerDevice()`
Registers the currently used device for receiving push notifications. Returns a globally unique identifier of the push notification subscription


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `deviceToken` | [DeviceTokenInputUnion](./td-inputs.md#devicetokeninputunion) | Device token |
| `otherUserIds` | number[] | List of user identifiers of other users currently using the client |


**Returns type:** [PushReceiverIdUnion](./td-outputs.md#pushreceiveridunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface RegisterDeviceParams {
  deviceToken?: DeviceTokenInputUnion
  otherUserIds?: number[]
}

function registerDevice(api: ApiMethods, params: RegisterDeviceParams): Promise<PushReceiverIdUnion> {
 return api.registerDevice(params)
}
```


### `api.removeContacts()`
Removes users from the contact list


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userIds` | number[] | Identifiers of users to be deleted |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface RemoveContactsParams {
  userIds?: number[]
}

function removeContacts(api: ApiMethods, params: RemoveContactsParams): Promise<OkUnion> {
 return api.removeContacts(params)
}
```


### `api.removeFavoriteSticker()`
Removes a sticker from the list of favorite stickers


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `sticker` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | Sticker file to delete from the list |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface RemoveFavoriteStickerParams {
  sticker?: InputFileInputUnion
}

function removeFavoriteSticker(api: ApiMethods, params: RemoveFavoriteStickerParams): Promise<OkUnion> {
 return api.removeFavoriteSticker(params)
}
```


### `api.removeNotification()`
Removes an active notification from notification list. Needs to be called only if the notification is removed by the current user


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `notificationGroupId` | number | Identifier of notification group to which the notification belongs |
| `notificationId` | number | Identifier of removed notification |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface RemoveNotificationParams {
  notificationGroupId?: number
  notificationId?: number
}

function removeNotification(api: ApiMethods, params: RemoveNotificationParams): Promise<OkUnion> {
 return api.removeNotification(params)
}
```


### `api.removeNotificationGroup()`
Removes a group of active notifications. Needs to be called only if the notification group is removed by the current user


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `notificationGroupId` | number | Notification group identifier |
| `maxNotificationId` | number | Maximum identifier of removed notifications |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface RemoveNotificationGroupParams {
  notificationGroupId?: number
  maxNotificationId?: number
}

function removeNotificationGroup(api: ApiMethods, params: RemoveNotificationGroupParams): Promise<OkUnion> {
 return api.removeNotificationGroup(params)
}
```


### `api.removeProxy()`
Removes a proxy server. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `proxyId` | number | Proxy identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface RemoveProxyParams {
  proxyId?: number
}

function removeProxy(api: ApiMethods, params: RemoveProxyParams): Promise<OkUnion> {
 return api.removeProxy(params)
}
```


### `api.removeRecentHashtag()`
Removes a hashtag from the list of recently used hashtags


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `hashtag` | string | Hashtag to delete |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface RemoveRecentHashtagParams {
  hashtag?: string
}

function removeRecentHashtag(api: ApiMethods, params: RemoveRecentHashtagParams): Promise<OkUnion> {
 return api.removeRecentHashtag(params)
}
```


### `api.removeRecentSticker()`
Removes a sticker from the list of recently used stickers


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `isAttached` | boolean | Pass true to remove the sticker from the list of stickers recently attached to photo or video files; pass false to remove the sticker from the list of recently sent stickers |
| `sticker` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | Sticker file to delete |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface RemoveRecentStickerParams {
  isAttached?: boolean
  sticker?: InputFileInputUnion
}

function removeRecentSticker(api: ApiMethods, params: RemoveRecentStickerParams): Promise<OkUnion> {
 return api.removeRecentSticker(params)
}
```


### `api.removeRecentlyFoundChat()`
Removes a chat from the list of recently found chats


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat to be removed |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface RemoveRecentlyFoundChatParams {
  chatId?: number
}

function removeRecentlyFoundChat(api: ApiMethods, params: RemoveRecentlyFoundChatParams): Promise<OkUnion> {
 return api.removeRecentlyFoundChat(params)
}
```


### `api.removeSavedAnimation()`
Removes an animation from the list of saved animations


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `animation` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | Animation file to be removed |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface RemoveSavedAnimationParams {
  animation?: InputFileInputUnion
}

function removeSavedAnimation(api: ApiMethods, params: RemoveSavedAnimationParams): Promise<OkUnion> {
 return api.removeSavedAnimation(params)
}
```


### `api.removeStickerFromSet()`
Removes a sticker from the set to which it belongs; for bots only. The sticker set must have been created by the bot


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `sticker` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | Sticker |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface RemoveStickerFromSetParams {
  sticker?: InputFileInputUnion
}

function removeStickerFromSet(api: ApiMethods, params: RemoveStickerFromSetParams): Promise<OkUnion> {
 return api.removeStickerFromSet(params)
}
```


### `api.removeTopChat()`
Removes a chat from the list of frequently used chats. Supported only if the chat info database is enabled


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `category` | [TopChatCategoryInputUnion](./td-inputs.md#topchatcategoryinputunion) | Category of frequently used chats |
| `chatId` | number | Chat identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface RemoveTopChatParams {
  category?: TopChatCategoryInputUnion
  chatId?: number
}

function removeTopChat(api: ApiMethods, params: RemoveTopChatParams): Promise<OkUnion> {
 return api.removeTopChat(params)
}
```


### `api.reorderInstalledStickerSets()`
Changes the order of installed sticker sets


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `isMasks` | boolean | Pass true to change the order of mask sticker sets; pass false to change the order of ordinary sticker sets |
| `stickerSetIds` | number &#124; string[] | Identifiers of installed sticker sets in the new correct order |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface ReorderInstalledStickerSetsParams {
  isMasks?: boolean
  stickerSetIds?: number | string[]
}

function reorderInstalledStickerSets(api: ApiMethods, params: ReorderInstalledStickerSetsParams): Promise<OkUnion> {
 return api.reorderInstalledStickerSets(params)
}
```


### `api.reportChat()`
Reports a chat to the Telegram moderators. Supported only for supergroups, channels, or private chats with bots, since other chats can't be checked by moderators


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `reason` | [ChatReportReasonInputUnion](./td-inputs.md#chatreportreasoninputunion) | The reason for reporting the chat |
| `messageIds` | number[] | Identifiers of reported messages, if any |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface ReportChatParams {
  chatId?: number
  reason?: ChatReportReasonInputUnion
  messageIds?: number[]
}

function reportChat(api: ApiMethods, params: ReportChatParams): Promise<OkUnion> {
 return api.reportChat(params)
}
```


### `api.reportSupergroupSpam()`
Reports some messages from a user in a supergroup as spam; requires administrator rights in the supergroup


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | Supergroup identifier |
| `userId` | number | User identifier |
| `messageIds` | number[] | Identifiers of messages sent in the supergroup by the user. This list must be non-empty |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface ReportSupergroupSpamParams {
  supergroupId?: number
  userId?: number
  messageIds?: number[]
}

function reportSupergroupSpam(api: ApiMethods, params: ReportSupergroupSpamParams): Promise<OkUnion> {
 return api.reportSupergroupSpam(params)
}
```


### `api.requestAuthenticationPasswordRecovery()`
Requests to send a password recovery code to an email address that was previously set up. Works only when the current authorization state is authorizationStateWaitPassword




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function requestAuthenticationPasswordRecovery(api: ApiMethods): Promise<OkUnion> {
 return api.requestAuthenticationPasswordRecovery()
}
```


### `api.requestPasswordRecovery()`
Requests to send a password recovery code to an email address that was previously set up




**Returns type:** [EmailAddressAuthenticationCodeInfoUnion](./td-outputs.md#emailaddressauthenticationcodeinfounion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function requestPasswordRecovery(api: ApiMethods): Promise<EmailAddressAuthenticationCodeInfoUnion> {
 return api.requestPasswordRecovery()
}
```


### `api.resendAuthenticationCode()`
Re-sends an authentication code to the user. Works only when the current authorization state is authorizationStateWaitCode and the next_code_type of the result is not null




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function resendAuthenticationCode(api: ApiMethods): Promise<OkUnion> {
 return api.resendAuthenticationCode()
}
```


### `api.resendChangePhoneNumberCode()`
Re-sends the authentication code sent to confirm a new phone number for the user. Works only if the previously received authenticationCodeInfo next_code_type was not null




**Returns type:** [AuthenticationCodeInfoUnion](./td-outputs.md#authenticationcodeinfounion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function resendChangePhoneNumberCode(api: ApiMethods): Promise<AuthenticationCodeInfoUnion> {
 return api.resendChangePhoneNumberCode()
}
```


### `api.resendEmailAddressVerificationCode()`
Re-sends the code to verify an email address to be added to a user's Telegram Passport




**Returns type:** [EmailAddressAuthenticationCodeInfoUnion](./td-outputs.md#emailaddressauthenticationcodeinfounion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function resendEmailAddressVerificationCode(api: ApiMethods): Promise<EmailAddressAuthenticationCodeInfoUnion> {
 return api.resendEmailAddressVerificationCode()
}
```


### `api.resendPhoneNumberConfirmationCode()`
Resends phone number confirmation code




**Returns type:** [AuthenticationCodeInfoUnion](./td-outputs.md#authenticationcodeinfounion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function resendPhoneNumberConfirmationCode(api: ApiMethods): Promise<AuthenticationCodeInfoUnion> {
 return api.resendPhoneNumberConfirmationCode()
}
```


### `api.resendPhoneNumberVerificationCode()`
Re-sends the code to verify a phone number to be added to a user's Telegram Passport




**Returns type:** [AuthenticationCodeInfoUnion](./td-outputs.md#authenticationcodeinfounion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function resendPhoneNumberVerificationCode(api: ApiMethods): Promise<AuthenticationCodeInfoUnion> {
 return api.resendPhoneNumberVerificationCode()
}
```


### `api.resendRecoveryEmailAddressCode()`
Resends the 2-step verification recovery email address verification code




**Returns type:** [PasswordStateUnion](./td-outputs.md#passwordstateunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function resendRecoveryEmailAddressCode(api: ApiMethods): Promise<PasswordStateUnion> {
 return api.resendRecoveryEmailAddressCode()
}
```


### `api.resetAllNotificationSettings()`
Resets all notification settings to their default values. By default, all chats are unmuted, the sound is set to "default" and message previews are shown




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function resetAllNotificationSettings(api: ApiMethods): Promise<OkUnion> {
 return api.resetAllNotificationSettings()
}
```


### `api.resetNetworkStatistics()`
Resets all network data usage statistics to zero. Can be called before authorization




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function resetNetworkStatistics(api: ApiMethods): Promise<OkUnion> {
 return api.resetNetworkStatistics()
}
```


### `api.saveApplicationLogEvent()`
Saves application log event on the server. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `type` | string | Event type |
| `chatId` | number | Optional chat identifier, associated with the event |
| `data` | [JsonValueInputUnion](./td-inputs.md#jsonvalueinputunion) | The log event data |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SaveApplicationLogEventParams {
  type?: string
  chatId?: number
  data?: JsonValueInputUnion
}

function saveApplicationLogEvent(api: ApiMethods, params: SaveApplicationLogEventParams): Promise<OkUnion> {
 return api.saveApplicationLogEvent(params)
}
```


### `api.searchCallMessages()`
Searches for call messages. Returns the results in reverse chronological order (i. e., in order of decreasing message_id). For optimal performance the number of returned messages is chosen by the library


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `fromMessageId` | number | Identifier of the message from which to search; use 0 to get results from the last message |
| `limit` | number | The maximum number of messages to be returned; up to 100. Fewer messages may be returned than specified by the limit, even if the end of the message history has not been reached |
| `onlyMissed` | boolean | If true, returns only messages with missed calls |


**Returns type:** [MessagesUnion](./td-outputs.md#messagesunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SearchCallMessagesParams {
  fromMessageId?: number
  limit?: number
  onlyMissed?: boolean
}

function searchCallMessages(api: ApiMethods, params: SearchCallMessagesParams): Promise<MessagesUnion> {
 return api.searchCallMessages(params)
}
```


### `api.searchChatMembers()`
Searches for a specified query in the first name, last name and username of the members of a specified chat. Requires administrator rights in channels


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `query` | string | Query to search for |
| `limit` | number | The maximum number of users to be returned |
| `filter` | [ChatMembersFilterInputUnion](./td-inputs.md#chatmembersfilterinputunion) | The type of users to return. By default, chatMembersFilterMembers |


**Returns type:** [ChatMembersUnion](./td-outputs.md#chatmembersunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SearchChatMembersParams {
  chatId?: number
  query?: string
  limit?: number
  filter?: ChatMembersFilterInputUnion
}

function searchChatMembers(api: ApiMethods, params: SearchChatMembersParams): Promise<ChatMembersUnion> {
 return api.searchChatMembers(params)
}
```


### `api.searchChatMessages()`
Searches for messages with given words in the chat. Returns the results in reverse chronological order, i.e. in order of decreasing message_id. Cannot be used in secret chats with a non-empty query (searchSecretMessages should be used instead), or without an enabled message database. For optimal performance the number of returned messages is chosen by the library


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat in which to search messages |
| `query` | string | Query to search for |
| `senderUserId` | number | If not 0, only messages sent by the specified user will be returned. Not supported in secret chats |
| `fromMessageId` | number | Identifier of the message starting from which history must be fetched; use 0 to get results from the last message |
| `offset` | number | Specify 0 to get results from exactly the from_message_id or a negative offset to get the specified message and some newer messages |
| `limit` | number | The maximum number of messages to be returned; must be positive and can't be greater than 100. If the offset is negative, the limit must be greater than -offset. Fewer messages may be returned than specified by the limit, even if the end of the message history has not been reached |
| `filter` | [SearchMessagesFilterInputUnion](./td-inputs.md#searchmessagesfilterinputunion) | Filter for message content in the search results |


**Returns type:** [MessagesUnion](./td-outputs.md#messagesunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SearchChatMessagesParams {
  chatId?: number
  query?: string
  senderUserId?: number
  fromMessageId?: number
  offset?: number
  limit?: number
  filter?: SearchMessagesFilterInputUnion
}

function searchChatMessages(api: ApiMethods, params: SearchChatMessagesParams): Promise<MessagesUnion> {
 return api.searchChatMessages(params)
}
```


### `api.searchChatRecentLocationMessages()`
Returns information about the recent locations of chat members that were sent to the chat. Returns up to 1 location message per user


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `limit` | number | Maximum number of messages to be returned |


**Returns type:** [MessagesUnion](./td-outputs.md#messagesunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SearchChatRecentLocationMessagesParams {
  chatId?: number
  limit?: number
}

function searchChatRecentLocationMessages(api: ApiMethods, params: SearchChatRecentLocationMessagesParams): Promise<MessagesUnion> {
 return api.searchChatRecentLocationMessages(params)
}
```


### `api.searchChats()`
Searches for the specified query in the title and username of already known chats, this is an offline request. Returns chats in the order seen in the chat list


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `query` | string | Query to search for. If the query is empty, returns up to 20 recently found chats |
| `limit` | number | Maximum number of chats to be returned |


**Returns type:** [ChatsUnion](./td-outputs.md#chatsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SearchChatsParams {
  query?: string
  limit?: number
}

function searchChats(api: ApiMethods, params: SearchChatsParams): Promise<ChatsUnion> {
 return api.searchChats(params)
}
```


### `api.searchChatsOnServer()`
Searches for the specified query in the title and username of already known chats via request to the server. Returns chats in the order seen in the chat list


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `query` | string | Query to search for |
| `limit` | number | Maximum number of chats to be returned |


**Returns type:** [ChatsUnion](./td-outputs.md#chatsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SearchChatsOnServerParams {
  query?: string
  limit?: number
}

function searchChatsOnServer(api: ApiMethods, params: SearchChatsOnServerParams): Promise<ChatsUnion> {
 return api.searchChatsOnServer(params)
}
```


### `api.searchContacts()`
Searches for the specified query in the first names, last names and usernames of the known user contacts


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `query` | string | Query to search for; may be empty to return all contacts |
| `limit` | number | Maximum number of users to be returned |


**Returns type:** [UsersUnion](./td-outputs.md#usersunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SearchContactsParams {
  query?: string
  limit?: number
}

function searchContacts(api: ApiMethods, params: SearchContactsParams): Promise<UsersUnion> {
 return api.searchContacts(params)
}
```


### `api.searchHashtags()`
Searches for recently used hashtags by their prefix


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `prefix` | string | Hashtag prefix to search for |
| `limit` | number | Maximum number of hashtags to be returned |


**Returns type:** [HashtagsUnion](./td-outputs.md#hashtagsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SearchHashtagsParams {
  prefix?: string
  limit?: number
}

function searchHashtags(api: ApiMethods, params: SearchHashtagsParams): Promise<HashtagsUnion> {
 return api.searchHashtags(params)
}
```


### `api.searchInstalledStickerSets()`
Searches for installed sticker sets by looking for specified query in their title and name


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `isMasks` | boolean | Pass true to return mask sticker sets; pass false to return ordinary sticker sets |
| `query` | string | Query to search for |
| `limit` | number | Maximum number of sticker sets to return |


**Returns type:** [StickerSetsUnion](./td-outputs.md#stickersetsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SearchInstalledStickerSetsParams {
  isMasks?: boolean
  query?: string
  limit?: number
}

function searchInstalledStickerSets(api: ApiMethods, params: SearchInstalledStickerSetsParams): Promise<StickerSetsUnion> {
 return api.searchInstalledStickerSets(params)
}
```


### `api.searchMessages()`
Searches for messages in all chats except secret chats. Returns the results in reverse chronological order (i.e., in order of decreasing (date, chat_id, message_id)). For optimal performance the number of returned messages is chosen by the library


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `query` | string | Query to search for |
| `offsetDate` | number | The date of the message starting from which the results should be fetched. Use 0 or any date in the future to get results from the last message |
| `offsetChatId` | number | The chat identifier of the last found message, or 0 for the first request |
| `offsetMessageId` | number | The message identifier of the last found message, or 0 for the first request |
| `limit` | number | The maximum number of messages to be returned, up to 100. Fewer messages may be returned than specified by the limit, even if the end of the message history has not been reached |


**Returns type:** [MessagesUnion](./td-outputs.md#messagesunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SearchMessagesParams {
  query?: string
  offsetDate?: number
  offsetChatId?: number
  offsetMessageId?: number
  limit?: number
}

function searchMessages(api: ApiMethods, params: SearchMessagesParams): Promise<MessagesUnion> {
 return api.searchMessages(params)
}
```


### `api.searchPublicChat()`
Searches a public chat by its username. Currently only private chats, supergroups and channels can be public. Returns the chat if found; otherwise an error is returned


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `username` | string | Username to be resolved |


**Returns type:** [ChatUnion](./td-outputs.md#chatunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SearchPublicChatParams {
  username?: string
}

function searchPublicChat(api: ApiMethods, params: SearchPublicChatParams): Promise<ChatUnion> {
 return api.searchPublicChat(params)
}
```


### `api.searchPublicChats()`
Searches public chats by looking for specified query in their username and title. Currently only private chats, supergroups and channels can be public. Returns a meaningful number of results. Returns nothing if the length of the searched username prefix is less than 5. Excludes private chats with contacts and chats from the chat list from the results


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `query` | string | Query to search for |


**Returns type:** [ChatsUnion](./td-outputs.md#chatsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SearchPublicChatsParams {
  query?: string
}

function searchPublicChats(api: ApiMethods, params: SearchPublicChatsParams): Promise<ChatsUnion> {
 return api.searchPublicChats(params)
}
```


### `api.searchSecretMessages()`
Searches for messages in secret chats. Returns the results in reverse chronological order. For optimal performance the number of returned messages is chosen by the library


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat in which to search. Specify 0 to search in all secret chats |
| `query` | string | Query to search for. If empty, searchChatMessages should be used instead |
| `fromSearchId` | number &#124; string | The identifier from the result of a previous request, use 0 to get results from the last message |
| `limit` | number | Maximum number of messages to be returned; up to 100. Fewer messages may be returned than specified by the limit, even if the end of the message history has not been reached |
| `filter` | [SearchMessagesFilterInputUnion](./td-inputs.md#searchmessagesfilterinputunion) | A filter for the content of messages in the search results |


**Returns type:** [FoundMessagesUnion](./td-outputs.md#foundmessagesunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SearchSecretMessagesParams {
  chatId?: number
  query?: string
  fromSearchId?: number | string
  limit?: number
  filter?: SearchMessagesFilterInputUnion
}

function searchSecretMessages(api: ApiMethods, params: SearchSecretMessagesParams): Promise<FoundMessagesUnion> {
 return api.searchSecretMessages(params)
}
```


### `api.searchStickerSet()`
Searches for a sticker set by its name


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `name` | string | Name of the sticker set |


**Returns type:** [StickerSetUnion](./td-outputs.md#stickersetunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SearchStickerSetParams {
  name?: string
}

function searchStickerSet(api: ApiMethods, params: SearchStickerSetParams): Promise<StickerSetUnion> {
 return api.searchStickerSet(params)
}
```


### `api.searchStickerSets()`
Searches for ordinary sticker sets by looking for specified query in their title and name. Excludes installed sticker sets from the results


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `query` | string | Query to search for |


**Returns type:** [StickerSetsUnion](./td-outputs.md#stickersetsunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SearchStickerSetsParams {
  query?: string
}

function searchStickerSets(api: ApiMethods, params: SearchStickerSetsParams): Promise<StickerSetsUnion> {
 return api.searchStickerSets(params)
}
```


### `api.searchStickers()`
Searches for stickers from public sticker sets that correspond to a given emoji


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `emoji` | string | String representation of emoji; must be non-empty |
| `limit` | number | Maximum number of stickers to be returned |


**Returns type:** [StickersUnion](./td-outputs.md#stickersunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SearchStickersParams {
  emoji?: string
  limit?: number
}

function searchStickers(api: ApiMethods, params: SearchStickersParams): Promise<StickersUnion> {
 return api.searchStickers(params)
}
```


### `api.sendBotStartMessage()`
Invites a bot to a chat (if it is not yet a member) and sends it the /start command. Bots can't be invited to a private chat other than the chat with the bot. Bots can't be invited to channels (although they can be added as admins) and secret chats. Returns the sent message


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `botUserId` | number | Identifier of the bot |
| `chatId` | number | Identifier of the target chat |
| `parameter` | string | A hidden parameter sent to the bot for deep linking purposes (https://api.telegram.org/bots#deep-linking) |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SendBotStartMessageParams {
  botUserId?: number
  chatId?: number
  parameter?: string
}

function sendBotStartMessage(api: ApiMethods, params: SendBotStartMessageParams): Promise<MessageUnion> {
 return api.sendBotStartMessage(params)
}
```


### `api.sendCallDebugInformation()`
Sends debug information for a call


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `callId` | number | Call identifier |
| `debugInformation` | string | Debug information in application-specific format |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SendCallDebugInformationParams {
  callId?: number
  debugInformation?: string
}

function sendCallDebugInformation(api: ApiMethods, params: SendCallDebugInformationParams): Promise<OkUnion> {
 return api.sendCallDebugInformation(params)
}
```


### `api.sendCallRating()`
Sends a call rating


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `callId` | number | Call identifier |
| `rating` | number | Call rating; 1-5 |
| `comment` | string | An optional user comment if the rating is less than 5 |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SendCallRatingParams {
  callId?: number
  rating?: number
  comment?: string
}

function sendCallRating(api: ApiMethods, params: SendCallRatingParams): Promise<OkUnion> {
 return api.sendCallRating(params)
}
```


### `api.sendChatAction()`
Sends a notification about user activity in a chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `action` | [ChatActionInputUnion](./td-inputs.md#chatactioninputunion) | The action description |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SendChatActionParams {
  chatId?: number
  action?: ChatActionInputUnion
}

function sendChatAction(api: ApiMethods, params: SendChatActionParams): Promise<OkUnion> {
 return api.sendChatAction(params)
}
```


### `api.sendChatScreenshotTakenNotification()`
Sends a notification about a screenshot taken in a chat. Supported only in private and secret chats


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SendChatScreenshotTakenNotificationParams {
  chatId?: number
}

function sendChatScreenshotTakenNotification(api: ApiMethods, params: SendChatScreenshotTakenNotificationParams): Promise<OkUnion> {
 return api.sendChatScreenshotTakenNotification(params)
}
```


### `api.sendChatSetTtlMessage()`
Changes the current TTL setting (sets a new self-destruct timer) in a secret chat and sends the corresponding message


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `ttl` | number | New TTL value, in seconds |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SendChatSetTtlMessageParams {
  chatId?: number
  ttl?: number
}

function sendChatSetTtlMessage(api: ApiMethods, params: SendChatSetTtlMessageParams): Promise<MessageUnion> {
 return api.sendChatSetTtlMessage(params)
}
```


### `api.sendCustomRequest()`
Sends a custom request; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `method` | string | The method name |
| `parameters` | string | JSON-serialized method parameters |


**Returns type:** [CustomRequestResultUnion](./td-outputs.md#customrequestresultunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SendCustomRequestParams {
  method?: string
  parameters?: string
}

function sendCustomRequest(api: ApiMethods, params: SendCustomRequestParams): Promise<CustomRequestResultUnion> {
 return api.sendCustomRequest(params)
}
```


### `api.sendEmailAddressVerificationCode()`
Sends a code to verify an email address to be added to a user's Telegram Passport


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `emailAddress` | string | Email address |


**Returns type:** [EmailAddressAuthenticationCodeInfoUnion](./td-outputs.md#emailaddressauthenticationcodeinfounion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SendEmailAddressVerificationCodeParams {
  emailAddress?: string
}

function sendEmailAddressVerificationCode(api: ApiMethods, params: SendEmailAddressVerificationCodeParams): Promise<EmailAddressAuthenticationCodeInfoUnion> {
 return api.sendEmailAddressVerificationCode(params)
}
```


### `api.sendInlineQueryResultMessage()`
Sends the result of an inline query as a message. Returns the sent message. Always clears a chat draft message


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Target chat |
| `replyToMessageId` | number | Identifier of a message to reply to or 0 |
| `disableNotification` | boolean | Pass true to disable notification for the message. Not supported in secret chats |
| `fromBackground` | boolean | Pass true if the message is sent from background |
| `queryId` | number &#124; string | Identifier of the inline query |
| `resultId` | string | Identifier of the inline result |
| `hideViaBot` | boolean | If true, there will be no mention of a bot, via which the message is sent. Can be used only for bots GetOption("animation_search_bot_username"), GetOption("photo_search_bot_username") and GetOption("venue_search_bot_username") |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SendInlineQueryResultMessageParams {
  chatId?: number
  replyToMessageId?: number
  disableNotification?: boolean
  fromBackground?: boolean
  queryId?: number | string
  resultId?: string
  hideViaBot?: boolean
}

function sendInlineQueryResultMessage(api: ApiMethods, params: SendInlineQueryResultMessageParams): Promise<MessageUnion> {
 return api.sendInlineQueryResultMessage(params)
}
```


### `api.sendMessage()`
Sends a message. Returns the sent message


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Target chat |
| `replyToMessageId` | number | Identifier of the message to reply to or 0 |
| `disableNotification` | boolean | Pass true to disable notification for the message. Not supported in secret chats |
| `fromBackground` | boolean | Pass true if the message is sent from the background |
| `replyMarkup` | [ReplyMarkupInputUnion](./td-inputs.md#replymarkupinputunion) | Markup for replying to the message; for bots only |
| `inputMessageContent` | [InputMessageContentInputUnion](./td-inputs.md#inputmessagecontentinputunion) | The content of the message to be sent |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SendMessageParams {
  chatId?: number
  replyToMessageId?: number
  disableNotification?: boolean
  fromBackground?: boolean
  replyMarkup?: ReplyMarkupInputUnion
  inputMessageContent?: InputMessageContentInputUnion
}

function sendMessage(api: ApiMethods, params: SendMessageParams): Promise<MessageUnion> {
 return api.sendMessage(params)
}
```


### `api.sendMessageAlbum()`
Sends messages grouped together into an album. Currently only photo and video messages can be grouped into an album. Returns sent messages


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Target chat |
| `replyToMessageId` | number | Identifier of a message to reply to or 0 |
| `disableNotification` | boolean | Pass true to disable notification for the messages. Not supported in secret chats |
| `fromBackground` | boolean | Pass true if the messages are sent from the background |
| `inputMessageContents` | [InputMessageContentInputUnion[]](./td-inputs.md#inputmessagecontentinputunion) | Contents of messages to be sent |


**Returns type:** [MessagesUnion](./td-outputs.md#messagesunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SendMessageAlbumParams {
  chatId?: number
  replyToMessageId?: number
  disableNotification?: boolean
  fromBackground?: boolean
  inputMessageContents?: InputMessageContentInputUnion[]
}

function sendMessageAlbum(api: ApiMethods, params: SendMessageAlbumParams): Promise<MessagesUnion> {
 return api.sendMessageAlbum(params)
}
```


### `api.sendPassportAuthorizationForm()`
Sends a Telegram Passport authorization form, effectively sharing data with the service. This method must be called after getPassportAuthorizationFormAvailableElements if some previously available elements need to be used


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `autorizationFormId` | number | Authorization form identifier |
| `types` | [PassportElementTypeInputUnion[]](./td-inputs.md#passportelementtypeinputunion) | Types of Telegram Passport elements chosen by user to complete the authorization form |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SendPassportAuthorizationFormParams {
  autorizationFormId?: number
  types?: PassportElementTypeInputUnion[]
}

function sendPassportAuthorizationForm(api: ApiMethods, params: SendPassportAuthorizationFormParams): Promise<OkUnion> {
 return api.sendPassportAuthorizationForm(params)
}
```


### `api.sendPaymentForm()`
Sends a filled-out payment form to the bot for final verification


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier of the Invoice message |
| `messageId` | number | Message identifier |
| `orderInfoId` | string | Identifier returned by ValidateOrderInfo, or an empty string |
| `shippingOptionId` | string | Identifier of a chosen shipping option, if applicable |
| `credentials` | [InputCredentialsInputUnion](./td-inputs.md#inputcredentialsinputunion) | The credentials chosen by user for payment |


**Returns type:** [PaymentResultUnion](./td-outputs.md#paymentresultunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SendPaymentFormParams {
  chatId?: number
  messageId?: number
  orderInfoId?: string
  shippingOptionId?: string
  credentials?: InputCredentialsInputUnion
}

function sendPaymentForm(api: ApiMethods, params: SendPaymentFormParams): Promise<PaymentResultUnion> {
 return api.sendPaymentForm(params)
}
```


### `api.sendPhoneNumberConfirmationCode()`
Sends phone number confirmation code. Should be called when user presses "https://t.me/confirmphone?phone=*******&hash=**********" or "tg://confirmphone?phone=*******&hash=**********" link


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `hash` | string | Value of the "hash" parameter from the link |
| `phoneNumber` | string | Value of the "phone" parameter from the link |
| `allowFlashCall` | boolean | Pass true if the authentication code may be sent via flash call to the specified phone number |
| `isCurrentPhoneNumber` | boolean | Pass true if the phone number is used on the current device. Ignored if allow_flash_call is false |


**Returns type:** [AuthenticationCodeInfoUnion](./td-outputs.md#authenticationcodeinfounion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SendPhoneNumberConfirmationCodeParams {
  hash?: string
  phoneNumber?: string
  allowFlashCall?: boolean
  isCurrentPhoneNumber?: boolean
}

function sendPhoneNumberConfirmationCode(api: ApiMethods, params: SendPhoneNumberConfirmationCodeParams): Promise<AuthenticationCodeInfoUnion> {
 return api.sendPhoneNumberConfirmationCode(params)
}
```


### `api.sendPhoneNumberVerificationCode()`
Sends a code to verify a phone number to be added to a user's Telegram Passport


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `phoneNumber` | string | The phone number of the user, in international format |
| `allowFlashCall` | boolean | Pass true if the authentication code may be sent via flash call to the specified phone number |
| `isCurrentPhoneNumber` | boolean | Pass true if the phone number is used on the current device. Ignored if allow_flash_call is false |


**Returns type:** [AuthenticationCodeInfoUnion](./td-outputs.md#authenticationcodeinfounion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SendPhoneNumberVerificationCodeParams {
  phoneNumber?: string
  allowFlashCall?: boolean
  isCurrentPhoneNumber?: boolean
}

function sendPhoneNumberVerificationCode(api: ApiMethods, params: SendPhoneNumberVerificationCodeParams): Promise<AuthenticationCodeInfoUnion> {
 return api.sendPhoneNumberVerificationCode(params)
}
```


### `api.setAccountTtl()`
Changes the period of inactivity after which the account of the current user will automatically be deleted


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `ttl` | [AccountTtlInput](./td-inputs.md#accountttlinput) | New account TTL |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetAccountTtlParams {
  ttl?: AccountTtlInput
}

function setAccountTtl(api: ApiMethods, params: SetAccountTtlParams): Promise<OkUnion> {
 return api.setAccountTtl(params)
}
```


### `api.setAlarm()`
Succeeds after a specified amount of time has passed. Can be called before authorization. Can be called before initialization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `seconds` | number | Number of seconds before the function returns |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetAlarmParams {
  seconds?: number
}

function setAlarm(api: ApiMethods, params: SetAlarmParams): Promise<OkUnion> {
 return api.setAlarm(params)
}
```


### `api.setAuthenticationPhoneNumber()`
Sets the phone number of the user and sends an authentication code to the user. Works only when the current authorization state is authorizationStateWaitPhoneNumber


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `phoneNumber` | string | The phone number of the user, in international format |
| `allowFlashCall` | boolean | Pass true if the authentication code may be sent via flash call to the specified phone number |
| `isCurrentPhoneNumber` | boolean | Pass true if the phone number is used on the current device. Ignored if allow_flash_call is false |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetAuthenticationPhoneNumberParams {
  phoneNumber?: string
  allowFlashCall?: boolean
  isCurrentPhoneNumber?: boolean
}

function setAuthenticationPhoneNumber(api: ApiMethods, params: SetAuthenticationPhoneNumberParams): Promise<OkUnion> {
 return api.setAuthenticationPhoneNumber(params)
}
```


### `api.setBio()`
Changes the bio of the current user


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `bio` | string | The new value of the user bio; 0-70 characters without line feeds |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetBioParams {
  bio?: string
}

function setBio(api: ApiMethods, params: SetBioParams): Promise<OkUnion> {
 return api.setBio(params)
}
```


### `api.setBotUpdatesStatus()`
Informs the server about the number of pending bot updates if they haven't been processed for a long time; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `pendingUpdateCount` | number | The number of pending updates |
| `errorMessage` | string | The last error message |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetBotUpdatesStatusParams {
  pendingUpdateCount?: number
  errorMessage?: string
}

function setBotUpdatesStatus(api: ApiMethods, params: SetBotUpdatesStatusParams): Promise<OkUnion> {
 return api.setBotUpdatesStatus(params)
}
```


### `api.setChatClientData()`
Changes client data associated with a chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `clientData` | string | New value of client_data |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetChatClientDataParams {
  chatId?: number
  clientData?: string
}

function setChatClientData(api: ApiMethods, params: SetChatClientDataParams): Promise<OkUnion> {
 return api.setChatClientData(params)
}
```


### `api.setChatDraftMessage()`
Changes the draft message in a chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `draftMessage` | [DraftMessageInput](./td-inputs.md#draftmessageinput) | New draft message; may be null |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetChatDraftMessageParams {
  chatId?: number
  draftMessage?: DraftMessageInput
}

function setChatDraftMessage(api: ApiMethods, params: SetChatDraftMessageParams): Promise<OkUnion> {
 return api.setChatDraftMessage(params)
}
```


### `api.setChatMemberStatus()`
Changes the status of a chat member, needs appropriate privileges. This function is currently not suitable for adding new members to the chat; instead, use addChatMember. The chat member status will not be changed until it has been synchronized with the server


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `userId` | number | User identifier |
| `status` | [ChatMemberStatusInputUnion](./td-inputs.md#chatmemberstatusinputunion) | The new status of the member in the chat |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetChatMemberStatusParams {
  chatId?: number
  userId?: number
  status?: ChatMemberStatusInputUnion
}

function setChatMemberStatus(api: ApiMethods, params: SetChatMemberStatusParams): Promise<OkUnion> {
 return api.setChatMemberStatus(params)
}
```


### `api.setChatNotificationSettings()`
Changes the notification settings of a chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `notificationSettings` | [ChatNotificationSettingsInput](./td-inputs.md#chatnotificationsettingsinput) | New notification settings for the chat |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetChatNotificationSettingsParams {
  chatId?: number
  notificationSettings?: ChatNotificationSettingsInput
}

function setChatNotificationSettings(api: ApiMethods, params: SetChatNotificationSettingsParams): Promise<OkUnion> {
 return api.setChatNotificationSettings(params)
}
```


### `api.setChatPhoto()`
Changes the photo of a chat. Supported only for basic groups, supergroups and channels. Requires administrator rights in basic groups and the appropriate administrator rights in supergroups and channels. The photo will not be changed before request to the server has been completed


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `photo` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | New chat photo. You can use a zero InputFileId to delete the chat photo. Files that are accessible only by HTTP URL are not acceptable |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetChatPhotoParams {
  chatId?: number
  photo?: InputFileInputUnion
}

function setChatPhoto(api: ApiMethods, params: SetChatPhotoParams): Promise<OkUnion> {
 return api.setChatPhoto(params)
}
```


### `api.setChatTitle()`
Changes the chat title. Supported only for basic groups, supergroups and channels. Requires administrator rights in basic groups and the appropriate administrator rights in supergroups and channels. The title will not be changed until the request to the server has been completed


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `title` | string | New title of the chat; 1-128 characters |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetChatTitleParams {
  chatId?: number
  title?: string
}

function setChatTitle(api: ApiMethods, params: SetChatTitleParams): Promise<OkUnion> {
 return api.setChatTitle(params)
}
```


### `api.setCustomLanguagePack()`
Adds or changes a custom local language pack to the current localization target


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `info` | [LanguagePackInfoInput](./td-inputs.md#languagepackinfoinput) | Information about the language pack. Language pack ID must start with 'X', consist only of English letters, digits and hyphens, and must not exceed 64 characters. Can be called before authorization |
| `strings` | [LanguagePackStringInput[]](./td-inputs.md#languagepackstringinput) | Strings of the new language pack |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetCustomLanguagePackParams {
  info?: LanguagePackInfoInput
  strings?: LanguagePackStringInput[]
}

function setCustomLanguagePack(api: ApiMethods, params: SetCustomLanguagePackParams): Promise<OkUnion> {
 return api.setCustomLanguagePack(params)
}
```


### `api.setCustomLanguagePackString()`
Adds, edits or deletes a string in a custom local language pack. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `languagePackId` | string | Identifier of a previously added custom local language pack in the current localization target |
| `newString` | [LanguagePackStringInput](./td-inputs.md#languagepackstringinput) | New language pack string |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetCustomLanguagePackStringParams {
  languagePackId?: string
  newString?: LanguagePackStringInput
}

function setCustomLanguagePackString(api: ApiMethods, params: SetCustomLanguagePackStringParams): Promise<OkUnion> {
 return api.setCustomLanguagePackString(params)
}
```


### `api.setDatabaseEncryptionKey()`
Changes the database encryption key. Usually the encryption key is never changed and is stored in some OS keychain


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `newEncryptionKey` | string | New encryption key |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetDatabaseEncryptionKeyParams {
  newEncryptionKey?: string
}

function setDatabaseEncryptionKey(api: ApiMethods, params: SetDatabaseEncryptionKeyParams): Promise<OkUnion> {
 return api.setDatabaseEncryptionKey(params)
}
```


### `api.setFileGenerationProgress()`
Informs TDLib on a file generation prograss


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `generationId` | number &#124; string | The identifier of the generation process |
| `expectedSize` | number | Expected size of the generated file, in bytes; 0 if unknown |
| `localPrefixSize` | number | The number of bytes already generated |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetFileGenerationProgressParams {
  generationId?: number | string
  expectedSize?: number
  localPrefixSize?: number
}

function setFileGenerationProgress(api: ApiMethods, params: SetFileGenerationProgressParams): Promise<OkUnion> {
 return api.setFileGenerationProgress(params)
}
```


### `api.setGameScore()`
Updates the game score of the specified user in the game; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | The chat to which the message with the game belongs |
| `messageId` | number | Identifier of the message |
| `editMessage` | boolean | True, if the message should be edited |
| `userId` | number | User identifier |
| `score` | number | The new score |
| `force` | boolean | Pass true to update the score even if it decreases. If the score is 0, the user will be deleted from the high score table |


**Returns type:** [MessageUnion](./td-outputs.md#messageunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetGameScoreParams {
  chatId?: number
  messageId?: number
  editMessage?: boolean
  userId?: number
  score?: number
  force?: boolean
}

function setGameScore(api: ApiMethods, params: SetGameScoreParams): Promise<MessageUnion> {
 return api.setGameScore(params)
}
```


### `api.setInlineGameScore()`
Updates the game score of the specified user in a game; for bots only


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `inlineMessageId` | string | Inline message identifier |
| `editMessage` | boolean | True, if the message should be edited |
| `userId` | number | User identifier |
| `score` | number | The new score |
| `force` | boolean | Pass true to update the score even if it decreases. If the score is 0, the user will be deleted from the high score table |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetInlineGameScoreParams {
  inlineMessageId?: string
  editMessage?: boolean
  userId?: number
  score?: number
  force?: boolean
}

function setInlineGameScore(api: ApiMethods, params: SetInlineGameScoreParams): Promise<OkUnion> {
 return api.setInlineGameScore(params)
}
```


### `api.setLogStream()`
Sets new log stream for internal logging of TDLib. This is an offline method. Can be called before authorization. Can be called synchronously


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `logStream` | [LogStreamInputUnion](./td-inputs.md#logstreaminputunion) | New log stream |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetLogStreamParams {
  logStream?: LogStreamInputUnion
}

function setLogStream(api: ApiMethods, params: SetLogStreamParams): Promise<OkUnion> {
 return api.setLogStream(params)
}
```


### `api.setLogTagVerbosityLevel()`
Sets the verbosity level for a specified TDLib internal log tag. This is an offline method. Can be called before authorization. Can be called synchronously


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `tag` | string | Logging tag to change verbosity level |
| `newVerbosityLevel` | number | New verbosity level; 1-1024 |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetLogTagVerbosityLevelParams {
  tag?: string
  newVerbosityLevel?: number
}

function setLogTagVerbosityLevel(api: ApiMethods, params: SetLogTagVerbosityLevelParams): Promise<OkUnion> {
 return api.setLogTagVerbosityLevel(params)
}
```


### `api.setLogVerbosityLevel()`
Sets the verbosity level of the internal logging of TDLib. This is an offline method. Can be called before authorization. Can be called synchronously


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `newVerbosityLevel` | number | New value of the verbosity level for logging. Value 0 corresponds to fatal errors, value 1 corresponds to errors, value 2 corresponds to warnings and debug warnings, value 3 corresponds to informational, value 4 corresponds to debug, value 5 corresponds to verbose debug, value greater than 5 and up to 1023 can be used to enable even more logging |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetLogVerbosityLevelParams {
  newVerbosityLevel?: number
}

function setLogVerbosityLevel(api: ApiMethods, params: SetLogVerbosityLevelParams): Promise<OkUnion> {
 return api.setLogVerbosityLevel(params)
}
```


### `api.setName()`
Changes the first and last name of the current user. If something changes, updateUser will be sent


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `firstName` | string | The new value of the first name for the user; 1-64 characters |
| `lastName` | string | The new value of the optional last name for the user; 0-64 characters |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetNameParams {
  firstName?: string
  lastName?: string
}

function setName(api: ApiMethods, params: SetNameParams): Promise<OkUnion> {
 return api.setName(params)
}
```


### `api.setNetworkType()`
Sets the current network type. Can be called before authorization. Calling this method forces all network connections to reopen, mitigating the delay in switching between different networks, so it should be called whenever the network is changed, even if the network type remains the same. Network type is used to check whether the library can use the network at all and also for collecting detailed network data usage statistics


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `type` | [NetworkTypeInputUnion](./td-inputs.md#networktypeinputunion) | The new network type. By default, networkTypeOther |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetNetworkTypeParams {
  type?: NetworkTypeInputUnion
}

function setNetworkType(api: ApiMethods, params: SetNetworkTypeParams): Promise<OkUnion> {
 return api.setNetworkType(params)
}
```


### `api.setOption()`
Sets the value of an option. (Check the list of available options on https://core.telegram.org/tdlib/options.) Only writable options can be set. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `name` | string | The name of the option |
| `value` | [OptionValueInputUnion](./td-inputs.md#optionvalueinputunion) | The new value of the option |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetOptionParams {
  name?: string
  value?: OptionValueInputUnion
}

function setOption(api: ApiMethods, params: SetOptionParams): Promise<OkUnion> {
 return api.setOption(params)
}
```


### `api.setPassportElement()`
Adds an element to the user's Telegram Passport. May return an error with a message "PHONE_VERIFICATION_NEEDED" or "EMAIL_VERIFICATION_NEEDED" if the chosen phone number or the chosen email address must be verified first


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `element` | [InputPassportElementInputUnion](./td-inputs.md#inputpassportelementinputunion) | Input Telegram Passport element |
| `password` | string | Password of the current user |


**Returns type:** [PassportElementUnion](./td-outputs.md#passportelementunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetPassportElementParams {
  element?: InputPassportElementInputUnion
  password?: string
}

function setPassportElement(api: ApiMethods, params: SetPassportElementParams): Promise<PassportElementUnion> {
 return api.setPassportElement(params)
}
```


### `api.setPassportElementErrors()`
Informs the user that some of the elements in their Telegram Passport contain errors; for bots only. The user will not be able to resend the elements, until the errors are fixed


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | User identifier |
| `errors` | [InputPassportElementErrorInput[]](./td-inputs.md#inputpassportelementerrorinput) | The errors |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetPassportElementErrorsParams {
  userId?: number
  errors?: InputPassportElementErrorInput[]
}

function setPassportElementErrors(api: ApiMethods, params: SetPassportElementErrorsParams): Promise<OkUnion> {
 return api.setPassportElementErrors(params)
}
```


### `api.setPassword()`
Changes the password for the user. If a new recovery email address is specified, then the change will not be applied until the new recovery email address is confirmed


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `oldPassword` | string | Previous password of the user |
| `newPassword` | string | New password of the user; may be empty to remove the password |
| `newHint` | string | New password hint; may be empty |
| `setRecoveryEmailAddress` | boolean | Pass true if the recovery email address should be changed |
| `newRecoveryEmailAddress` | string | New recovery email address; may be empty |


**Returns type:** [PasswordStateUnion](./td-outputs.md#passwordstateunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetPasswordParams {
  oldPassword?: string
  newPassword?: string
  newHint?: string
  setRecoveryEmailAddress?: boolean
  newRecoveryEmailAddress?: string
}

function setPassword(api: ApiMethods, params: SetPasswordParams): Promise<PasswordStateUnion> {
 return api.setPassword(params)
}
```


### `api.setPinnedChats()`
Changes the order of pinned chats


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatIds` | number[] | The new list of pinned chats |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetPinnedChatsParams {
  chatIds?: number[]
}

function setPinnedChats(api: ApiMethods, params: SetPinnedChatsParams): Promise<OkUnion> {
 return api.setPinnedChats(params)
}
```


### `api.setPollAnswer()`
Changes user answer to a poll


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat to which the poll belongs |
| `messageId` | number | Identifier of the message containing the poll |
| `optionIds` | number[] | 0-based identifiers of options, chosen by the user. Currently user can't choose more than 1 option |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetPollAnswerParams {
  chatId?: number
  messageId?: number
  optionIds?: number[]
}

function setPollAnswer(api: ApiMethods, params: SetPollAnswerParams): Promise<OkUnion> {
 return api.setPollAnswer(params)
}
```


### `api.setProfilePhoto()`
Uploads a new profile photo for the current user. If something changes, updateUser will be sent


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `photo` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | Profile photo to set. inputFileId and inputFileRemote may still be unsupported |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetProfilePhotoParams {
  photo?: InputFileInputUnion
}

function setProfilePhoto(api: ApiMethods, params: SetProfilePhotoParams): Promise<OkUnion> {
 return api.setProfilePhoto(params)
}
```


### `api.setRecoveryEmailAddress()`
Changes the 2-step verification recovery email address of the user. If a new recovery email address is specified, then the change will not be applied until the new recovery email address is confirmed If new_recovery_email_address is the same as the email address that is currently set up, this call succeeds immediately and aborts all other requests waiting for an email confirmation


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `password` | string | Password of the current user |
| `newRecoveryEmailAddress` | string | New recovery email address |


**Returns type:** [PasswordStateUnion](./td-outputs.md#passwordstateunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetRecoveryEmailAddressParams {
  password?: string
  newRecoveryEmailAddress?: string
}

function setRecoveryEmailAddress(api: ApiMethods, params: SetRecoveryEmailAddressParams): Promise<PasswordStateUnion> {
 return api.setRecoveryEmailAddress(params)
}
```


### `api.setScopeNotificationSettings()`
Changes notification settings for chats of a given type


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `scope` | [NotificationSettingsScopeInputUnion](./td-inputs.md#notificationsettingsscopeinputunion) | Types of chats for which to change the notification settings |
| `notificationSettings` | [ScopeNotificationSettingsInput](./td-inputs.md#scopenotificationsettingsinput) | The new notification settings for the given scope |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetScopeNotificationSettingsParams {
  scope?: NotificationSettingsScopeInputUnion
  notificationSettings?: ScopeNotificationSettingsInput
}

function setScopeNotificationSettings(api: ApiMethods, params: SetScopeNotificationSettingsParams): Promise<OkUnion> {
 return api.setScopeNotificationSettings(params)
}
```


### `api.setStickerPositionInSet()`
Changes the position of a sticker in the set to which it belongs; for bots only. The sticker set must have been created by the bot


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `sticker` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | Sticker |
| `position` | number | New position of the sticker in the set, zero-based |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetStickerPositionInSetParams {
  sticker?: InputFileInputUnion
  position?: number
}

function setStickerPositionInSet(api: ApiMethods, params: SetStickerPositionInSetParams): Promise<OkUnion> {
 return api.setStickerPositionInSet(params)
}
```


### `api.setSupergroupDescription()`
Changes information about a supergroup or channel; requires appropriate administrator rights


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | Identifier of the supergroup or channel |
| `description` | string | New supergroup or channel description; 0-255 characters |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetSupergroupDescriptionParams {
  supergroupId?: number
  description?: string
}

function setSupergroupDescription(api: ApiMethods, params: SetSupergroupDescriptionParams): Promise<OkUnion> {
 return api.setSupergroupDescription(params)
}
```


### `api.setSupergroupStickerSet()`
Changes the sticker set of a supergroup; requires appropriate rights in the supergroup


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | Identifier of the supergroup |
| `stickerSetId` | number &#124; string | New value of the supergroup sticker set identifier. Use 0 to remove the supergroup sticker set |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetSupergroupStickerSetParams {
  supergroupId?: number
  stickerSetId?: number | string
}

function setSupergroupStickerSet(api: ApiMethods, params: SetSupergroupStickerSetParams): Promise<OkUnion> {
 return api.setSupergroupStickerSet(params)
}
```


### `api.setSupergroupUsername()`
Changes the username of a supergroup or channel, requires creator privileges in the supergroup or channel


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | Identifier of the supergroup or channel |
| `username` | string | New value of the username. Use an empty string to remove the username |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetSupergroupUsernameParams {
  supergroupId?: number
  username?: string
}

function setSupergroupUsername(api: ApiMethods, params: SetSupergroupUsernameParams): Promise<OkUnion> {
 return api.setSupergroupUsername(params)
}
```


### `api.setTdlibParameters()`
Sets the parameters for TDLib initialization. Works only when the current authorization state is authorizationStateWaitTdlibParameters


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `parameters` | [TdlibParametersInput](./td-inputs.md#tdlibparametersinput) | Parameters |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetTdlibParametersParams {
  parameters?: TdlibParametersInput
}

function setTdlibParameters(api: ApiMethods, params: SetTdlibParametersParams): Promise<OkUnion> {
 return api.setTdlibParameters(params)
}
```


### `api.setUserPrivacySettingRules()`
Changes user privacy settings


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `setting` | [UserPrivacySettingInputUnion](./td-inputs.md#userprivacysettinginputunion) | The privacy setting |
| `rules` | [UserPrivacySettingRulesInput](./td-inputs.md#userprivacysettingrulesinput) | The new privacy rules |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetUserPrivacySettingRulesParams {
  setting?: UserPrivacySettingInputUnion
  rules?: UserPrivacySettingRulesInput
}

function setUserPrivacySettingRules(api: ApiMethods, params: SetUserPrivacySettingRulesParams): Promise<OkUnion> {
 return api.setUserPrivacySettingRules(params)
}
```


### `api.setUsername()`
Changes the username of the current user. If something changes, updateUser will be sent


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `username` | string | The new value of the username. Use an empty string to remove the username |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SetUsernameParams {
  username?: string
}

function setUsername(api: ApiMethods, params: SetUsernameParams): Promise<OkUnion> {
 return api.setUsername(params)
}
```


### `api.stopPoll()`
Stops a poll. A poll in a message can be stopped when the message has can_be_edited flag set


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat to which the poll belongs |
| `messageId` | number | Identifier of the message containing the poll |
| `replyMarkup` | [ReplyMarkupInputUnion](./td-inputs.md#replymarkupinputunion) | The new message reply markup; for bots only |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface StopPollParams {
  chatId?: number
  messageId?: number
  replyMarkup?: ReplyMarkupInputUnion
}

function stopPoll(api: ApiMethods, params: StopPollParams): Promise<OkUnion> {
 return api.stopPoll(params)
}
```


### `api.synchronizeLanguagePack()`
Fetches the latest versions of all strings from a language pack in the current localization target from the server. This method doesn't need to be called explicitly for the current used/base language packs. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `languagePackId` | string | Language pack identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface SynchronizeLanguagePackParams {
  languagePackId?: string
}

function synchronizeLanguagePack(api: ApiMethods, params: SynchronizeLanguagePackParams): Promise<OkUnion> {
 return api.synchronizeLanguagePack(params)
}
```


### `api.terminateAllOtherSessions()`
Terminates all other sessions of the current user




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function terminateAllOtherSessions(api: ApiMethods): Promise<OkUnion> {
 return api.terminateAllOtherSessions()
}
```


### `api.terminateSession()`
Terminates a session of the current user


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `sessionId` | number &#124; string | Session identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface TerminateSessionParams {
  sessionId?: number | string
}

function terminateSession(api: ApiMethods, params: TerminateSessionParams): Promise<OkUnion> {
 return api.terminateSession(params)
}
```


### `api.testCallBytes()`
Returns the received bytes; for testing only. This is an offline method. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `x` | string | Bytes to return |


**Returns type:** [TestBytesUnion](./td-outputs.md#testbytesunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface TestCallBytesParams {
  x?: string
}

function testCallBytes(api: ApiMethods, params: TestCallBytesParams): Promise<TestBytesUnion> {
 return api.testCallBytes(params)
}
```


### `api.testCallEmpty()`
Does nothing; for testing only. This is an offline method. Can be called before authorization




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function testCallEmpty(api: ApiMethods): Promise<OkUnion> {
 return api.testCallEmpty()
}
```


### `api.testCallString()`
Returns the received string; for testing only. This is an offline method. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `x` | string | String to return |


**Returns type:** [TestStringUnion](./td-outputs.md#teststringunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface TestCallStringParams {
  x?: string
}

function testCallString(api: ApiMethods, params: TestCallStringParams): Promise<TestStringUnion> {
 return api.testCallString(params)
}
```


### `api.testCallVectorInt()`
Returns the received vector of numbers; for testing only. This is an offline method. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `x` | number[] | Vector of numbers to return |


**Returns type:** [TestVectorIntUnion](./td-outputs.md#testvectorintunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface TestCallVectorIntParams {
  x?: number[]
}

function testCallVectorInt(api: ApiMethods, params: TestCallVectorIntParams): Promise<TestVectorIntUnion> {
 return api.testCallVectorInt(params)
}
```


### `api.testCallVectorIntObject()`
Returns the received vector of objects containing a number; for testing only. This is an offline method. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `x` | [TestIntInput[]](./td-inputs.md#testintinput) | Vector of objects to return |


**Returns type:** [TestVectorIntObjectUnion](./td-outputs.md#testvectorintobjectunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface TestCallVectorIntObjectParams {
  x?: TestIntInput[]
}

function testCallVectorIntObject(api: ApiMethods, params: TestCallVectorIntObjectParams): Promise<TestVectorIntObjectUnion> {
 return api.testCallVectorIntObject(params)
}
```


### `api.testCallVectorString()`
Returns the received vector of strings; for testing only. This is an offline method. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `x` | string[] | Vector of strings to return |


**Returns type:** [TestVectorStringUnion](./td-outputs.md#testvectorstringunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface TestCallVectorStringParams {
  x?: string[]
}

function testCallVectorString(api: ApiMethods, params: TestCallVectorStringParams): Promise<TestVectorStringUnion> {
 return api.testCallVectorString(params)
}
```


### `api.testCallVectorStringObject()`
Returns the received vector of objects containing a string; for testing only. This is an offline method. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `x` | [TestStringInput[]](./td-inputs.md#teststringinput) | Vector of objects to return |


**Returns type:** [TestVectorStringObjectUnion](./td-outputs.md#testvectorstringobjectunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface TestCallVectorStringObjectParams {
  x?: TestStringInput[]
}

function testCallVectorStringObject(api: ApiMethods, params: TestCallVectorStringObjectParams): Promise<TestVectorStringObjectUnion> {
 return api.testCallVectorStringObject(params)
}
```


### `api.testGetDifference()`
Forces an updates.getDifference call to the Telegram servers; for testing only




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function testGetDifference(api: ApiMethods): Promise<OkUnion> {
 return api.testGetDifference()
}
```


### `api.testNetwork()`
Sends a simple network request to the Telegram servers; for testing only. Can be called before authorization




**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function testNetwork(api: ApiMethods): Promise<OkUnion> {
 return api.testNetwork()
}
```


### `api.testSquareInt()`
Returns the squared received number; for testing only. This is an offline method. Can be called before authorization


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `x` | number | Number to square |


**Returns type:** [TestIntUnion](./td-outputs.md#testintunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface TestSquareIntParams {
  x?: number
}

function testSquareInt(api: ApiMethods, params: TestSquareIntParams): Promise<TestIntUnion> {
 return api.testSquareInt(params)
}
```


### `api.testUseError()`
Does nothing and ensures that the Error object is used; for testing only. This is an offline method. Can be called before authorization




**Returns type:** [ErrorUnion](./td-outputs.md#errorunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function testUseError(api: ApiMethods): Promise<ErrorUnion> {
 return api.testUseError()
}
```


### `api.testUseUpdate()`
Does nothing and ensures that the Update object is used; for testing only. This is an offline method. Can be called before authorization




**Returns type:** [UpdateUnion](./td-outputs.md#updateunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

function testUseUpdate(api: ApiMethods): Promise<UpdateUnion> {
 return api.testUseUpdate()
}
```


### `api.toggleBasicGroupAdministrators()`
Toggles the "All members are admins" setting in basic groups; requires creator privileges in the group


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `basicGroupId` | number | Identifier of the basic group |
| `everyoneIsAdministrator` | boolean | New value of everyone_is_administrator |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface ToggleBasicGroupAdministratorsParams {
  basicGroupId?: number
  everyoneIsAdministrator?: boolean
}

function toggleBasicGroupAdministrators(api: ApiMethods, params: ToggleBasicGroupAdministratorsParams): Promise<OkUnion> {
 return api.toggleBasicGroupAdministrators(params)
}
```


### `api.toggleChatDefaultDisableNotification()`
Changes the value of the default disable_notification parameter, used when a message is sent to a chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `defaultDisableNotification` | boolean | New value of default_disable_notification |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface ToggleChatDefaultDisableNotificationParams {
  chatId?: number
  defaultDisableNotification?: boolean
}

function toggleChatDefaultDisableNotification(api: ApiMethods, params: ToggleChatDefaultDisableNotificationParams): Promise<OkUnion> {
 return api.toggleChatDefaultDisableNotification(params)
}
```


### `api.toggleChatIsMarkedAsUnread()`
Changes the marked as unread state of a chat


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `isMarkedAsUnread` | boolean | New value of is_marked_as_unread |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface ToggleChatIsMarkedAsUnreadParams {
  chatId?: number
  isMarkedAsUnread?: boolean
}

function toggleChatIsMarkedAsUnread(api: ApiMethods, params: ToggleChatIsMarkedAsUnreadParams): Promise<OkUnion> {
 return api.toggleChatIsMarkedAsUnread(params)
}
```


### `api.toggleChatIsPinned()`
Changes the pinned state of a chat. You can pin up to GetOption("pinned_chat_count_max") non-secret chats and the same number of secret chats


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `isPinned` | boolean | New value of is_pinned |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface ToggleChatIsPinnedParams {
  chatId?: number
  isPinned?: boolean
}

function toggleChatIsPinned(api: ApiMethods, params: ToggleChatIsPinnedParams): Promise<OkUnion> {
 return api.toggleChatIsPinned(params)
}
```


### `api.toggleSupergroupInvites()`
Toggles whether all members of a supergroup can add new members; requires appropriate administrator rights in the supergroup.


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | Identifier of the supergroup |
| `anyoneCanInvite` | boolean | New value of anyone_can_invite |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface ToggleSupergroupInvitesParams {
  supergroupId?: number
  anyoneCanInvite?: boolean
}

function toggleSupergroupInvites(api: ApiMethods, params: ToggleSupergroupInvitesParams): Promise<OkUnion> {
 return api.toggleSupergroupInvites(params)
}
```


### `api.toggleSupergroupIsAllHistoryAvailable()`
Toggles whether the message history of a supergroup is available to new members; requires appropriate administrator rights in the supergroup.


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | The identifier of the supergroup |
| `isAllHistoryAvailable` | boolean | The new value of is_all_history_available |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface ToggleSupergroupIsAllHistoryAvailableParams {
  supergroupId?: number
  isAllHistoryAvailable?: boolean
}

function toggleSupergroupIsAllHistoryAvailable(api: ApiMethods, params: ToggleSupergroupIsAllHistoryAvailableParams): Promise<OkUnion> {
 return api.toggleSupergroupIsAllHistoryAvailable(params)
}
```


### `api.toggleSupergroupSignMessages()`
Toggles sender signatures messages sent in a channel; requires appropriate administrator rights in the channel.


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `supergroupId` | number | Identifier of the channel |
| `signMessages` | boolean | New value of sign_messages |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface ToggleSupergroupSignMessagesParams {
  supergroupId?: number
  signMessages?: boolean
}

function toggleSupergroupSignMessages(api: ApiMethods, params: ToggleSupergroupSignMessagesParams): Promise<OkUnion> {
 return api.toggleSupergroupSignMessages(params)
}
```


### `api.unblockUser()`
Removes a user from the blacklist


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | User identifier |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface UnblockUserParams {
  userId?: number
}

function unblockUser(api: ApiMethods, params: UnblockUserParams): Promise<OkUnion> {
 return api.unblockUser(params)
}
```


### `api.unpinChatMessage()`
Removes the pinned message from a chat; requires appropriate administrator rights in the group or channel


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface UnpinChatMessageParams {
  chatId?: number
}

function unpinChatMessage(api: ApiMethods, params: UnpinChatMessageParams): Promise<OkUnion> {
 return api.unpinChatMessage(params)
}
```


### `api.upgradeBasicGroupChatToSupergroupChat()`
Creates a new supergroup from an existing basic group and sends a corresponding messageChatUpgradeTo and messageChatUpgradeFrom. Deactivates the original basic group


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Identifier of the chat to upgrade |


**Returns type:** [ChatUnion](./td-outputs.md#chatunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface UpgradeBasicGroupChatToSupergroupChatParams {
  chatId?: number
}

function upgradeBasicGroupChatToSupergroupChat(api: ApiMethods, params: UpgradeBasicGroupChatToSupergroupChatParams): Promise<ChatUnion> {
 return api.upgradeBasicGroupChatToSupergroupChat(params)
}
```


### `api.uploadFile()`
Asynchronously uploads a file to the cloud without sending it in a message. updateFile will be used to notify about upload progress and successful completion of the upload. The file will not have a persistent remote identifier until it will be sent in a message


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `file` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | File to upload |
| `fileType` | [FileTypeInputUnion](./td-inputs.md#filetypeinputunion) | File type |
| `priority` | number | Priority of the upload (1-32). The higher the priority, the earlier the file will be uploaded. If the priorities of two files are equal, then the first one for which uploadFile was called will be uploaded first |


**Returns type:** [FileUnion](./td-outputs.md#fileunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface UploadFileParams {
  file?: InputFileInputUnion
  fileType?: FileTypeInputUnion
  priority?: number
}

function uploadFile(api: ApiMethods, params: UploadFileParams): Promise<FileUnion> {
 return api.uploadFile(params)
}
```


### `api.uploadStickerFile()`
Uploads a PNG image with a sticker; for bots only; returns the uploaded file


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `userId` | number | Sticker file owner |
| `pngSticker` | [InputFileInputUnion](./td-inputs.md#inputfileinputunion) | PNG image with the sticker; must be up to 512 kB in size and fit in 512x512 square |


**Returns type:** [FileUnion](./td-outputs.md#fileunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface UploadStickerFileParams {
  userId?: number
  pngSticker?: InputFileInputUnion
}

function uploadStickerFile(api: ApiMethods, params: UploadStickerFileParams): Promise<FileUnion> {
 return api.uploadStickerFile(params)
}
```


### `api.validateOrderInfo()`
Validates the order information provided by a user and returns the available shipping options for a flexible invoice


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier of the Invoice message |
| `messageId` | number | Message identifier |
| `orderInfo` | [OrderInfoInput](./td-inputs.md#orderinfoinput) | The order information, provided by the user |
| `allowSave` | boolean | True, if the order information can be saved |


**Returns type:** [ValidatedOrderInfoUnion](./td-outputs.md#validatedorderinfounion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface ValidateOrderInfoParams {
  chatId?: number
  messageId?: number
  orderInfo?: OrderInfoInput
  allowSave?: boolean
}

function validateOrderInfo(api: ApiMethods, params: ValidateOrderInfoParams): Promise<ValidatedOrderInfoUnion> {
 return api.validateOrderInfo(params)
}
```


### `api.viewMessages()`
Informs TDLib that messages are being viewed by the user. Many useful activities depend on whether the messages are currently being viewed or not (e.g., marking messages as read, incrementing a view counter, updating a view counter, removing deleted messages in supergroups and channels)


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `chatId` | number | Chat identifier |
| `messageIds` | number[] | The identifiers of the messages being viewed |
| `forceRead` | boolean | True, if messages in closed chats should be marked as read |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface ViewMessagesParams {
  chatId?: number
  messageIds?: number[]
  forceRead?: boolean
}

function viewMessages(api: ApiMethods, params: ViewMessagesParams): Promise<OkUnion> {
 return api.viewMessages(params)
}
```


### `api.viewTrendingStickerSets()`
Informs the server that some trending sticker sets have been viewed by the user


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `stickerSetIds` | number &#124; string[] | Identifiers of viewed trending sticker sets |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface ViewTrendingStickerSetsParams {
  stickerSetIds?: number | string[]
}

function viewTrendingStickerSets(api: ApiMethods, params: ViewTrendingStickerSetsParams): Promise<OkUnion> {
 return api.viewTrendingStickerSets(params)
}
```


### `api.writeGeneratedFilePart()`
Writes a part of a generated file. This method is intended to be used only if the client has no direct access to TDLib's file system, because it is usually slower than a direct write to the destination file


**Parameters:**

| Parameter | Type | Description |
| ---- | ---- | ---- |
| `generationId` | number &#124; string | The identifier of the generation process |
| `offset` | number | The offset from which to write the data to the file |
| `data` | string | The data to write |


**Returns type:** [OkUnion](./td-outputs.md#okunion)


Typescript example:
```typescript
import { ApiMethods } from 'airgram-api'

interface WriteGeneratedFilePartParams {
  generationId?: number | string
  offset?: number
  data?: string
}

function writeGeneratedFilePart(api: ApiMethods, params: WriteGeneratedFilePartParams): Promise<OkUnion> {
 return api.writeGeneratedFilePart(params)
}
```
