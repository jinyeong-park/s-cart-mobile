import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Button, Image } from "react-native";
import * as Yup from "yup";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Screen from "../components/Screen";
// import AppForm from '../components/forms/AppForm'
// import AppFormField from '../components/forms/AppFormField';
// import AppFormPicker from '../components/forms/AppFormPicker';
// import SubmitButton from '../components/forms/SubmitButton';
import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from '../components/CategoryPickerItem';
// import ImageInput from '../components/ImageInput';
import ImageInputList from '../components/ImageInputList';
import FormImagePicker from '../components/forms/FormImagePicker';


const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
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
  // const [imageUris, setImageUris] = useState([]);

  // const handleAddImage = uri => {
  //   setImageUris([...imageUris, uri]);
  // }

  // const handleRemoveImage = uri => {
  //   setImageUris(imageUris.filter(imageUri => imageUri !== uri))
  // }

  // const requestPermission = async () => {
  //   if (!result.granted) {
  //     alert('You need to enable permission to access the library')
  //   }
  //   // return promise
  // }

  // useEffect(() => {
  //   requestPermission()
  // }, [])

  // const selectImage = async () => {
  //   try {
  //     const result = await ImagePicker.launchImageLibraryAsync();
  //     if (!result.cancelled) {
  //       setImageUri(result.uri);
  //     }
  //   } catch (error) {
  //     console.log("Error reading on image", error)
  //   }
  // }
  return (
    <Screen style={styles.container}>
      {/* <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      /> */}
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: []
        }}
        onSubmit={(values) => console.log(values)}
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
          PickerItemComponent={CategoryPickerItem}
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
