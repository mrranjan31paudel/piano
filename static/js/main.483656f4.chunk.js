(this.webpackJsonppiano=this.webpackJsonppiano||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(8),l=t.n(o),c=t(1),s=t(2),i=t(4),u=t(3),d=t(6),p=t(5),y=function(e){Object(i.a)(t,e);var n=Object(u.a)(t);function t(e,a){var r;return Object(c.a)(this,t),(r=n.call(this)).playSound=function(){r.audio.play().then((function(e){return console.log("Played: ",e)})).catch((function(e){return console.log("Could not play due to : ",e)}))},r.stopSound=function(){r.audio.pause(),r.audio.currentTime=0},r.audio=new Audio(e),r}return Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){var n=this.props,t=n.pressedKeys,a=n.repKey;if(e.pressedKeys[a]&&!t[a])return this.stopSound();t[a]&&this.playSound()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null)}}]),t}(a.Component),h=function(e){Object(i.a)(t,e);var n=Object(u.a)(t);function t(e){return Object(c.a)(this,t),n.call(this,"http://localhost:3000/piano/sounds/horse.mp3",e)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,n=e.id,t=e.label,a=e.color,o=e.pressedKeys,l=e.repKey,c=e.handleKeyDown,s=e.handleKeyUp;return r.a.createElement("div",{className:"key-full".concat(o[l]?" pressed":""),id:n,onMouseDown:function(){return c({key:l})},onMouseUp:function(){return s({key:l})}},r.a.createElement("div",{className:"key-text color-".concat(a)},t))}}]),t}(y),b=function(e){Object(i.a)(t,e);var n=Object(u.a)(t);function t(e){return Object(c.a)(this,t),n.call(this,"http://localhost:3000/piano/sounds/horse.mp3",e)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,n=e.id,t=e.label,a=e.leftPos,o=e.pressedKeys,l=e.repKey,c=e.handleKeyDown,s=e.handleKeyUp;return r.a.createElement("div",{className:"key-half".concat(o[l]?" pressed":""," pos-").concat(a),id:n,onMouseDown:function(){return c({key:l})},onMouseUp:function(){return s({key:l})}},r.a.createElement("div",{className:"key-text color-white"},t))}}]),t}(y),f={a:!0,s:!0,d:!0,f:!0,g:!0,h:!0,j:!0,k:!0,w:!0,e:!0,t:!0,y:!0,u:!0},K=[{id:"c3",repKey:"a",label:"C3",color:"red"},{id:"d3",repKey:"s",label:"D3",color:"orange"},{id:"e3",repKey:"d",label:"E3",color:"yellow"},{id:"f3",repKey:"f",label:"F3",color:"green"},{id:"g3",repKey:"g",label:"G3",color:"cyan"},{id:"a3",repKey:"h",label:"A3",color:"blue"},{id:"b3",repKey:"j",label:"B3",color:"magenta"},{id:"c4",repKey:"k",label:"C4",color:"red"}],m=[{id:"c3s",repKey:"w",label:"C#3",leftPos:"58"},{id:"d3s",repKey:"e",label:"D#3",leftPos:"140"},{id:"f3s",repKey:"t",label:"F#3",leftPos:"304"},{id:"g3s",repKey:"y",label:"G#3",leftPos:"386"},{id:"a3s",repKey:"u",label:"A#3",leftPos:"468"}],j=function(e){Object(i.a)(t,e);var n=Object(u.a)(t);function t(){var e;return Object(c.a)(this,t),(e=n.call(this)).handleKeyDown=function(n){var t=n.key;f[t]&&e.setState((function(e){return{pressedKeys:Object(p.a)(Object(p.a)({},e.pressedKeys),{},Object(d.a)({},t,!0))}}))},e.handleKeyUp=function(n){var t=n.key;if(f[t]){var a=Object(p.a)({},e.state.pressedKeys);delete a[t],e.setState({pressedKeys:Object(p.a)({},a)})}},e.state={pressedKeys:{}},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){document.getElementById("keyboard-wrapper").focus()}},{key:"render",value:function(){var e=this,n=this.state.pressedKeys;return r.a.createElement("div",{id:"keyboard-wrapper",onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,tabIndex:"0"},r.a.createElement("div",{className:"all-keys-container"},K.map((function(t){return r.a.createElement(h,Object.assign({key:t.id},t,{pressedKeys:n,handleKeyDown:e.handleKeyDown,handleKeyUp:e.handleKeyUp}))})),m.map((function(t){return r.a.createElement(b,Object.assign({key:t.id},t,{pressedKeys:n,handleKeyDown:e.handleKeyDown,handleKeyUp:e.handleKeyUp}))}))))}}]),t}(a.Component),v=(t(13),t(14),t(15),function(e){Object(i.a)(t,e);var n=Object(u.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-container"},r.a.createElement(j,null))}}]),t}(a.Component));l.a.render(r.a.createElement(v,null),document.getElementById("app-root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.483656f4.chunk.js.map