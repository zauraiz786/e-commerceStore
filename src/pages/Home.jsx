import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import MediaCard from "../components/Card";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/productSlice";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const dispatch = useDispatch();
  const selector = useSelector(state => state.cartQuantity);

  const handleClick = () => {
    dispatch(addToCart());
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Typography variant="h3" color="initial">
          STORE
        </Typography>
        <Badge badgeContent={selector} color="primary">
          <ShoppingCartIcon color="action" />
        </Badge>
      </Box>
      <Box className="d-flex container justify-content-center flex-wrap gap-5 mt-5">
        {data.length > 0 ? (
          data.map((item, index) => {
            return (
              //   <MediaCard
              //     key={item.id}
              //     title={item.title}
              //     body={item.description}
              //     image={item.image}
              //     price={item.price}
              //   />
              <Card sx={{ maxWidth: 345, cursor: "pointer" }} key={index}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={item.image}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body" color="text.secondary">
                    {item.description}
                    <br />
                    <br />${item.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={handleClick}>
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            );
          })
        ) : (
          <Typography variant="h5">Loading...</Typography>
        )}
      </Box>
    </>
  );
};

export default Home;
