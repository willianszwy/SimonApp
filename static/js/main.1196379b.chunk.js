(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,a){},225:function(e,t,a){e.exports=a(392)},230:function(e,t,a){},392:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(47),l=a.n(r),c=(a(230),a(193)),i=a(49),s=a(23),u=(a(137),a(398)),m=a(399),d=a(198),E=a(215),h=a(393),p=a(52),f=function(){return o.a.createElement(u.a,null,o.a.createElement(m.a,{container:!0,centered:!0,verticalAlign:"middle",padded:!0},o.a.createElement(d.a,null,o.a.createElement(E.a,{className:"painel-shadow",src:"/static/simon.png",circular:!0})),o.a.createElement(d.a,null,o.a.createElement(h.a,{inverted:!0,size:"massive",as:s.b,to:"/qrcode",fluid:!0},o.a.createElement(p.a,{name:"qrcode"}),"Ler QRCode")),o.a.createElement(d.a,null,o.a.createElement(h.a,{inverted:!0,size:"massive",as:s.b,to:"/codigo",fluid:!0},"Digitar Codigo"))))},v=a(34),g=a(35),b=a(38),w=a(36),C=a(37),k=a(203),O=a.n(k),y=function(e){localStorage.setItem("simon-Token",e)},S=function(){localStorage.removeItem("simon-Token")},A=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(o)))).state={redirect:!1},a.handleScan=function(e){e&&(y(e),a.setState({redirect:!0}))},a.handleError=function(e){console.log(e)},a}return Object(C.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return this.state.redirect?o.a.createElement(i.a,{to:"/status"}):o.a.createElement(u.a,null,o.a.createElement(m.a,{padded:"vertically",centered:!0,doubling:!0,columns:2},o.a.createElement(m.a.Row,null,o.a.createElement(m.a.Column,null,o.a.createElement(h.a,{as:s.b,to:"/",inverted:!0,floated:"left",content:"Voltar",icon:"left arrow",labelPosition:"left"}))),o.a.createElement(m.a.Row,null,o.a.createElement(m.a.Column,null,o.a.createElement(O.a,{delay:300,onError:this.handleError,onScan:this.handleScan,style:{width:"100%"}})))))}}]),t}(n.Component),j=a(195),P=a(400),R=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(o)))).state={redirect:!1,data:""},a.login=function(){var e=a.state.data;e&&(y(e),a.setState({redirect:!0}))},a}return Object(C.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this;return this.state.redirect?o.a.createElement(i.a,{to:"/status"}):o.a.createElement(u.a,null,o.a.createElement(m.a,{container:!0,centered:!0,padded:!0},o.a.createElement(m.a.Row,null,o.a.createElement(m.a.Column,null,o.a.createElement(h.a,{as:s.b,to:"/",inverted:!0,floated:"left",content:"Voltar",icon:"left arrow",labelPosition:"left"}))),o.a.createElement(d.a,null,o.a.createElement(j.a,null,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(P.a,{fluid:!0,size:"massive",icon:"qrcode",focus:!0,placeholder:"Digite C\xf3digo...",onChange:function(t){return e.setState({data:t.target.value})}}))),o.a.createElement(d.a,null,o.a.createElement(j.a,null,o.a.createElement(h.a,{onClick:this.login,fluid:!0,inverted:!0,size:"massive"},"Cadastrar")))))}}]),t}(o.a.Component),z=a(59),D=a(402),x=a(406),W=a(404),V=a(401),I=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(b.a)(this,Object(w.a)(t).call(this,e))).closeConfigShow=function(e,t){return function(){a.setState({openPassar:t,openDesistir:e})}},a.close=function(){return a.setState({openDesistir:!1,openPassar:!1})},a.passar=function(){a.props.onPassarVez(),a.close()},a.logout=function(){S(),a.setState({redirect:!0})},a.passar=a.passar.bind(Object(z.a)(a)),a.state={openDesistir:!1,openPassar:!1,redirect:!1},a}return Object(C.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.state,t=e.openDesistir,a=e.openPassar;return e.redirect?o.a.createElement(i.a,{to:"/"}):o.a.createElement("div",null,o.a.createElement(h.a.Group,{size:"massive",widths:"2"},o.a.createElement(h.a,{onClick:this.closeConfigShow(!0,!1),color:"red"},"Desistir"),o.a.createElement(h.a,{onClick:this.closeConfigShow(!1,!0),inverted:!0},"Passar")),o.a.createElement(V.a,{open:t,closeOnEscape:!0,closeOnDimmerClick:!0,onClose:this.close},o.a.createElement(V.a.Header,null,"Aten\xe7\xe3o"),o.a.createElement(V.a.Content,null,o.a.createElement("p",null,"Ao Desistir, voc\xea perder\xe1 automaticamente a sua posi\xe7\xe3o na fila")),o.a.createElement(V.a.Actions,null,o.a.createElement(h.a,{onClick:this.close,negative:!0},"Cancelar"),o.a.createElement(h.a,{onClick:this.logout,positive:!0,labelPosition:"right",icon:"checkmark",content:"Ok"}))),o.a.createElement(V.a,{open:a,closeOnEscape:!0,closeOnDimmerClick:!0,onClose:this.close},o.a.createElement(V.a.Header,null,"Aten\xe7\xe3o"),o.a.createElement(V.a.Content,null,o.a.createElement("p",null,"Ao PASSAR A VEZ, voc\xea ceder\xe1 3 (tr\xeas)  posi\xe7\xf5es na fila")),o.a.createElement(V.a.Actions,null,o.a.createElement(h.a,{onClick:this.close,negative:!0},"Cancelar"),o.a.createElement(h.a,{onClick:this.passar,positive:!0,labelPosition:"right",icon:"checkmark",content:"Ok"}))))}}]),t}(n.Component),N={width:220,height:220,fontSize:"2.4rem"},T=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(b.a)(this,Object(w.a)(t).call(this,e))).handlePosicao=a.handlePosicao.bind(Object(z.a)(a)),a.state={posicao:10,tempo_atendimento:50},a}return Object(C.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){e.setState(function(e){return{posicao:e.posicao-1,tempo_atendimento:5*(e.posicao-1)}})},3e3)}},{key:"componentWillUnmount",value:function(){this.stop()}},{key:"stop",value:function(){clearInterval(this.interval)}},{key:"handlePosicao",value:function(){this.setState(function(e){return{posicao:e.posicao+3,tempo_atendimento:5*(e.posicao+3)}})}},{key:"render",value:function(){var e=this.state,t=e.posicao,a=e.tempo_atendimento;if(0===t)return o.a.createElement(i.a,{to:"/atendimento"});var n=t>5?"green":"red",r=t>5?o.a.createElement(D.a,{positive:!0},o.a.createElement(D.a.Header,null,"Fique atento ao seu Tempo de espera"),o.a.createElement("p",null,"Sua posi\xe7\xe3o atualizara automaticamente")):o.a.createElement(D.a,{negative:!0},o.a.createElement(D.a.Header,null,"Atendimento pr\xf3ximo"),o.a.createElement("p",null,"Encaminhe-se ao local te atendimento"));return o.a.createElement(u.a,null,o.a.createElement(m.a,{centered:!0,container:!0,verticalAlign:"middle",padded:!0,style:{height:"100%"}},o.a.createElement(m.a.Row,null,o.a.createElement(m.a.Column,null,r)),o.a.createElement(m.a.Row,null,o.a.createElement(x.a,{raised:!0,compact:!0,size:"massive",circular:!0,inverted:!0,style:N},o.a.createElement(W.a,{as:"h1",size:"huge",color:n,inverted:!0},t,"\xba",o.a.createElement(W.a.Subheader,null,"Posi\xe7\xe3o")))),o.a.createElement(m.a.Row,null,o.a.createElement(m.a.Column,null,o.a.createElement(x.a,{textAlign:"center",inverted:!0},"Faltam aproximadamente ",a," minutos"))),o.a.createElement(m.a.Row,null,o.a.createElement(m.a.Column,null,o.a.createElement(I,{onPassarVez:this.handlePosicao})))))}}]),t}(o.a.Component),U=a(403),q=function(){return o.a.createElement("div",{className:"atendimento"},o.a.createElement("style",null,"\n      body > div,\n      body > div > div,\n      body > div > div > div.atendimento{\n        height: 100%;\n        background: linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87));\n      }\n    "),o.a.createElement(u.a,null,o.a.createElement(m.a,{padded:"vertically",textAlign:"center",style:{height:"100%"},verticalAlign:"middle"},o.a.createElement(m.a.Column,null,o.a.createElement(x.a,{textAlign:"center",size:"huge",inverted:!0,padded:"very",className:"painel-shadow"},o.a.createElement(W.a,{inverted:!0,as:"h2",icon:!0,textAlign:"center"},o.a.createElement(p.a,{color:"green",name:"check circle "}),o.a.createElement(W.a.Content,null,"CHEGOU SUA VEZ!"),o.a.createElement(W.a.Subheader,null,"Dirija-se ao guich\xea para seu atendimento")),o.a.createElement(U.a,{color:"green",inverted:!0},o.a.createElement(U.a.Value,null,"NR1243"),o.a.createElement(U.a.Label,null,"MESA 2")))))))},H=function(e){var t=e.component,a=Object(c.a)(e,["component"]);return o.a.createElement(i.b,Object.assign({},a,{render:function(e){return null!==localStorage.getItem("simon-Token")?o.a.createElement(t,e):o.a.createElement(i.a,{to:{pathname:"/",state:{from:e.location}}})}}))},L=function(){return o.a.createElement(s.a,null,o.a.createElement(i.d,null,o.a.createElement(i.b,{path:"/",exact:!0,component:f}),o.a.createElement(i.b,{path:"/qrcode/",component:A}),o.a.createElement(i.b,{path:"/codigo/",component:R}),o.a.createElement(H,{path:"/status/",component:T}),o.a.createElement(H,{path:"/atendimento/",component:q}),o.a.createElement(i.b,{path:"*",component:function(){return o.a.createElement("h1",null,"not found")}})))},_=function(){return o.a.createElement(L,null)},B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(390);l.a.render(o.a.createElement(_,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/SimonApp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/SimonApp","/service-worker.js");B?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):F(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):F(t,e)})}}()}},[[225,1,2]]]);
//# sourceMappingURL=main.1196379b.chunk.js.map