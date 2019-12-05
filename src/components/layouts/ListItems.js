import React from 'react';
import { ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';
import { BarChart, Assessment, Dashboard, People, Layers } from '@material-ui/icons';
import { NavLink } from "react-router-dom";

const ListItems = (props) => {
    return (
        <div>
            {props.routes.map((key, i) => (
                <ListItem button className="menu-link" key={i}>
                    <NavLink to={key.path}>
                        <ListItemIcon>
                            <BarChart />
                        </ListItemIcon>
                        <ListItemText primary={key.label} />
                    </NavLink>
                </ListItem>
            ))}
            {/* <ListItem button>
                <ListItemIcon>
                    <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>

            <ListItem button>
                <ListItemIcon>
                    <People />
                </ListItemIcon>
                <ListItemText primary="Customers" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <BarChart />
                </ListItemIcon>
                <ListItemText primary="Reports" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <Layers />
                </ListItemIcon>
                <ListItemText primary="Integrations" />
            </ListItem> */}
        </div>
    );
}
const SecondaryListItems = () => {
    return (
        <div>
            <ListSubheader inset>Saved Repports</ListSubheader>
            <ListItem button>
                <ListItemIcon>
                    <Assessment />
                </ListItemIcon>
                <ListItemText primary="Current month" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <Assessment />
                </ListItemIcon>
                <ListItemText primary="Last quarter" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <Assessment />
                </ListItemIcon>
                <ListItemText primary="Year end sale" />
            </ListItem>
        </div>
    );
}

export {
    ListItems,
    SecondaryListItems
};