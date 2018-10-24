import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, icon, marker, point, Map } from 'leaflet';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements onInit {
	
	leafletOptions;
	mapCenter;
	zoomLevel;
	
	streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  
  wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
	office = marker([ 51.101122, 17.03214 ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });
  layersControl = {
    baseLayers: {
      'Street Maps': this.streetMaps,
	  'Wikimedia Maps': this.wMaps
    },
    overlays: {
      'ŻUKIKOT office': this.office,
    }
  };
  options = {
    layers: [ this.streetMaps, this.office],
    zoom: 12,
    center: latLng([ 51.101122, 17.032144 ])
  };
	// Marker for the top of Mt. Ranier
	
}
