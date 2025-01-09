export const SocialLink = ({ href, iconSrc, altText }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={iconSrc} alt={altText} />
  </a>
);
