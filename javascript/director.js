function generate_path_prefix(depth) {
    //console.log("depth", depth)
    if (depth==0) {return"";}
    let prefix = "";
    for (let i = 0; i < depth; i++) {
        prefix += "../";
    }
    //console.log(prefix);
    return prefix;
}

function direct_to_page(page, depth) {
    //console.log(depth);
    let prefix = generate_path_prefix(depth);
    //console.log(prefix);
    if (page == "catalog") {
        window.location.href = prefix + "pages/catalog.html"
    }
    else if (page == "main") {
        window.location.href = prefix + "index.html"
    }
    else if (page == "new_games") {
        window.location.href = prefix + "pages/new_games.html"
    }
}

function direct_to_blog(blog, depth) {
    let prefix = generate_path_prefix(depth);
    console.log(prefix);
    window.location.href = prefix + "pages/guides/guide_" + blog + ".html"
}

function error_page(depth) {
    window.open(generate_path_prefix(depth)+"pages/error.html");
}