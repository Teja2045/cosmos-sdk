"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[7419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,k=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Events",s={unversionedId:"core/events",id:"core/events",title:"Events",description:"Events are objects that contain information about the execution of the application. They are mainly used by service providers like block explorers and wallet to track the execution of various messages and index transactions.",source:"@site/docs/core/08-events.md",sourceDirName:"core",slug:"/core/events",permalink:"/main/core/events",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Command-Line Interface",permalink:"/main/core/cli"},next:{title:"Telemetry",permalink:"/main/core/telemetry"}},l={},p=[{value:"Events",id:"events-1",level:2},{value:"Examples",id:"examples",level:3},{value:"EventManager",id:"eventmanager",level:2},{value:"Subscribing to Events",id:"subscribing-to-events",level:2},{value:"Default Events",id:"default-events",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"events"},"Events"),(0,r.kt)("admonition",{title:"Synopsis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Event"),"s are objects that contain information about the execution of the application. They are mainly used by service providers like block explorers and wallet to track the execution of various messages and index transactions.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h3",{parentName:"admonition",id:"pre-requisite-readings"},"Pre-requisite Readings"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/main/basics/app-anatomy"},"Anatomy of a Cosmos SDK application")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.tendermint.com/master/spec/abci/abci.html#events"},"Tendermint Documentation on Events")))),(0,r.kt)("h2",{id:"events-1"},"Events"),(0,r.kt)("p",null,"Events are implemented in the Cosmos SDK as an alias of the ABCI ",(0,r.kt)("inlineCode",{parentName:"p"},"Event")," type and\ntake the form of: ",(0,r.kt)("inlineCode",{parentName:"p"},"{eventType}.{attributeKey}={attributeValue}"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/tendermint/tendermint/blob/v0.37.0-rc2/proto/tendermint/abci/types.proto#L334-L343\n")),(0,r.kt)("p",null,"An Event contains:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," to categorize the Event at a high-level; for example, the Cosmos SDK uses the ",(0,r.kt)("inlineCode",{parentName:"li"},'"message"')," type to filter Events by ",(0,r.kt)("inlineCode",{parentName:"li"},"Msg"),"s."),(0,r.kt)("li",{parentName:"ul"},"A list of ",(0,r.kt)("inlineCode",{parentName:"li"},"attributes")," are key-value pairs that give more information about the categorized Event. For example, for the ",(0,r.kt)("inlineCode",{parentName:"li"},'"message"')," type, we can filter Events by key-value pairs using ",(0,r.kt)("inlineCode",{parentName:"li"},"message.action={some_action}"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"message.module={some_module}")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"message.sender={some_sender}"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To parse the attribute values as strings, make sure to add ",(0,r.kt)("inlineCode",{parentName:"p"},"'")," (single quotes) around each attribute value.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Typed Events")," are Protobuf-defined ",(0,r.kt)("a",{parentName:"p",href:"/main/architecture/adr-032-typed-events"},"messages")," used by the Cosmos SDK\nfor emitting and querying Events. They are defined in a ",(0,r.kt)("inlineCode",{parentName:"p"},"event.proto")," file, on a ",(0,r.kt)("strong",{parentName:"p"},"per-module basis")," and are read as ",(0,r.kt)("inlineCode",{parentName:"p"},"proto.Message"),".\n",(0,r.kt)("em",{parentName:"p"},"Legacy Events")," are defined on a ",(0,r.kt)("strong",{parentName:"p"},"per-module basis")," in the module's ",(0,r.kt)("inlineCode",{parentName:"p"},"/types/events.go")," file.\nThey are triggered from the module's Protobuf ",(0,r.kt)("a",{parentName:"p",href:"/main/building-modules/msg-services"},(0,r.kt)("inlineCode",{parentName:"a"},"Msg")," service"),"\nby using the ",(0,r.kt)("a",{parentName:"p",href:"#eventmanager"},(0,r.kt)("inlineCode",{parentName:"a"},"EventManager")),"."),(0,r.kt)("p",null,"In addition, each module documents its events under in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Events")," sections of its specs (x/{moduleName}/",(0,r.kt)("inlineCode",{parentName:"p"},"README.md"),")."),(0,r.kt)("p",null,"Lastly, Events are returned to the underlying consensus engine in the response of the following ABCI messages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/main/core/baseapp#beginblock"},(0,r.kt)("inlineCode",{parentName:"a"},"BeginBlock"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/main/core/baseapp#endblock"},(0,r.kt)("inlineCode",{parentName:"a"},"EndBlock"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/main/core/baseapp#checktx"},(0,r.kt)("inlineCode",{parentName:"a"},"CheckTx"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/main/core/baseapp#delivertx"},(0,r.kt)("inlineCode",{parentName:"a"},"DeliverTx")))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The following examples show how to query Events using the Cosmos SDK."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tx.height=23")),(0,r.kt)("td",{parentName:"tr",align:null},"Query all transactions at height 23")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"message.action='/cosmos.bank.v1beta1.Msg/Send'")),(0,r.kt)("td",{parentName:"tr",align:null},"Query all transactions containing a x/bank ",(0,r.kt)("inlineCode",{parentName:"td"},"Send")," ",(0,r.kt)("a",{parentName:"td",href:"/main/building-modules/msg-services"},"Service ",(0,r.kt)("inlineCode",{parentName:"a"},"Msg")),". Note the ",(0,r.kt)("inlineCode",{parentName:"td"},"'"),"s around the value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"message.module='bank'")),(0,r.kt)("td",{parentName:"tr",align:null},"Query all transactions containing messages from the x/bank module. Note the ",(0,r.kt)("inlineCode",{parentName:"td"},"'"),"s around the value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"create_validator.validator='cosmosval1...'")),(0,r.kt)("td",{parentName:"tr",align:null},"x/staking-specific Event, see ",(0,r.kt)("a",{parentName:"td",href:"/main/modules/staking/"},"x/staking SPEC"),".")))),(0,r.kt)("h2",{id:"eventmanager"},"EventManager"),(0,r.kt)("p",null,"In Cosmos SDK applications, Events are managed by an abstraction called the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventManager"),".\nInternally, the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventManager")," tracks a list of Events for the entire execution flow of a\ntransaction or ",(0,r.kt)("inlineCode",{parentName:"p"},"BeginBlock"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"EndBlock"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/types/events.go#L24-L27\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"EventManager")," comes with a set of useful methods to manage Events. The method\nthat is used most by module and application developers is ",(0,r.kt)("inlineCode",{parentName:"p"},"EmitTypedEvent")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"EmitEvent")," that tracks\nan Event in the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventManager"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/types/events.go#L53-L62\n")),(0,r.kt)("p",null,"Module developers should handle Event emission via the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventManager#EmitTypedEvent")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"EventManager#EmitEvent")," in each message\n",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")," and in each ",(0,r.kt)("inlineCode",{parentName:"p"},"BeginBlock"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"EndBlock")," handler. The ",(0,r.kt)("inlineCode",{parentName:"p"},"EventManager")," is accessed via\nthe ",(0,r.kt)("a",{parentName:"p",href:"/main/core/context"},(0,r.kt)("inlineCode",{parentName:"a"},"Context")),", where Event should be already registered, and emitted like this:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Typed events:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/group/keeper/msg_server.go#L88-L91\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Legacy events:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"ctx.EventManager().EmitEvent(\n    sdk.NewEvent(eventType, sdk.NewAttribute(attributeKey, attributeValue)),\n)\n")),(0,r.kt)("p",null,"Module's ",(0,r.kt)("inlineCode",{parentName:"p"},"handler")," function should also set a new ",(0,r.kt)("inlineCode",{parentName:"p"},"EventManager")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," to isolate emitted Events per ",(0,r.kt)("inlineCode",{parentName:"p"},"message"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func NewHandler(keeper Keeper) sdk.Handler {\n    return func(ctx sdk.Context, msg sdk.Msg) (*sdk.Result, error) {\n        ctx = ctx.WithEventManager(sdk.NewEventManager())\n        switch msg := msg.(type) {\n")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/main/building-modules/msg-services"},(0,r.kt)("inlineCode",{parentName:"a"},"Msg")," services")," concept doc for a more detailed\nview on how to typically implement Events and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventManager")," in modules."),(0,r.kt)("h2",{id:"subscribing-to-events"},"Subscribing to Events"),(0,r.kt)("p",null,"You can use Tendermint's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/tendermint-core/subscription.html#subscribing-to-events-via-websocket"},"Websocket")," to subscribe to Events by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," RPC method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "subscribe",\n  "id": "0",\n  "params": {\n    "query": "tm.event=\'eventCategory\' AND eventType.eventAttribute=\'attributeValue\'"\n  }\n}\n')),(0,r.kt)("p",null,"The main ",(0,r.kt)("inlineCode",{parentName:"p"},"eventCategory")," you can subscribe to are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NewBlock"),": Contains Events triggered during ",(0,r.kt)("inlineCode",{parentName:"li"},"BeginBlock")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"EndBlock"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Tx"),": Contains Events triggered during ",(0,r.kt)("inlineCode",{parentName:"li"},"DeliverTx")," (i.e. transaction processing)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ValidatorSetUpdates"),": Contains validator set updates for the block.")),(0,r.kt)("p",null,"These Events are triggered from the ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," package after a block is committed. You can get the\nfull list of Event categories ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/tendermint/tendermint/types#pkg-constants"},"on the Tendermint Go documentation"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"attribute")," value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," allow you to filter the specific Event you are looking for. For example, a ",(0,r.kt)("inlineCode",{parentName:"p"},"Mint")," transaction triggers an Event of type ",(0,r.kt)("inlineCode",{parentName:"p"},"EventMint")," and has an ",(0,r.kt)("inlineCode",{parentName:"p"},"Id")," and an ",(0,r.kt)("inlineCode",{parentName:"p"},"Owner")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"attributes")," (as defined in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/nft/v1beta1/event.proto#L21-L31"},(0,r.kt)("inlineCode",{parentName:"a"},"events.proto")," file of the ",(0,r.kt)("inlineCode",{parentName:"a"},"NFT")," module"),")."),(0,r.kt)("p",null,"Subscribing to this Event would be done like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "subscribe",\n  "id": "0",\n  "params": {\n    "query": "tm.event=\'Tx\' AND mint.owner=\'ownerAddress\'"\n  }\n}\n')),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"ownerAddress")," is an address following the ",(0,r.kt)("a",{parentName:"p",href:"/main/basics/accounts#addresses"},(0,r.kt)("inlineCode",{parentName:"a"},"AccAddress"))," format."),(0,r.kt)("p",null,"The same way can be used to subscribe to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/bank/types/events.go"},"legacy events"),"."),(0,r.kt)("h2",{id:"default-events"},"Default Events"),(0,r.kt)("p",null,"There are a few events that are automatically emitted for all messages, directly from ",(0,r.kt)("inlineCode",{parentName:"p"},"baseapp"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message.action"),": The name of the message type."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message.sender"),": The address of the message signer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message.module"),": The name of the module that emitted the message.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The module name is assumed by ",(0,r.kt)("inlineCode",{parentName:"p"},"baseapp")," to be the second element of the message route: ",(0,r.kt)("inlineCode",{parentName:"p"},'"cosmos.bank.v1beta1.MsgSend" -> "bank"'),".\nIn case a module does not follow the standard message path, (e.g. IBC), it is advised to keep emitting the module name event.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Baseapp")," only emits that event if the module have not already done so.")))}d.isMDXComponent=!0}}]);