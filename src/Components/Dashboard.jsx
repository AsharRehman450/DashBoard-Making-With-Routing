import React from "react";
import PropTypes from 'prop-types'; 
import { Box, AppBar, Toolbar, IconButton, Typography, Drawer, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import HomeIcon from '@mui/icons-material/Home'; 
import MenuIcon from '@mui/icons-material/Menu';
import GroupIcon from '@mui/icons-material/Group';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Routes, Route, useNavigate } from 'react-router-dom';
import User from "../Screens/User";
import UsersDetail from "../Screens/UsersDetail";
import Product from "../Screens/Product.jsx";
import ProductDetail from "../Screens/ProductDetail.jsx";
import GitFinderApp from "../Screens/GitFinderApp.jsx";
import Home from "../Screens/Home.jsx";
import { Dashboard } from "@mui/icons-material";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const navigate = useNavigate();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const Pages = [
        {
            name: "Home",
            icon: <HomeIcon />,
        },
        {
            name: "Users",
            icon: <GroupIcon />,
        },
        {
            name: "Product",
            icon: <ProductionQuantityLimitsIcon />,
        },
        {
            name: "GitHub Finder",
            icon: <GitHubIcon />,
        },
    ];

    const drawer = (
        <div>

            <Toolbar />
            <span style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer', paddingBottom:20 }} onClick={() => navigate("/home")}>
                <SpaceDashboardIcon size={50} />
            </span>
            <Divider />
            <List>
                {Pages.map((obj, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => navigate(`/${obj.name.toLowerCase().replace(" ", "")}`)}>
                            <ListItemIcon>{obj.icon}</ListItemIcon>
                            <ListItemText primary={obj.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    background: "linear-gradient(to right, #00b4d8, #0077b6)" // Apply the gradient here

                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    
                    <Typography variant="h6" noWrap component="div">
                        DashBoard
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>

                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    textAlign: 'center',
                }}
            >
                <Toolbar />

                {/* Routes */}
                <Routes>
                    <Route path="/home" element={<Home />} />

                    {/* Users Page Routing */}
                    <Route path="/users" element={<User />} />
                    <Route path="/users/:id" element={<UsersDetail />} />

                    {/* Product Page Routing */}
                    <Route path="/product" element={<Product />} />
                    <Route path="/product/:id" element={<ProductDetail />} />

                    {/* GitHub Finder Page Routing */}
                    <Route path="/githubFinder" element={<GitFinderApp />} />
                </Routes>
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    window: PropTypes.func,
};

export default ResponsiveDrawer;
