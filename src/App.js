import {connect} from "react-redux";
import Controllers from "./Controllers";


function App(props) {
    return (
        <div>
            AppVersion:{props.appVersion}
            <br/>
            Count:{props.myCount}
            <br/>
            <Controllers/>

        </div>
    );
}

const mapStateToProps = (state) => ({
    myCount: state.count,
    appVersion: state.appVers
})
export default connect(mapStateToProps)(App);
