import React, { useContext, createContext, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import SignInPage from "pages/SignInPage";
import GuestGuard from "components/GuestGuard";
import AuthGuard from "components/AuthGuard";
import Mainlobby from "pages/MainLobby";
import Ats from "pages/Ats";
import ScientificExchange from "pages/ScientificExchange";
import CoreDiagnosticSolutions from "pages/CoreDiagnosticSolutions";
import PointOfCare from "pages/PointOfCare";
import Univants from "pages/Univants";

export default function Routes({ appProps }) {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/login" />
            </Route>
            <Route exact path="/login">
                <GuestGuard>
                    <SignInPage />
                </GuestGuard>
            </Route>
            
            <AuthGuard>
                <Route exact path="/mainlobby" component={Mainlobby} />
                <Route exact path="/pointofcare" component={PointOfCare} />
                <Route exact path="/ats" component={Ats} />
                <Route exact path="/univants" component={Univants} />
                <Route exact path="/corediagnosticsolutions" component={CoreDiagnosticSolutions} />
                <Route exact path="/scientificexchange" component={ScientificExchange} />
                {/* <Route exact path="/pointofcare" component={PointOfCare} /> */}
            </AuthGuard>
        </Switch>
    )
}