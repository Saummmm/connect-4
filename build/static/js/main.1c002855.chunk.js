(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{12:function(e,r,t){},14:function(e,r,t){"use strict";t.r(r);var a=t(3),n=t(4),s=t(6),i=t(5),c=t(1),l=t.n(c),u=t(7),o=t.n(u),d=t.p+"static/media/white.d11b746f.png",h=t.p+"static/media/red.ebe6ebce.png",f=t.p+"static/media/yellow.7c12b92f.png",v=(t(12),t(0));function b(e){var r=d;return"Player 1"===e.value&&(r=h),"Player 2"===e.value&&(r=f),Object(v.jsx)("button",{className:"square",onClick:e.onClick,children:Object(v.jsx)("img",{src:r,height:"33",width:"33",alt:e.value})})}var j=function(e){Object(s.a)(t,e);var r=Object(i.a)(t);function t(e){var n;return Object(a.a)(this,t),(n=r.call(this,e)).state={squares:Array(6).fill(null).map((function(e){return Array(7).fill(null)})),p1IsNext:!0},n}return Object(n.a)(t,[{key:"checkAll",value:function(e){return function(e){for(var r=3;r<6;r++)for(var t=0;t<7;t++)if(e[r][t]&&e[r][t]===e[r-1][t]&&e[r][t]===e[r-2][t]&&e[r][t]===e[r-3][t])return e[r][t]}(e)||function(e){for(var r=3;r<6;r++)for(var t=0;t<4;t++)if(e[r][t]&&e[r][t]===e[r-1][t+1]&&e[r][t]===e[r-2][t+2]&&e[r][t]===e[r-3][t+3])return e[r][t]}(e)||function(e){for(var r=3;r<6;r++)for(var t=3;t<7;t++)if(e[r][t]&&e[r][t]===e[r-1][t-1]&&e[r][t]===e[r-2][t-2]&&e[r][t]===e[r-3][t-3])return e[r][t]}(e)||function(e){for(var r=0;r<6;r++)for(var t=0;t<4;t++)if(e[r][t]&&e[r][t]===e[r][t+1]&&e[r][t]===e[r][t+2]&&e[r][t]===e[r][t+3])return e[r][t]}(e)||function(e){for(var r=0;r<6;r++)for(var t=0;t<7;t++)if(null===e[r][t])return null;return"draw"}(e)}},{key:"handleClick",value:function(e){var r=this.state.squares.slice();if(!this.checkAll(r))for(var t=5;t>=0;t--)if(null==r[t][e]){r[t][e]=this.state.p1IsNext?"Player 1":"Player 2",this.setState({squares:r,p1IsNext:!this.state.p1IsNext});break}}},{key:"renderRow",value:function(e){for(var r=[],t=0;t<7;t++)r.push(this.renderSquare(e,t));return r}},{key:"renderSquare",value:function(e,r){var t=this;return Object(v.jsx)(b,{value:this.state.squares[e][r],onClick:function(){return t.handleClick(r)}})}},{key:"render",value:function(){var e,r=this.checkAll(this.state.squares);return e=r?"Winner: "+r:"Next player: "+(this.state.p1IsNext?"Player 1":"Player 2"),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"status",children:e}),Object(v.jsx)("div",{className:"board-row",children:this.renderRow(0)}),Object(v.jsx)("div",{className:"board-row",children:this.renderRow(1)}),Object(v.jsx)("div",{className:"board-row",children:this.renderRow(2)}),Object(v.jsx)("div",{className:"board-row",children:this.renderRow(3)}),Object(v.jsx)("div",{className:"board-row",children:this.renderRow(4)}),Object(v.jsx)("div",{className:"board-row",children:this.renderRow(5)})]})}}]),t}(l.a.Component),p=function(e){Object(s.a)(t,e);var r=Object(i.a)(t);function t(){return Object(a.a)(this,t),r.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"game",children:Object(v.jsx)("div",{className:"game-board",children:Object(v.jsx)(j,{})})})}}]),t}(l.a.Component);o.a.render(Object(v.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1c002855.chunk.js.map