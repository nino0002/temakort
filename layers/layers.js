var wms_layers = [];


        var lyr_Positronnolabels_0 = new ol.layer.Tile({
            'title': 'Positron [no labels]',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });
var format_Legeplads_1 = new ol.format.GeoJSON();
var features_Legeplads_1 = format_Legeplads_1.readFeatures(json_Legeplads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Legeplads_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Legeplads_1.addFeatures(features_Legeplads_1);
var lyr_Legeplads_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Legeplads_1, 
                style: style_Legeplads_1,
                popuplayertitle: 'Legeplads',
                interactive: true,
                title: '<img src="styles/legend/Legeplads_1.png" /> Legeplads'
            });
var format_Parker_2 = new ol.format.GeoJSON();
var features_Parker_2 = format_Parker_2.readFeatures(json_Parker_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parker_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parker_2.addFeatures(features_Parker_2);
var lyr_Parker_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parker_2, 
                style: style_Parker_2,
                popuplayertitle: 'Parker',
                interactive: true,
                title: '<img src="styles/legend/Parker_2.png" /> Parker'
            });
var format_Togstationer_3 = new ol.format.GeoJSON();
var features_Togstationer_3 = format_Togstationer_3.readFeatures(json_Togstationer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_3.addFeatures(features_Togstationer_3);
var lyr_Togstationer_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_3, 
                style: style_Togstationer_3,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_3.png" /> Togstationer'
            });
var format_folkeskolerrigtig_4 = new ol.format.GeoJSON();
var features_folkeskolerrigtig_4 = format_folkeskolerrigtig_4.readFeatures(json_folkeskolerrigtig_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_folkeskolerrigtig_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_folkeskolerrigtig_4.addFeatures(features_folkeskolerrigtig_4);
var lyr_folkeskolerrigtig_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_folkeskolerrigtig_4, 
                style: style_folkeskolerrigtig_4,
                popuplayertitle: 'folkeskoler(rigtig)',
                interactive: true,
                title: '<img src="styles/legend/folkeskolerrigtig_4.png" /> folkeskoler(rigtig)'
            });
var format_kommuneplan_5 = new ol.format.GeoJSON();
var features_kommuneplan_5 = format_kommuneplan_5.readFeatures(json_kommuneplan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kommuneplan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kommuneplan_5.addFeatures(features_kommuneplan_5);
var lyr_kommuneplan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kommuneplan_5, 
                style: style_kommuneplan_5,
                popuplayertitle: 'kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/kommuneplan_5.png" /> kommuneplan'
            });
var format_matStrandbeskyttelseFlade_Gaeldende_6 = new ol.format.GeoJSON();
var features_matStrandbeskyttelseFlade_Gaeldende_6 = format_matStrandbeskyttelseFlade_Gaeldende_6.readFeatures(json_matStrandbeskyttelseFlade_Gaeldende_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matStrandbeskyttelseFlade_Gaeldende_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matStrandbeskyttelseFlade_Gaeldende_6.addFeatures(features_matStrandbeskyttelseFlade_Gaeldende_6);
var lyr_matStrandbeskyttelseFlade_Gaeldende_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matStrandbeskyttelseFlade_Gaeldende_6, 
                style: style_matStrandbeskyttelseFlade_Gaeldende_6,
                popuplayertitle: 'mat:StrandbeskyttelseFlade_Gaeldende',
                interactive: false,
                title: '<img src="styles/legend/matStrandbeskyttelseFlade_Gaeldende_6.png" /> mat:StrandbeskyttelseFlade_Gaeldende'
            });
var format_strandbeskyttelseHvidovre_7 = new ol.format.GeoJSON();
var features_strandbeskyttelseHvidovre_7 = format_strandbeskyttelseHvidovre_7.readFeatures(json_strandbeskyttelseHvidovre_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strandbeskyttelseHvidovre_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strandbeskyttelseHvidovre_7.addFeatures(features_strandbeskyttelseHvidovre_7);
var lyr_strandbeskyttelseHvidovre_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strandbeskyttelseHvidovre_7, 
                style: style_strandbeskyttelseHvidovre_7,
                popuplayertitle: 'strandbeskyttelse Hvidovre',
                interactive: false,
                title: '<img src="styles/legend/strandbeskyttelseHvidovre_7.png" /> strandbeskyttelse Hvidovre'
            });
var format_togstationer_8 = new ol.format.GeoJSON();
var features_togstationer_8 = format_togstationer_8.readFeatures(json_togstationer_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_togstationer_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_togstationer_8.addFeatures(features_togstationer_8);
var lyr_togstationer_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_togstationer_8, 
                style: style_togstationer_8,
                popuplayertitle: 'togstationer',
                interactive: true,
                title: '<img src="styles/legend/togstationer_8.png" /> togstationer'
            });

