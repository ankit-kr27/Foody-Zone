import './App.css'
import styled from 'styled-components'

function App() {

  return (
    <Container>
      <TopContainer>
        <div className='logo'>
          <img src="/logo.svg" alt="Logo" />
        </div>
        <div className='search'>
          <input type="text" placeholder='Search Food...' />
        </div>
      </TopContainer>
      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>
      <FoodCardsContainer>
        <FoodCard></FoodCard>
      </FoodCardsContainer>
    </Container>
  )
}

export default App

const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`
const TopContainer = styled.section`
    min-height: 140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;

    .search{
      input{
        background-color: transparent;
        border: 1px solid red;
        padding: 11px 157px 10px 15px;
        width: 285px;
        height: 40px;
        color: white;
        border-radius: 5px;
        font-size: 16px;
      }
    }
`
const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
`
const FoodCardsContainer = styled.section`
  height: calc(100vh - 172px);
  background-image: url("/bg.png");
  background-size: cover;
`

const FoodCard = styled.div`
  
`

const Button = styled.button`
  padding: 6px 12px;
  background-color: #FF4343;
  color: white;
  border: none;
  font-size: 16px;
  border-radius: 5px;
`
