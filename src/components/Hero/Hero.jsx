import {
  HeroContainer,
  HeroContent,
  HeroContentText,
  HeroTitle,
  HeroTitleText,
  HeroText,
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
          </HeroContentText>
        </HeroContent>
      </HeroContainer>
    </div>
  );
};

export default Hero;
