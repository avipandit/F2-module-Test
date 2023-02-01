const images = document.querySelectorAll('.gallery');
let currentIndex = 0;

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function () {
    if (i === currentIndex) {
      this.style.pointerEvents = 'none';
      currentIndex++;

      if (currentIndex === images.length) {
        alert('All images clicked in the correct order!');
      }
    } else {
      alert('Please click the images in the correct order.');
    }
  });
}

function showpage(){
    document.getElementById('form').style.visibility="visible";
}

function saveData(){
let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let uname = document.getElementById('username').value;

localStorage.setItem("name", name)
localStorage.setItem("email",email)
localStorage.setItem("username",uname)

}
function showdetails(){
    let NAME=localStorage.getItem('name');
    let Username=localStorage.getItem('username');

    alert("Hii" + "  "+NAME+" "+ "and Your username is"+"  "+Username);

}
function showdice(){
    document.getElementById('dice').style.visibility="visible";
}