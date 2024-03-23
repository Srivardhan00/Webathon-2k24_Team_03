import { useForm } from "react-hook-form";
import React, { useState } from "react";

function RecipeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();
  const [submittedRecipes, setSubmittedRecipes] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleFormSubmit = (recipeData) => {
    setSubmittedRecipes([...submittedRecipes, recipeData]);
    reset(); // Clear form fields after submission
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setPreviewImage(URL.createObjectURL(selectedFile)); // Set preview image
    } else {
      setPreviewImage(null); // Clear preview if no file selected
    }
  };

  return (
    <div
      className="recipe-form-container d-flex flex-column justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: `url("https://i.pinimg.com/564x/2c/c1/56/2cc15671ae9156431d8bcc36468f0bf6.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-center text-white mb-4">
        Share Your Recipe with the World!
      </h1>
      <form
        className="recipe-form p-4 rounded-lg shadow-sm mb-5"
        style={{ width: "60%", backgroundColor: "#edede9" }} // Increased width and peach color
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <fieldset>
          <legend className="text-center fs-2 mb-4">
            Recipe Submission Form
          </legend>
          {/* Rest of your form elements */}
        </fieldset>
        <button type="submit" className="btn btn-primary mt-4">
          Submit Recipe
        </button>
        <div className="popup-overlay" hidden={!showPopup}>
          <div className="popup">
            <h2 className="text-center mb-4">Recipe Submitted!</h2>
            <p className="text-center">
              Your recipe has been successfully submitted.
            </p>
            <button className="btn btn-primary mt-4" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default RecipeForm;
