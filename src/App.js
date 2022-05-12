import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './Components/Loading';
import Navbar from './Components/Navbar';
import SearchBox from './Components/SearchBox';
import ViewIcons from './Components/ViewIcons';
import CardGrid from './Components/CardGrid';
import CardList from './Components/CardList';
import Footer from './Components/Footer';
import CardDetails from './Pages/CardDetails';
import ErrorPage from './Pages/ErrorPage';
import axios from 'axios';
import './Styles/App.css';

const url = 'https://picsum.photos/v2/list?page=1&limit=12';

function App() {

  const [ticketData, setTicketData] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios(url);
    setTicketData(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  console.log(ticketData);

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  }

  const filteredTicketData = ticketData.filter(data => {
    return data.author.toLowerCase().includes(searchField.toLowerCase());
  })


  if (isLoading) {
    return <Loading />
  }

  return (
    <Router>
      <Navbar />
      <SearchBox onSearchChange={onSearchChange} />
      <ViewIcons ticketData={filteredTicketData} />
      <Routes>
        <Route path='/' element={<CardGrid filteredTicketData={filteredTicketData} setValue={setValue} />} />
        <Route path='/list-view' element={<CardList filteredTicketData={filteredTicketData} />} />
        <Route path='/card-details' element={<CardDetails ticketData={filteredTicketData} cardValue={value} />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  )

}

export default App;