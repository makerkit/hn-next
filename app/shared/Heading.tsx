function Heading({ children }: React.PropsWithChildren) {
  return <h1 className={'text-2xl font-bold'}>{children}</h1>;
}

export default Heading;
