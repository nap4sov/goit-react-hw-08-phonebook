"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[493],{2493:function(e,n,a){a.r(n),a.d(n,{default:function(){return W}});var r=a(9434),t=a(5705),s=a(1089),i=a(7938),o=a(2286),d=a(5122),c=a(6823),l=a(5818),u=a(890),m=a(3721),h=a(5379),x=a(3400),b=a(1131),g=a(8439),j=a(184),Z=function(){var e=(0,r.I0)(),n=(0,r.v9)(o.K2),a=s.Ry().shape({name:s.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Required"),number:s.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Required")}),Z=(0,t.TA)({initialValues:{name:"",number:""},onSubmit:function(a,r){var t=r.setSubmitting,s=r.resetForm;!function(e){return n.some((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))}(a)?(e((0,i.uK)(a)),t(!1),s()):e((0,d.s)("".concat(a.name," is already in contacts.")))},validationSchema:a});return(0,j.jsxs)(c.Z,{sx:{background:"transparent"},elevation:0,children:[(0,j.jsx)(l.Z,{expandIcon:(0,j.jsx)(b.Z,{}),children:(0,j.jsx)(u.Z,{sx:{color:"black"},children:"Add new contact"})}),(0,j.jsx)(m.Z,{children:(0,j.jsxs)("form",{onSubmit:Z.handleSubmit,style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,j.jsx)(h.Z,{name:"name",type:"text",label:"Name",variant:"standard",value:Z.values.name,onChange:Z.handleChange,fullWidth:!0,error:Z.touched.name&&Boolean(Z.errors.name),helperText:Z.touched.name&&Z.errors.name}),(0,j.jsx)(h.Z,{name:"number",type:"tel",label:"Phone number",variant:"standard",value:Z.values.number,onChange:Z.handleChange,sx:{marginBottom:3},fullWidth:!0,error:Z.touched.number&&Boolean(Z.errors.number),helperText:Z.touched.number&&Z.errors.number}),(0,j.jsx)(x.Z,{variant:"contained",type:"submit","aria-label":"add",children:(0,j.jsx)(g.Z,{fontSize:"large"})})]})})]})},p=a(2791),f=a(7621),v=a(9585),y=a(3044),k=a(9504),C=a(533),w=a(2363),I=a(7247),_=a(2716),S=function(e){var n=e.id,a=e.name,t=e.number,s=(0,r.I0)();return(0,j.jsxs)(f.Z,{sx:{display:"flex",alignItems:"center",background:"rgba(200,200,200,0.5)"},children:[(0,j.jsx)(v.Z,{sx:{paddingRight:0},avatar:(0,j.jsx)(y.Z,{children:a[0]})}),(0,j.jsxs)(k.Z,{sx:{padding:0},children:[(0,j.jsx)(u.Z,{variant:"button",children:a}),(0,j.jsxs)(C.Z,{href:"tel:".concat(t),underline:"hover",color:"text.secondary",display:"flex",sx:{alignItems:"center"},children:[(0,j.jsx)(_.Z,{fontSize:"small",sx:{marginRight:.5}}),t]})]}),(0,j.jsx)(w.Z,{sx:{marginLeft:"auto"},children:(0,j.jsx)(x.Z,{"aria-label":"delete",onClick:function(){s((0,i.GK)(n))},children:(0,j.jsx)(I.Z,{fontSize:"medium"})})})]})},A=a(9658),z=a(703),q=a(3767),P=function(){var e=(0,r.I0)();(0,p.useEffect)((function(){e((0,i.yF)())}),[e]);var n=(0,r.v9)(o.Wq),a=(0,r.v9)(o.F4);return n?(0,j.jsx)(A.Z,{variant:"outlined",severity:"info",children:"Contacts list is empty"}):n||0!==a.length?(0,j.jsx)(z.Z,{elevation:6,sx:{padding:"16px",backgroundImage:"linear-gradient(270deg,\n        rgba(238, 174, 202, 0.4) 0%,\n        rgba(148, 187, 233, 0.6) 100%), url(".concat("/goit-react-hw-08-phonebook","/paper.webp)")},children:(0,j.jsx)(q.Z,{spacing:2,children:a.map((function(e){var n=e.id,a=e.name,r=e.number;return(0,j.jsx)(S,{id:n,name:a,number:r},n)}))})}):(0,j.jsx)(A.Z,{variant:"outlined",severity:"warning",children:"No contact with such name found"})},F=function(){var e=(0,r.I0)(),n=(0,r.v9)(o.Wq);return(0,j.jsxs)(c.Z,{sx:{background:"transparent"},elevation:0,disabled:!!n,children:[(0,j.jsx)(l.Z,{expandIcon:(0,j.jsx)(b.Z,{}),children:(0,j.jsx)(u.Z,{sx:{color:"black"},children:"Find contacts by name"})}),(0,j.jsx)(m.Z,{sx:{textAlign:"center"},children:(0,j.jsx)(h.Z,{onChange:function(n){var a=n.target.value;e((0,d.x)(a))},variant:"standard",label:"Start entering name",fullWidth:!0})})]})},R=a(1889),W=function(){return(0,j.jsxs)(R.ZP,{container:!0,spacing:2,justifyContent:"center",children:[(0,j.jsx)(R.ZP,{item:!0,xs:12,sm:5,md:4,children:(0,j.jsx)(Z,{})}),(0,j.jsx)(R.ZP,{item:!0,xs:12,sm:5,md:4,children:(0,j.jsx)(F,{})}),(0,j.jsx)(R.ZP,{item:!0,xs:12,sm:10,md:8,children:(0,j.jsx)(P,{})})]})}}}]);
//# sourceMappingURL=493.b2b221d5.chunk.js.map