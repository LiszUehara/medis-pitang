import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Link,
  Popover,
  PopoverTrigger,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <Box>
      <Flex
        bg={"gray.900"}
        color={"white"}
        minH={"60px"}
        minW={"100vw"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"teal.900"}
        align={"center"}
      >


        Me.displine
        <Flex flex={{ base: 1 }} justifyContent={'center'} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={"white"}
          >
            
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <ItemMenu />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
            _hover={{
                color: "white",
              }}
          >
            Sign In
          </Button>
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"teal.400"}
            href={"#"}
            _hover={{
              bg: "teal.300",
              color: "white",
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}

const ItemMenu = () => {
  const linkColor = "gray.200";
  const linkHoverColor = "white";

  return (
    <Stack direction={"row"} spacing={4} justifyContent={"space-between"}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};


const NAV_ITEMS = [
  {
    label: "Pagina Inicial",
    href: "../",
  },
  {
    label: "Cadastra Disciplina",
    href: "discipline",
  },
];
