import { Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { AiFillEdit, AiOutlineCheckCircle } from "react-icons/ai";
import { IoTrash } from "react-icons/io5";
import { Link } from "react-router-dom";
import { selectUser } from "../../../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { deleteUserThunk } from "../../../redux/thunks/userThunks";
import Swal from "sweetalert2";

const ContactItem = ({ user }) => {
  const { name, telf } = user;
  const dispatch =  useDispatch()

  const handleUserSelect = (user) => {
    dispatch(selectUser(user))
  }

  const handleUserDelete = (user) => {
    dispatch(deleteUserThunk(user.id))
    Swal.fire("Usuario eliminado", "", "success");
  }
  return (
    <>
      <Flex justify="space-between">
        <VStack alignItems="flex-start">
          <Text as="b" fontSize="xl">
            {name}
          </Text>
          <Text fontSize="md" mt="0px" color="primary">
            {telf}
          </Text>
        </VStack>
        <HStack columnGap="1rem">
          <Link to={`/contact/user-form/${user.id}`}>
            <AiFillEdit size="1.2rem" color="primary" onClick={() => handleUserSelect(user)} />
          </Link>
          <AiOutlineCheckCircle size="1.2rem" color="primary" />
          <IoTrash size="1.2rem" color="primary" onClick={() => handleUserDelete(user)}/>
        </HStack>
      </Flex>
      <Divider h="0.2rem" bg="whiteColor" mt="0.5rem" />
    </>
  );
};

export default ContactItem;
