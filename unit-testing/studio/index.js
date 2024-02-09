
let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: function (num) {
        let message = "";
        if (num % 2 == 0) {
            message += "Launch";
        }
        if (num % 3 == 0) {
            message += "Code";
        }
        if (num % 5 == 0) {
            message += " Rocks";
        }

        if (message == "") {
            message = "Rutabagas! That doesn't work.";
        } else {
            message += "!";
            message = message.trim();
            if (message == "Launch Rocks!") {
                message += " (CRASH!!!!)";
            }
        }

        return message;
    }
}

console.log(typeof launchcode.percentageCoolEmployees);

module.exports = launchcode;

