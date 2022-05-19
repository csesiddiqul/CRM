const sideMenu = document.querySelector("aside");
const manuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

const themeToggler = document.querySelector(".them-toggler")

manuBtn.addEventListener('click',() =>{
    sideMenu.style.display ='block';
})
closeBtn.addEventListener('click',() =>{
    sideMenu.style ='noen';
})
//change theme
themeToggler.addEventListener('click',() =>{
    document.body.classList.toggle('dark-them-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})


  function personalInfo() {
    var x = document.getElementById("myDIV_0");
    if (x.style.display === "none") {
      x.style.display = "block";
      
    } else {
      x.style.display = "none";
    }
  }

  function presentAdd() {
    var x = document.getElementById("myDIV_1");
    if (x.style.display === "none") {
      x.style.display = "block";
      
    } else {
      x.style.display = "none";
    }
  }

  function permanentAdd() {
    var x = document.getElementById("myDIV_2");
    if (x.style.display === "none") {
      x.style.display = "block";
      
    } else {
      x.style.display = "none";
    }
  }

  function professionalEx() {
    var x = document.getElementById("myDIV_3");
    if (x.style.display === "none") {
      x.style.display = "block";
      
    } else {
      x.style.display = "none";
    }
  }
  function projectex() {
    var x = document.getElementById("myDIV_4");
    if (x.style.display === "none") {
      x.style.display = "block";
      
    } else {
      x.style.display = "none";
    }
  }



  function extrac() {
    var x = document.getElementById("myDIV_6");
    if (x.style.display === "none") {
      x.style.display = "block";
      
    } else {
      x.style.display = "none";
    }
  }
  

  function companyInfo() {
    var x = document.getElementById("myDIV_5");
    if (x.style.display === "none") {
      x.style.display = "block";
      
    } else {
      x.style.display = "none";
    }
  }


  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "" || x.style.display === "none") {
      x.style.display = "block";
      
    } else {
      x.style.display = "none";
    }
  }

  function humanRe(){
    var x = document.getElementById("human");

    if (x.style.display === "" || x.style.display === "none") {
      x.style.display = "block";
      
    } else {
      x.style.display = "none";
    }
  }

  var preloader = document.getElementById('loading');
  function myLoad(){
    preloader.style.display = 'none';
  }