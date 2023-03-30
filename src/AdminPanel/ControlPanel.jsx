import React, { useState } from "react";
import { Paragraph } from "../components/RowsRev";

function ControlPanel() {
  let ParagraphObject = {
    class_Container: "control-panel-container",
    class_Container_Title: "",
    class_Title: "",
    content_Title: "eeeeeeeeeee",
    class_Container_Paragraph: "",
    class_Paragraph_1: "",
    class_Paragraph_2: "",
    class_Paragraph_3: "",
    content_Paragraph_1: "vsvsrvsv",
    content_Paragraph_2: "svtvrt",
    content_Paragraph_3: "varrvrv",
  };

  const [propsObject, setPropsObject] = useState(ParagraphObject);
  const [component, setComponent] = useState(<Paragraph x={propsObject} />);

  const propsHandler = () => {
    setPropsObject(ParagraphObject);
    setComponent(<Paragraph x={propsObject} />);
    console.log(propsObject);
  };

  const componentHandler = (e) => {
    setComponent(e.target.value);
  };

  return (
    <>
      <div className="control-panel-container">
        <div className="control-css-container">
          <div className="control-css-col">
            <div className="input-container">
              <h5>Margin</h5>
              <input type="number" onChange={propsHandler} />
              <input type="number" />
              <input type="number" />
              <input type="number" />
            </div>
            <div className="input-container">
              <h5>Select Component</h5>
              <select name="" id="" onChange={componentHandler}>
                <option value={<Paragraph x={propsObject} />}>paragraph</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="preview-panel-container">{component}</div>
    </>
  );
}

export default ControlPanel;
