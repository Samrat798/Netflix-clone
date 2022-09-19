import Nav from "../components/MainPage/Nav";
import Banner from "../components/MainPage/Banner";
import requests from "../Api/requests";
import Row from "../components/MainPage/Row";
import "../components/MainPage/Row.css";
import Footer from "../components/Footer/Footer";

const BrowsePage = () => {
  return (
    <>
      <div className="bg-color">
        <Nav />
        <Banner />
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Tranding Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        <Footer />
      </div>
    </>
  );
};
export default BrowsePage;
