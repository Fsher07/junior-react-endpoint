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
  const { loading, data } = useQuery(GET_DATA);

  if (!loading) console.log(data.categories);
  return (
    <div className="Home">
      {
        loading ? (
          <div>nono</div>
        ) : (
          <p>{data.categories[0].products[0].name}</p>
        )
      }
    </div>
  );
}
