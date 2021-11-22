import React, { useState } from "react";

type Props = {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
};

const SearchSidebar = ({ setStatus }: Props) => {
  const [inputStatus, setInputStatus] = useState<string>("");
  const [inputIsValid, setInputIsValid] = useState<boolean>(true);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputStatus(e.currentTarget.value);
    setInputIsValid(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputStatus.match(/^[0-9]{3}$/)) {
      setInputIsValid(false);
      return;
    }
    setInputIsValid(true);
    setStatus(inputStatus);
    setInputStatus("");
  };

  return (
    <div className='card text-white bg-dark my-3 p-3'>
      <div className='card-body'>
        <form noValidate onSubmit={handleSubmit}>
          <h4 className='card-title text-center'>Búsqueda de status</h4>
          <div className='form-group my-4'>
            <label className='form-label' htmlFor='status'>
              Status (3 dígitos)
            </label>
            <input
              id='status'
              className='form-control'
              type='number'
              placeholder='Ingrese el status...'
              value={inputStatus}
              onChange={handleChange}
            />
            <div
              style={{ display: inputIsValid ? "none" : "block" }}
              className='invalid-feedback'
              data-testid='error-msg'
            >
              El número ingresado debe estar en el formato especificado
            </div>
          </div>

          <button className='btn btn-primary w-100' type='submit'>
            Mostrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchSidebar;
