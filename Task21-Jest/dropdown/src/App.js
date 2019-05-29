import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const techCompanies = [
  { label: "Apple", value: 1 },
  { label: "Microsoft", value: 2 },
  { label: "Netflix", value: 3 },
  { label: "Amazon", value: 4 },
  { label: "Tesla", value: 5 },
  { label: "Facebook", value: 6 },
  { label: "Google", value: 7 },
  { label: "Alphabet", value: 8 },
  { label: "Samsung", value: 9 },
  { label: "Qualcomm", value: 10},
  { label: "WalMart", value: 11 },
  { label: "Target", value: 12 },
  { label: "Dell", value: 13 },
  { label: "Lenovo", value: 14 },
  { label: "Bosch", value: 15 },
  { label: "IBM", value: 16 },
  { label: "Wipro", value: 17 },
  { label: "Infosys", value: 18 },
  { label: "Accenture", value: 19 },
  { label: "Intel", value: 20 }
];

const App =() => (
  <div className="container">
    <div className="row">
      <div className="col-md-4"></div>
        <div className="col-md-4">
            <Select options={ techCompanies} isMulti/>
        </div>
        <div className="col-md-4"></div>
    </div>
  </div>
);

export default App
