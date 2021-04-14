import React, { useState } from "react";
import { countries } from "countries-list";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../../actions/cartActions";
import CheckoutSteps from "./CheckoutSteps";
import { Link, Route } from "react-router-dom";

const Shipping = ({ history }) => {
  const { shippingInfo } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingInfo.address);

  const [city, setCity] = useState(shippingInfo.city);

  const [zipCode, setZipCode] = useState(shippingInfo.zipCode);

  const [phoneNu, setPhoneNu] = useState(shippingInfo.phoneNu);

  const [country, setCountry] = useState("Israel");

  const countriesList = Object.values(countries);

  const contryHandle = (e) => {
    setCountry(e.target.value);
    console.log(country);
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(saveShippingInfo({ address, city, phoneNu, zipCode, country }));
    history.push("/order/confirm");
  };
  return (
    <>
      <CheckoutSteps shipping />

      <div style={{ marginLeft: "460px" }}>
        <div className="col-10 col-lg-5">
          <form onSubmit={submitHandler}>
            <h1 className="mb-4">Shipping Info</h1>
            <div className="form-group">
              <label htmlFor="address_field">Address</label>
              <input
                type="text"
                id="address_field"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="city_field">City</label>
              <input
                type="text"
                id="city_field"
                className="form-control"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone_field">Phone Number</label>
              <input
                type="phone"
                id="phone_field"
                className="form-control"
                value={phoneNu}
                onChange={(e) => setPhoneNu(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="postal_code_field">Zip Code</label>
              <input
                type="number"
                id="postal_code_field"
                className="form-control"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="country_field">Country</label>
              <select
                id="country_field"
                className="form-control"
                value={country}
                onChange={contryHandle}
                required
              >
                {countriesList.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <button id="shipping_btn" type="submit" className="btn btn-primary">
              CONTINUE
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Shipping;
