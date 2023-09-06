const map = L.map('map').setView([30.3753, 69.3451], 3); // lat,long ->setView ...13 ->zoom

// open street map url*****
/* 
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'; 

const attri = ''; // add attribute of open street

const tiles = L.tileLayer(tileUrl);
tiles.addTo(map);
*/

// setallite
// googleSat = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{
//         maxZoom: 20,
//         subdomains:['mt0','mt1','mt2','mt3']
// });
// googleSat.addTo(map);

// hybrid
googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});
googleHybrid.addTo(map);





//  google map*****

// googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
//     maxZoom: 20,
//     subdomains:['mt0','mt1','mt2','mt3']
// });
// googleStreets.addTo(map);




// custom icon add **
/*
const icon = L.icon({
    iconUrl: './assets/images/icon.png'
    // add size for custom icon
})


const marker = L.marker([30.3753, 69.3451], {icon});
marker.addTo(map);
*/





// default icon **

// const marker = L.marker([30.3753, 69.3451], {color:'blue'});
// marker.bindPopup('<h3>Pakistan</h3>');
// marker.addTo(map);

function applyStyles(id = '') {

    if (id === 'div-overlay-pk') {
        const divOverlay = document.getElementById(id);
        const divOverlayUk = document.getElementById('div-overlay-uk');
        const divOverlayUsa = document.getElementById('div-overlay-usa');
        let btnPicture = document.getElementById('btn-pic-pk');
        let Paddiv = document.getElementById('div-pad-pk');
        let btnPictureUk = document.getElementById('btn-pic-uk');
        let PaddivUk = document.getElementById('div-pad-uk');
        let btnPictureUsa = document.getElementById('btn-pic-usa');
        let PaddivUsa = document.getElementById('div-pad-usa');
        divOverlayUk.style.bottom = '-335px';
        divOverlayUsa.style.bottom = '-335px';

        btnPictureUk.style.display = 'none';
        btnPictureUsa.style.display = 'none';
        btnPicture.style.display = 'block';

        btnPicture.style.paddingTop = '5px';

        PaddivUk.style.paddingTop = '20px';
        PaddivUsa.style.paddingTop = '20px';
        Paddiv.style.paddingTop = '0px';


        if (divOverlay) {
            divOverlay.style.transition = 'bottom 0.9s ease';
            divOverlay.style.bottom = '-59px';
        }
    }

    if (id === 'div-overlay-uk') {
        const divOverlay = document.getElementsByClassName(id);
        const divOverlayPk = document.getElementById('div-overlay-pk');
        const divOverlayUsa = document.getElementById('div-overlay-usa');
        let btnPicture = document.getElementById('btn-pic-uk');
        let Paddiv = document.getElementById('div-pad-uk');
        let btnPicturePk = document.getElementById('btn-pic-pk');
        let PaddivPk = document.getElementById('div-pad-pk');
        let btnPictureUsa = document.getElementById('btn-pic-usa');
        let PaddivUsa = document.getElementById('div-pad-usa')
        divOverlayPk.style.bottom = '-335px';
        divOverlayUsa.style.bottom = '-335px';

        btnPicturePk.style.display = 'none';
        btnPictureUsa.style.display = 'none';
        btnPicture.style.display = 'block';


        btnPicture.style.paddingTop = '5px';

        PaddivPk.style.paddingTop = '20px';
        PaddivUsa.style.paddingTop = '20px';
        Paddiv.style.paddingTop = '0px';

        if (divOverlay) {
            divOverlay.style.transition = 'bottom 0.9s ease';
            divOverlay.style.bottom = '-59px';
        }
    }
    if (id === 'div-overlay-usa') {
        const divOverlay = document.getElementById(id);
        const divOverlayPk = document.getElementById('div-overlay-pk');
        const divOverlayUk = document.getElementById('div-overlay-uk');
        let btnPicture = document.getElementById('btn-pic-usa');
        let Paddiv = document.getElementById('div-pad-usa');
        let btnPicturePk = document.getElementById('btn-pic-pk');
        let PaddivPk = document.getElementById('div-pad-pk');
        let btnPictureUk = document.getElementById('btn-pic-uk');
        let PaddivUk = document.getElementById('div-pad-uk')

        divOverlayPk.style.bottom = '-335px';
        divOverlayUk.style.bottom = '-335px';

        btnPicturePk.style.display = 'none';
        btnPictureUk.style.display = 'none';
        btnPicture.style.display = 'block';

        btnPicture.style.paddingTop = '10px';

        PaddivPk.style.paddingTop = '20px';
        PaddivUk.style.paddingTop = '20px';
        Paddiv.style.paddingTop = '0px';

        if (divOverlay) {
            divOverlay.style.transition = 'bottom 0.9s ease';
            divOverlay.style.bottom = '-59px';
        }
    }





}

