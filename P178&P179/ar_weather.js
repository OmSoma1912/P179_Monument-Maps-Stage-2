let coordinates = {}

$(documents).ready(function(){
    get_coordinates();
})

function get_coordinates(){
    let searchParams = new URLSearchParams(window.location.search)
    if(searchParams.has('source') && searchParams.has('destination')){
        let source = sourceParams.get('source')
        let destination = sourceParams.get('source')
        coordinates.source_lat = source.split(';')[0]
        coordinates.source_lon = source.split(';')[1]
        coordinates.destination_lat = destination.split(';')[0]
        coordinates.destination_lon = destination.split(';')[1]
    }
    else{
        alert("Coordinates not Selected")
        window.history.back();
    }
}