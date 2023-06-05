import "./appHeader.scss";
import { NavLink } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { navItems } from "../../constant/constants";
import {
  Box,
  Typography,
  Divider,
  ListItemButton,
  ListItemText,
  Link,
} from "@mui/material";
// import Link from '@mui/material/Link';

const AppHeader = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link href="/" sx={{ textDecoration: "none" }}>
          <img src="/logo.png" alt="random" />
        </Link>
      </Typography>
      <Divider />
      <List component="nav">
        <List>
          {navItems.map((item) => (
            <NavLink to={item.link}
                     className={({ isActive }) =>
                        ["nav-link", isActive ? "active" : null]
                          .filter(Boolean)
                          .join(" ")
                      }
                    >
              <ListItem key={item.label} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </List>
    </Box>

    // <header className="app__header">
    //   <div className="app__logo">
    //     <Link to="/" style={{ textDecoration: "none" }}>
    //       <img src="/logo.png" alt="random" />
    //     </Link>
    //   </div>
    //   <nav className="app__menu">
    //     <List>
    //       <ListItem>
    //         <NavLink
    //           to="/"
    //           //  end
    //           className={({ isActive }) =>
    //             ["nav-link", isActive ? "active" : null]
    //               .filter(Boolean)
    //               .join(" ")
    //           }
    //         >
    //           Main
    //         </NavLink>
    //       </ListItem>
    //       <ListItem>
    //         <NavLink
    //           to="/users"
    //           //  end
    //           className={({ isActive }) =>
    //             ["nav-link", isActive ? "active" : null]
    //               .filter(Boolean)
    //               .join(" ")
    //           }
    //         >
    //           Users
    //         </NavLink>
    //       </ListItem>
    //       <LisItem>
    //         <NavLink
    //           to="/blog"
    //           //  end
    //           className={({ isActive }) =>
    //             ["nav-link", isActive ? "active" : null]
    //               .filter(Boolean)
    //               .join(" ")
    //           }
    //         >
    //           Blog
    //         </NavLink>
    //       </LisItem>
    //     </List>
    //   </nav>
    // </header>
  );
};

export default AppHeader;
