let welcomeButton = document.getElementById("welcomeBtn");
let welcomeMessage = document.getElementById("welcomeMessage");

welcomeButton.onclick = function(){
	welcomeMessage.textContent = "Welcome to Campus Tech Store!";
};


let discountButton = document.getElementById("discountBtn");
let priceInput = document.getElementById("priceInput");
let discountResult = document.getElementById("discountResult");

discountButton.onclick = function(){
	let price = Number(priceInput.value);
	
	if(price>0){
		let discount = price * 0.10;
		let finalPrice = price - discount;
		discountResult.textContent = "You received a 10% discount!  Discount: Rs."+discount+" | Final Price: Rs. " + finalPrice;
	}else{
		discountResult.textContent = "Please enter a valid product price: ";
	}
};

let contactForm = document.getElementById("contactForm");
let formMessage = document.getElementById("formMessage");

contactForm.onsubmit = function(event){
	event.preventDefault();
	
	let fullName = document.getElementById("fullname").value.trim();
	let email = document.getElementById("email").value.trim();
	let message = document.getElementById("message").value.trim();
	
	if(fullName === "" || email ==="" || message ===""){
		formMessage.textContent = "Please fill in all fields before submittting";
		formMessage.style.color = "red";
	}else if(!email.includes("@")){
		formMessage.textContent = "Please enter a valid email addresss";
		formMessage.style.color = "red";		
	}else if(message.length < 10){
		formMessage.textContent = "Message should be at least 10 characters long";
		formMessage.style.color = "red";
	}else{
		formMessage.textContent = "Form submitted successfully. Thank you!";
		formMessage.style.color = "green";		

	}
};


let searchButton = document.getElementById("searchBtn");
let searchInput = document.getElementById("searchInput");

searchButton.onclick = function(){
	let searchInput = document.getElementById("searchInput");
	const table = document.getElementById("productTable");
	const tr = table.getElementByTagName("tr");
	const userInput = searchInput.value.toUpperCase();
		
	for(let i=1; i<tr.length; i++){
		let td = tr[i].getElementsByTagName("td")[0];
		if (td){
			let txtValue = td.textContent || td.innerText;
			if(txtValue.toUpperCase().indexOf(userInput)>-1){
				tr[i].style.display = "";
			}else{
				tr[i].style.display = "none";
			}
		}
	}
};


let themeButton = document.getElementById("themeBtn");

themeButton.onclick = function(){
	document.body.classList.toggle("dark-mode");
};
