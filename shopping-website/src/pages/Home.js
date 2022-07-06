import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_DATA = gql`
query {
  categories {
    products {
      category
      name
      inStock
    }
  }
}`;

export default function Home() {
  const FETCH_DATA = useQuery(GET_DATA);

  if (!FETCH_DATA.loading) console.log(FETCH_DATA.data);
  return <div />;
}
