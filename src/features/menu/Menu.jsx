import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  // react knows it coming direcly from the menu route, because we define loader there
  // console.log(menu);

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// Steps: for a loader
//1. create a function where component lives for data fetching, it uses render as you fetch strategy unlike useState which fetches after render
//2. provide it on the route
//3. get the data into the component
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
