

function update_catalog() {
    update_catalog_filters();
}

function update_catalog_games(allowed_franchises, allowed_developers) {
    let all_catalog_game_guides = document.getElementsByClassName("catalog_game");
    for (let i = 0; i < all_catalog_game_guides.length; i++) {
        let current_catalog_game = all_catalog_game_guides[i];
        //console.log(current_catalog_game.getAttribute("data-game-developer"));
        //console.log(allowed_developers);
        if (allowed_franchises.includes(current_catalog_game.getAttribute("data-game-franchise")) && allowed_developers.includes(current_catalog_game.getAttribute("data-game-developer"))) {
            //console.log("yes!!!");
            current_catalog_game.style.display = "flex";
        }
        else {
            current_catalog_game.style.display = "none";
        }
    }
}


function update_catalog_filters() {
    let allowed_franchises = [];
    let allowed_developers = [];

    let check_boxes = document.getElementsByClassName("catalog_check_box");
    for (let i = 0; i < check_boxes.length; i++) {
        let check_box = check_boxes[i].getElementsByTagName("input")[0];
        let check_box_text = check_boxes[i].getElementsByTagName("label")[0];
        //console.log(check_box.checked, check_box.getAttribute("data-filter-type"));

        if (check_box.checked == true) {
            if (check_box.getAttribute("data-filter-type") == "Game") {
                allowed_franchises.push(check_box.value);
            }
            else if (check_box.getAttribute("data-filter-type") == "Developer") {
                //console.log(check_box.getAttribute("data-filter-type"), check_box.value);
                allowed_developers.push(check_box.value);
            }            
        }
    }
    update_catalog_games(allowed_franchises, allowed_developers);
}