

// import React, { useState } from "react";
// import { SelectButton } from "primereact/selectbutton";
// import "./btnbasic.css";

// export default function Btnslection() {
//   const options = ["Off", "On"];
//   const [value, setValue] = useState(options[0]);

//   <div className="card flex justify-content-center">
//     <SelectButton
//       value={value}
//       onChange={(e) => setValue(e.value)}
//       options={options}
//       style={{ color: "#FFFFFF", borderColor: "#EC6337" }}
//     />
//   </div>;
// }

import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';
import './btnbasic.css'

export default function Btnslection() {
  const options = ['Buy'];
  const [value, setValue] = useState(options[0]);

  return (
    <div className="card flex justify-content-center">
      <SelectButton
        value={value}
        onChange={(e) => setValue(e.value)}
        options={options}
        style={{ color: "#FFFFFF", borderColor: "#EC6337" ,border:'none' }}
      />
    </div>
  );
}