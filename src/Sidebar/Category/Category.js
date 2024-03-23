import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Dinner"
          title="Dinner"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Vegetarian"
          title="Vegetarian"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Italian"
          title="Italian"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="SeaFood"
          title="SeaFood"
          name="test"
        />{" "}
        <Input
          handleChange={handleChange}
          value="Indian"
          title="Indian"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
