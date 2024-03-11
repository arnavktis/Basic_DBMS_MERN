function searchEmployee() {
    var employeeName = document.getElementById("employeeName").value;
    var departmentType = document.getElementById("departmentType").value;

    var searchResult = `Searching for employee: ${employeeName} in department type: ${departmentType}`;
    document.getElementById("searchResult").innerText = searchResult;
}
function buttonClicked0(){
    console.log("very good");
}
function buttonClicked1() {
    var divToToggle = document.querySelector(".inputstyle");
    if (divToToggle.style.display === "none" || divToToggle.style.display === "") {
        divToToggle.style.display = "block";
    }
    else {
        divToToggle.style.display = "none";
    }  
}

function buttonClicked2() {
    var divToToggle = document.querySelector(".inputstyle");
    if (divToToggle.style.display === "none" || divToToggle.style.display === "") {
        divToToggle.style.display = "block";
    }
    else {
        divToToggle.style.display = "none";
    }
}

function buttonClicked3() {
    var divToToggle = document.querySelector(".inputstyle");
    if (divToToggle.style.display === "none" || divToToggle.style.display === "") {
        divToToggle.style.display = "block";
    }
    else {
        divToToggle.style.display = "none";
    }
}

function buttonClicked4() {
    var divToToggle = document.querySelector(".inputstyle");
    if (divToToggle.style.display === "none" || divToToggle.style.display === "") {
        divToToggle.style.display = "block";
    }
    else {
        divToToggle.style.display = "none";
    }
}