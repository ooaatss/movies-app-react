import { Button } from '../../GlobalStyles';
import {
  HeroContainer,
  HeroContent,
  HeroContentText,
  HeroTitle,
  HeroTitleText,
  HeroText,
  HeroBtn,
} from './HeroStyles';
const Hero = () => {
  return (
    <div>
      <HeroContainer>
        <HeroContent>
          <HeroContentText>
            <HeroTitle>
              <HeroTitleText>Rexty Movie Searcher</HeroTitleText>
            </HeroTitle>
            <HeroText>
              Search info about your favorite movies and TV shows.
            </HeroText>
            <HeroBtn to='#movies'>
              <Button onHover  >
                Show Movies
              </Button>
            </HeroBtn>
          </HeroContentText>
        </HeroContent>
      </HeroContainer>
    </div>
  );
};

export default Hero;
