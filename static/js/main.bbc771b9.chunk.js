(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(7),a=n.n(o),s=(n(13),n(8)),i=n(2),h=n(3),l=n(5),u=n(4),p=n(0),j=function(e){var t=e.name,n=e.types,r=e.id;return Object(p.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(p.jsx)("img",{alt:"pokemon",width:"150",height:"150",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(r,".png")}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:t.charAt(0).toUpperCase()+t.slice(1)}),Object(p.jsxs)("h2",{children:["# ",r]}),Object(p.jsx)("h3",{children:n})]})]})},d=function(e){var t=e.pokemon,n=t.map((function(e,n){return Object(p.jsx)(j,{name:t[n][1],id:t[n][0],types:t[n][2]},n)}));return Object(p.jsx)("div",{children:n})},b=function(e){e.searchfield;var t=e.searchChange;return Object(p.jsx)("div",{className:"pa2",children:Object(p.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Pokemon",onChange:t})})},f=function(e){return Object(p.jsx)("div",{className:"noScrollBar",style:{overflowY:"scroll",border:"1px solid black",height:"500px"},children:e.children})},m=(n(15),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setstate({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(p.jsx)("h1",{children:"Ooooops. That is not good"}):this.props.children}}]),n}(r.Component)),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={pokemon:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){for(var e=this,t=1;t<152;t++){fetch("https://pokeapi.co/api/v2/pokemon/"+t).then((function(e){return e.json()})).then((function(t){for(var n="",r=0;r<t.types.length;r++)n=n+t.types[r].type.name.charAt(0).toUpperCase()+t.types[r].type.name.slice(1)+" ";e.setState((function(e){return{pokemon:[].concat(Object(s.a)(e.pokemon),[[t.id,t.name,n]])}}))}))}}},{key:"render",value:function(){var e=this.state,t=e.pokemon,n=e.searchfield,r=t.sort((function(e,t){return e[0]-t[0]})).filter((function(e){return e[1].toLowerCase().includes(n.toLowerCase())}));return Object(p.jsxs)("div",{className:"tc",children:[Object(p.jsx)("h1",{className:"f1",children:"Pokedex"}),Object(p.jsx)(b,{searchChange:this.onSearchChange}),Object(p.jsx)(f,{children:Object(p.jsx)(m,{children:Object(p.jsx)(d,{pokemon:r})})})]})}}]),n}(r.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),o(e),a(e)}))};n(16);a.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.bbc771b9.chunk.js.map