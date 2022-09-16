import Head from "next/head";

type PropTypes = {
  title: string;
};

const Title = ({ title }: PropTypes) => {
  return (
    <Head>
      <title>erthasys | {title}</title>
    </Head>
  );
};

export default Title;
