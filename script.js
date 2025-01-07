//! EXO 20.1 
//TODO: via JS afficher le profil  utilisateur dans la page web
const userData = {
    name: 'John delavega',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true,
    img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
};
console.log(userData);

const image = document.createElement('img');
image.setAttribute("src","https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg ");
document.body.appendChild(image);

const title = document.createElement('h1');
title.innerText = "John SEAGAL";
document.body.append(title);

const mail = document.createElement('p');
mail.innerText = "john.doe@example.com";
document.body.appendChild(mail);

const years = document.createElement('p');
years.innerText = "25";
document.body.appendChild(years);

const date = document.createElement('p');
date.innerText = "08/02/1989";
document.body.appendChild(date);

const act = document.createElement('p');
act.innerText = "true";
document.body.appendChild(act);

const adresse = document.createElement('p');
adresse.innerText = "44 rue du truc";
document.body.appendChild(adresse);


