(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,a){e.exports=a.p+"static/media/mind.bfb21a23.svg"},147:function(e,t,a){e.exports=a(159)},152:function(e,t,a){},159:function(e,t,a){"use strict";a.r(t);for(var n=a(0),l=a.n(n),r=a(51),o=a.n(r),c=(a(152),a(9)),i=a(175),s=a(180),u=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),u=Object(c.a)(o,2),m=u[0],d=u[1],f=!1;(window.matchMedia("(display-mode: standalone)").matches||m)&&(f=!0),window.addEventListener("beforeinstallprompt",function(e){e.preventDefault(),r(e)});return l.a.createElement(i.a,{stackable:!0,inverted:!0,size:"massive"},l.a.createElement(i.a.Item,{header:!0},l.a.createElement("h1",{style:{color:"#2185D0"}},"QuizApp")),a&&!f&&l.a.createElement(i.a.Item,{position:"right"},l.a.createElement(s.a,{color:"teal",icon:"cloud download",labelPosition:"left",content:"Install App",onClick:function(){a.prompt(),a.userChoice.then(function(e){"accepted"===e.outcome?(d(!0),console.log("User accepted the A2HS prompt")):console.log("User dismissed the A2HS prompt")})}})))},m=function(e){var t=e.children;return l.a.createElement(n.Fragment,null,l.a.createElement(u,null),l.a.createElement("main",null,t))},d=a(171),f=a(179),E=a(76),h=function(){return l.a.createElement(d.a,null,l.a.createElement(f.a,{icon:!0,size:"big"},l.a.createElement(E.a,{name:"circle notched",loading:!0}),l.a.createElement(f.a.Content,null,l.a.createElement(f.a.Header,null,"Just one second"),"We are fetching that content for you.")))},v=a(108),b=a(105),g=a(120),p=a(182),k=a(176),y=a(172),w=a(174),S=a(132),O=a.n(S),j=[{key:"0",text:"Any Category",value:"0"},{key:9,text:"General Knowledge",value:9},{key:10,text:"Entertainment: Books",value:10},{key:11,text:"Entertainment: Films",value:11},{key:12,text:"Entertainment: Music",value:12},{key:13,text:"Entertainment: Musicals & Theatres",value:13},{key:14,text:"Entertainment: Television",value:14},{key:15,text:"Entertainment: Video Games",value:15},{key:16,text:"Entertainment: Board Games",value:16},{key:17,text:"Science & Nature",value:17},{key:18,text:"Science: Computers",value:18},{key:19,text:"Science: Mathematics",value:19},{key:20,text:"Mythology",value:20},{key:21,text:"Sports",value:21},{key:22,text:"Geography",value:22},{key:23,text:"History",value:23},{key:24,text:"Politics",value:24},{key:25,text:"Arts",value:25},{key:26,text:"Celebrities",value:26},{key:27,text:"Animals",value:27},{key:28,text:"Vehicles",value:28},{key:29,text:"Entertainment: Comics",value:29},{key:30,text:"Science: Gadgets",value:30},{key:31,text:"Entertainment: Japanese Anime & Manga",value:31},{key:32,text:"Entertainment: Cartoon & Animations",value:32}],x={hours:[],minutes:[],seconds:[]},C=0;C<100;C++)x.hours.push({key:C,text:C,value:60*C*60});for(var A=0;A<60;A++)x.minutes.push({key:A,text:A,value:60*A});for(var T=0;T<60;T++)x.seconds.push({key:T,text:T,value:T});for(var Q=x,z=[{key:"0",text:"Any Difficulty",value:"0"},{key:"easy",text:"Easy",value:"easy"},{key:"medium",text:"Medium",value:"medium"},{key:"hard",text:"Hard",value:"hard"}],H=[],M=1;M<=50;M++)H.push({key:M,text:M,value:M});var N=H,I=[{key:"0",text:"Any Type",value:"0"},{key:"multiple",text:"Multiple Choice",value:"multiple"},{key:"boolean",text:"True / False",value:"boolean"}],B=function(e){var t=parseInt(e),a=null;return t>=97?a="A+":t>=93&&t<=96?a="A":t>=90&&t<=92?a="A-":t>=87&&t<=89?a="B+":t>=83&&t<=86?a="B":t>=80&&t<=82?a="B-":t>=77&&t<=79?a="C+":t>=73&&t<=76?a="C":t>=70&&t<=72?a="C-":t>=67&&t<=69?a="D+":t>=63&&t<=66?a="D":t>=60&&t<=62?a="D-":t<60&&(a="F"),{grade:a,remarks:e>=60?"Congratulations, YOU PASSED!":"Sorry, YOU FAILED!"}},P=function(e,t){return Number((100*t/e).toFixed(2))},D=function(e){var t;switch(e){case 0:t="A.";break;case 1:t="B.";break;case 2:t="C.";break;case 3:t="D.";break;default:t=null}return t},q=function(e){for(var t=(e=Object(v.a)(e)).length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e},_=function(e){return{hours:"0".concat(Math.floor(e/36e5)).slice(-2),minutes:"0".concat(Math.floor(e/6e4%60)).slice(-2),seconds:"0".concat(Math.floor(e/1e3%60)%60).slice(-2)}},L=a(183),G=function(){return window.addEventListener("online",function(){return window.location.reload()}),l.a.createElement(d.a,null,l.a.createElement(p.a,{placeholder:!0},l.a.createElement(L.a,{icon:!0},l.a.createElement(E.a,{name:"unlink"}),l.a.createElement("h1",null,"Offline"),l.a.createElement("p",null,"There is no Internet connection. We'll try to reload automatically once you're back online!"," ",l.a.createElement("span",{role:"img","aria-label":"signal"},"\ud83d\udcf6")))))},U=function(e){var t=e.startQuiz,a=Object(n.useState)("0"),r=Object(c.a)(a,2),o=r[0],i=r[1],u=Object(n.useState)(5),m=Object(c.a)(u,2),E=m[0],h=m[1],S=Object(n.useState)("0"),x=Object(c.a)(S,2),C=x[0],A=x[1],T=Object(n.useState)("0"),H=Object(c.a)(T,2),M=H[0],B=H[1],P=Object(n.useState)({hours:0,minutes:120,seconds:0}),D=Object(c.a)(P,2),_=D[0],L=D[1],U=Object(n.useState)(!1),F=Object(c.a)(U,2),W=F[0],R=F[1],Y=Object(n.useState)(null),J=Object(c.a)(Y,2),V=J[0],K=J[1],$=Object(n.useState)(!1),X=Object(c.a)($,2),Z=X[0],ee=X[1],te=function(e,t){var a=t.name,n=t.value;L(Object(g.a)(Object(g.a)({},_),{},Object(b.a)({},a,n)))},ae=!1;o&&E&&C&&M&&(_.hours||_.minutes||_.seconds)&&(ae=!0);return Z?l.a.createElement(G,null):l.a.createElement(d.a,null,l.a.createElement(p.a,null,l.a.createElement(k.a.Group,{divided:!0},l.a.createElement(k.a,null,l.a.createElement(k.a.Image,{src:O.a}),l.a.createElement(k.a.Content,null,l.a.createElement(k.a.Header,null,l.a.createElement("h1",null,"The Ultimate Trivia Quiz")),V&&l.a.createElement(f.a,{error:!0,onDismiss:function(){return K(null)}},l.a.createElement(f.a.Header,null,"Error!"),V.message),l.a.createElement(y.a,null),l.a.createElement(k.a.Meta,null,l.a.createElement(w.a,{fluid:!0,selection:!0,name:"category",placeholder:"Select Quiz Category",header:"Select Quiz Category",options:j,value:o,onChange:function(e,t){var a=t.value;return i(a)},disabled:W}),l.a.createElement("br",null),l.a.createElement(w.a,{fluid:!0,selection:!0,name:"numOfQ",placeholder:"Select No. of Questions",header:"Select No. of Questions",options:N,value:E,onChange:function(e,t){var a=t.value;return h(a)},disabled:W}),l.a.createElement("br",null),l.a.createElement(w.a,{fluid:!0,selection:!0,name:"difficulty",placeholder:"Select Difficulty Level",header:"Select Difficulty Level",options:z,value:C,onChange:function(e,t){var a=t.value;return A(a)},disabled:W}),l.a.createElement("br",null),l.a.createElement(w.a,{fluid:!0,selection:!0,name:"type",placeholder:"Select Questions Type",header:"Select Questions Type",options:I,value:M,onChange:function(e,t){var a=t.value;return B(a)},disabled:W}),l.a.createElement("br",null),l.a.createElement(w.a,{search:!0,selection:!0,name:"hours",placeholder:"Select Hours",header:"Select Hours",options:Q.hours,value:_.hours,onChange:te,disabled:W}),l.a.createElement(w.a,{search:!0,selection:!0,name:"minutes",placeholder:"Select Minutes",header:"Select Minutes",options:Q.minutes,value:_.minutes,onChange:te,disabled:W}),l.a.createElement(w.a,{search:!0,selection:!0,name:"seconds",placeholder:"Select Seconds",header:"Select Seconds",options:Q.seconds,value:_.seconds,onChange:te,disabled:W})),l.a.createElement(y.a,null),l.a.createElement(k.a.Extra,null,l.a.createElement(s.a,{primary:!0,size:"big",icon:"play",labelPosition:"left",content:W?"Processing...":"Play Now",onClick:function(){R(!0),V&&K(null);var e="https://opentdb.com/api.php?amount=".concat(E,"&category=").concat(o,"&difficulty=").concat(C,"&type=").concat(M);fetch(e).then(function(e){return e.json()}).then(function(e){return setTimeout(function(){var a=e.response_code,n=e.results;if(1===a){var r=l.a.createElement("p",null,"The API doesn't have enough questions for your query. (Ex. Asking for 50 Questions in a Category that only has 20.)",l.a.createElement("br",null),l.a.createElement("br",null),"Please change the ",l.a.createElement("strong",null,"No. of Questions"),","," ",l.a.createElement("strong",null,"Difficulty Level"),", or"," ",l.a.createElement("strong",null,"Type of Questions"),".");return R(!1),void K({message:r})}n.forEach(function(e){e.options=q([e.correct_answer].concat(Object(v.a)(e.incorrect_answers)))}),R(!1),t(n,_.hours+_.minutes+_.seconds)},1e3)}).catch(function(e){return setTimeout(function(){navigator.onLine?(R(!1),K(e)):ee(!0)},1e3)})},disabled:!ae||W})))))),l.a.createElement("br",null))},F=a(77),W=a.n(F),R=a(173),Y=a(107),J=a.n(Y),V=function(e){var t=e.countdownTime,a=e.timeOver,r=e.setTimeTaken,o=1e3*t,i=Object(n.useState)(o),u=Object(c.a)(i,2),m=u[0],d=u[1],f=_(m),E=f.hours,h=f.minutes,v=f.seconds;return Object(n.useEffect)(function(){var e=setInterval(function(){var t=m-1e3;t>=0?d(t):(clearInterval(e),J.a.fire({title:"Your Time's Up",icon:"info",timer:5e3,willClose:function(){return a(o-m)}}))},1e3);return function(){clearInterval(e),r(o-m+1e3)}},[m]),l.a.createElement(s.a.Group,{size:"massive",basic:!0,floated:"right"},l.a.createElement(R.a,{content:"Hours",trigger:l.a.createElement(s.a,{active:!0},E),position:"bottom left"}),l.a.createElement(R.a,{content:"Minutes",trigger:l.a.createElement(s.a,{active:!0},h),position:"bottom left"}),l.a.createElement(R.a,{content:"Seconds",trigger:l.a.createElement(s.a,{active:!0},v),position:"bottom left"}))},K=function(e){var t=e.data,a=e.countdownTime,r=e.endQuiz,o=Object(n.useState)(0),u=Object(c.a)(o,2),m=u[0],h=u[1],v=Object(n.useState)(0),b=Object(c.a)(v,2),g=b[0],w=b[1],S=Object(n.useState)(null),O=Object(c.a)(S,2),j=O[0],x=O[1],C=Object(n.useState)([]),A=Object(c.a)(C,2),T=A[0],Q=A[1],z=Object(n.useState)(null),H=Object(c.a)(z,2),M=H[0],N=H[1],I=function(e,t){var a=t.name;x(a)};return l.a.createElement(k.a.Header,null,l.a.createElement(d.a,null,l.a.createElement(p.a,null,l.a.createElement(k.a.Group,{divided:!0},l.a.createElement(k.a,null,l.a.createElement(k.a.Content,null,l.a.createElement(k.a.Extra,null,l.a.createElement(L.a,{as:"h1",block:!0,floated:"left"},l.a.createElement(E.a,{name:"info circle"}),l.a.createElement(L.a.Content,null,"Question No.".concat(m+1," of ").concat(t.length))),l.a.createElement(V,{countdownTime:a,timeOver:function(e){return r({totalQuestions:t.length,correctAnswers:g,timeTaken:e,questionsAndAnswers:T})},setTimeTaken:N})),l.a.createElement("br",null),l.a.createElement(k.a.Meta,null,l.a.createElement(f.a,{size:"huge",floating:!0},l.a.createElement("b",null,"Q. ".concat(W.a.decode(t[m].question)))),l.a.createElement("br",null),l.a.createElement(k.a.Description,null,l.a.createElement("h3",null,"Please choose one of the following answers:")),l.a.createElement(y.a,null),l.a.createElement(i.a,{vertical:!0,fluid:!0,size:"massive"},t[m].options.map(function(e,t){var a=D(t),n=W.a.decode(e);return l.a.createElement(i.a.Item,{key:n,name:n,active:j===n,onClick:I},l.a.createElement("b",{style:{marginRight:"8px"}},a),n)}))),l.a.createElement(y.a,null),l.a.createElement(k.a.Extra,null,l.a.createElement(s.a,{primary:!0,content:"Next",onClick:function(){var e=0;j===W.a.decode(t[m].correct_answer)&&(e=1);var a=T;if(a.push({question:W.a.decode(t[m].question),user_answer:j,correct_answer:W.a.decode(t[m].correct_answer),point:e}),m===t.length-1)return r({totalQuestions:t.length,correctAnswers:g+e,timeTaken:M,questionsAndAnswers:a});w(g+e),h(m+1),x(null),Q(a)},floated:"right",size:"big",icon:"right chevron",labelPosition:"right",disabled:!j})))))),l.a.createElement("br",null)))},$=a(177),X=function(){return l.a.createElement(n.Fragment,null,navigator.share?l.a.createElement(s.a,{title:"Share",floated:"right",size:"big",circular:!0,icon:"share alternate",onClick:function(){navigator.share({title:document.title,text:"Check out this quiz app \u2014 it rocks!",url:""}).then(function(){return console.log("Successfully shared")}).catch(function(e){return console.log(e.message)})}}):l.a.createElement($.a,{closeIcon:!0,size:"tiny",trigger:l.a.createElement(s.a,{title:"Share",floated:"right",size:"big",circular:!0,icon:"share alternate"})},l.a.createElement($.a.Header,{className:"ui center aligned"},"Share on"),l.a.createElement($.a.Content,{className:"ui center aligned container"},l.a.createElement("a",{href:"https://www.linkedin.com/in/himanshu-hota-187995200/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(s.a,{color:"facebook",size:"big",style:{marginBottom:8}},l.a.createElement(E.a,{name:"facebook"}),"Facebook")),l.a.createElement("a",{href:"https://www.linkedin.com/in/himanshu-hota-187995200/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(s.a,{color:"twitter",size:"big",style:{marginBottom:8}},l.a.createElement(E.a,{name:"twitter"}),"Twitter")),l.a.createElement("a",{href:"https://www.linkedin.com/in/himanshu-hota-187995200/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(s.a,{color:"linkedin",size:"big"},l.a.createElement(E.a,{name:"linkedin"}),"LinkedIn")))))},Z=function(e){var t=e.totalQuestions,a=e.correctAnswers,n=e.timeTaken,r=e.replayQuiz,o=e.resetQuiz,c=P(t,a),i=B(c),u=i.grade,m=i.remarks,d=_(n),f=d.hours,E=d.minutes,h=d.seconds;return l.a.createElement(p.a,null,l.a.createElement(L.a,{as:"h1",textAlign:"center",block:!0},m),l.a.createElement(L.a,{as:"h2",textAlign:"center",block:!0},"Grade: ",u),l.a.createElement(L.a,{as:"h3",textAlign:"center",block:!0},"Total Questions: ",t),l.a.createElement(L.a,{as:"h3",textAlign:"center",block:!0},"Correct Answers: ",a),l.a.createElement(L.a,{as:"h3",textAlign:"center",block:!0},"Your Score: ",c,"%"),l.a.createElement(L.a,{as:"h3",textAlign:"center",block:!0},"Passing Score: 60%"),l.a.createElement(L.a,{as:"h3",textAlign:"center",block:!0},"Time Taken:"," ","".concat(Number(f),"h ").concat(Number(E),"m ").concat(Number(h),"s")),l.a.createElement("div",{style:{marginTop:35}},l.a.createElement(s.a,{primary:!0,content:"Play Again",onClick:r,size:"big",icon:"redo",labelPosition:"left",style:{marginRight:15,marginBottom:8}}),l.a.createElement(s.a,{color:"teal",content:"Back to Home",onClick:o,size:"big",icon:"home",labelPosition:"left",style:{marginBottom:8}}),l.a.createElement(X,null)))},ee=a(178),te=function(e){var t=e.questionsAndAnswers;return l.a.createElement(ee.a,{celled:!0,striped:!0,selectable:!0,size:"large"},l.a.createElement(ee.a.Header,null,l.a.createElement(ee.a.Row,null,l.a.createElement(ee.a.HeaderCell,null,"No."),l.a.createElement(ee.a.HeaderCell,null,"Questions"),l.a.createElement(ee.a.HeaderCell,null,"Your Answers"),l.a.createElement(ee.a.HeaderCell,null,"Correct Answers"),l.a.createElement(ee.a.HeaderCell,null,"Points"))),l.a.createElement(ee.a.Body,null,t.map(function(e,t){return l.a.createElement(ee.a.Row,{key:t+1},l.a.createElement(ee.a.Cell,null,t+1),l.a.createElement(ee.a.Cell,null,e.question),l.a.createElement(ee.a.Cell,null,e.user_answer),l.a.createElement(ee.a.Cell,null,e.correct_answer),l.a.createElement(ee.a.Cell,null,e.point))})))},ae=function(e){var t=e.totalQuestions,a=e.correctAnswers,r=e.timeTaken,o=e.questionsAndAnswers,s=e.replayQuiz,u=e.resetQuiz,m=Object(n.useState)("Stats"),f=Object(c.a)(m,2),E=f[0],h=f[1],v=function(e,t){var a=t.name;h(a)};return l.a.createElement(d.a,null,l.a.createElement(i.a,{fluid:!0,widths:2},l.a.createElement(i.a.Item,{name:"Stats",active:"Stats"===E,onClick:v}),l.a.createElement(i.a.Item,{name:"QNA",active:"QNA"===E,onClick:v})),"Stats"===E&&l.a.createElement(Z,{totalQuestions:t,correctAnswers:a,timeTaken:r,replayQuiz:s,resetQuiz:u}),"QNA"===E&&l.a.createElement(te,{questionsAndAnswers:o}),l.a.createElement("br",null))},ne=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),i=Object(c.a)(o,2),s=i[0],u=i[1],d=Object(n.useState)(null),f=Object(c.a)(d,2),E=f[0],v=f[1],b=Object(n.useState)(!1),g=Object(c.a)(b,2),p=g[0],k=g[1],y=Object(n.useState)(!1),w=Object(c.a)(y,2),S=w[0],O=w[1],j=Object(n.useState)(null),x=Object(c.a)(j,2),C=x[0],A=x[1];return l.a.createElement(m,null,a&&l.a.createElement(h,null),!a&&!p&&!S&&l.a.createElement(U,{startQuiz:function(e,t){r(!0),v(t),setTimeout(function(){u(e),k(!0),r(!1)},1e3)}}),!a&&p&&l.a.createElement(K,{data:s,countdownTime:E,endQuiz:function(e){r(!0),setTimeout(function(){k(!1),O(!0),A(e),r(!1)},2e3)}}),!a&&S&&l.a.createElement(ae,Object.assign({},C,{replayQuiz:function(){r(!0);var e=q(s);e.forEach(function(e){e.options=q(e.options)}),u(e),setTimeout(function(){k(!0),O(!1),A(null),r(!1)},1e3)},resetQuiz:function(){r(!0),setTimeout(function(){u(null),v(null),k(!1),O(!1),A(null),r(!1)},1e3)}})))},le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function re(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),J.a.fire({toast:"true",position:"bottom",icon:"success",title:"App is ready to work offline.",showConfirmButton:!1,timer:6e3}),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ne,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");le?(function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):re(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker.")})):re(t,e)})}}()}},[[147,1,2]]]);
//# sourceMappingURL=main.6492256d.chunk.js.map