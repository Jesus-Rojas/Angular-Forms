(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{odMU:function(o,r,e){"use strict";e.r(r),e.d(r,"ReactiveModule",function(){return d});var i=e("SVse"),t=e("s7LF"),b=e("iInd"),n=e("8Y7J");function c(o,r){1&o&&(n.Jb(0,"span",11),n.ec(1," Debe de ser de 3 letras "),n.Ib())}function a(o,r){1&o&&(n.Jb(0,"span",11),n.ec(1," El precio debe de ser 0 o mayor "),n.Ib())}function s(o,r){1&o&&(n.Jb(0,"span",11),n.ec(1," Las existencias deben de ser 0 o mayor "),n.Ib())}function l(o,r){1&o&&(n.Jb(0,"span",14),n.ec(1," Este campo es obligatorio "),n.Ib())}function u(o,r){if(1&o){const o=n.Kb();n.Jb(0,"div",15),n.Hb(1,"input",16),n.Jb(2,"button",17),n.Qb("click",function(){n.ac(o);const e=r.index;return n.Sb().borrar(e)}),n.ec(3," Eliminar "),n.Ib(),n.Ib()}if(2&o){const o=r.index;n.wb(1),n.Vb("formControlName",o)}}const m=[{path:"",children:[{path:"basicos",component:(()=>{class o{constructor(o){this.fb=o,this.miFormulario=this.fb.group({nombre:[,[t.t.required,t.t.minLength(3)]],precio:[,[t.t.required,t.t.min(0)]],existencias:[,[t.t.required,t.t.min(0)]]})}ngOnInit(){this.miFormulario.reset({nombre:"RTX 4080ti",precio:1600})}campoEsValido(o){return this.miFormulario.controls[o].errors&&this.miFormulario.controls[o].touched}guardar(){this.miFormulario.invalid?this.miFormulario.markAllAsTouched():(console.log(this.miFormulario.value),this.miFormulario.reset())}}return o.\u0275fac=function(r){return new(r||o)(n.Gb(t.e))},o.\u0275cmp=n.Ab({type:o,selectors:[["app-basicos"]],decls:52,vars:13,consts:[[1,"row"],[1,"col"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","nombre","placeholder","Nombre del producto",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","number","formControlName","precio","placeholder","Precio del producto",1,"form-control"],["type","number","formControlName","existencias","placeholder","Existencias del producto",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"]],template:function(o,r){1&o&&(n.Jb(0,"h2"),n.ec(1,"Reactivos: B\xe1sicos"),n.Ib(),n.Hb(2,"hr"),n.Jb(3,"div",0),n.Jb(4,"div",1),n.Jb(5,"form",2),n.Qb("ngSubmit",function(){return r.guardar()}),n.Jb(6,"div",3),n.Jb(7,"label",4),n.ec(8,"Producto"),n.Ib(),n.Jb(9,"div",5),n.Hb(10,"input",6),n.dc(11,c,2,0,"span",7),n.Ib(),n.Ib(),n.Jb(12,"div",3),n.Jb(13,"label",4),n.ec(14,"Precio"),n.Ib(),n.Jb(15,"div",5),n.Hb(16,"input",8),n.dc(17,a,2,0,"span",7),n.Ib(),n.Ib(),n.Jb(18,"div",3),n.Jb(19,"label",4),n.ec(20,"Existencias"),n.Ib(),n.Jb(21,"div",5),n.Hb(22,"input",9),n.dc(23,s,2,0,"span",7),n.Ib(),n.Ib(),n.Jb(24,"div",0),n.Jb(25,"div",1),n.Jb(26,"button",10),n.ec(27," Guardar "),n.Ib(),n.Ib(),n.Ib(),n.Ib(),n.Ib(),n.Ib(),n.Jb(28,"div",0),n.Jb(29,"div",1),n.Jb(30,"span"),n.ec(31,"Valid"),n.Ib(),n.Jb(32,"pre"),n.ec(33),n.Ib(),n.Jb(34,"span"),n.ec(35,"Pristine"),n.Ib(),n.Jb(36,"pre"),n.ec(37),n.Ib(),n.Jb(38,"span"),n.ec(39,"Touched"),n.Ib(),n.Jb(40,"pre"),n.ec(41),n.Ib(),n.Jb(42,"span"),n.ec(43,"Value"),n.Ib(),n.Jb(44,"pre"),n.ec(45),n.Tb(46,"json"),n.Ib(),n.Jb(47,"span"),n.ec(48,"Precio"),n.Ib(),n.Jb(49,"pre"),n.ec(50),n.Tb(51,"json"),n.Ib(),n.Ib(),n.Ib()),2&o&&(n.wb(5),n.Vb("formGroup",r.miFormulario),n.wb(6),n.Vb("ngIf",r.campoEsValido("nombre")),n.wb(6),n.Vb("ngIf",r.campoEsValido("precio")),n.wb(6),n.Vb("ngIf",r.campoEsValido("existencias")),n.wb(10),n.fc(r.miFormulario.valid),n.wb(4),n.fc(r.miFormulario.pristine),n.wb(4),n.fc(r.miFormulario.touched),n.wb(4),n.fc(n.Ub(46,9,r.miFormulario.value)),n.wb(5),n.fc(n.Ub(51,11,r.miFormulario.controls.precio.errors)))},directives:[t.u,t.m,t.h,t.c,t.l,t.g,i.j,t.p],pipes:[i.e],encapsulation:2}),o})()},{path:"dinamicos",component:(()=>{class o{constructor(o){this.fb=o,this.miFormulario=this.fb.group({nombre:["",[t.t.required,t.t.minLength(3)]],favoritos:this.fb.array([["Metal Gear",t.t.required],["Death Stranding",t.t.required]],t.t.required)}),this.nuevoFavorito=this.fb.control("",t.t.required)}get favoritosArr(){return this.miFormulario.get("favoritos")}campoEsValido(o){return this.miFormulario.controls[o].errors&&this.miFormulario.controls[o].touched}agregarFavorito(){this.nuevoFavorito.invalid||(this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value,t.t.required)),this.nuevoFavorito.reset())}borrar(o){this.favoritosArr.removeAt(o)}guardar(){this.miFormulario.invalid?this.miFormulario.markAllAsTouched():console.log(this.miFormulario.value)}}return o.\u0275fac=function(r){return new(r||o)(n.Gb(t.e))},o.\u0275cmp=n.Ab({type:o,selectors:[["app-dinamicos"]],decls:46,vars:10,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["formControlName","nombre","placeholder","Nombre de la persona",1,"form-control"],["class","form-text text-danger",4,"ngIf"],[1,"input-group"],["placeholder","Agregar favorito",1,"form-control",3,"formControl","keyup.enter"],["type","button",1,"btn","btn-outline-primary",3,"click"],["formArrayName","favoritos",1,"col-sm-9"],["class","input-group mb-1",4,"ngFor","ngForOf"],[1,"row"],[1,"col-sm-12"],["type","button",1,"btn","btn-primary","float-end",3,"click"],[1,"form-text","text-danger"],[1,"input-group","mb-1"],[1,"form-control",3,"formControlName"],["type","button",1,"btn","btn-outline-danger",3,"click"]],template:function(o,r){1&o&&(n.Jb(0,"h2"),n.ec(1,"Reactivos: "),n.Jb(2,"small"),n.ec(3," Din\xe1micos "),n.Ib(),n.Ib(),n.Hb(4,"hr"),n.Jb(5,"form",0),n.Qb("ngSubmit",function(){return r.guardar()}),n.Jb(6,"div",1),n.Jb(7,"label",2),n.ec(8,"Nombre"),n.Ib(),n.Jb(9,"div",3),n.Hb(10,"input",4),n.dc(11,l,2,0,"span",5),n.Ib(),n.Ib(),n.Jb(12,"div",1),n.Jb(13,"label",2),n.ec(14,"Agregar"),n.Ib(),n.Jb(15,"div",3),n.Jb(16,"div",6),n.Jb(17,"input",7),n.Qb("keyup.enter",function(){return r.agregarFavorito()}),n.Ib(),n.Jb(18,"button",8),n.Qb("click",function(){return r.agregarFavorito()}),n.ec(19," Agregar "),n.Ib(),n.Ib(),n.Ib(),n.Ib(),n.Jb(20,"div",1),n.Jb(21,"label",2),n.ec(22,"Favoritos"),n.Ib(),n.Jb(23,"div",9),n.dc(24,u,4,1,"div",10),n.Ib(),n.Ib(),n.Jb(25,"div",11),n.Jb(26,"div",12),n.Jb(27,"button",13),n.Qb("click",function(){return r.guardar()}),n.ec(28," Guardar "),n.Ib(),n.Ib(),n.Ib(),n.Ib(),n.Jb(29,"span"),n.ec(30,"Valid"),n.Ib(),n.Jb(31,"pre"),n.ec(32),n.Ib(),n.Hb(33,"br"),n.Jb(34,"span"),n.ec(35,"Value"),n.Ib(),n.Jb(36,"pre"),n.ec(37),n.Tb(38,"json"),n.Ib(),n.Hb(39,"br"),n.Jb(40,"span"),n.ec(41,"Agregar Juego"),n.Ib(),n.Jb(42,"pre"),n.ec(43),n.Ib(),n.Jb(44,"pre"),n.ec(45),n.Ib()),2&o&&(n.wb(5),n.Vb("formGroup",r.miFormulario),n.wb(6),n.Vb("ngIf",r.campoEsValido("nombre")),n.wb(6),n.Vb("formControl",r.nuevoFavorito),n.wb(7),n.Vb("ngForOf",r.favoritosArr.controls),n.wb(8),n.fc(r.miFormulario.valid),n.wb(5),n.fc(n.Ub(38,8,r.miFormulario.value)),n.wb(6),n.fc(r.nuevoFavorito.valid),n.wb(2),n.fc(r.nuevoFavorito.value))},directives:[t.u,t.m,t.h,t.c,t.l,t.g,i.j,t.f,t.d,i.i],pipes:[i.e],encapsulation:2}),o})()},{path:"switches",component:(()=>{class o{constructor(o){this.fb=o,this.miFormulario=this.fb.group({genero:["M",t.t.required],notificaciones:[!0,t.t.required],condiciones:[!1,t.t.requiredTrue]}),this.persona={genero:"F",notificaciones:!0}}ngOnInit(){this.miFormulario.reset(Object.assign(Object.assign({},this.persona),{condiciones:!1})),this.miFormulario.valueChanges.subscribe(o=>{var r=function(o,r){var e={};for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&r.indexOf(i)<0&&(e[i]=o[i]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(i=Object.getOwnPropertySymbols(o);t<i.length;t++)r.indexOf(i[t])<0&&Object.prototype.propertyIsEnumerable.call(o,i[t])&&(e[i[t]]=o[i[t]])}return e}(o,["condiciones"]);this.persona=r})}guardar(){const o=Object.assign({},this.miFormulario.value);delete o.condiciones,this.persona=o}}return o.\u0275fac=function(r){return new(r||o)(n.Gb(t.e))},o.\u0275cmp=n.Ab({type:o,selectors:[["app-switches"]],decls:51,vars:8,consts:[[3,"formGroup","ngSubmit"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],[1,"form-check"],["type","radio","value","M","formControlName","genero","id","radioMasculino",1,"form-check-input"],["for","radioMasculino",1,"form-check-label"],["type","radio","value","F","formControlName","genero","id","radioFemenino",1,"form-check-input"],["for","radioFemenino",1,"form-check-label"],[1,"form-check","form-switch","mt-2"],["type","checkbox","formControlName","notificaciones","id","flexSwitchCheckChecked",1,"form-check-input"],["for","flexSwitchCheckChecked",1,"form-check-label"],["type","checkbox","formControlName","condiciones","id","flexCheckDefault",1,"form-check-input"],["for","flexCheckDefault",1,"form-check-label"],[1,"row"],[1,"col"],["type","submit",1,"btn","btn-primary","float-end"]],template:function(o,r){1&o&&(n.Jb(0,"h2"),n.ec(1,"Reactivos: Switches"),n.Ib(),n.Hb(2,"hr"),n.Jb(3,"form",0),n.Qb("ngSubmit",function(){return r.guardar()}),n.Jb(4,"div",1),n.Jb(5,"label",2),n.ec(6,"G\xe9nero"),n.Ib(),n.Jb(7,"div",3),n.Jb(8,"div",4),n.Hb(9,"input",5),n.Jb(10,"label",6),n.ec(11," Masculino "),n.Ib(),n.Ib(),n.Jb(12,"div",4),n.Hb(13,"input",7),n.Jb(14,"label",8),n.ec(15," Femenino "),n.Ib(),n.Ib(),n.Ib(),n.Ib(),n.Jb(16,"div",1),n.Jb(17,"label",2),n.ec(18,"Notificaciones"),n.Ib(),n.Jb(19,"div",3),n.Jb(20,"div",9),n.Hb(21,"input",10),n.Jb(22,"label",11),n.ec(23,"Quiero recibir notificaciones"),n.Ib(),n.Ib(),n.Ib(),n.Ib(),n.Jb(24,"div",1),n.Hb(25,"label",2),n.Jb(26,"div",3),n.Jb(27,"div",4),n.Hb(28,"input",12),n.Jb(29,"label",13),n.ec(30," T\xe9rminos y condiciones de uso "),n.Ib(),n.Ib(),n.Ib(),n.Ib(),n.Jb(31,"div",14),n.Jb(32,"div",15),n.Jb(33,"button",16),n.ec(34," Guardar "),n.Ib(),n.Ib(),n.Ib(),n.Ib(),n.Jb(35,"h5"),n.ec(36,"Valor del formulario"),n.Ib(),n.Jb(37,"pre"),n.ec(38),n.Tb(39,"json"),n.Ib(),n.Hb(40,"br"),n.Jb(41,"h5"),n.ec(42,"Persona"),n.Ib(),n.Jb(43,"pre"),n.ec(44),n.Tb(45,"json"),n.Ib(),n.Hb(46,"br"),n.Jb(47,"h5"),n.ec(48,"Valid"),n.Ib(),n.Jb(49,"pre"),n.ec(50),n.Ib()),2&o&&(n.wb(3),n.Vb("formGroup",r.miFormulario),n.wb(35),n.fc(n.Ub(39,4,r.miFormulario.value)),n.wb(6),n.fc(n.Ub(45,6,r.persona)),n.wb(6),n.fc(r.miFormulario.valid))},directives:[t.u,t.m,t.h,t.q,t.c,t.l,t.g,t.a],pipes:[i.e],encapsulation:2}),o})()},{path:"**",redirectTo:"basicos"}]}];let p=(()=>{class o{}return o.\u0275mod=n.Eb({type:o}),o.\u0275inj=n.Db({factory:function(r){return new(r||o)},imports:[[b.c.forChild(m)]]}),o})(),d=(()=>{class o{}return o.\u0275mod=n.Eb({type:o}),o.\u0275inj=n.Db({factory:function(r){return new(r||o)},imports:[[i.b,t.r,p]]}),o})()}}]);