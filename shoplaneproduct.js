var left=document.getElementById("left-column");

var images=document.createElement('img');
images.className="mens";
images.src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg";
images.alt="";


left.appendChild(images);

var right=document.getElementById("right-column");

var heading=document.createElement('h1');
heading.innerHTML="Men Navy Blue Solid Sweatshirt";
heading.className="heading";
var brand=document.createElement('h4');
brand.innerHTML="United colors of Bennetton";
brand.className="brand";
var price=document.createElement('h3');
price.innerHTML=" Price: Rs 2599";
price.className="price";

right.appendChild(heading);
right.appendChild(brand);
right.appendChild(price);

var description=document.createElement('h3');
description.className="descri";
description.innerHTML="DESCRIPTION";

var para=document.createElement('p');
para.className="para";
para.innerHTML="Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem";
right.appendChild(description);
right.appendChild(para);


var productPreview=document.createElement('div');
productPreview.className="product";

var pro=document.createElement('h3');
pro.className="pro";
pro.innerHTML="Product Preview";

productPreview.appendChild(pro);

right.appendChild(productPreview);

var full=document.createElement('img');
full.className="mini";
full.src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg";
full.alt="mini";
var zoom=document.createElement('img');
zoom.className="mini";
zoom.src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg";
zoom.alt="mini active";
var tilt=document.createElement('img');
tilt.className="mini";
tilt.src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg";
tilt.alt="mini";
var back=document.createElement('img');
back.className="mini";
back.src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg";
back.alt="mini active";
var sit=document.createElement('img');
sit.className="mini";
sit.src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg";
sit.alt="mini active";
var empty=document.createElement('img');
empty.className="mini empty";
empty.src="";
empty.alt=""
var total=document.createElement('div');
total.className="total";

total.appendChild(full);
total.appendChild(zoom);
total.appendChild(tilt);
total.appendChild(back);
total.appendChild(sit);
total.appendChild(empty);
right.appendChild(total);
var shoplane=document.getElementById("shoplane");

shoplane.appendChild(left);
shoplane.appendChild(right);




var productData = {
  "id": "1",
  "name": "Men Navy Blue Solid Sweatshirt",
  "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  "photos": [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
  ],
  "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  "size": [
    1,
    1,
    0,
    1,
    0
  ],
  "isAccessory": false,
  "brand": "United Colors of Benetton",
  "price": 2599
}

   full.onclick=function(){
    
     images.src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg";
  full.className="some";
     zoom.className="other";
     tilt.className="other";
     back.className="other";
     sit.className="other";
      empty.className="other";
   }
  
  zoom.onclick=function(){
    images.src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg";
   
    full.className="other";
     zoom.className="some";
     tilt.className="other";
     back.className="other";
     sit.className="other";
     empty.className="other";
   }


tilt.onclick=function(){
   
  images.src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg";
  full.className="other";
     zoom.className="other";
     tilt.className="some";
     back.className="other";
     sit.className="other";
   empty.className="other";
   }
back.onclick=function(){
    
  images.src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg";
  full.className="other";
     zoom.className="other";
     tilt.className="other";
     back.className="some";
     sit.className="other";
   empty.className="other";
   }
sit.onclick=function(){
     
  images.src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg";
  
  full.className="other";
     zoom.className="other";
     tilt.className="other";
     back.className="other";
     sit.className="some";
  empty.className="other";
   }

empty.onclick=function(){
  images.src="";
   full.className="other";
     zoom.className="other";
     tilt.className="other";
     back.className="other";
     sit.className="other";
  empty.className="some";
}

var button=document.createElement('button');
button.innerHTML="Add To Cart";
right.appendChild(button);
