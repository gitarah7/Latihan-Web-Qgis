var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'government': 'government', 'operator:wikipedia': 'operator:wikipedia', 'operator:wikidata': 'operator:wikidata', 'operator': 'operator', 'healthcare': 'healthcare', 'microbrewery': 'microbrewery', 'stars': 'stars', 'rooms': 'rooms', 'layer': 'layer', 'official_name:id': 'official_name:id', 'official_name:en': 'official_name:en', 'official_name': 'official_name', 'drive_through': 'drive_through', 'brand:wikipedia': 'brand:wikipedia', 'brand:wikidata': 'brand:wikidata', 'brand': 'brand', 'self_service': 'self_service', 'opening_hours': 'opening_hours', 'smoking': 'smoking', 'name:ja': 'name:ja', 'name:en': 'name:en', 'addr:province': 'addr:province', 'building:walls': 'building:walls', 'building:use': 'building:use', 'atm': 'atm', 'operator:type': 'operator:type', 'name:es': 'name:es', 'height': 'height', 'school:type_idn': 'school:type_idn', 'shop': 'shop', 'phone': 'phone', 'internet_access:ssid': 'internet_access:ssid', 'internet_access:fee': 'internet_access:fee', 'internet_access': 'internet_access', 'fax': 'fax', 'email': 'email', 'bar': 'bar', 'air_conditioning': 'air_conditioning', 'water_source': 'water_source', 'toilets:number': 'toilets:number', 'toilet:facilities': 'toilet:facilities', 'shelter_type': 'shelter_type', 'religion': 'religion', 'kitchen:facilities': 'kitchen:facilities', 'evacuation_center': 'evacuation_center', 'ground_floor:height': 'ground_floor:height', 'amenity': 'amenity', 'website': 'website', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:housename': 'addr:housename', 'office': 'office', 'addr:postcode': 'addr:postcode', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'admin_level': 'admin_level', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', 'tourism': 'tourism', 'name': 'name', 'type': 'type', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'government': '', 'operator:wikipedia': '', 'operator:wikidata': '', 'operator': '', 'healthcare': '', 'microbrewery': '', 'stars': '', 'rooms': '', 'layer': '', 'official_name:id': '', 'official_name:en': '', 'official_name': '', 'drive_through': '', 'brand:wikipedia': '', 'brand:wikidata': '', 'brand': '', 'self_service': '', 'opening_hours': '', 'smoking': '', 'name:ja': '', 'name:en': '', 'addr:province': '', 'building:walls': '', 'building:use': '', 'atm': '', 'operator:type': '', 'name:es': '', 'height': '', 'school:type_idn': '', 'shop': '', 'phone': '', 'internet_access:ssid': '', 'internet_access:fee': '', 'internet_access': '', 'fax': '', 'email': '', 'bar': '', 'air_conditioning': '', 'water_source': '', 'toilets:number': '', 'toilet:facilities': '', 'shelter_type': '', 'religion': '', 'kitchen:facilities': '', 'evacuation_center': '', 'ground_floor:height': '', 'amenity': '', 'website': '', 'addr:street': '', 'addr:housenumber': '', 'addr:housename': '', 'office': '', 'addr:postcode': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'admin_level': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', 'tourism': '', 'name': '', 'type': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'government': 'no label', 'operator:wikipedia': 'no label', 'operator:wikidata': 'no label', 'operator': 'no label', 'healthcare': 'no label', 'microbrewery': 'no label', 'stars': 'no label', 'rooms': 'no label', 'layer': 'no label', 'official_name:id': 'no label', 'official_name:en': 'no label', 'official_name': 'no label', 'drive_through': 'no label', 'brand:wikipedia': 'no label', 'brand:wikidata': 'no label', 'brand': 'no label', 'self_service': 'no label', 'opening_hours': 'no label', 'smoking': 'no label', 'name:ja': 'no label', 'name:en': 'no label', 'addr:province': 'no label', 'building:walls': 'no label', 'building:use': 'no label', 'atm': 'no label', 'operator:type': 'no label', 'name:es': 'no label', 'height': 'no label', 'school:type_idn': 'no label', 'shop': 'no label', 'phone': 'no label', 'internet_access:ssid': 'no label', 'internet_access:fee': 'no label', 'internet_access': 'no label', 'fax': 'no label', 'email': 'no label', 'bar': 'no label', 'air_conditioning': 'no label', 'water_source': 'no label', 'toilets:number': 'no label', 'toilet:facilities': 'no label', 'shelter_type': 'no label', 'religion': 'no label', 'kitchen:facilities': 'no label', 'evacuation_center': 'no label', 'ground_floor:height': 'no label', 'amenity': 'no label', 'website': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:housename': 'no label', 'office': 'no label', 'addr:postcode': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'admin_level': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', 'tourism': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_building_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});