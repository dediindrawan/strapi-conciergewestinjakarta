import{bo as T,u as I,n as A,q as N,cy as v,cF as D,f7 as k,r as w,eS as O,j as s,P as u}from"./strapi-oU9S8udu.js";import{C as R,T as U}from"./Form-DamaxNpG-Cnd1yXsH.js";import{u as q}from"./hooks-E5u1mcgM-CLHAJx6r.js";import{s as G}from"./objects-D6yBsdmx-CnhQ_4tf.js";import"./useDragAndDrop-DJ6jqvZN-10Py7vJW.js";import"./ComponentIcon-u4bIXTFY-4rY6zBQ4.js";import"./FieldTypeIcon-CMlNO8PE-BZetmnLr.js";import"./getEmptyImage-CjqolaH3.js";const H=()=>{const{trackUsage:o}=T(),{formatMessage:n}=I(),{toggleNotification:a}=A(),{_unstableFormatAPIError:c}=N(),{isLoading:F,schema:y,model:S}=v(),{isLoading:L,error:h,list:E,edit:g}=D(),{fieldSizes:x,error:d,isLoading:_,isFetching:j}=k(void 0,{selectFromResult:e=>{const l=Object.entries(e.data?.fieldSizes??{}).reduce((r,[t,{default:i}])=>(r[t]=i,r),{});return{isFetching:e.isFetching,isLoading:e.isLoading,error:e.error,fieldSizes:l}}});w.useEffect(()=>{d&&a({type:"danger",message:c(d)})},[d,c,a]);const C=F||L||_||j,[M]=O(),P=async e=>{try{o("willSaveContentTypeLayout");const l=Object.entries(E.metadatas).reduce((t,[i,{mainField:m,...f}])=>{const z=g.metadatas[i],{__temp_key__:Q,size:V,name:$,...b}=e.layout.flatMap(p=>p.children).find(p=>p.name===i)??{};return t[i]={edit:{...z,...b},list:f},t},{}),r=await M({layouts:{edit:e.layout.map(t=>t.children.reduce((i,{name:m,size:f})=>m!==U?[...i,{name:m,size:f}]:i,[])),list:E.layout.map(t=>t.name)},settings:G(e.settings,"displayName",void 0),metadatas:l,uid:S});"data"in r?(o("didEditEditSettings"),a({type:"success",message:n({id:"notification.success.saved",defaultMessage:"Saved"})})):a({type:"danger",message:c(r.error)})}catch{a({type:"danger",message:n({id:"notification.error",defaultMessage:"An error occurred"})})}};return C?s.jsx(u.Loading,{}):d||h||!y?s.jsx(u.Error,{}):s.jsxs(s.Fragment,{children:[s.jsx(u.Title,{children:`Configure ${g.settings.displayName} Edit View`}),s.jsx(R,{onSubmit:P,attributes:y.attributes,fieldSizes:x,layout:g})]})},te=()=>{const o=q(n=>n.admin_app.permissions.contentManager?.collectionTypesConfigurations);return s.jsx(u.Protect,{permissions:o,children:s.jsx(H,{})})};export{H as EditConfigurationPage,te as ProtectedEditConfigurationPage};
