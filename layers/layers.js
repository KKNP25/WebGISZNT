var wms_layers = [];


        var lyr_ASTER2_0 = new ol.layer.Tile({
            'title': 'ASTER2',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Zona_LayerUTM_1 = new ol.format.GeoJSON();
var features_Zona_LayerUTM_1 = format_Zona_LayerUTM_1.readFeatures(json_Zona_LayerUTM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_LayerUTM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_LayerUTM_1.addFeatures(features_Zona_LayerUTM_1);
var lyr_Zona_LayerUTM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_LayerUTM_1, 
                style: style_Zona_LayerUTM_1,
                popuplayertitle: 'Zona_Layer UTM',
                interactive: true,
    title: 'Zona_Layer UTM<br />\
    <img src="styles/legend/Zona_LayerUTM_1_0.png" /> 16309 - 325802<br />\
    <img src="styles/legend/Zona_LayerUTM_1_1.png" /> 325802 - 604681<br />\
    <img src="styles/legend/Zona_LayerUTM_1_2.png" /> 604681 - 909069<br />\
    <img src="styles/legend/Zona_LayerUTM_1_3.png" /> 909069 - 1241387<br />\
    <img src="styles/legend/Zona_LayerUTM_1_4.png" /> 1241387 - 1589279<br />\
    <img src="styles/legend/Zona_LayerUTM_1_5.png" /> 1589279 - 2291493<br />\
    <img src="styles/legend/Zona_LayerUTM_1_6.png" /> 2291493 - 3510446<br />\
    <img src="styles/legend/Zona_LayerUTM_1_7.png" /> 3510446 - 17094554<br />' });

lyr_ASTER2_0.setVisible(true);lyr_Zona_LayerUTM_1.setVisible(true);
var layersList = [lyr_ASTER2_0,lyr_Zona_LayerUTM_1];
lyr_Zona_LayerUTM_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'NOZONE': 'NOZONE', 'COUNT_': 'COUNT_', 'SUM_': 'SUM_', 'MEAN': 'MEAN', 'MAX_': 'MAX_', 'MIN_': 'MIN_', 'RANGE': 'RANGE', 'VARIANCE': 'VARIANCE', 'STDDEV': 'STDDEV', 'PSTDDEV': 'PSTDDEV', 'RPBULAT': 'RPBULAT', 'JENIS_ZONA': 'JENIS_ZONA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'MEAN_LAMA': 'MEAN_LAMA', 'NILAI_BARU': 'NILAI_BARU', });
lyr_Zona_LayerUTM_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'Hidden', 'NOZONE': 'TextEdit', 'COUNT_': 'Hidden', 'SUM_': 'Hidden', 'MEAN': 'Hidden', 'MAX_': 'Hidden', 'MIN_': 'Hidden', 'RANGE': 'Hidden', 'VARIANCE': 'Hidden', 'STDDEV': 'Hidden', 'PSTDDEV': 'Hidden', 'RPBULAT': 'TextEdit', 'JENIS_ZONA': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'MEAN_LAMA': 'TextEdit', 'NILAI_BARU': 'TextEdit', });
lyr_Zona_LayerUTM_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NOZONE': 'inline label - always visible', 'RPBULAT': 'inline label - always visible', 'MEAN_LAMA': 'inline label - always visible', 'NILAI_BARU': 'inline label - always visible', });
lyr_Zona_LayerUTM_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});