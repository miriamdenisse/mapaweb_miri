var wms_layers = [];

var format_miriam_t3provincia_lima_0 = new ol.format.GeoJSON();
var features_miriam_t3provincia_lima_0 = format_miriam_t3provincia_lima_0.readFeatures(json_miriam_t3provincia_lima_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_miriam_t3provincia_lima_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_miriam_t3provincia_lima_0.addFeatures(features_miriam_t3provincia_lima_0);
var lyr_miriam_t3provincia_lima_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_miriam_t3provincia_lima_0, 
                style: style_miriam_t3provincia_lima_0,
                popuplayertitle: 'miriam_t3 — provincia_lima',
                interactive: true,
    title: 'miriam_t3 — provincia_lima<br />\
    <img src="styles/legend/miriam_t3provincia_lima_0_0.png" /> BARRANCA<br />\
    <img src="styles/legend/miriam_t3provincia_lima_0_1.png" /> CAJATAMBO<br />\
    <img src="styles/legend/miriam_t3provincia_lima_0_2.png" /> CANTA<br />\
    <img src="styles/legend/miriam_t3provincia_lima_0_3.png" /> CAÑETE<br />\
    <img src="styles/legend/miriam_t3provincia_lima_0_4.png" /> HUARAL<br />\
    <img src="styles/legend/miriam_t3provincia_lima_0_5.png" /> HUAROCHIRI<br />\
    <img src="styles/legend/miriam_t3provincia_lima_0_6.png" /> HUAURA<br />\
    <img src="styles/legend/miriam_t3provincia_lima_0_7.png" /> LIMA<br />\
    <img src="styles/legend/miriam_t3provincia_lima_0_8.png" /> OYON<br />\
    <img src="styles/legend/miriam_t3provincia_lima_0_9.png" /> YAUYOS<br />\
    <img src="styles/legend/miriam_t3provincia_lima_0_10.png" /> <br />' });
var format_miriam_t3lima_ieslistado_iiee_1 = new ol.format.GeoJSON();
var features_miriam_t3lima_ieslistado_iiee_1 = format_miriam_t3lima_ieslistado_iiee_1.readFeatures(json_miriam_t3lima_ieslistado_iiee_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_miriam_t3lima_ieslistado_iiee_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_miriam_t3lima_ieslistado_iiee_1.addFeatures(features_miriam_t3lima_ieslistado_iiee_1);
cluster_miriam_t3lima_ieslistado_iiee_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_miriam_t3lima_ieslistado_iiee_1
});
var lyr_miriam_t3lima_ieslistado_iiee_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_miriam_t3lima_ieslistado_iiee_1, 
                style: style_miriam_t3lima_ieslistado_iiee_1,
                popuplayertitle: 'miriam_t3 — lima_ieslistado_iiee',
                interactive: true,
                title: '<img src="styles/legend/miriam_t3lima_ieslistado_iiee_1.png" /> miriam_t3 — lima_ieslistado_iiee'
            });
var format_miriam_t3vias_2 = new ol.format.GeoJSON();
var features_miriam_t3vias_2 = format_miriam_t3vias_2.readFeatures(json_miriam_t3vias_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_miriam_t3vias_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_miriam_t3vias_2.addFeatures(features_miriam_t3vias_2);
var lyr_miriam_t3vias_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_miriam_t3vias_2, 
                style: style_miriam_t3vias_2,
                popuplayertitle: 'miriam_t3 — vias',
                interactive: true,
                title: '<img src="styles/legend/miriam_t3vias_2.png" /> miriam_t3 — vias'
            });
var format_miriam_t3rios_3 = new ol.format.GeoJSON();
var features_miriam_t3rios_3 = format_miriam_t3rios_3.readFeatures(json_miriam_t3rios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_miriam_t3rios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_miriam_t3rios_3.addFeatures(features_miriam_t3rios_3);
var lyr_miriam_t3rios_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_miriam_t3rios_3, 
                style: style_miriam_t3rios_3,
                popuplayertitle: 'miriam_t3 — rios',
                interactive: true,
                title: '<img src="styles/legend/miriam_t3rios_3.png" /> miriam_t3 — rios'
            });

