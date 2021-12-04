
let boton = document.getElementById("validar")
let cadena = ""
boton.addEventListener("click", () => {

    let h = document.getElementById("h").value
    let s = document.getElementById("s").value
    let v = document.getElementById("v").value

    if (h === "" || s === "" || v === "") {
        alert("Debe llenar todos los campos")
    } else {
        if (h > 360 || s > 100 || v > 100) {

            alert("Recuerde que H <= 360, Saturacion <= 100% y Brillo <= 100%")

        } else {

            cadena = h + "," + s + "%," + v+"%"


            //expresion regular 

            //[0-359],[0-100],[0-100] valido
            let regexhsv = new RegExp("^[0-9]{1,3}\,[0-9]{1,3}\%\,[0-9]{1,3}\%$")


            if (regexhsv.test(cadena)) {
                document.write("<h1>Jorge Enrique Villamil Borga</h1>" +
                    "<h2>18390063</h2>" +
                    "<h2>Ejercicio Expresiones Regulares, numero 11 Color HSV</h2>" +

                    "<h3>El color que ingreso es:</h3>" +

                    "<div class='colorc'>" +
                    " </div>" +
                    "<style>" +
                    ".colorc{" +
                    "height: 200px;" +
                    "width: 200;" +
                    "background-color: hsl(" + cadena + ");border:solid 10px black;}</style>" +
                    "<a href='index.html'>Regresar</a>"


                )


            } else {
                alert("Error RegEX: Valores no validos para color HSV!")
            }



        }
    }




})



