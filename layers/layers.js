var wms_layers = [];


        var lyr_Positronnolabels_0 = new ol.layer.Tile({
            'title': 'Positron [no labels]',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });

        var lyr_StamenTerrain_1 = new ol.layer.Tile({
            'title': 'Stamen Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://maps.stamen.com/">Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL</a>',
                url: 'http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png'
            })
        });

        var lyr_Positron_2 = new ol.layer.Tile({
            'title': 'Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_3 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_B1Phases_4 = new ol.format.GeoJSON();
var features_B1Phases_4 = format_B1Phases_4.readFeatures(json_B1Phases_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B1Phases_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B1Phases_4.addFeatures(features_B1Phases_4);
var lyr_B1Phases_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_B1Phases_4, 
                style: style_B1Phases_4,
                interactive: true,
                title: 'B1 Phases'
            });
var format_B1Chantiers_5 = new ol.format.GeoJSON();
var features_B1Chantiers_5 = format_B1Chantiers_5.readFeatures(json_B1Chantiers_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B1Chantiers_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B1Chantiers_5.addFeatures(features_B1Chantiers_5);
var lyr_B1Chantiers_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_B1Chantiers_5, 
                style: style_B1Chantiers_5,
                interactive: true,
                title: 'B1 Chantiers'
            });
var group_FondPlan = new ol.layer.Group({
                                layers: [lyr_Positronnolabels_0,lyr_StamenTerrain_1,lyr_Positron_2,lyr_OSMStandard_3,],
                                title: "FondPlan"});

lyr_Positronnolabels_0.setVisible(true);lyr_StamenTerrain_1.setVisible(true);lyr_Positron_2.setVisible(true);lyr_OSMStandard_3.setVisible(true);lyr_B1Phases_4.setVisible(true);lyr_B1Chantiers_5.setVisible(true);
var layersList = [group_FondPlan,lyr_B1Phases_4,lyr_B1Chantiers_5];
lyr_B1Phases_4.set('fieldAliases', {'Statut': 'Statut', 'Phase': 'Phase', 'B1': 'B1', 'MAJ': 'MAJ', });
lyr_B1Chantiers_5.set('fieldAliases', {'B1': 'B1', 'Statut': 'Statut', 'Decoupe': 'Decoupe', 'B1 Label': 'B1 Label', 'sCCC_18/03': 'SOUS-COM MARS', 'Sccc_Mai': 'SOUS-COM MAI', 'Soumis_CCC': 'Soumis CCC', 'impetrant': 'impetrant', 'ImpetrantR': 'ImpetrantR', 'sCCC 17/06': 'SOUS-COM JUIN', 'Sccc AOUT': 'SOUS-COM AOUT', });
lyr_B1Phases_4.set('fieldImages', {'Statut': 'ValueMap', 'Phase': 'TextEdit', 'B1': 'TextEdit', 'MAJ': 'DateTime', });
lyr_B1Chantiers_5.set('fieldImages', {'B1': 'TextEdit', 'Statut': 'ValueMap', 'Decoupe': 'TextEdit', 'B1 Label': 'TextEdit', 'sCCC_18/03': 'TextEdit', 'Sccc_Mai': 'TextEdit', 'Soumis_CCC': 'ValueMap', 'impetrant': 'TextEdit', 'ImpetrantR': 'TextEdit', 'sCCC 17/06': 'TextEdit', 'Sccc AOUT': 'TextEdit', });
lyr_B1Phases_4.set('fieldLabels', {'Statut': 'no label', 'Phase': 'no label', 'B1': 'no label', 'MAJ': 'no label', });
lyr_B1Chantiers_5.set('fieldLabels', {'B1': 'inline label', 'Statut': 'inline label', 'Decoupe': 'inline label', 'B1 Label': 'inline label', 'sCCC_18/03': 'inline label', 'Sccc_Mai': 'inline label', 'Soumis_CCC': 'inline label', 'impetrant': 'inline label', 'ImpetrantR': 'inline label', 'sCCC 17/06': 'inline label', 'Sccc AOUT': 'inline label', });
lyr_B1Chantiers_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});