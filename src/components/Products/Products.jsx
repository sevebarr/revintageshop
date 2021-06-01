/** @format */

import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";
// you will want to import Products from a CSV file probably instead
const products = [
  {
    id: 1,
    name: "Shoes",
    image: "https://picsum.photos/200",
    description: "Running Shoes",
    price: 15,
  },
  {
    id: 2,
    name: "Ahoes",
    image: "https://picsum.photos/200",
    description: "Aunning Shoes",
    price: 14,
  },
  {
    id: 3,
    name: "Bhoes",
    image: "https://picsum.photos/200",
    description: "Bunning Shoes",
    price: 13,
  },
  {
    id: 4,
    name: "Choes",
    image: "https://picsum.photos/200",
    description: "Cunning Shoes",
    price: 12,
  },
];
const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={5} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
