import React, { Component } from "react";
import { render } from "react-dom"; // not needed
import Typed from "react-typed";

// Why this is a class based component? I see no problem wrapping up the external component Typed into a functional component -1
// By the way, i admire the irony of this being in an anti-requirement folder, but not for the animation, but for the class base thingy...
class TypedText extends Component {
  render() {
    return (
      <div className="wrap">
        <div className="type-wrap">
          <Typed
            typedRef={(typed) => {
              this.typed = typed;
            }}
            strings={[
              "Fullstack Developer",
              "Web Developer",
              "Software Engineer",
              "Front End Developer",
            ]}
            typeSpeed={40}
            loop
          />
        </div>
      </div>
    );
  }
}
export default TypedText;
