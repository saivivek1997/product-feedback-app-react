import { getStorage } from "@/utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function useFormData(initialData, id) {
  const { id: paramsId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getDataById = getStorage("product-details")?.find(
    (product) => product.id === +paramsId
  );
  const initialState = getDataById ? getDataById : initialData;
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevormData) => ({ ...prevormData, [name]: value }));
  };

  function sendSelectData(name, value) {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  function handleFormData(event, formData, fn, id, isFieldsEmpty) {
    event.preventDefault();
    if (!isFieldsEmpty()) {
      id ? dispatch(fn({ formData, id })) : dispatch(fn({ formData }));
      navigate("/");
    }
  }

  const handleCancelButton = () => {
    navigate("/");
  };

  return {
    formData,
    handleChange,
    sendSelectData,
    handleCancelButton,
    handleFormData,
  };
}

export default useFormData;