function applyStylesMinus(id1 = '', id2 = '', id3 = '') {
    const divOverlayPk = document.getElementById(id3);
    let btnPicture = document.getElementById(id1);
    let padDiv = document.getElementById(id2);
    btnPicture.style.display = 'none';
    padDiv.style.paddingTop = '20px';
    divOverlayPk.style.bottom = '-335px';
}



const markerIsl = L.marker([33.6844, 73.0479], { color: 'blue' });
markerIsl.bindPopup('<h3>Islamabad, Pakistan</h3>');
markerIsl.addTo(map);



markerIsl._icon.addEventListener('click', function () {
    applyStyles('div-overlay-pk'); // Call the applyStyles function
    map.flyTo([33.6844, 73.0479], 12, {
        duration: 5,
        animate: true,
        pan: { x: 500, y: 0 }, // Scroll the map 500 pixels to the right (adjust as needed)
    });
});

function funcIsl() {


    applyStyles('div-overlay-pk'); // Call the applyStyles function
    map.flyTo([33.6844, 73.0479], 12, {
        duration: 5,
        animate: true,
        pan: { x: 500, y: 0 }, // Scroll the map 500 pixels to the right (adjust as needed)
    });
}
function funcUk() {


    // applyStyles('div-overlay-uk'); // Call the applyStyles function
    map.flyTo([53.4084, 2.9916], 6, {
        duration: 5,
        animate: true,
        pan: { x: 500, y: 0 }, // Scroll the map 500 pixels to the right (adjust as needed)
    });
}
function funcUsa() {


    applyStyles('div-overlay-usa'); // Call the applyStyles function
    map.flyTo([44.3148, 85.6024], 12, {
        duration: 5,
        animate: true,
        pan: { x: 500, y: 0 }, // Scroll the map 500 pixels to the right (adjust as needed)
    });
}

// general function to call contary start
function allContray(Lat,Long) {
    map.flyTo([Lat, Long], 6, {
        duration: 5,
        animate: true,
        pan: { x: 500, y: 0 }, 
    });
    const contrayMarker = L.marker([Lat, Long], { color: 'blue' });
    contrayMarker.addTo(map);
}
// general function to call contary end



const markerLiverpool = L.marker([53.4084, 2.9916], { color: 'blue' });
markerLiverpool.bindPopup('<h3>Liverpool, UK</h3>');
markerLiverpool.addTo(map);

markerLiverpool._icon.addEventListener('click', function () {
    applyStyles('div-overlay-uk'); // Call the applyStyles function
    map.flyTo([53.4084, 2.9916], 12, {
        duration: 5,
        animate: true,
        pan: { x: 500, y: 0 }, // Scroll the map 500 pixels to the right (adjust as needed)
    });
});

const markerMunich = L.marker([48.1351, 11.5820], { color: 'blue' });
markerMunich.bindPopup('<h3>Munich, Germany</h3>');
markerMunich.addTo(map);

const markerMichigan = L.marker([44.3148, 85.6024], { color: 'blue' });
markerMichigan.bindPopup('<h3>Michigan, USA</h3>');
markerMichigan.addTo(map);

markerMichigan._icon.addEventListener('click', function () {
    applyStyles('div-overlay-usa'); // Call the applyStyles function
    map.flyTo([44.3148, 85.6024], 12, {
        duration: 5,
        animate: true,
        pan: { x: 500, y: 0 }, // Scroll the map 500 pixels to the right (adjust as needed)
    });
});

const markerQuebec = L.marker([46.8131, 71.2075], { color: 'blue' });
markerQuebec.bindPopup('<h3>Quebec, Canada</h3>');
markerQuebec.addTo(map);


let existingMarker = null;
function listItem() {
    let selectElement = document.getElementById('filter-select');
    let selectedText = selectElement.options[selectElement.selectedIndex].text;

    list.forEach((item) => {
        if (selectedText === item.properties.name) {
            // If the marker already exists, update its position and popup content
            if (existingMarker) {
                existingMarker.setLatLng(item.geometry.coordinates);
                existingMarker.getPopup().setContent(item.properties.name);
            } else {
                // If the marker doesn't exist, create and add it to the map
                existingMarker = L.marker(item.geometry.coordinates, { color: 'blue' });
                existingMarker.bindPopup(item.properties.name);
                existingMarker.addTo(map);
            }

            map.flyTo(item.geometry.coordinates, 5, { duration: 3 });
        }
    });
}
