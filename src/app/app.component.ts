import { Component } from '@angular/core';
import * as worldMapData from './worldMap.json';
import { Maps, DataLabel} from '@syncfusion/ej2-angular-maps';
Maps.Inject(DataLabel);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';

  public titleSettings: object = {
    text: 'Covid-19 Affected Countries'
  }

  public labelTemplate(args:any){
    let dataSource = args.maps.layers[0].dataSource;
    for(var i=0; i<dataSource.length; i++){
      if( dataSource[i]['Name'] === args.text && dataSource[i]['SeverityLevel'] === "High"){
        args.template = '<div>${SeverityLevel}</div>'
        break
      } else {
        args.template = '<div></div>'
      }
    }
  }

  public layers: object[] = [{
    shapeData: worldMapData,
    shapePropertyPath: 'name',
    shapeDataPath: 'Name',
    dataLabelSettings: {
      visible: true,
      // smartLabelMode: 'Trim',
      intersectionAction: 'Trim',
      // textStyle: {
      //   color: 'blue',
      //   size: 10,
      //   fontStyle: 'Sans-serif',
      //   fontWeight: 'Bold'
      // },
    },
    shapeSettings: {
      colorValuePath: 'SeverityLevel',
      colorMapping: [
        { value: 'High', color: '#A69d70'},
        { value: 'Moderate', color: '#A4D6AD', showLegend: false},
        { value: 'Low', color: '#DEEBAE'},
      ],
      fill: '#E5E5E5'
    },
    dataSource: [
     { Name: "United States", SeverityLevel: "High", LegendVisibility: true, ShapeColor: "#a69d70"},
     { Name: "India", SeverityLevel: "High", LegendVisibility: true, ShapeColor: "#a69d70" },
     { Name: "Brazil", SeverityLevel: "High", LegendVisibility: true, ShapeColor: "#a69d70"},
     { Name: "United Kingdom", SeverityLevel: "High", LegendVisibility: false, ShapeColor: "#a69d70"},
     { Name: "Russia", SeverityLevel: "High", LegendVisibility: false, ShapeColor: "#a69d70"},
     { Name: "Turkey", SeverityLevel: "High", LegendVisibility: true, ShapeColor: "#a69d70"},
     { Name: "France", SeverityLevel: "High", LegendVisibility: true, ShapeColor: "#a69d70"},
     { Name: "Iran", SeverityLevel: "Moderate", LegendVisibility: true, ShapeColor: "#A4D6AD"},
     { Name: "Spain", SeverityLevel: "Moderate", LegendVisibility: true, ShapeColor: "#A4D6AD"},
     { Name: "Italy", SeverityLevel: "Moderate", LegendVisibility: false, ShapeColor: "#A4D6AD"},
     { Name: "Argentina", SeverityLevel: "Moderate", LegendVisibility: false, ShapeColor: "#A4D6AD"},
     { Name: "Colombia", SeverityLevel: "Moderate", LegendVisibility: false, ShapeColor: "#A4D6AD"},
     { Name: "Indonesia", SeverityLevel: "Low", LegendVisibility: true, ShapeColor: "#DEEBAE"},
     { Name: "Mexico", SeverityLevel: "Low", LegendVisibility: true, ShapeColor: "#DEEBAE"},
     { Name: "Ukraine", SeverityLevel: "Low", LegendVisibility: false, ShapeColor: "#DEEBAE"},
     { Name: "South Africa", SeverityLevel: "Low", LegendVisibility: true, ShapeColor: "#DEEBAE"},
    ]
  }]
}