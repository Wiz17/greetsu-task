import "./style/nav.css";
import "./style/header.css";
import "./style/form.css";
import { useState } from "react";
import Snackbar from "../src/components/snackbar";
const Main = () => {
  const [formData, setFormData] = useState({
    yourName: "",
    partnerName: "",
    coupleName: "",
    yourImage: "Choose File",
    partnerImage: "Choose File",
    coupleImage: "Choose File",
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setFormData({ ...formData, [name]: file.name });
  };
  const [milestones, setMilestones] = useState([
    {
      milestone: "",
      date: "",
    },
  ]);
  const addMilestone = () => {
    setMilestones((prevMilestones) => [
      ...prevMilestones,
      { milestone: "Mile1", date: "MileDate" },
    ]);
  };
  const deleteClick = (e) => {
    if (milestones.length <= 2) {
      setSnackbarMessage("At least Two Milestones are Required");
      setSnackbarOpen(true);
      // window.alert("MAX 2 Milestones are req.");
      return;
    }
    setMilestones((prevMilestones) =>
      prevMilestones.filter((_, i) => i != e.target.id)
    );
  };

  const submitForm = (e) => {
    console.log("SUBMIT");
    e.preventDefault();
    const missingFields = [];
    if (formData.yourName === "") missingFields.push("Your Name");
    if (formData.partnerName === "") missingFields.push("Partners Name");
    if (formData.yourImage == "Choose File") missingFields.push("Your Image ");
    if (formData.partnerImage == "Choose File")
      missingFields.push("Partners Image");

    if (missingFields.length > 0) {
      setSnackbarMessage(
        `Error: ${missingFields.join(", ")} ${
          missingFields.length > 1 ? "are" : "is"
        } required`
      );

      setSnackbarOpen(true);
      return;
    }

    console.log(formData.yourName);
    console.log(formData.partnerName);
    console.log(formData.yourImage);
    console.log(formData.partnerImage);
  };
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      {/* Nav */}
      <Snackbar
        prop={snackbarOpen}
        prop2={snackbarMessage}
        onClose={handleSnackbarClose}
      />
      <div className="nav">
        <img
          src="https://loveto.greetsu.com/rainbow.png"
          alt=""
          className="heartImg"
        />
        <div className="logo-text-flex">
          <div>
            <div>
              <span className="nav-text">Loveto</span>
              <span className="nav-text-2">Create your love timeline</span>
            </div>
            <div className="nav-text-logo">
              <div className="nav-text-logo-1">Powered By</div>
              <div>
                <img
                  src="https://loveto.greetsu.com/logo.svg"
                  alt=""
                  className="logoImg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Nav */}

      <div className="page-body">
        <div className="page-body-1">
          <h1 className="header-1">Create your Love Timeline</h1>
          <form action="" className="form-style" onSubmit={submitForm}>
            <div className="formstyle-2">
              <h2 className="form-header">Add your details</h2>
              <div className="input-group">
                <div className="input-group-2">
                  <div className="label-margin">
                    <label className="label-font">Your Name</label>
                    <input
                      type="text"
                      name="yourName"
                      placeholder="Enter your name"
                      onChange={handleInputChange}
                      className="input-field"
                    />
                  </div>
                  <div className="label-margin">
                    <label className="label-font">Partner Name</label>
                    <input
                      type="text"
                      name="partnerName"
                      placeholder="Enter Your Partner Name"
                      onChange={handleInputChange}
                      className="input-field"
                    />
                  </div>
                  <div className="label-margin">
                    <label className="label-font">Couple Name</label>
                    <input
                      type="text"
                      name="coupleName"
                      placeholder="Eg.. Virat & Anushka => Virushka"
                      onChange={handleInputChange}
                      className="input-field"
                    />
                  </div>
                  <div className="label-margin">
                    <label className="label-font" htmlFor="fileInput">
                      Your Image
                      <span className="file-input-text">
                        (recommended aspect ratio of image 1:1)
                      </span>
                      <div className="file-input">{formData.yourImage}</div>
                    </label>
                    <input
                      type="file"
                      hidden
                      name="yourImage"
                      id="fileInput"
                      // required
                      onChange={handleFileChange}
                      accept="image/png, image/jpeg, image/gif"
                    ></input>
                  </div>
                  <div className="label-margin">
                    <label className="label-font" htmlFor="partnerImageInput">
                      Partner Image
                      <span className="file-input-text">
                        (recommended aspect ratio of image 1:1)
                      </span>
                    </label>
                    <div
                      className="file-input"
                      onClick={() =>
                        document.getElementById("partnerImageInput").click()
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {formData.partnerImage
                        ? formData.partnerImage
                        : "Choose file"}
                    </div>
                    <input
                      type="file"
                      hidden
                      name="partnerImage"
                      id="partnerImageInput"
                      onChange={handleFileChange}
                      accept="image/png, image/jpeg, image/gif"
                    />
                    <div id="fileName" className="file-name"></div>
                  </div>
                  <div className="label-margin">
                    <label className="label-font" htmlFor="coupleImageInput">
                      Couple Image
                      <span className="file-input-text">(Optional)</span>
                    </label>
                    <div
                      className="file-input"
                      onClick={() =>
                        document.getElementById("coupleImageInput").click()
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {formData.coupleImage
                        ? formData.coupleImage
                        : "Choose file"}
                    </div>
                    <input
                      type="file"
                      hidden
                      name="coupleImage"
                      id="coupleImageInput"
                      onChange={handleFileChange}
                      accept="image/png, image/jpeg, image/gif"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="formstyle-22">
              <div style={{ width: "90%" }}>
                <h2 className="form-header">Add your journey milestones.</h2>
                <div className="card-collect">
                  {milestones.map((_, index) => {
                    return (
                      <div className="card" key={index}>
                        <div className="milestone">
                          <div className="label-font">Milestone{index + 1}</div>
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder={`Milestone ${index + 1}`}
                            className="input-field"
                          />
                        </div>
                        <div className="date">
                          <div className="date-1">
                            <div className="label-font">
                              Date of milestone{index + 1}
                            </div>
                            <div style={{ marginTop: "4px" }}>
                              <span className="delete-button">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 24 24"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                  id={index}
                                  onClick={deleteClick}
                                >
                                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                                  <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"></path>
                                </svg>
                              </span>
                            </div>
                          </div>

                          <input
                            type="date"
                            className="input-field"
                            name=""
                            id=""
                          />
                        </div>
                      </div>
                    );
                  })}

                  <div className="btn">
                    <div className="milestone-btn-div" onClick={addMilestone}>
                      Add Milestone
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn">
              <button className="milestone-btn" type="submit">
                Create Timeline
              </button>
            </div>
          </form>
        </div>
        <a href="#" className="logo-container">
          <div className="logo-text">
            <img
              src="https://loveto.greetsu.com/static/media/greetsu-favicon.b43044faff18cc4fe7f572ee5fe84cef.svg"
              alt="U logo"
              className="logo-u"
            />
          </div>
          <div className="logo-title">
            <p className="logo-from-team">From team</p>
            <h3 className="logo-greetsu">GreetsU</h3>
          </div>
        </a>
      </div>
    </>
  );
};
export default Main;
