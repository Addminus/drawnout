webpackJsonp([1],{"6Zfw":function(e,t){},ACH5:function(e,t){},AGpY:function(e,t){},AJJt:function(e,t){},"DbD+":function(e,t){},H9Wn:function(e,t){},KxOn:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("pFYg"),a=n.n(r),i=n("7+uW"),s={render:function(){var e=this.$createElement;return(this._self._c||e)("router-view")},staticRenderFns:[]};var o=n("VU/8")({name:"App"},s,!1,function(e){n("AJJt")},"data-v-c3603fec",null).exports,c=n("/ocq"),u=n("mvHQ"),d=n.n(u),l={name:"drawing-board",props:["currentGameValues","config"],data:function(){return{width:.9*window.innerWidth,height:.9*window.innerHeight}},computed:{},methods:{draw:function(e){var t=document.getElementById("canvas").getContext("2d");console.log("in draw"),console.log(e);var n=window.innerWidth/e.drawingViewport.width,r=window.innerHeight/e.drawingViewport.height;t.lineTo(e.coordinates.x*n,e.coordinates.y*r),t.strokeStyle=e.strokeStyle,t.lineWidth=e.lineWidth,t.stroke()},moveContext:function(e){console.log("in move context");var t=document.getElementById("canvas").getContext("2d"),n=window.innerWidth/e.drawingViewport.width,r=window.innerHeight/e.drawingViewport.height;t.beginPath(),t.moveTo(e.coordinates.x*n,e.coordinates.y*r)},endPath:function(e){document.getElementById("canvas").getContext("2d").closePath()}},ready:function(){var e=document.getElementById("canvas").getContext("2d");e.translate(.5,.5),e.imageSmoothingEnabled=!1}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"drawing-board"},[n("div",{attrs:{id:"current-round-info"}},[n("span",{staticClass:"info-display"},[e._v("Round "+e._s(e.currentGameValues.currentRound)+" / "+e._s(e.config.maxRounds))]),e._v(" "),n("span",{staticClass:"info-display",attrs:{id:"current-word-display"}},[e._v(e._s(e.currentGameValues.maskedWord))]),e._v(" "),n("span",{staticClass:"info-display"},[e._v(e._s(e.currentGameValues.timer))])]),e._v(" "),n("div",{attrs:{id:"canvas-container"}},[n("canvas",{attrs:{width:e.width,height:e.height,id:"canvas"}})])])},staticRenderFns:[]};var p=n("VU/8")(l,h,!1,function(e){n("KxOn")},"data-v-7a1ad159",null).exports,m=n("Gu7T"),f=n.n(m),g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"intermediate-screen"},[t("h1",{attrs:{id:"msg"}},[this._v(this._s(this.msg.toUpperCase()))])])},staticRenderFns:[]};var v=n("VU/8")({name:"intermediate-screen",props:["msg"]},g,!1,function(e){n("AGpY")},"data-v-180b071f",null).exports,y={name:"game",components:{DrawingBoard:p,IntermediateScreen:v},data:function(){return{gamePhase:-1,players:S.players,wordlist:["testword","supertest","superultratest"],config:{guessTeamSize:2,drawTeamSize:2,roundTimeSec:30,maxRounds:10},currentGameValues:{currentWord:"",maskedWord:"",currentRound:0,guessTeams:[],drawTeam:[],timer:0}}},mounted:function(){console.log("players at game mounted : "+this.players.length);var e=this;document.addEventListener("setConfig",function(t){e.setGameConfig(t.detail)}),document.addEventListener("startRound",function(t){e.startRound()})},methods:{startRound:function(){var e=this;this.currentGameValues.currentRound++,this.gamePhase=0,this.buildTeams(),console.log("after build teams",this.players.length),this.selectWord(),this.maskWord(),this.setTimer(),setTimeout(function(){e.gamePhase=1;for(var t=0;t<e.players.length;t++)e.players[t].send(d()({action:"setGamePhase",payload:1}));e.startTimer()},3e3)},startTimer:function(){var e=this;this.gamephase=1;var t=setInterval(function(){e.currentGameValues.timer>0?e.currentGameValues.timer--:(clearInterval(t),e.endRound())},1e3)},endRound:function(){var e=this;this.gamePhase;for(var t=0;t<this.players.length;t++)this.players[t].send(d()({action:"setGamePhase",payload:2}));this.currentGameValues.currentRound==this.config.maxRounds&&this.gameover(),setTimeout(function(){e.startRound()},2e3)},gameOver:function(){this.gamestate=3;for(var e=0;e<this.players.length;e++)this.players[e].send(d()({action:"setGamePhase",payload:3}))},setTimer:function(){this.currentGameValues.timer=this.config.roundTimeSec},maskWord:function(){for(var e=[],t=0;t<this.currentGameValues.currentWord.length;t++)e.push("_");this.currentGameValues.maskedWord=e.join("")},unMaskWord:function(){for(var e=this.currentGameValues.timer/this.config.roundTimeSec,t=Math.random(),n=[],r=0;r<this.currentGameValues.currentWord.length;r++)t>e?"_"==this.currentGameValues.maskedWord.charAt(r)?n.push(this.currentGameValues.currentWord.charAt(r)):n.push("_"):"_"==this.currentGameValues.maskedWord.charAt(r)&&n.push(this.currentGameValues.maskedWord.charAt(r));this.currentGameValues.maskedWord=n.join("")},setGameConfig:function(e){this.config.guessTeamSize=e.guessTeamSize,this.config.drawTeamSize=e.drawTeamSize,this.config.roundTimeSec=e.roundTimeSec,this.config.maxRounds=e.maxRounds,this.players.forEach(function(e){e.send(d()({action:"startRound"}))}),console.log("game config 3 "+this.players.length)},shuffle:function(e){for(var t,n,r=e.length;r;t=Math.floor(Math.random()*r),n=e[--r],e[r]=e[t],e[t]=n);return e},selectWord:function(){var e=Math.floor(Math.random()*this.wordlist.length);this.currentGameValues.currentWord=this.wordlist[e]},buildTeams:function(){for(var e=[].concat(f()(this.players)),t=this.shuffle(e),n=0;n<=this.config.drawTeamSize;n++){if(!(t.length>0)){console.log("draw teams not enough players");break}var r=Math.floor(Math.random()*t.length),a=t[r];this.currentGameValues.drawTeam.push(a),t.splice(r,1),console.log("ranplayer",a),a.send(d()({action:"assignTeam",payload:"draw"}))}for(var i=Math.floor(this.players.length/this.config.guessTeamSize),s=0;s<=i;s++){var o=[];for(n=0;n<=this.config.guessTeamSize;n++){if(!(t.length>0)){console.log("guess teams not enough players");break}var c=Math.floor(Math.random()*t.length),u=t[c];o.push(u),t.splice(c,1),u.send(d()({action:"assignTeam",payload:"guess_"+s}))}this.currentGameValues.guessTeams.push(o)}},evaluateGuess:function(e,t){return e==this.currentGameValues.currentWord}}},b={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game"},[-1==e.gamePhase?n("IntermediateScreen",{attrs:{id:"preparing-screen",msg:"Create a new game!"}}):e._e(),e._v(" "),0==e.gamePhase?n("IntermediateScreen",{attrs:{id:"preparing-screen",msg:"prepare for round "+e.currentGameValues.currentRound}}):1==e.gamePhase?n("div",{attrs:{id:"game-screen"}},[n("div",{attrs:{id:"drawing-board"}},[n("DrawingBoard",{attrs:{currentGameValues:e.currentGameValues,config:e.config}})],1)]):2==e.gamePhase?n("IntermediateScreen",{attrs:{id:"round-end-screen",msg:"Round Over \n New Teams"}}):3==e.gamePhase?n("IntermediateScreen",{attrs:{id:"round-end-screen",msg:"Game Over"}}):e._e()],1)},staticRenderFns:[]};var w=n("VU/8")(y,b,!1,function(e){n("DbD+")},"data-v-531660e8",null).exports,_=[];var S={createConnection:function e(t,n,r){console.log(n),console.log(r);var a=new WebSocket(n+r);a.binaryType="arraybuffer",a.onopen=function(e){console.log("Connection "+t+" waiting ...")},a.onclose=function(e){console.log("Connection "+t+" closed.");for(var n=0;n<arr.length;n++)arr[n]===a&&_.splice(n,1)},a.onerror=function(e){console.log("Connection error.")},a.onmessage=function(i){"pairingcompleted"==i.data?(console.log("connection "+t+" paired"),_.push(a),_[0].send(d()({action:"setMaster"})),a.send(d()({action:"setConnected"})),a.onmessage=function(e){var t=JSON.parse(e.data);switch(console.log(t),t.action){case"initiateConfig":console.log("here");var n=new CustomEvent("initiateConfig");document.dispatchEvent(n);break;case"setConfig":var r=new CustomEvent("setConfig",{detail:t.payload});document.dispatchEvent(r);case"startRound":var a=new CustomEvent("startRound");document.dispatchEvent(a);break;case"draw":console.log("in switch"),p.methods.draw(t.payload);break;case"moveContext":p.methods.moveContext(t.payload);break;case"endPath":p.methods.endPath(t.payload)}},e(t+1,n,r)):(console.log("Unexpected message received from terminal."),a.close())}},players:_},C={name:"StartScreen",data:function(){return{query:"",players:S.players,msg:"Press Connect",minPlayers:0,urls:["https://media.giphy.com/media/I2sZ6qckkhfLG/giphy.gif","https://media.giphy.com/media/dQRJlzW1sK3QI/giphy.gif","https://media.giphy.com/media/BlcWQ9L2VfOFO/giphy.gif","https://media.giphy.com/media/PzY2K7SaqIEyA/giphy.gif","https://media.giphy.com/media/3oEdv5SY4LBHUBe2o8/giphy.gif","https://media.giphy.com/media/tIiSuOvQucRFkoyj4W/giphy.gif","https://media.giphy.com/media/mRAu3P4p28KoU/giphy.gif"]}},created:function(){this.query="?"+location.hash.split("?")[1];var e=oipfObjectFactory.createCSManager().getApp2AppLocalBaseURL(),t=this.$parseParameters(location.hash.split("?")[1]).channel||"org.mychannel.myapp";setTimeout(function(){S.createConnection(0,e,t)},1e3)},mounted:function(){var e='url("'+this.urls[Math.floor(Math.random()*this.urls.length)]+'") repeat';$(".splash").css("background",e);var t=this;document.addEventListener("initiateConfig",function(){t.startGame()})},methods:{startGame:function(){var e=this;this.players.length>=this.minPlayers?(this.msg="Let's Go!",setTimeout(function(){e.players.forEach(function(e){e.send(d()({action:"startConfig"}))}),j.push("/game"+e.query)},3e3)):(this.msg="You need at least 4 players!",setTimeout(function(){e.msg="drawnout.tv"},3e3))}}},T={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"start-screen"},[n("div",{attrs:{id:"msg-box"}},[n("p",[e._v(e._s(e.msg))])]),e._v(" "),n("div",{attrs:{id:"player-count-info"}},[n("div",{staticClass:"splash"},[n("div",{staticClass:"knockout-text",attrs:{id:"player-nr"}},[e._v(e._s(e.players.length))])]),e._v(" "),1==e.players.length?n("span",[e._v("Player Connected")]):n("span",[e._v("Players Connected")])])])},staticRenderFns:[]};var O=n("VU/8")(C,T,!1,function(e){n("H9Wn")},"data-v-7416eee6",null).exports,V=n("162o"),P={name:"splash",data:function(){return{query:"",urls:["https://media.giphy.com/media/I2sZ6qckkhfLG/giphy.gif","https://media.giphy.com/media/dQRJlzW1sK3QI/giphy.gif","https://media.giphy.com/media/BlcWQ9L2VfOFO/giphy.gif","https://media.giphy.com/media/PzY2K7SaqIEyA/giphy.gif","https://media.giphy.com/media/3oEdv5SY4LBHUBe2o8/giphy.gif","https://media.giphy.com/media/tIiSuOvQucRFkoyj4W/giphy.gif","https://media.giphy.com/media/mRAu3P4p28KoU/giphy.gif"]}},created:function(){this.$parseParameters(location.hash.split("?")[1]);this.query="?"+location.hash.split("?")[1]},mounted:function(){var e=this,t='url("'+this.urls[Math.floor(Math.random()*this.urls.length)]+'") repeat';$(".splash").css("background",t),Object(V.setTimeout)(function(t){$(".splash").addClass("fadeOut"),Object(V.setTimeout)(function(t){console.log(e.query),j.push("/start"+e.query)},300)},4e3)}},R={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"splash bigger"},[t("h2",{staticClass:"knockout-text"},[this._v("DRAWNOUT")])])}]};var G=n("VU/8")(P,R,!1,function(e){n("6Zfw")},"data-v-4cb77198",null).exports;i.a.use(c.a);var j=new c.a({mode:"hash",routes:[{path:"/",name:"Splashscreen",component:G},{path:"/start",name:"StartScreen",component:O},{path:"/game",name:"Game",component:w}]});!function(){var e=function(){h&&h.close(),(h=new WebSocket(u)).onopen=function(e){},h.onclose=function(e){(h=this)&&(h=null)},h.onerror=function(e){console.error("Error on connect to cs manager")},h.onmessage=function(e){try{var t=JSON.parse(e.data);n(t)}catch(e){console.error("Error on parsing or handling rpc response",e)}}},t=function(e,t){return e.id||(e.id=p++),!(!t||!h)&&(m[e.id]={req:e,callback:t},h.send(d()(e)),!0)},n=function(e){var t=e.id;console.log(e);var n=m[t];if(n&&n.callback)try{var r=n.req||null;n.callback.call(r,e)}catch(e){}},r=function(e){var t={};if(console.log("query : "+e),e)for(var n=e.split("&"),r=0;r<n.length;r++){var i=n[r].indexOf("="),s=i>-1?n[r].substr(0,i):n[r],o=i>-1?n[r].substr(i+1):"";void 0===t[s]?t[s]=o:"string"==typeof t[s]?t[s]=[t[s],o]:"object"==a()(t[s])&&t[s].push(o)}return t}(location.hash.split("?")[1]),i=r.port,s=r.hostname,o=i&&"ws://127.0.0.1:"+i+"/local/"||null,c=i&&s&&"ws://"+s+":"+i+"/remote/"||null,u="ws://127.0.0.1:"+i+"/hbbtvmanager",l=(navigator.userAgent,i&&s&&"http://"+s+":"+i+"/dial/apps/HbbTV"||null),h=null,p=1,m={},f=1,g={},v=1,y={},b=function(e,t,n,r,a){Object.defineProperty(this,"enum_id",{get:function(){return e}}),Object.defineProperty(this,"friendly_name",{get:function(){return t}}),Object.defineProperty(this,"X_HbbTV_App2AppURL",{get:function(){return n}}),Object.defineProperty(this,"X_HbbTV_InterDevSyncURL",{get:function(){return r}}),Object.defineProperty(this,"X_HbbTV_UserAgent",{get:function(){return a}})},w=function(e,t,n){Object.defineProperty(this,"enum_id",{get:function(){return e}}),Object.defineProperty(this,"friendly_name",{get:function(){return t}}),Object.defineProperty(this,"CS_OS_id",{get:function(){return n}})},_=function(e){return t({jsonrpc:"2.0",method:"discoverCSLaunchers",params:[]},function(t){var n=t.result,r=[];for(var a in n){var i=g[a],s=n[a];s.id=a;var o=i&&i.enum_id||f++,c=new w(o,s.friendlyName,s.csOsId);g[a]=c,g[o]=s,r.push(c)}e&&e.call(null,r)})},S=function(e){return t({jsonrpc:"2.0",method:"discoverTerminals",params:[]},function(t){var n=t.result,r=[];for(var a in n){var i=y[a],s=n[a];s.id=a;var o=i&&i.enumId||v++,c=new b(o,s.friendlyName,s.app2AppURL,s.interDevSyncURL,s.userAgent);y[a]=c,y[o]=s,r.push(c)}e&&e.call(null,r)})},C=function(e,n,r){var a=g[e],i=null;return a&&"string"==typeof n?t({jsonrpc:"2.0",method:"launchCSApp",params:[a.id,n]},function(t){var n=t.result;r&&r.call(null,e,n)}):(i=3,r&&r.call(null,e,i),!1)},T=function(e,n,r){var a=y[e],i=null;return a?t({jsonrpc:"2.0",method:"launchHbbTVApp",params:[a.id,n]},function(t){var n=t.result;r&&r.call(null,e,n)}):(i=3,r&&r.call(null,e,i),!1)},O=function(){return console.warn("HbbTVCSManager.getInterDevSyncURL is not supported yet"),""},V=function(){return l},P=function(){return o},R=function(){return c};if(i&&s){window.oipfObjectFactory=window.oipfObjectFactory||{},window.oipfObjectFactory.createCSManager=oipfObjectFactory.createCSManager||function(){return new function(){Object.defineProperty(this,"discoverCSLaunchers",{get:function(){return _}}),Object.defineProperty(this,"discoverTerminals",{get:function(){return S}}),Object.defineProperty(this,"launchCSApp",{get:function(){return C}}),Object.defineProperty(this,"launchHbbTVApp",{get:function(){return T}}),Object.defineProperty(this,"getInterDevSyncURL",{get:function(){return O}}),Object.defineProperty(this,"getAppLaunchURL",{get:function(){return V}}),Object.defineProperty(this,"getApp2AppLocalBaseURL",{get:function(){return P}}),Object.defineProperty(this,"getApp2AppRemoteBaseURL",{get:function(){return R}})}};var G=oipfObjectFactory.isObjectSupported;window.oipfObjectFactory.isObjectSupported=function(e){return"application/hbbtvCSManager"==e||G&&G.app(this,arguments)},e()}else i?(window.hbbtv=window.hbbtv||{},window.hbbtv.createTerminalManager=function(){return new function(){Object.defineProperty(this,"discoverTerminals",{get:function(){return S}}),Object.defineProperty(this,"launchHbbTVApp",{get:function(){return T}})}},e()):console.warn("hash parameters 'port' and/or 'hostname' are not detected. hbbtv-manager-polyfill.js can be used in HbbTV Apps when the hash parameters 'port' and 'hostname' are specified and in CS Web Apps when only the 'port' hash parameter is specified. These parameters will be automatically set when the HbbTV App is launched through the HbbTVDialServer or the CS Web App is launched through the CsLauncherDialServer. The hash parameters needs to be set manually if the application is launched by the user.")}();n("ACH5");i.a.config.productionTip=!1,i.a.mixin({methods:{$parseParameters:function(e){var t={};if(e)for(var n=e.split("&"),r=0;r<n.length;r++){var i=n[r].indexOf("="),s=i>-1?n[r].substr(0,i):n[r],o=i>-1?n[r].substr(i+1):"";void 0===t[s]?t[s]=o:"string"==typeof t[s]?t[s]=[t[s],o]:"object"==a()(t[s])&&t[s].push(o)}return t}}}),new i.a({el:"#app",router:j,components:{App:o},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.66cac1aebd80909dfb0e.js.map