import { createContext, useState ,useEffect} from "react";

export const RoomInfoContext = createContext("");

export default function RoomInfoProvider({children}){
    // const [token , setToken] = useState(localStorage.getItem("token"));
      const [rooms , setRooms] = useState([]);

    // function logOut(){
    //     setToken(null);
    //     // localStorage.setItem("token",null)
    //     localStorage.removeItem("token")
    // }

    async function getRooms() {
        try{
            const options = {
              url:'https://backend.smartvision4p.com/hotel/public/api/rooms',
              method:'GET',
          }    
          
          let {data} = await axios.request(options);
          setRooms(data.data.data);
          console.log(data.data.data);
          
  
          setCount(data.data.meta.total)
        }catch(error){
          console.log(error);
          
        }
        
  
      }
  
      useEffect(()=>{
          getRooms()
      },[])
  

    return <RoomInfoContext.Provider value={{rooms }} >
          {children}
    </RoomInfoContext.Provider>
}