import{a as C,b as m,c as b,d as E,e as F,f as x,g as N,k as w,l as U,m as _,n as D}from"./chunk-VA375QOV.js";import"./chunk-7D3A2SKW.js";import{A as f,B as g,D as S,G as e,H as r,I as l,K as v,N as o,T as h,ca as y,m as a,n as d,w as c}from"./chunk-3TBGQWL2.js";function I(n,i){n&1&&(e(0,"div",6)(1,"ul"),o(2," Contrase\xF1a o correo incorrectos. "),r()())}var u=(()=>{let i=class i{constructor(){this.fb=a(w),this.router=a(y),this.userService=a(_),this.errors=[],this.hayError=!1,this.form=this.fb.group({email:["",[m.required,m.email]],password:["",[m.required]]})}login(){this.userService.login(this.form.value).subscribe({next:t=>{localStorage.setItem("user",JSON.stringify(t)),t.rol=="ADMIN"?this.router.navigate(["/administrativo"]):t.rol=="USER"?(console.log("Usuario"),this.router.navigate(["/docente"])):console.log("Error al iniciar")},error:t=>{this.hayError=!0,console.log("Error al iniciar")}})}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=d({type:i,selectors:[["app-login"]],standalone:!0,features:[h],decls:19,vars:2,consts:[[1,"container","p-5"],[1,"card","p-5"],[1,"card-body","row","justify-content-md-center"],["src","assets/uagrm.png","alt","UnivSys",1,"col-md-2","col-sm-2","rounded","mx-auto","d-block"],[1,"text-center"],[1,"row","justify-content-center"],[1,"alert","alert-danger"],[3,"ngSubmit","formGroup"],["formControlName","email","id","email","type","email",1,"form-control"],["formControlName","password","id","password","type","password",1,"form-control"],[1,"mt-2","btn","btn-primary"]],template:function(t,s){t&1&&(e(0,"div",0)(1,"div",1)(2,"div",2),l(3,"img",3),e(4,"h1",4),o(5,"Iniciar Sesi\xF3n - UnivSys"),r(),e(6,"p",4),o(7,"Ingresa tus datos para iniciar sesi\xF3n"),r(),e(8,"div",5),f(9,I,3,0,"div",6),r(),e(10,"form",7),v("ngSubmit",function(){return s.login()}),e(11,"label"),o(12,"Correo *"),r(),l(13,"input",8),e(14,"label"),o(15,"Contrase\xF1a *"),r(),l(16,"input",9),e(17,"button",10),o(18," Iniciar Sesi\xF3n "),r()()()()()),t&2&&(c(9),S(s.hayError?9:-1),c(),g("formGroup",s.form))},dependencies:[U,F,C,b,E,x,N]});let n=i;return n})();var B=[{path:"login",component:u},{path:"perfil/:id",component:D},{path:"",component:u}];export{B as AUTH_ROUTES};