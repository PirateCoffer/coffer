(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{809:function(t,e,n){var content=n(822);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("38a47b76",content,!0,{sourceMap:!1})},821:function(t,e,n){"use strict";n(809)},822:function(t,e,n){(e=n(14)(!1)).push([t.i,".fader[data-v-28220341],.fader-btn[data-v-28220341]{transition:opacity .4s ease-in-out}.fader-btn[data-v-28220341]{opacity:0}.fader.on-hover[data-v-28220341]{opacity:.7}.fader-btn.on-hover[data-v-28220341]{opacity:1}",""]),t.exports=e},888:function(t,e,n){"use strict";n.r(e);n(72);var r=n(23),o={name:"AccountSettings",data:function(){return{avatarFile:null,avatarPath:"/coffer/media/images/avatar.png",anonPath:"/coffer/media/images/avatar.png"}},methods:{editAvatar:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$refs.fileInput.$refs.input.click();case 1:case"end":return e.stop()}}),e)})))()},removeAvatar:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.avatarPath=t.anonPath;case 1:case"end":return e.stop()}}),e)})))()},saveIntroduction:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.notify("Introduction Saved");case 1:case"end":return e.stop()}}),e)})))()},saveHomepage:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.notify("Homepage Saved");case 1:case"end":return e.stop()}}),e)})))()}}},c=(n(821),n(36)),l=n(46),v=n.n(l),d=n(222),f=n(230),w=n(218),m=n(45),h=n(770),_=n(783),y=n(879),x=n(880),P=n(170),C=n(771),V=n(775),k=n(789),A=n(829),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("v-container",[n("v-row",[n("v-col",[n("div",{staticClass:"text-h4 mb-3"},[t._v("Basic user information")]),t._v(" "),n("div",{staticClass:"text-h5 mb-1"},[t._v("Avatar")]),t._v(" "),n("v-file-input",{ref:"fileInput",staticStyle:{display:"none"},model:{value:t.avatarFile,callback:function(e){t.avatarFile=e},expression:"avatarFile"}}),t._v(" "),n("div",{staticClass:"d-flex flex-column",staticStyle:{width:"80px"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[n("v-avatar",{class:{fader:!0,"on-hover":r},staticStyle:{cursor:"pointer"},attrs:{size:"80"},on:{click:t.editAvatar}},[n("v-img",{attrs:{src:t.avatarPath}},[n("div",{staticClass:"d-flex fill-height justify-center",staticStyle:{width:"100%"}},[n("div",{class:{"align-self-center":!0,"fader-btn":!0,"on-hover":r}},[t._v("\n                      Edit\n                    ")])])])],1)]}}])}),t._v(" "),n("v-btn",{staticClass:"mt-2",attrs:{small:"",text:""},on:{click:t.removeAvatar}},[t._v("Remove")])],1),t._v(" "),n("div",{staticClass:"text-h5 mt-4"},[t._v("Vacation")]),t._v(" "),n("v-switch",{attrs:{label:"Buying Vacation",hint:"Hides all your ads for purchase from public view and prevents other users from requesting a trade","persistent-hint":""}}),t._v(" "),n("v-switch",{attrs:{label:"Selling Vacation",hint:"Hides all your ads for sale from public view and prevents other users from requesting a trade","persistent-hint":""}}),t._v(" "),n("div",{staticClass:"text-h5 mt-6"},[t._v("Personal Information")]),t._v(" "),n("v-textarea",{attrs:{label:"Personal introduction",rows:"1","auto-grow":"","hide-details":"","append-outer-icon":"mdi-content-save"},on:{"click:append-outer":t.saveIntroduction}}),t._v(" "),n("div",{staticClass:"caption mt-1"},[t._v("\n            Shown on your public profile. Maximum 65536 characters. Can use markdown for styling. "),n("n-link",{attrs:{to:"/guides/markdown"}},[t._v("How to use markdown?")])],1),t._v(" "),n("v-text-field",{attrs:{label:"Homepage",hint:"Shown on your public profile. Only valid URL accepted (e.g. https://localcrypto.trade)","persistent-hint":"","append-outer-icon":"mdi-content-save"},on:{"click:append-outer":t.saveHomepage}})],1)],1)],1)],1)],1)}),[],!1,null,"28220341",null),T=component.exports;v()(component,{VAvatar:d.a,VBtn:f.a,VCard:w.a,VCardText:m.c,VCol:h.a,VContainer:_.a,VFileInput:y.a,VHover:x.a,VImg:P.a,VRow:C.a,VSwitch:V.a,VTextField:k.a,VTextarea:A.a});var S={name:"AccountNotifications",data:function(){return{}},methods:{saveTelegramId:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.notify("Telegram ID Saved");case 1:case"end":return e.stop()}}),e)})))()}}},I=n(811),R=Object(c.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("v-container",[n("v-row",[n("v-col",[n("div",{staticClass:"text-h4 mb-3"},[t._v("Notifications")]),t._v(" "),n("v-switch",{attrs:{label:"Enable web notifications",hint:"You will get external notifications outside the browser window","persistent-hint":"",color:"green"}}),t._v(" "),n("div",{staticClass:"text-h5 mt-6"},[t._v("Email Notifications")]),t._v(" "),n("v-switch",{attrs:{label:"Disable sensitive information from email notifications",hint:"The emails will just ask you to log in to the site, where the actual notifications will be","persistent-hint":"",color:"green"}}),t._v(" "),n("v-switch",{attrs:{label:"Send email notifications for new trade contacts",hint:"Send email notifications for new contact requests","persistent-hint":"",color:"green"}}),t._v(" "),n("v-switch",{attrs:{label:"Send email notifications for new online payments",hint:"Send email notifications for new online payments in your trades","persistent-hint":"",color:"green"}}),t._v(" "),n("v-switch",{attrs:{label:"Send email notifications for online escrow released",hint:"Send email notifications from new online escrow releases","persistent-hint":"",color:"green"}}),t._v(" "),n("div",{staticClass:"text-h5 mt-6 mb-3"},[t._v("Telegram Notifications")]),t._v(" "),n("v-alert",{staticClass:"pa-7",attrs:{type:"info",border:"left",text:"",icon:"mdi-information-outline"}},[n("n-link",{attrs:{to:"/guides/telegram"}},[t._v("How do I turn on LocalCrypto Telegram mobile notifications?")])],1),t._v(" "),n("v-text-field",{attrs:{label:"Telegram Notifications ID",hint:"Telegram Notifications ID given to you by the LocalMonero Notification Bot","persistent-hint":"","append-outer-icon":"mdi-content-save"},on:{"click:append-outer":t.saveTelegramId}}),t._v(" "),n("v-switch",{attrs:{label:"Send Telegram notifications for new trade requests",hint:"Send Telegram notifications for new trade requests","persistent-hint":"",color:"green"}}),t._v(" "),n("v-switch",{attrs:{label:"Send Telegram notifications for new online payments",hint:"Send Telegram notifications for new online payments in your trades","persistent-hint":"",color:"green"}}),t._v(" "),n("v-switch",{attrs:{label:"Send Telegram notifications for online escrow release",hint:"Send Telegram notifications for online escrow release","persistent-hint":"",color:"green"}}),t._v(" "),n("v-switch",{attrs:{label:"Send Telegram notifications for new chat messages in trades",hint:"Send Telegram notifications for new chat messages in trades","persistent-hint":"",color:"green"}})],1)],1)],1)],1)],1)}),[],!1,null,null,null),E=R.exports;v()(R,{VAlert:I.a,VCard:w.a,VCardText:m.c,VCol:h.a,VContainer:_.a,VRow:C.a,VSwitch:V.a,VTextField:k.a});var F={name:"AccountEmail",data:function(){return{currentEmail:"info@example.com",showPw:!1}},methods:{changeEmail:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.notify("Email Changed");case 1:case"end":return e.stop()}}),e)})))()}}},O=n(796),j=Object(c.a)(F,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("v-container",[n("v-row",[n("v-col",[n("div",{staticClass:"text-h4 mb-3"},[t._v("Change/verify email")]),t._v(" "),n("div",{staticClass:"text-h5 mb-3 mt-4"},[n("span",[t._v("Current email: "+t._s(t.currentEmail))]),t._v(" "),n("v-chip",{staticClass:"ma-2",attrs:{label:"",color:"green"}},[t._v("Verified")])],1),t._v(" "),n("v-text-field",{attrs:{label:"New email",hint:"A verification letter will be sent to verify your email","persistent-hint":""}}),t._v(" "),n("v-text-field",{attrs:{label:"Password",hint:"8-72 characters","persistent-hint":"",type:t.showPw?"text":"password","append-icon":t.showPw?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(e){t.showPw=!t.showPw}}}),t._v(" "),n("v-btn",{staticClass:"mt-5",attrs:{color:"primary"},on:{click:t.changeEmail}},[t._v("Change Email")])],1)],1)],1)],1)],1)}),[],!1,null,null,null),N=j.exports;v()(j,{VBtn:f.a,VCard:w.a,VCardText:m.c,VChip:O.a,VCol:h.a,VContainer:_.a,VRow:C.a,VTextField:k.a});var B={name:"AccountPassword",data:function(){return{showPw:!1,oldPw:"",newPw:"",confirmPw:""}},computed:{valid:function(){return"password"===this.oldPw&&this.newPw.length>7&&this.newPw===this.confirmPw}},methods:{changePassword:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.notify("Password Changed");case 1:case"end":return e.stop()}}),e)})))()}}},H=Object(c.a)(B,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("v-container",[n("v-row",[n("v-col",[n("div",{staticClass:"text-h4 mb-3"},[t._v("Change password")]),t._v(" "),n("div",{staticClass:"body-1 mb-3 mt-2"},[t._v("\n            After changing the password you will have to log in again using your new password\n          ")]),t._v(" "),n("v-text-field",{attrs:{label:"Old Password",hint:"Please enter your current password to proceed","persistent-hint":"",type:t.showPw?"text":"password","append-icon":t.showPw?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(e){t.showPw=!t.showPw}},model:{value:t.oldPw,callback:function(e){t.oldPw=e},expression:"oldPw"}}),t._v(" "),n("v-text-field",{attrs:{label:"New Password",hint:"8-72 characters","persistent-hint":"",type:t.showPw?"text":"password","append-icon":t.showPw?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(e){t.showPw=!t.showPw}},model:{value:t.newPw,callback:function(e){t.newPw=e},expression:"newPw"}}),t._v(" "),n("v-text-field",{attrs:{label:"Confirm New Password",hint:"Please confirm your new password","persistent-hint":"",type:t.showPw?"text":"password","append-icon":t.showPw?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(e){t.showPw=!t.showPw}},model:{value:t.confirmPw,callback:function(e){t.confirmPw=e},expression:"confirmPw"}}),t._v(" "),n("v-btn",{staticClass:"mt-5",attrs:{disabled:!t.valid,color:"primary"},on:{click:t.changePassword}},[t._v("Change Password")])],1)],1)],1)],1)],1)}),[],!1,null,null,null),$=H.exports;v()(H,{VBtn:f.a,VCard:w.a,VCardText:m.c,VCol:h.a,VContainer:_.a,VRow:C.a,VTextField:k.a});var K={name:"AccountTwoFactor",data:function(){return{pw:null,showPw:!1}},computed:{valid:function(){return!!(this.pw&&this.pw.length>7)}},methods:{genApiKey:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.notify("New API Key Generated");case 1:case"end":return e.stop()}}),e)})))()}}},D=n(133),L=Object(c.a)(K,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("v-container",[n("v-row",[n("v-col",[n("div",{staticClass:"text-h4 mb-1"},[t._v("Two-factor authentication (2FA)")]),t._v(" "),n("div",{staticClass:"body-1 mb-3"},[t._v("\n            When two-factor authentication is active you need to enter a one time code every time you log in or withdraw funds.\n          ")]),t._v(" "),n("div",{staticClass:"text-h5 mb-3 mt-4"},[n("span",[t._v("Your 2FA status:")]),t._v(" "),n("span",{staticClass:"error--text"},[n("v-icon",{staticClass:"pb-1",attrs:{color:"error"}},[t._v("mdi-lock-open-outline")]),t._v(" "),n("span",[t._v("DISABLED")])],1)]),t._v(" "),n("v-alert",{staticClass:"px-6",attrs:{type:"error",border:"left"},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("v-icon",{staticClass:"mr-4"},[t._v("mdi-alert-outline")])]},proxy:!0}])},[n("b",[t._v("PLEASE NOTE:")]),t._v(" if you lose your 2FA credentials (lose or break phone, delete your 2FA app and lose your backup code) you "),n("b",[t._v("will not be able to login into your account ever again.")]),t._v(" LocalCrypto will not be able to help you. "),n("b",[t._v("Use at your own risk.")])]),t._v(" "),n("v-alert",{staticClass:"px-6",attrs:{type:"info",border:"left",text:"",icon:"mdi-information-outline"}},[n("n-link",{attrs:{to:"/guides/2fa"}},[t._v("Read the two-factor authentication activation guide")])],1),t._v(" "),n("v-text-field",{attrs:{label:"Password",hint:"8-72 characters","persistent-hint":"",type:t.showPw?"text":"password","append-icon":t.showPw?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(e){t.showPw=!t.showPw}},model:{value:t.pw,callback:function(e){t.pw=e},expression:"pw"}}),t._v(" "),n("v-btn",{staticClass:"mt-5",attrs:{color:"primary",disabled:!t.valid},on:{click:t.genApiKey}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-cellphone-lock")]),t._v("\n            Enable 2FA\n          ")],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null),G=L.exports;v()(L,{VAlert:I.a,VBtn:f.a,VCard:w.a,VCardText:m.c,VCol:h.a,VContainer:_.a,VIcon:D.a,VRow:C.a,VTextField:k.a});var M={name:"AccountApi",data:function(){return{pw:null,showPw:!1}},computed:{valid:function(){return!!(this.pw&&this.pw.length>7)}},methods:{genApiKey:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.notify("New API Key Generated");case 1:case"end":return e.stop()}}),e)})))()}}},U=Object(c.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("v-container",[n("v-row",[n("v-col",[n("div",{staticClass:"text-h4 mb-1"},[t._v("API Key")]),t._v(" "),n("div",{staticClass:"body-1 mb-3"},[t._v('\n            To be able to use private API endpoints, you have to set your API key as the "Authorization" header. The key expires in 5 years. Find more details in the API docs.\n          ')]),t._v(" "),n("div",{staticClass:"text-h5 mb-1 mt-4"},[t._v("\n            Generate new API key\n          ")]),t._v(" "),n("div",{staticClass:"body-1 mb-3 mt-1"},[t._v("\n            Generating a key will also invalidate the previously generated API key\n          ")]),t._v(" "),n("v-text-field",{attrs:{label:"Password",hint:"8-72 characters","persistent-hint":"",type:t.showPw?"text":"password","append-icon":t.showPw?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(e){t.showPw=!t.showPw}},model:{value:t.pw,callback:function(e){t.pw=e},expression:"pw"}}),t._v(" "),n("v-btn",{staticClass:"mt-5",attrs:{color:"primary",disabled:!t.valid},on:{click:t.genApiKey}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-api")]),t._v("\n            Generate\n          ")],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null),z=U.exports;v()(U,{VBtn:f.a,VCard:w.a,VCardText:m.c,VCol:h.a,VContainer:_.a,VIcon:D.a,VRow:C.a,VTextField:k.a});var J={name:"AccountSettingsPage",components:{AccountSettings:T,AccountNotifications:E,AccountEmail:N,AccountPassword:$,AccountTwoFactor:G,AccountApi:z},data:function(){return{tab:null}},computed:{},created:function(){},mounted:function(){},methods:{}},Y=n(757),W=n(881),Q=n(904),X=n(903),Z=n(873),tt=n(836),et=Object(c.a)(J,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",[n("v-card",[n("v-tabs",{attrs:{"icons-and-text":"","show-arrows":"","fixed-tabs":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tabs-slider"),t._v(" "),n("v-tab",{attrs:{href:"#settings"}},[t._v("User Settings"),n("v-icon",[t._v("mdi-cog")])],1),t._v(" "),n("v-tab",{attrs:{href:"#notifications"}},[t._v("Notifications"),n("v-icon",[t._v("mdi-message-alert")])],1),t._v(" "),n("v-tab",{attrs:{href:"#change-email"}},[t._v("Change Email"),n("v-icon",[t._v("mdi-email")])],1),t._v(" "),n("v-tab",{attrs:{href:"#change-password"}},[t._v("Change Password"),n("v-icon",[t._v("mdi-lock")])],1),t._v(" "),n("v-tab",{attrs:{href:"#2fa"}},[t._v("Two-Factor Authentication"),n("v-icon",[t._v("mdi-cellphone-lock")])],1),t._v(" "),n("v-tab",{attrs:{href:"#api-key"}},[t._v("API Key"),n("v-icon",[t._v("mdi-api")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",{attrs:{value:"settings"}},[n("account-settings")],1),t._v(" "),n("v-tab-item",{attrs:{value:"notifications"}},[n("account-notifications")],1),t._v(" "),n("v-tab-item",{attrs:{value:"change-email"}},[n("account-email")],1),t._v(" "),n("v-tab-item",{attrs:{value:"change-password"}},[n("account-password")],1),t._v(" "),n("v-tab-item",{attrs:{value:"2fa"}},[n("account-two-factor")],1),t._v(" "),n("v-tab-item",{attrs:{value:"api-key"}},[n("account-api")],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=et.exports;v()(et,{VCard:w.a,VCol:h.a,VContainer:_.a,VDivider:Y.a,VIcon:D.a,VRow:C.a,VTab:W.a,VTabItem:Q.a,VTabs:X.a,VTabsItems:Z.a,VTabsSlider:tt.a})}}]);