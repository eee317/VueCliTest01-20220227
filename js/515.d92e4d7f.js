"use strict";(self["webpackChunkkitty_home"]=self["webpackChunkkitty_home"]||[]).push([[515],{3515:function(t,e,o){o.r(e),o.d(e,{default:function(){return et}});var d=o(6252),a=o(3577);const l=t=>((0,d.dD)("data-v-52fb6154"),t=t(),(0,d.Cn)(),t),i=l((()=>(0,d._)("div",{class:"container-fluid"},[(0,d._)("div",{class:"img-fluid d-flex justify-content-center align-items-center flex-column text-center",style:{height:"250px","background-size":"cover","background-position":"50% 35%","background-image":'url("https://images.unsplash.com/photo-1516007049085-2a9077b4b512?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")'}},[(0,d._)("h1",{style:{"text-shadow":"black 0.0em 0.05em 0.2em"},class:"text-white"},"捐款項目"),(0,d._)("p",{class:"text-white"},"請選先選擇數量，再加入捐款")])],-1))),s={class:"container g-4"},n={class:"row"},c={class:"card text-dark border-0"},r=["onClick"],u={class:"card-body"},m={class:"card-title text-primary"},p={class:"card-text text-primary fw-light"},b={class:"d-flex justify-content-between"},h={class:"input-group"},g=["id","onChange"],_=l((()=>(0,d._)("option",{selected:"",disabled:""},"請選擇",-1))),v=["value"],y=["onClick","disabled","id"];function f(t,e,o,l,f,M){const w=(0,d.up)("donateModal"),x=(0,d.up)("addDonateModal"),k=(0,d.up)("loadingPage");return(0,d.wg)(),(0,d.iD)(d.HY,null,[i,(0,d._)("div",s,[(0,d._)("div",n,[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(f.products,(t=>((0,d.wg)(),(0,d.iD)("div",{class:"col-12 col-sm-6 col-md-4 my-4",key:t.id},[(0,d._)("div",c,[(0,d._)("div",{class:"position-relative d-grid gap-2",style:(0,a.j5)([{backgroundImage:`url(${t.imageUrl})`},{height:"200px","background-size":"cover","background-position":"center"}])},[(0,d._)("button",{onClick:e=>M.openModal(t),type:"button",style:{"text-decoration":"none","text-shadow":"0.0em 0.0em 0.2em black"},class:"btn btn-link text-white position-absolute bottom-0 start-50 translate-middle-x"},"查看更多",8,r)],4),(0,d._)("div",u,[(0,d._)("h5",m,(0,a.zw)(t.title),1),(0,d._)("p",p,"NT$ "+(0,a.zw)(t.price),1)]),(0,d._)("div",b,[(0,d._)("div",h,[(0,d._)("select",{class:"form-select text-primary border-0",style:{},id:t.id+"select",onChange:e=>M.buttonStatus(t.id,"original")},[_,((0,d.wg)(),(0,d.iD)(d.HY,null,(0,d.Ko)(20,(e=>(0,d._)("option",{value:e,key:`${e}${t.id}select`},(0,a.zw)(e),9,v))),64))],40,g)]),(0,d._)("button",{href:"#",style:{width:"100%"},class:"btn btn-secondary text-white",onClick:e=>M.addCart(t.id,"original",t.title),disabled:f.buttonDisabled,id:t.id+"button"},"加入捐款",8,y)])])])))),128))]),(0,d.Wm)(w,{item:f.product,ref:"productModal",onButtonStatus:M.buttonStatus,onAddCart:M.addCart},null,8,["item","onButtonStatus","onAddCart"]),(0,d.Wm)(x,{item:f.productTitle,ref:"addDonateModal"},null,8,["item"]),(0,d.Wm)(k,{isLoading:f.isLoading},null,8,["isLoading"])])],64)}const M={class:"modal",tabindex:"-1",ref:"modal",id:"donateModal"},w={class:"modal-dialog"},x={class:"modal-content"},k={class:"modal-header"},C={class:"modal-title"},$=(0,d._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),D={class:"modal-body"},S={class:"modal-footer"},z=["id"],q=(0,d._)("option",{selected:"",disabled:""},"請選擇",-1),A=["value"],H=["id"];function I(t,e,o,l,i,s){return(0,d.wg)(),(0,d.iD)("div",M,[(0,d._)("div",w,[(0,d._)("div",x,[(0,d._)("div",k,[(0,d._)("h5",C,(0,a.zw)(o.item.title),1),$]),(0,d._)("div",D,[(0,d._)("div",{style:(0,a.j5)([{backgroundImage:`url(${o.item.imageUrl})`},{height:"300px","background-size":"cover","background-position":"center"}])},null,4),(0,d._)("p",null,(0,a.zw)(o.item.content),1),(0,d._)("p",null,(0,a.zw)(o.item.description),1)]),(0,d._)("div",S,[(0,d._)("select",{class:"form-select",id:o.item.id+"selectModel",onChange:e[0]||(e[0]=t=>s.buttonStatus(o.item.id,"buttonModel"))},[q,((0,d.wg)(),(0,d.iD)(d.HY,null,(0,d.Ko)(20,(t=>(0,d._)("option",{value:t,key:`${t}${o.item.id}selectModel`},(0,a.zw)(t),9,A))),64))],40,z),(0,d._)("button",{type:"button",class:"btn btn-primary",id:o.item.id+"buttonModel",disabled:"",onClick:e[1]||(e[1]=t=>s.addCart(o.item.id,"model"))},"加入捐款項目",8,H)])])])],512)}var L=o(7424),j=o.n(L),Y={props:{item:{}},methods:{openModal(){this.modal.show()},hideModal(t){this.modal.hide();const e=document.querySelector(`#${t}buttonModel`),o=document.querySelector(`#${t}selectModel`);e.disabled=!0,o.value="請選擇"},addCart(t,e){this.$emit("add-cart",t,e)},buttonStatus(t,e){this.$emit("button-status",t,e)}},mounted(){this.modal=new(j())(this.$refs.modal,{keyboard:!1})}},B=o(3744);const T=(0,B.Z)(Y,[["render",I]]);var W=T;const Z={class:"modal",tabindex:"-1",ref:"addModal",id:"addDonateModal"},K={class:"modal-dialog"},P={class:"modal-content"},R={class:"modal-header"},G={class:"modal-title"},U=(0,d._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),N=(0,d._)("div",{class:"modal-body"},[(0,d._)("div",{class:"text-center"},"已加入捐款項目")],-1),V={class:"modal-footer"};function E(t,e,o,l,i,s){return(0,d.wg)(),(0,d.iD)("div",Z,[(0,d._)("div",K,[(0,d._)("div",P,[(0,d._)("div",R,[(0,d._)("h5",G,(0,a.zw)(o.item),1),U]),N,(0,d._)("div",V,[(0,d._)("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=(...t)=>s.hideModal&&s.hideModal(...t))},"我知道了")])])])],512)}var F={props:{item:{}},methods:{openModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new(j())(this.$refs.addModal,{keyboard:!1})}};const J=(0,B.Z)(F,[["render",E]]);var O=J,Q=o(1530),X={data(){return{buttonDisabled:!0,products:[],product:{},productTitle:{},isLoading:!1}},components:{donateModal:W,addDonateModal:O},methods:{getProducts(){this.isLoading=!0,this.$http("https://vue3-course-api.hexschool.io/v2/api/peiying/products/all").then((t=>{this.products=t.data.products,this.isLoading=!1,console.log(t)}))},openModal(t){this.product={...t},console.log(this.product);const e=this.$refs.productModal;e.openModal()},openAddModal(t){this.productTitle=t;const e=this.$refs.addDonateModal;e.openModal()},buttonStatus(t,e){let o={},d={};"original"===e?(o=document.querySelector(`#${t}button`),d=document.querySelector(`#${t}select`)):(o=document.querySelector(`#${t}buttonModel`),d=document.querySelector(`#${t}selectModel`));const a=d.selectedIndex;a>0&&(console.log(o),o.disabled=!1)},addCart(t,e,o){let d={},a={};"original"===e?(d=document.querySelector(`#${t}select`),a=d.selectedIndex,this.addCartRunApi(t,a,o)):(d=document.querySelector(`#${t}selectModel`),a=d.selectedIndex,this.addCartRunApi(t,a,o),this.$refs.productModal.hideModal(t))},addCartRunApi(t,e,o){if(e>0){const d={product_id:t,qty:e},a="https://vue3-course-api.hexschool.io/v2/api/peiying/cart";this.$http.post(a,{data:d}).then((t=>{console.log(t),this.openAddModal(o),Q.Z.emit("render-cart")})).catch((t=>{console.log(t)}))}}},mounted(){this.getProducts()}};const tt=(0,B.Z)(X,[["render",f],["__scopeId","data-v-52fb6154"]]);var et=tt}}]);
//# sourceMappingURL=515.d92e4d7f.js.map