import{v as F,H as wr,y as Ye,C as le,D as Oe,i as _,R as P,B as K,z as be,a1 as Ze,a4 as Sr,ab as hr,K as Er,ac as jr}from"./index-8389bfe9.js";var Ir=Object.defineProperty,Nr=Object.defineProperties,Dr=Object.getOwnPropertyDescriptors,ee=Object.getOwnPropertySymbols,er=Object.prototype.hasOwnProperty,rr=Object.prototype.propertyIsEnumerable,Se=(e,r,t)=>r in e?Ir(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,U=(e,r)=>{for(var t in r||(r={}))er.call(r,t)&&Se(e,t,r[t]);if(ee)for(var t of ee(r))rr.call(r,t)&&Se(e,t,r[t]);return e},zr=(e,r)=>Nr(e,Dr(r)),Rr=(e,r)=>{var t={};for(var n in e)er.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&ee)for(var n of ee(e))r.indexOf(n)<0&&rr.call(e,n)&&(t[n]=e[n]);return t};function Cr(e,r,t){const n=F(e,r,t),{label:o,description:a,error:l,required:c,classNames:i,styles:p,className:v,unstyled:y,__staticSelector:m,sx:f,errorProps:O,labelProps:h,descriptionProps:b,wrapperProps:E,id:g,size:I,style:W,inputContainer:N,inputWrapperOrder:D,withAsterisk:A,variant:S}=n,z=Rr(n,["label","description","error","required","classNames","styles","className","unstyled","__staticSelector","sx","errorProps","labelProps","descriptionProps","wrapperProps","id","size","style","inputContainer","inputWrapperOrder","withAsterisk","variant"]),$=wr(g),{systemStyles:x,rest:j}=Ye(z),V=U({label:o,description:a,error:l,required:c,classNames:i,className:v,__staticSelector:m,sx:f,errorProps:O,labelProps:h,descriptionProps:b,unstyled:y,styles:p,id:$,size:I,style:W,inputContainer:N,inputWrapperOrder:D,withAsterisk:A,variant:S},E);return zr(U({},j),{classNames:i,styles:p,unstyled:y,wrapperProps:U(U({},V),x),inputProps:{required:c,classNames:i,styles:p,unstyled:y,id:$,size:I,__staticSelector:m,error:l,variant:S}})}var Wr=le((e,r,{size:t})=>({label:{display:"inline-block",fontSize:Oe({size:t,sizes:e.fontSizes}),fontWeight:500,color:e.colorScheme==="dark"?e.colors.dark[0]:e.colors.gray[9],wordBreak:"break-word",cursor:"default",WebkitTapHighlightColor:"transparent"},required:{color:e.fn.variant({variant:"filled",color:"red"}).background}}));const Ar=Wr;var xr=Object.defineProperty,re=Object.getOwnPropertySymbols,tr=Object.prototype.hasOwnProperty,nr=Object.prototype.propertyIsEnumerable,he=(e,r,t)=>r in e?xr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Vr=(e,r)=>{for(var t in r||(r={}))tr.call(r,t)&&he(e,t,r[t]);if(re)for(var t of re(r))nr.call(r,t)&&he(e,t,r[t]);return e},Tr=(e,r)=>{var t={};for(var n in e)tr.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&re)for(var n of re(e))r.indexOf(n)<0&&nr.call(e,n)&&(t[n]=e[n]);return t};const kr={labelElement:"label",size:"sm"},$e=_.forwardRef((e,r)=>{const t=F("InputLabel",kr,e),{labelElement:n,children:o,required:a,size:l,classNames:c,styles:i,unstyled:p,className:v,htmlFor:y,__staticSelector:m,variant:f,onMouseDown:O}=t,h=Tr(t,["labelElement","children","required","size","classNames","styles","unstyled","className","htmlFor","__staticSelector","variant","onMouseDown"]),{classes:b,cx:E}=Ar(null,{name:["InputWrapper",m],classNames:c,styles:i,unstyled:p,variant:f,size:l});return P.createElement(K,Vr({component:n,ref:r,className:E(b.label,v),htmlFor:n==="label"?y:void 0,onMouseDown:g=>{O==null||O(g),!g.defaultPrevented&&g.detail>1&&g.preventDefault()}},h),o,a&&P.createElement("span",{className:b.required,"aria-hidden":!0}," *"))});$e.displayName="@mantine/core/InputLabel";var Fr=le((e,r,{size:t})=>({error:{wordBreak:"break-word",color:e.fn.variant({variant:"filled",color:"red"}).background,fontSize:`calc(${Oe({size:t,sizes:e.fontSizes})} - ${be(2)})`,lineHeight:1.2,display:"block"}}));const qr=Fr;var Br=Object.defineProperty,te=Object.getOwnPropertySymbols,or=Object.prototype.hasOwnProperty,sr=Object.prototype.propertyIsEnumerable,Ee=(e,r,t)=>r in e?Br(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Lr=(e,r)=>{for(var t in r||(r={}))or.call(r,t)&&Ee(e,t,r[t]);if(te)for(var t of te(r))sr.call(r,t)&&Ee(e,t,r[t]);return e},Mr=(e,r)=>{var t={};for(var n in e)or.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&te)for(var n of te(e))r.indexOf(n)<0&&sr.call(e,n)&&(t[n]=e[n]);return t};const Hr={size:"sm"},ge=_.forwardRef((e,r)=>{const t=F("InputError",Hr,e),{children:n,className:o,classNames:a,styles:l,unstyled:c,size:i,__staticSelector:p,variant:v}=t,y=Mr(t,["children","className","classNames","styles","unstyled","size","__staticSelector","variant"]),{classes:m,cx:f}=qr(null,{name:["InputWrapper",p],classNames:a,styles:l,unstyled:c,variant:v,size:i});return P.createElement(Ze,Lr({className:f(m.error,o),ref:r},y),n)});ge.displayName="@mantine/core/InputError";var Kr=le((e,r,{size:t})=>({description:{wordBreak:"break-word",color:e.colorScheme==="dark"?e.colors.dark[2]:e.colors.gray[6],fontSize:`calc(${Oe({size:t,sizes:e.fontSizes})} - ${be(2)})`,lineHeight:1.2,display:"block"}}));const Xr=Kr;var Gr=Object.defineProperty,ne=Object.getOwnPropertySymbols,ar=Object.prototype.hasOwnProperty,ir=Object.prototype.propertyIsEnumerable,je=(e,r,t)=>r in e?Gr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Jr=(e,r)=>{for(var t in r||(r={}))ar.call(r,t)&&je(e,t,r[t]);if(ne)for(var t of ne(r))ir.call(r,t)&&je(e,t,r[t]);return e},Qr=(e,r)=>{var t={};for(var n in e)ar.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&ne)for(var n of ne(e))r.indexOf(n)<0&&ir.call(e,n)&&(t[n]=e[n]);return t};const Ur={size:"sm"},we=_.forwardRef((e,r)=>{const t=F("InputDescription",Ur,e),{children:n,className:o,classNames:a,styles:l,unstyled:c,size:i,__staticSelector:p,variant:v}=t,y=Qr(t,["children","className","classNames","styles","unstyled","size","__staticSelector","variant"]),{classes:m,cx:f}=Xr(null,{name:["InputWrapper",p],classNames:a,styles:l,unstyled:c,variant:v,size:i});return P.createElement(Ze,Jr({color:"dimmed",className:f(m.description,o),ref:r,unstyled:c},y),n)});we.displayName="@mantine/core/InputDescription";const lr=_.createContext({offsetBottom:!1,offsetTop:!1,describedBy:void 0}),Yr=lr.Provider,Zr=()=>_.useContext(lr);function et(e,{hasDescription:r,hasError:t}){const n=e.findIndex(i=>i==="input"),o=e[n-1],a=e[n+1];return{offsetBottom:r&&a==="description"||t&&a==="error",offsetTop:r&&o==="description"||t&&o==="error"}}var rt=Object.defineProperty,tt=Object.defineProperties,nt=Object.getOwnPropertyDescriptors,Ie=Object.getOwnPropertySymbols,ot=Object.prototype.hasOwnProperty,st=Object.prototype.propertyIsEnumerable,Ne=(e,r,t)=>r in e?rt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,at=(e,r)=>{for(var t in r||(r={}))ot.call(r,t)&&Ne(e,t,r[t]);if(Ie)for(var t of Ie(r))st.call(r,t)&&Ne(e,t,r[t]);return e},it=(e,r)=>tt(e,nt(r)),lt=le(e=>({root:it(at({},e.fn.fontStyles()),{lineHeight:e.lineHeight})}));const ct=lt;var ft=Object.defineProperty,pt=Object.defineProperties,ut=Object.getOwnPropertyDescriptors,oe=Object.getOwnPropertySymbols,cr=Object.prototype.hasOwnProperty,fr=Object.prototype.propertyIsEnumerable,De=(e,r,t)=>r in e?ft(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,T=(e,r)=>{for(var t in r||(r={}))cr.call(r,t)&&De(e,t,r[t]);if(oe)for(var t of oe(r))fr.call(r,t)&&De(e,t,r[t]);return e},ze=(e,r)=>pt(e,ut(r)),dt=(e,r)=>{var t={};for(var n in e)cr.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&oe)for(var n of oe(e))r.indexOf(n)<0&&fr.call(e,n)&&(t[n]=e[n]);return t};const _t={labelElement:"label",size:"sm",inputContainer:e=>e,inputWrapperOrder:["label","description","input","error"]},pr=_.forwardRef((e,r)=>{const t=F("InputWrapper",_t,e),{className:n,label:o,children:a,required:l,id:c,error:i,description:p,labelElement:v,labelProps:y,descriptionProps:m,errorProps:f,classNames:O,styles:h,size:b,inputContainer:E,__staticSelector:g,unstyled:I,inputWrapperOrder:W,withAsterisk:N,variant:D}=t,A=dt(t,["className","label","children","required","id","error","description","labelElement","labelProps","descriptionProps","errorProps","classNames","styles","size","inputContainer","__staticSelector","unstyled","inputWrapperOrder","withAsterisk","variant"]),{classes:S,cx:z}=ct(null,{classNames:O,styles:h,name:["InputWrapper",g],unstyled:I,variant:D,size:b}),$={classNames:O,styles:h,unstyled:I,size:b,variant:D,__staticSelector:g},x=typeof N=="boolean"?N:l,j=c?`${c}-error`:f==null?void 0:f.id,V=c?`${c}-description`:m==null?void 0:m.id,B=`${!!i&&typeof i!="boolean"?j:""} ${p?V:""}`,G=B.trim().length>0?B.trim():void 0,fe=o&&P.createElement($e,T(T({key:"label",labelElement:v,id:c?`${c}-label`:void 0,htmlFor:c,required:x},$),y),o),J=p&&P.createElement(we,ze(T(T({key:"description"},m),$),{size:(m==null?void 0:m.size)||$.size,id:(m==null?void 0:m.id)||V}),p),pe=P.createElement(_.Fragment,{key:"input"},E(a)),Q=typeof i!="boolean"&&i&&P.createElement(ge,ze(T(T({},f),$),{size:(f==null?void 0:f.size)||$.size,key:"error",id:(f==null?void 0:f.id)||j}),i),ue=W.map(de=>{switch(de){case"label":return fe;case"input":return pe;case"description":return J;case"error":return Q;default:return null}});return P.createElement(Yr,{value:T({describedBy:G},et(W,{hasDescription:!!J,hasError:!!Q}))},P.createElement(K,T({className:z(S.root,n),ref:r},A),ue))});pr.displayName="@mantine/core/InputWrapper";var yt=Object.defineProperty,se=Object.getOwnPropertySymbols,ur=Object.prototype.hasOwnProperty,dr=Object.prototype.propertyIsEnumerable,Re=(e,r,t)=>r in e?yt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,mt=(e,r)=>{for(var t in r||(r={}))ur.call(r,t)&&Re(e,t,r[t]);if(se)for(var t of se(r))dr.call(r,t)&&Re(e,t,r[t]);return e},vt=(e,r)=>{var t={};for(var n in e)ur.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&se)for(var n of se(e))r.indexOf(n)<0&&dr.call(e,n)&&(t[n]=e[n]);return t};const Pt={},_r=_.forwardRef((e,r)=>{const t=F("InputPlaceholder",Pt,e),{sx:n}=t,o=vt(t,["sx"]);return P.createElement(K,mt({component:"span",sx:[a=>a.fn.placeholderStyles(),...Sr(n)],ref:r},o))});_r.displayName="@mantine/core/InputPlaceholder";var Ot=Object.defineProperty,bt=Object.defineProperties,$t=Object.getOwnPropertyDescriptors,ae=Object.getOwnPropertySymbols,yr=Object.prototype.hasOwnProperty,mr=Object.prototype.propertyIsEnumerable,Ce=(e,r,t)=>r in e?Ot(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Y=(e,r)=>{for(var t in r||(r={}))yr.call(r,t)&&Ce(e,t,r[t]);if(ae)for(var t of ae(r))mr.call(r,t)&&Ce(e,t,r[t]);return e},We=(e,r)=>bt(e,$t(r)),gt=(e,r)=>{var t={};for(var n in e)yr.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&ae)for(var n of ae(e))r.indexOf(n)<0&&mr.call(e,n)&&(t[n]=e[n]);return t};const wt={size:"sm",variant:"default"},q=_.forwardRef((e,r)=>{const t=F("Input",wt,e),{className:n,error:o,required:a,disabled:l,variant:c,icon:i,style:p,rightSectionWidth:v,iconWidth:y,rightSection:m,rightSectionProps:f,radius:O,size:h,wrapperProps:b,classNames:E,styles:g,__staticSelector:I,multiline:W,sx:N,unstyled:D,pointer:A}=t,S=gt(t,["className","error","required","disabled","variant","icon","style","rightSectionWidth","iconWidth","rightSection","rightSectionProps","radius","size","wrapperProps","classNames","styles","__staticSelector","multiline","sx","unstyled","pointer"]),{offsetBottom:z,offsetTop:$,describedBy:x}=Zr(),{classes:j,cx:V}=hr({radius:O,multiline:W,invalid:!!o,rightSectionWidth:v?be(v):void 0,iconWidth:y,withRightSection:!!m,offsetBottom:z,offsetTop:$,pointer:A},{classNames:E,styles:g,name:["Input",I],unstyled:D,variant:c,size:h}),{systemStyles:X,rest:B}=Ye(S);return P.createElement(K,Y(Y({className:V(j.wrapper,n),sx:N,style:p},X),b),i&&P.createElement("div",{className:j.icon},i),P.createElement(K,We(Y({component:"input"},B),{ref:r,required:a,"aria-invalid":!!o,"aria-describedby":x,disabled:l,"data-disabled":l||void 0,"data-with-icon":!!i||void 0,"data-invalid":!!o||void 0,className:j.input})),m&&P.createElement("div",We(Y({},f),{className:j.rightSection}),m))});q.displayName="@mantine/core/Input";q.Wrapper=pr;q.Label=$e;q.Description=we;q.Error=ge;q.Placeholder=_r;const Ae=Er(q);var St=Object.defineProperty,ht=Object.defineProperties,Et=Object.getOwnPropertyDescriptors,ie=Object.getOwnPropertySymbols,vr=Object.prototype.hasOwnProperty,Pr=Object.prototype.propertyIsEnumerable,xe=(e,r,t)=>r in e?St(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,_e=(e,r)=>{for(var t in r||(r={}))vr.call(r,t)&&xe(e,t,r[t]);if(ie)for(var t of ie(r))Pr.call(r,t)&&xe(e,t,r[t]);return e},jt=(e,r)=>ht(e,Et(r)),It=(e,r)=>{var t={};for(var n in e)vr.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&ie)for(var n of ie(e))r.indexOf(n)<0&&Pr.call(e,n)&&(t[n]=e[n]);return t};const Nt={type:"text",size:"sm",__staticSelector:"TextInput"},Dt=_.forwardRef((e,r)=>{const t=Cr("TextInput",Nt,e),{inputProps:n,wrapperProps:o}=t,a=It(t,["inputProps","wrapperProps"]);return P.createElement(Ae.Wrapper,_e({},o),P.createElement(Ae,jt(_e(_e({},n),a),{ref:r})))});Dt.displayName="@mantine/core/TextInput";var zt=function e(r,t){if(r===t)return!0;if(r&&t&&typeof r=="object"&&typeof t=="object"){if(r.constructor!==t.constructor)return!1;var n,o,a;if(Array.isArray(r)){if(n=r.length,n!=t.length)return!1;for(o=n;o--!==0;)if(!e(r[o],t[o]))return!1;return!0}if(r.constructor===RegExp)return r.source===t.source&&r.flags===t.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===t.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===t.toString();if(a=Object.keys(r),n=a.length,n!==Object.keys(t).length)return!1;for(o=n;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[o]))return!1;for(o=n;o--!==0;){var l=a[o];if(!e(r[l],t[l]))return!1}return!0}return r!==r&&t!==t};const Ve=jr(zt);function me(e){return e===null||typeof e!="object"?{}:Object.keys(e).reduce((r,t)=>{const n=e[t];return n!=null&&n!==!1&&(r[t]=n),r},{})}var Rt=Object.defineProperty,Te=Object.getOwnPropertySymbols,Ct=Object.prototype.hasOwnProperty,Wt=Object.prototype.propertyIsEnumerable,ke=(e,r,t)=>r in e?Rt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,At=(e,r)=>{for(var t in r||(r={}))Ct.call(r,t)&&ke(e,t,r[t]);if(Te)for(var t of Te(r))Wt.call(r,t)&&ke(e,t,r[t]);return e};function Or(e,r){if(r===null||typeof r!="object")return{};const t=At({},r);return Object.keys(r).forEach(n=>{n.includes(`${String(e)}.`)&&delete t[n]}),t}const xt="__MANTINE_FORM_INDEX__";function Fe(e,r){return r?typeof r=="boolean"?r:Array.isArray(r)?r.includes(e.replace(/[.][0-9]/g,`.${xt}`)):!1:!1}function qe(e,r,t){typeof t.value=="object"&&(t.value=M(t.value)),!t.enumerable||t.get||t.set||!t.configurable||!t.writable||r==="__proto__"?Object.defineProperty(e,r,t):e[r]=t.value}function M(e){if(typeof e!="object")return e;var r=0,t,n,o,a=Object.prototype.toString.call(e);if(a==="[object Object]"?o=Object.create(e.__proto__||null):a==="[object Array]"?o=Array(e.length):a==="[object Set]"?(o=new Set,e.forEach(function(l){o.add(M(l))})):a==="[object Map]"?(o=new Map,e.forEach(function(l,c){o.set(M(c),M(l))})):a==="[object Date]"?o=new Date(+e):a==="[object RegExp]"?o=new RegExp(e.source,e.flags):a==="[object DataView]"?o=new e.constructor(M(e.buffer)):a==="[object ArrayBuffer]"?o=e.slice(0):a.slice(-6)==="Array]"&&(o=new e.constructor(e)),o){for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)qe(o,n[r],Object.getOwnPropertyDescriptor(e,n[r]));for(r=0,n=Object.getOwnPropertyNames(e);r<n.length;r++)Object.hasOwnProperty.call(o,t=n[r])&&o[t]===e[t]||qe(o,t,Object.getOwnPropertyDescriptor(e,t))}return o||e}function br(e){return typeof e!="string"?[]:e.split(".")}function ce(e,r,t){const n=br(e);if(n.length===0)return t;const o=M(t);if(n.length===1)return o[n[0]]=r,o;let a=o[n[0]];for(let l=1;l<n.length-1;l+=1){if(a===void 0)return o;a=a[n[l]]}return a[n[n.length-1]]=r,o}function C(e,r){const t=br(e);if(t.length===0||typeof r!="object"||r===null)return;let n=r[t[0]];for(let o=1;o<t.length&&n!==void 0;o+=1)n=n[t[o]];return n}function Be(e){const r=me(e);return{hasErrors:Object.keys(r).length>0,errors:r}}function ve(e,r,t="",n={}){return typeof e!="object"||e===null?n:Object.keys(e).reduce((o,a)=>{const l=e[a],c=`${t===""?"":`${t}.`}${a}`,i=C(c,r);let p=!1;return typeof l=="function"&&(o[c]=l(i,r,c)),typeof l=="object"&&Array.isArray(i)&&(p=!0,i.forEach((v,y)=>ve(l,r,`${c}.${y}`,o))),typeof l=="object"&&typeof i=="object"&&i!==null&&(p||ve(l,r,c,o)),o},n)}function Pe(e,r){return Be(typeof e=="function"?e(r):ve(e,r))}function Z(e,r,t){if(typeof e!="string")return{hasError:!1,error:null};const n=Pe(r,t),o=Object.keys(n.errors).find(a=>e.split(".").every((l,c)=>l===a.split(".")[c]));return{hasError:!!o,error:o?n.errors[o]:null}}function Vt(e,{from:r,to:t},n){const o=C(e,n);if(!Array.isArray(o))return n;const a=[...o],l=o[r];return a.splice(r,1),a.splice(t,0,l),ce(e,a,n)}var Tt=Object.defineProperty,Le=Object.getOwnPropertySymbols,kt=Object.prototype.hasOwnProperty,Ft=Object.prototype.propertyIsEnumerable,Me=(e,r,t)=>r in e?Tt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,qt=(e,r)=>{for(var t in r||(r={}))kt.call(r,t)&&Me(e,t,r[t]);if(Le)for(var t of Le(r))Ft.call(r,t)&&Me(e,t,r[t]);return e};function Bt(e,{from:r,to:t},n){const o=`${e}.${r}`,a=`${e}.${t}`,l=qt({},n);return Object.keys(n).every(c=>{let i,p;if(c.startsWith(o)&&(i=c,p=c.replace(o,a)),c.startsWith(a)&&(i=c.replace(a,o),p=c),i&&p){const v=l[i],y=l[p];return y===void 0?delete l[i]:l[i]=y,v===void 0?delete l[p]:l[p]=v,!1}return!0}),l}function Lt(e,r,t){const n=C(e,t);return Array.isArray(n)?ce(e,n.filter((o,a)=>a!==r),t):t}var Mt=Object.defineProperty,He=Object.getOwnPropertySymbols,Ht=Object.prototype.hasOwnProperty,Kt=Object.prototype.propertyIsEnumerable,Ke=(e,r,t)=>r in e?Mt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Xt=(e,r)=>{for(var t in r||(r={}))Ht.call(r,t)&&Ke(e,t,r[t]);if(He)for(var t of He(r))Kt.call(r,t)&&Ke(e,t,r[t]);return e};function Xe(e,r){const t=e.substring(r.length+1).split(".")[0];return parseInt(t,10)}function Ge(e,r,t,n){if(r===void 0)return t;const o=`${String(e)}`;let a=t;n===-1&&(a=Or(`${o}.${r}`,a));const l=Xt({},a),c=new Set;return Object.entries(a).filter(([i])=>{if(!i.startsWith(`${o}.`))return!1;const p=Xe(i,o);return Number.isNaN(p)?!1:p>=r}).forEach(([i,p])=>{const v=Xe(i,o),y=i.replace(`${o}.${v}`,`${o}.${v+n}`);l[y]=p,c.add(y),c.has(i)||delete l[i]}),l}function Gt(e,r,t,n){const o=C(e,n);if(!Array.isArray(o))return n;const a=[...o];return a.splice(typeof t=="number"?t:a.length,0,r),ce(e,a,n)}function Je(e,r){const t=Object.keys(e);if(typeof r=="string"){const n=t.filter(o=>o.startsWith(`${r}.`));return e[r]||n.some(o=>e[o])||!1}return t.some(n=>e[n])}function Jt(e){return r=>{if(!r)e(r);else if(typeof r=="function")e(r);else if(typeof r=="object"&&"nativeEvent"in r){const{currentTarget:t}=r;t instanceof HTMLInputElement?t.type==="checkbox"?e(t.checked):e(t.value):(t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)&&e(t.value)}else e(r)}}var Qt=Object.defineProperty,Ut=Object.defineProperties,Yt=Object.getOwnPropertyDescriptors,Qe=Object.getOwnPropertySymbols,Zt=Object.prototype.hasOwnProperty,en=Object.prototype.propertyIsEnumerable,Ue=(e,r,t)=>r in e?Qt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,k=(e,r)=>{for(var t in r||(r={}))Zt.call(r,t)&&Ue(e,t,r[t]);if(Qe)for(var t of Qe(r))en.call(r,t)&&Ue(e,t,r[t]);return e},ye=(e,r)=>Ut(e,Yt(r));function tn({initialValues:e={},initialErrors:r={},initialDirty:t={},initialTouched:n={},clearInputErrorOnChange:o=!0,validateInputOnChange:a=!1,validateInputOnBlur:l=!1,transformValues:c=p=>p,validate:i}={}){const[p,v]=_.useState(n),[y,m]=_.useState(t),[f,O]=_.useState(e),[h,b]=_.useState(me(r)),E=_.useRef(e),g=s=>{E.current=s},I=_.useCallback(()=>v({}),[]),W=s=>{const u=s?k(k({},f),s):f;g(u),m({})},N=_.useCallback(s=>b(u=>me(typeof s=="function"?s(u):s)),[]),D=_.useCallback(()=>b({}),[]),A=_.useCallback(()=>{O(e),D(),g(e),m({}),I()},[]),S=_.useCallback((s,u)=>N(d=>ye(k({},d),{[s]:u})),[]),z=_.useCallback(s=>N(u=>{if(typeof s!="string")return u;const d=k({},u);return delete d[s],d}),[]),$=_.useCallback(s=>m(u=>{if(typeof s!="string")return u;const d=Or(s,u);return delete d[s],d}),[]),x=_.useCallback((s,u)=>{const d=Fe(s,a);$(s),v(w=>ye(k({},w),{[s]:!0})),O(w=>{const H=ce(s,u,w);if(d){const R=Z(s,i,H);R.hasError?S(s,R.error):z(s)}return H}),!d&&o&&S(s,null)},[]),j=_.useCallback(s=>{O(u=>{const d=typeof s=="function"?s(u):s;return k(k({},u),d)}),o&&D()},[]),V=_.useCallback((s,u)=>{$(s),O(d=>Vt(s,u,d)),b(d=>Bt(s,u,d))},[]),X=_.useCallback((s,u)=>{$(s),O(d=>Lt(s,u,d)),b(d=>Ge(s,u,d,-1))},[]),B=_.useCallback((s,u,d)=>{$(s),O(w=>Gt(s,u,d,w)),b(w=>Ge(s,d,w,1))},[]),G=_.useCallback(()=>{const s=Pe(i,f);return b(s.errors),s},[f,i]),fe=_.useCallback(s=>{const u=Z(s,i,f);return u.hasError?S(s,u.error):z(s),u},[f,i]),J=(s,{type:u="input",withError:d=!0,withFocus:w=!0}={})=>{const R={onChange:Jt(L=>x(s,L))};return d&&(R.error=h[s]),u==="checkbox"?R.checked=C(s,f):R.value=C(s,f),w&&(R.onFocus=()=>v(L=>ye(k({},L),{[s]:!0})),R.onBlur=()=>{if(Fe(s,l)){const L=Z(s,i,f);L.hasError?S(s,L.error):z(s)}}),R},pe=(s,u)=>d=>{d==null||d.preventDefault();const w=G();w.hasErrors?u==null||u(w.errors,f,d):s==null||s(c(f),d)},Q=s=>c(s||f),ue=_.useCallback(s=>{s.preventDefault(),A()},[]),de=s=>{if(s){const d=C(s,y);if(typeof d=="boolean")return d;const w=C(s,f),H=C(s,E.current);return!Ve(w,H)}return Object.keys(y).length>0?Je(y):!Ve(f,E.current)},$r=_.useCallback(s=>Je(p,s),[p]),gr=_.useCallback(s=>s?!Z(s,i,f).hasError:!Pe(i,f).hasErrors,[f,i]);return{values:f,errors:h,setValues:j,setErrors:N,setFieldValue:x,setFieldError:S,clearFieldError:z,clearErrors:D,reset:A,validate:G,validateField:fe,reorderListItem:V,removeListItem:X,insertListItem:B,getInputProps:J,onSubmit:pe,onReset:ue,isDirty:de,isTouched:$r,setTouched:v,setDirty:m,resetTouched:I,resetDirty:W,isValid:gr,getTransformedValues:Q}}export{Ae as I,Dt as T,tn as u};