lyr_Positronnolabels_0.setVisible(true);lyr_Legeplads_1.setVisible(true);lyr_Parker_2.setVisible(true);lyr_Togstationer_3.setVisible(true);lyr_folkeskolerrigtig_4.setVisible(true);lyr_kommuneplan_5.setVisible(true);lyr_matStrandbeskyttelseFlade_Gaeldende_6.setVisible(false);lyr_strandbeskyttelseHvidovre_7.setVisible(true);lyr_togstationer_8.setVisible(true);
var layersList = [lyr_Positronnolabels_0,lyr_Legeplads_1,lyr_Parker_2,lyr_Togstationer_3,lyr_folkeskolerrigtig_4,lyr_kommuneplan_5,lyr_matStrandbeskyttelseFlade_Gaeldende_6,lyr_strandbeskyttelseHvidovre_7,lyr_togstationer_8];
lyr_Legeplads_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Parker_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Togstationer_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_folkeskolerrigtig_4.set('fieldAliases', {'fid': 'fid', 'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_kommuneplan_5.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_matStrandbeskyttelseFlade_Gaeldende_6.set('fieldAliases', {'fid': 'fid', 'forretningshaendelse': 'forretningshaendelse', 'senesteSagLokalId': 'senesteSagLokalId', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalId': 'id.lokalId', 'paataenktHandling': 'paataenktHandling', 'registreringFra': 'registreringFra', 'virkningFra': 'virkningFra', 'virkningsaktoer': 'virkningsaktoer', 'temaFladeID': 'temaFladeID', 'tematype': 'tematype', 'jordstykkeLokalId': 'jordstykkeLokalId', });
lyr_strandbeskyttelseHvidovre_7.set('fieldAliases', {'fid': 'fid', 'forretningshaendelse': 'forretningshaendelse', 'senesteSagLokalId': 'senesteSagLokalId', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalId': 'id.lokalId', 'paataenktHandling': 'paataenktHandling', 'registreringFra': 'registreringFra', 'virkningFra': 'virkningFra', 'virkningsaktoer': 'virkningsaktoer', 'temaFladeID': 'temaFladeID', 'tematype': 'tematype', 'jordstykkeLokalId': 'jordstykkeLokalId', });
lyr_togstationer_8.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Legeplads_1.set('fieldImages', {'fid': '', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Parker_2.set('fieldImages', {'fid': '', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Togstationer_3.set('fieldImages', {'fid': '', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_folkeskolerrigtig_4.set('fieldImages', {'fid': '', 'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_kommuneplan_5.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_matStrandbeskyttelseFlade_Gaeldende_6.set('fieldImages', {'fid': '', 'forretningshaendelse': '', 'senesteSagLokalId': '', 'forretningsproces': '', 'id.namespace': '', 'id.lokalId': '', 'paataenktHandling': '', 'registreringFra': '', 'virkningFra': '', 'virkningsaktoer': '', 'temaFladeID': '', 'tematype': '', 'jordstykkeLokalId': '', });
lyr_strandbeskyttelseHvidovre_7.set('fieldImages', {'fid': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senesteSagLokalId': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalId': 'TextEdit', 'paataenktHandling': 'TextEdit', 'registreringFra': 'DateTime', 'virkningFra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temaFladeID': 'Range', 'tematype': 'TextEdit', 'jordstykkeLokalId': 'TextEdit', });
lyr_togstationer_8.set('fieldImages', {'fid': '', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Legeplads_1.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label - always visible', 'description': 'inline label - always visible', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Parker_2.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label - always visible', });
lyr_Togstationer_3.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label - always visible', });
lyr_folkeskolerrigtig_4.set('fieldLabels', {'fid': 'no label', 'Skolenavn': 'hidden field', 'Adresse': 'no label', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_kommuneplan_5.set('fieldLabels', {'fid': 'hidden field', 'oid': 'hidden field', 'id': 'inline label - always visible', 'planid': 'inline label - always visible', 'objektkode': 'hidden field', 'komnr': 'hidden field', 'plannavn': 'hidden field', 'doklink': 'inline label - always visible', 'datoforsl': 'hidden field', 'datovedt': 'inline label - always visible', 'datoaflyst': 'hidden field', 'datoikraft': 'hidden field', 'datoslut': 'hidden field', 'aktuel': 'hidden field', 'datooprt': 'hidden field', 'datoopdt': 'hidden field', 'status': 'hidden field', 'datostart': 'hidden field', 'glkomnr': 'hidden field', 'kommunenavn': 'hidden field', 'glkomnavn': 'hidden field', 'glkomnavn_besk': 'hidden field', });
lyr_matStrandbeskyttelseFlade_Gaeldende_6.set('fieldLabels', {'fid': 'no label', 'forretningshaendelse': 'no label', 'senesteSagLokalId': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalId': 'no label', 'paataenktHandling': 'no label', 'registreringFra': 'no label', 'virkningFra': 'no label', 'virkningsaktoer': 'no label', 'temaFladeID': 'no label', 'tematype': 'no label', 'jordstykkeLokalId': 'no label', });
lyr_strandbeskyttelseHvidovre_7.set('fieldLabels', {'fid': 'no label', 'forretningshaendelse': 'no label', 'senesteSagLokalId': 'inline label - always visible', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalId': 'no label', 'paataenktHandling': 'no label', 'registreringFra': 'no label', 'virkningFra': 'no label', 'virkningsaktoer': 'no label', 'temaFladeID': 'no label', 'tematype': 'no label', 'jordstykkeLokalId': 'no label', });
lyr_togstationer_8.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_togstationer_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});