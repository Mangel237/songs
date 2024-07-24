window.onload = function() {
  var lyrics = document.querySelector(".lyrics-large");
  var popup = document.querySelector(".lyrics-box");

  var fontSize = 30; 
  while (lyrics.scrollHeight > lyrics.offsetHeight) {
      fontSize -= 1;
      lyrics.style.fontSize = fontSize + "px";
  }

  var maxWidth = Math.max(lyrics.offsetWidth, lyrics.scrollWidth);
  popup.style.width = maxWidth + "px";
}

var currentIndex = 0;

function closeAlert() {
  var lyrics = document.querySelector(".lyrics-large");
  var songLines = [
    "gracias",
    "intro de la cancion espera que comience 😗 y le das al corazon rojo  🤍",   
    "No me salen las palabras para expresarte que te quiero🤐",
    "No sé cómo explicarte qué me haces sentir🤔",
    "Como si fuera el verano y el invierno no existiera🙀",
    "Como si se para todo😗",
    "Y con esa sonrisa😼",
    "Que cambia la vida, miraste hacia aquí😱",
    "Y ya no puedo contemplar",
    "Que tú no seas la que me ama🥰",
    "Y cómo mirarte😏",
    "A esos ojos que me dejan en enero😘",
    "Cuando sé que no son míos y me muero😥",
    "El destino no nos quiere ver pasar, oh",
    "Y cómo decirte😫",
    "Que no quiero que este amor sea pasajero😛",
    "Que de pronto se dé un día y yo te espero😴",
    "El destino no nos tiene que importar😙😙",
    "No sé cómo ser yo mismo, si no estás al lado mío😎",
    "Se harán largos estos meses, si no estás junto a mí😖🙁",
    "Y con esa sonrisa, que nunca se olvida, llegaste y te vi😳",
    "Y ya no puedo soportar, que tú no seas la que me ama🥰😘",
    "Y cómo mirarte😶",
    "A esos ojos que me dejan en enero👀",
    "Cuando sé que no son míos y me muero😵🤪",
    "El destino no nos quiere ver pasar, oh",
    "Y cómo decirte🤐",
    "Que no quiero que este amor sea pasajero😭😢",
    "Que de pronto se dé un día y yo te espero😪😯",
    "El destino no nos tiene que importar🙄😶",
    "Y cómo olvidarte😶😶",
    "Si la vida me enseñó que vas primero😙",
    "No me importa la distancia, yo te quiero🤯😩",
    "Y al final sé que a mi lado vas a estar (a mi lado vas a estar)🥺🥳",
    "Voy a esperarte🥺🥺",
    "Cuando se ama de verdad no existe el tiempo🥺",
    "Y te juro que no es el final del cuento🤍",
    "El destino no nos puede separar🤍🤍🤍",
  ];

  currentIndex = (currentIndex + 1) % songLines.length;
  lyrics.textContent = songLines[currentIndex];

  // Reproducir música
  var audio = document.getElementById('background-music');
  audio.play();
}

