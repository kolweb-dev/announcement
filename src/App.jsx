import React from 'react';
import {connect} from "react-redux";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Loader from "./Loader";
import {loadAnnouncement} from "./AnnouncementStore";
import SliderAnnouncements from "./SliderAnnouncements";
import AnnouncementsTop from "./AnnouncementsTop";
import Apple from "./Сategories/Apple";
import Bitcoin from "./Сategories/Bitcoin";
import Tesla from "./Сategories/Tesla";
import Page404 from "./Page404";
import CustomRoute from "./CustomRoute";
import Footer from "./Footer";


class App extends React.Component {
    state = {
        apple: [],
        tesla: [],
        bitcoin: [],
        isLoading: false,
        hasError: false
    }

    componentDidMount() {
        const {loadAnnouncement} = this.props;
        loadAnnouncement();

    }

    render() {
        const {isLoading, hasError} = this.props;

        if (isLoading) {
            return <Loader/>
        }
        if (hasError) {
            return <p>Error.....</p>
        }


        return (
            <div>
                <Router>
                    <Switch>
                        <CustomRoute
                            exact
                            path="/"
                            component={() => (
                                <>
                                    <AnnouncementsTop/>
                                    <SliderAnnouncements/>
                                    <Footer/>
                                </>
                            )}/>
                        <CustomRoute
                            exact
                            path="/apple"
                            component={Apple}/>
                        <CustomRoute
                            exact
                            path="/bitcoin"
                            component={Bitcoin}/>
                        <CustomRoute
                            exact
                            path="/tesla"
                            component={Tesla}/>

                        <Route component={Page404}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    apple: state.apple,
    bitcoin: state.bitcoin,
    tesla: state.tesla,
    isLoading: state.isLoading,
    hasError: state.hasError
});
const mapDispatchToProps = dispatch => ({
    loadAnnouncement: () => dispatch(loadAnnouncement())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);