import React, { forwardRef, useEffect, useState } from "react";
import CommonContainer from "../../../components/CommonContainer";
import { Box, Button, FormControl, FormErrorMessage, FormLabel, HStack, Heading, Input, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import {
  createUserThunk,
  updateUserThunk,
} from "../../../redux/thunks/userThunks";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputCommon = forwardRef((props, ref) => {
  return (
    <Input
      placeholder={props.text}
      ref={ref}
      mb="1rem"
      size="lg"
      bg="white"
      borderRadius="4rem"
      h="3.5rem"
      p="0 2rem"
      {...props}
    />
  );
});

const ContactForm = () => {
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      dateBirth: "",
      address: "",
      typeContact: "",
      origin: "",
    },
  });

  useEffect(() => {
    if (selectedUser) {
      setValue("name", selectedUser.name);
      setValue("lastname", selectedUser.lastname);
      setValue("email", selectedUser.email);
      setValue("phone", selectedUser.phone);
      setValue("dateBirth", selectedUser.dateBirth);
      setValue("address", selectedUser.address);
      setValue("typeContact", selectedUser.typeContact);
      setValue("origin", selectedUser.origin);
    }
  }, [selectedUser, setValue]);

  const onSubmit = (data) => {
    if (userId) {
      dispatch(updateUserThunk({ data, userId }));
      Swal.fire("Usuario actualizado", "", "success");
    } else {
      dispatch(createUserThunk(data));
      Swal.fire("Usuario creado", "", "success");
    }
    reset();
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setValue("dateBirth", date, { shouldValidate: true });
  };


  return (
    <Box>
      <Heading size="md" fontWeight="bold" color="primary">
        {userId ? "Actualizar contacto" : "Nuevo contacto"}
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CommonContainer>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Este campo es requerido" }}
            render={({ field }) => (
              <>
                <InputCommon text={"Nombres"} {...field} />
                {errors.name && (
                  <Text fontSize="sm" color="red" mb="1rem">
                    {errors.name.message}
                  </Text>
                )}
              </>
            )}
          />

          <Controller
            name="lastname"
            control={control}
            rules={{ required: "Este campo es requerido" }}
            render={({ field }) => (
              <>
                <InputCommon text={"Apellidos"} {...field} />
                {errors.lastname && (
                  <Text fontSize="sm" color="red" mb="1rem">
                    {errors.lastname.message}
                  </Text>
                )}
              </>
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={{ required: "Este campo es requerido" }}
            render={({ field }) => (
              <>
                <InputCommon text={"E-mail"} {...field} />
                {errors.email && (
                  <Text fontSize="sm" color="red" mb="1rem">
                    {errors.email.message}
                  </Text>
                )}
              </>
            )}
          />

          <Controller
            name="phone"
            control={control}
            rules={{ required: "Este campo es requerido" }}
            render={({ field }) => (
              <>
                <InputCommon text={"Phone"} {...field} />
                {errors.phone && (
                  <Text fontSize="sm" color="red" mb="1rem">
                    {errors.phone.message}
                  </Text>
                )}
              </>
            )}
          />

          <Controller
            name="dateBirth"
            control={control}
            rules={{ required: "Este campo es requerido" }}
            render={({ field }) => (
              <>
                <InputCommon text={"Fecha de nacimiento"} {...field} />
                {errors.dateBirth && (
                  <Text fontSize="sm" color="red" mb="1rem">
                    {errors.dateBirth.message}
                  </Text>
                )}
              </>
            )}
          />
          
          <Controller
            name="address"
            control={control}
            rules={{ required: "Este campo es requerido" }}
            render={({ field }) => (
              <>
                <InputCommon text={"Dirección"} {...field} />
                {errors.address && (
                  <Text fontSize="sm" color="red" mb="1rem">
                    {errors.address.message}
                  </Text>
                )}
              </>
            )}
          />

          <Controller
            name="typeContact"
            control={control}
            rules={{ required: "Este campo es requerido" }}
            render={({ field }) => (
              <>
                <InputCommon text={"Tipo de contacto"} {...field} />
                {errors.typeContact && (
                  <Text fontSize="sm" color="red" mb="1rem">
                    {errors.typeContact.message}
                  </Text>
                )}
              </>
            )}
          />

          <Controller
            name="origin"
            control={control}
            rules={{ required: "Este campo es requerido" }}
            render={({ field }) => (
              <>
                <InputCommon text={"Origen"} {...field} />
                {errors.origin && (
                  <Text fontSize="sm" color="red" mb="1rem">
                    {errors.origin.message}
                  </Text>
                )}
              </>
            )}
          />
          
        </CommonContainer>

        <HStack justifyContent="center" spacing="1rem">
          <Link to="/Contact">
            <Button
              as="button"
              w="8rem"
              color="#fff"
              mt="1rem"
              borderRadius="4rem"
              bg="grayColor"
            >
              Cancelar
            </Button>
          </Link>

          <div>
            <Button
              as="button"
              w="8rem"
              color="#fff"
              mt="1rem"
              bg="third"
              borderRadius="4rem"
              type="submit"
            >
              {userId ? "Actualizar" : "Agregar"}
            </Button>
          </div>
        </HStack>
      </form>
    </Box>
  );
};

export default ContactForm;
