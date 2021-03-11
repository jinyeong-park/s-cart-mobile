import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

//  dropdown menu inside of form
function AppFormPicker({
  items,
  name,
  placeholder,
  PickerItemComponent,
  numberOfColumns,
  width
}) {

  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        selectedItem={values[name]}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;