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
      <h1 className="text-center text-danger mb-4">
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
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Recipe Name:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter a mouthwatering name..."
              id="name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Your Name:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Let us know who you are!"
              id="username"
              {...register("username")}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="tags"
              className="block text-gray-700 font-bold mb-2"
            >
              Tags:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Separate tags with commas"
              id="tags"
              {...register("tags")}
            />
          </div>
          <div className="row mb-4">
            <div className="col-md-6">
              <label
                htmlFor="prepareTime"
                className="block text-gray-700 font-bold mb-2"
              >
                Prep Time (minutes):
              </label>
              <input
                type="number"
                className="form-control"
                id="prepareTime"
                {...register("prepareTime")}
              />
            </div>
            <div className="col-md-6">
              <label
                htmlFor="cookTime"
                className="block text-gray-700 font-bold mb-2"
              >
                Cook Time (minutes):
              </label>
              <input
                type="number"
                className="form-control"
                id="cookTime"
                {...register("cookTime")}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="ingredients"
              className="block text-gray-700 font-bold mb-2"
            >
              Ingredients:
            </label>
            <textarea
              className="form-control"
              rows="5"
              id="ingredients"
              placeholder="List each ingredient on a new line"
              {...register("ingredients")}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="steps"
              className="block text-gray-700 font-bold mb-2"
            >
              Instructions:
            </label>
            <textarea
              className="form-control"
              rows="8"
              id="steps"
              placeholder="Write clear and concise instructions"
              {...register("steps")}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="servings"
              className="block text-gray-700 font-bold mb-2"
            >
              Servings:
            </label>
            <input
              type="number"
              className="form-control"
              id="servings"
              {...register("servings")}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="servingSizes"
              className="block text-gray-700 font-bold mb-2"
            >
              Serving Size (per serving):
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g., 1 cup"
              id="servingSizes"
              {...register("servingSizes")}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="recipeImage"
              className="block text-gray-700 font-bold mb-2"
            >
              Recipe Photo:
            </label>
            <input
              type="file" // Changed from 'url' to 'file' to accept image uploads
              className="form-control"
              id="recipeImage"
              onChange={handleImageChange}
            />
          </div>
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
