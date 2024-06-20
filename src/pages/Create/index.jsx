import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DisciplineContext } from "../../context/discipline";
import { useContext } from "react";

const disciplineSchema = z.object({
  name: z.string(),
  description: z.string().nullable(),
  createDate: z.coerce.date(),
});

export default function Create() {
  const { formState, handleSubmit, register } = useForm({
    mode: "onBlur",
    resolver: zodResolver(disciplineSchema),
  });
  const { addDisciplines } = useContext(DisciplineContext);

  const onSubmit = (values) => addDisciplines(values);
  return (
    <Flex minH={"80vh"} align={"center"} justify={"center"} bg={"gray.800"}>
      <Stack
        spacing={5}
        w={"full"}
        maxW={"lg"}
        bg={"gray.700"}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Cadastro de Disciplina
        </Heading>
        <FormControl id="name" isRequired isInvalid={!!formState.errors.name}>
          <FormLabel>Nome</FormLabel>
          <Input
            {...register("name")}
            placeholder="Digite o nome da disciplina"
            _placeholder={{ color: "gray.500" }}
            type="text"
            _focusVisible={{
              borderColor: "teal.400",
              boxShadow: "0 0 0 1px var(--chakra-colors-teal-400)",
            }}
          />
          <FormErrorMessage>{formState.errors.name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl
          id="description"
          isInvalid={!!formState.errors.description}
        >
          <FormLabel>Descrição</FormLabel>
          <Textarea
            {...register("description")}
            _placeholder={{ color: "gray.500" }}
            multiple
            _focusVisible={{
              borderColor: "teal.400",
              boxShadow: "0 0 0 1px var(--chakra-colors-teal-400)",
            }}
          />
          <FormErrorMessage>
            {formState.errors.description?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          id="createDate"
          isRequired
          isInvalid={!!formState.errors.createDate}
        >
          <FormLabel>Data de Criação</FormLabel>
          <Input
            {...register("createDate")}
            _placeholder={{ color: "gray.500" }}
            _focusVisible={{
              borderColor: "teal.400",
              boxShadow: "0 0 0 1px var(--chakra-colors-teal-400)",
            }}
            type="date"
            colorScheme="darl"
          />
          <FormErrorMessage>
            {formState.errors.createDate?.message}
          </FormErrorMessage>
        </FormControl>
        <Stack spacing={6} direction={["column", "row"]}>
          {/* <Button
            bg={"red.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "red.500",
            }}
          >
            Cancel
          </Button> */}
          <Button
            bg={"teal.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "teal.500",
            }}
            onClick={handleSubmit(onSubmit)}
            isLoading={formState.isSubmitting}
            isDisabled={!formState.isValid}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
