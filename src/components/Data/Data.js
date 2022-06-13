import "./Data.css";
import { useState } from "react";
import {
  Heading,
  Badge,
  Text,
  Grid,
  GridItem,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Stack,
  Center,
  Input,
  Container,
  Select,
  Checkbox,
  Button,
  FormControl,
} from "@chakra-ui/react";

/*
TODO: Hacer que NEW se comporte como un formulario al tocar ADD
TODO: Hacer que los campos sean requeridos
TODO: Hacer un toggle con el checkbox para que al estar checked desabilite los inputs de las fechas
TODO: Achicar las fuentes
TODO: Extender los inputs hasta el final del container
TODO: Aplicar logica para crear array con objetos de cada gasto o ingreso
TODO: Crear componente donde se mostraran los items
*/

const Data = () => {
  let today = new Date();
  let format = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;

  const [movement, setMovement] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    let now = document.querySelector("#now").checked;

    const newMovement = {
      date: now ? format : e.target.date.value,
      name: e.target.name.value,
      category: e.target.category.value,
      amount: e.target.amount.value,
    };

    setMovement([...movement, newMovement]);
  };

  // console.log(movement);

  return (
    <>
      <Container>
        <Heading size="md" pb="2" mt="3">
          Balance
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)">
          <GridItem h="10">
            <Text fontSize="md" fontWeight="bold">
              Income
              <Badge ml="1" fontSize="0.8em" colorScheme="green">
                0
              </Badge>
            </Text>
          </GridItem>
          <GridItem h="10">
            <Text fontSize="md" fontWeight="bold">
              Expenses
              <Badge ml="1" fontSize="0.8em" colorScheme="red">
                0
              </Badge>
            </Text>
          </GridItem>
          <GridItem h="10">
            <Text fontSize="md" fontWeight="bold">
              Available
              <Badge ml="1" fontSize="0.8em" colorScheme="blue">
                0
              </Badge>
            </Text>
          </GridItem>
        </Grid>
        <Heading size="md" pb="2">
          New
        </Heading>
        <FormControl isRequired>
          <Select placeholder="Select option" pb="2">
            <option value="option1">Income</option>
            <option value="option2">Expense</option>
          </Select>
          <Stack shouldWrapChildren direction="row">
            <Center mb="2">
              <Text fontSize="md" fontWeight="bold" mr="2">
                Date
              </Text>
              <NumberInput mr="1" size="sm" maxW={20} min={1} max={31}>
                <NumberInputField placeholder="DD" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <NumberInput mr="1" size="sm" maxW={20} min={1} max={12}>
                <NumberInputField placeholder="MM" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <NumberInput
                mr="1"
                size="sm"
                maxW={20}
                min={2000}
                max={today.getFullYear()}
              >
                <NumberInputField placeholder="YYYY" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Checkbox defaultChecked>Today</Checkbox>
            </Center>
          </Stack>
          <Stack shouldWrapChildren direction="row" pb="2" fontSize="xs">
            <Center>
              <Text fontSize="md" fontWeight="bold" mr="2">
                Description
              </Text>
              <Input placeholder="Rent" />
            </Center>
          </Stack>
          <Stack shouldWrapChildren direction="row" pb="2">
            <Center>
              <Text fontSize="md" fontWeight="bold" mt="1" mr="6">
                Category
              </Text>
              <Input placeholder="General by default" />
            </Center>
          </Stack>
          <Stack shouldWrapChildren direction="row" pb="2">
            <Center>
              <Text fontSize="md" fontWeight="bold" mt="1" mr="8">
                Amount
              </Text>
              <Input placeholder="1000" />
            </Center>
          </Stack>
          <Button colorScheme="blue">Add</Button>
        </FormControl>
      </Container>
    </>
  );
};

export default Data;
{
  /* <div className="movementSection">
<h2 className="titel">New movement</h2>
<form className="form" onSubmit={handleAdd}>
  <div>
    <label>Date</label>
    <input type="text" name="date"></input> <label>Now</label>
    <input type="checkbox" id="now" defaultChecked></input>
  </div>
  <div>
    <label>Name</label>
    <input type="text" name="name" required></input>
  </div>
  <div>
    <label>Category</label>
    <input type="text" name="category" required></input>
  </div>
  <div>
    <label>Amount</label>
    <input type="text" name="amount" required></input>
  </div>
  <button id="addMovement" type="onSubmit">
    Add
  </button>
</form>
</div> */
}
