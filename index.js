let num=[];
let turnos=0;
let agregarnum=[]
let agregarnum1=[]
let agregarnum2=[]
let agregarnum3=[]
let num1=0
let points1=0
let points2=0
let points3=0
let points4=0
let rowq=0
let mostrarturnos= document.getElementById('turnos')
for (i=1;i<=50;i++){
    num.push(i)
}
num = num.sort(()=>{return Math.random()-0.5})
var formulario = document.getElementById('formulario'); 
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 
        let nombreIngresado1 = document.getElementById("jugador1").value;
        let nombreIngresado2 = document.getElementById("jugador2").value;
        let nombreIngresado3 = document.getElementById("jugador3").value;
        let nombreIngresado4 = document.getElementById("jugador4").value;
      
        window.localStorage.setItem("nombre", nombreIngresado1);
        window.localStorage.setItem("nombre1", nombreIngresado2);
        window.localStorage.setItem("nombre2", nombreIngresado3);
        window.localStorage.setItem("nombre3", nombreIngresado4);
      
        window.localStorage.setItem("pts", points1);
        window.localStorage.setItem("pts1", points2);
        window.localStorage.setItem("pts2", points3);
        window.localStorage.setItem("pts3", points4);
      
        var datos = [
          ["Jugador", "Puntos"],
          [window.localStorage.getItem("nombre"), window.localStorage.getItem("pts")],
          [window.localStorage.getItem("nombre1"), window.localStorage.getItem("pts1")],
          [window.localStorage.getItem("nombre2"), window.localStorage.getItem("pts2")],
          [window.localStorage.getItem("nombre3"), window.localStorage.getItem("pts3")]
        ];
        var tablapts = document.createElement("table");
        for (var i = 0; i < datos.length; i++) {
          var filapts = document.createElement("tr");
          filapts.id = "row" + rowq;
          rowq++
          for (var j = 0; j < datos[i].length; j++) {
            var celdapts = document.createElement("td");
            celdapts.textContent = datos[i][j];
            if (j === 1) {
              celdapts.id = datos[i][j]; 
            }
            filapts.appendChild(celdapts);
          }
          tablapts.appendChild(filapts);
        }
    
    document.body.appendChild(tablapts);
    
});


function ocultar(){
    const inputNombre = document.getElementById('nombre');
    inputNombre.style.visibility = 'hidden'; 
}

function ocultarBotonTabla() {
    document.getElementById("tabla").style.display = "none";
    document.getElementById("tabla2").style.display = "none";
    document.getElementById("tabla3").style.display ="none";
}

