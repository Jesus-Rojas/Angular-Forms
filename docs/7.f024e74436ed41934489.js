(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{fo52:function(e,o,n){"use strict";n.r(o),n.d(o,"TemplateModule",function(){return f});var r=n("SVse"),i=n("s7LF"),b=n("iInd"),t=n("8Y7J");let c=(()=>{class e{constructor(){}validate(e){return e.value<this.minimo?{customMin:!0}:null}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275dir=t.Bb({type:e,selectors:[["","customMin","","ngModel",""]],inputs:{minimo:"minimo"},features:[t.vb([{provide:i.k,useExisting:e,multi:!0}])]}),e})();const l=["miFormulario"];function a(e,o){1&e&&(t.Jb(0,"span",12),t.ec(1," Debe de ser de 3 letras "),t.Ib())}function s(e,o){1&e&&(t.Jb(0,"span",12),t.ec(1," El precio debe de ser 0 o mayor "),t.Ib())}function d(e,o){1&e&&(t.Jb(0,"span",14),t.ec(1," Este campo es obligatorio "),t.Ib())}function u(e,o){if(1&e){const e=t.Kb();t.Jb(0,"div",15),t.Jb(1,"input",16),t.Qb("ngModelChange",function(e){return o.$implicit.nombre=e}),t.Ib(),t.Jb(2,"button",17),t.Qb("click",function(){t.ac(e);const n=o.index;return t.Sb().eliminar(n)}),t.ec(3," Eliminar "),t.Ib(),t.Ib()}if(2&e){const e=o.$implicit,n=o.index;t.wb(1),t.Wb("name","favorito_",n,""),t.Vb("ngModel",e.nombre)}}const m=[{path:"",children:[{path:"basicos",component:(()=>{class e{constructor(){this.initForm={producto:"RTX 4080ti",precio:10,existencias:10}}ngOnInit(){}nombreValido(){var e,o,n,r;return(null===(o=null===(e=this.miFormulario)||void 0===e?void 0:e.controls.producto)||void 0===o?void 0:o.invalid)&&(null===(r=null===(n=this.miFormulario)||void 0===n?void 0:n.controls.producto)||void 0===r?void 0:r.touched)}precioValido(){var e,o,n,r;return(null===(o=null===(e=this.miFormulario)||void 0===e?void 0:e.controls.precio)||void 0===o?void 0:o.touched)&&(null===(r=null===(n=this.miFormulario)||void 0===n?void 0:n.controls.precio)||void 0===r?void 0:r.value)<0}guardar(){console.log("Posteo correcto"),this.miFormulario.resetForm({producto:"Algo",precio:0,existencias:0})}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Ab({type:e,selectors:[["app-basicos"]],viewQuery:function(e,o){if(1&e&&t.hc(l,!0),2&e){let e;t.Yb(e=t.Rb())&&(o.miFormulario=e.first)}},decls:52,vars:16,consts:[[1,"row"],[1,"col"],["autocomplete","off",3,"ngSubmit"],["miFormulario","ngForm"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","name","producto","placeholder","Nombre del producto","required","","minlength","3",1,"form-control",3,"ngModel"],["class","form-text text-danger",4,"ngIf"],["type","number","name","precio","placeholder","Precio del producto","required","","min","0",1,"form-control",3,"ngModel"],["type","number","name","existencias","customMin","","placeholder","Existencias del producto","required","",1,"form-control",3,"ngModel","minimo"],["type","submit",1,"btn","btn-primary","float-end",3,"disabled"],[1,"form-text","text-danger"]],template:function(e,o){if(1&e&&(t.Jb(0,"h2"),t.ec(1,"Template: B\xe1sicos"),t.Ib(),t.Hb(2,"hr"),t.Jb(3,"div",0),t.Jb(4,"div",1),t.Jb(5,"form",2,3),t.Qb("ngSubmit",function(){return o.guardar()}),t.Jb(7,"div",4),t.Jb(8,"label",5),t.ec(9,"Producto"),t.Ib(),t.Jb(10,"div",6),t.Hb(11,"input",7),t.dc(12,a,2,0,"span",8),t.Ib(),t.Ib(),t.Jb(13,"div",4),t.Jb(14,"label",5),t.ec(15,"Precio"),t.Ib(),t.Jb(16,"div",6),t.Hb(17,"input",9),t.dc(18,s,2,0,"span",8),t.Ib(),t.Ib(),t.Jb(19,"div",4),t.Jb(20,"label",5),t.ec(21,"Existencias"),t.Ib(),t.Jb(22,"div",6),t.Hb(23,"input",10),t.Ib(),t.Ib(),t.Jb(24,"div",0),t.Jb(25,"div",1),t.Jb(26,"button",11),t.ec(27," Guardar "),t.Ib(),t.Ib(),t.Ib(),t.Ib(),t.Ib(),t.Ib(),t.Jb(28,"div",0),t.Jb(29,"div",1),t.Jb(30,"span"),t.ec(31,"Valid"),t.Ib(),t.Jb(32,"pre"),t.ec(33),t.Ib(),t.Jb(34,"span"),t.ec(35,"Pristine"),t.Ib(),t.Jb(36,"pre"),t.ec(37),t.Ib(),t.Jb(38,"span"),t.ec(39,"Touched"),t.Ib(),t.Jb(40,"pre"),t.ec(41),t.Ib(),t.Jb(42,"span"),t.ec(43,"Value"),t.Ib(),t.Jb(44,"pre"),t.ec(45),t.Tb(46,"json"),t.Ib(),t.Jb(47,"span"),t.ec(48,"CustomDirective"),t.Ib(),t.Jb(49,"pre"),t.ec(50),t.Tb(51,"json"),t.Ib(),t.Ib(),t.Ib()),2&e){const e=t.Zb(6);t.wb(11),t.Vb("ngModel",o.initForm.producto),t.wb(1),t.Vb("ngIf",o.nombreValido()),t.wb(5),t.Vb("ngModel",o.initForm.precio),t.wb(1),t.Vb("ngIf",o.precioValido()),t.wb(5),t.Vb("ngModel",o.initForm.existencias)("minimo",0),t.wb(3),t.Vb("disabled",e.invalid),t.wb(7),t.fc(e.valid),t.wb(4),t.fc(e.pristine),t.wb(4),t.fc(e.touched),t.wb(4),t.fc(t.Ub(46,12,e.value)),t.wb(5),t.fc(t.Ub(51,14,null==e.controls.existencias?null:e.controls.existencias.errors))}},directives:[i.u,i.m,i.n,i.c,i.s,i.j,i.l,i.o,r.j,i.p,c],pipes:[r.e],encapsulation:2}),e})()},{path:"dinamicos",component:(()=>{class e{constructor(){this.nuevoJuego="",this.persona={nombre:"Fernando",favoritos:[{id:1,nombre:"Metal Gear"},{id:2,nombre:"Death Stranding"}]}}agregarJuego(){this.persona.favoritos.push(Object.assign({},{id:this.persona.favoritos.length+1,nombre:this.nuevoJuego})),this.nuevoJuego=""}eliminar(e){this.persona.favoritos.splice(e,1)}guardar(){console.log("formulario posteado")}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Ab({type:e,selectors:[["app-dinamicos"]],decls:35,vars:8,consts:[["autocomplete","off",3,"ngSubmit"],["miFormulario","ngForm"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["placeholder","Nombre de la persona","name","nombre","required","",1,"form-control",3,"ngModel"],["class","form-text text-danger",4,"ngIf"],[1,"input-group"],["placeholder","Agregar favorito","name","nuevoJuego",1,"form-control",3,"ngModel","ngModelChange","keyup.enter"],["type","button",1,"btn","btn-outline-primary",3,"click"],["class","input-group mb-1",4,"ngFor","ngForOf"],[1,"row"],[1,"col-sm-12"],["type","button",1,"btn","btn-primary","float-end",3,"disabled","click"],[1,"form-text","text-danger"],[1,"input-group","mb-1"],["required","",1,"form-control",3,"ngModel","name","ngModelChange"],["type","button",1,"btn","btn-outline-danger",3,"click"]],template:function(e,o){if(1&e&&(t.Jb(0,"h2"),t.ec(1,"Template: "),t.Jb(2,"small"),t.ec(3," Din\xe1micos "),t.Ib(),t.Ib(),t.Hb(4,"hr"),t.Jb(5,"form",0,1),t.Qb("ngSubmit",function(){return o.guardar()}),t.Jb(7,"div",2),t.Jb(8,"label",3),t.ec(9,"Nombre"),t.Ib(),t.Jb(10,"div",4),t.Hb(11,"input",5),t.dc(12,d,2,0,"span",6),t.Ib(),t.Ib(),t.Jb(13,"div",2),t.Jb(14,"label",3),t.ec(15,"Agregar"),t.Ib(),t.Jb(16,"div",4),t.Jb(17,"div",7),t.Jb(18,"input",8),t.Qb("ngModelChange",function(e){return o.nuevoJuego=e})("keyup.enter",function(){return o.agregarJuego()}),t.Ib(),t.Jb(19,"button",9),t.Qb("click",function(){return o.agregarJuego()}),t.ec(20," Agregar "),t.Ib(),t.Ib(),t.Ib(),t.Ib(),t.Jb(21,"div",2),t.Jb(22,"label",3),t.ec(23,"Favoritos"),t.Ib(),t.Jb(24,"div",4),t.dc(25,u,4,2,"div",10),t.Ib(),t.Ib(),t.Jb(26,"div",11),t.Jb(27,"div",12),t.Jb(28,"button",13),t.Qb("click",function(){return o.guardar()}),t.ec(29," Guardar "),t.Ib(),t.Ib(),t.Ib(),t.Ib(),t.Jb(30,"span"),t.ec(31,"Persona"),t.Ib(),t.Jb(32,"pre"),t.ec(33),t.Tb(34,"json"),t.Ib()),2&e){const e=t.Zb(6);t.wb(11),t.Vb("ngModel",o.persona.nombre),t.wb(1),t.Vb("ngIf",(null==e.controls.nombre?null:e.controls.nombre.errors)&&(null==e.controls.nombre?null:e.controls.nombre.touched)),t.wb(6),t.Vb("ngModel",o.nuevoJuego),t.wb(7),t.Vb("ngForOf",o.persona.favoritos),t.wb(3),t.Vb("disabled",e.invalid),t.wb(5),t.fc(t.Ub(34,6,o.persona))}},directives:[i.u,i.m,i.n,i.c,i.s,i.l,i.o,r.j,r.i],pipes:[r.e],encapsulation:2}),e})()},{path:"switches",component:(()=>{class e{constructor(){this.persona={genero:"F",notificaciones:!0},this.terminosYCondiciones=!1}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Ab({type:e,selectors:[["app-switches"]],decls:60,vars:15,consts:[["miFormulario","ngForm"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],[1,"form-check"],["type","radio","value","M","name","radioGenero","id","radioMasculino","required","",1,"form-check-input",3,"ngModel","ngModelChange"],["for","radioMasculino",1,"form-check-label"],["type","radio","value","F","name","radioGenero","id","radioFemenino","required","",1,"form-check-input",3,"ngModel","ngModelChange"],["for","radioFemenino",1,"form-check-label"],[1,"form-check","form-switch","mt-2"],["type","checkbox","name","notificaciones","id","flexSwitchCheckChecked",1,"form-check-input",3,"ngModel","ngModelChange"],["for","flexSwitchCheckChecked",1,"form-check-label"],["type","checkbox","name","terminos","id","flexCheckDefault","required","",1,"form-check-input",3,"ngModel","ngModelChange"],["for","flexCheckDefault",1,"form-check-label"],[1,"row"],[1,"col"],[1,"btn","btn-primary","float-end",3,"disabled"]],template:function(e,o){if(1&e&&(t.Jb(0,"h2"),t.ec(1,"Template: Switches"),t.Ib(),t.Hb(2,"hr"),t.Jb(3,"form",null,0),t.Jb(5,"div",1),t.Jb(6,"label",2),t.ec(7,"G\xe9nero"),t.Ib(),t.Jb(8,"div",3),t.Jb(9,"div",4),t.Jb(10,"input",5),t.Qb("ngModelChange",function(e){return o.persona.genero=e}),t.Ib(),t.Jb(11,"label",6),t.ec(12," Masculino "),t.Ib(),t.Ib(),t.Jb(13,"div",4),t.Jb(14,"input",7),t.Qb("ngModelChange",function(e){return o.persona.genero=e}),t.Ib(),t.Jb(15,"label",8),t.ec(16," Femenino "),t.Ib(),t.Ib(),t.Ib(),t.Ib(),t.Jb(17,"div",1),t.Jb(18,"label",2),t.ec(19,"Notificaciones"),t.Ib(),t.Jb(20,"div",3),t.Jb(21,"div",9),t.Jb(22,"input",10),t.Qb("ngModelChange",function(e){return o.persona.notificaciones=e}),t.Ib(),t.Jb(23,"label",11),t.ec(24,"Quiero recibir notificaciones"),t.Ib(),t.Ib(),t.Ib(),t.Ib(),t.Jb(25,"div",1),t.Hb(26,"label",2),t.Jb(27,"div",3),t.Jb(28,"div",4),t.Jb(29,"input",12),t.Qb("ngModelChange",function(e){return o.terminosYCondiciones=e}),t.Ib(),t.Jb(30,"label",13),t.ec(31," T\xe9rminos y condiciones de uso "),t.Ib(),t.Ib(),t.Ib(),t.Ib(),t.Jb(32,"div",14),t.Jb(33,"div",15),t.Jb(34,"button",16),t.ec(35," Guardar "),t.Ib(),t.Ib(),t.Ib(),t.Ib(),t.Jb(36,"h5"),t.ec(37,"Valor del formulario"),t.Ib(),t.Jb(38,"pre"),t.ec(39),t.Tb(40,"json"),t.Ib(),t.Hb(41,"br"),t.Jb(42,"h5"),t.ec(43,"Persona"),t.Ib(),t.Jb(44,"pre"),t.ec(45),t.Tb(46,"json"),t.Ib(),t.Hb(47,"br"),t.Jb(48,"h5"),t.ec(49,"Valid"),t.Ib(),t.Jb(50,"pre"),t.ec(51),t.Ib(),t.Jb(52,"h5"),t.ec(53,"T\xe9rminos"),t.Ib(),t.Jb(54,"pre"),t.ec(55),t.Tb(56,"json"),t.Ib(),t.Hb(57,"br"),t.Jb(58,"pre"),t.ec(59,"Condiciones: "),t.Ib()),2&e){const e=t.Zb(4);t.wb(10),t.Vb("ngModel",o.persona.genero),t.wb(4),t.Vb("ngModel",o.persona.genero),t.wb(8),t.Vb("ngModel",o.persona.notificaciones),t.wb(7),t.Vb("ngModel",o.terminosYCondiciones),t.wb(5),t.Vb("disabled",e.invalid),t.wb(5),t.fc(t.Ub(40,9,e.value)),t.wb(6),t.fc(t.Ub(46,11,o.persona)),t.wb(6),t.fc(e.valid),t.wb(4),t.fc(t.Ub(56,13,null==e.controls||null==e.controls.terminos?null:e.controls.terminos.errors))}},directives:[i.u,i.m,i.n,i.q,i.c,i.s,i.l,i.o,i.a,i.b],pipes:[r.e],encapsulation:2}),e})()},{path:"**",redirectTo:"basicos"}]}];let p=(()=>{class e{}return e.\u0275mod=t.Eb({type:e}),e.\u0275inj=t.Db({factory:function(o){return new(o||e)},imports:[[b.c.forChild(m)]]}),e})(),f=(()=>{class e{}return e.\u0275mod=t.Eb({type:e}),e.\u0275inj=t.Db({factory:function(o){return new(o||e)},imports:[[r.b,i.i,p]]}),e})()}}]);