(function () {
    //Build a pseudo-class to prevent polluting this scope.
    var api = {
        start: function () {
            document
                .querySelector(".site-header__account")
                .addEventListener("click", this.handleAccountClick);
            this.executeJSONP();
            this.configureModal();
            this.addEventListener();
        },
        executeJSONP: () => {
            document.querySelector("head").innerHTML +=
                '<link rel="stylesheet" href="./modal.css">';
        },
        configureModal: () => {
            let div = document.createElement("div");
            div.innerHTML = `
                <div class="bg-modal">
                    <div class="content-modal">
                        <div class="close">+</div>
                    </div>
                </div>
            `;
            document.body.appendChild(div);
        },
        addEventListener: () => {
            document.querySelector(".close").addEventListener("click", () => {
                document.querySelector(".bg-modal").style.display = "none";
            });
        },
        handleAccountClick: (e) => {
            e.preventDefault();
            document.querySelector(".bg-modal").style.display = "flex";
        },
    };
    api.start();

    //Optionally make the api available to the global scope for debugging.
    window["MyWidget"] = api;
})();
