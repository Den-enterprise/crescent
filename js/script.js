document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("applicationForm");

    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert(
            "Form submitted successfully. Google Sheets integration will be added later."
        );

    });

});