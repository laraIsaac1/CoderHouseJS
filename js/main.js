//function inicio()
//{
    let nombre = prompt(" Bienvenido! En esta sección le recomendaremos recetas segun sus preferencias. \n Por favor ingrese su nombre:");
    console.log(" El usuario que ingresó es: " + nombre)
    //}

function elegirSabor() 
{
  let sabor = 0
  sabor = parseInt(prompt("Un gusto " + nombre + "! \n Desea hacer una receta: \n 1-Dulce \n 2-Salada \n Ingrese el número correspondiente a la opción adecuada"))
  return sabor;
}

function menuDulce()
{
    let opcionDulce = prompt("Las opciones de postre para elegir son: \n 1-Alfajor de maicena \n 2-Lemon Pie \n  Elija la que más le guste para conocer sus ingredientes") // Elegí solo dos opciones para que no se haga tan largo el código

    if (opcionDulce == 1)
    {
        const aAlfajorMaicena = ["200 gr manteca", "200 gr harina 0000", "300 gr fécula de maíz", "1/2 cucharadita bicarbonato", "2 cucharaditas polvo de hornear", "150 gr azúcar", "3 yemas", "1 cucharadita esencia de vainilla", "1 cda ralladura de limón", "cantidad necesaria de dulce de leche repostero"]

        let nuevoIngAlfajor = ' '
        agregarIngrediente(nuevoIngAlfajor,aAlfajorMaicena, "RECETA DE ALFAJOR DE MAICENA (24 unidades)")

        confirm("--Procedimiento-- \n 1) Tamizar la harina, el almidón de maíz, el bicarbonato y el polvo de hornear. \n 2) En un bol batir la manteca con el azúcar.\n 3) Agregar las yemas de a una, luego la esencia y la ralladura de limón. \n 4) Incorporar los secos mientras se une con las manos formando un arenado húmedo. Terminar de unir sin amasar. Llevar a la heladera 30 minutos envuelta en film. \n 5) Estirar la masa y cortar círculos \n 6) Cocinar en horno medio pre-calentado a 180ºc durante unos 10 minutos. \n 7) Retirar de la placa con una espátula. \n 8) Dejar enfriar antes de armarlos. \n 9) Formar los alfajores uniendo dos tapitas con dulce de leche, y luego hacerlos rodar por coco rallado. ")

    } else if (opcionDulce ==2)
    {
        const aMasaLemon = ["200 gr. de harina leudante", "100gr. de maicena", "3 cucharadas de azucar", "150 gr. de manteca", "2 yemas", "3 o 4 cucharadas de leche"]

        const aCremaLemon = ["1 limón", "Cascara de 1 limón", "150 gr. de azúcar", "2 huevos", "2 cucharadas de harina", "50 gr. de manteca", "1 taza de agua"]

        let nuevoIngMasa = ' '
        agregarIngrediente(nuevoIngMasa,aMasaLemon, "RECETA MASA DE LEMON PIE")

        confirm("--Procedimiento masa-- \n 1) Mezclar la harina con la maicena en la mesa y en el centro la manteca derretida, el azucar y las yemas. \n 2) Unir los ingredientes, agregar 3 o 4 cucharadas de leche, hasta tener una masa suave.\n 3) Estirar sobre la mesa y forrar una tartera previamente enmantecado y enharinada, ponerla en el fondo del horno y cocinar a temperatura moderada hasta que se dore y dejar enfriar.")

        let nuevoIngCrema = ' '
        agregarIngrediente(nuevoIngCrema,aCremaLemon, "RECETA CREMA DE LEMON PIE")

        confirm("--Procedimiento crema-- \n 1) Colocar en un recipiente los huevos, azúcar y harina, mezclar bien. \n 2) Agregar el jugo de limón, cáscara rallada y agua. \n 3) Llevar a fuego moderado y cocinar revolviendo hasta que se espece. \n 4) Retirar, agregar la maneca, dejar disolver, mezclar unos minutos. 5) Finalmente verter la crema en la masa y hacer un merengue suizo para decorar (opcional)" )
    }

}

function menuSalado()
{
    let opcionSalado = prompt("Las opciones de menu salado para elegir son: \n 1-Tarta de calabaza y cebolla \n 2-Pastel de papa. \n Elija la que más le guste para conocer sus ingredientes")
    
    if (opcionSalado == 1)
    {
        const aTartaCalabaza = ["Tapa de tarta", "3 cebollas", "2 cebollitas de verdeo", "1 diente de ajo", "1 calabaza", "Queso a gusto", "2 huevos"]

        let nuevoIngTarta = ' '
        agregarIngrediente(nuevoIngTarta,aTartaCalabaza, "RECETA DE TARTA DE CALABAZA Y CEBOLLA")
        
        confirm("--Procedimiento-- \n 1) Cortar la calabaza en cubitos. Llevar al horno hasta dorar.\n 2) Cortar la cebolla en medios aros y picar la cebolla de verdeo \n 3) En una sartén, dorar el ajo y después agregar las dos cebollas y rehogar.\n 4) Disponer la tapa de tarta en una tartera, pinchar y llevar al horno para cocinar \n 5) Una vez que la calabaza está lista poner en un bowl y mezclar con las cebollas. \n 6) Batir los huevos y agregarlos al bowl junto con la muzzarella. \n 7) Mezclar la preparación y condimentar a gusto. \n 8) Retirar la tarta del horno y colocar el relleno. Espolvorear con queso de rallar y volver a llevar al horno hasta dorar")

    }else if (opcionSalado == 2)
    {
        const aPastelCarne = ["1 kg de papas", "500 g de carne molida", "1 cebolla", "2 huevos", "100 g de queso rallado", "Sal y pimienta al gusto"]

        let nuevoIngPastel = ' '
        agregarIngrediente(nuevoIngPastel,aPastelCarne, "RECETA DE PASTEL DE PAPA")
        
        confirm("--Procedimiento-- \n  1) Pela y hierve las papas en agua con sal hasta que estén tiernas. Luego, escúrrelas y haz un puré.\n 2) En una sartén, calienta un poco de aceite y sofríe la cebolla picada hasta que esté dorada. Agrega la carne molida, sal y pimienta, y cocina hasta que esté bien cocida. \n 3) En un molde, coloca la mitad del puré de papa. Agrega el relleno de carne y, si deseas, los huevos duros picados. Cubre con el resto del puré. \n 4) Lleva al horno precalentado a 180°C por 25-30 minutos, hasta que esté dorado. Si usas queso, ponlo 5 minutos antes de sacar del horno.")
    }
}
    

function agregarIngrediente(ingrediente,lista, mensaje)
{
    while (ingrediente != '*')
        {
            ingrediente= prompt( mensaje + " \n --Ingredientes-- \n >" + lista.join("\n >") + "\n \n Desea agregar otro ingrediente a la receta? Si su respuesta es NO, presione * y luego enter. Si su respuesta es SI, ingreselo a continuación")
            if(ingrediente != '*')
                {
                    lista.push(ingrediente)
                }
        }
}


    while (true)
    {
        //inicio()
        switch(elegirSabor())
        {
            case 1: menuDulce()
            break;

            case 2: menuSalado()
            break;

            default:
            break;
        }
    
    }