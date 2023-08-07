function getBotResponse(input) {
    //Juego del piedra papel o tijera
    if (input == "piedra") {
        return "papel";
    } else if (input == "papel") {
        return "tijera";
    } else if (input == "tijera") {
        return "piedra";
    }

    // Simple responses
    if (input == "hola") {
        return "holaa.!";
    } else if (input == "chau") {
        return "Hablaremos mas tarde gracias!";
    } else {
        return "Pregunta algo mas...";
    }
}