export function Fish(fishObject){
    return `
    <section class="fish-card"> 
    <img 
        class="fish-card__image"
        src="https://tse2.mm.bing.net/th?id=OIP.VcLFy2ql_wTaXtrY2dPxGwHaHc&pid=Api" alt="Fish"
    />
    <div class="fish-card__text">
        <p>${fishObject.name}</p>
        <p>${fishObject.species}</p>
        <p>${fishObject.length}</p>
        <p>${fishObject.locationHarvest}</p>
        <p>${fishObject.food}</p>
    </div>
    </section>`
}