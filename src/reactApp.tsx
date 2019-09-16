import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import pq from 'pqgrid';
import './style.css';

//import few localization files for this demo.
import 'pqgrid/localize/pq-localize-en.js';
import 'pqgrid/localize/pq-localize-ja.js';
import 'pqgrid/localize/pq-localize-tr.js';


class Pqgrid extends React.Component<any,{}>{
  componentDidMount() {
    //@ts-ignore
    this.options = this.props.options;
    //@ts-ignore
    pq.grid(this.refs.grid, this.options);
  }
  componentDidUpdate(prevProps) {
    //copy props.options to this.options.
    //@ts-ignore
    Object.assign(this.options, this.props.options);
  }
  render() {
    return (<div ref='grid'></div>)
  }
}


export default class PGTableApp extends React.Component<any,{}> {
  constructor(props) {
    super(props)
    var colM = [
      { title: "ShipCountry",width: 130, dataIndx: "ShipCountry" },
      { title: "Customer Name", width: 130,dataIndx: "ContactName" },
      { title: "Freight", width: 120, format: '$##,###.00',
          summary: { type: "sum" },
          dataType: "float", dataIndx: "Freight"
      },
      { title: "Shipping Via", width: 130, dataIndx: "ShipVia" },
      { title: "Shipped Date", width: 100, dataIndx: "ShippedDate", dataType: "date",
          summary: { type: "max" }
      },
      //{ title: "Shipping Address", width: 220, dataIndx: "ShipAddress" },
      { title: "Shipping City", width: 130, dataIndx: "ShipCity" }
    ];
    var dataModel = [
      {
        "OrderID": 10409,
        "ContactName": "Yvonne Moncada",
        "EmployeeID": 3,
        "OrderDate": "01/09/1997",
        "RequiredDate": "02/06/1997",
        "ShippedDate": "01/14/1997",
        "ShipVia": "Speedy Express",
        "Freight": 29.83,
        "ShipName": "OcÃ©ano AtlÃ¡ntico Ltda.",
        "ShipAddress": "Ing. Gustavo Moncada 8585 Piso 20-A",
        "ShipCity": "Buenos Aires",
        "ShipRegion": null,
        "ShipPostalCode": "1010",
        "ShipCountry": "Argentina",
        "paid": true,
        "code": "ar"
      }, {
        "OrderID": 10531,
        "ContactName": "Yvonne Moncada",
        "EmployeeID": 7,
        "OrderDate": "05/08/1997",
        "RequiredDate": "06/05/1997",
        "ShippedDate": "05/19/1997",
        "ShipVia": "Speedy Express",
        "Freight": 8.12,
        "ShipName": "OcÃ©ano AtlÃ¡ntico Ltda.",
        "ShipAddress": "Ing. Gustavo Moncada 8585 Piso 20-A",
        "ShipCity": "Buenos Aires",
        "ShipRegion": null,
        "ShipPostalCode": "1010",
        "ShipCountry": "Argentina",
        "paid": true,
        "code": "ar"
      }, {
        "OrderID": 10898,
        "ContactName": "Yvonne Moncada",
        "EmployeeID": 4,
        "OrderDate": "02/20/1998",
        "RequiredDate": "03/20/1998",
        "ShippedDate": "03/06/1998",
        "ShipVia": "United Package",
        "Freight": 1.27,
        "ShipName": "OcÃ©ano AtlÃ¡ntico Ltda.",
        "ShipAddress": "Ing. Gustavo Moncada 8585 Piso 20-A",
        "ShipCity": "Buenos Aires",
        "ShipRegion": null,
        "ShipPostalCode": "1010",
        "ShipCountry": "Argentina",
        "paid": true,
        "code": "ar"
      }, {
        "OrderID": 10958,
        "ContactName": "Yvonne Moncada",
        "EmployeeID": 7,
        "OrderDate": "03/18/1998",
        "RequiredDate": "04/15/1998",
        "ShippedDate": "03/27/1998",
        "ShipVia": "United Package",
        "Freight": 49.56,
        "ShipName": "OcÃ©ano AtlÃ¡ntico Ltda.",
        "ShipAddress": "Ing. Gustavo Moncada 8585 Piso 20-A",
        "ShipCity": "Buenos Aires",
        "ShipRegion": null,
        "ShipPostalCode": "1010",
        "ShipCountry": "Argentina",
        "paid": true,
        "code": "ar"
      }, {
        "OrderID": 10986,
        "ContactName": "Yvonne Moncada",
        "EmployeeID": 8,
        "OrderDate": "03/30/1998",
        "RequiredDate": "04/27/1998",
        "ShippedDate": "04/21/1998",
        "ShipVia": "United Package",
        "Freight": 217.86,
        "ShipName": "OcÃ©ano AtlÃ¡ntico Ltda.",
        "ShipAddress": "Ing. Gustavo Moncada 8585 Piso 20-A",
        "ShipCity": "Buenos Aires",
        "ShipRegion": null,
        "ShipPostalCode": "1010",
        "ShipCountry": "Argentina",
        "paid": true,
        "code": "ar"
      }, {
        "OrderID": 11019,
        "ContactName": "Sergio GutiÃ©rrez",
        "EmployeeID": 6,
        "OrderDate": "04/13/1998",
        "RequiredDate": "05/11/1998",
        "ShippedDate": "",
        "ShipVia": "Federal Shipping",
        "Freight": 3.17,
        "ShipName": "Rancho grande",
        "ShipAddress": "Av. del Libertador 900",
        "ShipCity": "Buenos Aires",
        "ShipRegion": null,
        "ShipPostalCode": "1010",
        "ShipCountry": "Argentina",
        "paid": true,
        "code": "ar"
      }, {
        "OrderID": 10916,
        "ContactName": "Sergio GutiÃ©rrez",
        "EmployeeID": 1,
        "OrderDate": "02/27/1998",
        "RequiredDate": "03/27/1998",
        "ShippedDate": "03/09/1998",
        "ShipVia": "United Package",
        "Freight": 63.77,
        "ShipName": "Rancho grande",
        "ShipAddress": "Av. del Libertador 900",
        "ShipCity": "Buenos Aires",
        "ShipRegion": null,
        "ShipPostalCode": "1010",
        "ShipCountry": "Argentina",
        "paid": true,
        "code": "ar"
      }
    ]
    var groupModel = {
        on: true,
      // dataIndx: ['ShipCountry', 'ContactName'],
        collapsed: [false, true],
        merge: true,
        showSummary: [true, true],
        //grandSummary: true,
        title: [
            "{0} ({1})",
            "{0} - {1}"
        ]
    };
    this.state = {
      height: 500,
      toolbar: {
          items: [{
              type: 'button',
              label: "Toggle grouping",
              listener: function () {
                  this.Group().option({
                      on: !this.option('groupModel.on')
                  });
              }
          },{
            type: 'select',
            label: 'Format: ',                
            attr: 'id="export_format"',
            options: [{ xlsx: 'Excel', csv: 'Csv', htm: 'Html', json: 'Json'}]
        },
        {
            type: 'button',
            label: "Export",
            icon: 'ui-icon-arrowthickstop-1-s',
            listener: function () {
                this.exportData({
                    url: "/pro/demos/exportData",
                    format: $("#export_format").val(),
                    zip: false,
                    render: true
                });
            }
        }]
      },
      dataModel:{data: dataModel} ,
      //scrollModel: { autoFit: true },
      colModel: colM,
      numberCell: { show: false },
      menuIcon: true,
      selectionModel: { type: 'cell' },
      groupModel: groupModel,
      hoverMode:'cell',
      complete: function () {
          //demonstrate editability of summary cells.
          this.editCell({rowIndx: 1, dataIndx: 'Freight'});
      },
      showTitle: false,
      resizable: true,            
      hwrap: false,
      wrap: false
    }
  }
  render() {
    return (<div>
     <Pqgrid options={this.state} />
    </div>
    )
  }
}
