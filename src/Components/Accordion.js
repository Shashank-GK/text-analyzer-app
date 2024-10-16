import React from "react";

export default function Accordion(props) {
  // Define styles for different items based on the mode
  const itemStyles = [
    {
      backgroundColor: props.mode === "dark" ? "#212529" : "#f0ffff ",
      color: props.mode === "dark" ? "white" : "black",
    },
    {
      backgroundColor: props.mode === "dark" ? "#212529" : "#f0ffff ",
      color: props.mode === "dark" ? "white" : "black",
    },
    {
      backgroundColor: props.mode === "dark" ? "#212529" : "#f0ffff ",
      color: props.mode === "dark" ? "white" : "black",
    },
  ];

  const aboutUsStyle = {
    color: props.mode === "dark" ? "white" : "black",
  };

  return (
    <div className="container my-3">
      <h2 style={aboutUsStyle}>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={itemStyles[0]} // Apply the first style
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={itemStyles[0]}
          >
            <div className="accordion-body" style={itemStyles[0]}>
              <strong>
                TextUtils provides various text manipulation features:
              </strong>
              <ul>
                <li>Convert text to uppercase or lowercase.</li>
                <li>Remove extra spaces from your text.</li>
                <li>Copy text to the clipboard with a single click.</li>
                <li>Reset the text area to clear the current input.</li>
              </ul>
              These features make it easy to format and clean up your text
              quickly.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={itemStyles[1]} // Apply the second style
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={itemStyles[1]}
          >
            <div className="accordion-body" style={itemStyles[1]}>
              <strong>Analyze your text easily with TextUtils:</strong>
              <ul>
                <li>Get the word count and character count instantly.</li>
                <li>See the number of paragraphs entered.</li>
                <li>Preview the formatted or cleaned-up text.</li>
                <li>Analyze text readability and formatting as needed.</li>
              </ul>
              Text analysis helps in improving the quality of your content and
              ensures accuracy.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={itemStyles[2]} // Apply the third style
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            style={itemStyles[2]}
          >
            <div className="accordion-body" style={itemStyles[2]}>
              <strong>
                TextUtils includes dark mode for better user experience:
              </strong>
              <ul>
                <li>Toggle between light and dark modes with ease.</li>
                <li>
                  The dark mode is easy on the eyes and ideal for low-light
                  environments.
                </li>
                <li>
                  The entire application, except for the text area, changes its
                  background color based on the mode selected.
                </li>
                <li>
                  Switching modes provides a consistent user interface
                  experience.
                </li>
              </ul>
              Enhance the application's usability by enabling dark mode
              according to your preference.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
