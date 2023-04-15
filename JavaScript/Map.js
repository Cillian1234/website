let key = "AlxoOBoqcrjB1ZVDShisSZgDB0D42bRjIthV8ZJxCV_lT9eLjxy26iuK62R9CUa2";
let pin, infobox;
function GetMap() {
    "use strict";

    let map = new Microsoft.Maps.Map('#myMap',{
        credentials: key,
        center: new Microsoft.Maps.Location(53.35476326283124, -6.391312965712081),
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 15,
        maxZoom: 16,
        minZoom: 13,
        disableScrollWheelZoom: true,
        disableKeyboardInput: true,
        disablePanning: true,
        showLocateMeButton: false,
        disableBirdseye: true
    });

    let center = map.getCenter();

    pin = new Microsoft.Maps.Pushpin(center);
    pin.metadata = {
        title: "Shop",
        description: "@ Liffey Valley",
    };
    infobox = new Microsoft.Maps.Infobox(center, {
        visible: false
    });

    Microsoft.Maps.Events.addHandler(pin, 'click', pushpinClicked);

    infobox.setMap(map);
    map.entities.push(pin);
}

function pushpinClicked(e) {
    if (e.target.metadata) {
        infobox.setOptions({
            location: e.target.getLocation(),
            title: e.target.metadata.title,
            description: e.target.metadata.description,
            visible: true
        });
    }
}