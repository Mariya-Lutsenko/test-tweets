import { Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import TweetsPage from "pages/TweetsPage/TweetsPage";


const UserRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/tweets" element={<TweetsPage/>}/>
            <Route path="*" element={<HomePage/>}/>
        </Routes>
    )
}
export default UserRoutes;