import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav class="navbar m-0 p-2 bg-dark navbar-dark">
      <div class="container">
        <Link class="navbar-brand" to="">
          Home
        </Link>
        <Link class="navbar-brand" to="/new-recipe">
          Add A Recipe
        </Link>
      </div>
    </nav>
  );
};
export default Header;
