import { gql, useQuery } from "@apollo/client";

const GET_REPOS = gql`
  query {
    user(login: "RonaldoCaetano") {
      name
    }
  }
`;

const Main = () => {
  const { data, error, loading } = useQuery(GET_REPOS);

  console.log({ data, error, loading });

  return <h1>Hello</h1>;
};

export default Main;
