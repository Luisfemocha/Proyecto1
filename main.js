const fs= require("fs");
const insc={
	id:{
		demand: true,
		alias: "i"
	},
	nombre:{
		demand: true,
		alias: "n"
	},
	cc:{
		demand: true,
		alias: "x"
	}
}
const argv= require("yargs")
			.command("Inscripción.", "Se inscribirá a un curso.", insc)
			.argv

let cursos= [
{
	idC: 0,
	name: "Curso Node.JS",
	time: 32,
	price: 0
},
{
	idC: 1,
	time: 64,
	price: 200000,
	name: "Inglés"
},
{
	idC: 2,
	time: 32,
	price: 150000,
	name: "Bolsa de valores"
}];

if(argv._[0] != "inscribir"){ //print de todos los cursos
	console.log("Estos son los cursos disponibles. \n")
	for (i=0; i<cursos.length; i++){
		(function(i){
			setTimeout(function(){
				console.log("El curso con el id "+ cursos[i].idC + " se llama " + cursos[i].name + ".");
				console.log("Tiene una duración de "+cursos[i].time+" horas y un valor de $"+cursos[i].price+" pesos. \n");
			},2000 + 2000*i);
		})(i);
	}
}

else{ //inscripción
	cc=argv.x;
	nombre=argv.n;
	if(cc!=undefined && nombre!=undefined ){
		rich=false;
		for (i=0; i<cursos.length; i++){
			if (cursos[i].idC == argv.i){
				t="El estudiante "+argv.n+" con cédula "+argv.x+"\nSe ha matriculado en el curso "+cursos[i].name+"\nQue tiene una duración de "+cursos[i].time+" horas y un valor de $"+cursos[i].price+" pesos.";
				fs.writeFile("matricula.txt", t, (err)=>{
					if(err) throw (err);
					console.log("El estudiante se ha matriculado, archivo de matrícula creado.")
				});
				rich=true;
				break;
			}
		}
		if(! rich){
			console.log("El id ingresado no es válido, por favor ingrese un id válido.")
		
			console.log("Estos son los cursos disponibles. \n")
			for (i=0; i<cursos.length; i++){
				(function(i){
					setTimeout(function(){
						console.log("El curso con el id "+ cursos[i].idC + " se llama " + cursos[i].name + ".");
						console.log("Tiene una duración de "+cursos[i].time+" horas y un valor de $"+cursos[i].price+" pesos. \n");
					},2000 + 2000*i);
				})(i);
			}
		}
	}
	else{
		if(cc==undefined && nombre==undefined){
			console.log("No ha ingresado una cédula ni un nombre para la inscripción, por favor trate de nuevo.");
		}
		else if(cc==undefined){
			console.log("No ha ingresado una cédula para la inscripción, por favor trate de nuevo.");
		}
		else{
			console.log("No ha ingresado un nombre para la inscripción, por favor trate de nuevo.");
		}
	}
}