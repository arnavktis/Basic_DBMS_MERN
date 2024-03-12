// function searchEmployee() {
//     var employeeName = document.getElementById("employeeName").value;
//     var departmentType = document.getElementById("departmentType").value;

//     var searchResult = `Searching for employee: ${employeeName} in department type: ${departmentType}`;
//     document.getElementById("searchResult").innerText = searchResult;
// }
const read = async () => {
  const id = 1;
  try {
    const response = await fetch(`/data`); // Fetch data by ID
    const data = await response.json();
    console.log(data);
    if (data) {
      const container = document.getElementById("DataInput");
      var divToToggle = document.querySelector("#DataInput");
      if (
        divToToggle.style.display === "none" ||
        divToToggle.style.display === ""
      ) {
        divToToggle.style.display = "block";
      }
      container.innerHTML = data
        .map((dat) => {
          return `
            <p>Sr.no: ${dat.S_no} </p>
            <p>Name: ${dat.Dept_name}</p>
            <p>Description: ${dat.Dept_id}</p>
            `;
        })
        .join("");
    } else {
      console.error("Data not found"); // Handle error on client-side
    }
  } catch (error) {
    console.error("Error fetching data:", error); // Handle other errors
  }
};
class Data {
  constructor(empName, empId, dep, toolName, toolId, allotment) {
    this.empName = empName;
    this.empId = empId;
    this.dep = dep;
    this.toolName = toolName;
    this.toolId = toolId;
    this.allotment = allotment;
  }
}
let data;
function submit() {
  data = new Data(
    document.querySelector("#employeeName").value,
    document.querySelector("#employeeId").value,
    document.querySelector("#departmentType").value,
    document.querySelector("#toolName").value,
    document.querySelector("#toolID").value,
    document.querySelector("#Allotment").value
  );
  console.log(JSON.stringify(data));
  // return JSON.stringify(data);
}

function buttonClicked0() {
  console.log("very good");
}
function buttonClicked1() {
  var divToToggle = document.querySelector(".inputstyle");
  if (
    divToToggle.style.display === "none" ||
    divToToggle.style.display === ""
  ) {
    divToToggle.style.display = "block";
  } else {
    divToToggle.style.display = "none";
  }
}

function buttonClicked2() {
  var divToToggle = document.querySelector(".inputstyle");
  if (
    divToToggle.style.display === "none" ||
    divToToggle.style.display === ""
  ) {
    divToToggle.style.display = "block";
  } else {
    divToToggle.style.display = "none";
  }
}

function buttonClicked3() {
  var divToToggle = document.querySelector(".inputstyle");
  if (
    divToToggle.style.display === "none" ||
    divToToggle.style.display === ""
  ) {
    divToToggle.style.display = "block";
  } else {
    divToToggle.style.display = "none";
  }
}
var readbtn = document.getElementById("DataInput");
var show = false;

function buttonClicked4() {
  if (show) {
    readbtn.style.display = "none";
    show = false;
  } else {
    readbtn.style.display = "block";
    show = true;
  }
}
