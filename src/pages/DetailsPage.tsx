import { useParams } from 'react-router';
import data from '../assets/007text.json';
import { Box, Divider, Image, ListItem, UnorderedList, Heading, Text, Link} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const DetailsPage = () => {
    const { id }:any = useParams();

    if (!id) {
        return <p>Loading...</p>;
      }

  return (
    <div style={{margin:"8px 80px 40px 80px"}}>
        { data[id] && 
            <Box px="20px">
                <Heading p={2}>{data[id].title}</Heading>
                <Image objectFit='cover' src={data[id].image} alt={data[id].title} p={2}/>
                <Divider />
                <Box w='100%' p={2} m={2}>
                    <UnorderedList>
                        <ListItem><Text>Cast : {data[id].cast}</Text></ListItem>
                        <ListItem><Text>Producer(s) : {data[id].producer ? data[id].producer : data[id].producers}</Text></ListItem>
                        <ListItem><Text>Director : {data[id].director}</Text></ListItem>
                        <ListItem><Text>synopsis : {data[id].synopsis}</Text></ListItem>
                        <ListItem><Text>Locations : {data[id].locations}</Text></ListItem>
                        <ListItem><Text>Music : {data[id].music}</Text></ListItem>
                        <ListItem><Text>Vehicles : {data[id].vehicles}</Text></ListItem>
                        <ListItem><Text>Trivia : {data[id].trivia}</Text></ListItem>
                    </UnorderedList>
                    
                </Box>
                <Link href={data[id].trailer} isExternal m={5} bg='tomato' color='white' p={3}>Watch Trailer <ExternalLinkIcon mx='2px' /></Link>
            </Box>
        }
    </div>
  )
}

export default DetailsPage