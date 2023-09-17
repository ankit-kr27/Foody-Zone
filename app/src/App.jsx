import { useEffect, useState } from 'react'
import './App.css'
import styled from 'styled-components'
import SearchResults from './components/SearchResults/SearchResults';

const BASE_URL = "http://localhost:9000/";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true)
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setLoading(false)
      } catch (err) {
        setError("Unable to fetch data!!!");
      }
    }
    console.log(data);
    fetchFoodData();
  }, []);

  // [
  //   {
  //     "name": "Boilded Egg",
  //     "price": 10,
  //     "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     "image": "/images/egg.png",
  //     "type": "breakfast"
  //   }
  // ]

  if (error) return <div>{error}</div>
  if (loading) return <div>{"Loading..."}</div>
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
      <SearchResults/>
    </Container>
  )
}

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
  margin-bottom: 30px;
`

const Button = styled.button`
  padding: 6px 12px;
  background-color: #FF4343;
  color: white;
  border: none;
  font-size: 16px;
  border-radius: 5px;
`
