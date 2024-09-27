import { useContext } from "react";
import { UserContext } from "../UserProvider";

export const Home = () => {
    const { user } = useContext(UserContext);
        

    return (
        <center>
            <h1>Bienvenido al sistema:  {user.nombre}</h1>
        </center>
    )
}
