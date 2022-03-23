const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/pikachu404.gif");
            document.getElementById("pokemon").innerHTML="No existe ese pokemon!";
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.other.dream_world.front_default;
            let name = data.name.toUpperCase();
            let pokeId = data.id;
            let height = data.height;
            let weight = data.weight;
            let tipos = data.types.map(typ => typ.type.name.toUpperCase());
            let moves = data.abilities.map(ab => ab.ability.name.toUpperCase());
            let hp = data.stats[0].base_stat;
            let atk = data.stats[1].base_stat;
            let def = data.stats[2].base_stat;
            let spatk = data.stats[3].base_stat;
            let spdef = data.stats[4].base_stat;
            let speed = data.stats[5].base_stat;

            pokeImage(pokeImg);
            document.getElementById("pokemon").innerHTML=pokemon;

            pokemon(name);
            pokeNum(pokeId);
            pokealt(height);
            pokepes(weight);
            poketipos(tipos);
            pokemoves(moves);
            pokehp(hp);
            atkStats(atk);
            defStats(def);
            spatkStats(spatk);
            spdefStats(spdef);
            speedStats(speed);
            console.log(pokeImg);
            console.log(name)
            console.log(pokeId);
            console.log(height);
            console.log(weight);
            console.log(tipos);
            console.log(moves);
            console.log(hp);
            console.log(atk);
            console.log(def);
            console.log(spatk);
            console.log(spdef);
            console.log(speed);
        }
    });
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const pokemon = (name) => {
    const pokemon = document.getElementById('pokemon');
    pokemon.textContent = name;
}

const pokeNum = (pokeId) => {
    const pokeNum = document.getElementById('pokeNum');
    pokeNum.textContent = "# " + pokeId;
}

const pokealt = (height) => {
    const pokealt = document.getElementById("pokealt");
    pokealt.textContent = height/10 + " m";
}

const pokepes = (weight) => {
    const pokepes = document.getElementById("pokepes");
    pokepes.textContent = weight/10 + " kg";
}

const poketipos = (tipos) => {
    const poketipos = document.getElementById("poketipos");
    poketipos.textContent = tipos;
}

const pokemoves = (moves) => {
    const pokemoves = document.getElementById("pokemoves");
    pokemoves.textContent = moves;
}

const pokehp = (hp) => {
    const pokehp = document.getElementById("pokehp");
    pokehp.textContent = "HP: " + hp;
}

const atkStats = (atk) => {
    const atkStats = document.getElementById("atkStats");
    atkStats.textContent = "ATK: " + atk;
}

const defStats = (def) => {
    const defStats = document.getElementById("defStats");
    defStats.textContent = "DEF: " + def;
}

const spatkStats = (spatk) => {
    const spatkStats = document.getElementById("spatkStats");
    spatkStats.textContent = "SP ATK: " + spatk;
}

const spdefStats = (spdef) => {
    const spdefStats = document.getElementById("spdefStats");
    spdefStats.textContent = "SP DEF: " + spdef;
}

const speedStats = (speed) => {
    const speedStats = document.getElementById("speedStats");
    speedStats.textContent = "SPEED: " + speed;
}
