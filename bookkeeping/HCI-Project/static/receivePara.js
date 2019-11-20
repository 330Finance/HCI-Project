function parsePara()
{
    var fuck = window.location.search;
    document.getElementById("show").innerText = "you input: "  + fuck.substr(1);
}

parsePara();