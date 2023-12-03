const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', ()=>{
    container.classList.add('active');
});

loginBtn.addEventListener('click', ()=>{
    container.classList.remove('active');
});


// // ---------------------------------- DATA MEMBER -----------------------------------------------------------

// result contain Reg.no' as key and result of particular Reg.no' is value.
const result = {12311302:{"maths":86, "int":85, "cse326":96, "ece249":86, "evs":80, "cse111":95, "pes318":70},
                12386954:{"maths":86, "int":85, "cse326":96, "ece249":86, "evs":80, "cse111":95, "pes318":70},
                12309113:{"maths":86, "int":85, "cse326":96, "ece249":86, "evs":80, "cse111":95, "pes318":70},
                12310689:{"maths":86, "int":85, "cse326":96, "ece249":86, "evs":80, "cse111":95, "pes318":70},
                12310767:{"maths":86, "int":85, "cse326":96, "ece249":86, "evs":80, "cse111":95, "pes318":70},     
};

// login is a Dictionary it contain collection of pair of (reg.no' and password).
const login = {12311302:"lpu12345", 
               12386954:"lpu12345", 
               12309113:"lpu12345", 
               12310689:"lpu12345", 
               12310767:"lpu12345"
};

// detail name section rollno 
const detail = {
                12311302:{name:"Shubham", section:"k23le", rollno:48},
                12386954:{name:"Shubham", section:"k23nk", rollno:48}, 
                12309113:{name:"Shubham", section:"k23nk", rollno:48}, 
                12310689:{name:"Shubham", section:"k23nk", rollno:48}, 
                12310767:{name:"Shubham", section:"k23nk", rollno:48}
};

// // ------------------------ END DATA MEMBER ----------------------------------------------------------





// --------------------- EventListener ------------------------------
let login_button = document.getElementById("login_button");
login_button.addEventListener("click",submit);


let SignUp_button = document.getElementById("SignUp_button");
SignUp_button.addEventListener("click", function(e){e.preventDefault;make_result();});

// ------------------------- End EventListener -----------------------





function submit(){
    
    var regno = document.getElementById("user_reg_no").value;
    var pass = document.getElementById("user_password").value;

    regno = Number(regno);

    if (regno){

        if (login[regno] == pass) {   
            // alert("Successfull Authentication");
            show_result(regno)
        }

        else if (login[regno] == undefined){
            alert("Invalid Registration Number!")
        }

        else if (login[regno] != pass){
            alert("Invalid Password !")
        }

    }
   
}



function show_result(regno) {
    
    document.write(html_result(regno));
}



