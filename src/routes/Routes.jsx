import {
    Route,
    Switch,
} from "react-router-dom";
import { Frontpage} from "../pages/FrontPage/FrontPage";
import { HotelsandDesPage } from "../pages/HotelsandDesPage/HotelsandDesPage";
import { LoginPage} from "../pages/LoginPage/LoginPage";
import { ResevationsPage } from "../pages/ResevationsPage/ResevationsPage";
import { RoomPage } from "../pages/RoomPage/RoomPage";
import { Comments } from '../pages/comments/Comments';


export function Routes () {

    return(
        <Switch>
            <Route exact path="/">
                <Frontpage/>
            </Route>
            <Route exact path="/frontpage">
                <Frontpage/>
            </Route>

            <Route path='/comments/:id'>
                <Comments />
            </Route>

            <Route exact path="/hotelsanddespage">
                <HotelsandDesPage/>
            </Route>

            <Route exact path="/hotelsanddespage/:land">
                <HotelsandDesPage/>
            </Route>

            <Route exact path="/hotelsanddespage/:land/:city">
                <HotelsandDesPage/>
            </Route>

            <Route exact path="/roompage">
                <RoomPage/>
            </Route>

            <Route exact path="/resevationspage">
                <ResevationsPage/>
            </Route>

            <Route exact path="/loginpage">
                <LoginPage/>
            </Route>
        </Switch>
    )
}