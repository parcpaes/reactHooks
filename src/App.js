import React from 'react';
import NavBar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <NavBar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
