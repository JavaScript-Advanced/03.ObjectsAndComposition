function solve(){
    function mage(name){
        let magigician = {
            name:name,
            health:100,
            stamina : 100,
        }

        function cast(magic){
            magigician.health-=1;

            console.log(`${this.name} cast ${magic}`);
        }
    }
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
