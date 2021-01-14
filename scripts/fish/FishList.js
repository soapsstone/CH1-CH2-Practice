import { useFish } from "./FishDataProvider.js";

import { Fish } from "./Fish.js";

let fishContainer = document.querySelector("#fish-list");

export function FishList(){
    const allTheFish = useFish();
    
    let fishListHTMLString = "";
    //called the for of loop
    for (const currentFishInLoop of allTheFish) {
        fishListHTMLString += Fish(currentFishInLoop);
    }

    //^^same as for( let i = 0; i < allTheFish.length; i++){
    //    fishListHTMLString += Fish(allTheFish[i]);
    //}

    console.log(fishListHTMLString);
   
    fishContainer.innerHTML = `<h2>My Fish</h2>${fishListHTMLString}`;
}
