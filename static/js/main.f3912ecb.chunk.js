(this.webpackJsonpautomata=this.webpackJsonpautomata||[]).push([[0],{87:function(e,t,a){e.exports=a(98)},92:function(e,t,a){},93:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),o=a.n(r),i=(a(92),a(93),a(55)),c=a(76),s=a(142),m=a(143),d=a(49),u=a(144),h=a(145),p=a(38),g=a(166),b=a(4),E=a(70),f=a.n(E),v=a(54),y=a.n(v),C=a(53),k=a.n(C),w=a(72),x=a.n(w),N=a(134),T=a(99),D=a(138),O=a(139),S=a(165);class M extends n.Component{constructor(...e){super(...e),this.state={open:!1,selectedModeKey:1,selectedLinkKey:null},this.handleToggleDrawer=()=>{this.setState(e=>({open:!e.open}))},this.handleModeListItemClick=(e,t)=>{1===t&&this.setState({selectedModeKey:t,selectedLinkKey:null})},this.handleLinkListItemClick=(e,t)=>{this.setState({selectedLinkKey:t,selectedModeKey:null})}}render(){const e=this.props.classes,t=this.state,a=t.open,n=t.selectedModeKey,r=t.selectedLinkKey,o=l.a.createElement("div",{className:e.list},l.a.createElement(N.a,null,[["DFA",1],["NFA",2],["NFA to DFA",3],["ENFA to NFA",4],["DFA Minimization",5]].map(([e,t])=>l.a.createElement(T.a,{key:t,button:!0,selected:n===t,onClick:e=>this.handleModeListItemClick(e,t)},1===t?l.a.createElement(D.a,{primary:e}):l.a.createElement(D.a,{primary:e,secondary:"*coming soon*"})))),l.a.createElement(O.a,null),l.a.createElement(N.a,null,[["Examples",1],["Tutorial",2],["GitHub",3],["Feedback",4]].map(([e,t])=>l.a.createElement(T.a,{key:t,button:!0,selected:r===t,onClick:e=>this.handleLinkListItemClick(e,t)},l.a.createElement(D.a,{primary:e})))));return l.a.createElement("div",null,l.a.createElement(S.a,{open:a,onClose:this.handleToggleDrawer},l.a.createElement("div",{tabIndex:0,role:"button",onClick:this.handleToggleDrawer,onKeyDown:this.handleToggleDrawer},o)))}}var j=Object(b.a)({list:{width:250}})(M);class A extends l.a.Component{constructor(...e){super(...e),this.state={mobileMoreAnchorEl:null},this.TemporaryDrawerRef=l.a.createRef(),this.handleToggleDrawer=()=>{this.TemporaryDrawerRef.handleToggleDrawer()},this.handleMenuClose=()=>{this.handleMobileMenuClose()},this.handleMobileMenuOpen=e=>{this.setState({mobileMoreAnchorEl:e.currentTarget})},this.handleMobileMenuClose=()=>{this.setState({mobileMoreAnchorEl:null})}}render(){const e=this.state.mobileMoreAnchorEl,t=this.props.classes,a=Boolean(e),n=l.a.createElement(c.a,{anchorEl:e,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:a,onClose:this.handleMenuClose},l.a.createElement(s.a,{onClick:this.handleMobileMenuClose},l.a.createElement(m.a,{color:"inherit"},l.a.createElement(k.a,null)),l.a.createElement("p",null,"Examples")),l.a.createElement(s.a,{onClick:this.handleMobileMenuClose},l.a.createElement(m.a,{color:"inherit"},l.a.createElement(y.a,null)),l.a.createElement("p",null,"Video Tutorial")),l.a.createElement(s.a,{onClick:this.handleMobileMenuClose},l.a.createElement(m.a,{color:"inherit"},l.a.createElement(d.a,null,l.a.createElement("path",{d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"}))),l.a.createElement("p",null,"Github")));return l.a.createElement("div",{className:t.root},l.a.createElement(u.a,{position:"static",style:{backgroundColor:"#212734"}},l.a.createElement(h.a,null,l.a.createElement(m.a,{className:t.menuButton,color:"inherit","aria-label":"Open drawer",onClick:this.handleToggleDrawer},l.a.createElement(f.a,null)),l.a.createElement(p.a,{className:t.title,variant:"h6",color:"inherit",noWrap:!0},"Automata Playground"),l.a.createElement(p.a,{className:t.title,variant:"caption"},l.a.createElement("a",{href:"#notice",style:{textDecoration:"none",color:"white"}},"\xa0Alpha")),l.a.createElement("div",{className:t.grow}),l.a.createElement("div",{className:t.sectionDesktop},l.a.createElement(g.a,{title:"Examples"},l.a.createElement(m.a,{color:"inherit"},l.a.createElement(k.a,null))),l.a.createElement(g.a,{title:"Video Tutorial"},l.a.createElement(m.a,{color:"inherit"},l.a.createElement(y.a,null))),l.a.createElement(g.a,{title:"Github"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/nihalmurmu/automata",style:{textDecoration:"none",color:"white"}},l.a.createElement(m.a,{color:"inherit"},l.a.createElement(d.a,null,l.a.createElement("path",{d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"})))))),l.a.createElement("div",{className:t.sectionMobile},l.a.createElement(m.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},l.a.createElement(x.a,null))))),n,l.a.createElement(j,{innerRef:e=>{this.TemporaryDrawerRef=e}}))}}var R=Object(b.a)(e=>({root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:{display:"none",[e.breakpoints.up("sm")]:{display:"block"}},sectionDesktop:{display:"none",[e.breakpoints.up("md")]:{display:"flex"}},sectionMobile:{display:"flex",[e.breakpoints.up("md")]:{display:"none"}}}))(A),W=a(20),I=a(73),L=a.n(I),B=a(74),P=a(17),F=a(164),G=a(56),K=a(161),z=a(152),J=a(158),U=a(153),_=a(146),H=a(147),q=a(148),V=a(149),Z=a(150),Q=a(151);var $=e=>{const t=e.dialogTexts,a=t.dialogTitle,r=t.dialogContentText,o=t.warningText,i=e.open,c=e.submit,s=e.close,m=Object(n.useRef)(null),d=Object(n.useState)(!1),u=Object(W.a)(d,2),h=u[0],p=u[1];return l.a.createElement(_.a,{open:i,onClose:s,"aria-labelledby":"form-dialog-title"},l.a.createElement(H.a,{id:"form-dialog-title"},a),l.a.createElement(q.a,null,l.a.createElement(V.a,null,r),h?l.a.createElement(V.a,{style:{color:"red"}},o):"",l.a.createElement(K.a,{autoFocus:!0,autoComplete:"off",margin:"dense",id:"label",inputRef:m,fullWidth:!0})),l.a.createElement(Z.a,null,l.a.createElement(Q.a,{onClick:()=>{p(!1),s()},color:"primary"},"Cancel"),l.a.createElement(Q.a,{onClick:()=>{const e=m.current.value.trim();""!==e?(p(!1),c(e)):p(!0)},color:"primary"},"Enter")))};const X={TD1:{NODES:new P.a([{id:"1",label:"start",final:!0,x:-184,y:-41},{id:"2",label:"Node 1",final:!1,x:11,y:-40},{id:"3",label:"Node 2",final:!0,x:215,y:-37}]),EDGES:new P.a([{id:"1",from:"1",to:"2",label:"1",smooth:{type:"curvedCW",roundness:.2}},{id:"2",from:"1",to:"1",label:"0"},{id:"3",from:"2",to:"1",label:"1",smooth:{type:"curvedCW",roundness:.2}},{id:"4",from:"2",to:"3",label:"0",smooth:{type:"curvedCW",roundness:.2}},{id:"5",from:"3",to:"2",label:"0",smooth:{type:"curvedCW",roundness:.2}},{id:"6",from:"3",to:"3",label:"1"}])},TD2:{NODES:new P.a([{id:"1",label:"start",final:!1,x:-184,y:-41},{id:"2",label:"Node 1",final:!0,x:11,y:-40}]),EDGES:new P.a([{id:"1",from:"1",to:"2",label:"1",smooth:{type:"curvedCW",roundness:.2}},{id:"2",from:"1",to:"1",label:"0"},{id:"3",from:"2",to:"1",label:"1, 2",smooth:{type:"curvedCW",roundness:.2}}])}};var Y=(e,t,a)=>{const n=X[a];if(n){const a=n.NODES.get(),l=n.EDGES.get();a.forEach(t=>e.update(t)),l.forEach(e=>t.update(e))}},ee=a(154),te=a(155),ae=a(156),ne=a(157),le=a(75),re=a.n(le);function oe(e,t,a){return void 0===t&&void 0===a?{valid:e}:void 0===a?{valid:e,accepted:t}:{valid:e,accepted:t,acceptedNodeLabel:a}}var ie=function(e,t){if(function(e){return"nodes"in e&&"edges"in e&&e.nodes instanceof P.a&&e.edges instanceof P.a}(t)){const a=t.nodes.get(),n=t.edges.get();!function(e,t){const a=t.length;for(let n=0;n<a;){const e=t[n],a=e.label.split(","),l=e.to;if(a.length>1||a[0].length>1){for(let n=0;n<a.length;n+=1){const r=a[n].trim();let o=e.from;for(let e=0;e<r.length;e+=1){const a={id:Object(F.a)(),from:"",to:"",label:""};a.from=o,e+1===r.length?a.to=l:(a.to=Object(F.a)(),o=a.to),a.label=r.charAt(e),t.push(a)}}t.splice(n,1)}else n+=1}}(0,n);const l=a.length,r=n.length,o=function(e,t){return function(e){const t=e.length;for(let a=0;a<t;a+=1){const n=e[a];for(let l=a+1;l<t;l+=1){const t=e[l];if(n.from===t.from&&n.label===t.label)return!1}}return!0}(t)}(0,n);if(!o)return oe(o);const i=e.length;let c="1";for(let t=0;t<i;t+=1){const a=e[t];let l=!1;for(let e=0;e<r;e+=1){const t=n[e];if(t.from===c&&t.label===a){c=t.to,l=!0;break}}if(!l)return oe(o,!1)}for(let e=0;e<l;e+=1){const t=a[e];if(t.id===c&&t.final)return oe(o,!0,t.label)}return oe(o,!1)}throw new TypeError("function only accepts Dataset")};const ce=Object(z.a)(e=>({paper:{padding:e.spacing.unit,height:"85vh"},divUtil:{height:"100%"},icon:{margin:e.spacing.unit,verticalAlign:"middle",fontSize:"large"},buttons:{marginTop:e.spacing.unit}}));var se=e=>{const t=e.clearNetwork,a=e.updateNetwork,r=e.getNetworkDataSet,o=e.getImageBlob,i=e.snackbar,c=Object(n.useState)(!1),s=Object(W.a)(c,2),m=s[0],d=s[1],u=Object(n.useRef)(),h=(e,t)=>{try{i(e,t)}catch(a){0}},g=ce();return l.a.createElement(l.a.Fragment,null,l.a.createElement(G.a,{className:g.paper,elevation:6},l.a.createElement("div",{className:g.divUtil},l.a.createElement(p.a,{variant:"overline",color:"secondary"},l.a.createElement(U.a,{className:g.icon}),"This Toolbar is in work in progress.",l.a.createElement("br",null),"Until finalised you may notice some tools move, redesigned or even disappear for a while"),l.a.createElement(O.a,null),l.a.createElement("br",null),l.a.createElement(p.a,{variant:"overline"},l.a.createElement(ee.a,{className:g.icon}),"Test"),l.a.createElement(O.a,null),l.a.createElement(K.a,{placeholder:"string",fullWidth:!0,margin:"dense",variant:"outlined",InputLabelProps:{shrink:!0},inputRef:u}),l.a.createElement(Q.a,{variant:"outlined",fullWidth:!0,onClick:()=>{const e=u.current.value.trim(),t=r();if(""!==e){if(e.includes(","))return void h("warning","Test Input cannot contain comma");try{const a=ie(e,t),n=a.valid,l=a.accepted,r=a.acceptedNodeLabel;n?l?h("success","Accepted! on state ".concat(r)):h("error","Rejected!"):h("error","Oops! This doesn't look like a DFA")}catch(a){0}}},style:{marginTop:"4px"}},"Test"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,{variant:"overline"},l.a.createElement(te.a,{className:g.icon}),"Convert"),l.a.createElement(O.a,null),l.a.createElement(Q.a,{variant:"outlined",fullWidth:!0,className:g.buttons},"Convert"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,{variant:"overline"},l.a.createElement(ae.a,{className:g.icon}),"Share"),l.a.createElement(O.a,null),l.a.createElement(Q.a,{variant:"outlined",fullWidth:!0,onClick:()=>{d(!0)},className:g.buttons},"Export"),l.a.createElement("label",{htmlFor:"icon-button-photo"},l.a.createElement("input",{accept:".json",id:"icon-button-photo",onChange:({target:e})=>{const n=new FileReader,l=e.files;n.readAsText(l[0]),n.onload=e=>{t();const n=JSON.parse(e.target.result);a(n)},e.value=null},type:"file",hidden:!0}),l.a.createElement(Q.a,{variant:"outlined",component:"span",fullWidth:!0,className:g.buttons},"Import")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,{variant:"overline"},l.a.createElement(ne.a,{className:g.icon}),"Clear Workspace"),l.a.createElement(O.a,null),l.a.createElement(Q.a,{variant:"outlined",fullWidth:!0,onClick:()=>{t()},className:g.buttons},"Clear"))),l.a.createElement(_.a,{open:m,onClose:()=>{d(!1)},"aria-labelledby":"export-as-dialog"},l.a.createElement(H.a,{id:"export-as-dialog"},"Export"),l.a.createElement(q.a,null,l.a.createElement(V.a,null,"Please choose an export format"),l.a.createElement("div",{style:{paddingTop:4,paddingBottom:4}},l.a.createElement(Q.a,{variant:"outlined",fullWidth:!0,style:{marginTop:4,marginBottom:4},onClick:()=>{(()=>{const e=r(),t={nodes:e.nodes.get(),edges:e.edges.get()},a=JSON.stringify(t);re()(a,"export.json"),d(!1)})()}},"as JSON"),l.a.createElement(Q.a,{variant:"outlined",fullWidth:!0,style:{marginTop:4,marginBottom:4},onClick:()=>{(()=>{d(!1);const e=o(),t=document.createElement("a");t.href=e,t.download="export.png",t.click(),t.remove()})()}},"as PNG")))))};const me=Object(z.a)(e=>({root:{margin:2*e.spacing.unit},paper:{padding:e.spacing.unit,height:"85vh"},canvas:{height:"calc(100% - 40px - 8px - 4px)"},icon:{margin:e.spacing.unit,verticalAlign:"middle",fontSize:"large"}})),de=new P.a([{id:"1",label:"start",final:!1,x:-184,y:-41}]),ue=new P.a([]),he={nodes:de,edges:ue};var pe=e=>{const t=e.snackbar,a=Object(n.useRef)(null),r=Object(n.useState)(!1),o=Object(W.a)(r,2),i=o[0],c=o[1],s=Object(n.useState)(!1),m=Object(W.a)(s,2),d=m[0],u=m[1],h={dialogTitle:"Node",dialogContentText:"Please enter a label for your new node",warningText:"Label can't be empty"},g={dialogTitle:"Edge",dialogContentText:"Please enter a label for your new edge",warningText:"Label can't be empty"};let b=null,E=null;const f=Object(n.useRef)({id:"",label:"",x:"",y:""}),v=Object(n.useRef)({id:"",from:"",to:"",label:""}),y=Object(n.useState)(!0),C=Object(W.a)(y,2),k=C[0],w=C[1],x=Object(n.useRef)(),N=(e,a)=>{try{t(e,a)}catch(n){0}},T=e=>{const t=e.pointer.canvas,a=t.x,n=t.y,l=e.nodes[0];if(l){const e=de.get(l);de.update({id:l,final:!e.final})}else{var r,o,i;c(!0),r="",o=a,i=n,f.current.id=Object(F.a)(),f.current.label=r||"nodeObject",f.current.x=o,f.current.y=i,de.add({id:f.current.id,label:r,x:o,y:i})}},D=e=>{const t=e.nodes[0];f.current=de.get(t),w(!1),x.current.value=f.current.label},O=()=>{x.current.value="",w(!0)},S={nodes:{shape:"circle",heightConstraint:{minimum:50},widthConstraint:{minimum:50,maximum:50}},edges:{arrows:{to:{enabled:!0,scaleFactor:1,type:"arrow"}},smooth:{type:"curvedCW",roundness:0}},physics:{enabled:!1},manipulation:{enabled:!1,addEdge:(e,t)=>{e.smooth={type:"curvedCW",roundness:.2},v.current=e;const a=(e=>{const t=ue.get(),a=t.length;for(let n=0;n<a;n+=1)if(t[n].from===e.from&&t[n].to===e.to)return t[n];return null})(e);null==a?t(e):v.current=a,u(!0)}},interaction:{selectConnectedEdges:!1}};Object(n.useLayoutEffect)(()=>{Y(de,ue,"TD2"),b=new B.a(a.current,he,S),E=L()({container:a.current,preventDefault:!0}),b.on("doubleClick",e=>{T(e)}),b.on("selectNode",e=>{D(e)}),b.on("selectEdge",e=>{(e=>{const t=e.edges[0];v.current=ue.get(t),w(!1),x.current.value=v.current.label})(e)}),b.on("deselectNode",()=>{O(),f.current={id:"",label:"",x:"",y:""}}),b.on("deselectEdge",()=>{O(),v.current={id:"",from:"",to:"",label:""}}),b.on("dragStart",e=>{(e=>{e.nodes.length&&D(e)})(e)}),b.on("beforeDrawing",e=>{const t=b.getPositions([1]),a=t[1].x-30,n=t[1].y,l=t[1].x-80,r=t[1].y;e.beginPath(),e.moveTo(a,n),e.lineTo(l,r),e.strokeStyle="#2B7CE9",e.stroke();const o=Math.atan((r-n)/(l-a))+(l>=a?-90:90)*Math.PI/180;e.save(),e.beginPath(),e.translate(a,n),e.rotate(o),e.moveTo(0,0),e.lineTo(5,18),e.lineTo(0,16),e.lineTo(-5,18),e.closePath(),e.restore(),e.fillStyle="#2B7CE9",e.fill();const i=de.getIds({filter:e=>e.final});e.save();const c=b.getPositions(i);e.strokeStyle="#2B7CE9",i.forEach(t=>{e.beginPath(),e.arc(c[t].x,c[t].y,36,0,2*Math.PI),e.stroke()}),e.save()}),E.bind("delete",()=>{(()=>{const e=b.getSelection(),t=e.nodes,a=e.edges;if(t.length){if("1"===t[0])return void N("error","cannot delete start node");const e=b.getConnectedEdges(t[0]);return ue.remove(e),b.deleteSelected(),O(),void(f.current={id:"",label:"",x:"",y:""})}a.length&&(b.deleteSelected(),O(),v.current={id:"",from:"",to:"",label:""})})()}),E.bind("shift",()=>{b.addEdgeMode()},"keydown"),E.bind("shift",()=>{b.disableEditMode()},"keyup")},[]);const M=()=>{de.remove(de.getIds().slice(1)),ue.clear()},j=me();return l.a.createElement("div",{className:j.root},l.a.createElement(p.a,{variant:"overline",color:"secondary"},l.a.createElement(U.a,{className:j.icon}),"This application is in WIP. Currently we don't support Mobile and Touch devices."),l.a.createElement(J.a,{container:!0,spacing:2},l.a.createElement(J.a,{item:!0,xs:9},l.a.createElement(G.a,{elevation:6,className:j.paper},l.a.createElement(K.a,{placeholder:"Nodes/Edges label",fullWidth:!0,margin:"dense",variant:"outlined",InputLabelProps:{shrink:!0},inputRef:x,disabled:k,onBlur:()=>{const e=x.current.value;if(""!==e.trim()){if(""!==f.current.id&&(de.update({id:f.current.id,label:e}),f.current={id:"",label:"",x:"",y:""}),""!==v.current.id){const t=e.split(",").map(e=>e.trim());for(let e=0;e<t.length;)""===t[e]?t.splice(e,1):e+=1;const a=t.join(", ");ue.update({id:v.current.id,label:a}),v.current={id:"",from:"",to:"",label:""}}O()}else N("warning","label can't be empty")}}),l.a.createElement("div",{tabIndex:0,ref:a,className:j.canvas}))),l.a.createElement(J.a,{item:!0,xs:!0},l.a.createElement(se,{clearNetwork:M,updateNetwork:e=>{M(),de.add(e.nodes.splice(1)),ue.add(e.edges)},getNetworkDataSet:()=>({nodes:de,edges:ue}),getImageBlob:()=>{let e=null;return b.on("afterDrawing",t=>{e=t.canvas.toDataURL()}),b.redraw(),e},snackbar:t}))),l.a.createElement($,{dialogTexts:h,open:i,submit:e=>{if(c(!1),""===e)return;const t=f.current;de.update({id:t.id,label:e})},close:()=>{const e=f.current;de.remove(e.id),c(!1)}}),l.a.createElement($,{dialogTexts:g,open:d,submit:e=>{if(u(!1),""===e)return;if(e.includes(","))return void N("warning","Edge label cannot contain comma");const t=v.current,a=ue.get(t.id);let n=e;console.log(a.label),void 0!==a.label&&(n="".concat(a.label,", ").concat(e)),ue.update({id:t.id,label:n})},close:()=>{const e=v.current;void 0===e.label&&ue.remove(e.id),u(!1)}}))},ge=a(159),be=a(160);var Ee=Object(b.a)(e=>({root:{padding:2*e.spacing.unit,margin:2*e.spacing.unit}}))(e=>{const t=e.classes;return l.a.createElement("div",null,l.a.createElement(ge.a,{className:t.root,id:"notice",elevation:6},l.a.createElement(be.a,null,l.a.createElement(p.a,{variant:"title",gutterBottom:!0},"How to get started."),l.a.createElement("hr",null),l.a.createElement(p.a,{variant:"body2",gutterBottom:!0},"\u2022 Double click to create a state.",l.a.createElement("br",null),"\u2022 Double click on a state to make it a final state and vice-versa.",l.a.createElement("br",null),"\u2022 Press and hold down shift button, then click-drag from one state to other state you wish to join.",l.a.createElement("br",null),"\u2022 Select a node/edge, and edit the node label in text field above",l.a.createElement("br",null),"\u2022 Just select the node/edge you want to delete and press 'delete' key!"))),l.a.createElement(ge.a,{className:t.root,id:"notice",elevation:6},l.a.createElement(be.a,null,l.a.createElement(p.a,{variant:"title",gutterBottom:!0},"Alpha Release"),l.a.createElement("hr",null),l.a.createElement(p.a,{variant:"body2"},"This Application is currently in the stages of its active development.",l.a.createElement("br",null),"It has some quirks and many parts are not yet available.",l.a.createElement("br",null),"We are working hard to finalize the Application's structure, and roughly once every two weeks we roll out new functionality towards this goal.",l.a.createElement("br",null),"Until then you may notice that some resources move or even disappear for a while."))))});var fe=Object(b.a)(e=>({root:{backgroundColor:"#4D4D4D",color:"#ffffff"},container:{padding:8*e.spacing.unit,[e.breakpoints.down("sm")]:{padding:3*e.spacing.unit,marginLeft:e.spacing.unit}},title:{marginBottom:2*e.spacing.unit},about:{color:"#ffffff",paddingBottom:e.spacing.unit,textAlign:"center"},icons:{color:"#ffffff"}}))(e=>{const t=e.classes;return l.a.createElement(G.a,{elevation:0,square:!0,className:t.root},l.a.createElement(J.a,{container:!0,className:t.container},l.a.createElement(J.a,{item:!0,lg:3,md:3}),l.a.createElement(J.a,{item:!0,lg:9,md:9,xs:12,className:t.title},l.a.createElement(p.a,{variant:"h5",component:"h3",color:"inherit"},"Quick Links")),l.a.createElement(J.a,{item:!0,lg:3,md:3}),l.a.createElement(J.a,{item:!0,lg:3,md:3,xs:12},l.a.createElement(p.a,{variant:"subtitle1"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/nihalmurmu/Automata",style:{textDecoration:"none",color:"white"}},"Github"))),l.a.createElement(J.a,{item:!0,lg:3,md:3,xs:12},l.a.createElement(p.a,{variant:"subtitle1"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/nihalmurmu/Automata",style:{textDecoration:"none",color:"white"}},"Examples"))),l.a.createElement(J.a,{item:!0,lg:3,md:3}),l.a.createElement(J.a,{item:!0,lg:3,md:3}),l.a.createElement(J.a,{item:!0,lg:3,md:3,xs:12},l.a.createElement(p.a,{variant:"subtitle1"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/nihalmurmu/Automata",style:{textDecoration:"none",color:"white"}},"Tutorial"))),l.a.createElement(J.a,{item:!0,lg:3,md:3,xs:12},l.a.createElement(p.a,{variant:"subtitle1"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/nihalmurmu/Automata",style:{textDecoration:"none",color:"white"}},"Any suggestion?"))),l.a.createElement(J.a,{item:!0,lg:3,md:3})),l.a.createElement("div",{className:t.about},l.a.createElement(p.a,{variant:"overline",color:"inherit"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://nihalmurmue.me",style:{textDecoration:"none",color:"white"}},"\xa9 Nihal Murmu 2018-2019"))))}),ve=a(163),ye=a(162);var Ce=Object(n.forwardRef)((e,t)=>{const a=Object(n.useState)(!1),r=Object(W.a)(a,2),o=r[0],i=r[1],c=Object(n.useState)({variant:"",message:""}),s=Object(W.a)(c,2),m=s[0],d=s[1];Object(n.useImperativeHandle)(t,()=>({openSnackbar:(e,t)=>{if(-1===["error","warning","info","success"].indexOf(e))throw new Error("Invalid variant Type, allowed variant types are 'error', 'warning', 'info', 'success'");o||(d({variant:e,message:t}),i(!0))}}));return l.a.createElement(ve.a,{open:o,autoHideDuration:3e3,onClose:(e,t)=>{"clickaway"!==t&&i(!1)},anchorOrigin:{horizontal:"left",vertical:"bottom"}},l.a.createElement(ye.a,{variant:"filled",severity:m.variant},m.message))});class ke extends l.a.Component{constructor(...e){super(...e),this.muiSnackbarRef=l.a.createRef(),this.displaySnackbar=(e,t)=>{this.muiSnackbarRef.current.openSnackbar(e,t)}}componentDidMount(){i.a.initialize("UA-138685124-2"),i.a.pageview(window.location.pathname)}render(){return l.a.createElement(n.StrictMode,null,l.a.createElement("div",{className:"App"},l.a.createElement(R,null),l.a.createElement(pe,{snackbar:this.displaySnackbar}),l.a.createElement(Ee,null),l.a.createElement(fe,null),l.a.createElement(Ce,{ref:this.muiSnackbarRef})))}}var we=ke;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(we,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[87,1,2]]]);