function fetchh(url, success, error) {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onload = function() {

        if(xhr.status == 200) {
            success(xhr.responseText);
        } else {
            error( new Error("Error! Satus: " + xhr.status) );
        }

    };

    xhr.onerror = function(e) {
        error( new Error("Brak dostępu do internetu!") );
    };

    xhr.send();

}

(function() {

    var button = document.querySelector("#button"),
        output = document.querySelector("#output");

    button.addEventListener("click", function(e) {

        fetchh("https://jsonplaceholder.typicode.com/users", function(data) {

            console.log("Dane pobrane");

            output.textContent = data;

        }, function(error) {

            console.log(error.message);

        });

    }, false);

})();