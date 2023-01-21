import { Box, Text } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Box>
        <Text>
          {/* Start */}
          <Link to={routes.billmccann()}>billmccann</Link>
          <br />
          <Link to={routes.keyadhruve()}>keyadhruve</Link>
          <br></br>
          <Link to={routes.crismolina()}>Cristhian Molina's Page</Link>
          {/* End */}
        </Text>
      </Box>
    </>
  )
}

export default HomePage
