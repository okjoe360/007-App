import data from '../assets/007text.json';
import { Link } from "react-router-dom";
import { Heading, Grid, Card, CardHeader, CardBody, Divider, GridItem, Box, Image } from '@chakra-ui/react'

const Home = () => {
    
      if (!data) {
        return <p>Loading...</p>;
      }

  return (
    <div style={{margin:"8px 80px 40px 80px"}}>
        <Heading p={6}>Home</Heading>
        <Divider />
        <Box w='100%' p={2}>
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
        
                { data.map((d, i)=>{
                    return (
                        <GridItem w='100%' key={i}>
                            <Card>
                                <CardHeader>
                                    <Heading size='md'>{d.title}</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Link to={`/details/${i}` }>
                                        <Image objectFit='cover' src={d.image} alt={d.title} />
                                    </Link>
                                </CardBody>
                            </Card>
                        </GridItem>
                    )
                }) }
            </Grid>
        </Box>
    </div>
  )
}

export default Home