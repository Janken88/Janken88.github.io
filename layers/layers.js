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
var format_ZHCConstitutionEffet_6 = new ol.format.GeoJSON();
var features_ZHCConstitutionEffet_6 = format_ZHCConstitutionEffet_6.readFeatures(json_ZHCConstitutionEffet_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZHCConstitutionEffet_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZHCConstitutionEffet_6.addFeatures(features_ZHCConstitutionEffet_6);
var lyr_ZHCConstitutionEffet_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZHCConstitutionEffet_6, 
                style: style_ZHCConstitutionEffet_6,
                interactive: false,
                title: '<img src="styles/legend/ZHCConstitutionEffet_6.png" /> ZHC Constitution (Effet)'
            });
var format_ZHCConstitution_7 = new ol.format.GeoJSON();
var features_ZHCConstitution_7 = format_ZHCConstitution_7.readFeatures(json_ZHCConstitution_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZHCConstitution_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZHCConstitution_7.addFeatures(features_ZHCConstitution_7);
var lyr_ZHCConstitution_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZHCConstitution_7, 
                style: style_ZHCConstitution_7,
                interactive: false,
                title: 'ZHC Constitution'
            });
var group_FondPlan = new ol.layer.Group({
                                layers: [lyr_Positronnolabels_0,lyr_StamenTerrain_1,lyr_Positron_2,lyr_OSMStandard_3,],
                                title: "FondPlan"});

