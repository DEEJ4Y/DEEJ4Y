(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3568)}])},6745:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var n=t(5893),o=t(6652),i=t.n(o);function a(e){var r=e.children;return(0,n.jsx)("div",{className:"".concat(i().outer),children:(0,n.jsx)("div",{className:"".concat(i().inner),children:r})})}},7446:function(e,r,t){"use strict";t.d(r,{Z:function(){return S}});var n=t(5893),o=t(9469),i=t(6570),a=t(4399),l=t(4178),s=t(9839),c=t(1247),d=t(5829),p=t(3703),m=t(6817),h=t(7789),u=t(1017),f=t(2870),x=t(6137),g=t(5117),b=t(8393),v=t(7841),j=t(2702),y=t(931),w=t(8060),k=t(1664),z=t.n(k),E=t(1163),N=(0,m.k)((function(e){return{card:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white},section:{borderBottom:"1px solid ".concat("dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]),paddingLeft:e.spacing.md,paddingRight:e.spacing.md,paddingBottom:e.spacing.md},like:{color:e.colors.red[6]},label:{textTransform:"uppercase",fontSize:e.fontSizes.xs,fontWeight:700}}}));function C(e){var r=e.name,t=e.description,o=e.withe,m=e.imageUrl,k=e.link,C=(e.category,e.tags),_=e.major,S=e.upcoming,O=(e.completed,e.repository),P=e.language,L=N().classes,Z=(0,w.V)({timeout:2500}),T=(0,y.mA)(r),M=(0,E.useRouter)(),D=C.map((function(e,t){return 0===t?(0,n.jsx)(h.C,{color:"teal",children:e},"".concat(r,"-tag-").concat(t)):(0,n.jsx)(h.C,{color:"gray",children:e},"".concat(r,"-tag-").concat(t))})),B=!1,W=!1,I=O.platform;return I?"github"===I?(B="Github",W=i.Z):"gitlab"===I?(B="Gitlab",W=a.Z):"bitbucket"===I&&(B="Bitbucket",W=l.Z):(B="Local",W=s.Z),(0,n.jsxs)(u.Z,{id:T,withBorder:!0,radius:"md",p:"md",className:L.card,children:[m?(0,n.jsx)(u.Z.Section,{mb:"md",children:(0,n.jsx)(f.E,{src:j.assetPrefix?j.assetPrefix+m:m,alt:r,height:460})}):"",(0,n.jsxs)(u.Z.Section,{className:L.section,children:[(0,n.jsxs)(x.Z,{position:"apart",children:[k?(0,n.jsx)("a",{href:k,target:"__blank",rel:"noopener noreferrer",children:(0,n.jsxs)(g.x,{size:"lg",weight:500,children:[r," ",(0,n.jsx)(c.Z,{style:{marginBottom:"-4px"}})]})}):(0,n.jsx)(g.x,{size:"lg",weight:500,children:r}),(0,n.jsxs)("span",{children:[(0,n.jsx)(z(),{passHref:!0,href:"".concat(null===M||void 0===M?void 0:M.pathname,"#").concat(T),children:(0,n.jsx)(b.u,{position:"left",placement:"center",label:Z.copied?"Copied":"Copy",withArrow:!0,children:(0,n.jsx)("span",{children:(0,n.jsx)(d.Z,{color:"grey",style:{marginBottom:"-7px"},onClick:function(){return Z.copy("".concat(window.location.href.split("#")[0],"#").concat(T))}})})})}),S?(0,n.jsx)(b.u,{position:"left",placement:"center",label:"This is an upcoming project.",withArrow:!0,ml:"sm",children:(0,n.jsx)("span",{children:(0,n.jsx)(p.Z,{style:{marginBottom:"-7px"}})})}):"",P?(0,n.jsx)(h.C,{size:"sm",ml:"sm",color:"grape",children:P}):"",_?(0,n.jsx)(h.C,{size:"sm",ml:"xs",children:"Major Project"}):""]})]}),(null===o||void 0===o?void 0:o.length)>0?(0,n.jsxs)("div",{children:[(0,n.jsx)(g.x,{size:"sm",color:"gray",style:{display:"inline"},children:"With"}),o.map((function(e,r){var t=e.name,o=e.url;return(0,n.jsx)("a",{href:o,target:"__blank",rel:"noopener noreferrer",children:(0,n.jsx)(h.C,{color:"blue",size:"md",ml:"xs",className:"clickable",children:t})},"with-".concat(t,"-").concat(r))}))]}):"",t.map((function(e,t){return(0,n.jsx)(g.x,{size:"sm",mt:"xs",children:e},"".concat(r,"-description-").concat(t))}))]}),(0,n.jsxs)(u.Z.Section,{className:L.section,children:[(0,n.jsx)(g.x,{mt:"md",className:L.label,color:"dimmed"}),(0,n.jsx)(x.Z,{spacing:7,mt:5,children:D})]}),O.url?(0,n.jsx)("a",{href:O.url,target:"__blank",rel:"noopener noreferrer",children:(0,n.jsx)(x.Z,{mt:"xs",children:(0,n.jsxs)(v.z,{radius:"md",variant:"light",style:{flex:1},children:[(0,n.jsx)(W,{})," ",B]})})}):(0,n.jsx)(x.Z,{mt:"xs",children:(0,n.jsxs)(v.z,{radius:"md",variant:"light",style:{flex:1},children:[(0,n.jsx)(W,{})," ",B]})})]})}function _(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function S(e){var r=e.projects;return(0,n.jsx)(o.M,{cols:1,spacing:"xl",children:r.map((function(e,r){return e.withe=e.with,(0,n.jsx)(C,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){_(e,r,t[r])}))}return e}({},e),"project-card-".concat(e.name,"-").concat(r))}))})}},3568:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return B}});var n=t(5893),o=t(6745),i=t(9236),a=t(7446),l=t(931);function s(){var e=(0,l.cL)();return(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(i.D,{order:2,align:"center",mb:"lg",children:"Major Projects"}),(0,n.jsx)(a.Z,{projects:e})]})}var c=t(5117),d=t(7294),p=t(6817),m=t(2581),h=["size","color"];var u=["size","color"];var f=["size","color"];function x(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var g=(0,p.k)((function(e){return{root:x({display:"flex",backgroundImage:"linear-gradient(-60deg, ".concat(e.colors[e.primaryColor][4]," 0%, ").concat(e.colors[e.primaryColor][7]," 100%)"),padding:1.5*e.spacing.xl,borderRadius:e.radius.md},e.fn.smallerThan("sm"),{flexDirection:"column"}),title:{color:e.white,textTransform:"uppercase",fontWeight:700,fontSize:e.fontSizes.sm},count:{color:e.white,fontSize:32,lineHeight:1,fontWeight:700,marginBottom:e.spacing.md,fontFamily:"Greycliff CF, ".concat(e.fontFamily)},description:{color:e.colors[e.primaryColor][0],fontSize:e.fontSizes.sm,marginTop:5},stat:{flex:1,"& + &":x({paddingLeft:e.spacing.xl,marginLeft:e.spacing.xl,borderLeft:"1px solid ".concat(e.colors[e.primaryColor][3])},e.fn.smallerThan("sm"),{paddingLeft:0,marginLeft:0,borderLeft:0,paddingTop:e.spacing.xl,marginTop:e.spacing.xl,borderTop:"1px solid ".concat(e.colors[e.primaryColor][3])})}}})),b=(0,l.wF)(),v=[{title:"Commits",stats:"2500+",description:"Collaborated on multiple projects using Github, Gitlab and Bitbucket.",Icon:function(e){var r=e.size,t=void 0===r?24:r,n=e.color,o=void 0===n?"currentColor":n,i=(0,m.Kd)(e,h);return d.createElement("svg",(0,m.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-git-commit",width:t,height:t,viewBox:"0 0 24 24",stroke:o,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},i),d.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),d.createElement("circle",{cx:"12",cy:"12",r:"3"}),d.createElement("line",{x1:"12",y1:"3",x2:"12",y2:"9"}),d.createElement("line",{x1:"12",y1:"15",x2:"12",y2:"21"}))}},{title:"Major Projects",stats:b,description:"Developed ".concat(b," major projects, including 1 npm package; ").concat((0,l.l1)("team")," team projects and ").concat((0,l.l1)("personal")," personal projects."),Icon:function(e){var r=e.size,t=void 0===r?24:r,n=e.color,o=void 0===n?"currentColor":n,i=(0,m.Kd)(e,u);return d.createElement("svg",(0,m.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-device-desktop-analytics",width:t,height:t,viewBox:"0 0 24 24",stroke:o,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},i),d.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),d.createElement("rect",{x:"3",y:"4",width:"18",height:"12",rx:"1"}),d.createElement("path",{d:"M7 20h10"}),d.createElement("path",{d:"M9 16v4"}),d.createElement("path",{d:"M15 16v4"}),d.createElement("path",{d:"M9 12v-4"}),d.createElement("path",{d:"M12 12v-1"}),d.createElement("path",{d:"M15 12v-2"}),d.createElement("path",{d:"M12 12v-1"}))}},{title:"Years Experience",stats:"2+",description:"Developing websites and web apps for more two years.",Icon:function(e){var r=e.size,t=void 0===r?24:r,n=e.color,o=void 0===n?"currentColor":n,i=(0,m.Kd)(e,f);return d.createElement("svg",(0,m.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-user-check",width:t,height:t,viewBox:"0 0 24 24",stroke:o,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},i),d.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),d.createElement("circle",{cx:"9",cy:"7",r:"4"}),d.createElement("path",{d:"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}),d.createElement("path",{d:"M16 11l2 2l4 -4"}))}}];function j(){var e=v,r=g().classes,t=e.map((function(e){return(0,n.jsxs)("div",{className:r.stat,children:[(0,n.jsxs)(c.x,{className:r.count,children:[(0,n.jsx)(e.Icon,{size:26})," ",e.stats]}),(0,n.jsx)(c.x,{className:r.title,children:e.title}),(0,n.jsx)(c.x,{className:r.description,children:e.description})]},e.title)}));return(0,n.jsx)("div",{className:r.root,children:t})}function y(){return(0,n.jsxs)(o.Z,{children:[(0,n.jsxs)(i.D,{align:"center",children:["Hi, I'm"," ",(0,n.jsx)(c.x,{component:"span",inherit:!0,className:"animate-character",children:"David Joseph"})]}),(0,n.jsx)(c.x,{align:"center",mb:"xl",children:"I'm a full stack developer that makes websites and web apps."}),(0,n.jsx)(j,{})]})}var w=t(4761);const k={xs:1,sm:2,md:3,lg:4,xl:5};function z(e,r){const t=e.fn.variant({variant:"outline",color:r}).border;return"string"===typeof r&&(r in e.colors||r.split(".")[0]in e.colors)?t:void 0===r?"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]:r}var E=(0,p.k)(((e,{size:r,variant:t,color:n})=>({root:{},withLabel:{borderTop:"0 !important"},left:{"&::before":{display:"none"}},right:{"&::after":{display:"none"}},label:{display:"flex",alignItems:"center","&::before":{content:'""',flex:1,height:1,borderTop:`${e.fn.size({size:r,sizes:k})}px ${t} ${z(e,n)}`,marginRight:e.spacing.xs},"&::after":{content:'""',flex:1,borderTop:`${e.fn.size({size:r,sizes:k})}px ${t} ${z(e,n)}`,marginLeft:e.spacing.xs}},labelDefaultStyles:{color:"dark"===n?e.colors.dark[1]:e.fn.themeColor(n,"dark"===e.colorScheme?5:e.fn.primaryShade(),!1)},horizontal:{border:0,borderTopWidth:e.fn.size({size:r,sizes:k}),borderTopColor:z(e,n),borderTopStyle:t,margin:0},vertical:{border:0,alignSelf:"stretch",height:"auto",borderLeftWidth:e.fn.size({size:r,sizes:k}),borderLeftColor:z(e,n),borderLeftStyle:t}}))),N=t(4459),C=Object.defineProperty,_=Object.defineProperties,S=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,Z=(e,r,t)=>r in e?C(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,T=(e,r)=>{for(var t in r||(r={}))P.call(r,t)&&Z(e,t,r[t]);if(O)for(var t of O(r))L.call(r,t)&&Z(e,t,r[t]);return e};const M={orientation:"horizontal",size:"xs",labelPosition:"left",variant:"solid"},D=(0,d.forwardRef)(((e,r)=>{const t=(0,w.N4)("Divider",M,e),{className:n,color:o,orientation:i,size:a,label:l,labelPosition:s,labelProps:p,variant:m,styles:h,classNames:u,unstyled:f}=t,x=((e,r)=>{var t={};for(var n in e)P.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&O)for(var n of O(e))r.indexOf(n)<0&&L.call(e,n)&&(t[n]=e[n]);return t})(t,["className","color","orientation","size","label","labelPosition","labelProps","variant","styles","classNames","unstyled"]),{classes:g,cx:b}=E({color:o,size:a,variant:m},{classNames:u,styles:h,unstyled:f,name:"Divider"}),v="vertical"===i,j="horizontal"===i,y=!!l&&j,k=!(null==p?void 0:p.color);return d.createElement(N.x,T({ref:r,className:b(g.root,{[g.vertical]:v,[g.horizontal]:j,[g.withLabel]:y},n),role:"separator"},x),y&&d.createElement(c.x,(z=T({},p),C={size:(null==p?void 0:p.size)||"xs",sx:{marginTop:2},className:b(g.label,g[s],{[g.labelDefaultStyles]:k})},_(z,S(C))),l));var z,C}));D.displayName="@mantine/core/Divider";t(1492);function B(){return(0,n.jsxs)("div",{children:[(0,n.jsx)(y,{}),(0,n.jsx)(D,{}),(0,n.jsx)(s,{})]})}},6652:function(e){e.exports={outer:"ContentWrapper_outer__ol433",inner:"ContentWrapper_inner__WVJ9l"}}},function(e){e.O(0,[819,774,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);