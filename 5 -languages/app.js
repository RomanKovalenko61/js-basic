const language = prompt("Введите язык. Например ru ua en de pl");

switch (language.toLowerCase()) {
    case "ru":
        console.log("Привет");
        break;
    case "uk":
        console.log("Доброго ранку");
        break;
    case "en":
        console.log("Hello");
        break;
    case "de":
        console.log("Gutten tag");
        break;
    case "pl":
        console.log("Cześć");
        break;
    default:
        console.log("Unknown language!");
        break;
}
