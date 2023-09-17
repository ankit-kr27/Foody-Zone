import styled from "styled-components"

const SearchResults = () => {
    return (
        <FoodCardsContainer>
            <FoodCard></FoodCard>
        </FoodCardsContainer>
    )
}

export default SearchResults

const FoodCardsContainer = styled.section`
  height: calc(100vh - 202px);
  background-image: url("/bg.png");
  background-size: cover;
  object-fit: cover;
`

const FoodCard = styled.div`
  
`