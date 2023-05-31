import { Box, Button, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ContactItem from "./components/ContactItem";
import CommonContainer from "../../components/CommonContainer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/thunks/userThunks";

const ContactPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dataUser = useSelector((state) => state.user.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = dataUser.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Stack spacing={3} direction="row" align="center">
        <Input
          height="3.5rem"
          fontSize="1.2rem"
          p="0 2rem"
          bg="secundary"
          placeholder="Buscar"
          value={searchTerm}
          onChange={handleSearch}
          borderRadius="4rem"
          mb="2rem"
        />
      </Stack>
      <Heading size="md" fontWeight="bold" color="primary">
        Lista de contactos
      </Heading>

      <CommonContainer maxH="34rem">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <ContactItem key={index} user={user} />
          ))
        ) : (
          <Heading size="md" color="#3d3d3d">
            No hay contactos para mostrar
          </Heading>
        )}
      </CommonContainer>

      <Flex justify="center">
        <Link to="/Contact/user-form">
          <Button
            as="button"
            w="8rem"
            bg="primary"
            color="#fff"
            mt="1rem"
            borderRadius="4rem"
          >
            Agregar
          </Button>
        </Link>
      </Flex>
    </>
  );
};

export default ContactPage;
