
/* EJERCICIO 1 */
const ArrayEjemplo = [
    {
        nombre: 'Adriana Paola',
        edad: 18,
    }
]

/* PUSH */
ArrayEjemplo.push({ nombre: 'Melanie', edad: 19 });
ArrayEjemplo.forEach(Array => {
    console.log(Array.nombre);
});

/* REDUCE (Utilizado para encontrar la persona màs joven dentro del array)*/
const personaMasJoven = ArrayEjemplo.reduce((personaMasJoven, persona) => {
    if (!personaMasJoven || persona.edad < personaMasJoven.edad) {
        return persona;
    }
    return personaMasJoven;
}, null);
console.log("La persona más joven es:", personaMasJoven.nombre, "con", personaMasJoven.edad, "años.");

/* FILTER */
const ArrayEjemploNombres = [];
ArrayEjemplo.forEach(Array => {
    ArrayEjemploNombres.push(Array.nombre);
});
console.log(resultFilter = ArrayEjemploNombres.filter((word) => word.length > 9));

/* EJERCICIO 2 */
const cancionesFavoritas = [
    {
        nombreCancion: 'Bismark',
        grupoCancion: 'Sabaton',
        src: 'https://www.sabaton.net/wp-content/uploads/2022/03/sabaton-bismarck-cover-500x500-1.jpg'
    },

    {
        nombreCancion: 'No Surrender',
        grupoCancion: 'Beast In Black',
        src: 'https://artwork.anghcdn.co/webp/?id=174476438&size=320'
    },

    {
        nombreCancion: 'Night Witches',
        grupoCancion: 'Sabaton',
        src: 'https://i1.sndcdn.com/artworks-F1kffCMVzDkj-0-t500x500.jpg'
    },

    {
        nombreCancion: 'We Drink Your Blood',
        grupoCancion: 'Powerwolf',
        src: 'https://cdns-images.dzcdn.net/images/cover/4659d4d1655e3bb97f7195bd8ee0e16e/350x350.jpg'
    },

    {
        nombreCancion: 'To Hell and Back',
        grupoCancion: 'Sabaton',
        src: 'https://www.sabaton.net/wp-content/uploads/2022/03/heroes-cover-500x500-1.jpg'
    },

    {
        nombreCancion: 'Panick Attack',
        grupoCancion: 'Judas Priest',
        src: 'https://m.media-amazon.com/images/I/916ojydQyZL._UF1000,1000_QL80_.jpg'
    },

    {
        nombreCancion: 'The Phantom of the Opera',
        grupoCancion: 'Nightwish',
        src: 'https://i.scdn.co/image/ab67616d0000b2737dc7ccc9efe21a79a25b0bc9'
    },

    {
        nombreCancion: 'Empty Walls (Live Orchesta)',
        grupoCancion: 'Serj Tankian',
        src: 'https://i1.sndcdn.com/artworks-000427426686-45ajll-t500x500.jpg'
    },

    {
        nombreCancion: 'Memento Mori',
        grupoCancion: 'Dunedain',
        src: 'https://i0.wp.com/metalcry.com/wp-content/uploads/2019/10/dunedain-memento-mori.jpg?fit=1024%2C1024&ssl=1'
    },

    {
        nombreCancion: 'La Llorona',
        grupoCancion: 'Saurom',
        src: 'https://i.scdn.co/image/ab67616d0000b273bac24c6d5f1891acc076afe4'
    }
]

// Obtener el contenedor donde se mostrarán los cards
const musicCardsContainer = document.getElementById('containerMusic');

// Mapear cada usuario a un elemento HTML de card de Bootstrap
const musicCards = cancionesFavoritas.map(song => `
<div class="cardC position-relative d-flex flex-column align-items-center justify-content-center">
    <div class="z-3 text-white position-absolute">
        <h2 class="mb-3"> ${song.nombreCancion} </h2>
        <h5> ${song.grupoCancion} </h5>
    </div>
    <div class="black position-absolute z-2"></div>
    <img src="${song.src}"
        class="position-absolute img z-1">
</div>
`);

// Agregar los cards al contenedor
musicCardsContainer.innerHTML = musicCards.join(''); 