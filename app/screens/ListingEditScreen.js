import React from "react";
import { StyleSheet, Text, Button, Image } from "react-native";
import * as Yup from "yup";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
// import * as Location from 'expo-location';

import useLocation from '../hooks/useLocation';
import Screen from "../components/Screen";
import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
// import AppForm from '../components/forms/AppForm'
// import AppFormField from '../components/forms/AppFormField';
// import AppFormPicker from '../components/forms/AppFormPicker';
// import SubmitButton from '../components/forms/SubmitButton';
import PickerItembByCategory from '../components/PickerItembByCategory';
import ImageInputList from '../components/ImageInputList';
import FormImagePicker from '../components/forms/FormImagePicker';


const validationSchema = Yup.object().shape({
  images: Yup.array().min(1, "Please select at least one image"),
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

function ListingEditScreen() {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: []
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images"/>
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          placeholder="Category"
          PickerItemComponent={PickerItembByCategory}
          numberOfColumns={3}
          width="50%"/>
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,

  },
});
export default ListingEditScreen;