function html_result(regno){

const Registration_no = regno;
const {name:user_name, section, rollno:roll_no} = detail[Registration_no];  
const {maths, int:python, cse326, ece249, evs, cse111, pes318} = result[Registration_no];


var html_content = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Marks Report</title>
  <link rel="stylesheet" href="result.css">
</head>
<body>
  <header>
    <h1>Student Marks Report</h1>
  </header>
  
  <main>
    <section class="student-info">
      <h2>Student Information</h2>
      <p id="reg_no" ><strong>Registration No. </strong> ${Registration_no}</p>
      <p id="name" ><strong>Name:</strong> ${user_name}</p>
      <p id="section" ><strong>Section:</strong> ${section}</p>
      <p id="roll_no" ><strong>Roll Number:</strong> ${roll_no}</p>
    </section>
    
    <section class="marks-table">
      <h2>Marks</h2>
      <table>
        <tr>
          <th>Subject</th>
          <th>Score</th>
        </tr>
        <tr>
          <td>Mathematics</td>
          <td> ${maths}</td>
        </tr>
        <tr>
          <td>Python Programming</td>
          <td> ${python}</td>
        </tr>
        <tr>
          <td>Internet Programming Laboratory</td>
          <td> ${cse326}</td>
        </tr>
        <tr>
            <td>ECE</td>
            <td> ${ece249}</td>
        </tr>
        <tr>
            <td>Environmental Studies</td>
            <td> ${evs}</td>
        </tr>
        <tr>
            <td>Orientation to computing</td>
            <td> ${cse111}</td>
        </tr>
        <tr>
            <td>soft skills</td>
            <td> ${pes318}</td>
        </tr>
        <!-- Add more subjects and scores here -->
      </table>
    </section>
  </main>

</body>
</html>
`;
return html_content;

}




















function make_result(){

  var regno = document.getElementById("new_regno").value;
  var pass = document.getElementById("new_password").value;
  var userName = document.getElementById("new_name").value;

  const start = function(regno,userName,pass){
    function toTitleCase(str) {
      return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }

    let Username = toTitleCase(userName);
    create_login_detail(regno,pass);
    
    let dict = {name:[Username], section:[generateRandomSection()], rollno:[generateRandomRollNumber()]}
    create_user_detail(regno,dict)
    
    dict = {"maths":[generateRandomMarks()], "int":[generateRandomMarks()], "cse326":[generateRandomMarks()], "ece249":[generateRandomMarks()], "evs":[generateRandomMarks()], "cse111":[generateRandomMarks()], "pes318":[generateRandomMarks()]}
    create_user_marks(regno,dict)

    // let text = `${typeof regno} -> ${regno} \n${typeof userName} -> ${userName} \n${typeof pass} -> ${pass}`
    // alert(text);
  }

 

  if (regno.length === 8){
    regno = Number(regno);
    // alert(regno);

    // if regno is number then
        if (regno){
            // alert("pass the Reg no. ");
            if (pass){
              if (pass.length <= 3){
                alert("Invalid Password! \n Please enter a password with more than 3 characters");
              }

              else if (userName){
                  var regex = /^[a-zA-Z ]+$/;
                  if (userName.length < 3){
                    alert("Invalid Username! \n Please enter Username more then 2 characters");
                  }
                  else if (regex.test(userName)){
                    // // ------------------------------ Final out ----->
                    start(regno,userName,pass);
                    alert("Successful created!");
                  }else{
                    alert("Invalid Username! \n Please enter only letters and spaces.");
                  }
      
              }else{
                  alert("Invalid Username!");
              }
      
            }else {
            alert("Invalid Password!");
            }


        }else{
            alert("Invalid Registration Number! \n Please enter Integer number");
        }

  }else{
    alert("Invalid Registration Number! \n Please enter an 8-digit number");
  }

}







function create_login_detail(Regno,passcod){
  login[Regno] = passcod;
}




function create_user_detail(Regno,dict){
detail[Regno] = dict; 
}




function create_user_marks(Regno,dict){
result[Regno] = dict;
}











// Function to generate a random name
function generateRandomName() {
  // Arrays of first names and last names
  const firstNames = ['Alice', 'Bob', 'Charlie', 'Diana', 'Emma', 'Frank', 'Grace', 'Henry'];
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis'];
  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${randomFirstName} ${randomLastName}`;
}

function generateRandomSection() {
  // Arrays of first names and last names
  const year = ['K20','K21', 'K22', 'K23'];
  const group = ['UR', 'MP', 'NK', 'LE', 'PE', 'GU', 'NO', 'HP', 'HS', 'MK', 'CG', 'MH', 'UP'];
  const randomYear = year[Math.floor(Math.random() * year.length)];
  const randomGroup = group[Math.floor(Math.random() * group.length)];
  return `${randomYear}${randomGroup}`;
}

function generateRandomRollNumber() {
  return Math.floor(Math.random() * 70) + 1; // Generates a random number between 0 and 69, then adds 1 to make it between 1 and 70
}


// Function to generate random marks between 45 and 95
function generateRandomMarks() {
  return Math.floor(Math.random() * (95 - 45 + 1)) + 45; // Generates a random number between 45 and 95
}



