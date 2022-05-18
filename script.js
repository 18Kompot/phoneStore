let phones = [];

function getPhones()
{
    fetch("http://localhost:3002/json_ar")
        .then((response) => response.json())
        .then((api_phones) => {
            // We have all the phones in an array called api_phones
            phones = api_phones;
            
            for (let i = 0; i < phones.length; i++)
            {
                addCardToPage(phones[i]);
            }

            for (let i = 0; i < phones.length; i++)
            {
                let name = phones[i].name.replaceAll(' ', '-').toLowerCase();
                let buyBtn = document.getElementById(`card-${name}`);
                buyBtn.addEventListener('click', () => {
                    if (phones[i].onSale > 0)
                        alert(`This product is on sale! ${phones[i].onSale}% off.`);
                    else
                        alert("No discount.");
                });
            }
        });
        

    //phones = json_ar;
    
}

function addCardToPage(phone_obj)
{
    // We're going to use the phone's name as an HTML id for our elements.
    // But spaces aren't allowed in an HTML id, so we replace all spaces in the phone's
    // name with dashes (-) and then transform the entire string to lowercase for our
    // convenience.
    let phone_name = phone_obj.name.replaceAll(' ', '-').toLowerCase();
    
    // Add card HTML
    let cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML +=
        `<div class="card row col">
                <div class="card-body" id="card-${phone_name}">
                    <p class="card-text">Name: ${phone_obj.name}</p>
                    <p class="card-text">Worth: ${phone_obj.worth}</p>
                    <p class="card-text">Released: ${phone_obj.rel_year}</p>
                    <img src="${phone_obj.image}" alt="...">
                    <span><input id="buyBtn-${phone_name}" class="btn btn-primary" type="submit" value="Buy now"></span>
                </div>
            </div>
        </div>`;
}