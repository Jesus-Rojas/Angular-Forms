(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Yj9t:function(r,o,e){"use strict";e.r(o),e.d(o,"AuthModule",function(){return g});var t=e("SVse"),a=e("s7LF"),i=e("iInd"),n=e("8Y7J");let s=(()=>{class r{constructor(){}ngOnInit(){}}return r.\u0275fac=function(o){return new(o||r)},r.\u0275cmp=n.Ab({type:r,selectors:[["app-login"]],decls:2,vars:0,template:function(r,o){1&r&&(n.Jb(0,"p"),n.ec(1,"login works!"),n.Ib())},encapsulation:2}),r})(),l=(()=>{class r{constructor(){this.nombreApellidoPattern="([a-zA-Z]+) ([a-zA-Z]+)",this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"}noPuedeSerStrider(r){var o;return"strider"===(null===(o=r.value)||void 0===o?void 0:o.trim().toLowerCase())?{noStrider:!0}:null}camposIguales(r,o){return e=>{var t,a,i,n;return(null===(t=e.get(r))||void 0===t?void 0:t.value)!==(null===(a=e.get(o))||void 0===a?void 0:a.value)?(null===(i=e.get(o))||void 0===i||i.setErrors({noIguales:!0}),{noIguales:!0}):(null===(n=e.get(o))||void 0===n||n.setErrors(null),null)}}}return r.\u0275fac=function(o){return new(o||r)},r.\u0275prov=n.Cb({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var b=e("lJxs"),c=e("AytR"),m=e("IheW");let d=(()=>{class r{constructor(r){this.http=r,this.ruta=c.a.ruta}validate(r){return this.http.get(`${this.ruta}/FormUsuarios?q=${r.value}`).pipe(Object(b.a)(r=>0===r.length?null:{emailTomado:!0}))}}return r.\u0275fac=function(o){return new(o||r)(n.Nb(m.a))},r.\u0275prov=n.Cb({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function u(r,o){1&r&&(n.Jb(0,"span",13),n.ec(1," Debe de ser en formato de nombre y apellido "),n.Ib())}function p(r,o){if(1&r&&(n.Jb(0,"span",13),n.ec(1),n.Ib()),2&r){const r=n.Sb();n.wb(1),n.gc(" ",r.emailErrorMsg," ")}}function f(r,o){1&r&&(n.Jb(0,"span",13),n.ec(1," El username no puede ser Strider "),n.Ib())}function v(r,o){1&r&&(n.Jb(0,"span",13),n.ec(1," La contrase\xf1a debe de ser mayor de 6 caracteres. "),n.Ib())}function I(r,o){1&r&&(n.Jb(0,"span",13),n.ec(1," Las contrase\xf1as deben de ser iguales "),n.Ib())}const h=[{path:"",children:[{path:"login",component:s},{path:"registro",component:(()=>{class r{constructor(r,o,e){this.fb=r,this.validatorService=o,this.emailValidator=e,this.miFormulario=this.fb.group({nombre:["",[a.t.required,a.t.pattern(this.validatorService.nombreApellidoPattern)]],email:["",[a.t.required,a.t.pattern(this.validatorService.emailPattern)],[this.emailValidator]],username:["",[a.t.required,this.validatorService.noPuedeSerStrider]],password:["",[a.t.required,a.t.minLength(6)]],password2:["",[a.t.required]]},{validators:[this.validatorService.camposIguales("password","password2")]})}get emailErrorMsg(){var r;const o=null===(r=this.miFormulario.get("email"))||void 0===r?void 0:r.errors;return(null==o?void 0:o.required)?"Email es obligatorio":(null==o?void 0:o.pattern)?"El valor ingresado no tiene formato de correo":(null==o?void 0:o.emailTomado)?"El email ya fue tomado":""}ngOnInit(){this.miFormulario.reset({nombre:"Fernando Herrera",email:"test1@test.com",username:"fernando_her85",password:"123456",password2:"123456"})}campoNoValido(r){var o,e;return(null===(o=this.miFormulario.get(r))||void 0===o?void 0:o.invalid)&&(null===(e=this.miFormulario.get(r))||void 0===e?void 0:e.touched)}submitFormulario(){console.log(this.miFormulario.value),this.miFormulario.markAllAsTouched()}}return r.\u0275fac=function(o){return new(o||r)(n.Gb(a.e),n.Gb(l),n.Gb(d))},r.\u0275cmp=n.Ab({type:r,selectors:[["app-registro"]],decls:76,vars:28,consts:[[1,"row"],[1,"col"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","nombre","placeholder","Nombre del usuario",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","email","formControlName","email","placeholder","Email del usuario",1,"form-control"],["type","text","formControlName","username","placeholder","Nombre c\xf3digo del usuario",1,"form-control"],["type","password","formControlName","password","placeholder","Password de su cuenta",1,"form-control"],["type","password","formControlName","password2","placeholder","Confirmar la contrase\xf1a",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end",3,"disabled"],[1,"form-text","text-danger"]],template:function(r,o){1&r&&(n.Jb(0,"h2"),n.ec(1,"Validaciones Reactivas"),n.Ib(),n.Hb(2,"hr"),n.Jb(3,"div",0),n.Jb(4,"div",1),n.Jb(5,"form",2),n.Qb("ngSubmit",function(){return o.submitFormulario()}),n.Jb(6,"div",3),n.Jb(7,"label",4),n.ec(8,"Nombre"),n.Ib(),n.Jb(9,"div",5),n.Hb(10,"input",6),n.dc(11,u,2,0,"span",7),n.Ib(),n.Ib(),n.Jb(12,"div",3),n.Jb(13,"label",4),n.ec(14,"Email"),n.Ib(),n.Jb(15,"div",5),n.Hb(16,"input",8),n.dc(17,p,2,1,"span",7),n.Ib(),n.Ib(),n.Jb(18,"div",3),n.Jb(19,"label",4),n.ec(20,"Username"),n.Ib(),n.Jb(21,"div",5),n.Hb(22,"input",9),n.dc(23,f,2,0,"span",7),n.Ib(),n.Ib(),n.Jb(24,"div",3),n.Jb(25,"label",4),n.ec(26,"Password"),n.Ib(),n.Jb(27,"div",5),n.Hb(28,"input",10),n.dc(29,v,2,0,"span",7),n.Ib(),n.Ib(),n.Jb(30,"div",3),n.Jb(31,"label",4),n.ec(32,"Confirmar"),n.Ib(),n.Jb(33,"div",5),n.Hb(34,"input",11),n.dc(35,I,2,0,"span",7),n.Ib(),n.Ib(),n.Jb(36,"div",0),n.Jb(37,"div",1),n.Jb(38,"button",12),n.ec(39," Crear "),n.Ib(),n.Ib(),n.Ib(),n.Ib(),n.Ib(),n.Ib(),n.Jb(40,"h2"),n.ec(41),n.Ib(),n.Jb(42,"h2"),n.ec(43),n.Ib(),n.Jb(44,"h2"),n.ec(45),n.Ib(),n.Jb(46,"h2"),n.ec(47,"Form errors"),n.Ib(),n.Jb(48,"pre"),n.ec(49),n.Tb(50,"json"),n.Ib(),n.Jb(51,"h5"),n.ec(52,"Nombre"),n.Ib(),n.Jb(53,"pre"),n.ec(54),n.Tb(55,"json"),n.Ib(),n.Jb(56,"h5"),n.ec(57,"Email"),n.Ib(),n.Jb(58,"pre"),n.ec(59),n.Tb(60,"json"),n.Ib(),n.Jb(61,"h5"),n.ec(62,"Username"),n.Ib(),n.Jb(63,"pre"),n.ec(64),n.Tb(65,"json"),n.Ib(),n.Jb(66,"h5"),n.ec(67,"Password"),n.Ib(),n.Jb(68,"pre"),n.ec(69),n.Tb(70,"json"),n.Ib(),n.Jb(71,"h5"),n.ec(72,"Confirmar"),n.Ib(),n.Jb(73,"pre"),n.ec(74),n.Tb(75,"json"),n.Ib()),2&r&&(n.wb(5),n.Vb("formGroup",o.miFormulario),n.wb(6),n.Vb("ngIf",o.campoNoValido("nombre")),n.wb(6),n.Vb("ngIf",o.campoNoValido("email")),n.wb(6),n.Vb("ngIf",o.campoNoValido("username")),n.wb(6),n.Vb("ngIf",o.campoNoValido("password")),n.wb(6),n.Vb("ngIf",o.campoNoValido("password2")),n.wb(3),n.Vb("disabled",o.miFormulario.pending),n.wb(3),n.gc("Form Valid: ",o.miFormulario.valid,""),n.wb(2),n.gc("Form Status: ",o.miFormulario.status,""),n.wb(2),n.gc("Form Pending: ",o.miFormulario.pending,""),n.wb(4),n.fc(n.Ub(50,16,o.miFormulario.errors)),n.wb(5),n.fc(n.Ub(55,18,o.miFormulario.controls.nombre.errors)),n.wb(5),n.fc(n.Ub(60,20,o.miFormulario.controls.email.errors)),n.wb(5),n.fc(n.Ub(65,22,o.miFormulario.controls.username.errors)),n.wb(5),n.fc(n.Ub(70,24,o.miFormulario.controls.password.errors)),n.wb(5),n.fc(n.Ub(75,26,o.miFormulario.controls.password2.errors)))},directives:[a.u,a.m,a.h,a.c,a.l,a.g,t.j],pipes:[t.e],encapsulation:2}),r})()},{path:"**",redirectTo:"registro"}]}];let w=(()=>{class r{}return r.\u0275mod=n.Eb({type:r}),r.\u0275inj=n.Db({factory:function(o){return new(o||r)},imports:[[i.c.forChild(h)],i.c]}),r})(),g=(()=>{class r{}return r.\u0275mod=n.Eb({type:r}),r.\u0275inj=n.Db({factory:function(o){return new(o||r)},imports:[[t.b,w,a.r]]}),r})()}}]);