import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { forgotPassword, clearErrors } from "../../actions/authActions";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { error, loading, message } = useSelector(
    (state) => state.forgotPassword
  );

  useEffect(() => {
    if (error) {
      dispatch(clearErrors);
    }
  }, [dispatch, error, message]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    console.log(formData.get("email"));
    dispatch(forgotPassword(formData.getAll("email")));
  };

  return (
    <>
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg" onSubmit={submitHandler}>
            <h1 className="mb-3">Forgot Password</h1>
            <div className="form-group">
              <label htmlFor="email_field">Enter Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              id="forgot_password_button"
              type="submit"
              className="btn btn-block py-3"
              disabled={loading ? true : false}
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
