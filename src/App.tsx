  import Buttons from "./components/Buttons"
  import Footer from "./components/Footer"
  import Header from "./components/Header"
  import Languages from "./components/Languages"
  import Logo from "./components/Logo"
  import SearchBar from "./components/SearchBar"

  function App() {

    return (
      <div className="flex flex-col min-h-screen bg-[#202124]">
      <Header />
      <Logo />
      <SearchBar />
      <Buttons />
      <Languages />

      {/* Pushes footer to the bottom */}
      <div className="flex-grow"></div>  

      <Footer />
    </div>
    )
  }

  export default App