function crear_tablero(m) { 
    //primer tablero
    for (agregarnum.length;agregarnum.length<m*m;){
        let a=(num[Math.floor(Math.random()*(49))+1])
        if (agregarnum.includes(a)!=true){
            agregarnum.push(a)}

    }
    var matriz = []
    var con = 0
    for (var i = 0; i < m; i++) {
        var array = new Array()
        if(i % 2 == 0) {
            for (var j = 0; j < m; j++) {
                array[j] = agregarnum[con];
                con++;
            }
        } else {
            for (var j = m-1; j >= 0; j--) {
                array[j] = agregarnum[con];
                con++;
            }
        }
        matriz.push(array)
    }
    const tablaDiv = document.getElementById("tabla1");
    const tabla = document.createElement("table");
    tabla.border = "1"; 

    for (let i = 0; i < m; i++) {
        const fila = document.createElement("tr");
        for (let j = 0; j < m; j++) {
            const celda = document.createElement("td");
            celda.textContent = matriz[i][j]; 
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    tablaDiv.appendChild(tabla);


    //segundo tablero
    for (agregarnum1.length;agregarnum1.length<m*m;){
        let a=(num[Math.floor(Math.random()*(49))+1])
        if (agregarnum1.includes(a)!=true){
            agregarnum1.push(a)}

    }
    var matriz = []
    var con = 0
    for (var i = 0; i < m; i++) {
        var array = new Array()
        if(i % 2 == 0) {
            for (var j = 0; j < m; j++) {
                array[j] = agregarnum1[con];
                con++;
            }
        } else {
            for (var j = m-1; j >= 0; j--) {
                array[j] = agregarnum1[con];
                con++;
            }
        }
        matriz.push(array)
    }
    const tablaDiv1 = document.getElementById("tabla5");
    const tabla1 = document.createElement("table");
    tabla1.border = "1"; 


    
    for (let i = 0; i < m; i++) {
        const fila = document.createElement("tr");
        for (let j = 0; j < m; j++) {
            const celda = document.createElement("td");
            celda.textContent = matriz[i][j]; 
            fila.appendChild(celda);
        }
        tabla1.appendChild(fila);
    }
    tablaDiv1.appendChild(tabla1);

    //tercer tablero
    for (agregarnum2.length;agregarnum2.length<m*m;){
        let a=(num[Math.floor(Math.random()*(49))+1])
        if (agregarnum2.includes(a)!=true){
            agregarnum2.push(a)}

    }
    var matriz = []
    var con = 0
    for (var i = 0; i < m; i++) {
        var array = new Array()
        if(i % 2 == 0) {
            for (var j = 0; j < m; j++) {
                array[j] = agregarnum2[con];
                con++;
            }
        } else {
            for (var j = m-1; j >= 0; j--) {
                array[j] = agregarnum2[con];
                con++;
            }
        }
        matriz.push(array)
    }
    const tablaDiv2 = document.getElementById("tabla6");
    const tabla2 = document.createElement("table");
    tabla2.border = "1"; 

    for (let i = 0; i < m; i++) {
        const fila = document.createElement("tr");
        for (let j = 0; j < m; j++) {
            const celda = document.createElement("td");
            celda.textContent = matriz[i][j]; 
            fila.appendChild(celda);
        }
        tabla2.appendChild(fila);
    }
    tablaDiv2.appendChild(tabla2);
    

    // Cuarto tablero
    for (agregarnum3.length;agregarnum3.length<m*m;){
        let a=(num[Math.floor(Math.random()*(49))+1])
        if (agregarnum3.includes(a)!=true){
            agregarnum3.push(a)}

    }
    var matriz = []
    var con = 0
    for (var i = 0; i < m; i++) {
        var array = new Array()
        if(i % 2 == 0) {
            for (var j = 0; j < m; j++) {
                array[j] = agregarnum3[con];
                con++;
            }
        } else {
            for (var j = m-1; j >= 0; j--) {
                array[j] = agregarnum3[con];
                con++;
            }
        }
        matriz.push(array)
    }
    const tablaDiv3 = document.getElementById("tabla7");
    const tabla3 = document.createElement("table");
    tabla3.border = "1"; 

    for (let i = 0; i < m; i++) {
        const fila = document.createElement("tr");
        for (let j = 0; j < m; j++) {
            const celda = document.createElement("td");
            celda.textContent = matriz[i][j]; 
            fila.appendChild(celda);
        }
        tabla3.appendChild(fila);
    }
    
    tablaDiv3.appendChild(tabla3);
    return agregarnum
}
function generar_numero(){

    while (turnos<=25){
    var tablabing=document.getElementById('tabla1');
    var tablabing1=document.getElementById('tabla5');
    var tablabing2=document.getElementById('tabla6');
    var tablabing3=document.getElementById('tabla7');
    
    function hasSameColorColumns(table) {// no me funciono
        const refColor = "rgb(208, 224, 204)"
        const targetCells = table.getElementsByTagName("td");
        const columnCount =document.getElementById("row1").cells.length;
      
        for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
          let allSameColor = true;
      
          for (let i = 0; i < targetCells.length; i++) {
            if (targetCells[i].cellIndex !== columnIndex) continue;
      
            if (
              window.getComputedStyle(targetCells[i], null).backgroundColor !== refColor
            ) {
              allSameColor = false;
              break;
            }
          }
      
          if (allSameColor) return true;
        }
      
        return false;
      }
  
    
    function sameColor(row) {//funciono
        const refColor = "rgb(208, 224, 204)"
        for (let i = 0; i < row.cells.length; i++) {
          if (window.getComputedStyle(row.cells[i], null).backgroundColor !== refColor) {
            
            return false;
          }
        }
        for (let i = 0; i < row.cells.length; i++) {
            row.cells[i].style.backgroundColor = "blue";
          }
        return true;
      }
  
   
    turnos++;// para añadir por cada vez que le des a la esfera un turno
    mostrarturnos.innerHTML = `Turnos: ${turnos}` ;
    for (i=0;i<=agregarnum.length;i++){
        if (agregarnum[i]===num[turnos]){
            
    const filas = tablabing.getElementsByTagName("tr");
    const cols= tablabing.getElementsByTagName("th")
    for (const fila of filas) {
    const celdas = fila.getElementsByTagName("td");
    for (const celda of celdas) {
        if (celda.innerText==num[turnos]){
           
           
            celda.style.backgroundColor ="rgb(208, 224, 204)";
    }
}
}



  //suma los puntos de fila  
for (const fila of filas){
    if (sameColor(fila)){
        const cell = document.getElementById("row1");
        const cell1= cell.cells[1]
        const currentValue = parseInt(cell1.textContent, 10);
        cell1.textContent = currentValue + 1;
    }
    }
        }
    }
    for (i=0;i<=agregarnum1.length;i++){
        if (agregarnum1[i]===num[turnos]){
            
    const filas1 = tablabing1.getElementsByTagName("tr");
    const rows1= tablabing1.getElementsByTagName("th")
    for (const fila1 of filas1) {
    const celdas1 = fila1.getElementsByTagName("td");
    for (const celda1 of celdas1) {
        if (celda1.innerText==num[turnos]){
           
           
            celda1.style.backgroundColor ="rgb(208, 224, 204)";
    }
}
}
for (const fila1 of filas1){
    if (sameColor(fila1)){
        const cell = document.getElementById("row2");
        const cell1= cell.cells[1]
        const currentValue = parseInt(cell1.textContent, 10);
        cell1.textContent = currentValue + 1;
    }
    }
        }
    }
    for (i=0;i<=agregarnum2.length;i++){
        if (agregarnum2[i]===num[turnos]){
            
    const filas2 = tablabing2.getElementsByTagName("tr");
    const rows2= tablabing2.getElementsByTagName("th")
    for (const fila2 of filas2) {
    const celdas2 = fila2.getElementsByTagName("td");
    for (const celda2 of celdas2) {
        if (celda2.innerText==num[turnos]){
            
           
            celda2.style.backgroundColor ="rgb(208, 224, 204)";
    }
}
}   
for (const fila2 of filas2){
    if (sameColor(fila2)){
        const cell = document.getElementById("row3");
        const cell1= cell.cells[1]
        const currentValue = parseInt(cell1.textContent, 10);
        cell1.textContent = currentValue + 1;
    }
    }
        }
    }
    for (i=0;i<=agregarnum3.length;i++){
        if (agregarnum3[i]===num[turnos]){
            
    const filas3 = tablabing3.getElementsByTagName("tr");
    const rows3= tablabing3.getElementsByTagName("th")
    for (const fila3 of filas3) {
    const celdas3 = fila3.getElementsByTagName("td");
    for (const celda3 of celdas3) {
        if (celda3.innerText==num[turnos]){
            
           
            celda3.style.backgroundColor ="rgb(208, 224, 204)";
    }
    
}
}
for (const fila3 of filas3){
    if (sameColor(fila3)){
        const cell = document.getElementById("row4");
        const cell1= cell.cells[1]
        const currentValue = parseInt(cell1.textContent, 10);
        cell1.textContent = currentValue + 1;
    }
    }
}
}
    //para mostrar el numero en la esfera
    return document.getElementById("sphere").innerHTML = num[turnos];
    

}
}
// Voy a ser completamente sincero me confie , lo empece ayer, hasta ayer no sabia nada de html java script y css, 
//se que el codigo esta completamente hecho un desastre ,hay unas cosas q funcionan otras muchas que me faltan, 
//falta : puntos por columna, interfaces bonitas y entendible,el poder cambiar de tablero y no mostrar los cuatro, quien ha ganado mas,
//puntos por diagonal, y por tablero lleno, pero bue el siguiente si me preparare
//el codigo parece echo por un  niño de 12 años(no de descendencia asiatica)

