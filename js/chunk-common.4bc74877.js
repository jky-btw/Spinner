"use strict";(self["webpackChunkspinner"]=self["webpackChunkspinner"]||[]).push([[64],{6392:(e,n,t)=>{t.d(n,{Z:()=>h});var i=t(3673);const a=e=>((0,i.dD)("data-v-3e3ca77e"),e=e(),(0,i.Cn)(),e),r={class:"marker-wrapper"},o=a((()=>(0,i._)("svg",{class:"marker-icon"},[(0,i._)("use",{href:"icons/svg/marker.svg#Layer_1"})],-1)));function s(e,n,t,a,s,c){const l=(0,i.up)("SpinnerIntIcon");return(0,i.wg)(),(0,i.iD)("div",r,[o,(0,i.Wm)(l,{intervencija:t.intervencija},null,8,["intervencija"])])}t(6701);var c=t(385),l=t.n(c),m=t(7811),d=t(1440);const p={components:{SpinnerIntIcon:d.Z},props:{intervencija:{type:Object,required:!0},marker:{type:Object,default:void 0},alignment:{type:String,default:"center"},offsetX:{type:Number,default:0},offsetY:{type:Number,default:0}},data(){return{leafMarker:void 0}},mounted(){this.leafMarker=l().marker([this.marker.lat,this.marker.lng],{icon:new u({html:this.$el})}),this.leafMarker.addTo(this.findRealParent(this.$parent).leafletObject),this.computeAlignment(this.alignment)},watch:{alignment(e){this.computeAlignment(e)},marker(e){this.leafMarker.setLatLng(e)}},methods:{computeAlignment(e){const n=this.$el;let t=0,i=0;switch(e){case"top":i-=n.offsetHeight,t-=n.offsetHeight/2;break;case"bottom":t-=n.offsetWidth/2;break;case"left":t-=n.offsetWidth,i-=n.offsetHeight/2;break;case"right":i-=n.offsetHeight/2;break;case"center":t-=n.offsetWidth/2,i-=n.offsetHeight/2;break;case"topleft":t=-n.offsetWidth,i=-n.offsetHeight;break;case"topright":i-=n.offsetHeight;break;case"bottomleft":t-=n.offsetWidth;break;case"bottomright":break;default:throw new Error("Invalid alignment type of custom marker!")}n.style.left=t+this.offsetX+"px",n.style.top=i+this.offsetY+"px"},findRealParent(e){let n=!1;while(e&&!n)void 0===e.leafletObject?e=e.$parent:n=!0;return e}},beforeUnmount(){this.leafMarker&&this.leafMarker.remove()}};var u=m.J.extend({options:{},createIcon:function(){const e=document.createElement("div");return e.appendChild(this.options.html),e}}),v=t(4260);const f=(0,v.Z)(p,[["render",s],["__scopeId","data-v-3e3ca77e"]]),h=f},1440:(e,n,t)=>{t.d(n,{Z:()=>p});var i=t(3673),a=t(2323);const r={class:"int-icon"},o=["href"],s=["href"];function c(e,n,t,c,l,m){return(0,i.wg)(),(0,i.iD)("svg",r,["normal"==this.intervencija.type?((0,i.wg)(),(0,i.iD)("use",{key:0,href:m.iconPath,class:(0,a.C_)(this.intervencija.barvaIme)},null,10,o)):((0,i.wg)(),(0,i.iD)("use",{key:1,href:m.iconPath,class:"icon-blue"},null,8,s))])}const l={name:"SpinnerIntervencijaIcon",props:{intervencija:{type:Object,required:!0}},computed:{iconPath(){return"vecjiObseg"==this.intervencija.type?"icons/svg/vecjiObseg.svg#Layer_1":"icons/svg/"+this.intervencija.ikonaIme+".svg#Layer_1"}}};var m=t(4260);const d=(0,m.Z)(l,[["render",c]]),p=d},7471:(e,n,t)=>{t.d(n,{Z:()=>oe});var i=t(3673);function a(e,n,t,a,r,o){const s=(0,i.up)("IntervencijaItemHeader"),c=(0,i.up)("IntervencijaItemExpanded"),l=(0,i.up)("q-expansion-item"),m=(0,i.up)("q-list");return(0,i.wg)(),(0,i.j4)(m,{separator:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.modelValue,((e,n)=>((0,i.wg)(),(0,i.j4)(l,{key:n.toString(),group:"intervencijeGroup",onAfterShow:e=>o.scrollTo(n.toString()),ref_for:!0,ref:n.toString(),"expand-icon-class":"hidden"},{header:(0,i.w5)((()=>[(0,i.Wm)(s,{intervencija:e},null,8,["intervencija"])])),default:(0,i.w5)((()=>[(0,i.Wm)(c,{intervencija:e},null,8,["intervencija"])])),_:2},1032,["onAfterShow"])))),128))])),_:1})}var r=t(2323);const o={class:"row justify-between items-center no-wrap fit"},s={class:"column content-center"},c={class:"intervencija-title q-pb-sm"},l={class:"intervencija-date q-pb-sm flex items-center"},m={class:"intervencija-location flex items-center"};function d(e,n,t,a,d,p){const u=(0,i.up)("q-icon"),v=(0,i.up)("SpinnerIntIcon");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",s,[(0,i._)("div",c,[(0,i._)("b",null,(0,r.zw)(t.intervencija.dogodekNaziv||t.intervencija.intervencijaVrstaNaziv||"Večji obseg"),1)]),(0,i._)("div",l,[(0,i.Wm)(u,{class:"q-pr-sm",name:"alarm",size:"sm"}),(0,i.Uk)(" "+(0,r.zw)(t.intervencija.nastanekDatumFormatted+" "+(t.intervencija.nastanekCasFormatted||"")),1)]),(0,i._)("div",m,[(0,i.Wm)(u,{class:"q-pr-sm",name:"location_on",size:"sm"}),(0,i.Uk)(" "+(0,r.zw)(t.intervencija.obcinaNaziv),1)])]),(0,i.Wm)(v,{intervencija:t.intervencija},null,8,["intervencija"])])}var p=t(1440);const u={name:"SpinnerIntervencijaListHeader",components:{SpinnerIntIcon:p.Z},props:{intervencija:{type:Object,required:!0}}};var v=t(4260),f=t(4554),h=t(7518),j=t.n(h);const g=(0,v.Z)(u,[["render",d]]),w=g;j()(u,"components",{QIcon:f.Z});const b={key:0,class:"text-section"};function k(e,n,t,a,o,s){const c=(0,i.up)("q-separator"),l=(0,i.up)("q-card-section"),m=(0,i.up)("q-btn"),d=(0,i.up)("q-card-actions"),p=(0,i.up)("q-card");return(0,i.wg)(),(0,i.j4)(p,null,{default:(0,i.w5)((()=>[(0,i.Wm)(c),t.intervencija.besedilo?((0,i.wg)(),(0,i.iD)("div",b,[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,r.zw)(t.intervencija.besedilo),1)])),_:1}),(0,i.Wm)(c)])):(0,i.kq)("",!0),(0,i.Wm)(d,{class:"row justify-between"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{flat:"",round:"",icon:"map",onClick:n[0]||(n[0]=e=>s.goToMap())}),e.isSaved(t.intervencija)?((0,i.wg)(),(0,i.j4)(m,{key:0,flat:"",round:"",icon:"star",color:"yellow",onClick:n[1]||(n[1]=e=>s.save())})):((0,i.wg)(),(0,i.j4)(m,{key:1,flat:"",round:"",icon:"star_border",color:"blacks",onClick:n[2]||(n[2]=e=>s.save())})),(0,i.Wm)(m,{flat:"",round:"",icon:"unfold_more",onClick:n[3]||(n[3]=e=>a.openDetailsDialog(t.intervencija))})])),_:1})])),_:1})}t(2100);var y=t(8825);const _={class:"fit row no-wrap justify-between items-center"},S={class:"text-h6"},q={class:"row no-wrap justify-between"},I={class:"q-pa-md flex items-center"},z={class:"q-pa-md flex no-wrap items-center justify-end",style:{width:"50%"}},W={class:"q-pr-sm"},Z={key:0,class:"row justify-between"},C={class:"q-pa-md flex items-center"},D={class:"q-pa-md flex items-center"},x={class:"q-pr-sm"},O={key:1};function H(e,n,t,a,o,s){const c=(0,i.up)("q-btn"),l=(0,i.up)("q-card-section"),m=(0,i.up)("q-separator"),d=(0,i.up)("q-icon"),p=(0,i.up)("SpinnerSmallMap"),u=(0,i.up)("q-card"),v=(0,i.up)("q-dialog");return(0,i.wg)(),(0,i.j4)(v,{ref:"dialog",onHide:s.onDialogHide},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{class:"q-dialog-plugin"},{default:(0,i.w5)((()=>[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[(0,i._)("span",_,[(0,i._)("b",S,(0,r.zw)(t.intervencija.dogodekNaziv||t.intervencija.intervencijaVrstaNaziv||"Večji obseg"),1),(0,i.Wm)(c,{flat:"",dense:"",icon:"close",onClick:s.hide},null,8,["onClick"])])])),_:1}),(0,i.Wm)(m),(0,i._)("div",q,[(0,i._)("div",I,[(0,i.Wm)(d,{name:"event ",size:"sm",class:"q-pr-sm"}),(0,i._)("span",null,(0,r.zw)(t.intervencija.nastanekDatumFormatted),1)]),(0,i._)("div",z,[(0,i._)("span",W,(0,r.zw)(t.intervencija.obcinaNaziv),1),(0,i.Wm)(d,{name:"location_on",size:"sm"})])]),(0,i.Wm)(m),"normal"==t.intervencija.type?((0,i.wg)(),(0,i.iD)("div",Z,[(0,i._)("div",C,[(0,i.Wm)(d,{name:"schedule ",size:"sm",class:"q-pr-sm"}),(0,i._)("span",null,(0,r.zw)(t.intervencija.nastanekCasFormatted),1)]),(0,i._)("div",D,[(0,i._)("span",x,(0,r.zw)(t.intervencija.prijavaCasFormatted),1),(0,i.Wm)(d,{name:"alarm",size:"sm"})])])):(0,i.kq)("",!0),(0,i.Wm)(m),t.intervencija.besedilo?((0,i.wg)(),(0,i.iD)("div",O,[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,r.zw)(t.intervencija.besedilo),1)])),_:1})])):(0,i.kq)("",!0),(0,i.Wm)(p,{intervencija:t.intervencija},null,8,["intervencija"])])),_:1})])),_:1},8,["onHide"])}function L(e,n,t,a,r,o){const s=(0,i.up)("l-tile-layer"),c=(0,i.up)("l-geo-json"),l=(0,i.up)("custom-marker"),m=(0,i.up)("l-map");return(0,i.wg)(),(0,i.j4)(m,{style:{width:"100%","aspect-ratio":"1"},center:r.center,zoom:r.zoom,options:r.leafletMapOptions,zoomAnimation:!0,ref:"map"},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{url:r.url},null,8,["url"]),"vecjiObseg"==t.intervencija.type?((0,i.wg)(),(0,i.j4)(c,{key:0,geojson:r.geojson},null,8,["geojson"])):((0,i.wg)(),(0,i.j4)(l,{key:1,intervencija:t.intervencija,marker:{lat:t.intervencija.wgsLat,lng:t.intervencija.wgsLon},offsetX:-35,offsetY:-90},null,8,["intervencija","marker"]))])),_:1},8,["center","zoom","options"])}var M=t(8892),A=t(52),Q=t.n(A),$=t(6392);const N={name:"SmallIntMap",props:{intervencija:{type:Object,required:!0}},components:{LMap:M.iA,LTileLayer:M.Hw,LGeoJson:M.jK,CustomMarker:$.Z},data(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",zoom:12,center:[46.054,14.507],geojson:null,leafletMapOptions:{scrollWheelZoom:"center",doubleClickZoom:"center",touchZoom:"center"},iconSize:48,isBlue:!1,marker:{lat:50.60229509638775,lng:3.0247059387528408}}},async created(){if("vecjiObseg"==this.intervencija.type){var e="https://raw.githubusercontent.com/jky-btw/obcineGeoJson/main/data/"+this.intervencija.obcinaMID+".geojson";const n=await Q().get(e);this.geojson=n.data;const t=this.$refs.map.leafletObject;t.fitBounds([[this.geojson.features[0].bbox[1],this.geojson.features[0].bbox[0]],[this.geojson.features[0].bbox[3],this.geojson.features[0].bbox[2]]])}else this.center=[this.intervencija.wgsLat,this.intervencija.wgsLon]},computed:{dynamicSize(){return[this.iconSize,1.15*this.iconSize]},dynamicAnchor(){return[this.iconSize/2,1.15*this.iconSize]}}},T=(0,v.Z)(N,[["render",L],["__scopeId","data-v-24b7793d"]]),V=T,F={name:"DetailsDialog",components:{SpinnerSmallMap:V},props:{intervencija:{type:Object,required:!0}},emits:["ok","hide"],methods:{show(){this.$refs.dialog.show()},hide(){this.$refs.dialog.hide()},onDialogHide(){this.$emit("hide")},onOKClick(){this.$emit("ok"),this.hide()},onCancelClick(){this.hide()}}};var B=t(5926),P=t(151),E=t(5589),U=t(8240),J=t(5869);const R=(0,v.Z)(F,[["render",H]]),Y=R;j()(F,"components",{QDialog:B.Z,QCard:P.Z,QCardSection:E.Z,QBtn:U.Z,QSeparator:J.Z,QIcon:f.Z});var G=t(3617);const K={name:"SpinnerIntervencijaListContent",props:{intervencija:{type:Object,required:!0}},setup(){const e=(0,y.Z)();function n(n){e.dialog({component:Y,componentProps:{intervencija:n}}).onOk((()=>{})).onCancel((()=>{})).onDismiss((()=>{}))}return{openDetailsDialog:n}},computed:{...(0,G.Se)("saved",["isSaved"])},methods:{...(0,G.OI)("saved",["appendToSavedArray","removeFromSavedArray"]),goToMap(){this.$router.push({name:"map",params:{intervencija:JSON.stringify(this.intervencija)}})},save(){this.isSaved(this.intervencija)?this.removeFromSavedArray(this.intervencija):this.appendToSavedArray(this.intervencija)}}};var X=t(9367);const ee=(0,v.Z)(K,[["render",k]]),ne=ee;j()(K,"components",{QCard:P.Z,QSeparator:J.Z,QCardSection:E.Z,QCardActions:X.Z,QBtn:U.Z});const te={name:"IntervencijeList",components:{IntervencijaItemHeader:w,IntervencijaItemExpanded:ne},props:{modelValue:{type:Array}},methods:{scrollTo(e){const n=this.$refs[e],t=n[0].$el;t.getBoundingClientRect().bottom>window.innerHeight&&t.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}),t.getBoundingClientRect().top<0&&t.scrollIntoView({behavior:"smooth"})}}};var ie=t(7011),ae=t(4615);const re=(0,v.Z)(te,[["render",a]]),oe=re;j()(te,"components",{QList:ie.Z,QExpansionItem:ae.Z})}}]);