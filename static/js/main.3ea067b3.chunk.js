(this["webpackJsonpreact-pokemon"]=this["webpackJsonpreact-pokemon"]||[]).push([[0],{56:function(e,t,a){e.exports=a(86)},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),l=a(15),i=a(17),s=a(110),m=a(112),u=a(111),p=a(108),g=a(113),d=function(e){var t=e.card,a=e.image,c=e.classes,o=e.pokeIndex,d=Object(n.useState)(!1),h=Object(l.a)(d,2);h[0],h[1];return r.a.createElement(n.Fragment,null,r.a.createElement(p.a,{item:!0,key:t.name,xs:12,sm:6,md:4},r.a.createElement(s.a,{className:c.card},r.a.createElement(u.a,{className:c.cardMedia,image:a,title:t.name}),r.a.createElement(m.a,{className:c.cardContent},r.a.createElement(g.a,{gutterBottom:!0,variant:"h5",component:"h2",align:"center"},t.name),r.a.createElement("div",{className:c.heroButtons},r.a.createElement(p.a,{container:!0,spacing:1,justify:"center"},r.a.createElement(p.a,{item:!0},r.a.createElement(i.b,{to:"/poke/".concat(o),color:"primary"},"Informacion"))))))))},h=a(114);function f(e){var t=e.pokemon,a=e.classes;return r.a.createElement(n.Fragment,null,r.a.createElement(h.a,{className:a.cardGrid,maxWidth:"md"},r.a.createElement(p.a,{container:!0,spacing:4},t.map((function(e,t){var n=e.url.split("/")[e.url.split("/").length-2],c="".concat("https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other-sprites/official-artwork/").concat(n,".png?raw=true");return r.a.createElement(d,{key:t,pokeIndex:n,card:e,image:c,classes:a})})))))}var E=a(30),b=a.n(E),k=a(49),v=a(6),j=a(115),O=a(120),y=a(20),x=a.n(y),S=Object(j.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},small:{width:e.spacing(5),height:e.spacing(5)},large:{width:e.spacing(25),height:e.spacing(25)},shiny:{width:e.spacing(10),height:e.spacing(10)},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"}}}));function w(){var e=S(),t=Object(v.f)().id,a=Object(n.useState)([]),c=Object(l.a)(a,2),o=c[0],i=c[1],s=Object(n.useState)([]),m=Object(l.a)(s,2),u=m[0],p=m[1],g="".concat("https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other-sprites/official-artwork/").concat(t,".png?raw=true");r.a.useEffect((function(){d()}),[]);var d=function(){var e=Object(k.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t)).then((function(e){console.log(e.data),i(e.data),p(e.data.sprites)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement(h.a,{maxWidth:"md"},r.a.createElement("div",{className:e.paper},r.a.createElement("div",{className:e.root},r.a.createElement(O.a,{alt:"Remy Sharp",src:g,className:e.large}),r.a.createElement(O.a,{alt:"Remy Sharp",src:u.front_shiny,className:e.shiny})),o?r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,o.name)):null)))}function P(e){var t=e.gotoNextPage,a=e.gotoPrevPage;return r.a.createElement("div",null,a&&r.a.createElement("button",{onClick:a},"Anterior"),t&&r.a.createElement("button",{onClick:t},"Siguiente"))}var N=a(116),C=a(117),F=a(50),I=a.n(F),B=Object(j.a)((function(e){return{icon:{marginRight:e.spacing(2)}}}));function T(){var e=B();return r.a.createElement(N.a,{position:"relative",color:"Secondary",elevation:0},r.a.createElement(C.a,null,r.a.createElement(I.a,{className:e.icon}),r.a.createElement(g.a,{variant:"h6",color:"inherit",noWrap:!0},"Pok\xe9mon")))}var A=a(119);function R(){return r.a.createElement(g.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(A.a,{color:"inherit",href:"https://material-ui.com/"},"Sitio Web")," ",(new Date).getFullYear(),".")}function W(e){return r.a.createElement("footer",{className:e.footer},r.a.createElement(g.a,{variant:"h6",align:"center",gutterBottom:!0},"Follow"),r.a.createElement(g.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Api Pokemon"),r.a.createElement(R,null))}var D=a(118),G=Object(j.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"86.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}}));var M=function(){var e=G(),t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)("https://pokeapi.co/api/v2/pokemon"),s=Object(l.a)(i,2),m=s[0],u=s[1],p=Object(n.useState)(),g=Object(l.a)(p,2),d=g[0],h=g[1],E=Object(n.useState)(),b=Object(l.a)(E,2),k=b[0],j=b[1],O=Object(n.useState)(!0),y=Object(l.a)(O,2),S=(y[0],y[1]);return Object(n.useEffect)((function(){var e;return S(!0),x.a.get(m,{cancelToken:new x.a.CancelToken((function(t){return e=t}))}).then((function(e){S(!1),console.log(e.data.results),h(e.data.next),j(e.data.previous),o(e.data.results)})).catch((function(e){console.log(e)})),function(){return e()}}),[m]),r.a.createElement(n.Fragment,null,r.a.createElement(D.a,null),r.a.createElement(T,null),r.a.createElement("main",null,r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/poke/:id"},r.a.createElement(w,null)),r.a.createElement(v.a,{path:"/reactPokemon",exact:!0},r.a.createElement(f,{pokemon:c,classes:e}),r.a.createElement(P,{gotoNextPage:d?function(){u(d)}:null,gotoPrevPage:k?function(){u(k)}:null})))),r.a.createElement(W,{footer:e.footer}))},J=a(10),Y=Object(J.a)();o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{history:Y,basename:"/reactPokemon/#"},r.a.createElement(M,null))),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.3ea067b3.chunk.js.map