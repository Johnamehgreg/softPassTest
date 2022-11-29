import { HashLoader } from "react-spinners";

const AppPageLoader = () => {
    return (
        <div className="h-full bg-white flex w-full items-center justify-center">
            <HashLoader size={70} color="#E1217A" />
        </div>
    )
}

export default AppPageLoader