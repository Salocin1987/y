var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_centredintrts_1 = new ol.format.GeoJSON();
var features_centredintrts_1 = format_centredintrts_1.readFeatures(json_centredintrts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centredintrts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centredintrts_1.addFeatures(features_centredintrts_1);cluster_centredintrts_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_centredintrts_1
});
var lyr_centredintrts_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_centredintrts_1, 
                style: style_centredintrts_1,
                interactive: true,
                title: '<img src="styles/legend/centredintrts_1.png" /> centre d\'intérêts'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_centredintrts_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_centredintrts_1];
lyr_centredintrts_1.set('fieldAliases', {'id': 'id', });
lyr_centredintrts_1.set('fieldImages', {'id': 'TextEdit', });
lyr_centredintrts_1.set('fieldLabels', {'id': 'no label', });
lyr_centredintrts_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});