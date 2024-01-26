import CountComponent from "./Reducer";


const Home = () =>{
    return(
        <div>
            <h1>This page is your Home Page.</h1>
            
        <h1>Welcome To Our Website!!</h1>
        <body style={body}>
            <CountComponent/>
            
            </body>
        
           
        </div>

        
        
    )
}

const body = {
    'background-color': '#ffffff',
    'background-image': 'linear-gradient(300deg, #ffffff 0%, #5899e2 74%)'
  };
  



export default Home;

