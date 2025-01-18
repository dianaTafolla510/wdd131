//select DOM elements for output

const year = document.querySelector("#year");
const today = new Date();

year.innerHTML = `&copy <span class="currentYear">${today.getFullYear()}</span>`;

// Last modification

//alert(document.lastModified);
//let oLastModif = new Date(document.lastModified);

const date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = date;


