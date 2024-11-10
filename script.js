function toggleSection(i, t) {
    var section = document.getElementById(i);
    var text = document.getElementById(t);
    if (section.style.display === "none") {
        section.style.display = 'block';
        text.innerText = "Hide";
    }
    else {
        section.style.display = 'none';
        text.innerText = "Show";
    }
}
