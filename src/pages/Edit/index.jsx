import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DisciplineContext } from "../../context/discipline";
import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Input } from "../../components/Input";
import fetcher from "../../services/api";
import { AppContext } from "../../context/AppContext";

const disciplineSchema = z.object({
  description: z.string().nullable(),
});

export default function Edit() {
  const { formState, handleSubmit, register, setValue } = useForm({
    mode: "onBlur",
    resolver: zodResolver(disciplineSchema),
  });
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { loggedUser } = useContext(AppContext);
  const onSubmit = (values) => {
    fetcher.put(`/api/discipline/${id}`, values)
  };

  useEffect(() => {
    fetcher(`/api/discipline/${id}`).then((data) => {
      setValue("name", data.name);
      setValue("description", data.description);
      setValue(
        "createDate",
        new Date(data.createDate).toISOString().split("T")[0]
      );
    });
  }, [id]);
  useEffect(() => {
    if (!loggedUser) {
      navigate('../auth/signin')
    }
  }, [loggedUser]);
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
          Edição de Disciplina
        </Heading>
        <Input
          messageError={formState.errors.name?.message}
          register={register("name")}
          label="Nome"
          id="name"
          errors={formState.errors}
          placeholder="Digite o nome da disciplina"
          isRequired={false}
          type="text"
          disabled={true}
        />
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
        <Input
          messageError={formState.errors.createDate?.message}
          register={register("createDate")}
          label="Data de Criação"
          id="createDate"
          errors={formState.errors}
          isRequired={true}
          type="date"
          disabled={true}
        />
        <Stack spacing={6} direction={["column", "row"]}>
          <Button
            bg={"red.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "red.500",
              borderColor: "red.400",
            }}
            onClick={() => navigate("/")}
          >
            Cancel
          </Button>
          <Button
            bg={"teal.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "teal.500",
              borderColor: "teal.400",
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
