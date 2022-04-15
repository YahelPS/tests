const s$5={clipboard:{props:["setString","getString"]},assets:{props:["registerAsset"]},messages:{props:["receiveMessage","sendMessage"]},clyde:{props:["createBotMessage"]},avatars:{props:["BOT_AVATARS"]},native:{props:["NativeModules"],export:"NativeModules"},React:{props:["createElement"]},Dispatcher:{props:["dirtyDispatch"]},storage:{props:["getItem"]},toasts:{props:["open","close"],ensure:ee=>!ee.openLazy&&!ee.startDrag&&!ee.init&&!ee.openReplay},dialog:{props:["show","openLazy","open","close"]},token:{props:["getToken"]},rest:{props:["getAPIBaseURL"]},settings:{props:["watchKeys"]},users:{props:["fetchProfile"]},theme:{props:["theme"]},linking:{props:["openURL"]},navigation:{props:["pushLazy"]},navigationNative:{props:["NavigationContainer"]},navigationStack:{props:["createStackNavigator"]},stylesheet:{props:["createThemedStyleSheet"]},colorMap:{props:["ThemeColorMap"]},Components:{multiple:!0,props:{Forms:["Form","FormSection"],General:["Button","Text","View"]}},Locales:{props:["Messages"]}},common={},l$7=[ee=>ee>=944&&ee<=994,125,203,433,434,445,446,457],filters={byProps:(...ee)=>te=>ee.every(ne=>te[ne]!==void 0),byName:ee=>te=>typeof te=="function"&&te.name===ee,byTypeName:ee=>te=>te?typeof te=="function"&&te.name===ee:!1,byDisplayName:ee=>te=>te?typeof te=="function"&&te.displayName===ee:!1,byTypeString:(...ee)=>te=>te?.default?ee.every(ne=>te.default.toString?.()?.includes?.(ne)):!1,byDefaultString:(...ee)=>te=>te?.default?ee.every(ne=>te.default.toString?.()?.includes?.(ne)):!1,byString:(...ee)=>te=>ee.every(ne=>te.toString?.()?.includes?.(ne))},a$2=[];Object.entries(s$5).map(([ee,te])=>{te.multiple?Object.entries(te.props).map(([ne,oe])=>{a$2.push({id:ne,filter:ie=>filters.byProps(...oe)(ie),submodule:ee})}):te.props?te.props.every(ne=>Array.isArray(ne))?a$2.push({id:ee,filter:ne=>{const oe=te.props.some(ie=>ie.every(re=>ne[re]));return oe&&te.ensure&&!te.ensure(ne)?!1:oe},map:te.export}):a$2.push({id:ee,filter:ne=>{const oe=filters.byProps(...te.props)(ne);return oe&&te.ensure&&te.ensure(ne)===!1?!1:oe},map:te.export}):te.displayName?a$2.push({id:ee,filter:filters.byDisplayName(te.displayName),map:te.export}):te.filter&&a$2.push({id:ee,filter:te.filter,map:te.export})});const c$4=bulk(...a$2.map(({filter:ee})=>ee));a$2.map(({id:ee,map:te,submodule:ne},oe)=>{let ie=le=>le;if(typeof te=="string")ie=le=>le[te];else if(Array.isArray(te)){let le={};ie=ae=>{for(const se of te)le[se]=ae[se];return le}}const re=ie(c$4[oe]);ne?(common[ne]??={},common[ne][ee]=re):common[ee]=re});function getModule$1(ee,{all:te=!1,traverse:ne=!0,defaultExport:oe=!0}={}){if(typeof ee!="function")return null;const ie=[],re=function(le,ae){try{return ee(le,ae)}catch{return!1}};for(const le in modules){if(l$7.some(se=>typeof se=="function"?se(le):se===Number(le)))continue;modules[le].isInitialized||__r(Number(le));const ae=modules[le].publicModule.exports;if(!(!ae||ae===window)){if(typeof ae=="object"){if(re(ae,le)){if(!te)return ae;ie.push(ae)}if(ae.__esModule&&ae.default&&re(ae.default,le)){const se=oe?ae.default:ae;if(!te)return se;ie.push(se)}if(ne&&ae.__esModule){for(const se in ae)if(ae[se]!==void 0&&re(ae[se],le)){if(!te)return ae[se];ie.push(ae[se])}}}else if(typeof ae=="function"){if(!re(ae,le))continue;if(!te)return ae;ie.push(ae)}}}return te?ie:ie[0]}function getModules$1(ee){return getModule$1(ee,{all:!0})}function bulk(...ee){const te=new Array(ee.length),ne=ee.map(oe=>ie=>{try{return oe(ie)}catch{return!1}});return getModule$1(oe=>{for(let ie=0;ie<ne.length;ie++){const re=ne[ie];typeof re!="function"||!re(oe)||te[ie]!=null||(te[ie]=oe)}return te.filter(String).length===ee.length}),te}function getByProps(...ee){const[te,{bulk:ne=!1,...oe}]=p$4(ee);if(ne){const ie=te.map(re=>Array.isArray(re)?ie.byProps(...re):ie.byProps(re)).concat({...oe});return ne(...ie)}return getModule$1(filters.byProps(...te),oe)}function getByDisplayName(...ee){const[te,{bulk:ne=!1,default:oe=!0,...ie}]=p$4(ee);if(ne){const re=te.map(filters.byDisplayName).concat({defaultExport:oe,...ie});return ne(...re)}return getModule$1(filters.byDisplayName(te[0]),{defaultExport:oe,...ie})}function getByTypeName(...ee){const[te,{bulk:ne=!1,default:oe=!0,...ie}]=p$4(ee);if(ne){const re=te.map(filters.byTypeName).concat({defaultExport:oe,...ie});return ne(...re)}return getModule$1(filters.byTypeName(te[0]),{defaultExport:oe,...ie})}function getByName(...ee){const[te,{bulk:ne=!1,default:oe=!0,...ie}]=p$4(ee);if(ne){const re=te.map(filters.byName).concat({defaultExport:oe,...ie});return ne(...re)}return getModule$1(filters.byName(te[0]),{defaultExport:oe,...ie})}function getByDefaultString(...ee){const[te,{bulk:ne=!1,...oe}]=p$4(ee);if(ne){const ie=te.map(re=>Array.isArray(re)?ie.byDefaultString(...re):ie.byDefaultString(re)).concat({...oe});return ne(...ie)}return getModule$1(filters.byDefaultString(...te),oe)}function getByTypeString(...ee){const[te,{bulk:ne=!1,...oe}]=p$4(ee);if(ne){const ie=te.map(re=>Array.isArray(re)?ie.byTypeString(...re):ie.byTypeString(re)).concat({...oe});return ne(...ie)}return getModule$1(filters.byTypeString(...te),oe)}function getByString(...ee){const[te,{bulk:ne=!1,...oe}]=p$4(ee);if(ne){const ie=te.map(re=>Array.isArray(re)?ie.byString(...re):ie.byString(re)).concat({...oe});return ne(...ie)}return getModule$1(filters.byString(...te),oe)}function p$4(ee,te=ne=>typeof ne=="object"&&!Array.isArray(ne)){return[ee,te(ee[ee.length-1])?ee.pop():{}]}var o$2=Object.freeze({__proto__:null,common,filters,getModule:getModule$1,getModules:getModules$1,bulk,getByProps,getByDisplayName,getByTypeName,getByName,getByDefaultString,getByTypeString,getByString});const t$6=common.rest;async function getRequest(ee){return t$6.get(ee)}async function postRequest(ee){return t$6.post(ee)}async function putRequest(ee){return t$6.put(ee)}async function patchRequest(ee){return t$6.patch(ee)}async function deleteRequest(ee){return t$6.delete(ee)}async function getAPIBaseURL(){return t$6.getAPIBaseURL()}var u$5=Object.freeze({__proto__:null,getRequest,postRequest,putRequest,patchRequest,deleteRequest,getAPIBaseURL}),getRandomValues,rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&(getRandomValues=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!getRandomValues))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}var REGEX=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function validate(ee){return typeof ee=="string"&&REGEX.test(ee)}for(var byteToHex=[],i$4=0;i$4<256;++i$4)byteToHex.push((i$4+256).toString(16).substr(1));function stringify(ee){var te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,ne=(byteToHex[ee[te+0]]+byteToHex[ee[te+1]]+byteToHex[ee[te+2]]+byteToHex[ee[te+3]]+"-"+byteToHex[ee[te+4]]+byteToHex[ee[te+5]]+"-"+byteToHex[ee[te+6]]+byteToHex[ee[te+7]]+"-"+byteToHex[ee[te+8]]+byteToHex[ee[te+9]]+"-"+byteToHex[ee[te+10]]+byteToHex[ee[te+11]]+byteToHex[ee[te+12]]+byteToHex[ee[te+13]]+byteToHex[ee[te+14]]+byteToHex[ee[te+15]]).toLowerCase();if(!validate(ne))throw TypeError("Stringified UUID is invalid");return ne}function v4(ee,te,ne){ee=ee||{};var oe=ee.random||(ee.rng||rng)();if(oe[6]=oe[6]&15|64,oe[8]=oe[8]&63|128,te){ne=ne||0;for(var ie=0;ie<16;++ie)te[ne+ie]=oe[ie];return te}return stringify(oe)}const o$1=common.linking,i$3={};o$1.addEventListener("url",ee=>{let te=ee.url;te=decodeURIComponent(te.replace("com.hammerandchisel.discord://",""));try{const ne=JSON.parse(te);if(ne.data===void 0)return;i$3[ne.id]&&(i$3[ne.id](ne.data),delete i$3[ne.id])}catch{return}});function sendCommand(ee,te=[],ne){const oe=v4();o$1.openURL(`com.hammerandchisel.discord://enmity?id=${oe}&command=${ee}&params=${te.join(",")}`).then(()=>{ne&&(i$3[oe]=ne)})}const h$5=common.theme,c$3=window.themes?.theme??"";let m$3=window.themes?.list??[];function getTheme(){return c$3}function getThemeByName(ee){return m$3.find(te=>te.name===ee)}function listThemes(){return m$3.map(ee=>ee.name)}async function installTheme(ee,te){sendCommand("install-theme",[ee],ne=>{te(ne),getRequest(ee).then(oe=>{const ie=JSON.parse(oe.text);m$3.push(ie)}).catch(oe=>{console.error(oe)})})}async function applyTheme(ee,te){sendCommand("apply-theme",[ee,h$5.theme],ne=>{te(ne)})}async function removeTheme(ee){sendCommand("remove-theme",[],te=>{ee(te)})}async function uninstallTheme(ee,te){sendCommand("uninstall-theme",[ee],ne=>{te(ne),m$3=m$3.filter(oe=>oe.name!==ee)})}const e$4=common.React,t$5=common.Components.General,r$3=common.Components.Forms,{lazy:m$2,memo:a$1,useCallback:c$2,useContext:n$4,useEffect:s$4,useImperativeHandle:i$2,useMemo:l$5,useReducer:u$4,useRef:F,useState:d$3}=e$4,{Alert:h$4,Button:S$2,FlatList:b$1,Image:C$5,ImageBackground:T$1,KeyboardAvoidingView:p$3,Modal:x$1,Pressable:w,RefreshControl:R$1,ScrollView:g$5,SectionList:I$2,StatusBar:f$3,StyleSheet:k$3,Switch:y$7,Text:A$1,TextInput:B$3,TouchableHighlight:L$2,TouchableOpacity:M$3,TouchableWithoutFeedback:V$1,Touchable:v$3,View:z,VirtualizedList:H}=t$5,{Form:D$2,FormArrow:E,FormCTA:G,FormCTAButton:K,FormCardSection:O,FormCheckbox:P$3,FormDivider:W,FormHint:j,FormIcon:q,FormInput:J,FormLabel:N$2,FormRadio:Q,FormRow:U$1,FormSection:X,FormSelect:Y$1,FormSubLabel:Z,FormSwitch:_$3,FormTernaryCheckBox:$,FormText:oo,FormTextColors:eo,FormTextSizes:to}=r$3;var l$6=Object.freeze({__proto__:null,React:e$4,lazy:m$2,memo:a$1,useCallback:c$2,useContext:n$4,useEffect:s$4,useImperativeHandle:i$2,useMemo:l$5,useReducer:u$4,useRef:F,useState:d$3,Alert:h$4,Button:S$2,FlatList:b$1,Image:C$5,ImageBackground:T$1,KeyboardAvoidingView:p$3,Modal:x$1,Pressable:w,RefreshControl:R$1,ScrollView:g$5,SectionList:I$2,StatusBar:f$3,StyleSheet:k$3,Switch:y$7,Text:A$1,TextInput:B$3,TouchableHighlight:L$2,TouchableOpacity:M$3,TouchableWithoutFeedback:V$1,Touchable:v$3,View:z,VirtualizedList:H,Form:D$2,FormArrow:E,FormCTA:G,FormCTAButton:K,FormCardSection:O,FormCheckbox:P$3,FormDivider:W,FormHint:j,FormIcon:q,FormInput:J,FormLabel:N$2,FormRadio:Q,FormRow:U$1,FormSection:X,FormSelect:Y$1,FormSubLabel:Z,FormSwitch:_$3,FormTernaryCheckBox:$,FormText:oo,FormTextColors:eo,FormTextSizes:to});const i$1=[];var b=(ee=>(ee.Before="before",ee.Instead="instead",ee.After="after",ee))(b||{});function h$3(ee){const te=[];for(const ne of i$1)for(const oe of ne.patches)oe.caller===ee&&te.push(oe);return te}function u$3(ee){const te=h$3(ee);if(te.length)for(const ne of te)ne.unpatch()}function P$2(ee){return function(){if(!ee.patches.length)return ee.original.apply(this,arguments);let te,ne=arguments;for(const ie of ee.patches.filter(re=>re.type==="before"))try{const re=ie.callback(this,ne,ee.original.bind(this));Array.isArray(re)&&(ne=re)}catch(re){console.error(`Could not fire before patch for ${ee.func} of ${ie.caller}`),console.error(re)}const oe=ee.patches.filter(ie=>ie.type==="instead");if(!oe.length)te=ee.original.apply(this,ne);else for(const ie of oe)try{const re=ie.callback(this,ne,ee.original.bind(this));re!==void 0&&(te=re)}catch(re){console.error(`Could not fire instead patch for ${ee.func} of ${ie.caller}`),console.error(re)}for(const ie of ee.patches.filter(re=>re.type==="after"))try{const re=ie.callback(this,ne,te);re!==void 0&&(te=re)}catch(re){console.error(`Could not fire after patch for ${ee.func} of ${ie.caller}`),console.error(re)}return te}}function y$6([ee,te,ne]){const oe={caller:ee,mdl:te,func:ne,original:te[ne],unpatch:()=>{oe.mdl[oe.func]=oe.original,oe.patches=[]},patches:[]};return te[ne]=P$2(oe),Object.assign(te[ne],oe.original,{toString:()=>oe.original.toString(),__original:oe.original}),i$1.push(oe),oe}function C$4(ee,te,ne){return i$1.find(ie=>ie.mdl===te&&ie.func===ne)||y$6([ee,te,ne])}function l$4(ee,te,ne,oe,ie="after"){const re=C$4(ee,te,ne),le={caller:ee,type:ie,id:re.patches.length,callback:oe,unpatch:()=>{if(re.patches.splice(re.patches.findIndex(ae=>ae.id===le.id&&ae.type===ie),1),re.patches.length<=0){const ae=i$1.findIndex(se=>se.mdl===te&&se.func===ne);i$1[ae].unpatch(),i$1.splice(ae,1)}}};return re.patches.push(le),le.unpatch}function d$2(ee,te,ne,oe){return l$4(ee,te,ne,oe,"before")}function g$3(ee,te,ne,oe){return l$4(ee,te,ne,oe,"instead")}function p$2(ee,te,ne,oe){return l$4(ee,te,ne,oe,"after")}function k$2(ee){return{getPatchesByCaller:h$3,before:(te,ne,oe)=>d$2(ee,te,ne,oe),instead:(te,ne,oe)=>g$3(ee,te,ne,oe),after:(te,ne,oe)=>p$2(ee,te,ne,oe),unpatchAll:()=>u$3(ee)}}var g$4=Object.freeze({__proto__:null,create:k$2,before:d$2,instead:g$3,after:p$2,unpatchAll:u$3});const m$1=k$2("enmity-commands"),[l$3,f$2,y$5]=bulk(filters.byProps("getBuiltInCommands"),filters.byProps("useApplicationCommandsDiscoveryState"),filters.byProps("getGuildTemplateIconURL"));let e$3=[];const section={id:"enmity",type:1,name:"Enmity",icon:"https://files.enmity.app/icon.png"};m$1.after(l$3,"getBuiltInCommands",(ee,te,ne)=>[...ne,...e$3.values()]),m$1.after(y$5,"getApplicationIconURL",(ee,[te],ne)=>{if(te.id==="enmity")return section.icon}),m$1.after(f$2,"useApplicationCommandsDiscoveryState",(ee,[,,,te],ne)=>{if(te!==!1)return ne;if(!ne.discoverySections.find(ie=>ie.key===section.id)&&e$3.length){const ie=[...e$3.values()];ne.discoveryCommands.push(...ie),ne.commands.push(...ie.filter(re=>!ne.commands.some(le=>le.name===re.name))),ne.discoverySections.push({data:ie,key:section.id,section}),ne.sectionsOffset.push(e$3.length)}!ne.applicationCommandSections.find(ie=>ie.id===section.id)&&e$3.length&&ne.applicationCommandSections.push(section);const oe=ne.discoverySections.findIndex(ie=>ie.key==="-2");if(ne.discoverySections[oe]?.data){const ie=ne.discoverySections[oe];ie.data=ie.data.filter(re=>!re.__enmity),ie.data.length===0&&ne.discoverySections.splice(oe,1)}});function u$2(ee,te){te.map(ne=>{ne.__enmity=!0,ne.caller=ee}),e$3.push(...te)}function v$2(ee){e$3=e$3.filter(te=>te.caller!==ee)}var C$3=Object.freeze({__proto__:null,section,registerCommands:u$2,unregisterCommands:v$2});const plugins=[];let enabled=window.plugins.enabled,disabled=window.plugins.disabled;function registerPlugin(ee){ee.onEnable=()=>{ee.onStart(),ee.commands&&u$2(ee.name,ee.commands),console.log(`${ee.name} has been enabled`)},ee.onDisable=()=>{if(ee.patches)for(const te of ee.patches)te.unpatchAll();ee.commands&&v$2(ee.name),ee.onStop(),console.log(`${ee.name} has been disabled`)},enabled.includes(ee.name)&&ee.onEnable(),disabled.includes(ee.name)&&ee.onDisable(),plugins.push(ee)}function getPlugin(ee){return plugins.find(te=>te.name===ee)}function getPlugins(){return plugins}function getEnabledPlugins(){return enabled}function getDisabledPlugins(){return disabled}function disablePlugin(ee,te){enabled.includes(ee)&&enabled.splice(enabled.indexOf(ee),1),disabled.push(ee),getPlugin(ee).onDisable(),sendCommand("disable-plugin",[ee],te)}function enablePlugin(ee,te){disabled.includes(ee)&&disabled.splice(disabled.indexOf(ee),1),disabled.push(ee),getPlugin(ee).onEnable(),sendCommand("enable-plugin",[ee],te)}function evalPlugin(url){getRequest(url).then(response=>{const code=response.text,name=url.split("/").pop().split(".")[0],id=Number(Object.keys(window.modules).pop())+1,wrapper=`__d(function(...args) {
        try {
          ${code}
        } catch(err) {
          console.log(err);
        }
      }, ${id}, []);
      __r(${id})`;enabled.push(name),eval(wrapper)}).catch(ee=>{console.error(ee)})}function installPlugin(ee,te){sendCommand("install-plugin",[ee],ne=>{evalPlugin(ee),te(ne)})}function uninstallPlugin(ee,te){disablePlugin(ee),enabled=enabled.filter(ne=>ne!==ee),disabled=disabled.filter(ne=>ne!==ee),sendCommand("uninstall-plugin",[ee],ne=>{te(ne)})}var y$4=Object.freeze({__proto__:null,registerPlugin,getPlugin,getPlugins,getEnabledPlugins,getDisabledPlugins,disablePlugin,enablePlugin,evalPlugin,installPlugin,uninstallPlugin});const t$4=common.toasts;function showToast(ee){t$4.open(ee)}var A=Object.freeze({__proto__:null,showToast});const D$1=common.navigation,k$1=common.navigationNative,x=common.navigationStack,B$2=common.stylesheet,_$2=common.colorMap,{NavigationContainer:M$2}=k$1,{createStackNavigator:L$1}=x,{createThemedStyleSheet:C$2}=B$2,{ThemeColorMap:a}=_$2,s$3=C$2({container:{backgroundColor:a.BACKGROUND_MOBILE_SECONDARY,flex:1},cardStyle:{backgroundColor:"transparent"},header:{backgroundColor:a.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerTitleContainer:{color:a.HEADER_PRIMARY}}),d$1=C$2({cardContainer:{padding:15,width:"100%",flex:1,flexDirection:"column"},cardHeader:{height:45,borderTopLeftRadius:5,borderTopRightRadius:5,backgroundColor:a.BACKGROUND_SECONDARY_ALT},cardBody:{padding:5,backgroundColor:a.BACKGROUND_SECONDARY},text:{color:a.TEXT_DANGER}}),U=({plugin:ee,removePlugin:te})=>{const[ne,oe]=d$3(!0);return s$4(()=>{const ie=getEnabledPlugins().includes(ee.name);oe(ie)},[]),e$4.createElement(z,{style:d$1.cardContainer},e$4.createElement(z,{style:d$1.cardHeader},e$4.createElement(U$1,{label:ee.name,trailing:e$4.createElement(M$3,{onPress:()=>{uninstallPlugin(ee.name,ie=>{showToast({content:`${ee.name} has been uninstalled.`}),te(ee.name)})}},e$4.createElement(A$1,{style:d$1.text},"Uninstall"))})),e$4.createElement(z,{style:d$1.cardBody},e$4.createElement(U$1,{label:"Enabled",trailing:e$4.createElement(_$3,{value:ne,onValueChange:ie=>{oe(ie),showToast({content:`${ee.name} has been ${ie?"enabled":"disabled"}.`}),ie?enablePlugin(ee.name):disablePlugin(ee.name)}})})))},V=()=>{const[ee,te]=d$3([]);s$4(()=>{te(getPlugins)},[]);const ne=oe=>{te(ee.filter(ie=>ie.name!==oe))};return e$4.createElement(z,{style:{flex:1}},e$4.createElement(D$2,null,ee.map(oe=>e$4.createElement(U,{plugin:oe,removePlugin:ne}))))},P$1=L$1(),PluginPage=()=>e$4.createElement(M$2,null,e$4.createElement(P$1.Navigator,{style:s$3.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:s$3.cardStyle,headerStyle:s$3.header,headerTitleContainerStyle:s$3.headerTitleContainer,headerTitleAlign:"center",safeAreaInsets:{top:0}}},e$4.createElement(P$1.Screen,{name:"Plugins",component:V,options:{headerTitleStyle:{color:"white"},headerLeft:()=>e$4.createElement(S$2,{color:"#fff",title:"Close",onPress:()=>D$1.pop()}),headerRight:()=>e$4.createElement(S$2,{color:"#fff",title:"Add",onPress:()=>{h$4.prompt("Install a plugin","Please enter the URL of the plugin to install.",ee=>{installPlugin(ee,te=>{showToast({content:"Plugin has been installed. Please reload Discord."})})})}})}})));var c$1=Object.freeze({__proto__:null,getTheme,getThemeByName,listThemes,applyTheme,removeTheme,uninstallTheme});const e$2=common.native;function reloadDiscord(){e$2.BundleUpdaterManager.reload()}function getVersion(){return e$2.InfoDictionaryManager.Version}function getBuild(){return e$2.InfoDictionaryManager.Build}function getDevice(){return e$2.DCDDeviceManager.device}function getSystemVersion(){return e$2.DCDDeviceManager.systemVersion}const s$2=common.dialog;function showDialog(ee){s$2.show(ee)}var _$1=Object.freeze({__proto__:null,showDialog});const k=common.navigation,P=common.navigationNative,B$1=common.navigationStack,_=common.stylesheet,M$1=common.colorMap,{NavigationContainer:Y}=P,{createStackNavigator:I$1}=B$1,{createThemedStyleSheet:g$2}=_,{ThemeColorMap:r$2}=M$1,s$1=g$2({container:{backgroundColor:r$2.BACKGROUND_MOBILE_SECONDARY,flex:1},cardStyle:{backgroundColor:"transparent"},header:{backgroundColor:r$2.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerTitleContainer:{color:r$2.HEADER_PRIMARY}}),d=g$2({cardContainer:{padding:15,width:"100%",flex:1,flexDirection:"column"},cardHeader:{height:45,borderTopLeftRadius:5,borderTopRightRadius:5,backgroundColor:r$2.BACKGROUND_SECONDARY_ALT},cardBody:{padding:5,backgroundColor:r$2.BACKGROUND_SECONDARY},text:{color:r$2.TEXT_DANGER}}),L=({theme:ee,deleteTheme:te})=>e$4.createElement(z,{style:d.cardContainer},e$4.createElement(z,{style:d.cardHeader},e$4.createElement(U$1,{label:ee,trailing:e$4.createElement(M$3,{onPress:()=>{uninstallTheme(ee,ne=>{showToast({content:ne}),te(ee)})}},e$4.createElement(A$1,{style:d.text},"Uninstall"))})),e$4.createElement(z,{style:d.cardBody},e$4.createElement(U$1,{label:"Apply",onPress:()=>{applyTheme(ee,ne=>{showDialog({title:"Theme Applied",body:"Applying a theme requires a restart, would you like to restart Discord to apply the new theme?",confirmText:"Yes",cancelText:"No",onConfirm:reloadDiscord})})}}))),R=()=>{const[ee,te]=d$3([]);s$4(()=>{te(listThemes())},[]);const ne=oe=>{getTheme()===oe&&removeTheme(),te(ee.filter(ie=>ie!==oe))};return e$4.createElement(z,{style:{flex:1}},e$4.createElement(D$2,null,getTheme()!==""&&e$4.createElement(U$1,{label:"Remove applied theme",onPress:()=>{removeTheme().then(()=>{showDialog({title:"Theme Removed",body:"Removing the applied theme requires a restart, would you like to restart Discord to remove the applied theme?",confirmText:"Yes",cancelText:"No",onConfirm:reloadDiscord})})}}),ee.map(oe=>e$4.createElement(L,{theme:oe,deleteTheme:ne}))))},y$3=I$1(),ThemePage=()=>e$4.createElement(Y,null,e$4.createElement(y$3.Navigator,{style:s$1.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:s$1.cardStyle,headerStyle:s$1.header,headerTitleContainerStyle:s$1.headerTitleContainer,headerTitleAlign:"center",safeAreaInsets:{top:0}}},e$4.createElement(y$3.Screen,{name:"Themes",component:R,options:{headerTitleStyle:{color:"white"},headerLeft:()=>e$4.createElement(S$2,{color:"#fff",title:"Close",onPress:()=>k.pop()}),headerRight:()=>e$4.createElement(S$2,{color:"#fff",title:"Add",onPress:()=>{h$4.prompt("Install a theme","Please enter the URL of the theme to install.",ee=>{if(!ee.includes("json")){showToast({content:"Invalid url for theme."});return}installTheme(ee,te=>{showToast({content:te})})})}})}}))),s=getByProps("Permissions","ActivityTypes","StatusTypes"),v$1=common.navigation,S$1=common.navigationNative,p$1=common.navigationStack,C$1=common.stylesheet,g$1=common.colorMap,{NavigationContainer:h$2}=S$1,{createStackNavigator:y$2}=p$1,{createThemedStyleSheet:N$1}=C$1,{ThemeColorMap:n$3}=g$1,t$3=N$1({container:{backgroundColor:n$3.BACKGROUND_MOBILE_SECONDARY,flex:1},cardStyle:{backgroundColor:"transparent"},header:{backgroundColor:n$3.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerTitleContainer:{color:n$3.HEADER_PRIMARY}}),f$1=()=>{const ee=s.Colors;return e$4.createElement(z,{style:{flex:1}},e$4.createElement(D$2,null,Object.keys(ee).map(te=>e$4.createElement(z,{style:{padding:5,backgroundColor:ee[te]}},e$4.createElement(A$1,null,te)))))},l$2=y$2(),DeveloperPage=()=>e$4.createElement(h$2,null,e$4.createElement(l$2.Navigator,{style:t$3.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:t$3.cardStyle,headerStyle:t$3.header,headerTitleContainerStyle:t$3.headerTitleContainer,headerTitleAlign:"center",safeAreaInsets:{top:0}}},e$4.createElement(l$2.Screen,{name:"Developer Tools",component:f$1,options:{headerTitleStyle:{color:"white"},headerLeft:()=>e$4.createElement(S$2,{color:"#fff",title:"Close",onPress:()=>v$1.pop()})}}))),l$1=common.navigation;function patchSettings(){const ee=k$2("enmity-settings");let te;const ne=getByTypeName("UserSettingsOverviewWrapper",{default:!1}),oe=ee.after(ne,"default",(ie,re,le)=>{if(te!==void 0)return;oe(),te=le.type;const{openURL:ae}=getByProps("handleSupportedURL"),se=common.Locales.Messages;ee.after(te.prototype,"render",(ce,ge,{props:{children:ue}})=>{const pe=ue.findIndex(me=>me.props.title===se.PREMIUM_SETTINGS),{version:de}=window.enmity;ue.splice(pe,0,e$4.createElement(e$4.Fragment,null,e$4.createElement(X,{title:"Enmity"},e$4.createElement(U$1,{label:"Enmity",trailing:e$4.createElement(N$2,{text:de}),onPress:()=>{ae(`https://github.com/enmity-mod/enmity/commit/${de}`)}}),e$4.createElement(W,null),e$4.createElement(U$1,{label:"Plugins",trailing:e$4.createElement(E,null),onPress:()=>{l$1.push(PluginPage,{})}}),e$4.createElement(W,null),e$4.createElement(U$1,{label:"Themes",trailing:e$4.createElement(E,null),onPress:()=>{l$1.push(ThemePage,{})}}),e$4.createElement(W,null),e$4.createElement(U$1,{label:"Developer Toolxs",trailing:e$4.createElement(E,null),onPress:()=>{l$1.push(DeveloperPage,{})}}),e$4.createElement(W,null),e$4.createElement(U$1,{label:e$4.createElement(N$2,{style:{color:"#d83c3f"},text:"Reload Discord"}),arrowShown:!0,onPress:()=>{showDialog({title:"Reload Discord",body:"Are you sure you want to reload Discord?",confirmText:"Yes",cancelText:"No",onConfirm:reloadDiscord})}})),e$4.createElement(X,null,e$4.createElement(U$1,{label:e$4.createElement(N$2,{text:"Discord"}),trailing:e$4.createElement(E,null),onPress:()=>{ae("https://discord.gg/rMdzhWUaGT")}}),e$4.createElement(W,null),e$4.createElement(U$1,{label:e$4.createElement(N$2,{text:"GitHub"}),trailing:e$4.createElement(E,null),onPress:()=>{ae("https://github.com/enmity-mod/enmity")}}),e$4.createElement(W,null),e$4.createElement(U$1,{label:e$4.createElement(N$2,{text:"Twitter"}),trailing:e$4.createElement(E,null),onPress:()=>{ae("https://twitter.com/enmityapp")}}),e$4.createElement(W,null))))})})}function applyPatches(){try{patchSettings()}catch(ee){console.log(ee.message)}}function modulesBlacklist(ee){return ee===203||ee===433||ee===434||ee===445||ee===446||ee===457||ee>=944&&ee<=994}function getModules(ee,te=!1){const ne=oe=>{if(modulesBlacklist(Number(oe)))return;const ie=modules[oe];if(ie.isInitialized||__r(Number(oe)),ie.publicModule.exports!==void 0)return ee(ie.publicModule.exports)};return(te?[Object.keys(modules).find(ne)]:Object.keys(modules).filter(ne)).filter(oe=>oe!==void 0).map(oe=>Number(oe))}function getModule(ee,te=!0){const ne=getModules(ee,!0);if(ne.length===0)return;const{publicModule:oe}=modules[ne[0]];return te?oe.exports:oe}function getModuleByProps(...ee){return getModule(te=>ee.every(ne=>(te[ne]??te.default?.[ne])!==void 0),!0)}function getModuleByIndex(ee){const te=modules[ee];if(te!==void 0)return te.isInitialized||__r(Number(ee)),te.publicModule}const n$2=common.assets;function getAssetByName(ee){let te,ne=1;for(;te=n$2.getAssetByID(ne),!(te===void 0||te.name===ee);)ne+=1;return{id:ne,...te}}function getAssets(){const ee=[];let te=1;for(;;){const ne=n$2.getAssetByID(te);if(ne===void 0)break;ee.push({id:te,...ne}),te+=1}return ee}const e$1=common.users;async function fetchCurrentUser(){return e$1.fetchCurrentUser()}async function fetchProfile(ee){return e$1.fetchProfile(ee)}async function getUser(ee){return e$1.getUser(ee)}var M=Object.freeze({__proto__:null,fetchCurrentUser,fetchProfile,getUser});const t$2=common.storage;async function getItem(ee){return t$2.getItem(ee)}async function setItem(ee,te){return t$2.setItem(ee,te)}async function removeItem(ee){return t$2.removeItem(ee)}var S=Object.freeze({__proto__:null,getItem,setItem,removeItem});const n$1=common.settings;function getSetting(ee){return n$1.get(ee)}function setSetting(ee){n$1.set(ee)}var h$1=Object.freeze({__proto__:null,getSetting,setSetting});const t$1=common.clipboard;function setString(ee){return t$1.setString(ee)}async function getString(){return t$1.getString()}var v=Object.freeze({__proto__:null,setString,getString});const o=common.token;function getToken(){return o.getToken()}function setToken(ee){return o.setToken(ee)}function hideToken(){o.hideToken()}function showToken(){o.showToken()}function removeToken(){o.removeToken()}var B=Object.freeze({__proto__:null,getToken,setToken,hideToken,showToken,removeToken});const n=common.messages,c=common.clyde,m=common.avatars;m.BOT_AVATARS.ENMITY="https://github.com/enmity-mod.png";function sendReply(ee,te,ne,oe){const ie=c.createBotMessage(ee,"");ie.author.username=ne??"Enmity",ie.author.avatar=oe?ne:"ENMITY",oe&&(m.BOT_AVATARS[ne]=oe),typeof te=="string"?ie.content=te:Object.assign(ie,te),n.receiveMessage(ee,ie)}var T=Object.freeze({__proto__:null,sendReply});function prepareApi(){window.enmity={modules:o$2,themer:c$1,constants:s,patcher:g$4,version:"d388f47",plugins:y$4,clipboard:v,clyde:T,commands:C$3,dialog:_$1,rest:u$5,react:l$6,settings:h$1,storage:S,toast:A,token:B,users:M,components:common.components,native:{reloadDiscord,getVersion,getBuild,getDevice,getSystemVersion},getModule,getModules,getModuleByProps,getModuleByIndex,getAssetByName,getAssets}}var ApplicationCommandSectionType;(function(ee){ee[ee.BuiltIn=0]="BuiltIn",ee[ee.Guild=1]="Guild",ee[ee.DM=2]="DM"})(ApplicationCommandSectionType||(ApplicationCommandSectionType={}));var ApplicationCommandType;(function(ee){ee[ee.Chat=1]="Chat",ee[ee.User=2]="User",ee[ee.Message=3]="Message"})(ApplicationCommandType||(ApplicationCommandType={}));var ApplicationCommandInputType;(function(ee){ee[ee.BuiltIn=0]="BuiltIn",ee[ee.BuiltInText=1]="BuiltInText",ee[ee.BuiltInIntegration=2]="BuiltInIntegration",ee[ee.Bot=3]="Bot",ee[ee.Placeholder=4]="Placeholder"})(ApplicationCommandInputType||(ApplicationCommandInputType={}));var ApplicationCommandPermissionType;(function(ee){ee[ee.Role=1]="Role",ee[ee.User=2]="User"})(ApplicationCommandPermissionType||(ApplicationCommandPermissionType={}));var ApplicationCommandOptionType;(function(ee){ee[ee.SubCommand=1]="SubCommand",ee[ee.SubCommandGroup=2]="SubCommandGroup",ee[ee.String=3]="String",ee[ee.Integer=4]="Integer",ee[ee.Boolean=5]="Boolean",ee[ee.User=6]="User",ee[ee.Channel=7]="Channel",ee[ee.Role=8]="Role",ee[ee.Mentionnable=9]="Mentionnable",ee[ee.Number=10]="Number"})(ApplicationCommandOptionType||(ApplicationCommandOptionType={}));var InteractionTypes;(function(ee){ee[ee.ApplicationCommand=2]="ApplicationCommand",ee[ee.MessageComponent=3]="MessageComponent"})(InteractionTypes||(InteractionTypes={}));const C={id:"installed-plugins",applicationId:section.id,name:"plugins",displayName:"plugins",description:"List installed plugins",displayDescription:"List installed plugins",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,execute:(ee,te)=>{const ne=te.channel.id;if(getPlugins().length===0){sendReply(ne,"No plugins installed.");return}const oe=getEnabledPlugins(),ie=getDisabledPlugins();let re="";oe.length>0&&(re=`**Enabled plugins (${oe.length})**:
`,re+=`> ${oe.join(", ")}
`),ie.length>0&&(re+=`**Disabled plugins (${ie.length})**:
`,re+=`> ${ie.join(", ")}`),sendReply(ne,re)}},D={id:"install-plugin",applicationId:section.id,name:"install",displayName:"install",description:"Install a plugin",displayDescription:"Install a plugin",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,options:[{name:"plugin",displayName:"plugin",description:"Plugin url",displayDescription:"Plugin url",required:!0,type:ApplicationCommandOptionType.String}],execute:(ee,te)=>{const ne=ee[0].value,oe=te.channel.id;installPlugin(ne,ie=>{sendReply(oe,ie)})}},I={id:"uninstall-plugin",applicationId:section.id,name:"uninstall",displayName:"uninstall",description:"Uninstall a plugin",displayDescription:"Uninstall a plugin",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,options:[{name:"plugin",displayName:"plugin",description:"Plugin name",displayDescription:"Plugin name",type:ApplicationCommandOptionType.String,required:!0}],execute:(ee,te)=>{const ne=ee[0].value,oe=te.channel.id;uninstallPlugin(ne,ie=>{sendReply(oe,ie)})}},f={id:"disable-plugin",applicationId:section.id,name:"disable",displayName:"disable",description:"Disable a plugin",displayDescription:"Disable a plugin",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,options:[{name:"plugin",displayName:"plugin",description:"Plugin name",displayDescription:"Plugin name",type:ApplicationCommandOptionType.String,required:!0}],execute:(ee,te)=>{const ne=ee[0].value,oe=te.channel.id;disablePlugin(ne,ie=>{if(ie==="yes"){sendReply(oe,`**${ne}** has been disabled.`);return}sendReply(oe,`Error when disabling **${ne}**.`)})}},N={id:"enable-plugin",applicationId:section.id,name:"enable",displayName:"enable",description:"Enable a plugin",displayDescription:"Enable a plugin",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,options:[{name:"plugin",displayName:"plugin",description:"Plugin name",displayDescription:"Plugin name",type:ApplicationCommandOptionType.String,required:!0}],execute:(ee,te)=>{const ne=ee[0].value,oe=te.channel.id;enablePlugin(ne,ie=>{if(ie==="yes"){sendReply(oe,`**${ne}** has been enabled.`);return}sendReply(oe,`Error when enabling **${ne}**.`)})}};var r$1=[C,D,I,f,N];const r={id:"list-themes",applicationId:section.id,name:"themes",displayName:"themes",description:"List available themes",displayDescription:"List available themes",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,execute:(ee,te)=>{const ne=listThemes();if(ne.length===0){sendReply(te.channel.id,"No themes installed.");return}sendReply(te.channel.id,`**Installed themes (${ne.length})**: ${ne.join(", ")}`)}},y$1={id:"apply-theme",applicationId:section.id,name:"apply",displayName:"apply",description:"Apply a theme",displayDescription:"Apply a theme",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,options:[{name:"name",displayName:"name",description:"Theme's name",displayDescription:"Theme's name",type:ApplicationCommandOptionType.String,required:!0,choices:listThemes().map(ee=>({name:ee,displayName:ee,value:ee}))}],execute:(ee,te)=>{const ne=ee[0].value;getThemeByName(ne)||sendReply(te.channel.id,"Theme couldn't be found."),applyTheme(ne).then(oe=>{sendReply(te.channel.id,oe)})}},u$1={id:"clear-theme",applicationId:section.id,name:"clear",displayName:"clear",description:"Remove applied theme",displayDescription:"Remove applied theme",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,execute:(ee,te)=>{removeTheme().then(ne=>{sendReply(te.channel.id,ne)})}};var t=[r,y$1,u$1];const l={id:"debug-command",name:"debug",displayName:"debug",description:"Print out your device information",displayDescription:"Print out your device information",applicationId:section.id,type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltInText,execute:()=>{let ee=`**Debug Info:**
`;return ee+=`> Enmity: ${window.enmity.version}
`,ee+=`> Discord: ${getVersion()} (${getBuild()})
`,ee+=`> Device: ${getDevice()}
`,ee+=`> System: ${getSystemVersion()}
`,{content:ee}}},u={id:"reload-command",name:"reload",displayName:"reload",description:"Reload Discord",displayDescription:"Reload Discord",applicationId:section.id,type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,execute:function(ee){reloadDiscord()}},y={id:"token-command",name:"token",displayName:"token",description:"Show your Discord's token",displayDescription:"Show your Discord's token",applicationId:section.id,type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,execute:function(ee,te){sendReply(te.channel.id,getToken())}};var i=[l,u,y];const logger=getModule$1(ee=>ee.default?.name==="Logger"),EnmityLogger=new logger.default("Enmity");let socket;function connectWebsocket(host){console.log("Connecting to debug ws"),socket!==void 0&&socket.readyState!==WebSocket.CLOSED&&(socket.close(),socket=null),socket=new WebSocket(`ws://${host}`),socket.addEventListener("open",()=>{console.log("Connected with debug websocket"),showToast({content:"Connected to the websocket server."})}),socket.addEventListener("error",ee=>{console.log(`Error with debug websocket: ${ee.message}`),showToast({content:"An error occured with the websocket connection."})}),socket.addEventListener("close",ee=>{console.log(`Error with debug websocket: ${ee.message}`),showToast({content:"The websocket connection has been closed."})}),socket.addEventListener("message",message=>{try{console.log(eval(message.data))}catch(ee){console.error(ee)}})}function prepareWebsocket(){const ee=nativeLoggingHook;globalThis.nativeLoggingHook=(te,ne)=>(socket?.readyState===WebSocket.OPEN&&socket.send(JSON.stringify({level:ne,message:te})),EnmityLogger.log(te),ee(te,ne)),window.enmity_debug===!0&&connectWebsocket(`${window.enmity_debug_ip}:9090`)}function sendMessage(ee){socket?.readyState===WebSocket.OPEN&&socket.send(ee)}const h={id:"websocket-devtools",applicationId:section.id,name:"websocket",displayName:"websocket",description:"Connect to the websocket server",displayDescription:"Connect to the websocket server",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,options:[{name:"host",displayName:"host",description:"Host of the debugger",displayDescription:"Host of the debugger",type:ApplicationCommandOptionType.String,required:!0}],execute:ee=>{const te=ee[0].value;connectWebsocket(te)}},g={id:"dump-command",applicationId:section.id,name:"dump",displayName:"dump",description:"Dump Discord's modules",displayDescription:"Dump Discord's modules",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,execute:function(ee,te){const ne=te.channel.id,oe=window.modules;function ie(re){if(typeof re=="function")return re.toString();if(Array.isArray(re))return re.map(ie);if(typeof re=="object"){const le={};for(const ae in re)le[ae]=ie(re[ae]);return le}return re}for(const re of Object.keys(oe))try{const le=oe[re],ae={id:re};if(!le.publicModule?.exports)continue;const se=le.publicModule.exports;for(const ce of Object.keys(le.publicModule.exports))ae[ce]=ie(se[ce]);sendMessage(JSON.stringify(ae,null,"	"))}catch(le){console.log(`Couldn't dump module ${re}`),console.log(le)}sendReply(ne,"Modules has been dumped.")}};var e=[h,g];function p(){const ee=[...r$1,...e,...i,...t];u$2("enmity",ee)}try{prepareWebsocket(),prepareApi(),applyPatches(),p()}catch(ee){console.error(ee)}
