(this.webpackJsonpmehfeeshes_nft_minting_dapp=this.webpackJsonpmehfeeshes_nft_minting_dapp||[]).push([[0],{246:function(e,n){},255:function(e,n){},273:function(e,n){},275:function(e,n){},294:function(e,n){},295:function(e,n){},358:function(e,n){},360:function(e,n){},393:function(e,n){},395:function(e,n){},396:function(e,n){},401:function(e,n){},403:function(e,n){},409:function(e,n){},411:function(e,n){},424:function(e,n){},436:function(e,n){},439:function(e,n){},444:function(e,n){},452:function(e,n){},461:function(e,n){},463:function(e,n){},533:function(e,n,t){},534:function(e,n,t){"use strict";t.r(n);var c,r,o,a,i,s,l,d,u,x,p,j,b,h,f,g,O=t(1),y=t(85),m=t.n(y),v=t(16),w=t.n(v),C=t(43),A=t(69),S=t(14),T=t(58),E=t(68),N=t.n(E),_=t(220),k=t.n(_),M=t(70),I=t(221),D=t(19),L={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CONNECTION_REQUEST":return Object(D.a)(Object(D.a)({},L),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(D.a)(Object(D.a)({},e),{},{loading:!1,account:n.payload.account,smartContract:n.payload.smartContract,web3:n.payload.web3});case"CONNECTION_FAILED":return Object(D.a)(Object(D.a)({},L),{},{loading:!1,errorMsg:n.payload});case"UPDATE_ACCOUNT":return Object(D.a)(Object(D.a)({},e),{},{account:n.payload.account});default:return e}},F={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHECK_DATA_REQUEST":return Object(D.a)(Object(D.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(D.a)(Object(D.a)({},e),{},{loading:!1,totalSupply:n.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(D.a)(Object(D.a)({},F),{},{loading:!1,error:!0,errorMsg:n.payload});default:return e}},P=Object(M.b)({blockchain:R,data:K}),U=[I.a],W=Object(M.c)(M.a.apply(void 0,U)),z=Object(M.d)(P,W),Y=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},H=function(){return function(){var e=Object(C.a)(w.a.mark((function e(n){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,z.getState().blockchain.smartContract.methods.totalSupply().call();case 4:t=e.sent,n({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:t}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),n(Y("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}()},B=function(e){return{type:"CONNECTION_FAILED",payload:e}},G=function(e){return function(){var n=Object(C.a)(w.a.mark((function n(t){return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t({type:"UPDATE_ACCOUNT",payload:{account:e}}),t(H());case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},q=t(15),X=q.a.div(c||(c=Object(S.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var n=e.image;return n?"url(".concat(n,")"):"none"})),Q=q.a.div(r||(r=Object(S.a)(["\n  height: 8px;\n  width: 8px;\n"]))),J=q.a.div(o||(o=Object(S.a)(["\n  height: 16px;\n  width: 16px;\n"]))),V=q.a.div(a||(a=Object(S.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Z=q.a.div(i||(i=Object(S.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$=q.a.div(s||(s=Object(S.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var n=e.flex;return n||0}),(function(e){var n=e.fd;return n||"column"}),(function(e){var n=e.jc;return n||"flex-start"}),(function(e){var n=e.ai;return n||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var n=e.image;return n?"url(".concat(n,")"):"none"})),ee=q.a.p(l||(l=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),ne=(q.a.p(d||(d=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),q.a.p(u||(u=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),te=(q.a.div(x||(x=Object(S.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),t(2)),ce=q.a.button(p||(p=Object(S.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(19, 73, 74, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(19, 73, 74, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(19, 73, 74, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),re=q.a.button(j||(j=Object(S.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--secondary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(19, 73, 74, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(19, 73, 74, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(19, 73, 74, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),oe=q.a.div(b||(b=Object(S.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),ae=q.a.img(h||(h=Object(S.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),ie=q.a.img(f||(f=Object(S.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),se=q.a.a(g||(g=Object(S.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var le=function(){var e,n,t=Object(T.b)(),c=Object(T.c)((function(e){return e.blockchain})),r=Object(T.c)((function(e){return e.data})),o=Object(O.useState)(!1),a=Object(A.a)(o,2),i=a[0],s=a[1],l=Object(O.useState)("Select the amount and click Mint. Max of 20 per transaction."),d=Object(A.a)(l,2),u=d[0],x=d[1],p=Object(O.useState)(1),j=Object(A.a)(p,2),b=j[0],h=j[1],f=Object(O.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),g=Object(A.a)(f,2),y=g[0],m=g[1],v=function(){""!==c.account&&null!==c.smartContract&&t(H(c.account))},S=function(){var e=Object(C.a)(w.a.mark((function e(){var n,t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,m(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.useEffect)((function(){S()}),[]),Object(O.useEffect)((function(){v()}),[c.account]),Object(te.jsx)(X,{children:Object(te.jsxs)($,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:y.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(te.jsx)(ae,{alt:"logo",src:"/config/images/logo.png"}),Object(te.jsx)(J,{}),Object(te.jsxs)($,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(te.jsx)(ne,{style:{textAlign:"center",color:"var(--primary-text)"},children:"MFSH is a collection of 5,000 unique Feesh NFTs in Polygon blockchain."}),Object(te.jsx)(ne,{style:{textAlign:"center",color:"var(--primary-text)"},children:"A new era has arrived in the Metaverse. Get your Unique NFT and be a member of the Feesh Club. Meh..."}),Object(te.jsxs)("span",{style:{textAlign:"center"},children:[Object(te.jsx)(ce,{onClick:function(e){window.open("https://twitter.com/MehFeeshesNFT","_blank")},style:{margin:"5px"},children:"Twitter"}),Object(te.jsx)(ce,{style:{margin:"5px"},onClick:function(e){window.open(y.MARKETPLACE_LINK,"_blank")},children:y.MARKETPLACE})]})]}),Object(te.jsxs)(oe,{flex:1,style:{padding:24},test:!0,children:[Object(te.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(te.jsx)(ie,{alt:"example",src:"/config/images/example.gif"})}),Object(te.jsx)(Z,{}),Object(te.jsxs)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(te.jsx)(ee,{style:{textAlign:"center",fontSize:20,fontWeight:"bold",color:"var(--secondary)"},children:"Your NFT will be revealed soon!"}),Object(te.jsxs)(ee,{style:{textAlign:"center",fontSize:20,fontWeight:"bold",color:"var(--secondary)"},children:["NFTs to be Minted: ",y.MAX_SUPPLY]}),Object(te.jsxs)(ee,{style:{textAlign:"center",fontSize:20,fontWeight:"bold",color:"var(--secondary)"},children:["Minted: ",r.totalSupply," , Remaining: ",y.MAX_SUPPLY-r.totalSupply]}),Object(te.jsx)(ne,{style:{textAlign:"center",color:"var(--accent-text)"},children:Object(te.jsx)(se,{target:"_blank",href:y.SCAN_LINK,children:(e=y.CONTRACT_ADDRESS,n=15,e.length>n?"".concat(e.substring(0,n),"..."):e)})}),Object(te.jsx)(J,{}),Number(r.totalSupply)>=y.MAX_SUPPLY?Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(ee,{style:{textAlign:"center",color:"var(--secondary)"},children:"The sale has ended."}),Object(te.jsxs)(ne,{style:{textAlign:"center",color:"var(--secondary)"},children:["You can still find ",y.NFT_NAME," on"]}),Object(te.jsx)(J,{}),Object(te.jsx)(se,{target:"_blank",href:y.MARKETPLACE_LINK,children:y.MARKETPLACE})]}):Object(te.jsxs)(te.Fragment,{children:[Object(te.jsxs)(ee,{style:{textAlign:"center",color:"var(--secondary)"},children:["1 ",y.SYMBOL," costs ",y.DISPLAY_COST," ",y.NETWORK.SYMBOL,"."]}),Object(te.jsx)(Q,{}),Object(te.jsx)(ne,{style:{textAlign:"center",color:"var(--secondary)"},children:"Excluding gas fees."}),Object(te.jsx)(J,{}),""===c.account||null===c.smartContract?Object(te.jsxs)($,{ai:"center",jc:"center",children:[Object(te.jsxs)(ne,{style:{textAlign:"center",color:"var(--secondary)"},children:["Connect to the ",y.NETWORK.NAME," network."]}),Object(te.jsx)(ne,{style:{textAlign:"center",color:"var(--secondary)"},children:"Minted amount will show after you are connected."}),Object(te.jsx)(J,{}),Object(te.jsx)(ce,{onClick:function(e){e.preventDefault(),t(function(){var e=Object(C.a)(w.a.mark((function e(n){var t,c,r,o,a,i,s,l,d;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=e.sent,e.next=12,r.json();case 12:if(o=e.sent,a=window,!(i=a.ethereum)||!i.isMetaMask){e.next=33;break}return N.a.setProvider(i),s=new k.a(i),e.prev=18,e.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=e.sent,e.next=24,i.request({method:"net_version"});case 24:e.sent==o.NETWORK.ID?(d=new N.a(c,o.CONTRACT_ADDRESS),n({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(e){n(G(e[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):n(B("Change network to ".concat(o.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),n(B("Something went wrong."));case 31:e.next=34;break;case 33:n(B("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(n){return e.apply(this,arguments)}}()),v()},children:"CONNECT"}),""!==c.errorMsg?Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(J,{}),Object(te.jsx)(ne,{style:{textAlign:"center",color:"var(--secondary)"},children:c.errorMsg})]}):null]}):Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(ne,{style:{textAlign:"center",color:"var(--secondary)"},children:u}),Object(te.jsx)(V,{}),Object(te.jsxs)($,{ai:"center",jc:"center",fd:"row",children:[Object(te.jsx)(re,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=b-1;e<1&&(e=1),h(e)}()},children:"-"}),Object(te.jsx)(V,{}),Object(te.jsx)(ne,{style:{textAlign:"center",color:"var(--secondary)"},children:b}),Object(te.jsx)(V,{}),Object(te.jsx)(re,{disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=b+1;e>20&&(e=20),h(e)}()},children:"+"})]}),Object(te.jsx)(J,{}),Object(te.jsx)($,{ai:"center",jc:"center",fd:"row",children:Object(te.jsx)(ce,{disabled:i?1:0,onClick:function(e){e.preventDefault(),function(){var e=y.WEI_COST,n=y.GAS_LIMIT,r=String(e*b),o=String(n*b);console.log("Cost: ",r),console.log("Gas limit: ",o),x("Minting your ".concat(y.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(b).send({gasLimit:String(o),to:y.CONTRACT_ADDRESS,from:c.account,value:r}).once("error",(function(e){console.log(e),x("Sorry, something went wrong. Please try again later."),s(!1)})).then((function(e){console.log(e),x("WOW, the ".concat(y.NFT_NAME," is yours! go visit Opensea.io to view it.")),s(!1),t(H(c.account))}))}(),v()},children:i?"WAIT...":"MINT"})})]})]}),Object(te.jsx)(V,{})]}),Object(te.jsx)(Z,{}),Object(te.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(te.jsx)(ie,{alt:"example",src:"/config/images/example.gif",style:{transform:"scaleX(-1)"}})})]}),Object(te.jsx)(V,{}),Object(te.jsxs)($,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(te.jsx)(ne,{style:{textAlign:"center",color:"var(--primary-text)"},children:"If the minting process takes time, speed up the transaction and wait for it be successful. Do not panic if the mint process shows failed after confirmed transaction, just refresh the page or you can check in Opensea after few minutes."}),Object(te.jsx)(J,{}),Object(te.jsxs)(ne,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",y.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(te.jsx)(J,{}),Object(te.jsxs)(ne,{style:{textAlign:"center",color:"var(--primary-text)"},children:["The gas limit is set to ",y.GAS_LIMIT," for the contract to successfully mint your NFT. It is recommended that you don't lower the gas limit."]})]})]})})},de=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,538)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),c(e),r(e),o(e),a(e)}))};t(533);m.a.render(Object(te.jsx)(T.a,{store:z,children:Object(te.jsx)(le,{})}),document.getElementById("root")),de()}},[[534,1,2]]]);
//# sourceMappingURL=main.23635729.chunk.js.map