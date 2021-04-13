import {Route} from "react-router-dom";
import {Profile} from "../pages/Profile/Profile";
import React from "react";
import { Error404 } from "../pages/404/404";
import { Login } from "../pages/auth/login/Login";
import {Registr} from "../pages/auth/registr/Registr";
import { PasswordRecovery } from "../pages/auth/passwordRecovery/PasswordRecovery";
import { SetPassword } from "../pages/auth/setPassword/SetPassword";
import {Packs} from "../pages/Packs/Profile";
import { Cards } from "../pages/Cards/Profile";



export const Routes = () => {
    return (
        <div>
            <Route path={'/login'} render={() => <Login/>}/>
            <Route path={'/passwordRecovery'} render={() => <PasswordRecovery/>}/>
            <Route path={'/registr'} render={() => <Registr/>}/>
            <Route path={'/setPassword'} render={() => <SetPassword/>}/>
            <Route path={'/profile'} render={() => <Profile/>}/>
            <Route path={'/packs'} render={() => <Packs />}/>
            <Route path={'/cards'} render={() => <Cards/>}/>
            <Route path={'/404'} render={() => <Error404/>}/>
        </div>
    )

}
