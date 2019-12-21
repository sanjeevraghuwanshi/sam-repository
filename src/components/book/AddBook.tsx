import React, { useState } from "react";
// import PropTypes from "prop-types";

import { Field, reduxForm } from "redux-form";

// custom hook
// const useFormInput = initialValue => {
//   const [value, setValue] = useState(initialValue);
//   const handleChange = event => {
//     setValue(event.target.value);
//   };
//   return { value, onChange: handleChange };
//   // return { value };
// };
const sleep = (ms: any) => new Promise(resolve => setTimeout(resolve, ms));

const AddBook = (props: any) => {
  const { pristine, submitting, reset, handleSubmit } = props;
  const [title, setTitle] = useState("sam");
  const formSubmit = async (values: any) => {
    await sleep(500);
    alert(`entered values ${JSON.stringify(values)}`);
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)} className="w-75">
      <div className="form-group row">
        <label htmlFor="title" className="col-sm-2 col-form-label">
          Book title
        </label>
        <div className="col-sm-10">
          {/* <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    /> */}
          <Field
            className="form-control"
            name="title"
            component="input"
            type="text"
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
            placeholder="Enter the book title"
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="writeToAuthor" className="col-sm-2 col-form-label">
          Write to author on
        </label>
        <div className="col-sm-10">
          <Field
            className="form-control "
            name="writeToAuthor"
            component="input"
            type="email"
            placeholder="Enter the email"
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="bookCategory" className="col-sm-2 col-form-label">
          Book category
        </label>
        <div className="col-sm-10">
          <Field
            className="form-control "
            name="bookCategory"
            component="select"
          >
            <option>Select the category</option>
            <option value="Educational">Educational</option>
            <option value="Mythological">Mythological</option>
          </Field>
        </div>
      </div>
      <fieldset className="form-group">
        <div className="row">
          <legend className="col-form-label col-sm-2 pt-0">Book type</legend>
          <div className="col-sm-10">
            <div className="form-check">
              <Field
                className="form-check-input "
                name="bookType"
                component="input"
                type="radio"
                value="paperBack"
              />
              <label className="form-check-label" htmlFor="bookType">
                Paperback
              </label>
            </div>
            <div className="form-check">
              <Field
                className="form-check-input "
                name="bookType"
                component="input"
                type="radio"
                value="pdf"
              />
              <label className="form-check-label" htmlFor="bookType">
                Pdf
              </label>
            </div>
          </div>
        </div>
      </fieldset>

      <div className="form-group row">
        <label htmlFor="bookCategory" className="col-sm-2 col-form-label">
          Is book available for sale
        </label>
        <div className="col-sm-10">
          {/* <div className="form-check"> */}
          <Field name="bookCategory" component="input" type="checkbox" />
          {/* </div> */}
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="summary" className="col-sm-2 col-form-label">
          Summary
        </label>
        <div className="col-sm-10">
          <Field
            className="form-control "
            name="summary"
            component="textarea"
            placeholder="Enter the book summary"
            rows="3"
          />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="inputGroupFile02" className="col-sm-2 col-form-label">
          Book poster
        </label>
        <div className="col-sm-10">
          <div className="input-group">
            <div className="custom-file">
              <Field
                type="file"
                component="input"
                name="bookPoster"
                className="custom-file-input"
                id="inputGroupFile02"
              />
              <label className="custom-file-label" htmlFor="inputGroupFile02">
                Choose file
              </label>
            </div>
            <div className="input-group-append">
              <span className="input-group-text" id="">
                Upload
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="form-group row">
        <div className="col-sm-10">
          <button
            className="btn btn-primary mr-4"
            type="submit"
            disabled={pristine || submitting}
          >
            Submit
          </button>
          <button
            className="btn btn-secondary"
            type="submit"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear values
          </button>
        </div>
      </div>
    </form>
  );
};

// AddBook.propTypes = {
//   title: PropTypes.string.isRequired, //Book title - input
//   writeToAuthor: PropTypes.string.isRequired, // email,
//   summary: PropTypes.string.isRequired, //Book summary - textarea
//   isBookAvailableForSale: PropTypes.bool.isRequired, // Is book available in market/online - checkbox
//   bookCategory: PropTypes.string.isRequired, //like educational, Mythological - select
//   bookPoster: PropTypes.string.isRequired, // image
//   bookType: PropTypes.string.isRequired //paperback or PDF - radio
// };

export default reduxForm({
  form: "AddBookForm"
})(AddBook);
