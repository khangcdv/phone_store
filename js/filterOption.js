let typeP = [];

function supFilterType(idSelect){
    let tempArray = [];
    let tempP; 
    productService.fetchProducts()
    .then(function(response){

        let arrayData = response.data;

        for (let i = 0; i < arrayData.length; i++) {
            let productType = arrayData[i].type.toLowerCase();
            for(let j = 0; j < arrayData.length; j ++){
               if(productType !== arrayData[j].type.toLowerCase())
               {
                tempP = productType[0].toUpperCase() + productType.substring(1);
                tempArray.push(tempP);
               }
            }
            
        }
        let tempTypeP = new Set(tempArray);
         typeP = [...tempTypeP];
      
         renderOption(typeP, idSelect);
    })
    .catch(function (error) {
        console.log("Error", error);
    });
}


function renderOption(data, optionId){

 let html ='';
 for (let i = 0; i < data.length; i++) {
    let optionTag = document.createElement("option");
    let dataInOption = document.createTextNode(data[i]);
    optionTag.appendChild(dataInOption);
    document.getElementById(optionId).appendChild(optionTag);
}
}

