/*Variable*/
let coordX, coordY = 0;
let pointsArray = [];
/* DOM Manipulation */
let inputX = document.getElementById('coordX');
let inputY = document.getElementById('coordY');
let confirmBtn = document.getElementById('confirmCoord');
let table = document.getElementById('points');;
/*Listeners*/
confirmBtn.addEventListener('click', () => {//Création de listener pour le bouton "VALIDER" des coordonnées
    confirmCoordEvent();
    inputX.value = "";
    inputY.value = "";
});

/*Functions*/

//Confirm Coord Event est utilisée lorsqu'un utilisateur rentre une nouvelle coordoonée dans le tableau de point. Elle vérifie les coordonnées de l"utilisateur puis modifie le tableau
function confirmCoordEvent() {
    //Vérification de si les inputs sont bien complétés tous les deux
    if (inputX.value == "" || inputY.value == "") {
        alert("Entrez toutes les coordonnées svp");
        return;
    }
    coordX = parseInt(inputX.value);//On convertit la string (chaîne de caractère) en Int (nombre)
    coordY = parseInt(inputY.value);//On convertit la string (chaîne de caractère) en Int (nombre)
    updateTab();//Appel de la fonction de mise à jour du tableau
    return;
}

//UpdateTab est utilisée pour mettre à jour le tableau HTML (Le tableau que l'utilisateur voit) lorsqu'il ajoute un point à la courbe de Bézier mais également le tableau que l'utilisateur ne voit pas (JAVASCRIPT)
function updateTab() {
    //Mise à jour du tab JS
    pointsArray.push(new THREE.Vector2(coordX, coordY));
    //Mise à jour du tab HTML :
    //Cellules et ligne
    table.insertRow(1);//Insertion d'une ligne
    table.rows[1].insertCell(0); //Insertion d'une cellule dans la ligne
    table.rows[1].insertCell(1); //Insertion d'une cellule dans la ligne
    //Création des Input dans les différentes cellules
    createInput(table, 1, 0); //Création d'un input dans le tableau "table", à la ligne "1" et à la cellule "0"
    createInput(table, 1, 1); //Création d'un input dans le tableau "table", à la ligne "1" et à la cellule "1"
    //On transforme les coordonnées des différents points en "placeholder" pour améliorer l'USER EXPERIENCE (UX)
    table.rows[1].cells[0].children[0].placeholder = coordX;
    table.rows[1].cells[1].children[0].placeholder = coordY;
    //Création des boutons "modifier" dans les cellules du tableau
    createButton(table, 1, 0);//création d'un bouton dans le tableau "table", à la ligne "1" et à la cellule "0"
    createButton(table, 1, 1);//création d'un bouton dans le tableau "table", à la ligne "1" et à la cellule "1"  

    //Création des croix à côté des cases pour pouvoir supprimer des cases
    createDeleteCross(table, 1, 0);
    createDeleteCross(table, 1, 1);

    //Appel de la fonction qui met à jour Three.js pour représenter le Polygone de contrôle et la courbe de Bézier
    theScene(pointsArray);
}

//Create Input est utilisée pour créer un "input" HTML ou autrement dit une box pour que l'utilisateur entre du texte
function createInput(tab, row, cell) {
    let input = document.createElement("input");//Création DOM
    input.type = "text";//Type d'input
    input.className = "inputTab"; //Class de l'input pour qu'il prenne les bonnes stylisations en css
    tab.rows[row].cells[cell].appendChild(input);//On ajoute l'input au tableau dans une ligne et une cellule précise
}

//Create Button est utilisée pour créer un bouton en HTML. C'est le bouton qui va permettre de modifier une coordonée de la coubre de Bézier
function createButton(tab, row, cell){
    let btn = document.createElement("button");//Création DOM
    btn.textContent = "Modifier";//Texte qui s'affiche sur le bouton
    btn.className = "btnTab";//Class du bouton pour qu'il prenne la bonne stylisation
    tab.rows[row].cells[cell].appendChild(btn);//Ajout du bouton à la cellule du tableau
    addListenerButtonTab(tab.rows[row].cells[cell]);//Ajout d'un listeners sur ce bouton
}

//Create Delete Cross est utilisée pour créer des images "croix" en html. Ces images vont permettre de supprimer une ligne du tableau
function createDeleteCross(tab, row, cell){
    let cross = document.createElement("img");//Création image en HTML
    cross.src = "../css/close-icon.png";//Source de l'image croix dans nos fichiers
    cross.className = "crossTab";//Class de la croix
    tab.rows[row].cells[cell].appendChild(cross);//Ajout de la croix dans l'HTML
    addListenerDeleteCrossTab(tab.rows[row].cells[cell]);//Appel de la fonction listener
}

//Add Listener Button Tab est utilisée pour ajouter un listener sur un bouton d'une cellule du tableau. C'est cette fonction qui va rendre le bouton "modifier" utile 
function addListenerButtonTab(cell){
    cell.children[1].addEventListener('click', () => {//Ajout d'un listener de type "click"
        if (cell.children[0].value == ""){//Si jamais l'utilisateur n'a pas entré de valeur, on annule son action
            alert("Merci d'entrer une coordonnée valide");
            return;
        }
        //Si l'utilisateur arrive jusqu'ici, il a bien rempli l'input d'une valeur et les mises à jour vont se faire :
        cell.children[0].placeholder = cell.children[0].value; //On remplace le placeholder par ce que l'utilisateur a entré
        cell.children[0].value = "";//On supprime ce qui a été entré pour laisser le champ libre au place holder
        updateJsTabAfterCoordChange();//On met à jour le tableau en JAVASCRIPT
    });
}

//Add listener Delete Cross Tab est utilisée pour le clique de l'utilisateur sur la croix. Elle va supprimer la ligne sélectionnée.
function addListenerDeleteCrossTab(cell){
    cell.children[2].addEventListener('click', (oEvent)=> {
        let oEleBt = oEvent.currentTarget, oTr = oEleBt.parentNode.parentNode;//Repérage de la ligne
        oTr.remove();//Suppression de la ligne
        updateJsTabAfterCoordChange();//Mise à jour du tableau JS et donc de la figure                 
    });
}

//Update Js Tab After Coord Change est utilisée pour mettre à jour le Tableau JAVASCRIPT qui va interagir avec Three.js une fois qu'une modification de coordonnée a été effectuée
function updateJsTabAfterCoordChange(){
    pointsArray = [];//Le tableau JS est remis à 0
    //Boucle for qui ajoute les coordonnées dans le tableau
    for (let i = table.rows.length - 1; i > 0; i--){
        coordX = parseInt(table.rows[i].cells[0].children[0].placeholder);//On convertit la string (chaîne de caractère) en Int (nombre)
        coordY = parseInt(table.rows[i].cells[1].children[0].placeholder);//On convertit la string (chaîne de caractère) en Int (nombre)
        pointsArray.push(new THREE.Vector2(coordX, coordY));//On ajoute un nouveau VECTOR avec les bonnes coordonnées dans le tableau
    }
    theScene(pointsArray);
}