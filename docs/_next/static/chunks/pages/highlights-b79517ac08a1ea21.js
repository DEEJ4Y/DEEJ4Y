(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[276],{41181:function(e,t,r){"use strict";r.d(t,{D:function(){return O}});var i=r(67294),l=r(55903),o=r(58067),n=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))m.call(t,r)&&u(e,r,t[r]);return e},f=(0,o.k)(((e,{element:t,align:r})=>{return{root:(i=p({},e.fn.fontStyles()),l={fontFamily:e.headings.fontFamily,fontWeight:e.headings.fontWeight,fontSize:e.headings.sizes[t].fontSize,lineHeight:e.headings.sizes[t].lineHeight,margin:0,color:"inherit",textAlign:r},a(i,c(l)))};var i,l})),h=r(10745),b=Object.defineProperty,g=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const j={order:1},O=(0,i.forwardRef)(((e,t)=>{const r=(0,l.Z3)("Title",j,e),{className:o,order:n,children:a,align:c}=r,s=((e,t)=>{var r={};for(var i in e)y.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&g)for(var i of g(e))t.indexOf(i)<0&&v.call(e,i)&&(r[i]=e[i]);return r})(r,["className","order","children","align"]),{classes:d,cx:m}=f({element:`h${n}`,align:c},{name:"Title"});return[1,2,3,4,5,6].includes(n)?i.createElement(h.x,((e,t)=>{for(var r in t||(t={}))y.call(t,r)&&x(e,r,t[r]);if(g)for(var r of g(t))v.call(t,r)&&x(e,r,t[r]);return e})({component:`h${n}`,ref:t,className:m(d.root,o)},s),a):null}));O.displayName="@mantine/core/Title"},75906:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/highlights",function(){return r(12414)}])},46745:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var i=r(85893),l=r(76652),o=r.n(l);function n(e){var t=e.children;return(0,i.jsx)("div",{className:"".concat(o().outer),children:(0,i.jsx)("div",{className:"".concat(o().inner),children:t})})}},12414:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var i=r(85893),l=r(41181),o=r(50112),n=r(46745),a=r(67294),c=r(55903),s=(0,r(58067).k)(((e,{bulletSize:t,color:r,radius:i,align:l,lineVariant:o,lineWidth:n},a)=>({itemBody:{},itemContent:{},itemBulletWithChild:{ref:a("itemBulletWithChild"),borderWidth:1,backgroundColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3],color:"dark"===e.colorScheme?e.colors.dark[0]:e.black},itemBullet:{ref:a("itemBullet"),boxSizing:"border-box",width:t,height:t,borderRadius:e.fn.size({size:i,sizes:e.radius}),border:`${n}px solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]}`,backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,position:"absolute",top:0,left:"left"===l?-t/2-n/2:"auto",right:"right"===l?-t/2-n/2:"auto",display:"flex",alignItems:"center",justifyContent:"center",color:e.white},item:{position:"relative",boxSizing:"border-box",color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,paddingLeft:"left"===l?e.spacing.xl:0,paddingRight:"right"===l?e.spacing.xl:0,textAlign:l,"&:not(:last-of-type)::before":{display:"block"},"&:not(:first-of-type)":{marginTop:e.spacing.xl},"&::before":{boxSizing:"border-box",position:"absolute",top:0,left:"left"===l?-n:"auto",right:"right"===l?-n:"auto",bottom:-e.spacing.xl,borderLeft:`${n}px ${o} ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]}`,content:'""',display:"none"}},itemLineActive:{"&::before":{borderLeftColor:e.fn.themeColor(r,"dark"===e.colorScheme?6:7)}},itemActive:{[`& .${a("itemBullet")}`]:{borderColor:e.fn.themeColor(r,"dark"===e.colorScheme?6:7),backgroundColor:e.white},[`& .${a("itemBulletWithChild")}`]:{backgroundColor:e.fn.themeColor(r,"dark"===e.colorScheme?6:7),color:e.white}},itemTitle:{fontWeight:500,lineHeight:1,marginBottom:e.spacing.xs/2,textAlign:l}}))),d=r(10745),m=Object.defineProperty,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function b(e){var t=e,{className:r,bullet:i,title:l,bulletSize:n=20,radius:c="xl",lineWidth:m=4,active:b,lineActive:g,classNames:y,styles:v,children:x,color:j,align:O,lineVariant:S="solid"}=t,k=((e,t)=>{var r={};for(var i in e)p.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&u)for(var i of u(e))t.indexOf(i)<0&&f.call(e,i)&&(r[i]=e[i]);return r})(t,["className","bullet","title","bulletSize","radius","lineWidth","active","lineActive","classNames","styles","children","color","align","lineVariant"]);const{classes:N,cx:w}=s({bulletSize:n,color:j,radius:c,align:O,lineVariant:S,lineWidth:m},{classNames:y,styles:v,name:"Timeline"});return a.createElement(d.x,((e,t)=>{for(var r in t||(t={}))p.call(t,r)&&h(e,r,t[r]);if(u)for(var r of u(t))f.call(t,r)&&h(e,r,t[r]);return e})({className:w(N.item,{[N.itemLineActive]:g,[N.itemActive]:b},r)},k),a.createElement("div",{className:w(N.itemBullet,{[N.itemBulletWithChild]:i})},i),a.createElement("div",{className:N.itemBody},l&&a.createElement(o.x,{className:N.itemTitle},l),a.createElement("div",{className:N.itemContent},x)))}b.displayName="@mantine/core/TimelineItem";var g=Object.defineProperty,y=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,j=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const O={active:-1,radius:"xl",bulletSize:20,align:"left",lineWidth:4,reverseActive:!1},S=(0,a.forwardRef)(((e,t)=>{const r=(0,c.Z3)("Timeline",O,e),{children:i,active:l,color:o,radius:n,bulletSize:s,align:m,lineWidth:u,classNames:p,styles:f,sx:h,reverseActive:g}=r,S=((e,t)=>{var r={};for(var i in e)v.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&y)for(var i of y(e))t.indexOf(i)<0&&x.call(e,i)&&(r[i]=e[i]);return r})(r,["children","active","color","radius","bulletSize","align","lineWidth","classNames","styles","sx","reverseActive"]),k=function(e,t){return a.Children.toArray(e).filter((e=>Array.isArray(t)?t.some((t=>t===e.type)):e.type===t))}(i,b),N=k.map(((e,t)=>a.cloneElement(e,{classNames:p,styles:f,align:m,lineWidth:u,radius:e.props.radius||n,color:e.props.color||o,bulletSize:e.props.bulletSize||s,active:e.props.active||(g?l>=k.length-t-1:l>=t),lineActive:e.props.lineActive||(g?l>=k.length-t-1:l-1>=t)}))),w="left"===m?{paddingLeft:s/2+u/2}:{paddingRight:s/2+u/2};return a.createElement(d.x,((e,t)=>{for(var r in t||(t={}))v.call(t,r)&&j(e,r,t[r]);if(y)for(var r of y(t))x.call(t,r)&&j(e,r,t[r]);return e})({ref:t,sx:[w,...Array.isArray(h)?h:[h]]},S),N)}));S.Item=b,S.displayName="@mantine/core/Timeline";var k=[{title:"Built my first website",time:"September 2020"},{title:"Started learning Javascript",time:"October 2020"},{title:"Joined a Tech club",description:"I joined IoT Alliance as an associate developer.",time:"November 2020"},{title:"Started learning backend development",time:"December 2020"},{title:"Started learning React",time:"January 2021"},{title:"First Full Stack app",time:"February 2021",description:"Built my first full stack application with API calls and authentication."},{title:"Started my first major project",time:"March 2021",description:"Event Management"},{title:"First promotion",time:"June 2021",description:"I got double promoted to senior developer at IoT Alliance."},{title:"Learnt Nextjs",time:"October 2021"},{title:"First Nextjs project",time:"November 2021"},{title:"Completed a major project",time:"December 2021",description:"socialautopost"},{title:"Started my first Freelance project",time:"January 2022"},{title:"Completed a major project",time:"February 2022",description:"Question Bank"},{title:"Joined a startup",time:"February 2022",description:"Salzaa"},{title:"Published my first npm package",time:"April 2022",description:"emfrest"}].reverse();function N(){return(0,i.jsx)(S,{active:k.length,lineWidth:1,children:k.map((function(e,t){return(0,i.jsxs)(b,{title:e.title,bulletSize:12,children:[e.description?(0,i.jsx)(o.x,{color:"dimmed",size:"sm",children:e.description}):"",(0,i.jsx)(o.x,{size:"xs",color:"gray",mt:4,children:e.time})]},"highlight-".concat(t))}))})}function w(){return(0,i.jsxs)(n.Z,{children:[(0,i.jsxs)("div",{style:{textAlign:"left",marginBottom:"1.5rem"},children:[(0,i.jsx)(l.D,{className:"animate-character",order:1,children:"Highlights"}),(0,i.jsx)(o.x,{children:"Have a look at my important milestones."})]}),(0,i.jsx)(N,{})]})}},76652:function(e){e.exports={outer:"ContentWrapper_outer__ol433",inner:"ContentWrapper_inner__WVJ9l"}}},function(e){e.O(0,[774,888,179],(function(){return t=75906,e(e.s=t);var t}));var t=e.O();_N_E=t}]);