import {
  useState,
  useEffect,
  useCallback,
  useContext,
  createContext,
} from "react";
import axios from "axios";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { useParams } from "react-router-dom";
import Products from "./Pages/Products/Products";
import Layout from "./Components/Layout/Layout";
import Users from "./Pages/Users/Users";
import Inredients from "./Pages/Inredients/Inredients";
import Recipies from "./Pages/Recipies/Recipies";
import Menu from "./Pages/Menu/Menu";
import Cart from "./Pages/Cart/Cart";
import About from "./Pages/About us/About us";
import Rooms from "./Pages/Rooms/Rooms";
import Places from "./Pages/Places/Places";
import Contact from "./Pages/Contact us/Contact us";
import Login from "./Pages/Login/Login";
import Ref from "./Pages/Ref/Ref";
import FilteredRooms from "./Pages/FilteredRooms/FilteredRooms";
// import useMenu from './hooks/useMenu'
import RoomDetails from "./Components/RoomDetails/RoomDetails";
import { HelmetProvider } from "react-helmet-async";
import Reservation from "./Pages/Reservation/Reservation";
import Payment from "./Pages/Payment/Payment";
import PaymentInfo from "./Pages/PaymentInfo/PaymentInfo";
// import RoomInfoProvider from "./context/RoomInfoContext/RoomInfoContext";

// import Counter from './Components/Counter/Counter'

const pageSize = 3;
export const ThemeContext = createContext(null);
export const RoomInfoContext = createContext();
function App() {
  //  const {theme} = useContext(ThemeContext);
  // const navigate = useNavigate();
 
  const [theme, setTheme] = useState("light");
  const [roomInfo ,setRoomInfo] = useState();
 const [selectedRoom, setSelectedRoom] = useState(null)

  const toggleTheme =()=>{
    setTheme((theme)=> theme === 'light' ? 'dark' : 'light');
  }

  // let { currentCategory, rooms,setCurrentCategory} = useMenu;
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      discountPercentage: 7.17,
      rating: 4.94,
      stock: 5,
      inCart: false,
      tags: ["beauty", "mascara"],
      brand: "Essence",
      sku: "RCH45Q1A",
      weight: 2,
      dimensions: {
        width: 23.17,
        height: 14.43,
        depth: 28.01,
      },

      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "Low Stock",
      reviews: [
        {
          rating: 2,
          comment: "Very unhappy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "John Doe",
          reviewerEmail: "john.doe@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Not as described!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nolan Gonzalez",
          reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Scarlett Wright",
          reviewerEmail: "scarlett.wright@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 24,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "9164035109868",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      description:
        "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      category: "food",
      price: 19.99,
      discountPercentage: 5.5,
      rating: 3.28,
      stock: 44,
      inCart: false,
      tags: ["beauty", "eyeshadow"],
      brand: "Glamour Beauty",
      sku: "MVCFH27F",
      weight: 3,
      dimensions: {
        width: 12.42,
        height: 8.63,
        depth: 29.13,
      },
      warrantyInformation: "1 year warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Liam Garcia",
          reviewerEmail: "liam.garcia@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Very disappointed!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nora Russell",
          reviewerEmail: "nora.russell@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Elena Baker",
          reviewerEmail: "elena.baker@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 32,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "2817839095220",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
    },
    {
      id: 3,
      title: "Powder Canister",
      description:
        "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      category: "paper",
      price: 14.99,
      discountPercentage: 18.14,
      rating: 3.82,
      stock: 59,
      inCart: false,
      tags: ["beauty", "face powder"],
      brand: "Velvet Touch",
      sku: "9EN8WLT2",
      weight: 8,
      dimensions: {
        width: 24.16,
        height: 10.7,
        depth: 11.07,
      },
      warrantyInformation: "2 year warranty",
      shippingInformation: "Ships in 1-2 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Very happy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Ethan Thompson",
          reviewerEmail: "ethan.thompson@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Levi Hicks",
          reviewerEmail: "levi.hicks@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Hazel Gardner",
          reviewerEmail: "hazel.gardner@x.dummyjson.com",
        },
      ],
      returnPolicy: "60 days return policy",
      minimumOrderQuantity: 25,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "0516267971277",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
    },
  ]);

  const { id } = useParams();
  //   const [roomInfo, setRoomInfo] = useState(null);

  //   useEffect(() => {
  //       async function getRoomDetails() {
  //           try {
  //               const options = {
  //                   url: `https://backend.smartvision4p.com/hotel/public/api/rooms/${id}`,
  //                   method: 'GET',
  //               };

  //               const { data } = await axios.request(options);
  //               console.log('Room details fetched:', data);
  //               setRoomInfo(data.data.single); // Assuming the desired data is in this nested structure
  //               setSimilarRooms(data.data.same);
  //               console.log(similarRooms);

  //           } catch (error) {
  //               console.error('Error fetching room details:', error);
  //           }
  //       }
  //       getRoomDetails();
  //   }, [id]);

  // const [count,setCount] = useState(0);

  // const [rooms, setRooms] = useState([]);

  // const {setRooms} = useContext(RoomInfoContext)

  async function getRooms() {
    try {
      const options = {
        url: "https://backend.smartvision4p.com/hotel/public/api/rooms",
        method: "GET",
      };

      let { data } = await axios.request(options);
      // setRooms(data.data.data);
      setRoomInfo(data.data.data)
      console.log(data.data.data);

      setCount(data.data.meta.total);
    } catch (error) {
      console.log(error);
    }
  }

  // export default function RoomInfoProvider({children}){
   
