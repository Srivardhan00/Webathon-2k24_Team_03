import { useForm } from "react-hook-form";
import { useState } from "react";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    reset, // Add reset function from useForm
  } = useForm();
  const [users, setUsers] = useState([]);

  const handleFormSubmit = (userObj) => {
    setUsers([...users, userObj]);
    reset(); // Clear form fields after submission
  };

  const passwordMatchValidator = (value) => {
    const password = getValues("password");
    return password === value || "Passwords do not match";
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/564x/a7/f7/de/a7f7de9f52782ad8656222da1e416697.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "84vh",
      }}
    >
      <h1 className="mt-3 text-center text-primary">User Registration</h1>
      <form
        className="w-25 bg-light p-4 mx-auto mt-5"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && (
          <p className="text-danger lead fs-5">{errors.email.message}</p>
        )}

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Username"
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 4,
              message: "Username must be at least 4 characters long",
            },
            maxLength: {
              value: 8,
              message: "Username cannot exceed 8 characters",
            },
          })}
        />
        {errors.username && (
          <p className="text-danger lead fs-5">{errors.username.message}</p>
        )}

        <select
          className="form-select mb-3"
          {...register("country", { required: true })}
        >
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
          {/* Add more countries as needed */}
        </select>
        {errors.country && (
          <p className="text-danger lead fs-5">Please select a country</p>
        )}

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
        />
        {errors.password && (
          <p className="text-danger lead fs-5">{errors.password.message}</p>
        )}

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: passwordMatchValidator,
          })}
        />
        {errors.confirmPassword && (
          <p className="text-danger lead fs-5">
            {errors.confirmPassword.message}
          </p>
        )}

        <button
          type="submit"
          className="mx-auto d-block btn btn-success"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default SignUp;