lyr_Positronnolabels_0.setVisible(true);lyr_StamenTerrain_1.setVisible(true);lyr_Positron_2.setVisible(true);lyr_OSMStandard_3.setVisible(true);lyr_B1Phases_4.setVisible(true);lyr_B1Chantiers_5.setVisible(true);lyr_ZHCConstitutionEffet_6.setVisible(true);lyr_ZHCConstitution_7.setVisible(true);
var layersList = [group_FondPlan,lyr_B1Phases_4,lyr_B1Chantiers_5,lyr_ZHCConstitutionEffet_6,lyr_ZHCConstitution_7];
lyr_B1Phases_4.set('fieldAliases', {'Statut': 'Statut', 'Phase': 'Phase', 'B1': 'B1', 'MAJ': 'MAJ', });
lyr_B1Chantiers_5.set('fieldAliases', {'B1': 'B1', 'Statut': 'Statut', 'Decoupe': 'Decoupe', 'B1 Label': 'B1 Label', 'sCCC_18/03': 'SOUS-COM MARS', 'Sccc_Mai': 'SOUS-COM MAI', 'Soumis_CCC': 'Soumis CCC', 'impetrant': 'impetrant', 'ImpetrantR': 'ImpetrantR', 'sCCC 17/06': 'SOUS-COM JUIN', 'Sccc AOUT': 'SOUS-COM AOUT', });
lyr_ZHCConstitutionEffet_6.set('fieldAliases', {'name': 'name', 'styleUrl': 'styleUrl', 'styleHash': 'styleHash', 'descriptio': 'descriptio', 'stroke': 'stroke', 'stroke-opa': 'stroke-opa', 'stroke-wid': 'stroke-wid', 'fill': 'fill', 'fill-opaci': 'fill-opaci', 'gml_id': 'gml_id', 'id_hyperco': 'id_hyperco', 'hc_fr': 'hc_fr', 'hc_nl': 'hc_nl', 'date_versi': 'date_versi', 'comment': 'comment', 'extract_da': 'extract_da', 'active': 'active', 'post_seanc': 'post_seanc', '_umap_opti': '_umap_opti', });
lyr_ZHCConstitution_7.set('fieldAliases', {'name': 'name', 'styleUrl': 'styleUrl', 'styleHash': 'styleHash', 'descriptio': 'descriptio', 'stroke': 'stroke', 'stroke-opa': 'stroke-opa', 'stroke-wid': 'stroke-wid', 'fill': 'fill', 'fill-opaci': 'fill-opaci', 'gml_id': 'gml_id', 'id_hyperco': 'id_hyperco', 'hc_fr': 'hc_fr', 'hc_nl': 'hc_nl', 'date_versi': 'date_versi', 'comment': 'comment', 'extract_da': 'extract_da', 'active': 'active', 'post_seanc': 'post_seanc', '_umap_opti': '_umap_opti', });
lyr_B1Phases_4.set('fieldImages', {'Statut': 'ValueMap', 'Phase': 'TextEdit', 'B1': 'TextEdit', 'MAJ': 'DateTime', });
lyr_B1Chantiers_5.set('fieldImages', {'B1': 'TextEdit', 'Statut': 'ValueMap', 'Decoupe': 'TextEdit', 'B1 Label': 'TextEdit', 'sCCC_18/03': 'TextEdit', 'Sccc_Mai': 'TextEdit', 'Soumis_CCC': 'ValueMap', 'impetrant': 'TextEdit', 'ImpetrantR': 'TextEdit', 'sCCC 17/06': 'TextEdit', 'Sccc AOUT': 'TextEdit', });
lyr_ZHCConstitutionEffet_6.set('fieldImages', {'name': 'TextEdit', 'styleUrl': 'TextEdit', 'styleHash': 'TextEdit', 'descriptio': 'TextEdit', 'stroke': 'TextEdit', 'stroke-opa': 'TextEdit', 'stroke-wid': 'TextEdit', 'fill': 'TextEdit', 'fill-opaci': 'TextEdit', 'gml_id': 'TextEdit', 'id_hyperco': 'TextEdit', 'hc_fr': 'TextEdit', 'hc_nl': 'TextEdit', 'date_versi': 'TextEdit', 'comment': 'TextEdit', 'extract_da': 'TextEdit', 'active': 'TextEdit', 'post_seanc': 'TextEdit', '_umap_opti': 'TextEdit', });
lyr_ZHCConstitution_7.set('fieldImages', {'name': 'TextEdit', 'styleUrl': 'TextEdit', 'styleHash': 'TextEdit', 'descriptio': 'TextEdit', 'stroke': 'TextEdit', 'stroke-opa': 'TextEdit', 'stroke-wid': 'TextEdit', 'fill': 'TextEdit', 'fill-opaci': 'TextEdit', 'gml_id': 'TextEdit', 'id_hyperco': 'TextEdit', 'hc_fr': 'TextEdit', 'hc_nl': 'TextEdit', 'date_versi': 'TextEdit', 'comment': 'TextEdit', 'extract_da': 'TextEdit', 'active': 'TextEdit', 'post_seanc': 'TextEdit', '_umap_opti': 'TextEdit', });
lyr_B1Phases_4.set('fieldLabels', {'Statut': 'no label', 'Phase': 'no label', 'B1': 'no label', 'MAJ': 'no label', });
lyr_B1Chantiers_5.set('fieldLabels', {'B1': 'inline label', 'Statut': 'inline label', 'Decoupe': 'no label', 'B1 Label': 'inline label', 'sCCC_18/03': 'no label', 'Sccc_Mai': 'no label', 'Soumis_CCC': 'no label', 'impetrant': 'inline label', 'ImpetrantR': 'no label', 'sCCC 17/06': 'no label', 'Sccc AOUT': 'no label', });
lyr_ZHCConstitutionEffet_6.set('fieldLabels', {'name': 'no label', 'styleUrl': 'no label', 'styleHash': 'no label', 'descriptio': 'no label', 'stroke': 'no label', 'stroke-opa': 'no label', 'stroke-wid': 'no label', 'fill': 'no label', 'fill-opaci': 'no label', 'gml_id': 'no label', 'id_hyperco': 'no label', 'hc_fr': 'no label', 'hc_nl': 'no label', 'date_versi': 'no label', 'comment': 'no label', 'extract_da': 'no label', 'active': 'no label', 'post_seanc': 'no label', '_umap_opti': 'no label', });
lyr_ZHCConstitution_7.set('fieldLabels', {'name': 'no label', 'styleUrl': 'no label', 'styleHash': 'no label', 'descriptio': 'no label', 'stroke': 'no label', 'stroke-opa': 'no label', 'stroke-wid': 'no label', 'fill': 'no label', 'fill-opaci': 'no label', 'gml_id': 'no label', 'id_hyperco': 'no label', 'hc_fr': 'no label', 'hc_nl': 'no label', 'date_versi': 'no label', 'comment': 'no label', 'extract_da': 'no label', 'active': 'no label', 'post_seanc': 'no label', '_umap_opti': 'no label', });
lyr_ZHCConstitution_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});