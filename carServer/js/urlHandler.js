"use strict";

(function () {
    let searchCriterion;
    document.addEventListener("DOMContentLoaded", init);

    function init() {
        searchCriterion = document.getElementById("searchCriterion")
        document.getElementById("sendurl").addEventListener("click",update)
    }
    async function update() {
        try {
            const result = await fetch("/jsonencoded", {
                method: "POST",
                body: `licence=${searchCriterion.value}`,
                headers: {
                    "Contet-Type":"application/x-www-form-urlencoded"
                }
            })
            updatePage(await result.json())
        } catch (err) {
            showError(err.message)
        }
    }
})();