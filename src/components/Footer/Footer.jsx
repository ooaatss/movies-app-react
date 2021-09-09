import {
  FooterContainer,
  FooterText,
  FooterLink,
  Heart,
} from './FooterStyles';
const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Made in <Heart>❤</Heart> by<FooterLink href='https://github.com/matiuxdev' target='_blank'> MatiuxDev</FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
