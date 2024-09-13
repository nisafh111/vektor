var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_titik2_1 = new ol.format.GeoJSON();
var features_titik2_1 = format_titik2_1.readFeatures(json_titik2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titik2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titik2_1.addFeatures(features_titik2_1);
var lyr_titik2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_titik2_1, 
                style: style_titik2_1,
                popuplayertitle: "titik 2",
                interactive: true,
                title: '<img src="styles/legend/titik2_1.png" /> titik 2'
            });
var format_titik_2 = new ol.format.GeoJSON();
var features_titik_2 = format_titik_2.readFeatures(json_titik_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titik_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titik_2.addFeatures(features_titik_2);
var lyr_titik_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_titik_2, 
                style: style_titik_2,
                popuplayertitle: "titik",
                interactive: true,
                title: '<img src="styles/legend/titik_2.png" /> titik'
            });
var format_BUFFERRR_3 = new ol.format.GeoJSON();
var features_BUFFERRR_3 = format_BUFFERRR_3.readFeatures(json_BUFFERRR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUFFERRR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFFERRR_3.addFeatures(features_BUFFERRR_3);cluster_BUFFERRR_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_BUFFERRR_3
});
var lyr_BUFFERRR_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_BUFFERRR_3, 
                style: style_BUFFERRR_3,
                popuplayertitle: "BUFFERRR",
                interactive: true,
                title: '<img src="styles/legend/BUFFERRR_3.png" /> BUFFERRR'
            });
var format_WAYPOINTCIMAHIWaypoints_4 = new ol.format.GeoJSON();
var features_WAYPOINTCIMAHIWaypoints_4 = format_WAYPOINTCIMAHIWaypoints_4.readFeatures(json_WAYPOINTCIMAHIWaypoints_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WAYPOINTCIMAHIWaypoints_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WAYPOINTCIMAHIWaypoints_4.addFeatures(features_WAYPOINTCIMAHIWaypoints_4);cluster_WAYPOINTCIMAHIWaypoints_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_WAYPOINTCIMAHIWaypoints_4
});
var lyr_WAYPOINTCIMAHIWaypoints_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_WAYPOINTCIMAHIWaypoints_4, 
                style: style_WAYPOINTCIMAHIWaypoints_4,
                popuplayertitle: "WAYPOINT CIMAHI — Waypoints",
                interactive: true,
                title: '<img src="styles/legend/WAYPOINTCIMAHIWaypoints_4.png" /> WAYPOINT CIMAHI — Waypoints'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_titik2_1.setVisible(true);lyr_titik_2.setVisible(true);lyr_BUFFERRR_3.setVisible(true);lyr_WAYPOINTCIMAHIWaypoints_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_titik2_1,lyr_titik_2,lyr_BUFFERRR_3,lyr_WAYPOINTCIMAHIWaypoints_4];
lyr_titik2_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_titik_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BUFFERRR_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_WAYPOINTCIMAHIWaypoints_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_titik2_1.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_titik_2.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_BUFFERRR_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_WAYPOINTCIMAHIWaypoints_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_titik2_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_titik_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BUFFERRR_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_WAYPOINTCIMAHIWaypoints_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_WAYPOINTCIMAHIWaypoints_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});