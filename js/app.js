//I save start button and initial container nodes in variables
let btnStartApp = document.getElementById('btnStartApp');
let inicioContainer = document.querySelector('.inicioContainer');
let dinamicList = document.getElementById('dinamicList');
let newItemContainer;
let listOfItems = [];
let listOfItemsContainer = document.getElementById('listOfItemsContainer');




//function to start the app
const start = () => {
    //I hide the first starscreen of the app
    inicioContainer.classList.add('disabled');

    // create a new container
    newItemContainer = document.createElement('div');
    //and render a form to add a new product
    newItemContainer.innerHTML = `
        <select id="category" class="form-select space" aria-label="Default select example">
                <option selected>Categoria</option>
                <option value="🍗">🍗</option>
                <option value="🥛">🥛 </option>
                <option value="🧹">🧹</option>
        </select>
        <div class="input-group mb-3 space">
            <span class="input-group-text" id="inputGroup-sizing-default">Título</span>
            <input id="itemName" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        </div>
            <div class="input-group space">
            <span class="input-group-text">Descripción</span>
            <textarea id="description" class="form-control" aria-label="With textarea"></textarea>
        </div>
        <div><button id="addNewItem" class="btnNewItem space">Agregar</button></div>
    `;


    dinamicList.append(newItemContainer);

    // I save the button node to add a new item in a variable and add a listener to it
    let addNewItem = document.getElementById('addNewItem');
    addNewItem.addEventListener('click', renderListOfItems);


}
// event to call start function
btnStartApp.addEventListener('click', start);


//function that render a list of added items
const renderListOfItems = () => {

    //I define a button to return to previous screen
    let buttonBackContainer = document.querySelector('.buttonBackContainer')

    listOfItemsContainer.style.display = 'block'

    let btnBack = document.createElement('button');
    btnBack.classList.add('btnBack');
    btnBack.innerText = '+'
    buttonBackContainer.append(btnBack);

    btnBack.addEventListener('click', ()=> {

        newItemContainer.classList.replace('disabled','enabled');
        buttonBackContainer.innerHTML = "";
        listOfItemsContainer.style.display = 'none'
        //The conditional change the class of the item list to hide it (the list is created later in this function)
        if(listOfItemsContainer.classList == 'enabled'){
            listOfItemsContainer.classList.replace('enabled','disabled')
        } else if (listOfItemsContainer.classList == ''){
            listOfItemsContainer.classList.add('disabled')
        }
        descriptionContainer.style.display = 'none'
    })
    
    // I change the container class to display none
    newItemContainer.classList.add('disabled');

    // I save the value of the item in variable
    let category = document.getElementById('category');
    let itemName = document.getElementById('itemName')
    let description = document.getElementById('description')

    itemContainer = document.createElement('div');

        itemContainer.innerHTML += `
            <div class="itemAddedContainer">
                <p class="topZero">${category.value}</p>    
                <h2 class="topZero">${itemName.value}</h2>
                <p class="disabled itemDescription">${description.value}</p>
                <button onclick="descriptionRender('${category.value}', '${itemName.value}', '${description.value}')" class="btnMore">></button>
            </div> 
            ` 

    // If the class is 'disabled' (added with the back button) it changes to enabled
    if(listOfItemsContainer.classList == 'disabled') {
        listOfItemsContainer.classList.replace('disabled','enabled')
    }

    listOfItemsContainer.append(itemContainer)

    itemName.value = "";
    description.value = "";
}
//This function renders the description of the selected item
const descriptionRender = (category,itemName, description) => {

    listOfItemsContainer.style.display = 'none'
    
    let descriptionContainer = document.getElementById('descriptionContainer')

    descriptionContainer.style.display = 'flex'

    if(listOfItemsContainer.classList == 'enabled'){
        listOfItemsContainer.classList.replace('enabled','disabled')
    } else if (listOfItemsContainer.classList == '') {
        listOfItemsContainer.classList.add('disabled')
    }

    descriptionContainer.innerHTML = `
                <div class="btnCloseDescriptionContainer"><button id="btnDescriptionClose">X</button></div>
                <p class="itemIcon">${category}</p>    
                <h2 >${itemName}</h2>
                <p>${description}</p> 
    `
    let btnDescription = document.getElementById('btnDescriptionClose')
    btnDescription.addEventListener('click', () => {
        descriptionContainer.style.display = 'none'
        listOfItemsContainer.style.display = 'block'
    })
}