lyr_miriam_t3provincia_lima_0.setVisible(true);lyr_miriam_t3lima_ieslistado_iiee_1.setVisible(true);lyr_miriam_t3vias_2.setVisible(true);lyr_miriam_t3rios_3.setVisible(true);
var layersList = [lyr_miriam_t3provincia_lima_0,lyr_miriam_t3lima_ieslistado_iiee_1,lyr_miriam_t3vias_2,lyr_miriam_t3rios_3];
lyr_miriam_t3provincia_lima_0.set('fieldAliases', {'fid': 'fid', 'COUNT': 'COUNT', 'FIRST_IDPR': 'FIRST_IDPR', 'NOMBPROV': 'Provincia', 'FIRST_NOMB': 'FIRST_NOMB', 'LAST_DCTO': 'LAST_DCTO', 'LAST_LEY': 'LAST_LEY', 'FIRST_FECH': 'FIRST_FECH', 'LAST_FECHA': 'LAST_FECHA', 'MIN_SHAPE_': 'MIN_SHAPE_', 'ha': 'ha', 'Inf_territorial': 'Información territorial', 'Gob_regional': 'Gobierno Territorial', 'Imagen': 'Imagen', });
lyr_miriam_t3lima_ieslistado_iiee_1.set('fieldAliases', {'fid': 'fid', 'Código Modular': 'Código Modular', 'Anexo': 'Anexo', 'Nombre de SS.EE.': 'Nombre SS.EE.', 'Ubigeo': 'Ubigeo', 'Departamento': 'Departamento', 'Provincia': 'Provincia', 'Distrito': 'Distrito', 'Código DRE/UGEL': 'Código DRE/UGEL', 'DRE / UGEL': 'DRE / UGEL', 'Centro Poblado': 'Centro Poblado', 'Código Centro Poblado': 'Código Centro Poblado', 'Código Local': 'Código Local', 'Dirección': 'Dirección', 'Nivel / Modalidad': 'Nivel / Modalidad', 'Gestion / Dependencia': 'Gestion / Dependencia', 'Altitud': 'Altitud', 'Fuente de coordenadas': 'Fuente de coordenadas', });
lyr_miriam_t3vias_2.set('fieldAliases', {'fid': 'fid', 'COD_DS11': 'COD_DS11', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'LONG_KM', 'OBS': 'OBS', });
lyr_miriam_t3rios_3.set('fieldAliases', {'fid': 'fid', 'Rasgo_Prin': 'Rasgo_Prin', 'Rasgo_Secu': 'Rasgo_Secu', 'Nombre': 'Nombre', 'Longitud': 'Longitud', });
lyr_miriam_t3provincia_lima_0.set('fieldImages', {'fid': 'Hidden', 'COUNT': 'Hidden', 'FIRST_IDPR': 'Hidden', 'NOMBPROV': 'TextEdit', 'FIRST_NOMB': 'Hidden', 'LAST_DCTO': 'Hidden', 'LAST_LEY': 'Hidden', 'FIRST_FECH': 'Hidden', 'LAST_FECHA': 'Hidden', 'MIN_SHAPE_': 'Hidden', 'ha': 'Hidden', 'Inf_territorial': 'TextEdit', 'Gob_regional': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_miriam_t3lima_ieslistado_iiee_1.set('fieldImages', {'fid': 'Hidden', 'Código Modular': 'Hidden', 'Anexo': 'Hidden', 'Nombre de SS.EE.': 'TextEdit', 'Ubigeo': 'Hidden', 'Departamento': 'Hidden', 'Provincia': 'Hidden', 'Distrito': 'Hidden', 'Código DRE/UGEL': 'Hidden', 'DRE / UGEL': 'Hidden', 'Centro Poblado': 'Hidden', 'Código Centro Poblado': 'Hidden', 'Código Local': 'Hidden', 'Dirección': 'Hidden', 'Nivel / Modalidad': 'Hidden', 'Gestion / Dependencia': 'Hidden', 'Altitud': 'Hidden', 'Fuente de coordenadas': 'Hidden', });
lyr_miriam_t3vias_2.set('fieldImages', {'fid': 'Hidden', 'COD_DS11': 'Hidden', 'COD_DS12': 'TextEdit', 'TRAY_DS12': 'Hidden', 'TRAY_DS11': 'Hidden', 'UBIGEO': 'Hidden', 'DEP': 'Hidden', 'PROV': 'Hidden', 'COD_DEP': 'Hidden', 'COD_PROV': 'Hidden', 'LONG_KM': 'Hidden', 'OBS': 'Hidden', });
lyr_miriam_t3rios_3.set('fieldImages', {'fid': 'Hidden', 'Rasgo_Prin': 'Hidden', 'Rasgo_Secu': 'Hidden', 'Nombre': 'TextEdit', 'Longitud': 'Hidden', });
lyr_miriam_t3provincia_lima_0.set('fieldLabels', {'NOMBPROV': 'inline label - always visible', 'Inf_territorial': 'inline label - always visible', 'Gob_regional': 'inline label - always visible', 'Imagen': 'inline label - always visible', });
lyr_miriam_t3lima_ieslistado_iiee_1.set('fieldLabels', {'Nombre de SS.EE.': 'inline label - always visible', });
lyr_miriam_t3vias_2.set('fieldLabels', {'COD_DS12': 'inline label - always visible', });
lyr_miriam_t3rios_3.set('fieldLabels', {'Nombre': 'inline label - always visible', });
lyr_miriam_t3rios_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});