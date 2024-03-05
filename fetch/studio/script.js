//TODO: Add Your Code Below

window.addEventListener("load", () => {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then((response) => {
        response.json().then((json) => {
            let div = document.querySelector("#container");
            let count = 0;
            for (astronaut of json) {
                let activeClass = "";
                if (astronaut.active) {
                    activeClass = "active"
                } else {
                    activeClass = "inactive"
                }

                div.innerHTML = div.innerHTML + `
                <div class="astronaut">
                    <div class "bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li class=${activeClass}>Active: ${astronaut.active}</li>
                            <li>Skills: ${astronaut.skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${astronaut.picture}">
                `
                count += 1;
            }

            div.innerHTML = `
            <p>Found ${count} astronauts.</p>
            ` + div.innerHTML;
        });
    });
});