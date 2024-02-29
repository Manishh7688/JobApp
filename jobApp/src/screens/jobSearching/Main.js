
import React from 'react'
import DrawerScreen from './Drawer'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from './CustomDrawer'


const Drawer =  createDrawerNavigator()
const Main = () => {
  return (
    <Drawer.Navigator drawerContent={props=><CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={DrawerScreen} options={{title:"Find MyJob"}}/>
    </Drawer.Navigator>
  )
}

export default Main