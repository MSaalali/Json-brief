var inputcm = document.querySelector("#cm")
var body = document.querySelector("body")
var inputans = document.querySelector("#ans")
var mince = document.querySelector("#mince")
var moyen = document.querySelector("#moyen")
var large = document.querySelector("#large")
var btn = document.querySelector("#btn")
var hestory = document.querySelector("#history")
var display = document.querySelector(".display")
var h = document.querySelector(".h")
var json = JSON.parse(localStorage.getItem("hestory")) || []
btn.addEventListener("click", function () {
    if (mince.checked && !moyen.checked && !large.checked) {
        if (inputcm.value !== "" && inputans.value !== "")
            var result = +(inputcm.value - 100) + +(inputans.value / 10) * 0.9
        display.innerHTML = result.toFixed(2) + " kg"
        save(result)
    } else if (!mince.checked && moyen.checked && !large.checked) {
        if (inputcm.value !== "" && inputans.value !== "")
            var result = +(inputcm.value - 100) + +(inputans.value / 10) * 0.9 * 0.9
        display.innerHTML = result.toFixed(2) + " kg"
        save(result)
    } else if (!mince.checked && !moyen.checked && large.checked) {
        if (inputcm.value !== "" && inputans.value !== "")
            var result = +(inputcm.value - 100) + +(inputans.value / 10) * 0.9 * 1.1
        display.innerHTML = result.toFixed(2) + " kg"
        save(result)
    }
})
function save(result) {
    var obj = {
        value: result
    }
    json.push(obj)
    localStorage.setItem("hestory", JSON.stringify(json))
}

hestory.addEventListener("click", function () {
    h.innerHTML = ""
    json.forEach((obj) => {
        h.innerHTML += 'pois is: ' + obj.value + "<br>"

    })
})