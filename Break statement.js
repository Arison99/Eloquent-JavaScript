switch (prompt("What is the weather like?")) {
    case "rainy":
        console.log("Remember to bring an Umbrella");
        break;
    case "sunny":
        console.log("Dress lightly");
        break;
    case "cloudy":
        console.log("Go outside");
        break;
    default:
        console.log("Unknown weather type!");
        break;
}