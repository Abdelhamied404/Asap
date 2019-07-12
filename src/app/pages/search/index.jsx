import React, { Component } from 'react';
import { connect } from "react-redux";
import { auth } from "../../../actions/user";
import { Get } from "../../../actions/search";
import Nav from "../../components/nav";
import { Button } from '@material-ui/core';
import ProfilePic from '../../components/profile-pic';

import "./search.scss";
import Footer from '../../components/footer';

class Search extends Component {
    state = {}
    componentDidMount() {
        this.props.auth();
    }

    find() {
        let q = document.querySelector(".page .search input").value;
        this.props.Get(q);
    }

    load_results(res) {
        console.log(res);
        if (res.loaded === 1) {
            let users = res.users.data;
            return users.map((user) => <div className="profile-pic"><ProfilePic {...user} /></div>);
        } else if (res.loaded === 0) {
            return <p></p>;
        } else {
            return <p>load error</p>;
        }
    }

    render() {
        return (
            <div className="page">
                <div className="search">
                    <Nav profile isAuth={this.props.isAuth} user={this.props.user} />
                    <div className="search-bar">
                        <input type="text" />
                        <Button className="main rounded" onClick={this.find.bind(this)}>Search</Button>
                    </div>
                    <div className="results">
                        {this.load_results(this.props.search)}
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ user, search }) => ({ ...user, search });
const mapDispatchToProps = dispatch => {
    return {
        auth: (next) => dispatch(auth(next)),
        Get: (q) => dispatch(Get(q))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
