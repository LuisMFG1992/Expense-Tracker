import "./Data.css";
import { useState } from "react";
import { useFormik } from "formik";

import {
  Heading,
  Badge,
  Text,
  Grid,
  GridItem,
  Stack,
  Center,
  Input,
  Container,
  Select,
  Button,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";

/*
TODO: Extender los inputs hasta el final del container. Quizas con un grid o la propiedad de flexbox que hace que crezcan los elementos

TODO: Crear componente tabla con 5 columnas: date, type, description, category, amount
*/

const Data = () => {
  let today = new Date();
  let year = today.getFullYear();
  let preMonth = today.getMonth() + 1;
  let month = preMonth < 10 ? `0${preMonth}` : preMonth;
  let day = today.getDate();
  let format = `${day}-${month}-${year}`;

  const formik = useFormik({
    initialValues: {
      date: "",
      type: "",
      description: "",
      amount: "",
      category: "",
    },
    onSubmit: (values, actions) => {
      if (values.date == "") {
        values.date = format;
      } else {
        let newFormat = values.date.split("-").reverse().join("-");
        values.date = newFormat;
      }

      console.log(JSON.stringify(values, null, 2));
      actions.resetForm();
    },
  });

  const [switcherChecked, setSwitcherChecked] = useState(true);
  const [dateRequired, setDateRequired] = useState("");

  const handelSwitch = (e) => {
    let isChecked = document.getElementById("switcher").checked;
    setSwitcherChecked(isChecked);
    document.getElementById("datePicker").toggleAttribute("disabled");
    switcherChecked ? setDateRequired("required") : setDateRequired("");
  };

  return (
    <>
      <Container mt="4">
        <Heading
          size="md"
          pb="2"
          mb="2"
          borderBottom="1px"
          borderColor="black.200"
        >
          Balance
        </Heading>

        {/* Balance indicators */}
        <Grid templateColumns="repeat(3, 1fr)">
          <GridItem h="10">
            <Text fontSize="sm" fontWeight="bold">
              Income
              <Badge ml="1" fontSize="sm" colorScheme="green">
                0
              </Badge>
            </Text>
          </GridItem>
          <GridItem h="10">
            <Text fontSize="sm" fontWeight="bold">
              Expenses
              <Badge ml="1" fontSize="sm" colorScheme="red">
                0
              </Badge>
            </Text>
          </GridItem>
          <GridItem h="10">
            <Text fontSize="sm" fontWeight="bold">
              Available
              <Badge ml="1" fontSize="sm" colorScheme="blue">
                0
              </Badge>
            </Text>
          </GridItem>
        </Grid>

        <Heading
          size="md"
          pb="2"
          mb="2"
          borderBottom="1px"
          borderColor="black.200"
        >
          New entry
        </Heading>
        <Center>
          <form onSubmit={formik.handleSubmit}>
            {/* input date */}
            <FormControl isRequired={dateRequired}>
              <Stack shouldWrapChildren direction="row">
                <Center mb="2">
                  <FormLabel fontSize="sm" fontWeight="bold" htmlFor="number">
                    Date
                  </FormLabel>
                  <Input
                    type="date"
                    // data-date=""
                    // data-date-format="YYYY MMMM DD"
                    // value="2015-08-09"
                    mr="2"
                    id="datePicker"
                    disabled
                    {...formik.getFieldProps("date")}
                  ></Input>

                  <Text fontSize="sm">Today</Text>
                  <Switch
                    isRequired={""}
                    id="switcher"
                    size="lg"
                    ml="2"
                    defaultChecked
                    onChange={handelSwitch}
                  />
                </Center>
              </Stack>
            </FormControl>

            {/* input select */}
            <FormControl isRequired>
              <Stack shouldWrapChildren direction="row" mb="2">
                <Center>
                  <FormLabel fontSize="sm" fontWeight="bold" htmlFor="number">
                    Type
                  </FormLabel>
                  <Select
                    placeholder="Select option"
                    fontSize="sm"
                    {...formik.getFieldProps("type")}
                  >
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                  </Select>
                </Center>
              </Stack>
            </FormControl>

            {/* input description */}
            <FormControl isRequired>
              <Stack shouldWrapChildren direction="row" mb="2" fontSize="xs">
                <Center>
                  <FormLabel
                    fontSize="sm"
                    fontWeight="bold"
                    htmlFor="description"
                  >
                    Description
                  </FormLabel>
                  <Input
                    autoComplete="off"
                    type="text"
                    placeholder="Rent"
                    fontSize="sm"
                    id="description"
                    name="description"
                    {...formik.getFieldProps("description")}
                  />
                </Center>
              </Stack>
            </FormControl>

            {/* input amount */}
            <FormControl isRequired>
              <Stack shouldWrapChildren direction="row" mb="2">
                <Center>
                  <FormLabel fontSize="sm" fontWeight="bold" htmlFor="amount">
                    Amount
                  </FormLabel>
                  <Input
                    autoComplete="off"
                    type="number"
                    placeholder="1000"
                    fontSize="sm"
                    id="amount"
                    name="amount"
                    {...formik.getFieldProps("amount")}
                  />
                </Center>
              </Stack>
            </FormControl>

            {/* input category */}
            <FormControl>
              <Stack shouldWrapChildren direction="row" mb="2">
                <Center>
                  <FormLabel fontSize="sm" fontWeight="bold" htmlFor="category">
                    Category
                  </FormLabel>
                  <Input
                    autoComplete="off"
                    type="text"
                    placeholder="General"
                    fontSize="sm"
                    id="category"
                    name="category"
                    {...formik.getFieldProps("category")}
                  />
                </Center>
              </Stack>
            </FormControl>

            <Button colorScheme="blue" type="submit">
              Add
            </Button>
          </form>
        </Center>
      </Container>
    </>
  );
};

export default Data;
