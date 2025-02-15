import logo from './logo.svg';

type LogoPropsType = {
  className?: string;
};

export function Logo({ className }: LogoPropsType) {
  return (
    <img
      src={logo}
      alt="Logo Sneakers"
      aria-hidden="true"
      className={className}
    />
  );
}
