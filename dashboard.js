const studies = document.querySelector("#studies")
studies.addEventListener("click", openMenu)

function openMenu() {
    if (dashboard.classList == "visible") {
        mainoffer.classList.add("block")
    } else {
        logo.classList.add("block")
        general.classList.add("block")
        alumni.classList.add("block")
        socialkea.classList.add("block")
        submit.classList.add("block")
        mainoffer.classList.remove("block")
        
    }

}



const logo = document.querySelector("#header")
const general = document.querySelector("#general")
const alumni = document.querySelector("#alumni")
const socialkea = document.querySelector("#socialkea")
const submit = document.querySelector("#submit")
const mainoffer = document.querySelector("#yourstudiesmenu")
const dashboard = document.querySelector("#dashboard")