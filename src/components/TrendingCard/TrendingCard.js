import { DivisorLine, TrendingContainer } from "./styled"
import HashTagsList from "../HashTags/HashTags"

export default function TrendingCard(){
    return(
        <TrendingContainer data-test="trending">
            <h1>trending</h1>
            <DivisorLine></DivisorLine>
            <HashTagsList/>
        </TrendingContainer>
    )
}