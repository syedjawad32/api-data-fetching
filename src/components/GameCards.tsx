import { Card, Heading, Image } from "@chakra-ui/react"
import { Games } from "../hooks/useGames"

interface Props  {
    game:Games
}

const GameCards = ({game}: Props) => {
  return (
   <Card borderRadius={10} overflow="hidden">
    <Image src={game.background_image}/>
    <Heading fontSize="2xl">{game.name}</Heading>
   </Card>
  )
}

export default GameCards