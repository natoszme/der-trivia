const _ = require("lodash");

const questions = [
  {
    "Pregunta Nº": 1,
    "Tema": "Política Nacional",
    "Pregunta": "¿En qué año se comenzó a aplicar el esquema de pago de ganancias conocido como la 'Tablita de Machinea'?",
    "Respuesta correcta": 2000,
    "Respuesta incorrecta 1": 1990,
    "Respuesta incorrecta 2": 1980,
    "Descripción": "La reforma tributaria impulsada por el gobierno de la Alianza fue aprobada por el Congreso en diciembre de 1999, pero empezó a regir a partir del año 2000"
  },
  {
    "Pregunta Nº": 2,
    "Tema": "Política Nacional",
    "Pregunta": "¿Quién es el presidente del PJ Bonaerense?",
    "Respuesta correcta": "Gustavo Menéndez",
    "Respuesta incorrecta 1": "Pablo Moyano",
    "Respuesta incorrecta 2": "Fernando Gray",
    "Descripción": "Gustavo Menéndez es intendente de Merlo, asumió como presidente del PJ bonaerense en diciembre de 2017"
  },
  {
    "Pregunta Nº": 3,
    "Tema": "Política Nacional",
    "Pregunta": "¿Quién fue el primer ministro de Economía de Néstor Kirchner en 2003?",
    "Respuesta correcta": "Roberto Lavagna",
    "Respuesta incorrecta 1": "Jorge Remes Lenicov",
    "Respuesta incorrecta 2": "Miguel Peirano",
    "Descripción": "Asumió como ministro de Economía y Producción en abril de 2002 durante la Presidencia interina de Duhalde. N. Kirchner lo confirmó en el cargo en 2003."
  },
  {
    "Pregunta Nº": 4,
    "Tema": "Política Nacional",
    "Pregunta": "¿Qué vicepresidente renunció en el año 2000?",
    "Respuesta correcta": "Carlos \"Chacho\" Álvarez",
    "Respuesta incorrecta 1": "Graciela Fernández Meijide",
    "Respuesta incorrecta 2": "José Machinea",
    "Descripción": "Carlos Álvarez renunció en forma indeclinable a su cargo el 6 de octubre de 2000."
  },
  {
    "Pregunta Nº": 5,
    "Tema": "Política Nacional",
    "Pregunta": "¿Quién ocupa el juzgado federal con compentencia en las elecciones?",
    "Respuesta correcta": "Romilda Servini de Cubría",
    "Respuesta incorrecta 1": "Daniel Rafecas",
    "Respuesta incorrecta 2": "Marcelo Martínez de Giorgi",
    "Descripción": "María Servini de Cubría ocupa el Juzgado Federal nro1 desde noviembre de 1990"
  },
  {
    "Pregunta Nº": 6,
    "Tema": "Política Nacional",
    "Pregunta": "¿En qué ciudad se organizó el cónclave de la UCR que definió la integración radical a Cambiemos, en 2015?",
    "Respuesta correcta": "Gualeguaychú",
    "Respuesta incorrecta 1": "Paraná",
    "Respuesta incorrecta 2": "Zárate",
    "Descripción": "En la Convención de Gualeguaychú, con el aval de 186 delegados sobre 330, la UCR decidió formar una alianza con el PRO y la Coalición Cívica que llamarían \"Cambiemos"
  },
  {
    "Pregunta Nº": 7,
    "Tema": "Política Nacional",
    "Pregunta": "¿Qué ministro compartieron la gestión de Mauricio Macri y en la de Cristina Kirchner?",
    "Respuesta correcta": "Lino Barañao",
    "Respuesta incorrecta 1": "Alberto Fernández",
    "Respuesta incorrecta 2": "Oscar Aguad",
    "Descripción": "Barañao fue único ministro que tuvo continuidad entre gestiones, ocupó el Ministerio de Ciencia durante más de 10 años"
  },
  {
    "Pregunta Nº": 8,
    "Tema": "Política Nacional",
    "Pregunta": "¿Qué ex-futbolistas fueron Secretarios de Deportes?",
    "Respuesta correcta": "Roberto Perfumo",
    "Respuesta incorrecta 1": "Norberto Alonso",
    "Respuesta incorrecta 2": "Diego Latorre",
    "Descripción": "Perfumo fue Secretario de Deportes durante la presidencia de Néstor Kirchner, fue sucedido por Claudio Morresi, otro ex futbolista."
  },
  {
    "Pregunta Nº": 9,
    "Tema": "Política Nacional",
    "Pregunta": "¿Quién es el gobernador de Misiones?",
    "Respuesta correcta": "Oscar Herrera Ahuad",
    "Respuesta incorrecta 1": "Maurice Closs",
    "Respuesta incorrecta 2": "Hugo Passalacqua",
    "Descripción": "Entre 2015 y 2019 fue vicegobernador, en las elecciones 2019 ganó con más del 72% de los votos."
  },
  {
    "Pregunta Nº": 10,
    "Tema": "Política Nacional",
    "Pregunta": "¿Quién es el gobernador de Chaco?",
    "Respuesta correcta": "Jorge Capitanich",
    "Respuesta incorrecta 1": "Domingo Peppo",
    "Respuesta incorrecta 2": "Gerardo Morales",
    "Descripción": "En 2019, Jorge Capitanich fue electo gobernador con más del 49% de los votos. \"Coqui\" ya había sido electo gobernador en 2007 y en 2015"
  },
  {
    "Pregunta Nº": 11,
    "Tema": "Política Nacional",
    "Pregunta": "¿Quién fue la primera gobernadorA electa de Argentina?",
    "Respuesta correcta": "Fabiana Ríos",
    "Respuesta incorrecta 1": "Lucía Corpacci",
    "Respuesta incorrecta 2": "Rosana Bertone",
    "Descripción": "Fabiana Ríos fue la primera mujer electa gobernadora de una provincia, Tierra del Fuego, en 2007"
  },
  {
    "Pregunta Nº": 12,
    "Tema": "Política Nacional",
    "Pregunta": "¿Qué candidato ocupó el primer puesto en las elecciones presidenciales de 2003?",
    "Respuesta correcta": "Carlos Menem",
    "Respuesta incorrecta 1": "Néstor Kirchner",
    "Respuesta incorrecta 2": "Ricardo López Murphy",
    "Descripción": "Menem obtuvo el 24% de los votos, frente al 22% de Kirchner y al 16% de López Murphy"
  },
  {
    "Pregunta Nº": 13,
    "Tema": "Política Nacional",
    "Pregunta": "¿Cuántas mujeres fueron electas gobernadoras de alguna provincia?",
    "Respuesta correcta": 6,
    "Respuesta incorrecta 1": 9,
    "Respuesta incorrecta 2": 19,
    "Descripción": "Fabiana Ríos (T. del Fuego), Lucía Corpacci (Catamarca), Claudia Ledesma Abdala (Santiago del Estero), Ma. Eugenia Vidal (Buenos Aires), Alicia Kirchner (Sta Cruz) y Rosana Bertone (T. del Fuego) encabezaron la fórmula para la gobernación y ganaron."
  },
  {
    "Pregunta Nº": 14,
    "Tema": "Política Nacional",
    "Pregunta": "¿Qué partido del Conurbano Bonaerense cuenta con el mismo intendente desde hace más de 20 años?",
    "Respuesta correcta": "San Isidro",
    "Respuesta incorrecta 1": "La Matanza",
    "Respuesta incorrecta 2": ".",
    "Descripción": "En 1999, Gustavo Posse fue electo Intendente de San Isidro y, desde entonces, ocupa el cargo. Antes de él, el distrito fue gobernado por su padre, Melchor Posse, durante 16 años."
  },
  {
    "Pregunta Nº": 15,
    "Tema": "Política Nacional",
    "Pregunta": "¿Cuántos Decretos de Necesidad y Urgencia (DNU) emitió Macri como Presidente?",
    "Respuesta correcta": "Más de 40",
    "Respuesta incorrecta 1": "Entre 20 y 40",
    "Respuesta incorrecta 2": "Menos de 20",
    "Descripción": "EXACTOS en 4 años, promedio por año"
  },
  {
    "Pregunta Nº": 16,
    "Tema": "Política Nacional",
    "Pregunta": "¿Cuántos Decretos de Necesidad y Urgencia (DNU) emitió Cristina Kirchner como Presidenta?",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": "EXACTOS en 4 años, promedio por año"
  },
  {
    "Pregunta Nº": 17,
    "Tema": "Política Nacional",
    "Pregunta": "De las siguientes provincias ¿cuál está gobernadas por Cambiemos?",
    "Respuesta correcta": "Jujuy",
    "Respuesta incorrecta 1": "Córdoba",
    "Respuesta incorrecta 2": "Tierra del Fuego",
    "Descripción": "Gerardo Morales es gobernador de Jujuy desde el 10 de diciembre de 2015"
  },
  {
    "Pregunta Nº": 18,
    "Tema": "Política Nacional",
    "Pregunta": "¿Quién fue la primera candidata a diputada en Argentina en el año 1919?",
    "Respuesta correcta": "Julieta Lanteri",
    "Respuesta incorrecta 1": "Alicia Moreau de Justo",
    "Respuesta incorrecta 2": "Elvira Rawson",
    "Descripción": "Lanteri es también la fundadora del Partido Feminista Nacional"
  },
  {
    "Pregunta Nº": 19,
    "Tema": "Política Nacional",
    "Pregunta": "¿Qué ministro de la actual Corte Suprema fue convencional constituyente en la reforma de 1994?",
    "Respuesta correcta": "Juan Carlos Maqueda",
    "Respuesta incorrecta 1": "Carlos Rosenkrantz",
    "Respuesta incorrecta 2": "Ricardo Lorenzetti",
    "Descripción": "En 1994, se reformó la Constitución Nacional. Entre lo integantes de la Convención Constituyentese encontraban los actuales jueces de la Corte Juan Maqueda y Horacio Rosatti"
  },
  {
    "Pregunta Nº": 20,
    "Tema": "Política Nacional",
    "Pregunta": "¿Cuántos ministerios existen actualmente en la Argentina?",
    "Respuesta correcta": 21,
    "Respuesta incorrecta 1": 16,
    "Respuesta incorrecta 2": 8,
    "Descripción": "Incluyendo a la Jefatura de gabinete, Argentina tiene 21 ministerios nacionales, un número superior al promedio del resto de los países de América Latina."
  },
  {
    "Pregunta Nº": 21,
    "Tema": "Política Nacional",
    "Pregunta": "¿Qué ciudadano argentino fue parlamentario, juez de la corte, gobernador, presidente y vicepresidente de la Nación?",
    "Respuesta correcta": "José Figueroa Alcorta",
    "Respuesta incorrecta 1": "Faustino Sarmiento",
    "Respuesta incorrecta 2": "Nadie",
    "Descripción": "Figuero Alcorta fue diputado nacional, senador nacional, gobernador de Córdoba, vicepresidente y presidente de la Nación. También, fue juez de la Corte Suprema."
  },
  {
    "Pregunta Nº": 22,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 23,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 24,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 25,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 26,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 27,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 28,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 29,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 30,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": "",
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 1,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo “dentro de poco llegaremos de Argentina a Japón en una hora volando en cohete por la estratosfera”?",
    "Respuesta correcta": "Carlos Menem",
    "Respuesta incorrecta 1": "Néstor Kirchner",
    "Respuesta incorrecta 2": "Mauricio Macri",
    "Descripción": "En 1996, el presidente Carlos Menem anticipó que \"en el corto plazo\" se iba a licitar un sistema de vuelos espaciales para comunicar Argentina con otros destinos, en tiempo récord"
  },
  {
    "Pregunta Nº": 2,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"el peronismo triunfará conmigo o sinmigo”?",
    "Respuesta correcta": "Herminio Iglesias",
    "Respuesta incorrecta 1": "Fernando Iglesias",
    "Respuesta incorrecta 2": "Evaristo Iglesias",
    "Descripción": "La frase corresponde a Herminio Iglesias, candidato a Gobernador bonaerense en la campaña de 1983"
  },
  {
    "Pregunta Nº": 3,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo “que se pierdan cien gobiernos, pero que se salven los principios”?",
    "Respuesta correcta": "Hipólito Yrigoyen",
    "Respuesta incorrecta 1": "Raúl Alfonsín",
    "Respuesta incorrecta 2": "Ricardo Alfonsín",
    "Descripción": "La frase está atribuida a Hipólito Irigoyen, en 1916, año en que ganó la presidencia argentina"
  },
  {
    "Pregunta Nº": 4,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo  “a vos no te va tan mal, gordito”?",
    "Respuesta correcta": "Raúl Alfonsín",
    "Respuesta incorrecta 1": "Patricia Bullrich",
    "Respuesta incorrecta 2": "Aníbal Fernández",
    "Descripción": "En un acto en Chos Malal, en 1987, en medio del discurso sobre el traslado de la Capital Federal a Viedma, Raúl Alfonsín le hizo este comentario a un asistente enojado."
  },
  {
    "Pregunta Nº": 5,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"debo ser la reencarnación de un gran arquitecto egipcio\"?",
    "Respuesta correcta": "Cristina Kirchner",
    "Respuesta incorrecta 1": "Guillermo Moreno",
    "Respuesta incorrecta 2": "Axel Kicillof",
    "Descripción": "En 2012, mientras anunciaca el polo audiovisual en la Isla de Marchi, CFK reveló su entusiasmo por construir y diseñar estructuras."
  },
  {
    "Pregunta Nº": 6,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quièn dijo \"qué lindo es dar buenas noticias\"?",
    "Respuesta correcta": "Fernando de la Rúa",
    "Respuesta incorrecta 1": "Eduardo Duhalde",
    "Respuesta incorrecta 2": "Mauricio Macri",
    "Descripción": "El entonces presidente Fernando de la Rúa, manifestó su felicidad en un spot en el que anunciaba el \"Blindaje 2000\", otorgado por el FMI, en diciembre del año 2000."
  },
  {
    "Pregunta Nº": 7,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"no habrá devaluación brusca, la tendencia de los últimos días se acaba esta semana”?",
    "Respuesta correcta": "Celestino Rodrigo",
    "Respuesta incorrecta 1": "Axel Kicillof",
    "Respuesta incorrecta 2": "Nicolás Dujovne",
    "Descripción": "Celestino Rodrigo, ministro de Economía de Martínez de Perón, es recordado por una brusca devaluación del peso de más del 60%, el \"Rodrigazo"
  },
  {
    "Pregunta Nº": 8,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Qué candidato hizo campaña \"por los niños pobres que tienen hambre y por los niños ricos que tienen tristeza”?",
    "Respuesta correcta": "Carlos Menem",
    "Respuesta incorrecta 1": "Eduardo Duhalde",
    "Respuesta incorrecta 2": "Fernando De la Rúa",
    "Descripción": "En la campaña presidencial de 1989, Carlos Menem hizo un enumeración la que también recordó a los jubilados, desempleados y personas sin techo"
  },
  {
    "Pregunta Nº": 9,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"si el mercado quiere dólares, le vamos a dar con el látigo”?",
    "Respuesta correcta": "José Machinea",
    "Respuesta incorrecta 1": "Guillermo Moreno",
    "Respuesta incorrecta 2": "Nicolás Dujovne",
    "Descripción": "José Luis Machinea, presidente del Banco Central , no pudo frenar a latigazos la corrida bancaria de 1989"
  },
  {
    "Pregunta Nº": 10,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"este viejo adversario despide a un amigo\"?",
    "Respuesta correcta": "Ricardo Balbín",
    "Respuesta incorrecta 1": "Juan Domingo Perón",
    "Respuesta incorrecta 2": "Arturo U. Illia",
    "Descripción": "En julio de 1974, Ricardo Balbín pronunció esta frase en el funeral de Perón, sacandosé el sombrero ante su viejo rival político"
  },
  {
    "Pregunta Nº": 11,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"aquí no hay crisis, ni problemas\" en octubre del 2000?",
    "Respuesta correcta": "Fernando De la Rúa",
    "Respuesta incorrecta 1": "Carlos Álvarez",
    "Respuesta incorrecta 2": "Eduardo Duhalde",
    "Descripción": "Fernando De la Rúa envió este mensaje a la ciudadanía para transmitir tranquilidad."
  },
  {
    "Pregunta Nº": 12,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quíen dijo \"señor Presidente: Jesús dijo a sus discípulos \"lo que haya que hacer, hagámoslo rápido\"?",
    "Respuesta correcta": "Miguel Ángel Pichetto",
    "Respuesta incorrecta 1": "Julio Cobos",
    "Respuesta incorrecta 2": "Ernesto Sanz",
    "Descripción": "En la sesión del Senado en la que se discutió la 125, esquema de retenciones móviles para el agro, Miguel Pichetto tuvo un momento bíblico justo antes del voto \"no positivo\" de Cobos"
  },
  {
    "Pregunta Nº": 13,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"aquí no hay crisis, ni problemas\" en octubre del 2000?",
    "Respuesta correcta": "Fernando De la Rúa",
    "Respuesta incorrecta 1": "Carlos Álvarez",
    "Respuesta incorrecta 2": "Eduardo Duhalde",
    "Descripción": "Fernando De la Rúa envió este mensaje a la ciudadanía para transmitir tranquilidad."
  },
  {
    "Pregunta Nº": 14,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"no me gusta el timbreo\"?",
    "Respuesta correcta": "Emilio Monzó",
    "Respuesta incorrecta 1": "Federico Pinedo",
    "Respuesta incorrecta 2": "Felipe Solá",
    "Descripción": "En una sesión de Diputados, los legisladores le pidieron al Presidente de la Cámara que llame al orden tocando la campana. Monzó respondió: \"¡no me gusta el timbreo!\"."
  },
  {
    "Pregunta Nº": 15,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"los bancos tendrán que abrir sus puertas y que sea lo que Dios quiera”?",
    "Respuesta correcta": "Eduardo Duhalde",
    "Respuesta incorrecta 1": "Mauricio Macri",
    "Respuesta incorrecta 2": "Alberto Fenández",
    "Descripción": "Luego del \"corralito\" y diciembre de 2001, el entonces presidente Eduardo Duhalde usó esta frase para presionar al Congreso y que apruebe sus reformas económicas."
  },
  {
    "Pregunta Nº": 16,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"los brasileros salieron de la selva\"?",
    "Respuesta correcta": "Alberto Fenández",
    "Respuesta incorrecta 1": "Mauricio Macri",
    "Respuesta incorrecta 2": "Néstor Kirchner",
    "Descripción": "En una conferencia de prensa, Alberto Fernández dijo \"los mexicanos salieron de los indios, los brasileros salieron de la selva, pero nosotros los argentinos llegamos de los barcos,"
  },
  {
    "Pregunta Nº": 17,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"\"En campaña saben hasta la fórmula de la Coca Cola, después no saben hacer ni un mate cocido\"?",
    "Respuesta correcta": "Cristina Kirchner",
    "Respuesta incorrecta 1": "Axel Kiciloff",
    "Respuesta incorrecta 2": "Eduardo Duhalde",
    "Descripción": "En 2014,  en un acto en Formosa, Cristina Kirchner se refirió a la diferencia entre un político en campaña y ese mismo político cuando ya fue electo."
  },
  {
    "Pregunta Nº": 18,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"Llevo en mis oídos la más maravillosa música que, para mí, es la palabra del pueblo argentino\"?",
    "Respuesta correcta": "Juan D. Perón",
    "Respuesta incorrecta 1": "Eva Perón",
    "Respuesta incorrecta 2": "Arturo Frondizi",
    "Descripción": "En 1974, al cierre del que sería su último discurso desde el balcón de la Rosada, Juan Domingo Perón pronunció esta frase, que sonó como un adiós."
  },
  {
    "Pregunta Nº": 19,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"hay que pasar el invierno\"?",
    "Respuesta correcta": "Alvaro Alsogaray",
    "Respuesta incorrecta 1": "Domingo Cavallo",
    "Respuesta incorrecta 2": "Martín Guzmán",
    "Descripción": "En 1959, el Ministro de Economía Álvaro Alsogaray presentó su \"“Plan de Estabilidad y Desarrollo”\" y el frío del invierno congeló los bolsillos."
  },
  {
    "Pregunta Nº": 20,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"“tenemos que tratar de no robar, por lo menos, dos años,\"?",
    "Respuesta correcta": "Luis Barrionuevo",
    "Respuesta incorrecta 1": "Hugo Moyano",
    "Respuesta incorrecta 2": "Elisa Carrió",
    "Descripción": "En 1990, en horario central de la televisión, el sindicalista Luis Barrionuevo presentó esta idea para \"sacar al país adelante\"."
  },
  {
    "Pregunta Nº": 21,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 22,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 23,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 24,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 25,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 26,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 27,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 28,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 29,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 30,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": "",
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 1,
    "Tema": "Legislativas",
    "Pregunta": "¿Quienes forman la Asamblea Legislativa?",
    "Respuesta correcta": "Diputados + Senado",
    "Respuesta incorrecta 1": "Senado + Gabinete",
    "Respuesta incorrecta 2": "sólo el Senado",
    "Descripción": "Asamblea Legislativa es la reunión conjunta y simultánea de la Cámara de Senadores y de la Cámara de Diputados. Se reune los 1ro de marzo de cada año, para dar comienzo a las sesiones."
  },
  {
    "Pregunta Nº": 2,
    "Tema": "Legislativas",
    "Pregunta": "¿Cuál de las siguientes comisiones preside XXXXXX?",
    "Respuesta correcta": "Presupuesto y Hacienda",
    "Respuesta incorrecta 1": "Educación y Cultura",
    "Respuesta incorrecta 2": "Ciencia y Tecnología",
    "Descripción": "Bullrich reingresó al Senado el 10 de diciembre de 2017. En ese mismo mes asumió la presidencia de la Comisión de Presupuesto."
  },
  {
    "Pregunta Nº": 3,
    "Tema": "Legislativas",
    "Pregunta": "¿Qué período legislativo comenzó el 1 de marzo de 2021?",
    "Respuesta correcta": 139,
    "Respuesta incorrecta 1": 125,
    "Respuesta incorrecta 2": 143,
    "Descripción": "El primer período de sesiones fue en el año XXX y el mensaje fue dirigido por el entonces Presindete XXX"
  },
  {
    "Pregunta Nº": 4,
    "Tema": "Legislativas",
    "Pregunta": "¿En qué año el Congreso sancionó más leyes?",
    "Respuesta correcta": 2020,
    "Respuesta incorrecta 1": 2019,
    "Respuesta incorrecta 2": 2021,
    "Descripción": "En 2020, el Congreso sesionó 48 veces y aprobó 65 leyes, un 66% más de leyes que en 2019."
  },
  {
    "Pregunta Nº": 5,
    "Tema": "Legislativas",
    "Pregunta": "¿En qué año se inauguró el edificio del Palacio del Congreso?",
    "Respuesta correcta": "En 1906",
    "Respuesta incorrecta 1": "En 1896",
    "Respuesta incorrecta 2": "En 1946",
    "Descripción": "La obra se inició en 1897, pero el Palacio fue ianugurado el 12 de mayo de 1906, en la apertura del 45º Período Legislativo. La obra fue concluida en 1946."
  },
  {
    "Pregunta Nº": 6,
    "Tema": "Legislativas",
    "Pregunta": "Además de legisladores y funcionarios autorizados ¿Quiénes pueden participar de una sesión secreta en el Congreso?",
    "Respuesta correcta": "Taquígrafos",
    "Respuesta incorrecta 1": "Prensa autorizada por la cámara",
    "Respuesta incorrecta 2": "Nadie más puede participar",
    "Descripción": "Taquígrafas, taquígrafos, que juren guardar un secreto"
  },
  {
    "Pregunta Nº": 7,
    "Tema": "Legislativas",
    "Pregunta": "¿Cuántas veces se puede renovar una banca en el congreso?",
    "Respuesta correcta": "No tiene límites",
    "Respuesta incorrecta 1": "Solo dos",
    "Respuesta incorrecta 2": "Solo dos consecutivas",
    "Descripción": "Como en muchos otros países, las bancas en el Congreso pueden ser renovadas indefinidamente."
  },
  {
    "Pregunta Nº": 8,
    "Tema": "Legislativas",
    "Pregunta": "Según la Constitución, ¿Qué renta anual es necesaria para aspirar a una banca en el Senado?",
    "Respuesta correcta": "2 mil pesos fuertes",
    "Respuesta incorrecta 1": "2 mil dólares",
    "Respuesta incorrecta 2": "100 litros de combustible",
    "Descripción": "Según el artículo 55 de la Constitución, para integrar el Senado es necesario \"disfrutar de una renta anual de dos mil pesos fuertes o de una entrada equivalente"
  },
  {
    "Pregunta Nº": 9,
    "Tema": "Legislativas",
    "Pregunta": "¿Cuál de los siguientes no pertenece al Poder Legislativo?",
    "Respuesta correcta": "Sindicatura Genral de la Nación (SIGEN)",
    "Respuesta incorrecta 1": "Auditoría General de la Nación (AGN)",
    "Respuesta incorrecta 2": "Biblioteca del Congreso",
    "Descripción": "La Sindicatura General de la Nación (SIGEN) es el órgano rector del sistema de control interno de la gestión del sector público y es parte del Poder Ejecutivo ."
  },
  {
    "Pregunta Nº": 10,
    "Tema": "Legislativas",
    "Pregunta": "¿Por qué cámara ingresan las iniciativas populares?",
    "Respuesta correcta": "Diputados",
    "Respuesta incorrecta 1": "Senado",
    "Respuesta incorrecta 2": "Se sortea",
    "Descripción": "Las iniciativas populares deben ingresar por la Cámara de Diputados. La cámara tiene la obligación de tratar el proyecto (para aprobarlo o rechazarlo) en el período legislativo en el que fue presentado."
  },
  {
    "Pregunta Nº": 11,
    "Tema": "Legislativas",
    "Pregunta": "¿Según la Constitución, cada cuántos años debería reverse la conformación de la Cámara de Diputados?",
    "Respuesta correcta": "Después de cada censo",
    "Respuesta incorrecta 1": "Cada 10 años",
    "Respuesta incorrecta 2": "Cuando se sanciona una ley al respecto",
    "Descripción": "Después de cada censo nacional se actualiza la cantidad de bancas en la Cámara de Diputados, con el criterio de que a ningún distrito se le puede disminuir la cantidad de bancas."
  },
  {
    "Pregunta Nº": 12,
    "Tema": "Legislativas",
    "Pregunta": "En la Cámara de Diputados, ¿Cuántas comisiones son presididas por mujeres en la actualidad?",
    "Respuesta correcta": 13,
    "Respuesta incorrecta 1": 17,
    "Respuesta incorrecta 2": 20,
    "Descripción": "En la Cámara de Diputados XX comisiones sobre las XX son presididas por mujeres, el  XX por ciento"
  },
  {
    "Pregunta Nº": 13,
    "Tema": "Legislativas",
    "Pregunta": "En el Senado, ¿Cuántas comisiones son presididas por mujeres en la actualidad?",
    "Respuesta correcta": 10,
    "Respuesta incorrecta 1": 7,
    "Respuesta incorrecta 2": 12,
    "Descripción": "En el Senado XX comisiones sobre las XX son presididas por mujeres, el  XX por ciento"
  },
  {
    "Pregunta Nº": 14,
    "Tema": "Legislativas",
    "Pregunta": "ACTUALIZAR. ¿Cuáles son las comisiones que más frecuentemente fueron presididas por mujeres entre 2000 y 2018 en la Cámara de Diputados?",
    "Respuesta correcta": "Legislación Penal y Libertad de Expresión",
    "Respuesta incorrecta 1": "Asuntos Constituionales y Cultura",
    "Respuesta incorrecta 2": "Educación y Vivienda y Ordenamiento Urbano",
    "Descripción": "Este dato surge de la información recabada en los 10 Directorios Legislativos."
  },
  {
    "Pregunta Nº": 15,
    "Tema": "Legislativas",
    "Pregunta": "ACTUALIZAR - ¿Qué porcentaje de bancas del Congreso fue ocupado por mujeres entre 2000 y 2018?",
    "Respuesta correcta": "XX",
    "Respuesta incorrecta 1": "XXX",
    "Respuesta incorrecta 2": "XXX",
    "Descripción": "Este dato surge de la información recabada en los 10 Directorios Legislativos."
  },
  {
    "Pregunta Nº": 16,
    "Tema": "Legislativas",
    "Pregunta": "De las cuatro autoridades de la Cámara de Diputados, ¿cuántas son mujeres?",
    "Respuesta correcta": 0,
    "Respuesta incorrecta 1": 1,
    "Respuesta incorrecta 2": 2,
    "Descripción": "Cero. La última mujer que ocupó un cargo de autoridad de cámara fue Patrica Gimenez (UCR)."
  },
  {
    "Pregunta Nº": 17,
    "Tema": "Legislativas",
    "Pregunta": "De las cinco autoridades de la Cámara de Senadores, ¿cuántas son mujeres?",
    "Respuesta correcta": 2,
    "Respuesta incorrecta 1": 1,
    "Respuesta incorrecta 2": 0,
    "Descripción": "Dos: La vicepresidenta de la Nacion Gabriela Michetti e Inés Pilatti de Vergara."
  },
  {
    "Pregunta Nº": 18,
    "Tema": "Legislativas",
    "Pregunta": "ACTUALIZAR - ¿En qué año el Congreso realizó más sesiones?",
    "Respuesta correcta": 2015,
    "Respuesta incorrecta 1": 2016,
    "Respuesta incorrecta 2": 2017,
    "Descripción": "En 2016 el Congreso sesionó en 43 ocasiones. En 2015 21, y en 2017, 32"
  },
  {
    "Pregunta Nº": 19,
    "Tema": "Legislativas",
    "Pregunta": "¿Cuántos legisladores han sido desaforados desde el retorno de la democracia?",
    "Respuesta correcta": 3,
    "Respuesta incorrecta 1": 6,
    "Respuesta incorrecta 2": 1,
    "Descripción": "Formalmente fueron desaforados tres diputados: Angeloz, Patti y De Vido. Patti fue desaforado antes de que jure como diputado."
  },
  {
    "Pregunta Nº": 20,
    "Tema": "Legislativas",
    "Pregunta": "¿Qué Jefe de Gabinete asistió más veces a dar su informe de gestión al Congreso?",
    "Respuesta correcta": "Marcos Peña",
    "Respuesta incorrecta 1": "Jorge Capitanich",
    "Respuesta incorrecta 2": "Santiago Cafiero",
    "Descripción": "Entre 2016 y 2019, Marcos Peña asistió 20 veces al Congreso, 11 veces a la Cámara de Diputados y 9 veces al Senado. Es el jefe de Gabinete que más veces asistió al Congreso."
  },
  {
    "Pregunta Nº": 21,
    "Tema": "Legislativas",
    "Pregunta": "¿Cuál de las siguientes no es más senadora?",
    "Respuesta correcta": "Cristina Kirchner",
    "Respuesta incorrecta 1": "Juliana Di Tullio",
    "Respuesta incorrecta 2": "Gladys González",
    "Descripción": "Cristina Kirchner es la presidenta del Senado por su cargo en funciones: vicepresidenta de la Nación. Desde 2019, no es más senadora."
  },
  {
    "Pregunta Nº": 22,
    "Tema": "Legislativas",
    "Pregunta": "¿Cuántos períodos legislativos tiene vigencia un pedido de juicio político?",
    "Respuesta correcta": 3,
    "Respuesta incorrecta 1": 2,
    "Respuesta incorrecta 2": "No caducan",
    "Descripción": "Los pedidos de juicio político son proyectos de resolución con la particularidad de que, en vez de tener un año de vigencia, tienen 3."
  },
  {
    "Pregunta Nº": 23,
    "Tema": "Legislativas",
    "Pregunta": "¿Qué legislador actual fue medallista olímpico?",
    "Respuesta correcta": "Carlos Espínola",
    "Respuesta incorrecta 1": "Daniel Scioli",
    "Respuesta incorrecta 2": "Carlos Castagneto",
    "Descripción": "En Atlanta, Sídney, Atenas y Pekín, \"Camau\" Espínola ganó cuatro medallas olímpicas, dos de plata y dos de bronce."
  },
  {
    "Pregunta Nº": 24,
    "Tema": "Legislativas",
    "Pregunta": "¿Por qué distrito es senador Mariano Recalde?",
    "Respuesta correcta": "Ciudad de Buenos Aires",
    "Respuesta incorrecta 1": "Buenos Aires",
    "Respuesta incorrecta 2": "Santa Fe",
    "Descripción": "En diciembre de 2019, Recalde asumió como senador nacional por la Ciudad de Buenos Aires. Previamente, fue Presidente de Aerolíneas Argentinas y Legislador Porteño."
  },
  {
    "Pregunta Nº": 25,
    "Tema": "Legislativas",
    "Pregunta": "¿Por qué distrito es senadora Gladys González?",
    "Respuesta correcta": "Buenos Aires",
    "Respuesta incorrecta 1": "Ciudad de Buenos Aires",
    "Respuesta incorrecta 2": "Santa Fe",
    "Descripción": "En diciembre de 2017 asumió como senador nacional por la Provincia de Buenos Aires. Previamente, fue diputada por el mismo distrito."
  },
  {
    "Pregunta Nº": 26,
    "Tema": "Legislativas",
    "Pregunta": "¿Cuál de las siguientes provincias tiene más bancas en la Cámara de Diputados?",
    "Respuesta correcta": "Entre Ríos",
    "Respuesta incorrecta 1": "Santiago del Estero",
    "Respuesta incorrecta 2": "Jujuy",
    "Descripción": "A la provincia de Entre Ríos le corresponden 9 bancas, mientras que a Santiago del Estero tiene 7 bancas y Jujuy 6."
  },
  {
    "Pregunta Nº": 27,
    "Tema": "Legislativas",
    "Pregunta": "¿Por qué distrito fue senadora Cristina Kirchner entre 2001 y 2005?",
    "Respuesta correcta": "Santa Cruz",
    "Respuesta incorrecta 1": "Buenos Aires",
    "Respuesta incorrecta 2": "Ciudad de Buenos Aires",
    "Descripción": "En el período anterior, entre 1997 y 2001, fue diputada nacional por el mismo distrito."
  },
  {
    "Pregunta Nº": 28,
    "Tema": "Legislativas",
    "Pregunta": "¿Cuántas veces fue elegido Carlos Menem como senador por La Rioja?",
    "Respuesta correcta": "Tres",
    "Respuesta incorrecta 1": "Cinco",
    "Respuesta incorrecta 2": "Dos",
    "Descripción": "Carlos Menem ingresó al Senado el 10 de diciembre de 2005. Renovó su banca en 2011 y en 2017."
  },
  {
    "Pregunta Nº": 29,
    "Tema": "Legislativas",
    "Pregunta": "¿Cuál fue el último presidente no bonaerense de la Cámara de Diputados?",
    "Respuesta correcta": "Eduardo Fellner",
    "Respuesta incorrecta 1": "Julián Domínguez",
    "Respuesta incorrecta 2": "Eduardo Camaño",
    "Descripción": "El útlmo presidente no bonaerense de la Cámara fue Eduardo Fellner. Luego lo sucedieron los bonaerenses Julián Dominguez y Emilio Monzó."
  },
  {
    "Pregunta Nº": 30,
    "Tema": "Legislativas",
    "Pregunta": "¿Qué bloque es la mayoría en el Senado?",
    "Respuesta correcta": "Justicialista",
    "Respuesta incorrecta 1": "Unión Cívica Radical",
    "Respuesta incorrecta 2": "PRO",
    "Descripción": "El bloque Justicialista, integrado por 20 senadores, es encabezado por Miguel Ángel Pichetto."
  },
  {
    "Pregunta Nº": "",
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 1,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Quién es el presidente de Perú?",
    "Respuesta correcta": "Pedro Castillo",
    "Respuesta incorrecta 1": "Martín Vizcarra",
    "Respuesta incorrecta 2": "Jair Bolsonaro",
    "Descripción": "Pedro Castillo es el presidente de la República del Perú desde julio de 2021, luego de ganar por balotaje con el 50.13% de los votos."
  },
  {
    "Pregunta Nº": 2,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Quién es el presidente de Ecuador?",
    "Respuesta correcta": "Guillermo Lasso",
    "Respuesta incorrecta 1": "Lenín Moreno",
    "Respuesta incorrecta 2": "Rafael Correa",
    "Descripción": "Guillermo Lasso es el presidente de la República del Ecuador desde julio de 2021, luego de ganar por balotaje con el 52,36% de votos"
  },
  {
    "Pregunta Nº": 3,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Cuál de los siguientes países tienen un poder legislativo unicameral?",
    "Respuesta correcta": "Perú",
    "Respuesta incorrecta 1": "Bolivia",
    "Respuesta incorrecta 2": "Paraguay",
    "Descripción": "Desde el año 1995, Perú tiene un Congreso unicameral. La eliminación de una cámara se estableció con la reforma  constitucional del 93."
  },
  {
    "Pregunta Nº": 4,
    "Tema": "Latinoamérica",
    "Pregunta": "¿A partir de qué año podrán ser reelectos los senadores mexicanos?",
    "Respuesta correcta": "Desde 2024",
    "Respuesta incorrecta 1": "No pueden",
    "Respuesta incorrecta 2": "Desde 1917",
    "Descripción": "En 2014 el Congreso mexicano aprobó una reforma política que habilita la reelección de senadores, a partir de los comicios de 2024."
  },
  {
    "Pregunta Nº": 5,
    "Tema": "Latinoamérica",
    "Pregunta": "En México los proyectos de ley se distinguen por:",
    "Respuesta correcta": "Título",
    "Respuesta incorrecta 1": "Número",
    "Respuesta incorrecta 2": "Color",
    "Descripción": "Los proyectos de ley en México no tienen número. Se identifican según su nombre."
  },
  {
    "Pregunta Nº": 6,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Cuál de los siguientes países no publica los proyectos de ley del Congreso?",
    "Respuesta correcta": "Honduras",
    "Respuesta incorrecta 1": "Guatemala",
    "Respuesta incorrecta 2": "Venezuela",
    "Descripción": "Los proyectos de ley en Honduras son accesibles solo mediante un pedido de acceso a la información pública."
  },
  {
    "Pregunta Nº": 7,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Cuanto dura en su cargo el presidente del Mercosur?",
    "Respuesta correcta": "6 meses",
    "Respuesta incorrecta 1": "4 años",
    "Respuesta incorrecta 2": "1 año",
    "Descripción": "La presidencia del Mercosur es un cargo rotativo, es ocupada por un jefe de Estado de uno de los países miembros durante seis meses."
  },
  {
    "Pregunta Nº": 8,
    "Tema": "Latinoamérica",
    "Pregunta": "¿En cuál de los siguientes países los proyectos de ley no caducan?",
    "Respuesta correcta": "Brasil",
    "Respuesta incorrecta 1": "Chile",
    "Respuesta incorrecta 2": "Paraguay",
    "Descripción": "En Brasil los proyectos de ley no sólo no pierden vigencia, sino que tiene mecanismos para permitir que las iniciativas sobre temáticas similares confluyan."
  },
  {
    "Pregunta Nº": 9,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Cuál de los siguientes ex-presidentes de América Latina presentó su renuncia?",
    "Respuesta correcta": "Horacio Cartés",
    "Respuesta incorrecta 1": "Michel Temer",
    "Respuesta incorrecta 2": "Dilma Russef",
    "Descripción": "En 2018, el ex-presidente de Paraguay, Horacio Cartés presentó su renuncia. Al no ser aceptada por el Congreso: Cartés la retirò y terminó su mandato como presidente."
  },
  {
    "Pregunta Nº": 10,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Cuántos Congresos en Sudamérica tienen sólo una Cámara?",
    "Respuesta correcta": 3,
    "Respuesta incorrecta 1": 5,
    "Respuesta incorrecta 2": 1,
    "Descripción": "Perú, Venezuela y Ecuador son los 3 países de Sudamérica con parlamentos unicamerales."
  },
  {
    "Pregunta Nº": 11,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Cuál de los siguientes Congresos está compuesto por más legisladores?",
    "Respuesta correcta": "Argentina",
    "Respuesta incorrecta 1": "Chile",
    "Respuesta incorrecta 2": "Colombia",
    "Descripción": "Argentina tiene 329 legisladores a nivel nacional. Colombia tiene 279 y Chile 198."
  },
  {
    "Pregunta Nº": 12,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Qué significan las letras de AMLO, nombre con el que es conocido el presidente electo de México?",
    "Respuesta correcta": "Andrés Manuel López Obrador",
    "Respuesta incorrecta 1": "Antonio Marcos López Obrador",
    "Respuesta incorrecta 2": "Armando Manuel López Obrador",
    "Descripción": "Andrés Manuel López Obrador, AMLO, fue electo presidente de México en 2018 con el 53.19% de los votos, 30 puntos más que quien salió segundo."
  },
  {
    "Pregunta Nº": 13,
    "Tema": "Latinoamérica",
    "Pregunta": "¿En qué país no existe la segunda vuelta electoral?",
    "Respuesta correcta": "México",
    "Respuesta incorrecta 1": "Colombia",
    "Respuesta incorrecta 2": "Argentina",
    "Descripción": "En México las elecciones se definen por cantidad de votos, la presidencia es de quien que supera en más de 1 voto a sus adversarios."
  },
  {
    "Pregunta Nº": 14,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Quién es el presidente de Uruguay?",
    "Respuesta correcta": "Luis Lacalle Pou",
    "Respuesta incorrecta 1": "Pepe Mujica",
    "Respuesta incorrecta 2": "Tabaré Vázquez",
    "Descripción": "Luis Lacalle Pou es el presidente de la República Oriental del Uruguay, desde marzo de 2020, luego de ganar por balotaje con el 50.79% de votos"
  },
  {
    "Pregunta Nº": 15,
    "Tema": "Latinoamérica",
    "Pregunta": "¿En qué país los legisladores no pueden renunciar a sus bancas?",
    "Respuesta correcta": "Perú",
    "Respuesta incorrecta 1": "Argentina",
    "Respuesta incorrecta 2": "Brasil",
    "Descripción": "Según la Constitución peruana, los cargos legislativos son irrenunciables."
  },
  {
    "Pregunta Nº": 16,
    "Tema": "Latinoamérica",
    "Pregunta": "¿De qué país es la funcionaria que llamó a los países del Grupo de Lima \"cachorros del imperio\"?",
    "Respuesta correcta": "Venezuela",
    "Respuesta incorrecta 1": "Ecuador",
    "Respuesta incorrecta 2": "Nicaragua",
    "Descripción": "La actual Vicepresidenta de Venezuela, Delcy Rodriguez, insultó a los países integrantes del Grupo de Lima calificandolos de “cachorros del imperio”, entre otras cosas."
  },
  {
    "Pregunta Nº": 17,
    "Tema": "Latinoamérica",
    "Pregunta": "¿En qué país un candidato presidencial reveló a un grupo de niños que Santa Claus no existe?",
    "Respuesta correcta": "México",
    "Respuesta incorrecta 1": "Nicaragua",
    "Respuesta incorrecta 2": "Venezuela",
    "Descripción": "Jaime Rodriguez Calderón (El Bronco) les reveló a un grupo de niños y niñas que \"el Papá de ustedes es Santa Claus, ¿ya sabían eso?\" y fue muy criticado en redes sociales."
  },
  {
    "Pregunta Nº": 18,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Quién es el presidente de Chile?",
    "Respuesta correcta": "Sebastián Piñera",
    "Respuesta incorrecta 1": "Michelle Bachelet",
    "Respuesta incorrecta 2": "Mario Abdo Benítez",
    "Descripción": "Sebastián Piñera es el presidente de la República de Chile, desde 2018, luego de ganar por balotaje con el 54.58 % de los votos. En marzo de 2022 dejará su cargo."
  },
  {
    "Pregunta Nº": 19,
    "Tema": "Latinoamérica",
    "Pregunta": "¿En qué país de América Latina el segundo candidato a presidente más votado obtiene como compensación una banca en el Senado?",
    "Respuesta correcta": "Colombia",
    "Respuesta incorrecta 1": "El Salvador",
    "Respuesta incorrecta 2": "México",
    "Descripción": "En el 2015 Colombia aprobó la Reforma de Equilibrio de Poderes que estableció que la segunda pareja con más votos en las elecciones presidenciales obtendría de manera automática dos bancas en el Senado."
  },
  {
    "Pregunta Nº": 20,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Cuál de los siguientes Congresos tiene mayor porcentaje de legisladoras mujeres?",
    "Respuesta correcta": "Argentina",
    "Respuesta incorrecta 1": "Chile",
    "Respuesta incorrecta 2": "Brasil",
    "Descripción": "Sobre 329 legisladores (senadores + diputados), el Congreso argentino cuenta 128 mujeres (38%). En Chile, hay 44 legisladoras mujeres sobre 198 en total (22%) y en Brasil, 67 mujeres sobre 594 (11%)."
  },
  {
    "Pregunta Nº": 21,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 22,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 23,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 24,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 25,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 26,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 27,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 28,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 29,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "Ciudad de Buenos Aires",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 30,
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": "",
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 1,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Por qué distrito es candidato Diego Santilli?",
    "Respuesta correcta": "Buenos Aires",
    "Respuesta incorrecta 1": "Ciudad de Buenos Aires",
    "Respuesta incorrecta 2": "Santa Fe",
    "Descripción": "Diego Santilli encabeza la lista de Diputados de Juntos por el Cambio. RECORRIDO"
  },
  {
    "Pregunta Nº": 2,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Por qué distrito es candidato PJ SANTA FE?",
    "Respuesta correcta": "Martín Llaryora",
    "Respuesta incorrecta 1": "Martín Maquieyra",
    "Respuesta incorrecta 2": "Diego Mestre",
    "Descripción": "Martín Llaryora es vicegobernador de Córdoba en licencia."
  },
  {
    "Pregunta Nº": 3,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Quién es presidente del Bloque Justicialista en Diputados?",
    "Respuesta correcta": "Pablo Kosiner",
    "Respuesta incorrecta 1": "Diego Bossio",
    "Respuesta incorrecta 2": "Oscar Romero",
    "Descripción": "Pablo Kosiner es vicepresidente del Bloque Justicialista en la Cámara de Diputados."
  },
  {
    "Pregunta Nº": 4,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Por qué distrito fue senadora Cristina Fernández entre 2001 y 2005?",
    "Respuesta correcta": "Santa Cruz",
    "Respuesta incorrecta 1": "Buenos Aires",
    "Respuesta incorrecta 2": "Ciudad de Buenos Aires",
    "Descripción": "En el período anterior, entre 1997 y 2001, fue diputada nacional por el mismo distrito."
  },
  {
    "Pregunta Nº": 5,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Cuántas bancas pertenecen a la provincia de Buenos Aires en la Cámara de Diputados?",
    "Respuesta correcta": 70,
    "Respuesta incorrecta 1": 60,
    "Respuesta incorrecta 2": 50,
    "Descripción": "El número de diputados por distrito es proporcional a su población. Se eligen mediante el sistema proporcional D'Hont"
  },
  {
    "Pregunta Nº": 6,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Cuál de las siguientes provincias tiene más bancas en la Cámara de Diputados?",
    "Respuesta correcta": "Entre Ríos",
    "Respuesta incorrecta 1": "Santiago del Estero",
    "Respuesta incorrecta 2": "Jujuy",
    "Descripción": "A la provincia de Entre Ríos le corresponden 9 bancas, mientras que a Santiago del Estero tiene 7 bancas y a Jujuy 6."
  },
  {
    "Pregunta Nº": 7,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Por qué distrito es candidato Diego Santilli?",
    "Respuesta correcta": "Buenos Aires",
    "Respuesta incorrecta 1": "Ciudad de Buenos Aires",
    "Respuesta incorrecta 2": "Santa Fe",
    "Descripción": "Diego Santilli encabeza la lista de Diputados de Juntos por el Cambio. RECORRIDO"
  },
  {
    "Pregunta Nº": 8,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Por qué distrito es candidato PJ SANTA FE?",
    "Respuesta correcta": "Martín Llaryora",
    "Respuesta incorrecta 1": "Martín Maquieyra",
    "Respuesta incorrecta 2": "Diego Mestre",
    "Descripción": "Martín Llaryora es vicegobernador de Córdoba en licencia."
  },
  {
    "Pregunta Nº": 9,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Por qué distrito es candidato Diego Santilli?",
    "Respuesta correcta": "Buenos Aires",
    "Respuesta incorrecta 1": "Ciudad de Buenos Aires",
    "Respuesta incorrecta 2": "Santa Fe",
    "Descripción": "Diego Santilli encabeza la lista de Diputados de Juntos por el Cambio. RECORRIDO"
  },
  {
    "Pregunta Nº": 10,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Por qué distrito es candidato PJ SANTA FE?",
    "Respuesta correcta": "Martín Llaryora",
    "Respuesta incorrecta 1": "Martín Maquieyra",
    "Respuesta incorrecta 2": "Diego Mestre",
    "Descripción": "Martín Llaryora es vicegobernador de Córdoba en licencia."
  },
  {
    "Pregunta Nº": 11,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Cómo se renuevan las bancas en el Senado?",
    "Respuesta correcta": "Por Tercios",
    "Respuesta incorrecta 1": "Por mitades",
    "Respuesta incorrecta 2": "Se renueva por completo",
    "Descripción": "El senado se renueva por tercios: 24 bancas cada 2 años."
  },
  {
    "Pregunta Nº": 12,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Cómo se renuevan las bancas en la Cámara de Diputados?",
    "Respuesta correcta": "Por mitades",
    "Respuesta incorrecta 1": "Por Tercios",
    "Respuesta incorrecta 2": "Se renueva por completo",
    "Descripción": "La Cámara de Diputados se renueva por mitades: 127 (o 130) bancas cada 2 años."
  },
  {
    "Pregunta Nº": 13,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Quiénes no tienen la obligación de votar?",
    "Respuesta correcta": "Mayores de 70 años",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 14,
    "Tema": "Elecciones 2021",
    "Pregunta": "ABC",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 15,
    "Tema": "Elecciones 2021",
    "Pregunta": "ABC",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 16,
    "Tema": "Elecciones 2021",
    "Pregunta": "ABC",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 17,
    "Tema": "Elecciones 2021",
    "Pregunta": "ABC",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 18,
    "Tema": "Elecciones 2021",
    "Pregunta": "ABC",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 19,
    "Tema": "Elecciones 2021",
    "Pregunta": "ABC",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 20,
    "Tema": "Elecciones 2021",
    "Pregunta": "ABC",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 21,
    "Tema": "Elecciones 2021",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 22,
    "Tema": "Elecciones 2021",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 23,
    "Tema": "Elecciones 2021",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 24,
    "Tema": "Elecciones 2021",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 25,
    "Tema": "Elecciones 2021",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 26,
    "Tema": "Elecciones 2021",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 27,
    "Tema": "Elecciones 2021",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 28,
    "Tema": "Elecciones 2021",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 29,
    "Tema": "Elecciones 2021",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 30,
    "Tema": "Elecciones 2021",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  }
];

const formattedQuestion = ({ "Tema": topic, "Pregunta": text, "Respuesta correcta": answer,
    "Respuesta incorrecta 1": firstIncorrect, "Respuesta incorrecta 2": secondIncorrect, "Descripción": description }) => (
  { topic, text, description, answer, incorrectAnswers: [ firstIncorrect, secondIncorrect ] }
);

const isValid = ({ text, answer, incorrectAnswers }) => {
  const hasIncorrectAnswers = !_(incorrectAnswers).compact().isEmpty();
  return text && answer && hasIncorrectAnswers;
};

const formattedQuestions = _(questions).map(formattedQuestion).filter(isValid).value();

console.log(JSON.stringify(formattedQuestions));