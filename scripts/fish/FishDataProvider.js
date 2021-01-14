/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
        length: "57cm",
        locationHarvested: "",
        typeOfFish: ""
    },
    {
        name: "Poppy",
        food: "seeds",
        length: "100cm",
        locationHarvested: "Ohio River",
        typeOfFish: "Sun Fish"

    },
    {
        name: "Sam",
        food: "other fish",
        length: "68cm",
        locationHarvested: "South of France",
        typeOfFish: "Clown"

    },
    {
        name: "Marney",
        food: "Jelly Fish",
        length: "307cm",
        locationHarvested: "Atlantic",
        typeOfFish: "Big Fish"

    },
    {
        name: "Bruce",
        food: "Anything it wants ",
        length: "1020cm",
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Great White Shark"

    },
    {
        name: "Nancy",
        food: "Anything it wants ",
        length: "1020cm",
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Great White Shark"

    },
    {
        name: "Duke",
        food: "Anything it wants ",
        length: "1020cm",
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Great White Shark"

    },
    {
        name: "Samson",
        food: "Anything it wants ",
        length: "1020cm",
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Great White Shark"

    },
]

export function useFish() {
    return fishCollection.slice()
}

{/*div class="main-content">
{/* Fish List        	 */}
{/* <article class="fish-list">
    <h2>My Fish</h2>
    
    {/* <Fish Card */}
    {/*<section class="fish-card"> 
        <img class="fish-card__image"
        src="https://tse2.mm.bing.net/th?id=OIP.VcLFy2ql_wTaXtrY2dPxGwHaHc&pid=Api" alt="Fish"/>
        <div class="fish-card__text">
            <p>Beta Fish</p>
            <p>2 inches</p>
            <p>George</p>
            <p>Galapagos Island</p>
            <p>Pretzels</p>
        </div>
    </section>
​
    <section class="fish-card">
        <img class="fish-card__image"
        src="https://tse2.mm.bing.net/th?id=OIP.VcLFy2ql_wTaXtrY2dPxGwHaHc&pid=Api" alt="Fish"/>
        <div class="fish-card__text">
            <p>Beta Fish</p>
            <p>2 inches</p>
            <p>George</p>
            <p>Galapagos Island</p>
            <p>Pretzels</p>
        </div>
    </section>
​
    <section class="fish-card">
        <img class="fish-card__image"
        src="https://tse2.mm.bing.net/th?id=OIP.VcLFy2ql_wTaXtrY2dPxGwHaHc&pid=Api" alt="Fish"/>
        <div class="fish-card__text">
            <p>Beta Fish</p>
            <p>2 inches</p>
            <p>George</p>
            <p>Galapagos Island</p>
            <p>Pretzels</p>
        </div>
    </section>
​
    <section class="fish-card">
        <img class="fish-card__image"
        src="https://tse2.mm.bing.net/th?id=OIP.VcLFy2ql_wTaXtrY2dPxGwHaHc&pid=Api" alt="Fish"/>
        <div class="fish-card__text"><p>Beta Fish</p>
        <p>2 inches</p>
        <p>George</p>
        <p>Galapagos Island</p>
        <p>Pretzels</p>
        </div>
    </section>
​
    <section class="fish-card">
        <img class="fish-card__image"
        src="https://tse2.mm.bing.net/th?id=OIP.VcLFy2ql_wTaXtrY2dPxGwHaHc&pid=Api" alt="Fish"/>
        <div class="fish-card__text"><p>Beta Fish</p>
        <p>2 inches</p>
        <p>George</p>
        <p>Galapagos Island</p>
        <p>Pretzels</p></div>
    </section>
​
    <section class="fish-card">
        <img class="fish-card__image"
        src="https://tse2.mm.bing.net/th?id=OIP.VcLFy2ql_wTaXtrY2dPxGwHaHc&pid=Api" alt="Fish"/>
        <div class="fish-card__text"><p>Beta Fish</p>
        <p>2 inches</p>
        <p>George</p>
        <p>Galapagos Island</p>
        <p>Pretzels</p></div>
    </section>
</article>
</div> */}