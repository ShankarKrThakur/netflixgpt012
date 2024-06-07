
import Header from './Header'
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingPopularMovie from '../hooks/useNowPlayingPopularMovie';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  const gpt = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovie();
  useNowPlayingPopularMovie();
  
  return (
    <div>
      <Header/>
      {gpt ? (<GptSearch/>) : 
      (<><MainContainer/>
      <SecondaryContainer/></>) }
      
    </div>
  )
}

export default Browse
