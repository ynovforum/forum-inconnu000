function create () {
    const screa = document.getElementsByClassName("screa");
    screa.style.display = "block";
}
function edit () {

}
function suppr() {
    if (req.user && req.user.role === 'admin') {
        const sdel = document.getElementsByClassName("sdel");
        sdel.style.display = "block";
    }
}

function admedit() {


}