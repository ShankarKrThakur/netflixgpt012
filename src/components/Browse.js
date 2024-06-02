
import Header from './Header'
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingPopularMovie from '../hooks/useNowPlayingPopularMovie';

const Browse = () => {
    
  useNowPlayingMovie();
  useNowPlayingPopularMovie();
  
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
