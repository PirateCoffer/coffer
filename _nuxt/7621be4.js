(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{787:function(t,e,n){var content=n(788);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("12a190a6",content,!0,{sourceMap:!1})},788:function(t,e,n){(e=n(14)(!1)).push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}",""]),t.exports=e},812:function(t,e,n){var content=n(838);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("7f216822",content,!0,{sourceMap:!1})},813:function(t,e,n){"use strict";n(13),n(9),n(7),n(10),n(21),n(22),n(6);var r=n(2),o=(n(787),n(485),n(65)),c=n(113),d=n(231);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=d.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return f(f({},c.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(o.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",f(f({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},837:function(t,e,n){"use strict";n(812)},838:function(t,e,n){(e=n(14)(!1)).push([t.i,"#transactions-table tr{cursor:pointer}.wallet-content .v-expansion-panel-content__wrap{padding:0}",""]),t.exports=e},895:function(t,e,n){"use strict";n.r(e);n(72);var r=n(23),o={name:"Wallet",components:{},data:function(){return{tab:null,feeType:0,altDeposit:!1,altWithdraw:!1,continueDialog:!1,headers:[{text:"",align:"start",value:"side",width:"5%"},{text:"Date",width:"20%",align:"start",value:"date"},{text:"Received ARRR",width:"20%",align:"start",value:"received"},{text:"Sent ARRR",width:"15%",align:"start",value:"sent"},{text:"Description",width:"40%",align:"start",value:"description",sortable:!1}],transactions:[{side:"sell",date:"2020-08-09 7:02",received:"",sent:"0.214339299110",txid:"11dbc844-a534-4995-9bc8-44a534d9958d"},{side:"buy",date:"2020-08-05 14:21",received:"0.109673173942",sent:"",txid:"afb63694-5c93-4e29-b636-945c932e29fe"},{side:"sell",date:"2020-08-05 14:10 ",received:"",sent:"0.205368035787",txid:"9064ff75-61ca-499f-a4ff-7561ca799f5f"},{side:"buy",date:"2020-08-05 14:21",received:"0.109673173942",sent:"",txid:"afb63694-5c93-4e29-b636-945c932e29fe"},{side:"sell",date:"2020-08-05 14:10 ",received:"",sent:"0.205368035787",txid:"9064ff75-61ca-499f-a4ff-7561ca799f5f"},{side:"buy",date:"2020-08-05 14:21",received:"0.109673173942",sent:"",txid:"afb63694-5c93-4e29-b636-945c932e29fe"},{side:"sell",date:"2020-08-05 14:10 ",received:"",sent:"0.205368035787",txid:"9064ff75-61ca-499f-a4ff-7561ca799f5f"}]}},computed:{localTx:function(){return!1},standardFee:function(){return"0.000109925000"},lowFee:function(){return"0.000027481250"}},created:function(){},mounted:function(){},methods:{clickRow:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.$router.push("/trade/".concat(t.txid));case 1:case"end":return e.stop()}}),e)})))()},copy:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.notify("Address copied to clipboard");case 1:case"end":return e.stop()}}),e)})))()},sendPirate:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.continueDialog=!1,t.notify("Sending Pirate");case 2:case"end":return e.stop()}}),e)})))()}}},c=(n(837),n(36)),d=n(46),l=n.n(d),f=n(230),h=n(218),v=n(45),m=n(813),x=n(770),w=n(783),k=n(757),y=n(133),_=n(771),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-card",[n("v-card-text",[n("h2",{staticClass:"text-h4"},[t._v("Receive Pirate")])]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",[n("v-checkbox",{scopedSlots:t._u([{key:"label",fn:function(){return[n("span",{staticClass:"body-2"},[t._v("\n                I want to deposit from a BTC, ETH, LTC, BCH or DASH wallet \n                (powered by "),n("a",{attrs:{href:"https://morphtoken.com",target:"_blank"},on:{click:function(t){t.stopPropagation()}}},[t._v("MorphToken")]),t._v(") [ "),n("nuxt-link",{attrs:{to:"/faq"}},[t._v("How does this work?")]),t._v(" ]\n              ")],1)]},proxy:!0}]),model:{value:t.altDeposit,callback:function(e){t.altDeposit=e},expression:"altDeposit"}}),t._v(" "),n("div",{staticClass:"d-flex align-center"},[n("v-btn",{staticClass:"mr-2",attrs:{large:"",text:""}},[n("v-icon",{attrs:{size:"28",left:""}},[t._v("mdi-qrcode-scan")]),t._v(" "),n("v-icon",{attrs:{right:""}},[t._v("mdi-chevron-down")])],1),t._v(" "),n("div",{staticStyle:{"overflow-wrap":"break-word","word-break":"break-word"}},[n("span",{staticClass:"grey--text"},[t._v("Your deposit Pirate address: ")]),n("span",{staticClass:"font-weight-medium",staticStyle:{cursor:"pointer"},on:{click:t.copy}},[t._v(t._s(t.$store.state.wallet.address.pirate))]),t._v(" \n              "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:t.copy}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-checkbox-multiple-blank-outline")]),t._v("\n                Copy Address\n              ")],1)],1)],1),t._v(" "),n("div",{staticClass:"mt-4"},[t._v("\n            Your pending deposits will be shown here\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:f.a,VCard:h.a,VCardText:v.c,VCheckbox:m.a,VCol:x.a,VContainer:w.a,VDivider:k.a,VIcon:y.a,VRow:_.a})}}]);