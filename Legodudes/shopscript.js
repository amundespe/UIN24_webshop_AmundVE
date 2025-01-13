console.log(products);

//Gå gjennom alle produkter, generere HTML for hvert produkt, skrive dette til index.html

//En variable som kan holde på HTML-en for produktene
let productHTML = "";

products.map((product, index) => productHTML += 
            `<article class="product-card">
                <img src="website_images/PROD_${product.imagefile}" alt="PRODUKTTITTEL" />
                <a href="#KATEGORISIDE">Ninjago</a>
                <h3>${product.title}</h3>
                <p>${product.price},-</p>
                <button>Legg i handlekurv</button>
            </article>`
            );

//FInn #productlist, og fyll den med vardiene i variabelen productHTML
document.getElementById("productlist").innerHTML = productHTML;