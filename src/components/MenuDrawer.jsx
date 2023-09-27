import ReactDOM from "react-dom";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Menu from "../components/Menu";

const DataDrawer = (props) => {

    return (
        <Drawer
        docked={false}
        width={200}
        open={drawerState}
        onClose={toggleDrawer(false)}
        >
        <Box>
            <Menu onLogout={props.onLogout} />
        </Box>
        </Drawer>
    )
}

const MenuDrawer = (props) => {
  return (
    <React.Fragment>
        {ReactDOM.createPortal(<DataDrawer onLogout={props.onLogout}/>, document.getElementById('menu-slider'))}
    </React.Fragment>
  );
};

export default MenuDrawer;