//   useEffect(()=>{
//     async function getRoomDetails() {
//     try{
//          const options ={
//         url :`https://backend.smartvision4p.com/hotel/public/api/rooms/${id}`,
//         method :'GET',
//         }

//     let data = await axios.request(options);
//     console.log(data);
//     console.log(data.data.data.single);
//     setSelectedRoom(data.data.data.single)
//     console.log(roomInfo)
//     // setSimilarRooms(data.data.data.same);
//     // console.log(data.data.data.same);
    
    
//     }catch(error){
//     console.log(error);
    
// }

//     }
//     getRoomDetails()
// },[id])  

  // }

  useEffect(() => {
    getRooms();
  }, []);

  // const handleClick = (id) =>{
  //   roomInfo.filter((room)=> room.id === id ? room : '') 
  //  }

  const [noOfPages, setNoOfPages] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [searchedRooms, setSearchedRooms] = useState();
  // const [priceRange ,setPriceRange] = useState();

  const [cartProducts, setCartProducts] = useState([
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      discountPercentage: 7.17,
      rating: 4.94,
      stock: 5,
      inCart: false,
      tags: ["beauty", "mascara"],
      brand: "Essence",
      sku: "RCH45Q1A",
      weight: 2,
      dimensions: {
        width: 23.17,
        height: 14.43,
        depth: 28.01,
      },

      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "Low Stock",
      reviews: [
        {
          rating: 2,
          comment: "Very unhappy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "John Doe",
          reviewerEmail: "john.doe@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Not as described!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nolan Gonzalez",
          reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Scarlett Wright",
          reviewerEmail: "scarlett.wright@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 24,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "9164035109868",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      description:
        "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      category: "beauty",
      price: 19.99,
      discountPercentage: 5.5,
      rating: 3.28,
      stock: 44,
      inCart: false,
      tags: ["beauty", "eyeshadow"],
      brand: "Glamour Beauty",
      sku: "MVCFH27F",
      weight: 3,
      dimensions: {
        width: 12.42,
        height: 8.63,
        depth: 29.13,
      },
      warrantyInformation: "1 year warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Liam Garcia",
          reviewerEmail: "liam.garcia@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Very disappointed!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nora Russell",
          reviewerEmail: "nora.russell@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Elena Baker",
          reviewerEmail: "elena.baker@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 32,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "2817839095220",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
    },
    {
      id: 3,
      title: "Powder Canister",
      description:
        "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      category: "beauty",
      price: 14.99,
      discountPercentage: 18.14,
      rating: 3.82,
      stock: 59,
      inCart: false,
      tags: ["beauty", "face powder"],
      brand: "Velvet Touch",
      sku: "9EN8WLT2",
      weight: 8,
      dimensions: {
        width: 24.16,
        height: 10.7,
        depth: 11.07,
      },
      warrantyInformation: "2 year warranty",
      shippingInformation: "Ships in 1-2 business days",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Very happy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Ethan Thompson",
          reviewerEmail: "ethan.thompson@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Levi Hicks",
          reviewerEmail: "levi.hicks@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Hazel Gardner",
          reviewerEmail: "hazel.gardner@x.dummyjson.com",
        },
      ],
      returnPolicy: "60 days return policy",
      minimumOrderQuantity: 25,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "0516267971277",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
    },
    {
      id: 4,
      title: "Red Lipstick",
      description:
        "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      category: "beauty",
      price: 12.99,
      discountPercentage: 19.03,
      rating: 2.51,
      stock: 68,
      inCart: false,
      tags: ["beauty", "lipstick"],
      brand: "Chic Cosmetics",
      sku: "O5IF1NTA",
      weight: 5,
      dimensions: {
        width: 14.37,
        height: 13.94,
        depth: 14.6,
      },
    },
  ]);

  const changeCategory = (category) => {
    setCurrentCategory(category);
    console.log("useEffect");
  };

  const changeCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = useCallback((id) => {
    // clone
    let newItems = [...products];
    newItems = newItems.filter((product) =>
      product.id === id ? { ...product, inCart: false } : product
    );
    setProducts(newItems);
    console.log("deleeeeeeeeeeeeeete...");
  });

  const handleIncrement = useCallback((id) => {
    let newProducts = [...products];
    newProducts = newProducts.filter((product) =>
      product.id === id ? { ...product, count: count + 1 } : product
    );
    setProducts(newProducts);
  });

  async function searchRooms(priceRange) {
    try {
      let options = {
        url: `https://backend.smartvision4p.com/hotel/public/api/rooms?from_price=0&to_price=${priceRange}`,
        method: "GET",
      };
      let { data } = await axios.request(options);
      let searched = data.data.data.filter(
        (item) => item.price_per_day < priceRange
      );
      setSearchedRooms(searched);
      console.log(searched);

      // navigate("/filteredRooms");
    } catch (error) {
      console.log(error);
    }
  }

  const AddItemToCart = useCallback((id) => {
    console.log(id);
    //clone
    let newProducts = [...products];
    //edit
    newProducts = newProducts.map((item) =>
      item.id === id ? { ...item, inCart: !item.inCart } : item
    );

    let cartItems = newProducts.map((item) =>
      item.inCart === true ? item : ""
    );
    console.log(newProducts);
    console.log("cart items : ", cartItems);

    //update
    setProducts(newProducts);
  });

  // async function searchRooms() {
  //   let options ={
  //     url:`https://backend.smartvision4p.com/hotel/public/api/rooms?from_price=0&to_price=${priceRange}`,
  //     method:'GET'
  //   }

  //   let {data} = await axios.request(options);
  //   let searched = data.data.data.filter((item)=> item.price_per_day < priceRange)
  //   setSearchedRooms(searched);
  //   console.log(searched);

  //   navigate('/filteredrooms');

  // }
  // searchRooms()

  // useEffect(()=>{
  //   searchRooms()
  // },[priceRange])

  //    useEffect(() => {
  //   async function getMenu() {
  //     try {
  //       let res = await axios.get(currentCategory=== 0? `http://localhost:3000/menu` :`http://localhost:3000/menu?category =${currentCategory}`);
  //       console.log(res);
  //       setProducts(res.data);
  //       // calculate number of pages
  //       let noOfPagess = Math.ceil(res.data.length / pageSize);
  //       setNoOfPages(noOfPagess);
  //       console.log(noOfPagess);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getMenu();
  //   console.log("effect..........");
  // }, [])

  //

  useEffect(() => {
    setCartProducts(cartItems);
  }, []);

  let cartItems = products.filter((product) => product.inCart === true);
  console.log(cartItems);

  let noOfCartItems = cartItems.filter((item) =>
    item.inCart === true ? item : ""
  ).length;
  console.log(noOfCartItems);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout noOfCartItems={noOfCartItems} />,
      children: [
        { path: "/", index: true, element: <Home /> },
        { path: "/home", element: <Home searchRooms={searchRooms} /> },
        { path: "/about us", element: <About /> },
        { path: "/rooms", element: <Rooms /> },
        { path: "/places", element: <Places /> },
        { path: "/contact us", element: <Contact /> },
        { path: "/products", element: <Products /> },
        { path: "/paymentinfo", element: <PaymentInfo /> },
        { path: "/ref", element: <Ref /> },
        { path: "/roomdetails", element: <RoomDetails /> },
        { path: "/rooms/:id", element: <RoomDetails /> },
        { path: "/recipies", element: <Recipies /> },
        {path: "/reservation/:id", element: <Reservation />},
        { path: "/reservation", element: <Reservation /> },
        { path: "/payment", element: <Payment /> },
        { path: "/users", element: <Users /> },
        {
          path: "/filteredrooms",
          element: <FilteredRooms searchedRooms={searchedRooms} />,
        },
        { path: "/inredients", element: <Inredients /> },
        {
          path: "/menu",
          element: (
            <Menu
              products={products}
              category={category}
              pageSize={pageSize}
              currentPage={currentPage}
              noOfPages={noOfPages}
              AddItemToCart={AddItemToCart}
              changeCurrentPage={changeCurrentPage}
              changeCategory={changeCategory}
              currentCategory={currentCategory}
              setProducts={setProducts}
              cartProducts={cartProducts.filter((item) => item.inCart === true)}
            />
          ),
        },

        {
          path: "/cart",
          element: (
            <Cart
              cartProducts={cartProducts}
              counters={products.filter((item) => item.inCart)}
              cartItems={cartItems}
              handleDelete={handleDelete}
              handleIncrement={handleIncrement}
            />
          ),
        },

        { path: "/login", element: <Login /> },
      ],
    },
  ]);

  return (
    <>
      {/* <h2>{theme}</h2> */}
      <HelmetProvider>
        <ThemeContext.Provider value={{ theme ,toggleTheme }}>
          <RoomInfoContext.Provider value={{roomInfo,getRooms,selectedRoom ,setSelectedRoom }}>
            <RouterProvider router={routes}></RouterProvider>
          </RoomInfoContext.Provider>
        </ThemeContext.Provider >
      </HelmetProvider>
    </>
  );
}

export default App;
