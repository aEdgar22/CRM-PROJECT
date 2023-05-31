import { Input } from "@chakra-ui/react"

const InputCommon = ({text}) => {
  return (
    <Input placeholder={text} mb='1rem' size='lg' bg='white' borderRadius='4rem' h='3.5rem' p='0 2rem' />
  )
}

export default InputCommon