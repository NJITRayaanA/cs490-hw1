import { TableContainer, Table, Tr, Td, Tbody, Center } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

const NamithaYallaPage = () => {
  return (
    <box>
      <MetaTags title="Namitha Yalla" description="Nemo's page" />
      <Center>
        <TableContainer width={480} border={'1px'}>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td fontWeight={'bold'}>My Name:</Td>
                <Td>Namitha (Nemo) Yalla</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My GitHub Id:</Td>
                <Td>nYalla6</Td>
              </Tr>
              <Tr>
                <Td fontWeight={'bold'}>My Discord Id:</Td>
                <Td>nemoooo</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
      <br />
      <Center>
        <img
          src="https://media1.giphy.com/media/l1Kuf0U0AcwZUUzq8/giphy.gif?cid=790b7611949becfa6cd1bf38d8858e678f7119377f46b1ed&rid=giphy.gif&ct=g"
          alt="Spongebob rips his pants"
        />
      </Center>
    </box>
  )
}

export default NamithaYallaPage